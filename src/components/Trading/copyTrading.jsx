import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/Footer/Footer';

const CopyTrading = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('futures');
  const [activeFilter, setActiveFilter] = useState('public');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30 Days');
  const [selectedSort, setSelectedSort] = useState('PnL');
  const [smartFilterEnabled, setSmartFilterEnabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [favoriteTraders, setFavoriteTraders] = useState(new Set());
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState(null);
  const [showTutorialModal, setShowTutorialModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [copyAmount, setCopyAmount] = useState('');
  const [copyRatio, setCopyRatio] = useState('fixed-amount');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleWatchTutorial = () => {
    setShowTutorialModal(true);
  };

  const handleApplyNow = () => {
    setShowApplicationModal(true);
  };

  const handleCopyOverview = () => {
    setShowBalanceModal(true);
  };

  const handleNotificationClick = () => {
    navigate('/announcements/copy-trading');
  };

  const handleDailyPicks = () => {
    navigate('/copy-trading/daily-picks');
  };

  const handleToggleFavorite = (traderId) => {
    const newFavorites = new Set(favoriteTraders);
    if (newFavorites.has(traderId)) {
      newFavorites.delete(traderId);
    } else {
      newFavorites.add(traderId);
    }
    setFavoriteTraders(newFavorites);
  };

  const handleMockTrade = (trader) => {
    navigate('/copy-trading/mock', { state: { trader } });
  };

  const handleCopyTrade = (trader) => {
    setSelectedTrader(trader);
    setShowCopyModal(true);
  };

  const handleConfirmCopy = (amount) => {
    navigate('/copy-trading/setup', { 
      state: { 
        trader: selectedTrader, 
        amount 
      } 
    });
    setShowCopyModal(false);
  };

  // Trader data for the leaderboard
  const traders = [
    {
      id: 1,
      name: 'JeromeLoo 老王',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      followers: '200 / 200',
      pnl: '+187,480.55',
      roi: '+28.64%',
      aum: '912,080.58',
      mdd: '20.49%',
      sharpe: '0.87',
      trend: 'up',
      chartColor: '#FF3B69',
      hasAvailableSlots: false,
    },
    {
      id: 2,
      name: '熱鷹資本',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      followers: '1000 / 1000',
      pnl: '+186,596.75',
      roi: '+363.63%',
      aum: '3,054,148.00',
      mdd: '20.86%',
      sharpe: '4.87',
      trend: 'up',
      chartColor: '#00C087',
      hasAvailableSlots: false,
    },
    {
      id: 3,
      name: '神一般的操作',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      followers: '458 / 600',
      pnl: '+90,167.44',
      roi: '+37.42%',
      aum: '701,173.98',
      mdd: '58.80%',
      sharpe: '2.01',
      trend: 'down',
      chartColor: '#FF3B69',
      hasAvailableSlots: true,
    },
    {
      id: 4,
      name: 'RideTheWave',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      followers: '264 / 600',
      pnl: '+53,356.45',
      roi: '+6.18%',
      aum: '671,828.09',
      mdd: '22.13%',
      sharpe: '0.32',
      trend: 'volatile',
      chartColor: '#FF3B69',
      hasAvailableSlots: true,
    },
    {
      id: 5,
      name: '理解万万岁',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      followers: '500 / 500',
      pnl: '+49,870.20',
      roi: '+412.12%',
      aum: '416,767.83',
      mdd: '43.16%',
      sharpe: '5.39',
      trend: 'up',
      chartColor: '#00C087',
      hasAvailableSlots: false,
    },
    {
      id: 6,
      name: 'KNOTMAIN',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      followers: '996 / 1000',
      pnl: '+33,489.71',
      roi: '+8.46%',
      aum: '4,691,354.64',
      mdd: '9.47%',
      sharpe: '2.38',
      trend: 'up',
      chartColor: '#00C087',
      hasAvailableSlots: true,
    }
  ];

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-gray-900 bg-gray-50'}`}>
      {/* Tabs */}
      <div className={`flex border-b ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'} backdrop-blur-sm`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex">
              <button
                className={`relative px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'futures' 
                    ? `${theme === 'dark' ? 'text-white' : 'text-gray-900'} transform scale-105` 
                    : `${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} hover:scale-102`
                }`}
                onClick={() => handleTabChange('futures')}
              >
                Futures
                {activeTab === 'futures' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-full shadow-lg shadow-blue-500/50"></div>
                )}
              </button>
              <button
                className={`relative px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'spot' 
                    ? `${theme === 'dark' ? 'text-white' : 'text-gray-900'} transform scale-105` 
                    : `${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} hover:scale-102`
                }`}
                onClick={() => handleTabChange('spot')}
              >
                <div className="flex items-center">
                  Spot
                  <span className="ml-2 text-xs bg-gradient-to-r from-cyan-500 to-cyan-600 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-white font-bold shadow-lg shadow-cyan-500/30 animate-pulse">
                    new
                  </span>
                </div>
                {activeTab === 'spot' && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-full shadow-lg shadow-blue-500/50"></div>
                )}
              </button>
            </div>

            <div className="py-4 sm:py-5 px-2 sm:px-8">
              <button 
                onClick={handleWatchTutorial}
                className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 hover:scale-105 group`}
              >
                <div className={`p-1.5 sm:p-2 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700/50 to-gray-600/50 group-hover:from-gray-600/70 group-hover:to-gray-500/70' : 'bg-gradient-to-r from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400'} mr-2 sm:mr-3 transition-all duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="font-medium text-sm sm:text-base">Watch Tutorial</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Promotional Banner */}
        <div className={`relative overflow-hidden border ${theme === 'dark' ? 'border-gray-600/30 bg-gradient-to-r from-[#1e293b]/80 via-[#334155]/60 to-[#1e293b]/80' : 'border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50'} p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between backdrop-blur-sm shadow-2xl`}>
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-orange-500/5 to-cyan-500/5' : 'bg-gradient-to-r from-blue-500/5 to-cyan-500/5'}`}></div>
          <div className="relative flex items-center mb-4 sm:mb-0">
            <div className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-orange-500/20 to-cyan-500/20' : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'} mr-4 sm:mr-6 shadow-lg`}>
              <div className={`w-6 h-6 sm:w-8 sm:h-8 ${theme === 'dark' ? 'bg-gradient-to-br from-orange-500 to-cyan-500' : 'bg-gradient-to-br from-blue-500 to-cyan-500'} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-base sm:text-lg font-semibold block`}>
                Be a Futures Lead Trader
              </span>
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                Enjoy up to 30% profit share + 10% commission rebate!
              </span>
            </div>
          </div>
          <button 
            onClick={handleApplyNow}
            className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 w-full sm:w-auto"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg sm:rounded-xl"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left Column - Balance Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className={`${theme === 'dark' ? 'bg-gradient-to-br from-[#1e293b]/60 to-[#334155]/40 border-gray-600/30' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-gray-200'} backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl`}>
              <div className="flex items-center mb-4 sm:mb-6">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-base sm:text-lg font-medium`}>Total Margin Balance</span>
                <div className={`ml-3 p-1.5 sm:p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-200 hover:bg-gray-300'} transition-colors cursor-pointer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 sm:h-4 sm:w-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'bg-gradient-to-r from-white to-gray-300' : 'bg-gradient-to-r from-gray-900 to-gray-700'} bg-clip-text text-transparent`}>
                0.00 <span className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} font-normal`}>USDT</span>
              </div>

              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6 sm:mb-8 text-base sm:text-lg`}>
                Total Unrealized PnL <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold`}>--</span>
              </div>

              <button 
                onClick={handleCopyOverview}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Copy Overview
                </span>
              </button>
            </div>

            {/* Bottom Notice */}
            <button
              onClick={handleNotificationClick}
              className={`flex items-center p-3 sm:p-4 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/30 hover:from-gray-700/60 hover:to-gray-600/40 border-gray-600/30' : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 border-gray-300'} rounded-lg sm:rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer group w-full`}
            >
              <div className={`p-1.5 sm:p-2 rounded-full ${theme === 'dark' ? 'bg-orange-500/20 group-hover:bg-orange-500/30' : 'bg-orange-500/20 group-hover:bg-orange-500/30'} mr-3 sm:mr-4 transition-colors`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <span className={`flex-1 ${theme === 'dark' ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'} text-xs sm:text-sm transition-colors`}>
                Finsocial Futures Copy Trading Adds New USD©-M Perpetual Contracts (2025-02-20)
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 sm:h-4 sm:w-4 ${theme === 'dark' ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-700'} transition-colors`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Column - How to Lead Trades */}
          <div className={`relative overflow-hidden border ${theme === 'dark' ? 'border-gray-600/30 bg-gradient-to-br from-[#1e293b]/80 via-[#334155]/60 to-[#1e293b]/80' : 'border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50'} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-2xl`}>
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-10">
                <div className="mb-4 sm:mb-0">
                  <h3 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>How to Lead Trades?</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base`}>Start your journey as a lead trader</p>
                </div>
                
                {/* Enhanced illustration - responsive */}
                <div className="flex items-center space-x-2 sm:space-x-4 justify-center sm:justify-end">
                  <div className="relative group">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 transform group-hover:scale-110">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 animate-bounce">
                      <span className="text-white text-sm font-bold">+</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 mx-2"></div>
                  </div>
                  
                  <div className="relative group">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/30 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300 transform group-hover:scale-110">
                      <div className="space-y-1">
                        <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature highlights - responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className={`p-3 sm:p-4 ${theme === 'dark' ? 'bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/20' : 'bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20'} rounded-lg sm:rounded-xl border`}>
                  <div className={`${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} font-semibold text-xs sm:text-sm mb-1`}>Step 1</div>
                  <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xs sm:text-sm`}>Set up your strategy</div>
                </div>
                <div className={`p-3 sm:p-4 ${theme === 'dark' ? 'bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/20' : 'bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20'} rounded-lg sm:rounded-xl border`}>
                  <div className={`${theme === 'dark' ? 'text-orange-400' : 'text-blue-600'} font-semibold text-xs sm:text-sm mb-1`}>Step 2</div>
                  <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xs sm:text-sm`}>Start leading trades</div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center space-x-2 sm:space-x-3">
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-400 hover:bg-gray-500'} transition-colors cursor-pointer`}></div>
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-500 to-orange-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'} shadow-lg cursor-pointer`}></div>
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-400 hover:bg-gray-500'} transition-colors cursor-pointer`}></div>
              </div>
            </div>
          </div>
        
          {/* Trader Leaderboard Section */}
          <div className="mt-8 sm:mt-12">
            {/* Portfolio Filter Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
              <div className="flex space-x-4 sm:space-x-8 mb-4 sm:mb-0 overflow-x-auto">
                <button 
                  className={`relative px-1 py-2 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                    activeFilter === 'public' ? `${theme === 'dark' ? 'text-white' : 'text-gray-900'}` : `${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`
                  }`}
                  onClick={() => handleFilterChange('public')}
                >
                  Public Portfolios
                  {activeFilter === 'public' && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                  )}
                </button>
                <button 
                  className={`relative px-1 py-2 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                    activeFilter === 'private' ? `${theme === 'dark' ? 'text-white' : 'text-gray-900'}` : `${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`
                  }`}
                  onClick={() => handleFilterChange('private')}
                >
                  Private Portfolios
                  {activeFilter === 'private' && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                  )}
                </button>
                <button 
                  className={`relative px-1 py-2 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                    activeFilter === 'favorites' ? `${theme === 'dark' ? 'text-white' : 'text-gray-900'}` : `${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`
                  }`}
                  onClick={() => handleFilterChange('favorites')}
                >
                  My Favorites
                  {activeFilter === 'favorites' && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                  )}
                </button>
              </div>
              
              <button 
                onClick={handleDailyPicks}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium flex items-center text-sm sm:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Daily Picks
              </button>
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4 mb-4 sm:mb-6">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className={`w-full flex items-center justify-between ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} text-sm px-4 py-2 rounded-lg transition-colors border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
                >
                  <span>Filters & Search</span>
                  <svg className={`w-4 h-4 transform transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Desktop Filters */}
              <div className={`${showMobileFilters ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4 w-full`}>
                <div className="grid grid-cols-2 lg:flex lg:space-x-4 gap-3 lg:gap-0">
                  <div className="relative">
                    <select 
                      value={selectedTimeframe}
                      onChange={(e) => setSelectedTimeframe(e.target.value)}
                      className={`w-full lg:w-auto flex items-center space-x-2 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} cursor-pointer`}
                    >
                      <option>7 Days</option>
                      <option>30 Days</option>
                      <option>90 Days</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <select 
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
                      className={`w-full lg:w-auto flex items-center space-x-2 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} cursor-pointer`}
                    >
                      <option>PnL</option>
                      <option>ROI</option>
                      <option>AUM</option>
                      <option>Followers</option>
                    </select>
                  </div>
                </div>
                
                <div className={`flex items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-1 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                  <input 
                    type="checkbox" 
                    id="smartFilter" 
                    className="hidden" 
                    checked={smartFilterEnabled}
                    onChange={(e) => setSmartFilterEnabled(e.target.checked)}
                  />
                  <label htmlFor="smartFilter" className="flex items-center cursor-pointer px-2 py-1">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 ${smartFilterEnabled ? 'bg-blue-500' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} rounded flex items-center justify-center mr-2 transition-colors`}>
                      {smartFilterEnabled && (
                        <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm`}>Smart Filter</span>
                  </label>
                </div>
                
                <div className="flex-grow">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Trader's Name" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`block w-full ${theme === 'dark' ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:ring-blue-500' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:ring-blue-500'} border-0 rounded-lg py-2 pl-8 sm:pl-10 pr-3 focus:outline-none focus:ring-1 text-sm`}
                    />
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className={`${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-2 rounded-lg transition-colors border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <svg className={`w-4 h-4 sm:w-6 sm:h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </button>
                  
                  <button className={`${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-2 rounded-lg transition-colors border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <svg className={`w-4 h-4 sm:w-6 sm:h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Trader Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {traders.map(trader => (
                <div key={trader.id} className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg ${theme === 'dark' ? 'hover:border-gray-600' : 'hover:border-gray-300'}`}>
                  <div className="p-4 sm:p-6">
                    {/* Trader Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center flex-1 min-w-0">
                        <img src={trader.avatar} alt={trader.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold text-sm sm:text-base truncate`}>{trader.name}</h3>
                          <div className={`flex items-center text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="truncate">{trader.followers}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleToggleFavorite(trader.id)}
                        className={`${favoriteTraders.has(trader.id) ? 'text-yellow-500' : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors flex-shrink-0 ml-2`}
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill={favoriteTraders.has(trader.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Trader Performance */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-lg sm:text-xl font-bold text-green-500 mb-1">
                          {trader.pnl}
                        </div>
                        <div className="flex items-center">
                          {/* Mini Chart Placeholder */}
                          <div className="w-16 h-8 sm:w-24 sm:h-12 relative">
                            <svg viewBox="0 0 100 50" className="w-full h-full">
                              <path 
                                d={trader.trend === 'up' 
                                  ? "M0,40 Q25,10 50,25 T100,10" 
                                  : trader.trend === 'down' 
                                    ? "M0,10 Q25,40 50,25 T100,40"
                                    : "M0,25 Q25,40 50,10 T100,25"}
                              fill="none" 
                              stroke={trader.chartColor} 
                              strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-green-500 text-sm">
                        ROI {trader.roi}
                      </div>
                    </div>
                    
                    {/* Trader Metrics */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs mb-4">
                      <div>
                        <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-1`}>AUM</div>
                        <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xs font-medium truncate`}>{trader.aum}</div>
                      </div>
                      <div>
                        <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-1`}>30D MDD</div>
                        <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xs font-medium`}>{trader.mdd}</div>
                      </div>
                      <div>
                        <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Sharpe</div>
                        <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xs font-medium`}>{trader.sharpe}</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => handleMockTrade(trader)}
                        className={`${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} py-2 rounded text-center transition-colors text-sm font-medium`}
                      >
                        Mock
                      </button>
                      {trader.hasAvailableSlots ? (
                        <button 
                          onClick={() => handleCopyTrade(trader)}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-center transition-colors text-sm font-medium"
                        >
                          Copy
                        </button>
                      ) : (
                        <button 
                          disabled
                          className="bg-red-600 text-white py-2 rounded text-center text-sm font-medium opacity-75 cursor-not-allowed"
                        >
                          Full
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>FAQ</h2>
            
            <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((faqId) => (
                <div key={faqId} className={`border ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'} rounded-lg overflow-hidden`}>
                  <button 
                    className={`flex items-center justify-between w-full p-3 sm:p-4 text-left focus:outline-none ${theme === 'dark' ? 'bg-gray-800/40 hover:bg-gray-700/50' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
                    onClick={() => toggleFaq(faqId)}
                  >
                    <div className="flex items-center flex-1">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200'} mr-3 sm:mr-4 flex-shrink-0`}>
                        <span className="text-xs sm:text-sm font-medium">{faqId}</span>
                      </div>
                      <h3 className={`text-sm sm:text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {faqId === 1 && 'What Is Copy Trading?'}
                        {faqId === 2 && 'How does copy trading work?'}
                        {faqId === 3 && 'What is the portfolio maximum drawdown?'}
                        {faqId === 4 && 'What is Portfolio Sharpe Ratio?'}
                        {faqId === 5 && 'What is portfolio AUM?'}
                        {faqId === 6 && "What's the benefit for lead traders?"}
                      </h3>
                    </div>
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0 ml-2 ${expandedFaq === faqId ? 'transform rotate-45' : ''} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  {expandedFaq === faqId && (
                    <div className={`p-3 sm:p-4 ${theme === 'dark' ? 'bg-gray-800/20 border-gray-700/50' : 'bg-gray-50 border-gray-200'} border-t`}>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                        {faqId === 1 && 'Copy trading is a form of investing that allows you to copy the trades of successful traders automatically. When the lead trader makes a trade, the same trade is executed in your account proportionally to your investment amount.'}
                        {faqId === 2 && 'When you copy a trader, you allocate a portion of your funds to mirror their trades. Every time they open or close a position, the same action is automatically executed in your account based on your allocated amount and their position size.'}
                        {faqId === 3 && 'Maximum Drawdown (MDD) is a risk metric that measures the largest percentage drop from a peak to a trough in a portfolio\'s value. It indicates the biggest historical loss the trader has experienced before recovering.'}
                        {faqId === 4 && 'The Sharpe Ratio measures the performance of a portfolio compared to a risk-free asset, after adjusting for risk. A higher Sharpe Ratio indicates better risk-adjusted returns, suggesting the trader is achieving good returns relative to the volatility of their portfolio.'}
                        {faqId === 5 && 'AUM stands for Assets Under Management. In copy trading, it represents the total value of funds that followers have allocated to copy a specific trader\'s strategy.'}
                        {faqId === 6 && 'Lead traders can earn profit-sharing commissions based on the profits generated for their followers. Additionally, they receive a percentage of the trading fees generated by their followers\' copied trades. This creates a passive income stream while they trade as normal.'}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Tutorial Modal */}
      {showTutorialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-md`}>
            <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Watch Tutorial
              </h3>
              <button
                onClick={() => setShowTutorialModal(false)}
                className={`p-1 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('/tutorials/copy-trading-basics', '_blank')}
                  className="w-full text-left p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="font-medium">Copy Trading Basics</div>
                  <div className="text-sm text-gray-500">Learn the fundamentals</div>
                </button>
                <button 
                  onClick={() => window.open('/tutorials/risk-management', '_blank')}
                  className="w-full text-left p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="font-medium">Risk Management</div>
                  <div className="text-sm text-gray-500">Protect your investments</div>
                </button>
                <button 
                  onClick={() => window.open('/tutorials/trader-selection', '_blank')}
                  className="w-full text-left p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="font-medium">Selecting Traders</div>
                  <div className="text-sm text-gray-500">How to choose the best traders</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lead Trader Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-md`}>
            <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Become a Lead Trader
              </h3>
              <button
                onClick={() => setShowApplicationModal(false)}
                className={`p-1 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Minimum 6 months trading experience</li>
                    <li>• Consistent positive returns</li>
                    <li>• Risk management skills</li>
                    <li>• Complete KYC verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Benefits:</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Up to 30% profit sharing</li>
                    <li>• 10% commission rebate</li>
                    <li>• Performance bonuses</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setShowApplicationModal(false)}
                    className={`flex-1 px-4 py-2 text-sm rounded border ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setShowApplicationModal(false);
                      navigate('/lead-trader/application');
                    }}
                    className="flex-1 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Balance Overview Modal */}
      {showBalanceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-md`}>
            <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Copy Trading Overview
              </h3>
              <button
                onClick={() => setShowBalanceModal(false)}
                className={`p-1 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 border rounded">
                    <div className="text-lg font-bold text-green-500">$0.00</div>
                    <div className="text-sm text-gray-500">Total Profit</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="text-lg font-bold">0</div>
                    <div className="text-sm text-gray-500">Active Copies</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Available Balance:</span>
                    <span className="font-medium">$0.00 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Copying Balance:</span>
                    <span className="font-medium">$0.00 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Today's PnL:</span>
                    <span className="font-medium text-green-500">+$0.00</span>
                  </div>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => {
                      setShowBalanceModal(false);
                      navigate('/copy-trading/deposit');
                    }}
                    className="flex-1 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Deposit
                  </button>
                  <button
                    onClick={() => {
                      setShowBalanceModal(false);
                      navigate('/copy-trading/history');
                    }}
                    className={`flex-1 px-4 py-2 text-sm rounded border ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    View History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Copy Trading Modal */}
      {showCopyModal && selectedTrader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-md`}>
            <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Copy {selectedTrader.name}
              </h3>
              <button
                onClick={() => setShowCopyModal(false)}
                className={`p-1 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-2">
                    <img src={selectedTrader.avatar} alt={selectedTrader.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{selectedTrader.name}</div>
                      <div className="text-sm text-gray-500">ROI: {selectedTrader.roi}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Copy Amount (USDT)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Enter amount (min: 10 USDT)"
                    value={copyAmount}
                    onChange={(e) => setCopyAmount(e.target.value)}
                    className={`w-full px-3 py-2 rounded border ${
                      theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Copy Mode
                  </label>
                  <select 
                    value={copyRatio}
                    onChange={(e) => setCopyRatio(e.target.value)}
                    className={`w-full px-3 py-2 rounded border ${
                      theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="fixed-amount">Fixed Amount</option>
                    <option value="fixed-ratio">Fixed Ratio</option>
                    <option value="proportional">Proportional</option>
                  </select>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Estimated Fees:</span>
                    <span>$0.05</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Balance:</span>
                    <span>$1,000.00 USDT</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowCopyModal(false)}
                    className={`flex-1 px-4 py-2 text-sm rounded border ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleConfirmCopy(copyAmount)}
                    disabled={!copyAmount || parseFloat(copyAmount) < 10}
                    className="flex-1 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Start Copying
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />    
  </div>
  );
};

export default CopyTrading;