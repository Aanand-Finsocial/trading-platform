import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isFuturesDropdownOpen, setIsFuturesDropdownOpen] = useState(false)
  const [isTradeDropdownOpen, setIsTradeDropdownOpen] = useState(false)
  const [isEarnDropdownOpen, setIsEarnDropdownOpen] = useState(false)
  const [isSquareDropdownOpen, setIsSquareDropdownOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const [isNewOptionOpen, setIsNewOptionOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { theme, toggleTheme } = useTheme()
  const { user, isAuthenticated, notifications, unreadCount, markNotificationAsRead, logout } = useUser()
  const location = useLocation()

  const navItems = [
    { path: '/buy-crypto', label: 'Buy Crypto' },
    { path: '/markets', label: 'Markets' },
    { path: '/trade', label: 'Trade', hasDropdown: true },
    { path: '/futures', label: 'Futures', hasDropdown: true },
    { path: '/earn', label: 'Earn', hasDropdown: true },
    { path: '/square', label: 'Square', hasDropdown: true },
    { path: '/more', label: 'More', hasDropdown: true }
  ]

  const tradeDropdownItems = {
    basic: [
      { 
        path: '/trade/spot', 
        label: 'Spot', 
        icon: 'fas fa-circle', 
        description: 'Buy and sell on the Spot market with advanced tools' 
      },
      { 
        path: '/trade/margin', 
        label: 'Margin', 
        icon: 'fas fa-chart-line', 
        description: 'Increase your profits with leverage' 
      },
      { 
        path: '/trade/p2p', 
        label: 'P2P', 
        icon: 'fas fa-users', 
        description: 'Buy & sell cryptocurrencies using bank transfer and 800+ options' 
      },
      { 
        path: '/trade/convert', 
        label: 'Convert & Block Trade', 
        icon: 'fas fa-exchange-alt', 
        description: 'The easiest way to trade at all sizes' 
      }
    ],
    advanced: [
      { 
        path: '/trade/alpha', 
        label: 'Alpha', 
        icon: 'fas fa-rocket', 
        description: 'Quick access to Web3 via Alpha Trading',
        isNew: true 
      },
      { 
        path: '/trade/trading-bots', 
        label: 'Trading Bots', 
        icon: 'fas fa-robot', 
        description: 'Trade smarter with our various automated strategies - easy, fast and reliable' 
      },
      { 
        path: '/trade/copy-trading', 
        label: 'Copy Trading', 
        icon: 'fas fa-copy', 
        description: 'Follow the most popular traders' 
      },
      { 
        path: '/trade/apis', 
        label: 'APIs', 
        icon: 'fas fa-code', 
        description: 'Unlimited opportunities with one key' 
      }
    ]
  }

  const earnDropdownItems = [
    { 
      path: '/earn', 
      label: 'Overview', 
      icon: 'fas fa-chart-pie', 
      description: 'View your earning portfolio and performance' 
    },
    { 
      path: '/earn/simple-earn', 
      label: 'Simple Earn', 
      icon: 'fas fa-piggy-bank', 
      description: 'Easy and secure ways to earn rewards on your crypto'
    },
    { 
      path: '/earn/advanced-earns', 
      label: 'Advanced Earns', 
      icon: 'fas fa-chart-line', 
      description: 'High-yield DeFi products for experienced users'
    },
    { 
      path: '/earn/loans', 
      label: 'Loans', 
      icon: 'fas fa-handshake', 
      description: 'Borrow or lend crypto assets with competitive rates'
    }
  ]

  const futuresDropdownItems = [
    { path: '/futures/usd-m', label: 'USD-M Futures', icon: 'fas fa-dollar-sign', description: 'Trade perpetual contracts settled in USDT' },
    { path: '/futures/coin-m', label: 'COIN-M Futures', icon: 'fas fa-coins', description: 'Trade contracts settled in cryptocurrency' },
    { path: '/futures/options', label: 'Options', icon: 'fas fa-chart-line', description: 'Trade crypto options with limited risk' }
  ]

  const squareDropdownItems = [
    { 
      path: '/square', 
      label: 'Square', 
      icon: 'fas fa-th-large', 
      description: 'Social trading and community insights' 
    },
    { 
      path: '/square/academy', 
      label: 'Academy (Learn & Earn)', 
      icon: 'fas fa-graduation-cap', 
      description: 'Learn crypto trading and earn rewards',
      isNew: true 
    },
    { 
      path: '/square/blog', 
      label: 'Blog', 
      icon: 'fas fa-blog', 
      description: 'Latest news and articles on crypto and trading' 
    },
    { 
      path: '/square/research', 
      label: 'Research', 
      icon: 'fas fa-chart-bar', 
      description: 'In-depth analysis and reports on cryptocurrencies' 
    }
  ]

  const moreDropdownItems = {
    services: [
      { 
        path: '/vip-institutional', 
        label: 'VIP & Institutional', 
        icon: 'fas fa-crown', 
        description: 'Exclusive benefits and services for VIP and institutional clients' 
      },
      { 
        path: '/affiliate', 
        label: 'Affiliate', 
        icon: 'fas fa-users', 
        description: 'Join our affiliate program and earn commissions by promoting our platform' 
      },
      { 
        path: '/referral', 
        label: 'Referral', 
        icon: 'fas fa-share-alt', 
        description: 'Invite friends and earn rewards for every successful referral' 
      },
      { 
        path: '/pay', 
        label: 'Pay', 
        icon: 'fas fa-credit-card', 
        description: 'Fast and secure cryptocurrency payments' 
      },
      { 
        path: '/finsocial-wallet', 
        label: 'FinSocial Wallet', 
        icon: 'fas fa-wallet', 
        description: 'Secure multi-chain wallet for all your crypto assets' 
      },
      { 
        path: '/charity', 
        label: 'Charity', 
        icon: 'fas fa-heart', 
        description: 'Make a difference with cryptocurrency donations' 
      },
      { 
        path: '/travel', 
        label: 'Travel Rule', 
        icon: 'fas fa-plane', 
        description: 'Enhance transparency and combat financial crimes such as money laundering and terrorism financing' 
      }
    ],
    products: [
      { 
        path: '/launchpool', 
        label: 'Launchpool', 
        icon: 'fas fa-rocket', 
        description: 'Stake tokens to farm new token launches and earn rewards' 
      },
      { 
        path: '/megadrop', 
        label: 'Megadrop', 
        icon: 'fas fa-gift', 
        description: 'Participate in exclusive token airdrops and special campaigns' 
      },
      { 
        path: '/miningpool', 
        label: 'Mining Pool', 
        icon: 'fas fa-tools', 
        description: 'Join mining pools to earn cryptocurrency through collective mining' 
      },
      { 
        path: '/nft', 
        label: 'NFT Marketplace', 
        icon: 'fas fa-image', 
        description: 'Trade, create, and collect unique digital assets and NFTs' 
      },
      { 
        path: '/fan-token', 
        label: 'Fan Token', 
        icon: 'fas fa-star', 
        description: 'Connect with your favorite teams through exclusive fan tokens' 
      },
      { 
        path: '/chain', 
        label: 'BNB Chain', 
        icon: 'fas fa-link', 
        description: 'High-performance blockchain for decentralized applications' 
      }
    ]
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const toggleNotifications = () => setIsNotificationOpen(!isNotificationOpen)
  const closeNotifications = () => setIsNotificationOpen(false)

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)
  const closeProfile = () => setIsProfileOpen(false)

  const toggleFuturesDropdown = () => setIsFuturesDropdownOpen(!isFuturesDropdownOpen)
  const closeFuturesDropdown = () => setIsFuturesDropdownOpen(false)

  const toggleTradeDropdown = () => setIsTradeDropdownOpen(!isTradeDropdownOpen)
  const closeTradeDropdown = () => setIsTradeDropdownOpen(false)

  const toggleEarnDropdown = () => setIsEarnDropdownOpen(!isEarnDropdownOpen)
  const closeEarnDropdown = () => setIsEarnDropdownOpen(false)

  const toggleSquareDropdown = () => setIsSquareDropdownOpen(!isSquareDropdownOpen)
  const closeSquareDropdown = () => setIsSquareDropdownOpen(false)

  const toggleMoreDropdown = () => setIsMoreDropdownOpen(!isMoreDropdownOpen)
  const closeMoreDropdown = () => setIsMoreDropdownOpen(false)

  const toggleNewOption = () => setIsNewOptionOpen(!isNewOptionOpen)
  const closeNewOption = () => setIsNewOptionOpen(false)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    closeSearch()
  }

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markNotificationAsRead(notification.id)
    }
    closeNotifications()
  }

  const handleLogout = () => {
    logout()
    closeProfile()
  }

  return (
    <nav className={`fixed top-0 w-full ${
      theme === 'dark' 
        ? 'bg-gray-900/95 backdrop-blur-lg border-gray-700 shadow-2xl' 
        : 'bg-white/95 backdrop-blur-lg border-gray-200 shadow-xl'
    } border-b z-50 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group" onClick={closeMenu}>
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <i className="fas fa-chart-line text-white text-sm sm:text-lg"></i>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300 -z-10"></div>
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-xl font-bold">
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Fin</span>
                  <span className="text-purple-600">Social</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-1">
              {navItems.map(item => (
                item.hasDropdown ? (
                  <div key={item.path} className="relative group">
                    <button
                      onClick={() => {
                        setIsFuturesDropdownOpen(item.label === 'Futures' ? !isFuturesDropdownOpen : false);
                        setIsTradeDropdownOpen(item.label === 'Trade' ? !isTradeDropdownOpen : false);
                        setIsEarnDropdownOpen(item.label === 'Earn' ? !isEarnDropdownOpen : false);
                        setIsSquareDropdownOpen(item.label === 'Square' ? !isSquareDropdownOpen : false);
                        setIsMoreDropdownOpen(item.label === 'More' ? !isMoreDropdownOpen : false);
                      }}
                      className={`flex items-center px-2 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                        location.pathname.startsWith(item.path)
                          ? theme === 'dark'
                            ? 'text-blue-400 bg-gradient-to-r from-blue-900/40 to-purple-900/40 shadow-lg'
                            : 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <i className="fas fa-chevron-down ml-1 lg:ml-2 text-xs transform group-hover:rotate-180 transition-transform duration-300"></i>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    {/* Enhanced Trade Dropdown */}
                    {item.label === 'Trade' && isTradeDropdownOpen && (
                      <div 
                        className={`absolute top-full left-0 mt-2 w-[90vw] max-w-[650px] rounded-2xl shadow-2xl z-50 ${
                          theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                        } border animate-slideDown`}
                        onMouseEnter={() => setIsTradeDropdownOpen(true)}
                        onMouseLeave={() => setIsTradeDropdownOpen(false)}
                      >
                        <div className="py-4 lg:py-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 px-4 lg:px-6">
                            {/* Basic Column */}
                            <div>
                              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 lg:mb-4 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              } flex items-center`}>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                Basic Trading
                              </h3>
                              <div className="space-y-1 lg:space-y-2">
                                {tradeDropdownItems.basic.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.path}
                                    to={dropdownItem.path}
                                    onClick={closeTradeDropdown}
                                    className={`flex items-start p-3 lg:p-4 rounded-xl text-sm transition-all duration-300 group ${
                                      location.pathname === dropdownItem.path
                                        ? theme === 'dark'
                                          ? 'text-blue-400 bg-gradient-to-r from-blue-900/30 to-purple-900/30'
                                          : 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                                        : theme === 'dark'
                                          ? 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white'
                                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                                    }`}
                                  >
                                    <div className="relative">
                                      <i className={`${dropdownItem.icon} mr-3 lg:mr-4 text-base lg:text-lg mt-1 text-yellow-500 group-hover:scale-110 transition-transform duration-300`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold flex items-center mb-1">
                                        <span className="truncate">{dropdownItem.label}</span>
                                        {dropdownItem.isNew && (
                                          <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold animate-pulse flex-shrink-0">
                                            NEW
                                          </span>
                                        )}
                                      </div>
                                      <div className={`text-xs ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                      }`}>
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Advanced Column */}
                            <div>
                              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 lg:mb-4 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              } flex items-center`}>
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                Advanced Trading
                              </h3>
                              <div className="space-y-1 lg:space-y-2">
                                {tradeDropdownItems.advanced.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.path}
                                    to={dropdownItem.path}
                                    onClick={closeTradeDropdown}
                                    className={`flex items-start p-3 lg:p-4 rounded-xl text-sm transition-all duration-300 group ${
                                      location.pathname === dropdownItem.path
                                        ? theme === 'dark'
                                          ? 'text-blue-400 bg-gradient-to-r from-blue-900/30 to-purple-900/30'
                                          : 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                                        : theme === 'dark'
                                          ? 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white'
                                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                                    }`}
                                  >
                                    <div className="relative">
                                      <i className={`${dropdownItem.icon} mr-3 lg:mr-4 text-base lg:text-lg mt-1 text-blue-500 group-hover:scale-110 transition-transform duration-300`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold flex items-center mb-1">
                                        <span className="truncate">{dropdownItem.label}</span>
                                        {dropdownItem.isNew && (
                                          <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold animate-pulse flex-shrink-0">
                                            NEW
                                          </span>
                                        )}
                                      </div>
                                      <div className={`text-xs ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                      }`}>
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Enhanced Futures Dropdown */}
                    {item.label === 'Futures' && isFuturesDropdownOpen && (
                      <div 
                        className={`absolute top-full left-0 mt-2 w-72 rounded-2xl shadow-2xl z-50 ${
                          theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                        } border animate-slideDown`}
                        onMouseEnter={() => setIsFuturesDropdownOpen(true)}
                        onMouseLeave={() => setIsFuturesDropdownOpen(false)}
                      >
                        <div className="py-2">
                          {futuresDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={closeFuturesDropdown}
                              className={`flex items-center px-4 py-3 text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-sm`}></i>
                              <div>
                                <div className="font-medium">{dropdownItem.label}</div>
                                <div className={`text-xs ${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Enhanced Earn Dropdown */}
                    {item.label === 'Earn' && isEarnDropdownOpen && (
                      <div 
                        className={`absolute top-full left-0 mt-2 w-72 rounded-2xl shadow-2xl z-50 ${
                          theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                        } border animate-slideDown`}
                        onMouseEnter={() => setIsEarnDropdownOpen(true)}
                        onMouseLeave={() => setIsEarnDropdownOpen(false)}
                      >
                        <div className="py-2">
                          {earnDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={closeEarnDropdown}
                              className={`flex items-center px-4 py-3 text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-sm text-yellow-500`}></i>
                              <div>
                                <div className="font-medium">{dropdownItem.label}</div>
                                <div className={`text-xs ${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Enhanced Square Dropdown */}
                    {item.label === 'Square' && isSquareDropdownOpen && (
                      <div 
                        className={`absolute top-full left-0 mt-2 w-72 rounded-2xl shadow-2xl z-50 ${
                          theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                        } border animate-slideDown`}
                        onMouseEnter={() => setIsSquareDropdownOpen(true)}
                        onMouseLeave={() => setIsSquareDropdownOpen(false)}
                      >
                        <div className="py-2">
                          {squareDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={closeSquareDropdown}
                              className={`flex items-center px-4 py-3 text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-sm text-purple-500`}></i>
                              <div>
                                <div className="font-medium flex items-center">
                                  {dropdownItem.label}
                                  {dropdownItem.isNew && (
                                    <span className="ml-2 bg-yellow-500 text-black text-xs px-1 py-0.5 rounded font-bold">
                                      NEW
                                    </span>
                                  )}
                                </div>
                                <div className={`text-xs ${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Enhanced More Dropdown */}
                    {item.label === 'More' && isMoreDropdownOpen && (
                      <div 
                        className={`absolute top-full left-0 mt-2 w-[90vw] max-w-[520px] rounded-2xl shadow-2xl z-50 ${
                          theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                        } border animate-slideDown`}
                        onMouseEnter={() => setIsMoreDropdownOpen(true)}
                        onMouseLeave={() => setIsMoreDropdownOpen(false)}
                      >
                        <div className="py-4">
                          <div className="grid grid-cols-2 gap-4 px-4">
                            {/* Services Column */}
                            <div>
                              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              } flex items-center`}>
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Services & Programs
                              </h3>
                              <div className="space-y-1">
                                {moreDropdownItems.services.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.path}
                                    to={dropdownItem.path}
                                    onClick={closeMoreDropdown}
                                    className={`flex items-start p-3 rounded-xl text-sm transition-all duration-300 group ${
                                      location.pathname === dropdownItem.path
                                        ? theme === 'dark'
                                          ? 'text-blue-400 bg-gradient-to-r from-blue-900/30 to-purple-900/30'
                                          : 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                                        : theme === 'dark'
                                          ? 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white'
                                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                                    }`}
                                  >
                                    <div className="relative">
                                      <i className={`${dropdownItem.icon} mr-3 text-base mt-0.5 text-green-500 group-hover:scale-110 transition-transform duration-300`}></i>
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold flex items-center mb-0.5">
                                        {dropdownItem.label}
                                        {dropdownItem.isNew && (
                                          <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                                            NEW
                                          </span>
                                        )}
                                      </div>
                                      <div className={`text-xs leading-tight ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                      }`}>
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Products Column */}
                            <div>
                              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              } flex items-center`}>
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                Products & Platforms
                              </h3>
                              <div className="space-y-1">
                                {moreDropdownItems.products.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.path}
                                    to={dropdownItem.path}
                                    onClick={closeMoreDropdown}
                                    className={`flex items-start p-3 rounded-xl text-sm transition-all duration-300 group ${
                                      location.pathname === dropdownItem.path
                                        ? theme === 'dark'
                                          ? 'text-blue-400 bg-gradient-to-r from-blue-900/30 to-purple-900/30'
                                          : 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                                        : theme === 'dark'
                                          ? 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white'
                                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                                    }`}
                                  >
                                    <div className="relative">
                                      <i className={`${dropdownItem.icon} mr-3 text-base mt-0.5 text-purple-500 group-hover:scale-110 transition-transform duration-300`}></i>
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold flex items-center mb-0.5">
                                        {dropdownItem.label}
                                        {dropdownItem.isNew && (
                                          <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                                            NEW
                                          </span>
                                        )}
                                      </div>
                                      <div className={`text-xs leading-tight ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                      }`}>
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`px-2 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                      location.pathname === item.path
                        ? theme === 'dark'
                          ? 'text-blue-400 bg-gradient-to-r from-blue-900/40 to-purple-900/40 shadow-lg'
                          : 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                )
              ))}
            </div>
          </div>
  
          {/* Enhanced Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            {/* Enhanced Search */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className={`p-2 sm:p-3 rounded-xl transition-all duration-300 group ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                <i className="fas fa-search text-sm sm:text-lg"></i>
              </button>
  
              {isSearchOpen && (
                <>
                  {/* Mobile backdrop */}
                  <div 
                    className="fixed inset-0 bg-black/30 z-40 sm:hidden" 
                    onClick={closeSearch}
                  />
                  <div className={`fixed sm:absolute left-[2.5vw] right-[2.5vw] sm:left-auto sm:right-0 top-[70px] sm:top-full mt-2 sm:w-80 rounded-2xl shadow-2xl z-50 ${
                    theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                  } border animate-slideDown`}>
                  <div className="p-3 sm:p-4 relative">
                    <form onSubmit={handleSearch}>
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search cryptocurrencies..."
                          className={`w-full px-4 py-2 sm:py-3 pl-10 sm:pl-12 pr-10 sm:pr-12 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 text-sm sm:text-base ${
                            theme === 'dark'
                              ? 'bg-gray-900 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500'
                              : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                          autoFocus
                        />
                        <i className={`fas fa-search absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}></i>
                        <button
                          type="button"
                          onClick={closeSearch}
                          className={`absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-lg transition-colors ${
                            theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <i className="fas fa-times text-sm"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                </>
              )}
            </div>
  
            {/* Enhanced Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 sm:p-3 rounded-xl transition-all duration-300 group ${
                theme === 'dark'
                  ? 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                  : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-200'
              } shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-sm sm:text-lg`}></i>
            </button>

            {/* New Option Dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={toggleNewOption}
                className={`p-2 sm:p-3 rounded-xl transition-all duration-300 group ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                <i className="fa-solid fa-file text-sm sm:text-lg text-purple-500"></i>
              </button>

              {isNewOptionOpen && (
                <>
                  {/* Mobile backdrop */}
                  <div 
                    className="fixed inset-0 bg-black/30 z-40 sm:hidden" 
                    onClick={closeNewOption}
                  />
                  <div className={`fixed sm:absolute left-[2.5vw] right-[2.5vw] sm:left-auto sm:right-0 top-[70px] sm:top-full mt-2 sm:w-64 rounded-2xl shadow-2xl z-50 ${
                    theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                  } border animate-slideDown`}>
                  <div className="p-3 sm:p-4">
                    <div className="space-y-1">
                      <Link
                        to="/dashboard"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-chart-pie mr-3 text-blue-500"></i>
                        Overview
                      </Link>
                      <Link
                        to="/assets"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-circle mr-3 text-green-500"></i>
                        Spot
                      </Link>
                      <Link
                        to="/trade/margin"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-chart-line mr-3 text-yellow-500"></i>
                        Margin
                      </Link>
                      <Link
                        to="/futures/usd-m"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-dollar-sign mr-3 text-orange-500"></i>
                        Futures
                      </Link>
                      <Link
                        to="/futures/options"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-sliders-h mr-3 text-red-500"></i>
                        Options
                      </Link>
                      <Link
                        to="/trade/trading-bots"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-robot mr-3 text-purple-500"></i>
                        Trading Bots
                      </Link>
                      <Link
                        to="/earn"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-piggy-bank mr-3"></i>
                        Earn
                      </Link>
                      <Link
                        to="/funding"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-credit-card mr-3"></i>
                        Funding
                      </Link>
                      <Link
                        to="/transaction-history"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-history mr-3"></i>
                        Transaction History
                      </Link>
                      <Link
                        to="/account-statement"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-file-invoice mr-3"></i>
                        Account Statement
                      </Link>
                      <Link
                        to="/verify"
                        onClick={closeNewOption}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className="fas fa-user-check mr-3"></i>
                        Verification
                      </Link>
                    </div>
                  </div>
                </div>
                </>
                )}
            </div>

            {/* Enhanced Notifications */}
            {isAuthenticated && (
              <div className="relative">
                <button
                  onClick={toggleNotifications}
                  className={`relative p-2 sm:p-3 rounded-xl transition-all duration-300 group ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  } shadow-lg hover:shadow-xl transform hover:scale-105`}
                >
                  <i className="fas fa-bell text-sm sm:text-lg"></i>
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold animate-pulse">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>
  
                {isNotificationOpen && (
                  <>
                    {/* Mobile backdrop */}
                    <div 
                      className="fixed inset-0 bg-black/30 z-40 sm:hidden" 
                      onClick={closeNotifications}
                    />
                    <div className={`fixed sm:absolute left-[2.5vw] right-[2.5vw] sm:left-auto sm:right-0 top-[70px] sm:top-full mt-2 sm:w-80 max-h-96 overflow-y-auto rounded-2xl shadow-2xl z-50 ${
                      theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                    } border animate-slideDown`}>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          Notifications
                        </h3>
                        <button
                          onClick={closeNotifications}
                          className={`p-1 rounded transition-colors ${
                            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          <i className="fas fa-times text-sm"></i>
                        </button>
                      </div>
                      
                      {notifications && notifications.length > 0 ? (
                        <div className="space-y-2">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              onClick={() => handleNotificationClick(notification)}
                              className={`p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                                !notification.read
                                  ? theme === 'dark'
                                    ? 'bg-blue-900/30 border border-blue-700/50'
                                    : 'bg-blue-50 border border-blue-200'
                                  : theme === 'dark'
                                    ? 'bg-gray-700/50 hover:bg-gray-700'
                                    : 'bg-gray-50 hover:bg-gray-100'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <i className={`fas ${notification.icon} mt-1 text-sm ${
                                  notification.type === 'success' ? 'text-green-500' :
                                  notification.type === 'warning' ? 'text-yellow-500' :
                                  notification.type === 'error' ? 'text-red-500' :
                                  'text-blue-500'
                                }`}></i>
                                <div className="flex-1 min-w-0">
                                  <p className={`text-xs sm:text-sm font-medium ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                  } truncate`}>
                                    {notification.title}
                                  </p>
                                  <p className={`text-xs mt-1 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                  } line-clamp-2`}>
                                    {notification.message}
                                  </p>
                                  <p className={`text-xs mt-1 ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                  }`}>
                                    {notification.time}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={`text-center py-6 sm:py-8 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          <i className="fas fa-bell-slash text-2xl sm:text-3xl mb-2"></i>
                          <p className="text-sm">No notifications</p>
                        </div>
                      )}
                    </div>
                  </div>
                  </>
                )}
              </div>
            )}
  
            {/* Enhanced Authentication */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleProfile}
                  className={`flex items-center space-x-2 sm:space-x-3 p-2 rounded-xl transition-all duration-300 group ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="font-medium hidden lg:block text-sm">{user?.name || 'User'}</span>
                  <i className="fas fa-chevron-down text-xs transform group-hover:rotate-180 transition-transform duration-300 hidden sm:block"></i>
                </button>
  
                {isProfileOpen && (
                  <>
                    {/* Mobile backdrop */}
                    <div 
                      className="fixed inset-0 bg-black/30 z-40 sm:hidden" 
                      onClick={closeProfile}
                    />
                    <div className={`fixed sm:absolute left-[2.5vw] right-[2.5vw] sm:left-auto sm:right-0 top-[70px] sm:top-full mt-2 sm:w-64 rounded-2xl shadow-2xl z-50 ${
                      theme === 'dark' ? 'bg-gray-800/95 backdrop-blur-xl border-gray-700' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                    } border animate-slideDown`}>
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-600">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm sm:text-base">
                            {user?.name?.charAt(0) || 'U'}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                            {user?.name || 'User'}
                          </p>
                          <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                            {user?.email || 'user@example.com'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <Link
                          to="/dashboard"
                          onClick={closeProfile}
                          className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                            theme === 'dark'
                              ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <i className="fas fa-tachometer-alt mr-3 w-4"></i>
                          Dashboard
                        </Link>
                        <Link
                          to="/assets"
                          onClick={closeProfile}
                          className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                            theme === 'dark'
                              ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <i className="fas fa-coins mr-3 w-4"></i>
                          Assets
                        </Link>
                        <Link
                          to="/rewards"
                          onClick={closeProfile}
                          className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                            theme === 'dark'
                              ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <i className="fas fa-gift mr-3 w-4"></i>
                          Rewards Hub
                        </Link>
                        <Link
                          to="/referrals"
                          onClick={closeProfile}
                          className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                            theme === 'dark'
                              ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <i className="fas fa-users mr-3 w-4"></i>
                          Referrals
                        </Link>
                        <Link
                          to="/settings"
                          onClick={closeProfile}
                          className={`flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                            theme === 'dark'
                              ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <i className="fas fa-cog mr-3 w-4"></i>
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className={`w-full flex items-center px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                            theme === 'dark'
                              ? 'text-red-400 hover:bg-red-900/20'
                              : 'text-red-600 hover:bg-red-50'
                          }`}
                        >
                          <i className="fas fa-sign-out-alt mr-3 w-4"></i>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                  </>
                )}
              </div>
            ) : (
              // Hide login/signup buttons on mobile - they will only show in mobile menu
              <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
                <Link
                  to="/login"
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500'
                      : 'text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400'
                  } hover:shadow-lg transform hover:scale-105`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
  
            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`xl:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200'
              } shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-sm sm:text-lg`}></i>
            </button>
          </div>
        </div>
  
        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className={`xl:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          } animate-slideDown max-h-[80vh] overflow-y-auto`}>
            <div className="pt-3 sm:pt-4 space-y-1 sm:space-y-2">
              {/* Authentication Section for Mobile - Show when not authenticated */}
              {!isAuthenticated && (
                <div className="mb-4 p-3 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/login"
                      onClick={closeMenu}
                      className={`w-full px-4 py-3 rounded-xl text-center font-semibold transition-all duration-300 text-sm ${
                        theme === 'dark'
                          ? 'text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 hover:bg-gray-800'
                          : 'text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={closeMenu}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-center font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm shadow-lg"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}

              
              {/* Profile Section for Authenticated Users in Mobile */}
              {isAuthenticated && (
                <div className="mb-4 p-3 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {user?.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                        {user?.name || 'User'}
                      </p>
                      <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                        {user?.email || 'user@example.com'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/dashboard"
                      onClick={closeMenu}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className="fas fa-tachometer-alt mr-2"></i>
                      Dashboard
                    </Link>
                    <Link
                      to="/assets"
                      onClick={closeMenu}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className="fas fa-coins mr-2"></i>
                      Assets
                    </Link>
                    <Link
                      to="/verify"
                      onClick={closeMenu}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className="fas fa-coins mr-2"></i>
                      Verify
                    </Link>
                    <Link
                      to="/funding"
                      onClick={closeMenu}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className="fas fa-coins mr-2"></i>
                      Funding
                    </Link>
                    <Link
                      to="/transaction-history"
                      onClick={closeMenu}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className="fas fa-coins mr-2"></i>
                     Transaction History
                    </Link>
                    <Link
                      to="/account-statement"
                      onClick={closeMenu}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className="fas fa-coins mr-2"></i>
                      Account Statement
                    </Link>
                    <Link
                      to="/settings"
                      onClick={closeMenu}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className="fas fa-cog mr-2"></i>
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs transition-colors ${
                        theme === 'dark'
                          ? 'text-red-400 bg-red-900/20 hover:bg-red-900/30'
                          : 'text-red-600 bg-red-50 hover:bg-red-100'
                      }`}
                    >
                      <i className="fas fa-sign-out-alt mr-2"></i>
                      Logout
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation Items */}
              {navItems.map(item => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.label === 'Futures') toggleFuturesDropdown()
                          else if (item.label === 'Trade') toggleTradeDropdown()
                          else if (item.label === 'Earn') toggleEarnDropdown()
                          else if (item.label === 'Square') toggleSquareDropdown()
                          else if (item.label === 'More') toggleMoreDropdown()
                        }}
                        className={`w-full flex items-center justify-between px-3 sm:px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 ${
                          location.pathname.startsWith(item.path)
                            ? theme === 'dark'
                              ? 'text-blue-400 bg-blue-900/20'
                              : 'text-blue-600 bg-blue-50'
                            : theme === 'dark'
                              ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-sm sm:text-base">{item.label}</span>
                        <i className={`fas fa-chevron-down transform transition-transform duration-300 ${
                          (item.label === 'Futures' && isFuturesDropdownOpen) ||
                          (item.label === 'Trade' && isTradeDropdownOpen) ||
                          (item.label === 'Earn' && isEarnDropdownOpen) ||
                          (item.label === 'Square' && isSquareDropdownOpen) ||
                          (item.label === 'More' && isMoreDropdownOpen)
                            ? 'rotate-180' : ''
                        }`}></i>
                      </button>
  
                      {/* Mobile Dropdown Content */}
                      {((item.label === 'Trade' && isTradeDropdownOpen) ||
                        (item.label === 'Futures' && isFuturesDropdownOpen) ||
                        (item.label === 'Earn' && isEarnDropdownOpen) ||
                        (item.label === 'Square' && isSquareDropdownOpen) ||
                        (item.label === 'More' && isMoreDropdownOpen)) && (
                        <div className="mt-2 ml-3 sm:ml-4 space-y-1 max-h-64 overflow-y-auto">
                          {/* Mobile dropdown items with responsive handling */}
                          {item.label === 'Trade' && [...tradeDropdownItems.basic, ...tradeDropdownItems.advanced].map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => {
                                closeMenu()
                                closeTradeDropdown()
                              }}
                              className={`flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-xs w-4`}></i>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center">
                                  <span className="truncate">{dropdownItem.label}</span>
                                  {dropdownItem.isNew && (
                                    <span className="ml-2 bg-yellow-500 text-black text-xs px-1 py-0.5 rounded font-bold flex-shrink-0">
                                      NEW
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                          {item.label === 'Futures' && futuresDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => {
                                closeMenu()
                                closeFuturesDropdown()
                              }}
                              className={`flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-xs`}></i>
                              {dropdownItem.label}
                            </Link>
                          ))}
                          {item.label === 'Earn' && earnDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => {
                                closeMenu()
                                closeEarnDropdown()
                              }}
                              className={`flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-xs text-yellow-500`}></i>
                              {dropdownItem.label}
                            </Link>
                          ))}
                          {item.label === 'Square' && squareDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => {
                                closeMenu()
                                closeSquareDropdown()
                              }}
                              className={`flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-xs text-purple-500`}></i>
                              <div>
                                <div className="font-medium flex items-center">
                                  {dropdownItem.label}
                                  {dropdownItem.isNew && (
                                    <span className="ml-2 bg-yellow-500 text-black text-xs px-1 py-0.5 rounded font-bold">
                                      NEW
                                    </span>
                                  )}
                                </div>
                                <div className={`text-xs ${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                          {item.label === 'More' && [...moreDropdownItems.services, ...moreDropdownItems.products].map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => {
                                closeMenu()
                                closeMoreDropdown()
                              }}
                              className={`flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? theme === 'dark'
                                    ? 'text-blue-400 bg-blue-900/20'
                                    : 'text-blue-600 bg-blue-50'
                                  : theme === 'dark'
                                    ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <i className={`${dropdownItem.icon} mr-3 text-xs`}></i>
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-3 sm:px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                        location.pathname === item.path
                          ? theme === 'dark'
                            ? 'text-blue-400 bg-blue-900/20'
                            : 'text-blue-600 bg-blue-50'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar