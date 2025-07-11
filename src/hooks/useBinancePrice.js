import { useState, useEffect, useCallback } from 'react'
import { binanceService, BinanceService } from '../services/binanceApi'

export const useBinancePrice = (pair) => {
  const [priceData, setPriceData] = useState({
    price: 0,
    priceChange: 0,
    priceChangePercent: 0,
    high: 0,
    low: 0,
    volume: 0,
    quoteVolume: 0,
    openPrice: 0,
    isLoading: true,
    error: null
  })

  const symbol = BinanceService.formatSymbol(pair)

  // Callback for price updates
  const handlePriceUpdate = useCallback((data) => {
    setPriceData({
      price: data.price,
      priceChange: data.priceChange,
      priceChangePercent: data.priceChangePercent,
      high: data.high,
      low: data.low,
      volume: data.volume,
      quoteVolume: data.quoteVolume,
      openPrice: data.openPrice,
      isLoading: false,
      error: null
    })
  }, [])

  useEffect(() => {
    let mounted = true

    // Subscribe to price updates (this will handle initial fetch too)
    binanceService.subscribeToPrice(symbol, handlePriceUpdate)

    // Set loading to false after a short delay if no data comes
    const timeoutId = setTimeout(() => {
      if (mounted) {
        setPriceData(prev => ({
          ...prev,
          isLoading: false
        }))
      }
    }, 2000)

    return () => {
      mounted = false
      clearTimeout(timeoutId)
      binanceService.unsubscribeFromPrice(symbol, handlePriceUpdate)
    }
  }, [symbol, handlePriceUpdate])

  return priceData
}
