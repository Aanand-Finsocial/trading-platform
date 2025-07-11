import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Research = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('reports')
  const [selectedTimeframe, setSelectedTimeframe] = useState('Weekly')

  const tabs = [
    { id: 'reports', label: 'Research Reports', icon: 'fas fa-file-alt' },
    { id: 'analysis', label: 'Technical Analysis', icon: 'fas fa-chart-line' },
    { id: 'data', label: 'Market Data', icon: 'fas fa-database' },
    { id: 'insights', label: 'Expert Insights', icon: 'fas fa-lightbulb' }
  ]

  const researchReports = [
    {
      id: 1,
      title: 'Q1 2024 Cryptocurrency Market Outlook',
      description: 'Comprehensive analysis of market trends, institutional adoption, and regulatory developments expected to shape the crypto landscape.',
      type: 'Quarterly Report',
      date: '2024-01-20',
      pages: 45,
      author: 'Research Team',
      category: 'Market Analysis',
      downloadCount: '2.3K',
      rating: 4.8,
      premium: true,
      tags: ['Market Outlook', 'Institutional', 'Regulation']
    },
    {
      id: 2,
      title: 'DeFi Protocol Security Assessment 2024',
      description: 'In-depth security analysis of top DeFi protocols, vulnerability assessments, and risk mitigation strategies.',
      type: 'Security Report',
      date: '2024-01-18',
      pages: 32,
      author: 'Security Research Division',
      category: 'Security',
      downloadCount: '1.8K',
      rating: 4.9,
      premium: true,
      tags: ['DeFi', 'Security', 'Risk Assessment']
    },
    {
      id: 3,
      title: 'Bitcoin Mining Industry Analysis',
      description: 'Analysis of Bitcoin mining efficiency, energy consumption trends, and the impact of halving events on mining economics.',
      type: 'Industry Report',
      date: '2024-01-15',
      pages: 28,
      author: 'Mining Research Team',
      category: 'Bitcoin',
      downloadCount: '1.5K',
      rating: 4.7,
      premium: false,
      tags: ['Bitcoin', 'Mining', 'Economics']
    }
  ]

  const technicalAnalysis = [
    {
      id: 1,
      symbol: 'BTC/USDT',
      price: '$42,850',
      change: '+2.45%',
      timeframe: '4H',
      signal: 'Bullish',
      support: '$41,200',
      resistance: '$44,500',
      rsi: 67,
      macd: 'Positive',
      analysis: 'Bitcoin is showing strong bullish momentum with price breaking above key resistance levels. RSI indicates room for further upside.',
      confidence: 85,
      lastUpdated: '2024-01-20 14:30'
    },
    {
      id: 2,
      symbol: 'ETH/USDT',
      price: '$2,650',
      change: '+1.82%',
      timeframe: '4H',
      signal: 'Neutral',
      support: '$2,500',
      resistance: '$2,750',
      rsi: 55,
      macd: 'Neutral',
      analysis: 'Ethereum is consolidating within a defined range. Waiting for breakout confirmation above resistance for bullish continuation.',
      confidence: 72,
      lastUpdated: '2024-01-20 14:25'
    },
    {
      id: 3,
      symbol: 'SOL/USDT',
      price: '$98.45',
      change: '+5.23%',
      timeframe: '4H',
      signal: 'Bullish',
      support: '$92.00',
      resistance: '$105.00',
      rsi: 78,
      macd: 'Positive',
      analysis: 'Solana showing strong momentum with high volume. RSI approaching overbought levels, potential for minor correction.',
      confidence: 78,
      lastUpdated: '2024-01-20 14:20'
    }
  ]

  const marketData = [
    {
      metric: 'Total Market Cap',
      value: '$1.68T',
      change: '+3.2%',
      period: '24h'
    },
    {
      metric: 'Bitcoin Dominance',
      value: '52.4%',
      change: '+0.8%',
      period: '24h'
    },
    {
      metric: 'DeFi TVL',
      value: '$78.5B',
      change: '+2.1%',
      period: '7d'
    },
    {
      metric: 'NFT Volume',
      value: '$245M',
      change: '-1.5%',
      period: '24h'
    }
  ]

  const expertInsights = [
    {
      id: 1,
      expert: 'Dr. Michael Anderson',
      title: 'Chief Research Officer',
      insight: 'The institutional adoption wave is just beginning. We expect to see more Fortune 500 companies adding Bitcoin to their treasury reserves in 2024.',
      topic: 'Institutional Adoption',
      date: '2024-01-20',
      avatar: 'fas fa-user-tie'
    },
    {
      id: 2,
      expert: 'Sarah Chen',
      title: 'DeFi Research Lead',
      insight: 'Cross-chain interoperability will be the key driver for DeFi growth. Projects focusing on seamless multi-chain experiences will dominate.',
      topic: 'DeFi Innovation',
      date: '2024-01-19',
      avatar: 'fas fa-user-graduate'
    },
    {
      id: 3,
      expert: 'Alex Thompson',
      title: 'Technical Analyst',
      insight: 'Current market structure suggests we are in the early stages of a new bull cycle. Key support levels are holding strong across major cryptocurrencies.',
      topic: 'Market Outlook',
      date: '2024-01-18',
      avatar: 'fas fa-chart-line'
    }
  ]

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700'} text-white overflow-hidden`}>
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-20 sm:w-40 h-20 sm:h-40 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-10 sm:w-20 h-10 sm:h-20 bg-cyan-400 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Research & Analysis Hub
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
                Access comprehensive market research, technical analysis, and expert insights to make informed trading decisions.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-300">50+</div>
                  <div className="text-xs sm:text-sm text-gray-200">Reports</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-purple-300">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-200">Analysis</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-300">Real-time</div>
                  <div className="text-xs sm:text-sm text-gray-200">Data</div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="w-60 sm:w-80 h-60 sm:h-80 mx-auto relative">
                {/* Central Chart */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6 shadow-2xl">
                  <div className="absolute inset-3 sm:inset-4 bg-gray-900 rounded-xl p-2 sm:p-4">
                    <div className="h-full flex items-end space-x-1 sm:space-x-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className={`flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t`} 
                             style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-green-500 rounded-lg p-2 sm:p-3 shadow-lg animate-bounce">
                  <i className="fas fa-arrow-up text-white text-sm"></i>
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-red-500 rounded-lg p-2 sm:p-3 shadow-lg animate-pulse">
                  <i className="fas fa-chart-bar text-white text-sm"></i>
                </div>
                <div className="absolute top-1/4 -left-4 sm:-left-8 bg-yellow-500 rounded-full p-1 sm:p-2 shadow-lg animate-ping">
                  <i className="fas fa-dollar-sign text-black text-xs sm:text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Tab Navigation */}
          <div className="sm:hidden">
            <select 
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className={`w-full py-3 px-4 border-b-2 border-yellow-500 bg-transparent ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id} className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden sm:flex space-x-4 lg:space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                  tab.id === activeTab
                    ? 'border-yellow-500 text-yellow-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`${tab.icon} text-sm`}></i>
                <span className="font-medium text-sm lg:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'reports' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Research Reports
              </h2>
              <select className={`px-4 py-2 rounded-lg border w-full sm:w-auto ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}>
                <option>All Categories</option>
                <option>Market Analysis</option>
                <option>Security</option>
                <option>Bitcoin</option>
                <option>DeFi</option>
              </select>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
              {researchReports.map((report) => (
                <div key={report.id} className={`rounded-xl border p-4 sm:p-6 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } hover:shadow-lg transition-shadow`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {report.type}
                      </span>
                      {report.premium && (
                        <span className="px-2 py-1 bg-yellow-500 text-black rounded text-xs font-bold">
                          Premium
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-star text-yellow-500 text-sm"></i>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {report.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-lg sm:text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                    {report.title}
                  </h3>

                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                    {report.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {report.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 gap-2">
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      <span>{report.pages} pages</span>
                      <span>{report.downloadCount} downloads</span>
                      <span>{report.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      By {report.author}
                    </span>
                    <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors text-sm">
                      {report.premium ? 'Premium Access' : 'Download'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Technical Analysis
              </h2>
              <div className="flex flex-wrap gap-2 sm:space-x-4">
                {['1H', '4H', '1D', '1W'].map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      timeframe === selectedTimeframe
                        ? 'bg-yellow-500 text-black'
                        : theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {technicalAnalysis.map((analysis) => (
                <div key={analysis.id} className={`rounded-xl border p-4 sm:p-6 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Price Info */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                        <h3 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {analysis.symbol}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
                          analysis.signal === 'Bullish' ? 'bg-green-100 text-green-800' :
                          analysis.signal === 'Bearish' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {analysis.signal}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Price:</span>
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {analysis.price}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>24h Change:</span>
                          <span className="font-medium text-green-500">{analysis.change}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Support:</span>
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {analysis.support}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Resistance:</span>
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {analysis.resistance}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Technical Indicators */}
                    <div>
                      <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Technical Indicators
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>RSI:</span>
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                              {analysis.rsi}
                            </span>
                            <div className="w-16 sm:w-20 h-2 bg-gray-200 rounded-full">
                              <div 
                                className="h-2 bg-yellow-500 rounded-full"
                                style={{ width: `${analysis.rsi}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>MACD:</span>
                          <span className={`font-medium ${
                            analysis.macd === 'Positive' ? 'text-green-500' :
                            analysis.macd === 'Negative' ? 'text-red-500' :
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {analysis.macd}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Confidence:</span>
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                              {analysis.confidence}%
                            </span>
                            <div className="w-12 sm:w-16 h-2 bg-gray-200 rounded-full">
                              <div 
                                className="h-2 bg-blue-500 rounded-full"
                                style={{ width: `${analysis.confidence}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analysis */}
                    <div>
                      <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Analysis
                      </h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mb-4`}>
                        {analysis.analysis}
                      </p>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                        Last updated: {analysis.lastUpdated}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div>
            <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Market Data Overview
            </h2>
            
            {/* Market Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {marketData.map((data, index) => (
                <div key={index} className={`rounded-xl border p-4 sm:p-6 text-center ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } hover:shadow-lg transition-shadow`}>
                  <h3 className={`text-xs sm:text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {data.metric}
                  </h3>
                  <div className={`text-lg sm:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {data.value}
                  </div>
                  <div className={`text-xs sm:text-sm ${
                    data.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {data.change} ({data.period})
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className={`rounded-xl border p-6 sm:p-8 ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Market Overview Chart
              </h3>
              <div className="h-60 sm:h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <i className="fas fa-chart-area text-2xl sm:text-4xl mb-4"></i>
                  <div className="text-base sm:text-lg font-medium">Interactive Chart</div>
                  <div className="text-xs sm:text-sm opacity-75">Real-time market data visualization</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div>
            <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Expert Insights
            </h2>
            
            <div className="space-y-6">
              {expertInsights.map((insight) => (
                <div key={insight.id} className={`rounded-xl border p-4 sm:p-6 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } hover:shadow-lg transition-shadow`}>
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    } flex-shrink-0`}>
                      <i className={`${insight.avatar} ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <div className="min-w-0">
                          <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                            {insight.expert}
                          </h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                            {insight.title}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {insight.topic}
                          </span>
                          <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                            {insight.date}
                          </div>
                        </div>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>
                        {insight.insight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Research
