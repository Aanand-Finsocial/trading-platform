import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const SimpleEarn = () => {
  const { theme } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const [durationFilter, setDurationFilter] = useState('All Durations')
  const [matchMyAssets, setMatchMyAssets] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [showAllFaqs, setShowAllFaqs] = useState(false)

  const principalProtectedProducts = [
    {
      coin: 'SPK',
      icon: '🔴',
      apr: '41.25%',
      duration: 'Flexible',
      minAmount: '0.01',
      maxAmount: '∞',
      isPromoted: true
    },
    {
      coin: 'USDC',
      icon: '🔵',
      apr: '4.98% ~ 10.89%',
      duration: 'Flexible/Locked',
      minAmount: '1',
      maxAmount: '50,000',
      isPromoted: false
    },
    {
      coin: 'FDUSD',
      icon: '⚫',
      apr: '10.82% ~ 16.41%',
      duration: 'Flexible/Locked',
      minAmount: '1',
      maxAmount: '100,000',
      isPromoted: false
    },
    {
      coin: 'AVA',
      icon: '⚪',
      apr: '6.14%',
      duration: 'Flexible',
      minAmount: '0.1',
      maxAmount: '10,000',
      isPromoted: true,
      maxLabel: 'Max'
    },
    {
      coin: 'BTC',
      icon: '🟠',
      apr: '2.5% ~ 5.2%',
      duration: 'Flexible/Locked',
      minAmount: '0.001',
      maxAmount: '10',
      isPromoted: false
    },
    {
      coin: 'ETH',
      icon: '🔵',
      apr: '3.8% ~ 7.1%',
      duration: 'Flexible/Locked',
      minAmount: '0.01',
      maxAmount: '100',
      isPromoted: false
    }
  ]

  const learnMoreSections = [
    {
      icon: '💰',
      title: 'Flexible Products',
      description: 'Subscribe at any time and start earning rewards.',
      links: [
        'Redemption Policy',
        'Flexible Loans',
        'Real-Time APR',
        'Bonus Tiered APR'
      ]
    },
    {
      icon: '🔒',
      title: 'Locked Products',
      description: 'Lock assets for a fixed term and earn higher rewards',
      links: [
        'Rewards Distribution Timeline',
        'Daily Maintenance Schedule',
        'Redemption Policy'
      ]
    },
    {
      icon: '🚀',
      title: 'Launchpool & Megadrop Rewards',
      description: 'Eligible Simple Earn users will automatically participate in Launchpool (applies to both Flexible and Locked BNB) and Megadrop (only applicable to Locked BNB) for rewards.',
      links: [
        'Historical Rewards',
        'Megadrop FAQ',
        'Launchpool FAQ'
      ]
    },
    {
      icon: '🔄',
      title: 'Auto-Subscribe',
      description: 'Hassle-free automatic subscription for Flexible or Locked.',
      links: [
        'Flexible Products',
        'Locked Products'
      ]
    }
  ]

  const faqData = [
    {
      id: 1,
      question: "What is Simple Earn and how does it work?",
      answer: "Simple Earn is a user-friendly platform that allows you to deposit your cryptocurrencies and earn rewards without complex trading. Simply deposit your assets, choose between Flexible (withdraw anytime) or Locked (fixed term) products, and start earning passive income through various DeFi protocols and lending mechanisms."
    },
    {
      id: 2,
      question: "What's the difference between Flexible and Locked products?",
      answer: "Flexible products allow you to deposit and withdraw your assets at any time with no lock-up period, but typically offer lower APR. Locked products require you to commit your assets for a specific period (7-365 days) but offer higher returns. Locked products cannot be withdrawn before maturity."
    },
    {
      id: 3,
      question: "How are the APR rates calculated and when do they change?",
      answer: "APR rates are calculated based on market demand, underlying DeFi protocol returns, and platform utilization. Flexible product rates update in real-time based on market conditions, while Locked product rates are fixed at the time of subscription for the entire lock period."
    },
    {
      id: 4,
      question: "What is Auto-Subscribe and how does it work?",
      answer: "Auto-Subscribe automatically reinvests your assets when they mature or when you receive rewards. For Flexible products, it continuously compounds your earnings. For Locked products, it automatically subscribes to new terms when your current term expires, maximizing your earning potential without manual intervention."
    },
    {
      id: 5,
      question: "Are there any fees for using Simple Earn?",
      answer: "Simple Earn has no subscription or redemption fees. However, standard network fees may apply when depositing or withdrawing cryptocurrencies. Some products may have performance fees that are automatically deducted from your earnings and clearly disclosed upfront."
    },
    {
      id: 6,
      question: "What are the minimum and maximum deposit amounts?",
      answer: "Minimum deposit amounts vary by cryptocurrency, typically starting from 0.001 for Bitcoin, 0.01 for Ethereum, and 1 for stablecoins. Maximum amounts depend on product availability and may have daily or total caps. Check individual product pages for specific limits."
    },
    {
      id: 7,
      question: "How safe are my funds in Simple Earn?",
      answer: "Your funds are protected through multiple security layers including cold storage, insurance coverage, and audited smart contracts. We partner with reputable DeFi protocols and maintain strict risk management practices. However, as with all investments, there are inherent risks you should understand."
    },
    {
      id: 8,
      question: "Can I withdraw my Flexible products anytime?",
      answer: "Yes, Flexible products can be redeemed 24/7 with no penalties. Redemption requests are typically processed within minutes to a few hours depending on network conditions. Your earned rewards are calculated up to the moment of redemption."
    },
    {
      id: 9,
      question: "What happens if I need my funds before a Locked product matures?",
      answer: "Locked products cannot be withdrawn before maturity. In emergency situations, some products may offer early redemption with significant penalties (loss of all earned interest). We recommend only locking funds you won't need during the lock period."
    },
    {
      id: 10,
      question: "How often are rewards distributed?",
      answer: "Flexible product rewards are calculated and added to your account daily. Locked product rewards are typically distributed daily during the lock period, with the principal and final rewards released at maturity. Specific distribution schedules vary by product."
    },
    {
      id: 11,
      question: "What cryptocurrencies are supported in Simple Earn?",
      answer: "We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Finsocial Coin (BNB), and popular stablecoins like USDT, USDC, and BUSD. The available assets may vary by product type and market conditions. New assets are regularly added based on demand and security assessments."
    },
    {
      id: 12,
      question: "Can I use Simple Earn if I'm a beginner?",
      answer: "Absolutely! Simple Earn is designed for users of all experience levels. The interface is intuitive, and you can start with small amounts to learn. We provide educational resources, clear explanations of risks and returns, and customer support to help you get started safely."
    }
  ]

  const filteredProducts = principalProtectedProducts.filter(product =>
    product.coin.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Show only first 3 products initially, all when expanded
  const displayedProducts = showAllProducts 
    ? filteredProducts 
    : filteredProducts.slice(0, 3)

  // Show only first 6 FAQs initially, all when expanded
  const displayedFaqs = showAllFaqs 
    ? faqData 
    : faqData.slice(0, 6)

  const modalContent = {
    title: "What is Simple Earn?",
    content: [
      {
        subtitle: "Overview",
        text: "Simple Earn is a hassle-free way to grow your cryptocurrency holdings through passive income generation. Instead of letting your crypto sit idle, you can deposit it into various earning products and watch it grow over time."
      },
      {
        subtitle: "How It Works",
        text: "When you deposit cryptocurrency into Simple Earn, your funds are deployed into carefully selected DeFi protocols, lending pools, and yield farming strategies. The platform handles all the complex operations while you earn rewards."
      },
      {
        subtitle: "Product Types",
        text: "• Flexible Products: Deposit and withdraw anytime with daily rewards\n• Locked Products: Higher returns for committing funds for a fixed period\n• Auto-Subscribe: Automatically reinvest to maximize compound growth"
      },
      {
        subtitle: "Benefits",
        text: "• No trading experience required\n• Competitive APR rates\n• Multiple cryptocurrency options\n• Secure and regulated platform\n• 24/7 customer support"
      },
      {
        subtitle: "Getting Started",
        text: "1. Choose your cryptocurrency and product type\n2. Deposit your assets\n3. Start earning rewards immediately\n4. Monitor your earnings through the dashboard\n5. Withdraw anytime (Flexible) or at maturity (Locked)"
      }
    ]
  }

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 relative`}>
            <button
              onClick={() => setShowModal(false)}
              className={`absolute top-4 right-4 text-2xl ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ×
            </button>
            
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {modalContent.title}
            </h2>
            
            <div className="space-y-6">
              {modalContent.content.map((section, index) => (
                <div key={index}>
                  <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-yellow-500' : 'text-yellow-600'}`}>
                    {section.subtitle}
                  </h3>
                  <p className={`text-sm leading-relaxed whitespace-pre-line ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            {/* Left Side - Content */}
            <div className="lg:col-span-2">
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Simple Earn
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Simple way to deposit & Earn.
              </p>
              
              <div className="mb-6 sm:mb-8">
                <button 
                  onClick={() => setShowModal(true)}
                  className={`text-yellow-500 hover:text-yellow-600 font-medium transition-colors ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} px-3 py-2 rounded-lg text-sm sm:text-base`}
                >
                  What is Simple Earn? ❓
                </button>
              </div>

              {/* Portfolio Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    My Holdings 👁️ 📊
                  </p>
                  <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    ≈ €0.00
                  </p>
                </div>
                <div>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Total Profit 📈
                  </p>
                  <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    ≈ €0.00
                  </p>
                </div>
                <div>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Last Day Profit
                  </p>
                  <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    ≈ €0.00
                  </p>
                </div>
              </div>

              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors text-sm sm:text-base">
                Auto-Subscribe
              </button>
            </div>

            {/* Right Side - Promotional Banner */}
            <div className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-yellow-900 to-yellow-800' : 'bg-gradient-to-br from-yellow-400 to-yellow-600'} text-black relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold bg-black text-yellow-500 px-2 py-1 rounded">
                    🪙 Finsocial EARN
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">BNSOL SUPER STAKE</h3>
                <div className="flex items-center mb-3">
                  <span className="text-xl sm:text-2xl font-bold mr-2">LAYER</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">E</span>
                </div>
                <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                  STAKE SOL
                </button>
                <p className="text-xs mt-2">
                  *BNSOL users to receive APR Boost Airdrop Rewards. T&Cs apply.
                </p>
              </div>
              <div className="absolute top-0 right-0 text-4xl sm:text-6xl opacity-20">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="w-full lg:flex-1 relative">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search coins"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto">
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option>All Durations</option>
                <option>Flexible</option>
                <option>7 Days</option>
                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
              </select>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={matchMyAssets}
                  onChange={(e) => setMatchMyAssets(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Match My Assets
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Principal-protected Products */}
        <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} mb-8`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Principal-protected Products
                </h2>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} flex items-center mt-1`}>
                  Earn rewards on principal-protected products. ℹ️
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`text-left py-3 px-4 font-medium text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Coin
                    </th>
                    <th className={`text-left py-3 px-4 font-medium text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      APR ⬇️
                    </th>
                    <th className={`text-left py-3 px-4 font-medium text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Duration(Days)
                    </th>
                    <th className={`text-right py-3 px-4 font-medium text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedProducts.map((product, index) => (
                    <tr key={index} className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{product.icon}</span>
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {product.coin}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <span className={`font-bold text-green-500`}>
                            {product.apr}
                          </span>
                          {product.isPromoted && (
                            <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                              📊
                            </span>
                          )}
                          {product.maxLabel && (
                            <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                              {product.maxLabel}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {product.duration}
                          </span>
                          {product.duration.includes('Flexible/Locked') && (
                            <i className="fas fa-chevron-down ml-2 text-gray-400"></i>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button className="text-yellow-500 hover:text-yellow-600 font-medium">
                          ▶️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* View More/Less Button for Products */}
            {filteredProducts.length > 3 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {showAllProducts ? (
                    <>
                      <i className="fas fa-chevron-up mr-2"></i>
                      View Less
                    </>
                  ) : (
                    <>
                      <i className="fas fa-chevron-down mr-2"></i>
                      View More ({filteredProducts.length - 3} more products)
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} mb-8`}>
          <div className="p-4 sm:p-6">
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-sm sm:text-base mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Get answers to common questions about Simple Earn and cryptocurrency investing.
            </p>
            
            <div className="space-y-4">
              {displayedFaqs.map((faq) => (
                <div key={faq.id} className={`border rounded-lg ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className={`w-full text-left p-4 flex items-center justify-between hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} transition-colors rounded-lg`}
                  >
                    <span className={`font-medium text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <i className={`fas fa-chevron-${expandedFaq === faq.id ? 'up' : 'down'} text-gray-400 ml-2 flex-shrink-0`}></i>
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-4 pb-4">
                      <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* View More/Less Button for FAQs */}
            {faqData.length > 6 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {showAllFaqs ? (
                    <>
                      <i className="fas fa-chevron-up mr-2"></i>
                      View Less
                    </>
                  ) : (
                    <>
                      <i className="fas fa-chevron-down mr-2"></i>
                      View More FAQs ({faqData.length - 6} more questions)
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Learn More Section */}
        <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="p-6">
            <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Learn More
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learnMoreSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {section.title}
                    </h3>
                  </div>
                  
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {section.description}
                  </p>
                  
                  <div className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <button
                        key={linkIndex}
                        className={`block text-sm text-left ${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SimpleEarn