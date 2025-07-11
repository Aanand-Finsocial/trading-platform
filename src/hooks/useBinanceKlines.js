import { useState, useEffect } from 'react'
import { binanceService, BinanceService } from '../services/binanceApi'

export const useBinanceKlines = (pair, timeFrame, limit = 100) => {
  const [klineData, setKlineData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    const fetchKlines = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const symbol = BinanceService.formatSymbol(pair)
        const interval = BinanceService.formatInterval(timeFrame)
        
        const data = await binanceService.getKlines(symbol, interval, limit)
        
        if (mounted) {
          setKlineData(data)
          setIsLoading(false)
        }
      } catch (err) {
        if (mounted) {
          setError(err.message)
          setIsLoading(false)
        }
      }
    }

    fetchKlines()

    return () => {
      mounted = false
    }
  }, [pair, timeFrame, limit])

  return { klineData, isLoading, error }
}

// Generate fallback candlestick data
const generateFallbackData = (limit = 100) => {
  const now = Date.now()
  const interval = 24 * 60 * 60 * 1000 // 1 day
  const basePrice = 104000 // Base price for BTC
  
  const data = []
  
  for (let i = limit - 1; i >= 0; i--) {
    const time = now - (i * interval)
    const volatility = 0.02 // 2% volatility
    
    const open = basePrice * (1 + (Math.random() - 0.5) * volatility)
    const close = open * (1 + (Math.random() - 0.5) * volatility)
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
      closeTime: time + interval - 1
    })
  }
  
  return data
}
