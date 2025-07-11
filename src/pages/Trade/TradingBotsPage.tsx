import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import BotMarketplace from '../../components/Trading/BotMarketplace'

const TradingBotsPage = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('spot-grid')
  const [showCreateBot, setShowCreateBot] = useState(false)
  const [selectedBot, setSelectedBot] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAllBots, setShowAllBots] = useState(true)
  const [showDailyPicks, setShowDailyPicks] = useState(false)
  const [showBotMarketplace, setShowBotMarketplace] = useState(false)
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [totalBalance, setTotalBalance] = useState(0)
  const [todaysPnl, setTodaysPnl] = useState(0)

  const tabs = [
    { id: 'spot-grid', label: 'Spot Grid', icon: 'fas fa-th' },
    { id: 'futures-grid', label: 'Futures Grid', icon: 'fas fa-chart-line' },
    { id: 'dca', label: 'DCA', icon: 'fas fa-layer-group' },
    { id: 'rebalancing', label: 'Rebalancing', icon: 'fas fa-balance-scale' },
    { id: 'infinity-grid', label: 'Infinity Grid', icon: 'fas fa-infinity' },
    { id: 'my-bots', label: 'My Bots', icon: 'fas fa-robot' }
  ]

  const spotGridBots = [
    {
      id: 1,
      pair: 'BTC/USDT',
      type: 'Spot Grid',
      status: 'Running',
      profit: '+$1,234.56',
      profitPercent: '+12.34%',
      gridNumber: 50,
      investment: '$10,000',
      apy: '23.45%',
      duration: '7d 12h'
    },
    {
      id: 2,
      pair: 'ETH/USDT',
      type: 'Spot Grid',
      status: 'Completed',
      profit: '+$567.89',
      profitPercent: '+5.67%',
      gridNumber: 30,
      investment: '$5,000',
      apy: '18.92%',
      duration: '3d 8h'
    }
  ]

  const botTemplates = [
    {
      id: 1,
      name: 'BTC/USDT Grid Bot',
      type: 'Spot Grid',
      profitRange: '15-25%',
      timeframe: '7-30 days',
      riskLevel: 'Medium',
      minInvestment: '$100',
      description: 'Automated grid trading for BTC/USDT with optimized parameters',
      performance: '+18.5%',
      users: '2.1K'
    },
    {
      id: 2,
      name: 'ETH DCA Strategy',
      type: 'DCA',
      profitRange: '10-20%',
      timeframe: '30-90 days',
      riskLevel: 'Low',
      minInvestment: '$50',
      description: 'Dollar cost averaging strategy for ETH accumulation',
      performance: '+14.2%',
      users: '1.8K'
    },
    {
      id: 3,
      name: 'Altcoin Rebalancing',
      type: 'Rebalancing',
      profitRange: '20-35%',
      timeframe: '14-60 days',
      riskLevel: 'High',
      minInvestment: '$500',
      description: 'Dynamic portfolio rebalancing across top altcoins',
      performance: '+28.7%',
      users: '956'
    }
  ]

  // Define bot data by category
  const botsByCategory = {
    All: [
      {
        id: 'spot-grid',
        title: 'Spot Grid',
        description: 'Buy low and sell high 24/7 automatically with just one click.',
        icon: 'fas fa-th',
        color: 'bg-blue-500',
        features: ['Volatile Markets', 'Preset Ranges']
      },
      {
        id: 'futures-grid',
        title: 'Futures Grid',
        description: 'Amplify your purchasing power with an advanced version of Grid Trading.',
        icon: 'fas fa-chart-line',
        color: 'bg-orange-500',
        features: ['Short Orders', 'USD-M / COIN-M']
      },
      {
        id: 'arbitrage-bot',
        title: 'Arbitrage Bot',
        description: 'A delta neutral strategy to earn Funding Fee effortlessly.',
        icon: 'fas fa-exchange-alt',
        color: 'bg-green-500',
        features: ['Funding Rate Arbitrage', 'Hedged Price Risk']
      },
      {
        id: 'rebalancing-bot',
        title: 'Rebalancing Bot',
        description: 'A long term position strategy supporting an investment portfolio.',
        icon: 'fas fa-balance-scale',
        color: 'bg-purple-500',
        features: ['Diversify risk', 'Dynamic rebalance']
      },
      {
        id: 'spot-dca',
        title: 'Spot DCA',
        description: 'Auto-place buy/sell orders for better average price and close your position favorably.',
        icon: 'fas fa-chart-area',
        color: 'bg-teal-500',
        features: ['Advanced DCA', 'Price Optimization']
      }
    ],
    Algos: [
      {
        id: 'algo-order',
        title: 'Algo Order',
        description: 'Enhance execution of large orders in smaller blocks with intelligent algo orders. Also available via the API.',
        icon: 'fas fa-plus',
        color: 'bg-cyan-500',
        features: ['TWAP and POV', 'Reduce execution costs']
      },
      {
        id: 'futures-twap',
        title: 'Futures TWAP',
        description: 'Slice large orders into smaller ones to get a better execution price. Available on API trading.',
        icon: 'fas fa-layer-group',
        color: 'bg-indigo-500',
        features: ['Large Orders', 'Price Optimization']
      },
      {
        id: 'futures-vp',
        title: 'Futures VP',
        description: 'Split large orders across a specific market volume ratio. Available on API only.',
        icon: 'fas fa-cogs',
        color: 'bg-pink-500',
        features: ['Targeted Volume%', 'Enhanced Execution']
      }
    ],
    Sideways: [
      {
        id: 'spot-grid',
        title: 'Spot Grid',
        description: 'Buy low and sell high 24/7 automatically with just one click.',
        icon: 'fas fa-th',
        color: 'bg-blue-500',
        features: ['Volatile Markets', 'Preset Ranges']
      },
      {
        id: 'futures-grid',
        title: 'Futures Grid',
        description: 'Amplify your purchasing power with an advanced version of Grid Trading.',
        icon: 'fas fa-chart-line',
        color: 'bg-orange-500',
        features: ['Short Orders', 'USD-M / COIN-M']
      },
      {
        id: 'arbitrage-bot',
        title: 'Arbitrage Bot',
        description: 'A delta neutral strategy to earn Funding Fee effortlessly.',
        icon: 'fas fa-exchange-alt',
        color: 'bg-green-500',
        features: ['Funding Rate Arbitrage', 'Hedged Price Risk']
      },
      {
        id: 'rebalancing-bot',
        title: 'Rebalancing Bot',
        description: 'A long term position strategy supporting an investment portfolio.',
        icon: 'fas fa-balance-scale',
        color: 'bg-purple-500',
        features: ['Diversify risk', 'Dynamic rebalance']
      }
    ],
    Bullish: [
      {
        id: 'spot-grid',
        title: 'Spot Grid',
        description: 'Buy low and sell high 24/7 automatically with just one click.',
        icon: 'fas fa-th',
        color: 'bg-blue-500',
        features: ['Volatile Markets', 'Preset Ranges']
      },
      {
        id: 'rebalancing-bot',
        title: 'Rebalancing Bot',
        description: 'A long term position strategy supporting an investment portfolio.',
        icon: 'fas fa-balance-scale',
        color: 'bg-purple-500',
        features: ['Diversify risk', 'Dynamic rebalance']
      },
      {
        id: 'spot-dca',
        title: 'Spot DCA',
        description: 'Auto-place buy/sell orders for better average price and close your position favorably.',
        icon: 'fas fa-chart-area',
        color: 'bg-teal-500',
        features: ['Advanced DCA', 'Price Optimization']
      }
    ],
    Bearish: [
      {
        id: 'futures-grid',
        title: 'Futures Grid',
        description: 'Amplify your purchasing power with an advanced version of Grid Trading.',
        icon: 'fas fa-chart-line',
        color: 'bg-orange-500',
        features: ['Short Orders', 'USD-M / COIN-M']
      },
      {
        id: 'spot-dca',
        title: 'Spot DCA',
        description: 'Auto-place buy/sell orders for better average price and close your position favorably.',
        icon: 'fas fa-chart-area',
        color: 'bg-teal-500',
        features: ['Advanced DCA', 'Price Optimization']
      }
    ]
  }

  const dailyPicksData = [
    {
      pair: 'ETH/USDC',
      followers: 244,
      roi: '14.68%',
      pnl: '$2,234.10',
      runtime: '29d 1h 53m',
      minInvestment: '521.58 USDC',
      matchedTrades: '12/193',
      mdd: '3.98%',
      chart: [/* chart data points */]
    },
    {
      pair: 'BUSDT',
      type: 'Perp Neutral 10x Trailing',
      followers: 251,
      roi: '141.89%',
      pnl: '$8.41',
      runtime: '9d 13h 38m',
      minInvestment: '3.45 USDT',
      matchedTrades: '2/12',
      mdd: '61.82%',
      chart: [/* chart data points */]
    }
  ]

  // Function to get limited bots based on showAllBots state
  const getDisplayedBots = () => {
    const allBots = botsByCategory[activeCategory]
    if (showAllBots) {
      return allBots
    } else {
      // Show only first 4 bots when collapsed
      return allBots.slice(0, 4)
    }
  }

  // Functional button handlers
  const handleTradeNow = () => {
    // Navigate to trading interface
    console.log('Navigating to trade...')
    // Example: navigate('/trade')
  }

  const handleBotsWallet = () => {
    // Navigate to bots wallet
    console.log('Opening bots wallet...')
    // Example: navigate('/bots/wallet')
  }

  const handleLearnMore = () => {
    // Navigate to bots academy
    console.log('Opening bots academy...')
    // Example: navigate('/academy/bots')
  }

  const handleToggleBalance = () => {
    setBalanceVisible(!balanceVisible)
  }

  const handleCreateBotFromTemplate = (bot) => {
    setSelectedBot(bot)
    setShowCreateBot(true)
    console.log('Creating bot from template:', bot)
  }

  const handleCopyDailyPick = (pick) => {
    console.log('Copying daily pick:', pick)
    // Implement copy functionality
  }

  const handlePaginationDailyPicks = (direction) => {
    console.log('Daily picks pagination:', direction)
    // Implement pagination logic
  }

  const handleCategoryFilter = (category) => {
    setActiveCategory(category)
    setShowAllBots(false) // Reset to show limited bots when changing category
  }

  const handleBotMarketplaceOpen = () => {
    setShowBotMarketplace(true)
  }

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Bot Marketplace Modal */}
      {showBotMarketplace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Bot Marketplace
              </h2>
              <button
                onClick={() => setShowBotMarketplace(false)}
                className={`p-2 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <BotMarketplace />
            </div>
          </div>
        </div>
      )}

      {/* Header with Balance and Discovery */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Side - Trading Bots Info */}
              <div>
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Trading Bots
                </h1>
                
                {/* Balance Section */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Total Balance
                    </span>
                    <button 
                      onClick={handleToggleBalance}
                      className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-400'} transition-colors`}
                    >
                      <i className={`fas ${balanceVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                    </button>
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {balanceVisible ? `$${totalBalance.toFixed(2)}` : '****'}
                  </div>
                  <div className={`text-sm flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Today's PNL: <span className="text-green-500 ml-1">+ $${todaysPnl.toFixed(2)}</span>
                    <button className="ml-2">
                      <i className="fas fa-chevron-right text-xs"></i>
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={handleTradeNow}
                    className="px-4 sm:px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Trade Now
                  </button>
                  <button 
                    onClick={handleBotsWallet}
                    className={`px-4 sm:px-6 py-3 border rounded-lg font-semibold transition-colors w-full sm:w-auto ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    Bots Wallet
                  </button>
                </div>
              </div>

              {/* Right Side - Discover Section */}
              <div className="relative">
                <div className={`p-6 sm:p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} relative overflow-hidden`}>
                  {/* Bots Academy Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <i className="fas fa-robot text-blue-500"></i>
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Bots Academy
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="mb-6">
                    <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Discover Our Trading Bots
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                      Automate your trading with intelligent strategies. Easy, fast and reliable.
                    </p>
                    <button 
                      onClick={handleLearnMore}
                      className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                    >
                      Learn More
                    </button>
                  </div>

                  {/* Bot Illustration */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-lg flex items-center justify-center transform rotate-12">
                      <i className="fas fa-robot text-black text-lg sm:text-2xl"></i>
                    </div>
                  </div>

                  {/* Pagination Dots */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                      1 / 1
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <button className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                        <i className="fas fa-chevron-left text-xs"></i>
                      </button>
                      <button className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                        <i className="fas fa-chevron-right text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bot Categories Filter */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
              {['All', 'Algos', 'Sideways', 'Bullish', 'Bearish'].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${
                    category === activeCategory
                      ? 'border-blue-500 text-blue-500'
                      : theme === 'dark'
                        ? 'border-transparent text-gray-400 hover:text-gray-200'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setShowDailyPicks(true)}
                className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'} rounded transition-colors`}
              >
                <i className="fas fa-th-large"></i>
              </button>
              <button 
                onClick={handleBotMarketplaceOpen}
                className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'} rounded transition-colors`}
              >
                <i className="fas fa-store"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bot Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {getDisplayedBots().map((bot) => (
            <div key={bot.id} className={`p-4 sm:p-6 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            } transition-colors cursor-pointer group`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 ${bot.color} rounded flex items-center justify-center`}>
                  <i className={`${bot.icon} text-white text-xs sm:text-sm`}></i>
                </div>
                <h3 className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {bot.title}
                </h3>
              </div>
              <p className={`text-xs sm:text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                {bot.description}
              </p>
              <div className="space-y-2 mb-6">
                {bot.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                    <span className={`text-xs ml-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => handleCreateBotFromTemplate(bot)}
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-black font-medium rounded text-sm transition-colors"
              >
                Create
              </button>
            </div>
          ))}
        </div>

        {/* Toggle Button - Show More/Less Bots */}
        {botsByCategory[activeCategory].length > 4 && (
          <div className="text-center mt-6 sm:mt-8">
            <button 
              onClick={() => setShowAllBots(!showAllBots)}
              className="text-blue-500 hover:text-blue-600 font-medium flex items-center space-x-2 mx-auto transition-colors"
            >
              <span>{showAllBots ? 'Less Bots' : 'More Bots'}</span>
              <i className={`fas ${showAllBots ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
            </button>
          </div>
        )}
      </div>

      {/* Daily Picks Modal */}
      {showDailyPicks && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Daily Picks
              </h2>
              <button
                onClick={() => setShowDailyPicks(false)}
                className={`p-2 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Daily Picks Cards */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {dailyPicksData.map((pick, index) => (
                  <div key={index} className={`p-4 sm:p-6 rounded-lg border ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {pick.pair}
                        </h3>
                        {pick.type && (
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} block truncate`}>
                            {pick.type}
                          </span>
                        )}
                        <div className="flex items-center mt-1">
                          <i className="fas fa-users text-xs text-gray-500 mr-1"></i>
                          <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {pick.followers}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleCopyDailyPick(pick)}
                        className="px-3 sm:px-4 py-2 bg-blue-500 hover:bg-blue-600 text-black font-medium rounded-lg text-sm transition-colors whitespace-nowrap ml-4"
                      >
                        Copy
                      </button>
                    </div>

                    {/* ROI */}
                    <div className="mb-4">
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        ROI
                      </span>
                      <div className="text-2xl font-bold text-green-500 mb-2">
                        {pick.roi}
                      </div>
                      {/* Simple chart placeholder */}
                      <div className="h-16 bg-gradient-to-r from-green-500 to-green-400 rounded opacity-20 mb-4"></div>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                      <div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          PNL (USD)
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                          {pick.pnl}
                        </div>
                      </div>
                      <div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          Runtime
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                          {pick.runtime}
                        </div>
                      </div>
                      <div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          Min. Investment
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                          {pick.minInvestment}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Statistics */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-600">
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          24H/Total Matched Trades
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                          {pick.matchedTrades}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          7D MDD
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {pick.mdd}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  *Updated hourly
                </span>
                <div className="flex items-center justify-between sm:justify-end space-x-4">
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    1 / 1
                  </span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handlePaginationDailyPicks('prev')}
                      className={`p-1 ${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
                    >
                      <i className="fas fa-chevron-left text-xs"></i>
                    </button>
                    <button 
                      onClick={() => handlePaginationDailyPicks('next')}
                      className={`p-1 ${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
                    >
                      <i className="fas fa-chevron-right text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TradingBotsPage
