import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import TradeAnywhere from '../../components/TradeAnywhere/TradeAnywhere'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const { theme } = useTheme()
  const [openFaq, setOpenFaq] = useState(null)
  const [cryptoPrices] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: '43,250.00', change: '+2.45%', isPositive: true },
    { symbol: 'ETH', name: 'Ethereum', price: '2,680.50', change: '+1.85%', isPositive: true },
    { symbol: 'BNB', name: 'BNB', price: '315.20', change: '-0.75%', isPositive: false },
    { symbol: 'ADA', name: 'Cardano', price: '0.485', change: '+3.20%', isPositive: true },
    { symbol: 'SOL', name: 'Solana', price: '98.75', change: '+5.15%', isPositive: true },
    { symbol: 'DOT', name: 'Polkadot', price: '7.85', change: '-1.25%', isPositive: false }
  ])

  const features = [
    {
      icon: 'fas fa-coins',
      title: 'Buy & Sell Crypto',
      desc: 'Trade 500+ cryptocurrencies with the lowest fees'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Advanced Trading',
      desc: 'Professional charts and trading tools for experienced traders'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Safe',
      desc: 'Industry-leading security measures to protect your assets'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Trading',
      desc: 'Trade on the go with our award-winning mobile app'
    }
  ]

  const stats = [
    { value: '150M+', label: 'Registered Users' },
    { value: '$76B', label: '24h Trading Volume' },
    { value: '350+', label: 'Cryptocurrencies' },
    { value: '180+', label: 'Countries Supported' }
  ]

  const faqs = [
    {
      question: 'How do I get started with FinSocial?',
      answer: 'Getting started is easy! Simply create a free account, complete the verification process, and you can start trading within minutes. No minimum deposit required.'
    },
    {
      question: 'What cryptocurrencies can I trade?',
      answer: 'FinSocial supports over 350 cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), BNB, Cardano (ADA), Solana (SOL), and many more popular altcoins.'
    },
    {
      question: 'What are the trading fees?',
      answer: 'We offer competitive trading fees starting from 0.1% for makers and 0.1% for takers. VIP users can enjoy even lower fees based on their trading volume.'
    },
    {
      question: 'Is FinSocial secure?',
      answer: 'Yes, security is our top priority. We use industry-leading security measures including cold storage, multi-signature wallets, 2FA authentication, and regular security audits.'
    },
    {
      question: 'How can I deposit funds?',
      answer: 'You can deposit funds through various methods including bank transfers, credit/debit cards, and cryptocurrency transfers from other wallets.'
    },
    {
      question: 'What is futures trading?',
      answer: 'Futures trading allows you to trade cryptocurrency contracts with leverage up to 125x. You can go long or short on various crypto pairs to maximize your trading potential.'
    },
    {
      question: 'How do I withdraw my funds?',
      answer: 'Withdrawals are processed quickly and securely. You can withdraw to your bank account, debit card, or transfer cryptocurrencies to external wallets.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, we provide 24/7 customer support through live chat, email, and phone. Our support team is always ready to help you with any questions or issues.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' 
          : 'bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50'
      } py-12 sm:py-16 lg:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-4 sm:mb-6 leading-tight`}>
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                FinSocial
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Crypto Universe
              </span>
            </h1>
            <p className={`text-base sm:text-lg lg:text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } mb-6 sm:mb-8 max-w-3xl mx-auto px-4`}>
              Trade, earn, and manage your crypto portfolio with the world's leading cryptocurrency exchange
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 text-center shadow-lg text-sm sm:text-base"
              >
                Get Started Now
              </Link>
              <Link
                to="/login"
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 ${
                  theme === 'dark' 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                } font-semibold rounded-lg transition-colors duration-200 text-center text-sm sm:text-base`}
              >
                Start Trading
              </Link>
            </div>
          </div>

          {/* Crypto Price Ticker */}
          <div className={`${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl p-4 sm:p-6 shadow-xl mx-4 sm:mx-0`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
              <h3 className={`text-base sm:text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Market Overview</h3>
              <Link to="/login" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All Markets →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
              {cryptoPrices.map((crypto, index) => (
                <div key={index} className={`text-center p-2 sm:p-3 ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                } rounded-lg transition-colors`}>
                  <div className={`font-semibold text-sm sm:text-base ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{crypto.symbol}</div>
                  <div className={`text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } hidden sm:block`}>{crypto.name}</div>
                  <div className={`font-bold text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>${crypto.price}</div>
                  <div className={`text-xs sm:text-sm font-medium ${crypto.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {crypto.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 sm:py-16 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      } ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 sm:py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FinSocial</span>?
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-2xl mx-auto px-4`}>
              Experience the most trusted and secure cryptocurrency trading platform
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`text-center p-4 sm:p-6 ${
                theme === 'dark' ? 'hover:shadow-gray-700' : 'hover:shadow-lg'
              } transition-shadow duration-300 rounded-lg`}>
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${feature.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } mb-3 sm:mb-4`}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Tools Section */}
      <section className={`py-16 sm:py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              } mb-4 sm:mb-6`}>
                Professional Trading Tools
              </h2>
              <p className={`text-base sm:text-lg lg:text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } mb-6 sm:mb-8`}>
                Access advanced charts, indicators, and order types to maximize your trading potential
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3 text-sm sm:text-base"></i>
                  <span className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Advanced charting with 100+ indicators</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3 text-sm sm:text-base"></i>
                  <span className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Multiple order types and trading modes</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3 text-sm sm:text-base"></i>
                  <span className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Real-time market data and news</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3 text-sm sm:text-base"></i>
                  <span className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Portfolio tracking and analytics</span>
                </li>
              </ul>
              <Link
                to="/login"
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
              >
                Start Trading
              </Link>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-3 sm:p-6 rounded-2xl shadow-2xl">
                {/* Chart Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2">
                  <div className="text-white">
                    <div className="text-lg sm:text-xl font-bold">BTC/USDT</div>
                    <div className="text-green-400 text-xs sm:text-sm">+5.2% (+$2,350)</div>
                  </div>
                  <div className="text-white text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold">$45,230.50</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Last Price</div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="h-48 sm:h-64 bg-gray-800 rounded-lg p-2 sm:p-4 mb-3 sm:mb-4 relative overflow-hidden">
                  {/* Professional Trading Chart */}
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    {/* Grid Lines */}
                    <defs>
                      <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.5"/>
                      </pattern>
                      <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Price Area */}
                    <path
                      d="M 20,160 L 60,140 L 100,120 L 140,100 L 180,80 L 220,90 L 260,70 L 300,60 L 340,40 L 380,30 L 380,200 L 20,200 Z"
                      fill="url(#priceGradient)"
                    />
                    
                    {/* Main Trend Line */}
                    <polyline
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                      points="20,160 60,140 100,120 140,100 180,80 220,90 260,70 300,60 340,40 380,30"
                    />
                    
                    {/* Moving Average Lines */}
                    <polyline
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      strokeDasharray="3,3"
                      points="20,150 60,135 100,118 140,105 180,85 220,95 260,75 300,65 340,45 380,35"
                    />
                    <polyline
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      points="20,155 60,142 100,125 140,108 180,88 220,98 260,78 300,68 340,48 380,38"
                    />
                    
                    {/* Candlesticks */}
                    {/*
                      {x: 40, high: 50, low: 80, open: 70, close: 55, color: '#10B981'},
                      {x: 80, high: 45, low: 75, open: 55, close: 50, color: '#10B981'},
                      {x: 120, high: 40, low: 70, open: 50, close: 45, color: '#10B981'},
                      {x: 160, high: 35, low: 65, open: 45, close: 40, color: '#10B981'},
                      {x: 200, high: 30, low: 60, open: 40, close: 35, color: '#10B981'},
                      {x: 240, high: 35, low: 65, open: 35, close: 45, color: '#EF4444'},
                      {x: 280, high: 25, low: 55, open: 45, close: 30, color: '#10B981'},
                      {x: 320, high: 20, low: 50, open: 30, close: 25, color: '#10B981'},
                      {x: 360, high: 15, low: 45, open: 25, close: 20, color: '#10B981'}
                    */}
                    
                    {/* Volume Bars */}
                    {[20, 30, 25, 35, 40, 30, 45, 38, 42].map((vol, i) => (
                      <rect
                        key={i}
                        x={40 + i * 40 - 8}
                        y={180 - vol}
                        width="16"
                        height={vol}
                        fill="#3B82F6"
                        opacity="0.3"
                      />
                    ))}
                    
                    {/* Price Points */}
                    {/*
                      {x: 60, y: 140}, {x: 100, y: 120}, {x: 140, y: 100}, 
                      {x: 180, y: 80}, {x: 220, y: 90}, {x: 260, y: 70}, 
                      {x: 300, y: 60}, {x: 340, y: 40}
                    */}
                  </svg>
                  
                  {/* Chart Indicators - Hidden on very small screens */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-xs text-gray-400 space-y-1 hidden sm:block">
                    <div className="flex items-center">
                      <div className="w-3 h-0.5 bg-green-500 mr-2"></div>
                      <span>Price: $45,230</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-0.5 bg-yellow-500 mr-2"></div>
                      <span>MA(20): $44,850</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-0.5 bg-red-500 mr-2"></div>
                      <span>MA(50): $43,920</span>
                    </div>
                  </div>
                  
                  {/* Volume Indicator */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-xs text-gray-400">
                    <div>Volume: 45.2K BTC</div>
                    <div className="hidden sm:block">RSI: 68.5</div>
                  </div>
                </div>
                
                {/* Trading Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-gray-700 p-2 sm:p-3 rounded text-center">
                    <div className="text-green-400 font-bold text-xs sm:text-sm">+5.2%</div>
                    <div className="text-gray-400 text-xs">24h Change</div>
                  </div>
                  <div className="bg-gray-700 p-2 sm:p-3 rounded text-center">
                    <div className="text-white font-bold text-xs sm:text-sm">$45,230</div>
                    <div className="text-gray-400 text-xs">Current Price</div>
                  </div>
                  <div className="bg-gray-700 p-2 sm:p-3 rounded text-center">
                    <div className="text-blue-400 font-bold text-xs sm:text-sm">1.2M</div>
                    <div className="text-gray-400 text-xs">24h Volume</div>
                  </div>
                </div>
                
                {/* Chart Controls */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1 sm:space-x-2">
                    <button className="px-2 sm:px-3 py-1 bg-blue-600 text-white text-xs rounded font-medium">1H</button>
                    <button className="px-2 sm:px-3 py-1 bg-gray-600 text-gray-300 text-xs rounded hover:bg-gray-500">4H</button>
                    <button className="px-2 sm:px-3 py-1 bg-gray-600 text-gray-300 text-xs rounded hover:bg-gray-500">1D</button>
                    <button className="px-2 sm:px-3 py-1 bg-gray-600 text-gray-300 text-xs rounded hover:bg-gray-500">1W</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 sm:py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } px-4`}>
              Find answers to common questions about FinSocial
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } rounded-lg shadow-md overflow-hidden`}>
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center ${
                    theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  } transition-colors duration-200`}
                >
                  <span className={`text-sm sm:text-base lg:text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  } pr-4`}>
                    {faq.question}
                  </span>
                  <i className={`fas ${openFaq === index ? 'fa-minus' : 'fa-plus'} text-blue-600 transition-transform duration-200 flex-shrink-0`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className={`text-sm sm:text-base ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    } leading-relaxed`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } mb-4 text-sm sm:text-base`}>
              Still have questions? We're here to help!
            </p>
            <Link
              to="/support"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <TradeAnywhere />

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      } ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Trading?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4">
            Join millions of users worldwide and start your crypto journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/register"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200"
          >
            Create Free Account
          </Link>
          <Link
            to="/buy-crypto"
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 ${
              theme === 'dark' 
              ? 'border-white text-white hover:bg-white hover:text-gray-900'
              : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
            } font-semibold rounded-lg transition-colors duration-200`}
          >
            Buy Crypto Now
          </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

