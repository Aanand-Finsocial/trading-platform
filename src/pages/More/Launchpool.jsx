import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Launchpool = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('launchpool')
  const [isLoaded, setIsLoaded] = useState(false)
  const [showStakeModal, setShowStakeModal] = useState(false)
  const [selectedPool, setSelectedPool] = useState(null)
  const [stakeAmount, setStakeAmount] = useState('')
  const [isStaking, setIsStaking] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [showLearnMore, setShowLearnMore] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Handle Get Started button
  const handleGetStarted = () => {
    setActiveTab('launchpool')
    document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Handle Learn More button
  const handleLearnMore = () => {
    setShowLearnMore(true)
  }

  // Handle Subscribe Notifications
  const handleSubscribeNotifications = () => {
    setNotifications(!notifications)
    // You can add API call here to subscribe/unsubscribe
    console.log(notifications ? 'Unsubscribed from notifications' : 'Subscribed to notifications')
  }

  // Handle Stake Now button
  const handleStakeNow = (pool) => {
    setSelectedPool(pool)
    setShowStakeModal(true)
  }

  // Handle Staking
  const handleStake = async () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      alert('Please enter a valid amount')
      return
    }

    setIsStaking(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Update user staked amount (in real app, this would come from API)
      console.log(`Staked ${stakeAmount} ${selectedPool.token}`)
      
      setShowStakeModal(false)
      setStakeAmount('')
      alert(`Successfully staked ${stakeAmount} ${selectedPool.token}`)
    } catch (error) {
      alert('Staking failed. Please try again.')
    } finally {
      setIsStaking(false)
    }
  }

  // Sample data for launchpool projects
  const launchpoolProjects = [
    {
      id: 1,
      name: 'HUMA',
      symbol: 'HUMA',
      icon: '/api/placeholder/60/60',
      description: 'Huma is the leading PayFi network — accelerating cross-border and card payments with instant access to liquidity.',
      status: 'completed',
      pools: [
        {
          name: 'USDC Pool',
          token: 'USDC',
          apy: '15.2%',
          totalStaked: '$125,000,000',
          userStaked: '$0',
          rewardToken: 'HUMA',
          icon: '/api/placeholder/40/40',
          minStake: '10',
          maxStake: '100000'
        },
        {
          name: 'FDUSD Pool',
          token: 'FDUSD',
          apy: '18.7%',
          totalStaked: '$89,500,000',
          userStaked: '$0',
          rewardToken: 'HUMA',
          icon: '/api/placeholder/40/40',
          minStake: '10',
          maxStake: '100000'
        },
        {
          name: 'BNB Pool',
          token: 'BNB',
          apy: '22.1%',
          totalStaked: '$156,750,000',
          userStaked: '$0',
          rewardToken: 'HUMA',
          icon: '/api/placeholder/40/40',
          minStake: '0.1',
          maxStake: '1000'
        }
      ],
      startDate: '2024-12-10',
      endDate: '2024-12-17',
      totalReward: '5,000,000 HUMA'
    }
  ]

  // Sample data for airdrops
  const airdropProjects = [
    {
      id: 1,
      name: 'SOPHON',
      symbol: 'SOPH',
      icon: '/api/placeholder/40/40',
      airdropDate: '2025-05-28',
      snapshotTime: '2025-05-14 00:00 to 2025-05-17 23:59',
      mySnapshot: '--',
      airdropReceived: '--',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Haedal',
      symbol: 'HAEDAL',
      icon: '/api/placeholder/40/40',
      airdropDate: '2025-05-21',
      snapshotTime: '2025-05-10 00:00 to 2025-05-13 23:59',
      mySnapshot: '--',
      airdropReceived: '--',
      status: 'completed'
    },
    {
      id: 3,
      name: 'Nexpace',
      symbol: 'NEXP',
      icon: '/api/placeholder/40/40',
      airdropDate: '2025-05-15',
      snapshotTime: '2025-05-06 00:00 to 2025-05-09 00:00',
      mySnapshot: '--',
      airdropReceived: '--',
      status: 'completed'
    }
  ]

  const platformStats = {
    currentlyLocked: '$2,552,869,902',
    fundsRaised: '$202,968,893',
    projectsLaunched: '108',
    uniqueParticipants: '6,367,838'
  }

  return (
    <div className={`min-h-screen pt-16 transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight">
              Token Launch Platform
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
              Lock tokens, earn rewards, and participate in exclusive airdrops.
            </p>
            <div className="flex flex-col xs:flex-row justify-center space-y-3 xs:space-y-0 xs:space-x-3 sm:space-x-4 px-4 sm:px-0">
              <button 
                onClick={handleGetStarted}
                className="w-full xs:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Get Started
              </button>
              <button 
                onClick={handleLearnMore}
                className="w-full xs:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Platform Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 sm:mb-12 md:mb-16">
            {Object.entries(platformStats).map(([key, value], index) => (
              <div
                key={key}
                className={`p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 text-white break-words">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-200 capitalize leading-tight">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 sm:py-4 md:py-6 space-y-3 sm:space-y-0">
            <div className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-hide">
              {[
                { key: 'launchpool', label: 'Launchpool' },
                { key: 'airdrops', label: 'HODLer Airdrops' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-3 sm:pb-4 border-b-2 transition-colors duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.key
                      ? 'border-yellow-500 text-yellow-500'
                      : theme === 'dark'
                        ? 'border-transparent text-gray-400 hover:text-gray-200'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="font-medium text-sm sm:text-base md:text-lg">{tab.label}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleSubscribeNotifications}
              className={`flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                notifications
                  ? 'bg-yellow-500 text-black'
                  : theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`fas ${notifications ? 'fa-bell' : 'fa-bell-slash'} text-xs sm:text-sm`}></i>
              <span className="hidden xs:inline">
                {notifications ? 'Subscribed' : 'Subscribe'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {activeTab === 'launchpool' && (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {launchpoolProjects.map((project, projectIndex) => (
              <div
                key={project.id}
                className={`rounded-xl sm:rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                style={{
                  animation: `fadeIn 0.6s ease-out ${projectIndex * 0.2}s both`
                }}
              >
                <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                  {/* Project Header */}
                  <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={project.icon}
                          alt={project.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full transition-transform duration-300 hover:scale-105"
                        />
                        {project.status === 'completed' && (
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                            <i className="fas fa-check mr-1"></i>
                            <span className="hidden sm:inline text-xs">COMPLETED</span>
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} break-words`}>
                          {project.name}
                        </h2>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm md:text-base leading-relaxed`}>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
                    {[
                      { label: 'Total Reward', value: project.totalReward },
                      { label: 'Start Date', value: project.startDate },
                      { label: 'End Date', value: project.endDate }
                    ].map((stat, index) => (
                      <div
                        key={stat.label}
                        className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} hover:scale-105 transition-transform duration-300`}
                      >
                        <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                          {stat.label}
                        </div>
                        <div className={`text-sm sm:text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} break-words`}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Staking Pools */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {project.pools.map((pool, index) => (
                      <div
                        key={index}
                        className={`p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} hover:scale-105 hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                            <img
                              src={pool.icon}
                              alt={pool.token}
                              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
                            />
                            <span className={`font-bold text-xs sm:text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                              {pool.name}
                            </span>
                          </div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-bolt text-white text-xs"></i>
                          </div>
                        </div>

                        <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg bg-yellow-100/20 border border-yellow-200/30`}>
                          Lock {pool.token}, Get {pool.rewardToken} Airdrop
                        </div>

                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          {[
                            { label: 'APY', value: pool.apy, color: 'text-green-500' },
                            { label: 'Total Staked', value: pool.totalStaked },
                            { label: 'My Staked', value: pool.userStaked }
                          ].map((item) => (
                            <div key={item.label} className="flex justify-between">
                              <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {item.label}
                              </span>
                              <span className={`text-xs sm:text-sm font-medium ${item.color || (theme === 'dark' ? 'text-white' : 'text-gray-900')} break-words text-right`}>
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button 
                          disabled={project.status === 'completed'}
                          onClick={() => handleStakeNow(pool)}
                          className={`w-full py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm md:text-base ${
                            project.status === 'completed'
                              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                              : 'bg-yellow-500 hover:bg-yellow-600 text-black hover:scale-105'
                          }`}
                        >
                          {project.status === 'completed' ? 'Completed' : 'Stake Now'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'airdrops' && (
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {airdropProjects.map((airdrop, index) => (
              <div
                key={airdrop.id}
                className={`p-3 sm:p-4 md:p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                    <img
                      src={airdrop.icon}
                      alt={airdrop.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-transform duration-300 hover:scale-105 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                        <h3 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} break-words`}>
                          {airdrop.name}
                        </h3>
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full w-fit">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-300 self-start sm:self-center`}>
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {[
                    { label: 'Airdrop Date', value: airdrop.airdropDate },
                    { label: 'Snapshot time (UTC)', value: airdrop.snapshotTime },
                    { label: 'My snapshot', value: airdrop.mySnapshot },
                    { label: 'Airdrop Received', value: airdrop.airdropReceived }
                  ].map((item, idx) => (
                    <div 
                      key={item.label} 
                      className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} hover:scale-105 transition-transform duration-300`}
                    >
                      <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        {item.label}
                      </div>
                      <div className={`font-medium text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'} break-words`}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stake Modal */}
      {showStakeModal && selectedPool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Stake {selectedPool.token}
              </h3>
              <button
                onClick={() => setShowStakeModal(false)}
                className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-300`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} mb-4 sm:mb-6`}>
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <img src={selectedPool.icon} alt={selectedPool.token} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                <div>
                  <div className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {selectedPool.name}
                  </div>
                  <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    APY: {selectedPool.apy}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Min Stake:</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{selectedPool.minStake} {selectedPool.token}</span>
                </div>
                <div className="flex justify-between">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Max Stake:</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{selectedPool.maxStake} {selectedPool.token}</span>
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Amount to Stake
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder={`Min: ${selectedPool.minStake}`}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-16 sm:pr-20 rounded-lg border text-sm sm:text-base ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300`}
                />
                <div className="absolute right-3 top-2.5 sm:top-3">
                  <span className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedPool.token}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <button
                onClick={() => setShowStakeModal(false)}
                className={`flex-1 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleStake}
                disabled={isStaking}
                className="flex-1 py-2.5 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isStaking ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Staking...
                  </span>
                ) : (
                  'Stake Now'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                About Token Launch Platform
              </h3>
              <button
                onClick={() => setShowLearnMore(false)}
                className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-300`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Our Token Launch Platform allows users to participate in new token launches through staking and earn rewards through airdrops.
              </p>
              
              <h4 className={`font-bold text-base sm:text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>How it works:</h4>
              <ul className={`space-y-1 sm:space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                <li>• Lock your tokens in supported pools</li>
                <li>• Earn APY rewards while staking</li>
                <li>• Receive airdrop tokens from new projects</li>
                <li>• Participate in exclusive token launches</li>
              </ul>

              <h4 className={`font-bold text-base sm:text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Benefits:</h4>
              <ul className={`space-y-1 sm:space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                <li>• High APY returns on staked assets</li>
                <li>• Early access to promising projects</li>
                <li>• Diversified reward tokens</li>
                <li>• Secure and transparent platform</li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-8">
              <button
                onClick={() => setShowLearnMore(false)}
                className="w-full py-2.5 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Simple CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Launchpool