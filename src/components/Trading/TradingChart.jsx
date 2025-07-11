import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useBinancePrice } from '../../hooks/useBinancePrice'
import { useBinanceKlines } from '../../hooks/useBinanceKlines'
import { BinanceService } from '../../services/binanceApi'
import LightweightChart from './LightweightChart'
import ErrorBoundary from './ErrorBoundary'
import { useAITrading } from '../../hooks/useAITrading'
import AITradingPanel from './AITradingPanel'

const TradingChart = ({ pair, currentPrice }) => {
  const { theme } = useTheme()
  const [activeChartTab, setActiveChartTab] = useState('Chart')
  const [timeFrame, setTimeFrame] = useState('1D')
  const [chartType, setChartType] = useState('Original')
  const container = useRef(null)
  const scriptRef = useRef(null)

  // Use Binance price data
  const binanceData = useBinancePrice(pair)
  const { klineData, isLoading: klinesLoading, error: klinesError } = useBinanceKlines(pair, timeFrame)
  
  // Use Binance price if available, otherwise fall back to prop
  const displayPrice = binanceData.price || currentPrice || 104611.50
  const priceChange = binanceData.priceChange || -0.08
  const priceChangePercent = binanceData.priceChangePercent || -0.64

  // Add AI Trading hook
  const {
    aiSignal,
    automationStatus,
    recommendations,
    sentiment,
    analyzeSignal,
    getRecommendations,
    getSentiment,
    startAutomation,
    stopAutomation
  } = useAITrading(pair, {
    symbol: BinanceService.formatSymbol(pair),
    price: displayPrice,
    priceChange,
    priceChangePercent,
    high: binanceData.high,
    low: binanceData.low,
    volume: binanceData.volume,
    klineData
  })

  const chartTabs = ['Chart', 'Info', 'Trading Data', 'Trading Analysis', 'AI Trading', 'Square']
  const timeFrames = ['1s', '15m', '1H', '4H', '1D', '1W']
  const chartTypes = ['Original', 'Trading View', 'Depth']

  // Get TradingView symbol from pair (for Trading View chart type)
  const getTradingViewSymbol = (pair) => {
    const symbols = {
      'BTC/USDT': 'BINANCE:BTCUSDT',
      'BTC/USD': 'BINANCE:BTCUSD',
      'ETH/USDT': 'BINANCE:ETHUSDT',
      'ETH/USD': 'BINANCE:ETHUSD',
      'BNB/USDT': 'BINANCE:BNBUSDT',
      'ADA/USDT': 'BINANCE:ADAUSDT',
      'SOL/USDT': 'BINANCE:SOLUSDT',
      'XRP/USDT': 'BINANCE:XRPUSDT',
      'DOGE/USDT': 'BINANCE:DOGEUSDT',
      'MATIC/USDT': 'BINANCE:MATICUSDT'
    }
    return symbols[pair] || 'BINANCE:BTCUSDT'
  }

  // Convert timeframe to TradingView format
  const getTradingViewInterval = (timeFrame) => {
    const intervalMap = {
      '1s': '1',
      '15m': '15',
      '1H': '60',
      '4H': '240',
      '1D': 'D',
      '1W': 'W'
    }
    return intervalMap[timeFrame] || 'D'
  }

  // TradingView Chart Implementation (for Trading View chart type)
  useEffect(() => {
    if (container.current && activeChartTab === 'Chart' && chartType === 'Trading View') {
      // Clear any existing content
      container.current.innerHTML = ''
      
      // Remove any existing script
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current)
      }

      // Create new script
      const script = document.createElement("script")
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
      script.type = "text/javascript"
      script.async = true
      script.innerHTML = JSON.stringify({
        autosize: true,
        width: "100%",
        height: "100%",
        symbol: getTradingViewSymbol(pair),
        interval: getTradingViewInterval(timeFrame),
        timezone: "Etc/UTC",
        theme: theme === 'dark' ? 'dark' : 'light',
        style: "1",
        locale: "en",
        enable_publishing: false,
        allow_symbol_change: true,
        calendar: false,
        hide_side_toolbar: false,
        support_host: "https://www.tradingview.com",
        container_id: "tradingview_chart",
        drawings_access: {
          type: "black",
          tools: [
            { name: "Regression Trend" },
            { name: "Trend Line" },
            { name: "Horizontal Line" },
            { name: "Rectangle" },
            { name: "Brush" }
          ]
        },
        studies: [
          "Volume@tv-basicstudies",
          "RSI@tv-basicstudies",
          "MACD@tv-basicstudies"
        ]
      })
      
      scriptRef.current = script
      container.current.appendChild(script)
    }
    
    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current)
      }
    }
  }, [theme, timeFrame, pair, activeChartTab, chartType])

  return (
    <div className={`h-full flex flex-col border-r ${
      theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {/* Loading indicator */}
      {(binanceData.isLoading || klinesLoading || aiSignal.isLoading) && (
        <div className="absolute top-4 right-4 z-10">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
        </div>
      )}

      {/* AI Signal Indicator */}
      {aiSignal.signal !== 'HOLD' && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            aiSignal.signal === 'BUY' 
              ? 'bg-green-500 text-white' 
              : aiSignal.signal === 'SELL'
              ? 'bg-red-500 text-white'
              : 'bg-yellow-500 text-black'
          }`}>
            🤖 AI: {aiSignal.signal} ({(aiSignal.confidence * 100).toFixed(0)}%)
          </div>
        </div>
      )}

      {/* Error indicator */}
      {(binanceData.error || klinesError) && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded text-xs">
          Connection Error
        </div>
      )}

      {/* Chart Header - Responsive */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-2 sm:p-4 border-b border-gray-700 gap-2 lg:gap-0">
        {/* Chart Tabs - Horizontal scroll on mobile */}
        <div className="flex space-x-3 sm:space-x-6 overflow-x-auto pb-2 lg:pb-0">
          {chartTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveChartTab(tab)}
              className={`text-xs sm:text-sm font-medium whitespace-nowrap touch-manipulation ${
                activeChartTab === tab
                  ? theme === 'dark'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-yellow-600 border-b-2 border-yellow-600'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chart Controls - Responsive */}
        <div className="flex items-center justify-between lg:justify-end space-x-2 sm:space-x-4">
          {/* Chart Type - Hide some on mobile */}
          <div className="flex space-x-1 sm:space-x-2">
            {chartTypes.map((type, index) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`px-2 sm:px-3 py-1 text-xs rounded touch-manipulation ${
                  index > 0 ? 'hidden sm:block' : ''
                } ${
                  chartType === type
                    ? theme === 'dark'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-yellow-500 text-white'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Expand Icons */}
          <div className="flex space-x-1 sm:space-x-2">
            <button className={`p-1 sm:p-2 touch-manipulation ${
              theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
            <button className={`p-1 sm:p-2 touch-manipulation hidden sm:block ${
              theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Chart Toolbar - Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 border-b border-gray-700 text-xs gap-2 sm:gap-0">
        {/* Time Frames - Responsive grid */}
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hidden sm:inline`}>Time</span>
          {timeFrames.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeFrame(tf)}
              className={`px-2 py-1 rounded whitespace-nowrap touch-manipulation ${
                timeFrame === tf
                  ? theme === 'dark'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-yellow-500 text-white'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Chart Tools - Hide some on mobile */}
        <div className="flex items-center space-x-2 justify-center sm:justify-end">
          {['📊', '📈', '🏠', '⚙️'].map((icon, index) => (
            <button
              key={index}
              className={`p-1 sm:p-2 touch-manipulation ${
                index > 1 ? 'hidden sm:block' : ''
              } ${
                theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Price Info - Responsive with real Binance data */}
      <div className="p-2 border-b border-gray-700 overflow-x-auto">
        <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm whitespace-nowrap">
          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hidden sm:block`}>
            {new Date().toLocaleDateString()} Open: <span className="text-green-500">{binanceData.openPrice?.toFixed(2) || (displayPrice * 1.001).toFixed(2)}</span>
          </div>
          <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            High: <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{binanceData.high?.toFixed(2) || (displayPrice * 1.005).toFixed(2)}</span>
          </div>
          <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Low: <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{binanceData.low?.toFixed(2) || (displayPrice * 0.995).toFixed(2)}</span>
          </div>
          <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Close: <span className={priceChange >= 0 ? 'text-green-500' : 'text-red-500'}>{displayPrice.toFixed(2)}</span>
          </div>
          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hidden lg:block`}>
            24h Change: <span className={priceChange >= 0 ? 'text-green-500' : 'text-red-500'}>
              {priceChange >= 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%
            </span>
          </div>
          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hidden xl:block`}>
            Volume: <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {binanceData.volume ? 
                `${(binanceData.volume / 1000).toFixed(1)}K ${pair.split('/')[0]}` :
                pair.includes('BTC') ? '2.027K BTC' : '212.663M USDT'
              }
            </span>
          </div>
        </div>
        
        {/* Second row - only on larger screens */}
        <div className="hidden lg:flex items-center space-x-4 text-xs mt-1">
          <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Market Cap: <span className="text-purple-400">
              {pair.includes('BTC') ? '$2.1T' : '$142.5B'}
            </span>
          </div>
          <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Circulating Supply: <span className="text-purple-400">
              {pair.includes('BTC') ? '19.8M BTC' : '142.5M USDT'}
            </span>
          </div>
          <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            All Time High: <span className="text-purple-400">
              {pair.includes('BTC') ? '$108,353' : '$1.32'}
            </span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 relative min-h-0">
        {activeChartTab === 'Trading Analysis' ? (
          /* Trading Analysis Content - Responsive */
          <div className={`h-full p-2 sm:p-4 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 h-full">
              {/* Left Column - Technical Analysis */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className={`text-base sm:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Technical Analysis
                </h3>
                
                {/* Overall Rating - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Overall Rating
                    </span>
                    <span className="text-yellow-500 font-semibold text-sm sm:text-base">NEUTRAL</span>
                  </div>
                  <div className="flex space-x-2 mb-3">
                    <div className="flex-1 bg-red-500 h-2 rounded"></div>
                    <div className="flex-1 bg-yellow-500 h-2 rounded"></div>
                    <div className="flex-1 bg-gray-300 h-2 rounded"></div>
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-red-500">Sell: 4</span>
                      <span className="text-yellow-500">Neutral: 8</span>
                      <span className="text-green-500">Buy: 4</span>
                    </div>
                  </div>
                </div>

                {/* Moving Averages - Responsive table */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Moving Averages
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {[
                      { name: 'MA(5)', signal: 'BUY', color: 'text-green-500' },
                      { name: 'MA(10)', signal: 'NEUTRAL', color: 'text-yellow-500' },
                      { name: 'MA(20)', signal: 'SELL', color: 'text-red-500' },
                      { name: 'MA(50)', signal: 'BUY', color: 'text-green-500' },
                      { name: 'EMA(10)', signal: 'NEUTRAL', color: 'text-yellow-500' },
                      { name: 'EMA(20)', signal: 'BUY', color: 'text-green-500' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className={item.color}>{item.signal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Indicators - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Technical Indicators
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {[
                      { name: 'RSI(14)', signal: 'NEUTRAL (52.3)', color: 'text-yellow-500' },
                      { name: 'MACD', signal: 'BUY', color: 'text-green-500' },
                      { name: 'Stochastic', signal: 'SELL', color: 'text-red-500' },
                      { name: 'CCI(14)', signal: 'NEUTRAL', color: 'text-yellow-500' },
                      { name: 'ADX(14)', signal: 'BUY', color: 'text-green-500' },
                      { name: 'Williams %R', signal: 'SELL', color: 'text-red-500' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className={item.color}>{item.signal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Column - Market Sentiment */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className={`text-base sm:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Market Sentiment
                </h3>

                {/* Fear & Greed Index - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Fear & Greed Index
                  </h4>
                  <div className="text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="40%"
                          fill="none"
                          stroke={theme === 'dark' ? '#374151' : '#E5E7EB'}
                          strokeWidth="8"
                        />
                        <circle
                          cx="50%"
                          cy="50%"
                          r="40%"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="8"
                          strokeDasharray={`${68 * 2.51} ${(100 - 68) * 2.51}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            68
                          </div>
                          <div className="text-xs text-yellow-500">GREED</div>
                        </div>
                      </div>
                    </div>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Market is showing signs of greed
                    </p>
                  </div>
                </div>

                {/* Social Sentiment - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Social Sentiment
                  </h4>
                  <div className="space-y-3">
                    {[
                      { platform: 'Twitter', percentage: 72, color: 'bg-green-500', textColor: 'text-green-500' },
                      { platform: 'Reddit', percentage: 58, color: 'bg-yellow-500', textColor: 'text-yellow-500' },
                      { platform: 'News', percentage: 84, color: 'bg-green-500', textColor: 'text-green-500' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm">{item.platform}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 sm:w-12 bg-gray-300 h-2 rounded">
                            <div className={`${item.color} h-2 rounded`} style={{ width: `${item.percentage}%` }}></div>
                          </div>
                          <span className={`${item.textColor} text-xs sm:text-sm`}>{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Volume Analysis - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Volume Analysis
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>24h Volume</span>
                      <span className="text-green-500">+12.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volume Trend</span>
                      <span className="text-green-500">BULLISH</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volume Profile</span>
                      <span className="text-yellow-500">NEUTRAL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Market Insights */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className={`text-base sm:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Market Insights
                </h3>

                {/* Price Targets - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Price Targets
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {[
                      { label: 'Resistance 1', value: '$106,250', color: 'text-red-500' },
                      { label: 'Resistance 2', value: '$108,500', color: 'text-red-500' },
                      { label: 'Current Price', value: `$${currentPrice.toLocaleString()}`, color: theme === 'dark' ? 'text-white' : 'text-gray-900' },
                      { label: 'Support 1', value: '$102,800', color: 'text-green-500' },
                      { label: 'Support 2', value: '$100,500', color: 'text-green-500' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{item.label}</span>
                        <span className={item.color}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Funding Rates - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Funding Rates
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>Current Rate</span>
                      <span className="text-green-500">0.0125%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Funding</span>
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        2h 34m
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Predicted Rate</span>
                      <span className="text-yellow-500">0.0087%</span>
                    </div>
                  </div>
                </div>

                {/* Open Interest - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Open Interest
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>Total OI</span>
                      <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                        $42.8B
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>24h Change</span>
                      <span className="text-red-500">-2.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Long/Short Ratio</span>
                      <span className="text-green-500">1.24</span>
                    </div>
                  </div>
                </div>

                {/* Key Levels - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Key Levels
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>Pivot Point</span>
                      <span className="text-blue-500">$104,125</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VWAP</span>
                      <span className="text-purple-500">$103,856</span>
                    </div>
                    <div className="flex justify-between">
                      <span>200 SMA</span>
                      <span className="text-orange-500">$98,642</span>
                    </div>
                  </div>
                </div>

                {/* Market Summary - Responsive */}
                <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`font-semibold mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Summary
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Bitcoin is currently trading in a neutral zone with mixed signals from technical 
                    indicators. The market sentiment shows signs of greed, but volume analysis 
                    suggests caution. Key resistance at $106,250 and support at $102,800.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : activeChartTab === 'Trading Data' ? (
          /* Trading Data Content - Responsive */
          <div className={`h-full p-2 sm:p-4 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-6 h-full">
              {/* Left Column - Money Flow Analysis */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className={`text-base sm:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Money Flow Analysis
                  </h3>
                  <div className="flex space-x-1 sm:space-x-2 text-xs overflow-x-auto">
                    {['15m', '30m', '1h', '2h', '4h', '1d'].map((tf) => (
                      <button
                        key={tf}
                        className={`px-2 py-1 rounded whitespace-nowrap touch-manipulation ${
                          tf === '1d'
                            ? theme === 'dark' ? 'bg-yellow-500 text-black' : 'bg-yellow-500 text-white'
                            : theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pie Chart - Responsive */}
                <div className="h-48 sm:h-64 flex items-center justify-center">
                  <div className="relative">
                    <svg width="150" height="150" className="sm:w-[200px] sm:h-[200px] transform -rotate-90">
                      {/* Large Orders - Green */}
                      <circle
                        cx="75"
                        cy="75"
                        r="60"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="12"
                        strokeDasharray={`${40.58 * 3.77} ${(100 - 40.58) * 3.77}`}
                        strokeDashoffset="0"
                      />
                      {/* Medium/Small Orders - Red */}
                      <circle
                        cx="75"
                        cy="75"
                        r="60"
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="12"
                        strokeDasharray={`${30.14 * 3.77} ${(100 - 30.14) * 3.77}`}
                        strokeDashoffset={`-${40.58 * 3.77}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`text-lg sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          40.58%
                        </div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          Large Orders
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend - Responsive grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      40.58% Large
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      30.14% Medium
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      11.70% Small
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded"></div>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      7.08% Others
                    </span>
                  </div>
                </div>

                {/* Orders Table - Responsive with horizontal scroll */}
                <div className={`border rounded-lg overflow-x-auto ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                  <table className="w-full text-xs sm:text-sm min-w-[400px]">
                    <thead className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <tr>
                        <th className="px-2 sm:px-4 py-2 text-left">Orders</th>
                        <th className="px-2 sm:px-4 py-2 text-left text-green-500">Buy (BTC)</th>
                        <th className="px-2 sm:px-4 py-2 text-left text-red-500">Sell (BTC)</th>
                        <th className="px-2 sm:px-4 py-2 text-left">Inflow</th>
                      </tr>
                    </thead>
                    <tbody className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {[
                        { type: 'Large', buy: '85.6549', sell: '63.6254', inflow: '22.0295', positive: true },
                        { type: 'Medium', buy: '14.9540', sell: '24.6929', inflow: '-9.7389', positive: false },
                        { type: 'Small', buy: '10.8332', sell: '11.3133', inflow: '-0.4802', positive: false },
                        { type: 'Total', buy: '111.4421', sell: '99.6316', inflow: '11.8105', positive: true, bold: true },
                      ].map((row, index) => (
                        <tr key={index} className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                          <td className={`px-2 sm:px-4 py-2 ${row.bold ? 'font-semibold' : ''}`}>{row.type}</td>
                          <td className={`px-2 sm:px-4 py-2 text-green-500 ${row.bold ? 'font-semibold' : ''}`}>{row.buy}</td>
                          <td className={`px-2 sm:px-4 py-2 text-red-500 ${row.bold ? 'font-semibold' : ''}`}>{row.sell}</td>
                          <td className={`px-2 sm:px-4 py-2 ${row.positive ? '' : 'text-red-500'} ${row.bold ? 'font-semibold' : ''}`}>{row.inflow}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column - Charts - Responsive */}
              <div className="space-y-4 sm:space-y-6">
                {/* 24hr Large Inflow Chart */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h4 className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      24hr Large Inflow(BTC)
                    </h4>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>50</span>
                  </div>
                  <div className={`text-xs sm:text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    5 days large inflow: <span className="text-red-500">-3.73K</span>
                  </div>
                  <div className="h-24 sm:h-32 bg-gradient-to-b from-yellow-400/20 to-transparent rounded"></div>
                </div>

                {/* Margin Debt Growth */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h4 className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Margin Debt Growth
                    </h4>
                    <div className="flex space-x-2">
                      <button className={`px-2 py-1 text-xs rounded touch-manipulation ${
                        theme === 'dark' ? 'bg-yellow-500 text-black' : 'bg-yellow-500 text-white'
                      }`}>24h</button>
                      <button className={`px-2 py-1 text-xs touch-manipulation ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>30d</button>
                      <select className={`text-xs px-2 py-1 rounded ${
                        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                      }`}>
                        <option>BTC</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-24 sm:h-32">
                    <svg width="100%" height="100%" className="text-yellow-400">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        points="0,80 50,60 100,70 150,40 200,45 250,30 300,35"
                      />
                    </svg>
                  </div>
                </div>

                {/* Isolated Margin Borrow Amount Ratio */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h4 className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Isolated Margin Borrow Amount Ratio
                    </h4>
                  </div>
                  <div className="flex space-x-2 sm:space-x-4 mb-2">
                    <button className={`px-2 sm:px-3 py-1 text-xs rounded touch-manipulation ${
                      theme === 'dark' ? 'bg-yellow-500 text-black' : 'bg-yellow-500 text-white'
                    }`}>24h</button>
                    <button className={`px-2 sm:px-3 py-1 text-xs touch-manipulation ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>30d</button>
                  </div>
                  <div className="h-24 sm:h-32 flex items-end space-x-1">
                    {[8, 6, 4, 7, 3, 2, 1, 0.5, 1, 1.5].map((height, index) => (
                      <div
                        key={index}
                        className="bg-yellow-400 w-3 sm:w-4 rounded-t"
                        style={{ height: `${height * 8}px` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Margin Long-short Positions Ratio */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h4 className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Margin Long-short Positions Ratio
                    </h4>
                    <select className={`text-xs px-2 py-1 rounded ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                    }`}>
                      <option>BTC</option>
                    </select>
                  </div>
                  <div className="flex space-x-2 sm:space-x-4 mb-2">
                    <button className={`px-2 sm:px-3 py-1 text-xs rounded touch-manipulation ${
                      theme === 'dark' ? 'bg-yellow-500 text-black' : 'bg-yellow-500 text-white'
                    }`}>24h</button>
                    <button className={`px-2 sm:px-3 py-1 text-xs touch-manipulation ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>30d</button>
                  </div>
                  <div className={`text-xl sm:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    75
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeChartTab === 'Info' ? (
          /* Info Content - Responsive */
          <div className={`h-full p-3 sm:p-6 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">₿</span>
              </div>
              <div>
                <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Bitcoin
                </h2>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  BTC • Rank #1
                </p>
              </div>
            </div>

            {/* Responsive grid for stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
              {[
                { title: 'Market Capitalization', value: '$2.04T', subtitle: '≈ 1.79T EUR' },
                { title: 'Fully Diluted Market Cap', value: '$2.16T', subtitle: null },
                { title: 'Market Dominance', value: '62.565%', subtitle: null },
                { title: 'Volume', value: '$60.15B', subtitle: '≈ 52.62B EUR' },
                { title: 'Volume/Market Cap', value: '2.96%', subtitle: null },
                { title: 'Circulating Supply', value: '19,874,975 BTC', subtitle: null },
                { title: 'Maximum Supply', value: '21,000,000 BTC', subtitle: null },
                { title: 'Total Supply', value: '19,874,975 BTC', subtitle: null },
              ].map((item, index) => (
                <div key={index} className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className={`text-xs sm:text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.value}
                  </p>
                  {item.subtitle && (
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                      {item.subtitle}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Links Section - Responsive */}
            <div className="mb-4 sm:mb-6">
              <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Links
              </h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                {['Official Website', 'Whitepaper', 'blockchain.info', 'Research'].map((link, index) => (
                  <button 
                    key={index}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm touch-manipulation ${
                      theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} leading-relaxed`}>
              * Underlying data is sourced and provided by CMC and is for reference only. 
              This information is presented on an 'as is' basis and does not serve as any 
              form of representation or guarantee by Finsocial.
            </div>
          </div>
        ) : (
          /* Chart Content - Responsive */
          <>
            {activeChartTab === 'Chart' && (
              <>
                {/* Market Buy/Sell Overlay - Enhanced with AI recommendations */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button 
                    className={`px-2 sm:px-4 py-2 text-white text-xs sm:text-sm rounded touch-manipulation ${
                      aiSignal.signal === 'BUY' 
                        ? 'bg-green-600 hover:bg-green-700 ring-2 ring-green-400' 
                        : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    Market Buy<br />
                    <span className="text-xs">{displayPrice.toFixed(2)}</span>
                  </button>
                  <button 
                    className={`px-2 sm:px-4 py-2 text-white text-xs sm:text-sm rounded touch-manipulation ${
                      aiSignal.signal === 'SELL' 
                        ? 'bg-red-600 hover:bg-red-700 ring-2 ring-red-400' 
                        : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    Market Sell<br />
                    <span className="text-xs">{(displayPrice - 0.01).toFixed(2)}</span>
                  </button>
                  <div className="px-2 sm:px-3 py-2 bg-gray-800 text-white text-xs rounded">
                    Amount ({pair.split('/')[0]})<br />
                    <input 
                      type="text" 
                      placeholder="Enter Amount" 
                      className="bg-transparent border-none outline-none w-20 sm:w-24 text-xs"
                    />
                  </div>
                  <button className="p-2 text-gray-400 hover:text-white self-start sm:self-center touch-manipulation">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* Chart Container - Conditional rendering based on chart type */}
                {chartType === 'Trading View' ? (
                  <div className="tradingview-widget-container h-full w-full" ref={container}>
                    <div className="tradingview-widget-container__widget h-full w-full"></div>
                  </div>
                ) : chartType === 'Depth' ? (
                  <div className={`h-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className="text-4xl mb-4">📊</div>
                      <div className="text-lg font-medium">Depth Chart</div>
                      <div className="text-sm">Coming Soon</div>
                    </div>
                  </div>
                ) : (
                  <ErrorBoundary theme={theme}>
                    <LightweightChart
                      data={klineData}
                      timeFrame={timeFrame}
                      pair={pair}
                      currentPrice={displayPrice}
                      volume={binanceData.volume}
                    />
                  </ErrorBoundary>
                )}
              </>
            )}
          </>
        )}
      </div>

      {/* Volume Chart at Bottom - Responsive with real data */}
      <div className="h-10 sm:h-12 border-t border-gray-700 flex-shrink-0">
        <div className="p-1 text-xs overflow-x-auto">
          <div className={`flex space-x-2 sm:space-x-4 whitespace-nowrap ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>Vol({pair.split('/')[0]}): <span className="text-yellow-400">
              {binanceData.volume ? (binanceData.volume / 1000).toFixed(1) + 'K' : '2.027K'}
            </span></span>
            <span>Vol({pair.split('/')[1]}): <span className="text-green-400">
              {binanceData.quoteVolume ? (binanceData.quoteVolume / 1000000).toFixed(1) + 'M' : '212.663M'}
            </span></span>
            <span className="hidden sm:inline">12.497K</span>
            <span className="text-red-400 hidden sm:inline">16.079K</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingChart
