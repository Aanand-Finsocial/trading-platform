import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const MarketSearch = ({ selectedPair, onPairSelect }) => {
  const { theme } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('USDT')

  const tabs = [
    { id: 'New', label: '⭐ New' },
    { id: 'USDC', label: 'USDC' },
    { id: 'USDT', label: 'USDT' },
    { id: 'FDUSD', label: 'FDUSD' },
    { id: 'BNB', label: 'BNB' },
    { id: 'BTC', label: 'BTC' },
    { id: 'ALTS', label: 'ALTS' },
    { id: 'FIAT', label: 'FIAT' },
    { id: 'Zones', label: 'Zones' }
  ]

  const allMarketData = {
    'New': [
      { symbol: '1000CAT', pair: 'USDT', lastPrice: '0.00703', change: '-5.00%', isNegative: true, leverage: '5x' },
      { symbol: '1000CHEEMS', pair: 'USDT', lastPrice: '0.001427', change: '-0.28%', isNegative: true, leverage: '5x' },
      { symbol: '1000SATS', pair: 'USDT', lastPrice: '0.000443', change: '-6.93%', isNegative: true, leverage: '5x' },
      { symbol: '1INCH', pair: 'USDT', lastPrice: '0.2102', change: '-5.02%', isNegative: true, leverage: '5x' },
      { symbol: '1MBABYDOGE', pair: 'USDT', lastPrice: '0.0013969', change: '-3.83%', isNegative: true, leverage: '5x' },
      { symbol: 'AAVE', pair: 'USDT', lastPrice: '261.79', change: '-2.70%', isNegative: true, leverage: '5x' },
      { symbol: 'ACA', pair: 'USDT', lastPrice: '0.0301', change: '+5.61%', isNegative: false, leverage: '5x' }
    ],
    'USDT': [
      { symbol: 'BTC', pair: 'USDT', lastPrice: '104611.50', change: '-0.64%', isNegative: true },
      { symbol: 'ETH', pair: 'USDT', lastPrice: '3842.75', change: '-1.24%', isNegative: true },
      { symbol: 'BNB', pair: 'USDT', lastPrice: '701.82', change: '-2.14%', isNegative: true },
      { symbol: 'XRP', pair: 'USDT', lastPrice: '2.4567', change: '+3.45%', isNegative: false },
      { symbol: 'ADA', pair: 'USDT', lastPrice: '1.0543', change: '-1.87%', isNegative: true },
      { symbol: 'SOL', pair: 'USDT', lastPrice: '245.67', change: '+2.34%', isNegative: false },
      { symbol: 'DOGE', pair: 'USDT', lastPrice: '0.4123', change: '-0.98%', isNegative: true },
      { symbol: 'AVAX', pair: 'USDT', lastPrice: '42.56', change: '+1.23%', isNegative: false },
      { symbol: 'LINK', pair: 'USDT', lastPrice: '23.45', change: '-2.11%', isNegative: true },
      { symbol: 'DOT', pair: 'USDT', lastPrice: '8.76', change: '+0.89%', isNegative: false }
    ],
    'USDC': [
      { symbol: '1000CAT', pair: 'USDC', lastPrice: '0.00704', change: '-4.86%', isNegative: true, leverage: '5x' },
      { symbol: '1000CHEEMS', pair: 'USDC', lastPrice: '0.001423', change: '-0.56%', isNegative: true, leverage: '5x' },
      { symbol: '1000SATS', pair: 'USDC', lastPrice: '0.000444', change: '-0.72%', isNegative: true, leverage: '5x' },
      { symbol: '1MBABYDOGE', pair: 'USDC', lastPrice: '0.0014025', change: '-3.56%', isNegative: true, leverage: '5x' },
      { symbol: 'AAVE', pair: 'USDC', lastPrice: '261.89', change: '-2.76%', isNegative: true, leverage: '5x' },
      { symbol: 'ACH', pair: 'USDC', lastPrice: '0.02104', change: '-3.88%', isNegative: true, leverage: '5x' }
    ],
    'FDUSD': [
      { symbol: '1000CAT', pair: 'FDUSD', lastPrice: '0.00706', change: '-4.59%', isNegative: true },
      { symbol: '1000SATS', pair: 'FDUSD', lastPrice: '0.000446', change: '-6.30%', isNegative: true, leverage: '5x' },
      { symbol: '1MBABYDOGE', pair: 'FDUSD', lastPrice: '0.0013990', change: '-3.88%', isNegative: true },
      { symbol: 'AAVE', pair: 'FDUSD', lastPrice: '262.47', change: '-2.46%', isNegative: true },
      { symbol: 'ACT', pair: 'FDUSD', lastPrice: '0.0504', change: '-2.14%', isNegative: true }
    ],
    'BNB': [
      { symbol: '1000CAT', pair: 'BNB', lastPrice: '0.00001053', change: '-4.45%', isNegative: true },
      { symbol: 'ADA', pair: 'BNB', lastPrice: '0.001011', change: '-2.98%', isNegative: true },
      { symbol: 'AI', pair: 'BNB', lastPrice: '0.0002069', change: '-6.08%', isNegative: true },
      { symbol: 'ALT', pair: 'BNB', lastPrice: '0.0000407', change: '-3.78%', isNegative: true },
      { symbol: 'ARKM', pair: 'BNB', lastPrice: '0.000786', change: '-4.96%', isNegative: true }
    ],
    'BTC': [
      { symbol: '1INCH', pair: 'BTC', lastPrice: '0.00000202', change: '-3.35%', isNegative: true, leverage: '5x' },
      { symbol: 'AAVE', pair: 'BTC', lastPrice: '0.002505', change: '-1.65%', isNegative: true, leverage: '5x' },
      { symbol: 'A', pair: 'BTC', lastPrice: '0.00000585', change: '-4.41%', isNegative: true },
      { symbol: 'ACH', pair: 'BTC', lastPrice: '0.00000020', change: '+0.00%', isNegative: false },
      { symbol: 'ADA', pair: 'BTC', lastPrice: '0.00000647', change: '-2.12%', isNegative: true, leverage: '10x' }
    ]
  }

  const getFilteredMarkets = () => {
    const markets = allMarketData[activeTab] || []
    return markets.filter(market =>
      market.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return (
    <div className={`h-full flex flex-col border-r ${
      theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {/* Search */}
      <div className="p-4 border-b border-gray-700 flex-shrink-0">
        <div className="relative">
          <i className={`fas fa-search absolute left-3 top-3 text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}></i>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-yellow-500 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 overflow-x-auto flex-shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-3 text-xs font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? theme === 'dark'
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-yellow-600 border-b-2 border-yellow-600'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className={`grid grid-cols-4 gap-2 p-3 text-xs font-medium border-b flex-shrink-0 ${
        theme === 'dark' ? 'text-gray-400 border-gray-700' : 'text-gray-600 border-gray-200'
      }`}>
        <div>Pair</div>
        <div className="text-right">Last Price</div>
        <div className="text-right">24h Change</div>
        <div className="text-right">Actions</div>
      </div>

      {/* Market List with Independent Scrollbar */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
        {getFilteredMarkets().map((market, index) => (
          <button
            key={index}
            onClick={() => onPairSelect(`${market.symbol}/${market.pair}`)}
            className={`w-full grid grid-cols-4 gap-2 p-3 text-xs hover:bg-gray-800 transition-colors border-b border-gray-800/50 ${
              selectedPair === `${market.symbol}/${market.pair}` ? 'bg-gray-800' : ''
            }`}
          >
            <div className="flex items-center space-x-2 text-left">
              <span className="text-gray-500">⭐</span>
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {market.symbol}/{market.pair}
              </span>
              {market.leverage && (
                <span className="text-yellow-400 text-xs">{market.leverage}</span>
              )}
            </div>
            <div className={`text-right font-mono ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {market.lastPrice}
            </div>
            <div className={`text-right font-mono ${
              market.isNegative ? 'text-red-500' : 'text-green-500'
            }`}>
              {market.change}
            </div>
            <div className="text-right">
              <button className="text-gray-500 hover:text-white">⋯</button>
            </div>
          </button>
        ))}
      </div>

    
    </div>
  )
}

export default MarketSearch
