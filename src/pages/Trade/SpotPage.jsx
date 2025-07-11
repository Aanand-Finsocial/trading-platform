import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import OrderBook from '../../components/Trading/OrderBook'
import TradingChart from '../../components/Trading/TradingChart'
import TradeForm from '../../components/Trading/TradeForm'
import MarketSearch from '../../components/Trading/MarketSearch'
import TradesPanel from '../../components/Trading/TradesPanel'
import Footer from '../../components/Footer/Footer'
import { Search, ChevronDown } from 'lucide-react'

const SpotPage = () => {
  const { theme } = useTheme()
  const [selectedPair, setSelectedPair] = useState('BTC/USDT')
  const [currentPrice, setCurrentPrice] = useState(104611.50)
  const [priceChange, setPriceChange] = useState(-0.08)
  const [priceChangePercent, setPriceChangePercent] = useState('0.64%')
  const [activeTab, setActiveTab] = useState('chart')
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 100
      setCurrentPrice(prev => Math.max(prev + change, 50000))
      setPriceChange(change)
      setPriceChangePercent(`${(change / currentPrice * 100).toFixed(2)}%`)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentPrice])

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Ticker Bar */}
      <div className={`border-b ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} sticky top-0 z-20`}>
        <div className="px-2 sm:px-4 py-2 overflow-x-auto">
          <div className="flex items-center justify-between">
            {/* Mobile/Tablet View */}
            <div className="flex flex-col sm:hidden">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setShowMobileSearch(true)}
                  className={`flex items-center space-x-1 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {selectedPair}
                  </span>
                  <ChevronDown size={14} />
                </button>
                <span className={`text-xs px-1 py-0.5 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                  Spot
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-1">
                <span className={`text-lg font-mono font-bold ${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ${currentPrice.toLocaleString()}
                </span>
                <span className={`text-xs ${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {priceChange >= 0 ? '+' : ''}{priceChangePercent}
                </span>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:flex items-center space-x-6 text-sm whitespace-nowrap">
            <div className="flex items-center space-x-2">
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {selectedPair}
              </span>
              <span className={`font-mono ${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {currentPrice.toLocaleString()}
              </span>
              <span className={priceChange >= 0 ? 'text-green-500' : 'text-red-500'}>
                {priceChange >= 0 ? '+' : ''}{priceChangePercent}
              </span>
            </div>
              {/* Desktop Only Stats */}
              <div className="hidden md:flex items-center space-x-6">
                <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="text-xs">24h Change</span>
                  <span className={priceChange >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}
                  </span>
                </div>
                <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="text-xs">24h High</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {(currentPrice * 1.02).toLocaleString()}
                  </span>
                </div>
                <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="text-xs">24h Low</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {(currentPrice * 0.98).toLocaleString()}
                  </span>
                </div>
                <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="text-xs">24h Volume(BTC)</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    2,345.67
                  </span>
                </div>
                <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="text-xs">24h Volume(USDT)</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    245.37M
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Stats Summary */}
            <div className="flex sm:hidden flex-col items-end text-xs">
              <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                24h Vol
              </div>
              <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                $245.37M
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stats Bar */}
      <div className={`md:hidden px-2 py-2 border-b ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>24h High</p>
            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ${(currentPrice * 1.02).toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>24h Low</p>
            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ${(currentPrice * 0.98).toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>24h Change</p>
            <p className={`font-semibold ${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Main Trading Interface */}
      <div className="flex-1 flex flex-col">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
      {/* Row 1: MarketSearch | TradingChart | OrderBook */}
      <div className="flex h-[500px] border-b border-gray-700">
            {/* Market Search - Left */}
        <div className="w-80 border-r border-gray-700">
          <MarketSearch selectedPair={selectedPair} onPairSelect={setSelectedPair} />
        </div>
            
            {/* Trading Chart - Center */}
        <div className="flex-1 border-r border-gray-700">
          <TradingChart pair={selectedPair} currentPrice={currentPrice} />
        </div>
            
            {/* Order Book - Right */}
        <div className="w-80 h-[500px] overflow-hidden">
          <OrderBook pair={selectedPair} />
        </div>
      </div>

          {/* Row 2: Trades Panel - Full Width */}
          <div className="h-[300px] border-b border-gray-700">
          <TradesPanel />
      </div>

          {/* Row 3: Trade Form - Full Width */}
      <div className="h-[400px] border-t border-gray-700">
        <TradeForm
          pair={selectedPair}
          currentPrice={currentPrice}
          onTradeSubmit={(tradeData) => console.log('Trade submitted:', tradeData)}
        />
      </div>
        </div>

        {/* Tablet Layout (md screens) */}
        <div className="hidden md:flex lg:hidden flex-1">
          <div className="flex w-full h-full">
            {/* Left: Chart */}
            <div className="flex-1 border-r border-gray-700">
              <TradingChart pair={selectedPair} currentPrice={currentPrice} />
            </div>
            {/* Right: Trade Form */}
            <div className="w-[400px]">
              <TradeForm
                pair={selectedPair}
                currentPrice={currentPrice}
                onTradeSubmit={(tradeData) => console.log('Trade submitted:', tradeData)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex-1 flex flex-col">
          {/* Mobile Tab Navigation */}
          <div className={`flex border-b ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} sticky top-[108px] sm:top-[116px] z-10`}>
            <button 
              onClick={() => setActiveTab('chart')}
              className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'chart' 
                  ? theme === 'dark' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-yellow-600 border-b-2 border-yellow-600'
                  : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Chart
            </button>
            <button 
              onClick={() => setActiveTab('orderbook')}
              className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'orderbook' 
                  ? theme === 'dark' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-yellow-600 border-b-2 border-yellow-600'
                  : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Orders
            </button>
            <button 
              onClick={() => setActiveTab('trades')}
              className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'trades' 
                  ? theme === 'dark' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-yellow-600 border-b-2 border-yellow-600'
                  : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Trades
            </button>
            <button 
              onClick={() => setActiveTab('trade')}
              className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'trade' 
                  ? theme === 'dark' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-yellow-600 border-b-2 border-yellow-600'
                  : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Trade
            </button>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'chart' && (
              <div className="h-full flex flex-col">
                <div className="flex-1 min-h-[300px] sm:min-h-[400px] border-b border-gray-700">
                  <TradingChart pair={selectedPair} currentPrice={currentPrice} />
                </div>
                <div className="h-[350px] sm:h-[400px] overflow-y-auto">
                  <TradeForm
                    pair={selectedPair}
                    currentPrice={currentPrice}
                    onTradeSubmit={(tradeData) => console.log('Trade submitted:', tradeData)}
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'orderbook' && (
              <div className="h-full overflow-hidden">
                <OrderBook pair={selectedPair} />
              </div>
            )}
            
            {activeTab === 'trades' && (
              <div className="h-full overflow-hidden">
                <TradesPanel />
              </div>
            )}
            
            {activeTab === 'trade' && (
              <div className="h-full overflow-y-auto">
                <TradeForm
                  pair={selectedPair}
                  currentPrice={currentPrice}
                  onTradeSubmit={(tradeData) => console.log('Trade submitted:', tradeData)}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Market Search Modal */}
      {showMobileSearch && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setShowMobileSearch(false)}
          />
          <div 
            className={`relative w-full h-[80vh] ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-t-xl transition-transform duration-300 transform translate-y-0`}
            style={{ animation: 'slideUp 0.3s ease-out' }}
          >
            <div className={`sticky top-0 p-4 border-b ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
              <div className="flex items-center justify-between mb-3">
                <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Select Market
                </h2>
                <button 
                  onClick={() => setShowMobileSearch(false)}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className={`relative ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg`}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search markets..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} focus:outline-none`}
                />
              </div>
            </div>
            <div className="overflow-y-auto h-full pb-20">
              <MarketSearch 
                selectedPair={selectedPair} 
                onPairSelect={(pair) => {
                  setSelectedPair(pair)
                  setShowMobileSearch(false)
                }} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default SpotPage
