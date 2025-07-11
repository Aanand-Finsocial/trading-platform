const BINANCE_API_URL = 'https://api.binance.com/api/v3'
const BINANCE_WS_URL = 'wss://stream.binance.com:9443/ws'

export class BinanceService {
  constructor() {
    this.subscribers = new Map()
    this.pollingIntervals = new Map()
    this.websockets = new Map()
  }

  // Get 24hr ticker statistics
  async getTicker(symbol) {
    try {
      const response = await fetch(`${BINANCE_API_URL}/ticker/24hr?symbol=${symbol}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      return {
        symbol: data.symbol,
        price: parseFloat(data.lastPrice),
        priceChange: parseFloat(data.priceChange),
        priceChangePercent: parseFloat(data.priceChangePercent),
        high: parseFloat(data.highPrice),
        low: parseFloat(data.lowPrice),
        volume: parseFloat(data.volume),
        quoteVolume: parseFloat(data.quoteVolume),
        openPrice: parseFloat(data.openPrice),
        count: data.count
      }
    } catch (error) {
      console.warn('Using mock data due to API error:', error.message)
      return this.getMockTicker(symbol)
    }
  }

  // Subscribe to real-time price updates using WebSocket
  subscribeToPrice(symbol, callback) {
    const key = symbol.toLowerCase()
    
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set())
    }
    
    this.subscribers.get(key).add(callback)
    
    // Start WebSocket if not already started
    if (!this.websockets.has(key)) {
      this.startWebSocket(symbol)
    }
  }

  // Start WebSocket connection for real-time ticker updates
  startWebSocket(symbol) {
    const key = symbol.toLowerCase()
    
    try {
      const wsUrl = `${BINANCE_WS_URL}/${key}@ticker`
      const ws = new WebSocket(wsUrl)
      
      ws.onopen = () => {
        console.log(`WebSocket connected for ${symbol}`)
      }
      
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          const ticker = {
            symbol: data.s,
            price: parseFloat(data.c),
            priceChange: parseFloat(data.P),
            priceChangePercent: parseFloat(data.P),
            high: parseFloat(data.h),
            low: parseFloat(data.l),
            volume: parseFloat(data.v),
            quoteVolume: parseFloat(data.q),
            openPrice: parseFloat(data.o),
            count: parseInt(data.c)
          }
          
          const callbacks = this.subscribers.get(key)
          if (callbacks) {
            callbacks.forEach(callback => {
              try {
                callback(ticker)
              } catch (error) {
                console.error('Error in callback:', error)
              }
            })
          }
        } catch (error) {
          console.error('Error parsing WebSocket data:', error)
        }
      }
      
      ws.onerror = (error) => {
        console.error('WebSocket error:', error)
        // Fallback to polling on WebSocket error
        this.startPollingFallback(symbol)
      }
      
      ws.onclose = () => {
        console.log(`WebSocket closed for ${symbol}`)
        this.websockets.delete(key)
        // Attempt to reconnect after 5 seconds if there are still subscribers
        if (this.subscribers.has(key) && this.subscribers.get(key).size > 0) {
          setTimeout(() => {
            this.startWebSocket(symbol)
          }, 5000)
        }
      }
      
      this.websockets.set(key, ws)
    } catch (error) {
      console.error('Failed to create WebSocket:', error)
      // Fallback to polling
      this.startPollingFallback(symbol)
    }
  }

  // Fallback polling method
  startPollingFallback(symbol) {
    const key = symbol.toLowerCase()
    
    if (this.pollingIntervals.has(key)) return // Already polling
    
    const poll = async () => {
      try {
        const ticker = await this.getTicker(symbol)
        const callbacks = this.subscribers.get(key)
        
        if (callbacks && callbacks.size > 0) {
          callbacks.forEach(callback => {
            try {
              callback(ticker)
            } catch (error) {
              console.error('Error in callback:', error)
            }
          })
        }
      } catch (error) {
        // Silently handle errors
      }
    }

    // Initial poll
    poll()
    
    // Set up interval (poll every 5 seconds)
    const intervalId = setInterval(poll, 5000)
    this.pollingIntervals.set(key, intervalId)
  }

  // Unsubscribe from price updates
  unsubscribeFromPrice(symbol, callback) {
    const key = symbol.toLowerCase()
    const callbacks = this.subscribers.get(key)
    
    if (callbacks) {
      callbacks.delete(callback)
      
      if (callbacks.size === 0) {
        // Close WebSocket if no more subscribers
        const ws = this.websockets.get(key)
        if (ws) {
          ws.close()
          this.websockets.delete(key)
        }
        
        // Stop polling if no more subscribers
        const intervalId = this.pollingIntervals.get(key)
        if (intervalId) {
          clearInterval(intervalId)
          this.pollingIntervals.delete(key)
        }
        
        this.subscribers.delete(key)
      }
    }
  }

  // Get kline/candlestick data using Binance API
  async getKlines(symbol, interval, limit = 100) {
    try {
      const response = await fetch(
        `${BINANCE_API_URL}/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`
      )
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      return data.map(kline => ({
        openTime: kline[0],
        open: parseFloat(kline[1]),
        high: parseFloat(kline[2]),
        low: parseFloat(kline[3]),
        close: parseFloat(kline[4]),
        volume: parseFloat(kline[5]),
        closeTime: kline[6]
      }))
    } catch (error) {
      console.warn('Using mock kline data due to API error:', error.message)
      return this.getMockKlines(symbol, interval, limit)
    }
  }

  // Subscribe to real-time kline updates
  subscribeToKlines(symbol, interval, callback) {
    const key = `${symbol.toLowerCase()}@kline_${interval}`
    
    try {
      const wsUrl = `${BINANCE_WS_URL}/${key}`
      const ws = new WebSocket(wsUrl)
      
      ws.onopen = () => {
        console.log(`Kline WebSocket connected for ${symbol} ${interval}`)
      }
      
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          const kline = data.k
          
          const candlestick = {
            openTime: kline.t,
            open: parseFloat(kline.o),
            high: parseFloat(kline.h),
            low: parseFloat(kline.l),
            close: parseFloat(kline.c),
            volume: parseFloat(kline.v),
            closeTime: kline.T,
            isFinal: kline.x // true when kline is closed
          }
          
          callback(candlestick)
        } catch (error) {
          console.error('Error parsing kline WebSocket data:', error)
        }
      }
      
      ws.onerror = (error) => {
        console.error('Kline WebSocket error:', error)
      }
      
      ws.onclose = () => {
        console.log(`Kline WebSocket closed for ${symbol} ${interval}`)
      }
      
      return ws
    } catch (error) {
      console.error('Failed to create kline WebSocket:', error)
      return null
    }
  }

  // Get mock ticker data as fallback
  getMockTicker(symbol) {
    const basePrice = symbol.includes('BTC') ? 104000 : symbol.includes('ETH') ? 3800 : 2000
    const change = (Math.random() - 0.5) * 0.02
    
    return {
      symbol: symbol,
      price: basePrice * (1 + change),
      priceChange: basePrice * change,
      priceChangePercent: change * 100,
      high: basePrice * (1 + Math.abs(change) + 0.005),
      low: basePrice * (1 - Math.abs(change) - 0.005),
      volume: Math.random() * 1000 + 500,
      quoteVolume: Math.random() * 50000000 + 10000000,
      openPrice: basePrice,
      count: Math.floor(Math.random() * 100000) + 50000
    }
  }

  // Generate mock kline data
  getMockKlines(symbol, interval, limit = 100) {
    const now = Date.now()
    const intervalMs = this.getIntervalMs(interval)
    const basePrice = symbol.includes('BTC') ? 104000 : symbol.includes('ETH') ? 3800 : 2000
    
    const data = []
    let currentPrice = basePrice
    
    for (let i = limit - 1; i >= 0; i--) {
      const time = now - (i * intervalMs)
      const volatility = 0.01
      
      const priceChange = (Math.random() - 0.5) * volatility
      const open = currentPrice
      const close = open * (1 + priceChange)
      const high = Math.max(open, close) * (1 + Math.random() * volatility * 0.5)
      const low = Math.min(open, close) * (1 - Math.random() * volatility * 0.5)
      const volume = Math.random() * 1000 + 500
      
      data.push({
        openTime: time,
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume: parseFloat(volume.toFixed(2)),
        closeTime: time + intervalMs - 1
      })
      
      currentPrice = close
    }
    
    return data
  }

  // Get interval in milliseconds
  getIntervalMs(interval) {
    const intervals = {
      '1s': 1000,
      '1m': 60 * 1000,
      '3m': 3 * 60 * 1000,
      '5m': 5 * 60 * 1000,
      '15m': 15 * 60 * 1000,
      '30m': 30 * 60 * 1000,
      '1h': 60 * 60 * 1000,
      '2h': 2 * 60 * 60 * 1000,
      '4h': 4 * 60 * 60 * 1000,
      '6h': 6 * 60 * 60 * 1000,
      '8h': 8 * 60 * 60 * 1000,
      '12h': 12 * 60 * 60 * 1000,
      '1d': 24 * 60 * 60 * 1000,
      '3d': 3 * 24 * 60 * 60 * 1000,
      '1w': 7 * 24 * 60 * 60 * 1000,
      '1M': 30 * 24 * 60 * 60 * 1000
    }
    return intervals[interval] || intervals['1d']
  }

  // Convert trading pair to Binance symbol format
  static formatSymbol(pair) {
    return pair.replace('/', '').toUpperCase()
  }

  // Convert time frame to Binance interval
  static formatInterval(timeFrame) {
    const intervalMap = {
      '1s': '1s',
      '15m': '15m',
      '1H': '1h',
      '4H': '4h',
      '1D': '1d',
      '1W': '1w'
    }
    return intervalMap[timeFrame] || '1d'
  }

  // Clean up all connections
  cleanup() {
    // Close all WebSockets
    this.websockets.forEach((ws) => {
      ws.close()
    })
    this.websockets.clear()
    
    // Clear all polling intervals
    this.pollingIntervals.forEach((intervalId) => {
      clearInterval(intervalId)
    })
    this.pollingIntervals.clear()
    
    // Clear subscribers
    this.subscribers.clear()
  }
}

export const binanceService = new BinanceService()

// Cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    binanceService.cleanup()
  })
}

