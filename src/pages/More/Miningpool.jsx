import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import SuperMine from '../../components/Mining/SuperMine'
import BTCAccelerator from '../../components/Mining/BTCAccelerator'

const Miningpool = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeSection, setActiveSection] = useState('pool')
  
  // Modal states
  const [showMiningSetupModal, setShowMiningSetupModal] = useState(false)
  const [showDashboardModal, setShowDashboardModal] = useState(false)
  const [showTutorialModal, setShowTutorialModal] = useState(false)
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [isStartingMining, setIsStartingMining] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const miningCoins = [
    {
      id: 1,
      coin: 'BTC',
      name: 'Bitcoin',
      icon: '₿',
      color: 'text-orange-500',
      algo: 'SHA256',
      activeWorkers: '230353',
      hashrate: '65.95 Eh/s',
      network: '945.58 Eh/s',
      status: 'active',
      profitability: '+12.5%'
    },
    {
      id: 2,
      coin: 'BCH',
      name: 'Bitcoin Cash',
      icon: '₿',
      color: 'text-green-500',
      algo: 'SHA256',
      activeWorkers: '720',
      hashrate: '35.35 Ph/s',
      network: '3.37 Eh/s',
      status: 'active',
      profitability: '+8.2%'
    },
    {
      id: 3,
      coin: 'LTC',
      name: 'Litecoin',
      icon: 'Ł',
      color: 'text-gray-400',
      algo: 'Scrypt',
      activeWorkers: '5059',
      hashrate: '18.06 Th/s',
      network: '2.35 Ph/s',
      status: 'active',
      profitability: '+15.7%'
    },
    {
      id: 4,
      coin: 'ETC',
      name: 'Ethereum Classic',
      icon: '♦',
      color: 'text-green-600',
      algo: 'Etchash',
      activeWorkers: '1213',
      hashrate: '1.81 Th/s',
      network: '281.42 Th/s',
      status: 'active',
      profitability: '+6.8%'
    },
    {
      id: 5,
      coin: 'ZEC',
      name: 'Zcash',
      icon: 'ⓩ',
      color: 'text-yellow-600',
      algo: 'Equihash',
      activeWorkers: '294',
      hashrate: '96.62 MSol/s',
      network: '6.59 GSol/s',
      status: 'active',
      profitability: '+9.3%'
    },
    {
      id: 6,
      coin: 'ETHW',
      name: 'ETHPOW',
      icon: '♦',
      color: 'text-purple-500',
      algo: 'Ethash',
      activeWorkers: '240',
      hashrate: '462.54 Gh/s',
      network: '23.1 Th/s',
      status: 'active',
      profitability: '+4.1%'
    },
    {
      id: 7,
      coin: 'RVN',
      name: 'Ravencoin',
      icon: '🐦',
      color: 'text-blue-500',
      algo: 'KawPow',
      activeWorkers: '1972',
      hashrate: '81.93 Gh/s',
      network: '4.57 Th/s',
      status: 'active',
      profitability: '+11.2%'
    },
    {
      id: 8,
      coin: 'DASH',
      name: 'Dash',
      icon: '◉',
      color: 'text-blue-600',
      algo: 'X11',
      activeWorkers: '82',
      hashrate: '119.59 Th/s',
      network: '2.27 Ph/s',
      status: 'active',
      profitability: '+7.9%'
    }
  ]

  const features = [
    {
      icon: '🔒',
      title: 'Secure and Transparent',
      description: 'Hashrate is displayed in real-time while the security team safeguards your assets.',
      highlight: 'Real-time monitoring'
    },
    {
      icon: '💰',
      title: 'Steady Earnings',
      description: 'Using the FPPS、PPS+、PPS model and instant settlements, you can avoid fluctuations in earnings.',
      highlight: 'Multiple payout models'
    },
    {
      icon: '⚙️',
      title: 'Comprehensive Service',
      description: 'Our comprehensive service is committed to improving miners\' income, closing the gap between mining and trading.',
      highlight: 'One-stop solution'
    }
  ]

  const poolStats = {
    totalHashrate: '1.2+ EH/s',
    activeMiners: '500K+',
    poolFee: '0% - 2.5%',
    payoutFrequency: 'Daily'
  }

  const filteredCoins = activeTab === 'all' 
    ? miningCoins 
    : miningCoins.filter(coin => coin.status === activeTab)

  const faqData = [
    {
      question: 'What is Finsocial Pool?',
      answer: 'Finsocial Pool is a comprehensive cryptocurrency mining pool platform that provides mining services for various cryptocurrencies including Bitcoin, Ethereum, Litecoin, and more. We offer competitive fees, reliable payouts, and professional mining infrastructure.'
    },
    {
      question: 'How do I start mining with Finsocial Pool?',
      answer: 'To start mining, you need to: 1) Create a Finsocial account, 2) Configure your mining software with our pool address, 3) Set up your mining workers, 4) Start mining and monitor your earnings in real-time through our dashboard.'
    },
    {
      question: 'What are the mining fees?',
      answer: 'Our mining fees range from 0% to 2.5% depending on the cryptocurrency and payout method. Bitcoin mining has a 2.5% fee for PPS+ and 0% fee for FPPS. Most other coins have competitive fees between 1-2.5%.'
    },
    {
      question: 'What payout methods do you support?',
      answer: 'We support multiple payout methods including PPS (Pay Per Share), PPS+ (Pay Per Share Plus), and FPPS (Full Pay Per Share). Each method has different risk and reward characteristics to suit different mining preferences.'
    },
    {
      question: 'How often are payouts made?',
      answer: 'Payouts are made daily for most cryptocurrencies. The minimum payout threshold varies by coin - for Bitcoin it\'s 0.001 BTC, for Ethereum it\'s 0.01 ETH. You can check your earnings and payout history in real-time on our platform.'
    },
    {
      question: 'Can I mine multiple cryptocurrencies simultaneously?',
      answer: 'Yes, you can mine multiple cryptocurrencies simultaneously using different mining rigs or by switching between different algorithms. Our platform supports merged mining for compatible cryptocurrencies like Bitcoin and Bitcoin Cash.'
    },
    {
      question: 'What mining equipment is compatible?',
      answer: 'We support all major mining hardware including ASIC miners (Antminer, Whatsminer, etc.) and GPU mining rigs. Our platform is compatible with popular mining software like CGMiner, BFGMiner, and various GPU mining applications.'
    },
    {
      question: 'How do I monitor my mining performance?',
      answer: 'You can monitor your mining performance through our comprehensive dashboard which shows real-time hashrate, active workers, earnings, and detailed statistics. You can also set up notifications for important events like worker offline alerts.'
    },
    {
      question: 'What happens if my mining equipment goes offline?',
      answer: 'If your equipment goes offline, you can set up alerts to be notified immediately. Your earnings will pause during downtime, but there are no penalties. Once your equipment comes back online, mining and earnings will resume automatically.'
    },
    {
      question: 'Is there customer support available?',
      answer: 'Yes, we provide 24/7 customer support through multiple channels including live chat, email, and comprehensive documentation. Our technical team can help with mining setup, troubleshooting, and optimization.'
    }
  ]

  // Button handlers
  const handleStartMining = () => {
    setIsStartingMining(true)
    setTimeout(() => {
      setIsStartingMining(false)
      setShowMiningSetupModal(true)
    }, 1500)
  }

  const handleMiningDashboard = () => {
    setShowDashboardModal(true)
  }

  const handleViewTutorial = (coin) => {
    setSelectedCoin(coin)
    setShowTutorialModal(true)
  }

  const handleLiveChat = () => {
    window.open('https://tawk.to/chat/mining-support', '_blank', 'noopener,noreferrer')
  }

  const handleEmailSupport = () => {
    window.open('mailto:mining@finsocial.com?subject=Mining Pool Support', '_blank')
  }

  const handleLearnMore = () => {
    setShowSupportModal(true)
  }

  const handleStartMiningNow = () => {
    setShowMiningSetupModal(true)
  }

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const closeMiningSetupModal = () => {
    setShowMiningSetupModal(false)
  }

  const closeDashboardModal = () => {
    setShowDashboardModal(false)
  }

  const closeTutorialModal = () => {
    setShowTutorialModal(false)
    setSelectedCoin(null)
  }

  const closeSupportModal = () => {
    setShowSupportModal(false)
  }

  return (
    <div className={`min-h-screen pt-16 transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50'}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-slate-700 via-gray-700 to-blue-800'}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100/20 backdrop-blur rounded-full text-white text-sm font-medium border border-blue-200/30">
                    <i className="fas fa-cube mr-2"></i>
                    Professional Mining Pool
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Finsocial Pool
                </h1>
                <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                  A comprehensive service platform dedicated to improving the income of miners
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleStartMining}
                    disabled={isStartingMining}
                    className={`px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${isStartingMining ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    <i className={`${isStartingMining ? 'fas fa-spinner fa-spin' : 'fas fa-play'} mr-2`}></i>
                    {isStartingMining ? 'Setting up...' : 'Start Mining'}
                  </button>
                  <button 
                    onClick={handleMiningDashboard}
                    className="px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <i className="fas fa-chart-line mr-2"></i>
                    Mining Dashboard
                  </button>
                </div>
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(poolStats).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`p-6 rounded-xl bg-white/10 backdrop-blur border border-white/20 transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-white mb-2">{value}</div>
                    <div className="text-sm text-gray-200 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg border-b ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4">
            <div className="flex space-x-2 bg-gray-100/10 backdrop-blur-lg rounded-2xl p-2 border border-gray-300/20">
              {/*
                { key: 'pool', label: 'Mining Pool', icon: '⛏️' },
                { key: 'supermine', label: 'Super Mine', icon: '🚀' },
                { key: 'accelerator', label: 'BTC Accelerator', icon: '⚡' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`relative px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section.key
                      ? theme === 'dark' 
                        ? 'bg-yellow-500 text-black shadow-lg'
                        : 'bg-blue-500 text-white shadow-lg'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                  {activeSection === section.key && (
                    <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-yellow-500' : 'bg-blue-500'} rounded-xl blur opacity-30 -z-10`}></div>
                  )}
                </button>
              ))}
              */}
              <button
                onClick={() => setActiveSection('pool')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'pool'
                    ? theme === 'dark' 
                      ? 'bg-yellow-500 text-black shadow-lg'
                      : 'bg-blue-500 text-white shadow-lg'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                <span className="mr-2">⛏️</span>
                Mining Pool
              </button>
              <button
                onClick={() => setActiveSection('supermine')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'supermine'
                    ? theme === 'dark' 
                      ? 'bg-yellow-500 text-black shadow-lg'
                      : 'bg-blue-500 text-white shadow-lg'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                <span className="mr-2">🚀</span>
                Super Mine
              </button>
              <button
                onClick={() => setActiveSection('accelerator')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'accelerator'
                    ? theme === 'dark' 
                      ? 'bg-yellow-500 text-black shadow-lg'
                      : 'bg-blue-500 text-white shadow-lg'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                <span className="mr-2">⚡</span>
                BTC Accelerator
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'pool' && (
          <>
            {/* Features Section */}
            <div className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-slate-100 to-gray-100'} rounded-2xl mb-12`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`text-center p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-slate-50'} border ${theme === 'dark' ? '' : 'border-slate-200 hover:border-blue-300'} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
                      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both` }}
                    >
                      <div className="text-6xl mb-6">{feature.icon}</div>
                      <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                        {feature.title}
                      </h3>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed mb-4`}>
                        {feature.description}
                      </p>
                      <span className={`inline-block px-3 py-1 ${theme === 'dark' ? 'bg-yellow-500/20 text-yellow-600' : 'bg-blue-100 text-blue-700'} text-sm rounded-full`}>
                        {feature.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mining Coins Section */}
            <div className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-gray-50 to-slate-50'} rounded-2xl mb-12`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                    Mining Coins
                  </h2>
                  <button 
                    onClick={handleMiningDashboard}
                    className={`px-6 py-3 ${theme === 'dark' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'bg-blue-500 hover:bg-blue-600 text-white'} font-semibold rounded-lg transition-colors duration-300`}
                  >
                    <i className="fas fa-tachometer-alt mr-2"></i>
                    Mining Dashboard
                  </button>
                </div>

                {/* Filter Tabs */}
                <div className="flex space-x-2 mb-8">
                  {['all', 'active', 'new'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        activeTab === tab
                          ? theme === 'dark' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'
                          : theme === 'dark'
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Mining Coins Table */}
                <div className={`rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${theme === 'dark' ? '' : 'border-slate-200'}`}>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'}`}>
                        <tr>
                          <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                            Coin
                          </th>
                          <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                            Algo
                          </th>
                          <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                            Active Workers
                          </th>
                          <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                            Hashrate
                          </th>
                          <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                            Network
                          </th>
                          <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                            Profitability
                          </th>
                          <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                            Tutorial
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCoins.map((coin, index) => (
                          <tr
                            key={coin.id}
                            className={`border-t ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-750' : 'border-slate-200 hover:bg-slate-50'} transition-colors duration-200`}
                            style={{ animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both` }}
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} flex items-center justify-center ${coin.color} text-lg font-bold`}>
                                  {coin.icon}
                                </div>
                                <div>
                                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                                    {coin.coin}
                                  </div>
                                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                                    {coin.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className={`px-6 py-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                              {coin.algo}
                            </td>
                            <td className={`px-6 py-4 font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                              {coin.activeWorkers}
                            </td>
                            <td className={`px-6 py-4 font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                              {coin.hashrate}
                            </td>
                            <td className={`px-6 py-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                              {coin.network}
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-green-500 font-medium">
                                {coin.profitability}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <button 
                                onClick={() => handleViewTutorial(coin)}
                                className={`${theme === 'dark' ? 'text-yellow-500 hover:text-yellow-600' : 'text-blue-500 hover:text-blue-600'} font-medium transition-colors duration-200`}
                              >
                                View Tutorial
                                <i className="fas fa-chevron-down ml-1"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Partners Section */}
            <div className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-slate-100 to-gray-100'} rounded-2xl mb-12`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  Strategic Business Partners
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} border ${theme === 'dark' ? '' : 'border-slate-200'} shadow-lg text-center`}>
                    <div className="text-6xl font-bold text-blue-500 mb-4">U</div>
                    <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      ULTIMUSPOOL
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                      Ultimuspool is strategic business partner for Finsocial Pool, and provides technical services for Finsocial Pool.
                    </p>
                  </div>
                  
                  <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} border ${theme === 'dark' ? '' : 'border-slate-200'} shadow-lg text-center`}>
                    <div className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} mb-4`}>
                      More in
                    </div>
                    <div className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                      the future
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-gray-50 to-slate-50'} rounded-2xl`}>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                    Frequently Asked Questions
                  </h2>
                  <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    Everything you need to know about mining with Finsocial Pool
                  </p>
                </div>

                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className={`rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg hover:shadow-xl transition-all duration-300`}
                      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
                    >
                      <button
                        className="w-full p-6 text-left focus:outline-none"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'} hover:text-blue-600 transition-colors`}>
                            {faq.question}
                          </h3>
                          <i className={`fas fa-chevron-${expandedFaq === index ? 'up' : 'down'} ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} transition-transform duration-300`}></i>
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-500 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 pb-6">
                          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Support */}
                <div className="text-center mt-12">
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} mb-6`}>
                    Still have questions? Our support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={handleLiveChat}
                      className={`px-6 py-3 ${theme === 'dark' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'bg-blue-500 hover:bg-blue-600 text-white'} font-semibold rounded-lg transition-colors duration-300`}
                    >
                      <i className="fas fa-comments mr-2"></i>
                      Live Chat Support
                    </button>
                    <button 
                      onClick={handleEmailSupport}
                      className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'} font-semibold rounded-lg transition-colors duration-300`}
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Email Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === 'supermine' && <SuperMine />}
        {activeSection === 'accelerator' && <BTCAccelerator />}
      </div>

      {/* CTA Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-slate-700 to-gray-800'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Mining?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of miners and start earning with our professional mining pool
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleStartMiningNow}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-rocket mr-2"></i>
              Start Mining Now
            </button>
            <button 
              onClick={handleLearnMore}
              className="px-8 py-4 bg-white/20 backdrop-blur text-white font-bold text-lg rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <i className="fas fa-question-circle mr-2"></i>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Mining Setup Modal */}
      {showMiningSetupModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Mining Setup Guide
                </h3>
                <button 
                  onClick={closeMiningSetupModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} border-l-4 border-blue-500`}>
                    <h4 className={`font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      Step 1: Choose Your Coin
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                      Select a cryptocurrency to mine based on your hardware and profitability preferences.
                    </p>
                    <select className={`w-full p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} border`} disabled>
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum Classic (ETC)</option>
                      <option>Litecoin (LTC)</option>
                      <option>Zcash (ZEC)</option>
                    </select>
                  </div>
                  
                  <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} border-l-4 border-green-500`}>
                    <h4 className={`font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      Step 2: Configure Mining Software
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                      Download and configure your mining software with our pool settings.
                    </p>
                    <div className="space-y-2">
                      <button 
                        onClick={() => handleExternalLink('https://github.com/cgminer/cgminer')}
                        className="w-full p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                      >
                        Download CGMiner
                      </button>
                      <button 
                        onClick={() => handleExternalLink('https://bitcointalk.org/index.php?topic=55038.0')}
                        className="w-full p-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                      >
                        Download BFGMiner
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'}`}>
                  <h4 className={`font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Pool Configuration
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Pool URL
                      </label>
                      <input 
                        type="text" 
                        value="stratum+tcp://pool.finsocial.com:4444"
                        readOnly
                        className={`w-full p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} border`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Worker Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="username.worker1"
                        className={`w-full p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'} border`}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={closeMiningSetupModal}
                    className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'} rounded-lg transition-colors`}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      closeMiningSetupModal()
                      handleMiningDashboard()
                    }}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Continue to Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mining Dashboard Modal */}
      {showDashboardModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Mining Dashboard
                </h3>
                <button 
                  onClick={closeDashboardModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} text-center`}>
                  <div className="text-3xl font-bold text-blue-500 mb-2">0.00124</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Total Earnings (BTC)</div>
                </div>
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} text-center`}>
                  <div className="text-3xl font-bold text-green-500 mb-2">2.5 TH/s</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Current Hashrate</div>
                </div>
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} text-center`}>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">3</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Active Workers</div>
                </div>
              </div>
              
              <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} mb-6`}>
                <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Worker Status
                </h4>
                <div className="space-y-3">
                  {['worker1', 'worker2', 'worker3'].map((worker, index) => (
                    <div key={worker} className="flex items-center justify-between p-3 bg-green-100/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                          {worker}
                        </span>
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {(0.8 + index * 0.2).toFixed(1)} TH/s
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => handleExternalLink('/mining-stats')}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  View Full Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Modal */}
      {showTutorialModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {selectedCoin ? `${selectedCoin.name} Mining Tutorial` : 'Mining Tutorial'}
                </h3>
                <button 
                  onClick={closeTutorialModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              {selectedCoin && (
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} flex items-center justify-center ${selectedCoin.color} text-2xl font-bold`}>
                      {selectedCoin.icon}
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {selectedCoin.name} ({selectedCoin.coin})
                      </h4>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Algorithm: {selectedCoin.algo}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'}`}>
                  <h4 className={`font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Mining Configuration
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Pool Address
                      </label>
                      <code className={`block p-3 rounded ${theme === 'dark' ? 'bg-gray-600 text-green-400' : 'bg-gray-100 text-green-600'} text-sm font-mono`}>
                        stratum+tcp://pool.finsocial.com:4444
                      </code>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Username
                      </label>
                      <code className={`block p-3 rounded ${theme === 'dark' ? 'bg-gray-600 text-green-400' : 'bg-gray-100 text-green-600'} text-sm font-mono`}>
                        your_username.worker_name
                      </code>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Password
                      </label>
                      <code className={`block p-3 rounded ${theme === 'dark' ? 'bg-gray-600 text-green-400' : 'bg-gray-100 text-green-600'} text-sm font-mono`}>
                        x (or any string)
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleExternalLink(`https://docs.finsocial.com/mining/${selectedCoin?.coin.toLowerCase() || 'btc'}`)}
                    className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <i className="fas fa-book mr-2"></i>
                    Read Full Guide
                  </button>
                  <button 
                    onClick={() => handleExternalLink(`https://www.youtube.com/watch?v=mining-${selectedCoin?.coin.toLowerCase() || 'btc'}`)}
                    className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <i className="fab fa-youtube mr-2"></i>
                    Video Tutorial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Mining Support
                </h3>
                <button 
                  onClick={closeSupportModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button 
                  onClick={handleLiveChat}
                  className="w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center"
                >
                  <i className="fas fa-comments mr-3"></i>
                  Live Chat Support
                </button>
                <button 
                  onClick={handleEmailSupport}
                  className={`w-full p-4 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-lg transition-colors flex items-center justify-center`}
                >
                  <i className="fas fa-envelope mr-3"></i>
                  Email Support
                </button>
                <button 
                  onClick={() => handleExternalLink('https://docs.finsocial.com/mining')}
                  className={`w-full p-4 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-lg transition-colors flex items-center justify-center`}
                >
                  <i className="fas fa-book mr-3"></i>
                  Documentation
                </button>
                <button 
                  onClick={() => handleExternalLink('https://t.me/finsocial_mining')}
                  className={`w-full p-4 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-lg transition-colors flex items-center justify-center`}
                >
                  <i className="fab fa-telegram mr-3"></i>
                  Telegram Community
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Miningpool