import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const BotMarketplace = () => {
  const { theme } = useTheme()
  const [activeMarketTab, setActiveMarketTab] = useState('Arbitrage')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFilters, setSelectedFilters] = useState({
    zone: 'Zone',
    direction: 'Direction',
    timeframe: '1-7 Days',
    roi: 'ROI',
    mdd: '7D MDD'
  })
  const [sortBy, setSortBy] = useState('3d APR')
  const [refreshing, setRefreshing] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const itemsPerPage = 6
  const totalItems = 50

  const marketTabs = ['Spot Grid', 'Futures Grid', 'Arbitrage']
  
  const filterOptions = {
    zone: ['Zone', 'USD-M', 'COIN-M'],
    direction: ['Direction', 'Long', 'Short', 'Neutral'],
    timeframe: ['1-7 Days', '7-30 Days', '30+ Days'],
    roi: ['ROI', '0-5%', '5-10%', '10%+'],
    mdd: ['7D MDD', '0-2%', '2-5%', '5%+']
  }

  const arbitrageBotData = [
    {
      buyPair: 'RVNUSDT',
      sellPair: 'RVN/USDT',
      type: 'Perp',
      badge: 'B',
      badgeColor: 'bg-green-500',
      sellBadge: 'S',
      sellBadgeColor: 'bg-red-500',
      apr3d: '1938.48%',
      apr7d: '1255.96%',
      apr30d: '607.89%',
      spreadRate: '0.1391%',
      nextFunding: '-0.1169%',
      countdown: '00:10:40',
      chart: 'volatile'
    },
    {
      buyPair: 'MEUSDT',
      sellPair: 'ME/USDT',
      type: 'Perp',
      badge: 'B',
      badgeColor: 'bg-green-500',
      sellBadge: 'S',
      sellBadgeColor: 'bg-red-500',
      apr3d: '588.06%',
      apr7d: '267.78%',
      apr30d: '59.84%',
      spreadRate: '0.1132%',
      nextFunding: '-0.0251%',
      countdown: '00:10:40',
      chart: 'decline'
    },
    {
      buyPair: 'LPTUSDT',
      sellPair: 'LPT/USDT',
      type: 'Perp',
      badge: 'B',
      badgeColor: 'bg-green-500',
      sellBadge: 'S',
      sellBadgeColor: 'bg-red-500',
      apr3d: '419.28%',
      apr7d: '2055.89%',
      apr30d: '1141.96%',
      spreadRate: '0.2015%',
      nextFunding: '-0.2334%',
      countdown: '00:10:40',
      chart: 'decline'
    }
  ]

  const generateArbitrageChart = (type) => {
    return (
      <div className="w-full h-16 relative mb-4">
        <svg width="100%" height="100%" className="absolute inset-0">
          {type === 'volatile' ? (
            // Volatile chart with ups and downs
            <path
              d="M 10 40 L 30 25 L 50 35 L 70 20 L 90 30 L 110 15 L 130 25 L 150 10 L 170 20"
              stroke="#EF4444"
              strokeWidth="2"
              fill="none"
            />
          ) : (
            // Declining chart
            <path
              d="M 10 20 Q 30 25 50 30 Q 70 35 90 40 Q 110 45 130 50 L 170 55"
              stroke="#EF4444"
              strokeWidth="2"
              fill="none"
            />
          )}
        </svg>
      </div>
    )
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderPagination = () => {
    const pages = []
    const maxVisible = 5
    
    // Always show first page
    if (currentPage > 3) {
      pages.push(1)
      if (currentPage > 4) pages.push('...')
    }
    
    // Show pages around current page
    const start = Math.max(1, currentPage - 2)
    const end = Math.min(totalPages, currentPage + 2)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    // Always show last page
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) pages.push('...')
      pages.push(totalPages)
    }
    
    return pages
  }

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }

  const handleSettingsClick = () => {
    // Handle settings modal
    console.log('Settings clicked')
  }

  const handleCreateBot = (botData) => {
    // Handle bot creation
    console.log('Creating bot:', botData)
  }

  const handleConfigureView = () => {
    // Handle view configuration
    console.log('Configure view clicked')
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-4 sm:py-8`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Bot Marketplace
              </h2>
              <i className={`fas fa-info-circle text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
            </div>
            <button 
              onClick={handleRefresh}
              disabled={refreshing}
              className={`p-2 rounded transition-colors ${
                refreshing ? 'opacity-50 cursor-not-allowed' : ''
              } ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <i className={`fas fa-sync-alt ${refreshing ? 'animate-spin' : ''}`}></i>
            </button>
          </div>
        </div>

        {/* Tabs and Filters */}
        <div className="mb-6 sm:mb-8">
          {/* Market Type Tabs */}
          <div className="flex space-x-4 sm:space-x-8 mb-4 sm:mb-6 overflow-x-auto">
            {marketTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveMarketTab(tab)}
                className={`text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${
                  tab === activeMarketTab
                    ? 'border-blue-500 text-blue-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button className={`w-full px-4 py-2 rounded border text-sm flex items-center justify-between ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}>
                <span>Filters</span>
                <i className="fas fa-filter"></i>
              </button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {Object.entries(filterOptions).map(([key, options]) => (
                <select
                  key={key}
                  value={selectedFilters[key]}
                  onChange={(e) => handleFilterChange(key, e.target.value)}
                  className={`px-3 py-2 rounded border text-sm ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
            </div>

            {/* Mobile Filters */}
            <div className="lg:hidden grid grid-cols-2 gap-2">
              {Object.entries(filterOptions).slice(0, 4).map(([key, options]) => (
                <select
                  key={key}
                  value={selectedFilters[key]}
                  onChange={(e) => handleFilterChange(key, e.target.value)}
                  className={`px-3 py-2 rounded border text-sm ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
            </div>

            <div className="flex items-center justify-between lg:justify-end space-x-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-3 py-2 rounded border text-sm ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option>3d APR</option>
                <option>7d APR</option>
                <option>30d APR</option>
              </select>
              <div className="flex space-x-2">
                <button 
                  onClick={handleSettingsClick}
                  className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} rounded`}
                >
                  <i className="fas fa-cog"></i>
                </button>
                <button 
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} rounded ${
                    refreshing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <i className={`fas fa-sync-alt ${refreshing ? 'animate-spin' : ''}`}></i>
                </button>
                <button 
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} rounded`}
                >
                  <i className={`fas ${viewMode === 'grid' ? 'fa-list' : 'fa-th'}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bot Grid */}
        <div className={`grid gap-4 sm:gap-6 mb-6 sm:mb-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {arbitrageBotData.map((bot, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              } transition-colors cursor-pointer`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  {/* Buy Pair */}
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`w-4 h-4 sm:w-5 sm:h-5 ${bot.badgeColor} rounded text-white text-xs flex items-center justify-center font-bold`}>
                      {bot.badge}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {bot.buyPair}
                    </h3>
                    <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {bot.type}
                    </span>
                  </div>
                  {/* Sell Pair */}
                  <div className="flex items-center space-x-2">
                    <span className={`w-4 h-4 sm:w-5 sm:h-5 ${bot.sellBadgeColor} rounded text-white text-xs flex items-center justify-center font-bold`}>
                      {bot.sellBadge}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {bot.sellPair}
                    </h3>
                  </div>
                </div>
                <button 
                  onClick={() => handleCreateBot(bot)}
                  className="px-3 sm:px-4 py-2 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded text-sm transition-colors whitespace-nowrap ml-2"
                >
                  Create
                </button>
              </div>

              {/* 3d APR */}
              <div className="mb-2">
                <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  3d APR
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-4">
                  {bot.apr3d}
                </div>
              </div>

              {/* Chart */}
              {generateArbitrageChart(bot.chart)}

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                <div>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    7d APR
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold text-green-500`}>
                    {bot.apr7d}
                  </div>
                </div>
                <div>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    30d APR
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold text-green-500`}>
                    {bot.apr30d}
                  </div>
                </div>
                <div>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Spread Rate
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {bot.spreadRate}
                  </div>
                </div>
              </div>

              {/* Bottom Statistics */}
              <div className={`flex items-center justify-between pt-4 border-t ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
              }`}>
                <div>
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Next Funding
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {bot.nextFunding}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Countdown
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {bot.countdown}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Footer with Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Last updated on 2025-01-23 11:55:47. Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
          </span>
          <div className="flex items-center justify-center sm:justify-end space-x-1 sm:space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-2 sm:px-3 py-1 rounded text-sm ${
                currentPage === 1
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:bg-gray-100'
              } ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Page Numbers */}
            <div className="hidden sm:flex">
              {renderPagination().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                  disabled={page === '...'}
                  className={`px-3 py-1 rounded text-sm min-w-[32px] ${
                    page === currentPage
                      ? 'bg-blue-500 text-black font-semibold'
                      : page === '...'
                        ? 'cursor-default'
                        : theme === 'dark'
                          ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Mobile Page Info */}
            <div className="sm:hidden px-3 py-1">
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {currentPage} / {totalPages}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-2 sm:px-3 py-1 rounded text-sm ${
                currentPage === totalPages
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:bg-gray-100'
              } ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotMarketplace
