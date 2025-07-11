import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import TradeAnywhere from '../../components/TradeAnywhere/TradeAnywhere'
import Footer from '../../components/Footer/Footer'

const HomeLoggedIn = () => {
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

  // Mock user data
  const [userBalance] = useState({
    total: '0.00',
    available: '0.00',
    currency: 'USDT'
  })

  const [isVerified] = useState(false) // Mock verification status

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
      question: 'How do I complete account verification?',
      answer: 'To complete verification, go to your profile settings and upload a valid government ID and proof of address. The process usually takes 24-48 hours.'
    },
    {
      question: 'How can I deposit funds to start trading?',
      answer: 'You can deposit funds through bank transfer, credit/debit card, or cryptocurrency transfer. Go to Wallet > Deposit to see all available options.'
    },
    {
      question: 'What are the trading fees?',
      answer: 'We offer competitive trading fees starting from 0.1% for makers and 0.1% for takers. VIP users can enjoy even lower fees based on their trading volume.'
    },
    {
      question: 'How do I enable two-factor authentication?',
      answer: 'Go to Security Settings in your profile and enable 2FA using Google Authenticator or SMS. This adds an extra layer of security to your account.'
    },
    {
      question: 'What cryptocurrencies can I trade?',
      answer: 'FinSocial supports over 350 cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), BNB, Cardano (ADA), Solana (SOL), and many more popular altcoins.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section with Balance */}
      <section className={`${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' 
          : 'bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50'
      } py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Verification Alert */}
            {!isVerified && (
              <div className="mb-8 max-w-4xl mx-auto">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <i className="fas fa-exclamation-triangle text-yellow-400 text-xl"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Account Verification Required:</strong> Please verify your account to unlock full trading features and higher limits.
                        <Link to="/verify" className="font-medium underline hover:text-yellow-600 ml-1">
                          Verify Now →
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <h1 className={`text-5xl md:text-7xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-6`}>
              {isVerified ? 'Welcome Back to' : 'Verify Your Account &'}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Start Trading
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Crypto Assets
              </span>
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } mb-8 max-w-3xl mx-auto`}>
              {isVerified 
                ? 'Continue managing your crypto portfolio with advanced trading tools'
                : 'Complete your verification to unlock the full potential of cryptocurrency trading'
              }
            </p>

            {/* Balance Display */}
            <div className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl p-6 shadow-xl mb-8 max-w-md mx-auto`}>
              <div className="text-center">
                <h3 className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } mb-2`}>
                  Total Balance
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  ${userBalance.total} {userBalance.currency}
                </div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Available: ${userBalance.available} {userBalance.currency}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link
                    to="/deposit"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                  >
                    <i className="fas fa-plus mr-2"></i>Deposit
                  </Link>
                  <Link
                    to="/trade/spot"
                    className={`flex-1 px-4 py-2 border-2 ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    } font-semibold rounded-lg transition-colors duration-200 text-center`}
                  >
                    <i className="fas fa-chart-line mr-2"></i>Trade
                  </Link>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isVerified ? (
                <>
                  <Link
                    to="/verify"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 text-center shadow-lg"
                  >
                    Complete Verification
                  </Link>
                  <Link
                    to="/deposit"
                    className={`px-8 py-4 border-2 ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    } font-semibold rounded-lg transition-colors duration-200 text-center`}
                  >
                    Deposit Funds
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/trade"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 text-center shadow-lg"
                  >
                    Start Trading
                  </Link>
                  <Link
                    to="/portfolio"
                    className={`px-8 py-4 border-2 ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    } font-semibold rounded-lg transition-colors duration-200 text-center`}
                  >
                    View Portfolio
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Crypto Price Ticker */}
          <div className={`${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl p-6 shadow-xl`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Market Overview</h3>
              <Link to="/markets" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All Markets →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cryptoPrices.map((crypto, index) => (
                <div key={index} className={`text-center p-3 ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                } rounded-lg transition-colors cursor-pointer`}>
                  <div className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{crypto.symbol}</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>{crypto.name}</div>
                  <div className={`font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>${crypto.price}</div>
                  <div className={`text-sm font-medium ${crypto.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {crypto.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      } ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Trading Features
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Explore advanced trading tools and features available on FinSocial
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`text-center p-6 ${
                theme === 'dark' ? 'hover:shadow-gray-700' : 'hover:shadow-lg'
              } transition-shadow duration-300`}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                </div>
                <h3 className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  {feature.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Getting Started Guide
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Common questions to help you get started with trading
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } rounded-lg shadow-md overflow-hidden`}>
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                    theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  } transition-colors duration-200`}
                >
                  <span className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <i className={`fas ${openFaq === index ? 'fa-minus' : 'fa-plus'} text-blue-600 transition-transform duration-200`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    } leading-relaxed`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } mb-4`}>
              Need more help? Our support team is available 24/7
            </p>
            <Link
              to="/support"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Trade Anywhere Component */}
      <TradeAnywhere />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomeLoggedIn
