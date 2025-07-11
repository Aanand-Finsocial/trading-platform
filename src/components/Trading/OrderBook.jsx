import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const OrderBook = ({ pair }) => {
  const { theme } = useTheme()
  const [precision, setPrecision] = useState('0.01')
  const [orderBookData, setOrderBookData] = useState({
    asks: [],
    bids: [],
    lastPrice: 104604.65,
    priceChange: -91665.05
  })

  useEffect(() => {
    // Simulate order book data
    const generateOrderBook = () => {
      const basePrice = 104604.65
      const asks = []
      const bids = []

      // Generate asks (sell orders) - higher prices
      for (let i = 0; i < 15; i++) {
        asks.push({
          price: basePrice + (i + 1) * 0.5 + Math.random() * 5,
          amount: Math.random() * 0.5,
          total: Math.random() * 50
        })
      }

      // Generate bids (buy orders) - lower prices
      for (let i = 0; i < 15; i++) {
        bids.push({
          price: basePrice - (i + 1) * 0.5 - Math.random() * 5,
          amount: Math.random() * 0.5,
          total: Math.random() * 50
        })
      }

      setOrderBookData({
        asks: asks.sort((a, b) => b.price - a.price),
        bids: bids.sort((a, b) => b.price - a.price),
        lastPrice: basePrice,
        priceChange: -91665.05
      })
    }

    generateOrderBook()
    const interval = setInterval(generateOrderBook, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`h-full flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
        <h3 className={`text-lg font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Order Book
        </h3>
        
        <div className="flex items-center space-x-2">
          {/* Precision Selector */}
          <select 
            value={precision}
            onChange={(e) => setPrecision(e.target.value)}
            className={`text-xs border rounded px-2 py-1 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value="0.01">0.01</option>
            <option value="0.1">0.1</option>
            <option value="1">1</option>
          </select>
          
          <button className={`p-1 ${
            theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
          }`}>
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>

      {/* Order Book Icons */}
      <div className="flex justify-center space-x-2 p-2 border-b border-gray-700 flex-shrink-0">
        <button className="p-1 text-red-500">
          <div className="w-4 h-4 border-2 border-red-500"></div>
        </button>
        <button className="p-1 text-gray-400">
          <div className="w-4 h-4 flex flex-col">
            <div className="w-full h-2 border border-gray-400"></div>
            <div className="w-full h-2 border border-gray-400"></div>
          </div>
        </button>
        <button className="p-1 text-green-500">
          <div className="w-4 h-4 border-2 border-green-500"></div>
        </button>
      </div>

      {/* Column Headers */}
      <div className={`grid grid-cols-3 gap-2 p-2 text-xs font-medium border-b flex-shrink-0 ${
        theme === 'dark' ? 'text-gray-400 border-gray-700' : 'text-gray-600 border-gray-200'
      }`}>
        <div>Price (USDT)</div>
        <div>Amount (BTC)</div>
        <div>Total</div>
      </div>

      {/* Order Book Content with Independent Scrollbars */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Asks (Sell Orders) - Top Half with Scrollbar */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
          <div className="flex flex-col-reverse">
            {orderBookData.asks.map((ask, index) => (
              <div
                key={`ask-${index}`}
                className="grid grid-cols-3 gap-2 p-1 text-xs hover:bg-red-900/20 transition-colors"
              >
                <div className="text-red-500 font-mono">
                  {ask.price.toFixed(2)}
                </div>
                <div className={`font-mono ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {ask.amount.toFixed(5)}
                </div>
                <div className={`font-mono ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {ask.total.toFixed(0)}K
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Price - Fixed in Center */}
        <div className={`text-center py-3 border-y flex-shrink-0 ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="text-red-500 font-bold text-lg font-mono">
            {orderBookData.lastPrice.toFixed(2)}
          </div>
          <div className="text-xs text-red-500 font-mono">
            ↓ {Math.abs(orderBookData.priceChange).toLocaleString()}
          </div>
        </div>

        {/* Bids (Buy Orders) - Bottom Half with Scrollbar */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
          {orderBookData.bids.map((bid, index) => (
            <div
              key={`bid-${index}`}
              className="grid grid-cols-3 gap-2 p-1 text-xs hover:bg-green-900/20 transition-colors"
            >
              <div className="text-green-500 font-mono">
                {bid.price.toFixed(2)}
              </div>
              <div className={`font-mono ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {bid.amount.toFixed(5)}
              </div>
              <div className={`font-mono ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {bid.total.toFixed(0)}K
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderBook
