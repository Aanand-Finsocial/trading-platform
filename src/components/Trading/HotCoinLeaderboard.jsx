import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const HotCoinLeaderboard = () => {
  const { theme } = useTheme()
  const [activeSection, setActiveSection] = useState('trending')
  const [activeGridType, setActiveGridType] = useState('futures')
  const [activeVolGridType, setActiveVolGridType] = useState('futures')
  const [currentPage, setCurrentPage] = useState(1)

  const trendingMarketData = [
    {
      market: 'ETHUSDT',
      type: 'Perp',
      running: 2347,
      neutralRatio: '832 : 1320 : 195',
      action: 'Copy'
    },
    {
      market: 'BTCUSDT',
      type: 'Perp',
      running: 2045,
      neutralRatio: '711 : 1025 : 309',
      action: 'Copy'
    },
    {
      market: 'XRPUSDT',
      type: 'Perp',
      running: 1542,
      neutralRatio: '614 : 748 : 180',
      action: 'Copy'
    },
    {
      market: 'BNBUSDT',
      type: 'Perp',
      running: 1260,
      neutralRatio: '642 : 510 : 108',
      action: 'Copy'
    },
    {
      market: 'SOLUSDT',
      type: 'Perp',
      running: 1145,
      neutralRatio: '387 : 639 : 119',
      action: 'Copy'
    },
    {
      market: 'DOGEUSDT',
      type: 'Perp',
      running: 1006,
      neutralRatio: '380 : 510 : 116',
      action: 'Copy'
    },
    {
      market: 'BUSDT',
      type: 'Perp',
      running: 876,
      neutralRatio: '758 : 26 : 92',
      action: 'Copy'
    },
    {
      market: 'ADAUSDT',
      type: 'Perp',
      running: 589,
      neutralRatio: '208 : 316 : 65',
      action: 'Copy'
    },
    {
      market: '1000PEPEUSDT',
      type: 'Perp',
      running: 577,
      neutralRatio: '218 : 306 : 53',
      action: 'Copy'
    },
    {
      market: 'BTCUSDC',
      type: 'Perp',
      running: 544,
      neutralRatio: '126 : 324 : 94',
      action: 'Copy'
    }
  ]

  const volatilityData = [
    {
      market: 'MEMEFTUSDT',
      type: 'Perp',
      volatility: 3.63,
      lastPrice: 0.001279,
      change24h: '-3.11%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'MOODENGUSDT',
      type: 'Perp',
      volatility: 3.05,
      lastPrice: 0.1926,
      change24h: '+0.65%',
      changeColor: 'text-green-500',
      action: 'Copy'
    },
    {
      market: 'HIPPOUSDT',
      type: 'Perp',
      volatility: 2.84,
      lastPrice: 0.001985,
      change24h: '-8.36%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'JELLYJELLYUSDT',
      type: 'Perp',
      volatility: 2.77,
      lastPrice: 0.02458,
      change24h: '+0.86%',
      changeColor: 'text-green-500',
      action: 'Copy'
    },
    {
      market: 'DEGOUSDT',
      type: 'Perp',
      volatility: 2.66,
      lastPrice: 1.3131,
      change24h: '+4.18%',
      changeColor: 'text-green-500',
      action: 'Copy'
    },
    {
      market: 'CHILLGUYUSDT',
      type: 'Perp',
      volatility: 2.55,
      lastPrice: 0.06213,
      change24h: '+3.41%',
      changeColor: 'text-green-500',
      action: 'Copy'
    },
    {
      market: 'PIPPINUSDT',
      type: 'Perp',
      volatility: 2.52,
      lastPrice: 0.01689,
      change24h: '-4.14%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'NEIROETHUSDT',
      type: 'Perp',
      volatility: 2.48,
      lastPrice: 0.08737,
      change24h: '-1.54%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'WCTUSDT',
      type: 'Perp',
      volatility: 2.44,
      lastPrice: 0.4227,
      change24h: '-10.82%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'BROCCOLIF3BUSDT',
      type: 'Perp',
      volatility: 2.42,
      lastPrice: 0.010157,
      change24h: '-5.67%',
      changeColor: 'text-red-500',
      action: 'Copy'
    }
  ]

  const spotGridTrendingData = [
    {
      market: 'BTC/USDT',
      running: 9278,
      action: 'Copy'
    },
    {
      market: 'ETH/USDT',
      running: 6252,
      action: 'Copy'
    },
    {
      market: 'PEPE/USDT',
      running: 5286,
      action: 'Copy'
    },
    {
      market: 'DOGE/USDT',
      running: 4910,
      action: 'Copy'
    },
    {
      market: 'BTC/USDC',
      running: 3058,
      action: 'Copy'
    },
    {
      market: 'SOL/USDT',
      running: 2883,
      action: 'Copy'
    },
    {
      market: 'PEPE/USDC',
      running: 2500,
      action: 'Copy'
    },
    {
      market: 'XRP/USDT',
      running: 2080,
      action: 'Copy'
    },
    {
      market: 'SHIB/USDT',
      running: 1851,
      action: 'Copy'
    },
    {
      market: 'ETH/USDC',
      running: 1817,
      action: 'Copy'
    }
  ]

  const spotGridVolatilityData = [
    {
      market: 'RVN/BTC',
      volatility: 5.02,
      lastPrice: 0.00000014,
      change24h: '-22.22%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'ZIL/BTC',
      volatility: 4.09,
      lastPrice: 0.0000001,
      change24h: '-9.09%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'ONE/BTC',
      volatility: 3.99,
      lastPrice: 0.00000011,
      change24h: '-8.33%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'DATA/BTC',
      volatility: 3.90,
      lastPrice: 0.00000012,
      change24h: '-7.69%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'PEOPLE/BTC',
      volatility: 2.91,
      lastPrice: 0.00000019,
      change24h: '-5.00%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'DEGO/USDT',
      volatility: 2.66,
      lastPrice: 1.313,
      change24h: '+4.37%',
      changeColor: 'text-green-500',
      action: 'Copy'
    },
    {
      market: 'VET/BTC',
      volatility: 2.64,
      lastPrice: 0.00000022,
      change24h: '-4.35%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'GALA/BTC',
      volatility: 2.63,
      lastPrice: 0.00000015,
      change24h: '-6.25%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'ANKR/BTC',
      volatility: 2.54,
      lastPrice: 0.00000015,
      change24h: '-6.25%',
      changeColor: 'text-red-500',
      action: 'Copy'
    },
    {
      market: 'RVN/USDT',
      volatility: 2.40,
      lastPrice: 0.0143,
      change24h: '-25.33%',
      changeColor: 'text-red-500',
      action: 'Copy'
    }
  ]

  const handlePageChange = (page) => {
    if (page >= 1 && page <= 6) {
      setCurrentPage(page)
    }
  }

  const renderPagination = (totalPages = 6) => {
    const pages = []
    for (let i = 1; i <= Math.min(6, totalPages); i++) {
      pages.push(i)
    }
    return pages
  }

  // Function to get current data based on active grid type
  const getCurrentTrendingData = () => {
    return activeGridType === 'spot' ? spotGridTrendingData : trendingMarketData
  }

  const getCurrentVolatilityData = () => {
    return activeVolGridType === 'spot' ? spotGridVolatilityData : volatilityData
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Hot Coin Leaderboard
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trending Market Top 10 */}
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Trending Market Top 10
                  </h3>
                  <i className={`fas fa-info-circle text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                </div>
              </div>

              <div className={`text-xs mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Last updated on 2025-06-06 11:56:29.
              </div>

              {/* Grid Type Tabs */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setActiveGridType('spot')}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeGridType === 'spot'
                      ? 'bg-blue-500 text-black'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Spot Grid
                </button>
                <button
                  onClick={() => setActiveGridType('futures')}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeGridType === 'futures'
                      ? 'bg-blue-500 text-black'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Futures Grid
                </button>
                <select className={`px-3 py-2 rounded border text-sm ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option>USD⊖-M</option>
                  <option>COIN-M</option>
                </select>
              </div>

              {/* Table Header */}
              <div className={`grid grid-cols-3 gap-4 pb-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <div>Market</div>
                <div>Running</div>
                <div>Action</div>
              </div>

              {/* Table Data */}
              <div className="space-y-3 mt-3">
                {getCurrentTrendingData().map((item, index) => (
                  <div key={index} className={`grid grid-cols-3 gap-4 py-2 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} rounded transition-colors`}>
                    <div>
                      <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.market}
                      </div>
                    </div>
                    <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.running}
                    </div>
                    <div>
                      <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-black font-medium rounded text-xs transition-colors">
                        {item.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <div></div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-1 ${
                      currentPage === 1 
                        ? 'cursor-not-allowed opacity-50' 
                        : 'cursor-pointer hover:bg-gray-100'
                    } ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
                  >
                    <i className="fas fa-chevron-left text-xs"></i>
                  </button>
                  {renderPagination().map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        page === currentPage
                          ? 'bg-blue-500 text-black font-semibold'
                          : theme === 'dark'
                            ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === 6}
                    className={`p-1 ${
                      currentPage === 6 
                        ? 'cursor-not-allowed opacity-50' 
                        : 'cursor-pointer hover:bg-gray-100'
                    } ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Volatility Top 10 */}
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Volatility Top 10
                  </h3>
                  <i className={`fas fa-info-circle text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                </div>
              </div>

              <div className={`text-xs mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Last updated on 2025-06-06 11:56:29.
              </div>

              {/* Grid Type Tabs */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setActiveVolGridType('spot')}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeVolGridType === 'spot'
                      ? 'bg-blue-500 text-black'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Spot Grid
                </button>
                <button
                  onClick={() => setActiveVolGridType('futures')}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeVolGridType === 'futures'
                      ? 'bg-blue-500 text-black'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Futures Grid
                </button>
                <select className={`px-3 py-2 rounded border text-sm ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option>USD⊖-M</option>
                  <option>COIN-M</option>
                </select>
              </div>

              {/* Table Header */}
              <div className={`grid grid-cols-5 gap-3 pb-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <div>Market</div>
                <div>Volatility</div>
                <div>Last Price</div>
                <div>24h%</div>
                <div>Action</div>
              </div>

              {/* Table Data */}
              <div className="space-y-3 mt-3">
                {getCurrentVolatilityData().map((item, index) => (
                  <div key={index} className={`grid grid-cols-5 gap-3 py-2 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} rounded transition-colors`}>
                    <div>
                      <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.market}
                      </div>
                    </div>
                    <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.volatility}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.lastPrice}
                    </div>
                    <div className={`text-sm font-semibold ${item.changeColor}`}>
                      {item.change24h}
                    </div>
                    <div>
                      <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-black font-medium rounded text-xs transition-colors">
                        {item.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <div></div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-1 ${
                      currentPage === 1 
                        ? 'cursor-not-allowed opacity-50' 
                        : 'cursor-pointer hover:bg-gray-100'
                    } ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
                  >
                    <i className="fas fa-chevron-left text-xs"></i>
                  </button>
                  {renderPagination().map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        page === currentPage
                          ? 'bg-blue-500 text-black font-semibold'
                          : theme === 'dark'
                            ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === 6}
                    className={`p-1 ${
                      currentPage === 6 
                        ? 'cursor-not-allowed opacity-50' 
                        : 'cursor-pointer hover:bg-gray-100'
                    } ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotCoinLeaderboard
