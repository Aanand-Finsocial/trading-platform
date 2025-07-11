import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const VIPInstitutional = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('vip')
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [activeServiceTab, setActiveServiceTab] = useState('trading')

  const tabs = [
    { id: 'vip', label: 'VIP Program', icon: 'fas fa-crown' },
    { id: 'institutional', label: 'Institutional', icon: 'fas fa-building' }
  ]

  const serviceTabs = [
    { id: 'trading', label: 'TRADING' },
    { id: 'finance', label: 'FINANCE' },
    { id: 'custody', label: 'CUSTODY' },
    { id: 'infrastructure', label: 'INFRASTRUCTURE' }
  ]

  const vipTiers = [
    {
      level: 'VIP 1',
      requirements: {
        balance: '≥ $50,000',
        volume: '≥ $1,000,000'
      },
      benefits: {
        spotMaker: '0.1000%',
        spotTaker: '0.1000%',
        futuresMaker: '0.0200%',
        futuresTaker: '0.0400%',
        withdrawal: '2 BTC/24h'
      },
      features: [
        'Dedicated VIP Customer Service',
        'VIP Support Chat Channel',
        'VIP Community Access',
        'Birthday Gifts'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    {
      level: 'VIP 2', 
      requirements: {
        balance: '≥ $250,000',
        volume: '≥ $5,000,000'
      },
      benefits: {
        spotMaker: '0.0900%',
        spotTaker: '0.1000%',
        futuresMaker: '0.0200%',
        futuresTaker: '0.0400%',
        withdrawal: '5 BTC/24h'
      },
      features: [
        'All VIP 1 Benefits',
        'Exclusive Market Reports',
        'Advanced Trading Tools',
        'Priority Support Response'
      ],
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700'
    },
    {
      level: 'VIP 3',
      requirements: {
        balance: '≥ $1,000,000',
        volume: '≥ $25,000,000'
      },
      benefits: {
        spotMaker: '0.0800%',
        spotTaker: '0.1000%',
        futuresMaker: '0.0150%',
        futuresTaker: '0.0350%',
        withdrawal: '15 BTC/24h'
      },
      features: [
        'All VIP 2 Benefits',
        'Personal Account Manager',
        'Custom API Rate Limits',
        'Exclusive Investment Opportunities'
      ],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700'
    },
    {
      level: 'VIP 4',
      requirements: {
        balance: '≥ $4,000,000',
        volume: '≥ $100,000,000'
      },
      benefits: {
        spotMaker: '0.0700%',
        spotTaker: '0.0900%',
        futuresMaker: '0.0150%',
        futuresTaker: '0.0350%',
        withdrawal: '50 BTC/24h'
      },
      features: [
        'All VIP 3 Benefits',
        'Institutional Services Access',
        'White-glove Support',
        'Exclusive Events Invitation'
      ],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      level: 'VIP 5',
      requirements: {
        balance: '≥ $20,000,000',
        volume: '≥ $500,000,000'
      },
      benefits: {
        spotMaker: '0.0600%',
        spotTaker: '0.0800%',
        futuresMaker: '0.0100%',
        futuresTaker: '0.0250%',
        withdrawal: '200 BTC/24h'
      },
      features: [
        'All VIP 4 Benefits',
        'Direct Executive Contact',
        'Custom Solutions Development',
        'Global Events Access'
      ],
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700'
    }
  ]

  const institutionalServices = [
    {
      title: 'Prime Brokerage',
      description: 'Multi-venue execution, comprehensive reporting, and risk management',
      features: [
        'Multi-exchange connectivity',
        'Smart order routing',
        'Real-time risk monitoring',
        'Consolidated reporting',
        'Credit line facilities',
        'Custom trading algorithms'
      ],
      icon: 'fas fa-university',
      color: 'bg-blue-500'
    },
    {
      title: 'Custody & Security',
      description: 'Institutional-grade custody with military-grade security',
      features: [
        'Cold storage solutions',
        'Multi-signature wallets',
        'Insurance coverage up to $500M',
        'Regulatory compliance',
        'Audit trail & reporting',
        '24/7 monitoring'
      ],
      icon: 'fas fa-shield-alt',
      color: 'bg-green-500'
    },
    {
      title: 'OTC Trading',
      description: 'Large block trading with minimal market impact',
      features: [
        'Deep liquidity pools',
        'Competitive pricing',
        'Minimal slippage',
        'Privacy protection',
        'Settlement flexibility',
        'Dedicated trading desk'
      ],
      icon: 'fas fa-handshake',
      color: 'bg-purple-500'
    },
    {
      title: 'Market Making',
      description: 'Provide liquidity and earn rebates across multiple markets',
      features: [
        'Rebate programs',
        'API connectivity',
        'Low latency execution',
        'Market data feeds',
        'Risk management tools',
        'Performance analytics'
      ],
      icon: 'fas fa-chart-line',
      color: 'bg-orange-500'
    }
  ]

  const currentUserStats = {
    currentLevel: 'Regular',
    spot30dVolume: '$125,000',
    futures30dVolume: '$50,000',
    totalVolume: '$175,000',
    bnbBalance: '150 BNB',
    nextLevelRequirement: '$825,000',
    progressPercentage: 17.5
  }

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} py-12 sm:py-16 lg:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              VIP & Institutional Services
            </h1>
            <p className={`text-base sm:text-lg lg:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed px-2`}>
              Unlock exclusive benefits, personalized service, and institutional-grade solutions designed for high-volume traders and organizations. Trade, build, secure and grow your assets with our comprehensive suite of professional crypto products and services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8 px-4">
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 py-4 sm:py-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center sm:justify-start space-x-2 pb-2 sm:pb-4 border-b-2 transition-colors whitespace-nowrap ${
                  tab.id === activeTab
                    ? 'border-yellow-500 text-yellow-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`${tab.icon} text-sm`}></i>
                <span className="font-medium text-sm sm:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {activeTab === 'vip' ? (
          <div>
            {/* VIP Portal Section */}
            <div className={`rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8 sm:mb-12`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
                {/* Left Content */}
                <div className="p-6 sm:p-8 order-2 lg:order-1">
                  <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Streamline all your trading needs
                    <br />
                    with the <span className="text-yellow-500">VIP Portal</span>
                  </h2>
                  <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors mb-6 sm:mb-8">
                    Enter VIP Portal
                  </button>

                  {/* VIP Features List */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                      {['Account Management', 'OTC & Execution Solutions', 'Trading Configurations', 'Data & Reporting', 'Resources & Promotions'].map((feature, index) => (
                        <div key={index} className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <span className={`text-sm sm:text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - VIP Portal Preview */}
                <div className="p-6 sm:p-8 order-1 lg:order-2">
                  <div className={`relative ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl p-4 sm:p-6 h-64 sm:h-80 lg:h-96`}>
                    {/* Mock VIP Portal Interface */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-3 sm:p-4 mb-4`}>
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0">
                        <span className="text-yellow-500 font-bold text-sm sm:text-base">◆ Finsocial</span>
                        <div className="hidden sm:flex space-x-2 lg:space-x-4 text-xs sm:text-sm">
                          <span>Buy Crypto</span>
                          <span>Markets</span>
                          <span>Trade</span>
                          <span>Derivatives</span>
                          <span>Finance</span>
                          <span>More</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          VIP Portal
                        </h3>
                        <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                          One-Stop Hub for Finsocial VIPs
                        </p>
                        <button className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-600 text-white text-xs sm:text-sm rounded">
                          FAQ
                        </button>
                      </div>

                      <div className="mt-4 sm:mt-6">
                        <h4 className={`font-medium mb-2 sm:mb-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          Featured Highlights
                        </h4>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {[
                            { icon: '📊', text: 'OTC Trading Platform' },
                            { icon: '👥', text: 'Sub-Account Management' },
                            { icon: '📈', text: 'Report Center' },
                            { icon: '💰', text: 'Rate Center' }
                          ].map((item, index) => (
                            <div key={index} className={`p-2 rounded text-xs sm:text-sm ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                              <span className="mr-1">{item.icon}</span>
                              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Benefits and Criteria Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* VIP Benefits */}
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  VIP Program Benefits
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: 'fas fa-percentage', text: 'Lower Trading Fees' },
                    { icon: 'fas fa-coins', text: 'Higher Withdrawal Limits' },
                    { icon: 'fas fa-headset', text: 'Dedicated Support' },
                    { icon: 'fas fa-chart-line', text: 'Exclusive Market Insights' },
                    { icon: 'fas fa-gift', text: 'Special Rewards' },
                    { icon: 'fas fa-cog', text: 'Advanced Tools' }
                  ].map((benefit, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
                      <i className={`${benefit.icon} text-yellow-500 text-sm sm:text-base`}></i>
                      <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VIP Criteria */}
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  VIP Qualification Criteria
                </h3>
                
                {/* Current Status */}
                <div className={`p-4 sm:p-6 rounded-xl mb-4 sm:mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-l-4 border-yellow-500`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                    <h4 className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Your Current Status
                    </h4>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      Regular
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        30-Day Trading Volume
                      </div>
                      <div className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        $175,000 / $1,000,000
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '17.5%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        BNB Balance
                      </div>
                      <div className={`font-bold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        150 BNB / 50 BNB ✓
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Qualification Methods */}
                <div className="space-y-3 sm:space-y-4">
                  <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border`}>
                    <h4 className={`font-semibold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Method 1: Trading Volume
                    </h4>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      Meet the 30-day trading volume requirement across spot and futures markets.
                    </p>
                    <div className="text-xs sm:text-sm font-medium text-yellow-500">
                      VIP 1: ≥ $1,000,000
                    </div>
                  </div>

                  <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border`}>
                    <h4 className={`font-semibold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Method 2: BNB Balance
                    </h4>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      Maintain the required BNB balance as a 30-day average.
                    </p>
                    <div className="text-xs sm:text-sm font-medium text-green-500">
                      VIP 1: ≥ 50 BNB ✓ Qualified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Institutional Services Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Institutional services from a 
                <br className="hidden sm:block" />
                global leader in crypto trading
              </h2>
              <p className={`text-base sm:text-lg lg:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-4xl mx-auto mb-6 sm:mb-8 px-2`}>
                Trade, build, secure and grow your assets with our comprehensive suite of professional crypto products and services.
              </p>
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Service Categories Tabs */}
            <div className="flex justify-center mb-6 sm:mb-8 px-2">
              <div className={`flex flex-wrap sm:flex-nowrap rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} p-1 w-full sm:w-auto`}>
                {serviceTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveServiceTab(tab.id)}
                    className={`flex-1 sm:flex-none px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-colors text-xs sm:text-sm ${
                      activeServiceTab === tab.id
                        ? 'bg-gray-600 text-white'
                        : theme === 'dark'
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {activeServiceTab === 'trading' && (
                <>
                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Exchange
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      The world's largest and most liquid platform with spot, futures and options trading.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>

                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      OTC
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      The prime choice for block trades, secure settlement and competitive pricing.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>
                </>
              )}

              {activeServiceTab === 'finance' && (
                <>
                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Loans & Credit
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      Access liquidity with crypto-backed loans and credit facilities.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>

                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Staking Services
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      Earn rewards through institutional-grade staking solutions.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>
                </>
              )}

              {activeServiceTab === 'custody' && (
                <>
                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Custody Solutions
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      Secure storage and management of digital assets with insurance coverage.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>

                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Multi-Sig Wallets
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      Enterprise-grade multi-signature wallet solutions for enhanced security.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>
                </>
              )}

              {activeServiceTab === 'infrastructure' && (
                <>
                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      API Solutions
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      High-performance APIs for algorithmic trading and system integration.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>

                  <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      White Label Solutions
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 sm:mb-6 text-sm sm:text-base`}>
                      Complete infrastructure for launching your own crypto exchange.
                    </p>
                    <button className="text-yellow-500 hover:text-yellow-600 font-medium text-sm sm:text-base">
                      Learn More →
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-md lg:max-w-3xl max-h-[90vh] overflow-y-auto`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
              <div>
                <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  VIP & Institutional Application
                </h2>
                <p className={`mt-2 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Tell us about your trading needs and we'll get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setShowApplicationForm(false)}
                className={`p-2 sm:p-3 hover:bg-gray-100 rounded-full self-end sm:self-auto ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times text-lg sm:text-xl"></i>
              </button>
            </div>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Service Type *
                  </label>
                  <select className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}>
                    <option value="">Select service type</option>
                    <option value="vip">VIP Program</option>
                    <option value="prime">Prime Brokerage</option>
                    <option value="custody">Custody Services</option>
                    <option value="otc">OTC Trading</option>
                    <option value="market-making">Market Making</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Expected Trading Volume (Monthly)
                  </label>
                  <select className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}>
                    <option value="">Select volume range</option>
                    <option value="1-5m">$1M - $5M</option>
                    <option value="5-25m">$5M - $25M</option>
                    <option value="25-100m">$25M - $100M</option>
                    <option value="100m+">$100M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Company/Organization (Optional)
                </label>
                <input
                  type="text"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Additional Requirements
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-sm sm:text-base ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors`}
                  placeholder="Tell us about your specific requirements, trading strategies, or any questions you have..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-yellow-500 rounded focus:ring-yellow-500 mt-0.5"
                />
                <label htmlFor="terms" className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  I agree to the <span className="text-yellow-500 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-yellow-500 hover:underline cursor-pointer">Privacy Policy</span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-xl font-semibold transition-colors text-sm sm:text-base ${
                    theme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default VIPInstitutional
