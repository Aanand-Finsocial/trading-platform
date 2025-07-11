import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Markets = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('marketCap')
  const [sortOrder, setSortOrder] = useState('desc')
  const [animateStats, setAnimateStats] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    setAnimateStats(true)
  }, [])

  const marketData = [
    { 
      symbol: 'BTC', 
      name: 'Bitcoin', 
      price: '42,530.25', 
      change: '+2.45%', 
      volume: '2.4B', 
      marketCap: '832B', 
      isPositive: true, 
      category: 'top',
      icon: '₿',
      sparkline: [42000, 42200, 42100, 42400, 42300, 42530]
    },
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      price: '2,680.50', 
      change: '+1.85%', 
      volume: '1.8B', 
      marketCap: '322B', 
      isPositive: true, 
      category: 'top',
      icon: 'Ξ',
      sparkline: [2650, 2670, 2660, 2675, 2680, 2680]
    },
    { 
      symbol: 'BNB', 
      name: 'BNB', 
      price: '315.20', 
      change: '-0.75%', 
      volume: '456M', 
      marketCap: '48.2B', 
      isPositive: false, 
      category: 'top',
      icon: 'B',
      sparkline: [318, 316, 315, 314, 315, 315]
    },
    { 
      symbol: 'SOL', 
      name: 'Solana', 
      price: '98.75', 
      change: '+5.15%', 
      volume: '892M', 
      marketCap: '42.8B', 
      isPositive: true, 
      category: 'trending',
      icon: 'S',
      sparkline: [94, 95, 96, 97, 98, 98.75]
    },
    { 
      symbol: 'ADA', 
      name: 'Cardano', 
      price: '0.485', 
      change: '+3.20%', 
      volume: '234M', 
      marketCap: '17.1B', 
      isPositive: true, 
      category: 'altcoin',
      icon: 'A',
      sparkline: [0.47, 0.475, 0.48, 0.482, 0.484, 0.485]
    },
    { 
      symbol: 'DOT', 
      name: 'Polkadot', 
      price: '7.85', 
      change: '-1.25%', 
      volume: '178M', 
      marketCap: '9.8B', 
      isPositive: false, 
      category: 'altcoin',
      icon: 'D',
      sparkline: [7.95, 7.90, 7.88, 7.86, 7.85, 7.85]
    },
    { 
      symbol: 'MATIC', 
      name: 'Polygon', 
      price: '0.89', 
      change: '+4.67%', 
      volume: '145M', 
      marketCap: '8.3B', 
      isPositive: true, 
      category: 'trending',
      icon: 'M',
      sparkline: [0.85, 0.86, 0.87, 0.88, 0.89, 0.89]
    },
    { 
      symbol: 'AVAX', 
      name: 'Avalanche', 
      price: '36.42', 
      change: '+2.89%', 
      volume: '298M', 
      marketCap: '13.4B', 
      isPositive: true, 
      category: 'altcoin',
      icon: 'A',
      sparkline: [35.4, 35.8, 36.0, 36.2, 36.3, 36.42]
    },
  ]

  const categories = [
    { id: 'all', name: 'All Markets', icon: 'fas fa-list' },
    { id: 'top', name: 'Top Gainers', icon: 'fas fa-arrow-up' },
    { id: 'trending', name: 'Trending', icon: 'fas fa-trending-up' },
    { id: 'altcoin', name: 'Altcoins', icon: 'fas fa-coins' },
  ]

  const filteredMarkets = marketData.filter(market => {
    const matchesCategory = activeTab === 'all' || market.category === activeTab
    const matchesSearch = market.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         market.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const MiniSparkline = ({ data, isPositive }) => (
    <svg width="60" height="20" className="inline-block">
      <polyline
        fill="none"
        stroke={isPositive ? "#10B981" : "#EF4444"}
        strokeWidth="1.5"
        points={data.map((point, index) => `${(index * 12)},${20 - ((point - Math.min(...data)) / (Math.max(...data) - Math.min(...data))) * 16}`).join(' ')}
      />
    </svg>
  )

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} pt-16 sm:pt-20`}>
      {/* Professional Hero Section */}
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Cryptocurrency Markets
            </h1>
            <p className={`text-lg sm:text-xl mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Real-time market data and professional trading insights for digital assets
            </p>
            
            {/* Live Status Indicator */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-300'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Live Market Data
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Advanced Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search by name or symbol..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 pl-12 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <i className={`fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}></i>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            {/* Professional Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-200 border text-sm ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <i className={`${category.icon} mr-1 sm:mr-2 text-xs sm:text-sm`}></i>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Market Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {[
            {
              title: 'Total Market Cap',
              value: '$1.68T',
              icon: 'fas fa-chart-area',
              change: '+2.4%'
            },
            {
              title: '24h Volume',
              value: '$76.2B',
              icon: 'fas fa-chart-bar',
              change: '+12.8%'
            },
            {
              title: 'BTC Dominance',
              value: '49.5%',
              icon: 'fab fa-bitcoin',
              change: '-0.3%'
            },
            {
              title: 'Active Markets',
              value: '350+',
              icon: 'fas fa-coins',
              change: '+15'
            }
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } ${animateStats ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
                  <i className={`${stat.icon} ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}></i>
                </div>
                <div className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </div>
              </div>
              <div>
                <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.title}
                </p>
                <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Markets Table */}
        <div className={`rounded-lg shadow-lg overflow-hidden ${
          theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Table Header */}
          <div className={`px-4 sm:px-6 py-4 border-b ${
            theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 gap-2 sm:gap-4 items-center">
              <div className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Asset
              </div>
              <div className={`font-semibold text-right text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Price
              </div>
              <div className={`font-semibold text-right text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                24h
              </div>
              <div className={`font-semibold text-right hidden sm:block text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Volume
              </div>
              <div className={`font-semibold text-right hidden lg:block text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Market Cap
              </div>
              <div className={`font-semibold text-center hidden lg:block text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Chart
              </div>
              <div className={`font-semibold text-center text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Action
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredMarkets.map((market, index) => (
              <div
                key={market.symbol}
                className={`px-4 sm:px-6 py-3 sm:py-4 transition-all duration-200 ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 gap-2 sm:gap-4 items-center">
                  {/* Asset */}
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center flex-shrink-0`}>
                      <span className={`font-bold text-xs sm:text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{market.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <div className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                        {market.symbol}
                      </div>
                      <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                        {market.name}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className={`font-semibold text-right text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <div>${market.price}</div>
                  </div>

                  {/* 24h Change */}
                  <div className={`font-medium text-right text-sm sm:text-base ${
                    market.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {market.change}
                  </div>

                  {/* Volume */}
                  <div className={`text-right hidden sm:block text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    ${market.volume}
                  </div>

                  {/* Market Cap */}
                  <div className={`text-right hidden lg:block text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    ${market.marketCap}
                  </div>

                  {/* Mini Chart */}
                  <div className="text-center hidden lg:block">
                    <MiniSparkline data={market.sparkline} isPositive={market.isPositive} />
                  </div>

                  {/* Action */}
                  <div className="text-center">
                    <Link
                      to={`/trade/${market.symbol.toLowerCase()}-usdt`}
                      className="px-2 py-1 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Trade
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Footer Info */}
        <div className="mt-8 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Data updates in real-time
            </span>
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Markets