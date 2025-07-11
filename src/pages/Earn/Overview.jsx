import React, { useState } from 'react'
import { useTheme, themeColors } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Overview = () => {
  const { theme, toggleTheme } = useTheme()
  const colors = themeColors(theme)
  const [investmentAmount, setInvestmentAmount] = useState(1000)
  const [selectedCrypto, setSelectedCrypto] = useState('USDT')
  const [investmentType, setInvestmentType] = useState('Flexible')
  const [selectedTimeframe, setSelectedTimeframe] = useState('1 year')
  const [isEarnModalOpen, setIsEarnModalOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  const cryptoOptions = [
    { symbol: 'USDT', name: 'Tether' },
    { symbol: 'BTC', name: 'Bitcoin' },
    { symbol: 'ETH', name: 'Ethereum' },
    
  ]

  const popularProducts = [
    { coin: 'USDC', apr: '10.87%', duration: 'Flexible/Locked', icon: '💰' },
    { coin: 'USDT', apr: '17.25%', duration: 'Flexible/Locked', icon: '💎' },
    { coin: 'ETH', apr: '1.27%~281.53%', duration: 'Flexible/Locked', icon: '⚡' },
    { coin: 'SOL', apr: '1.8%~165.78%', duration: 'Flexible/Locked', icon: '🌟' },
    { coin: 'BNB', apr: '0.16%~46.29%', duration: 'Flexible/Locked', icon: '🔥' },
    { coin: 'XUSD', apr: '0.05%', duration: 'Flexible', icon: '💫' },
    { coin: 'FDUSD', apr: '10.82%', duration: 'Flexible/Locked', icon: '💯' },
  ]

  const featuredProducts = [
    { coin: 'USDT', type: 'Special Offer', duration: 'Flexible', apr: '17.25%', ends: '11 days', color: 'blue' },
    { coin: 'ETH', type: 'Simple Earn', duration: 'Flexible', apr: '1.27%', color: 'purple' },
    { coin: 'SOL', type: 'Simple Earn', duration: 'Flexible/Locked', apr: '1.8%~5.1%', color: 'green' },
    { coin: 'RVN', type: 'Simple Earn', duration: 'Flexible', apr: '16.32%', color: 'orange' },
  ]

  const calculateEarnings = () => {
    const baseAPR = selectedCrypto === 'USDT' ? 17.25 : selectedCrypto === 'ETH' ? 5.5 : selectedCrypto === 'BTC' ? 3.2 : 12.8
    const multiplier = selectedTimeframe === '1 year' ? 1 : selectedTimeframe === '2 years' ? 2 : selectedTimeframe === '3 years' ? 3 : 5
    return (investmentAmount * (baseAPR / 100) * multiplier).toFixed(8)
  }

  const faqData = [
    {
      question: "What is the difference between Flexible and Locked products?",
      answer: "Flexible products allow you to redeem your assets anytime without penalties, but typically offer lower APR. Locked products require you to commit your assets for a specific period (7 days to 365 days) but offer higher APR rates. You cannot redeem locked products before the term ends."
    },
    {
      question: "How are rewards distributed?",
      answer: "Rewards are distributed daily to your Spot Wallet. The exact distribution time may vary by product. For Flexible products, you start earning rewards from the day after subscription. For Locked products, rewards are calculated from the subscription date and distributed according to the product terms."
    },
    {
      question: "Is there a minimum amount required to participate?",
      answer: "Yes, each product has a minimum subscription amount. This varies by cryptocurrency and product type. You can find the minimum amount on each product's detail page. Popular products like USDT Flexible Savings typically start from as low as 1 USDT."
    },
    {
      question: "Are there any fees involved?",
      answer: "Finsocial Earn products typically have no subscription or redemption fees. However, network fees may apply when transferring assets to external wallets. The APR displayed is the net rate you'll receive after any applicable fees."
    },
    {
      question: "Can I redeem my assets early from Locked products?",
      answer: "No, Locked products cannot be redeemed before the maturity date. If you need flexibility, consider Flexible Savings products instead. Make sure you won't need the funds during the lock period before subscribing to Locked products."
    },
    {
      question: "How is the APR calculated?",
      answer: "APR (Annual Percentage Rate) represents the annualized rate of return. It's calculated based on the daily interest rate multiplied by 365 days. Actual returns may vary due to market conditions, and rates are subject to change based on market demand and supply."
    },
    {
      question: "What happens if I want to stake more of the same asset?",
      answer: "You can subscribe to multiple products or the same product multiple times, subject to availability and maximum limits. Each subscription is treated separately with its own terms and maturity dates."
    },
    {
      question: "Is my investment protected?",
      answer: "While Finsocial implements security measures and maintains insurance funds, cryptocurrency investments carry inherent risks. Simple Earn products are generally lower risk compared to DeFi staking, but no investment is risk-free. Please invest responsibly and only what you can afford to lose."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header Section */}
      <div className="p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div>
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${colors.textColor}`}>Finsocial Earn</h1>
            <p className={`text-base sm:text-lg ${colors.smTextColor}`}>Smart Earning Starts Here — 300+ Crypto Assets Supported</p>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-lg transition-colors shadow-md ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
          </button>
        </div>
        
        {/* What is Earn Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => setIsEarnModalOpen(true)}
            className="text-yellow-500 hover:text-yellow-600 underline flex items-center gap-2 text-base sm:text-lg"
          >
            What is Earn? 💡
          </button>
        </div>
      </div>

      {/* Crypto Earnings Calculator */}
      <div className="px-4 sm:px-6 mb-6 sm:mb-8">
        <div className={`${colors.bgColor} rounded-xl shadow-lg p-4 sm:p-6 lg:p-8`}>
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${colors.textColor}`}>Calculate your crypto earnings</h2>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {/* Calculator Inputs */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 text-base sm:text-lg">
                <span className={colors.textColor}>I have</span>
                <div className="flex items-center w-full sm:w-auto">
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className={`px-3 sm:px-4 py-2 border rounded-lg w-24 sm:w-32 ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  />
                  <select
                    value={selectedCrypto}
                    onChange={(e) => setSelectedCrypto(e.target.value)}
                    className={`ml-2 px-3 sm:px-4 py-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  >
                    {cryptoOptions.map(crypto => (
                      <option key={crypto.symbol} value={crypto.symbol}>{crypto.symbol}</option>
                    ))}
                  </select>
                </div>
                <span className={colors.textColor}>and I am interested in</span>
                <div className="flex gap-2 w-full sm:w-auto">
                  {['Flexible', 'Locked'].map(type => (
                    <button
                      key={type}
                      onClick={() => setInvestmentType(type)}
                      className={`px-3 sm:px-4 py-2 rounded-lg transition-colors flex-1 sm:flex-none ${
                        investmentType === type 
                          ? 'bg-yellow-500 text-black' 
                          : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <span className={colors.textColor}>investment.</span>
              </div>

              {/* Product Recommendation */}
              <div className={`p-4 sm:p-6 rounded-xl border-2 border-dashed ${theme === 'dark' ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className={`font-semibold ${colors.textColor}`}>Simple Earn</h3>
                    <p className="text-sm text-yellow-600">Low Risk</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-500 mt-2">2.25% + 5%</p>
                    <p className={`text-sm ${colors.smTextColor}`}>APR Breakdown</p>
                  </div>
                </div>
                <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Earnings Display */}
            <div className="space-y-6">
              <div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${colors.textColor}`}>Estimated Earnings</h3>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-2">
                  + {calculateEarnings()} {selectedCrypto}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm">
                  <span className={`flex items-center gap-2 ${colors.smTextColor}`}>
                    ✓ Auto-Compounding
                  </span>
                  <span className={`flex items-center gap-2 ${colors.smTextColor}`}>
                    ✓ Auto-Subscribe
                  </span>
                </div>
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-2 sm:flex gap-2">
                {['1 year', '2 years', '3 years', '5 years'].map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTimeframe(time)}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      selectedTimeframe === time 
                        ? theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                        : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className={`h-32 sm:h-48 rounded-lg flex items-end justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="w-full h-full bg-gradient-to-t from-yellow-500/20 to-transparent rounded-lg flex items-end justify-center">
                  <div className={`text-sm ${colors.smTextColor} mb-4`}>📈 Earnings Growth Chart</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-6 p-3 sm:p-4 rounded-lg text-xs sm:text-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} ${colors.smTextColor}`}>
            This calculation is an estimate of rewards you will earn in cryptocurrency over the selected timeframe. It does not display the actual or predicted APR in any fiat currency. APR is subject to change at any time and the estimated earnings may be different from the actual earnings generated.
          </div>
        </div>
      </div>

      {/* Popular Products Table */}
      <div className="px-4 sm:px-6 mb-6 sm:mb-8">
        <div className={`${colors.bgColor} rounded-xl shadow-lg p-4 sm:p-6`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className={`text-xl sm:text-2xl font-bold ${colors.textColor}`}>Popular Products</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search coins"
                className={`px-3 sm:px-4 py-2 border rounded-lg w-full sm:w-auto ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}
              />
              <div className="flex gap-3 sm:gap-4">
                <select className={`px-3 sm:px-4 py-2 border rounded-lg flex-1 sm:flex-none ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                  <option>All Durations</option>
                  <option>Flexible</option>
                  <option>Locked</option>
                </select>
                <select className={`px-3 sm:px-4 py-2 border rounded-lg flex-1 sm:flex-none ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                  <option>All Products</option>
                  <option>Simple Earn</option>
                  <option>Staking</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <th className={`text-left py-3 sm:py-4 px-2 font-semibold ${colors.textColor} text-sm sm:text-base`}>Coins</th>
                  <th className={`text-left py-3 sm:py-4 px-2 font-semibold ${colors.textColor} text-sm sm:text-base`}>Est. APR</th>
                  <th className={`text-left py-3 sm:py-4 px-2 font-semibold ${colors.textColor} text-sm sm:text-base`}>Duration</th>
                  <th className={`text-left py-3 sm:py-4 px-2 font-semibold ${colors.textColor} text-sm sm:text-base`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {popularProducts.map((product, index) => (
                  <tr key={index} className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <td className="py-3 sm:py-4 px-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-2xl">{product.icon}</span>
                        <span className={`font-semibold text-sm sm:text-base ${colors.textColor}`}>{product.coin}</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-2 text-green-500 font-semibold text-sm sm:text-base">{product.apr}</td>
                    <td className={`py-3 sm:py-4 px-2 text-sm sm:text-base ${colors.smTextColor}`}>{product.duration}</td>
                    <td className="py-3 sm:py-4 px-2">
                      <select className={`px-2 sm:px-3 py-1 border rounded-lg text-xs sm:text-sm ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                        <option>Flexible/Locked</option>
                        <option>Flexible</option>
                        <option>Locked</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 sm:px-6 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className={`text-xl sm:text-2xl font-bold ${colors.textColor}`}>Featured Products</h2>
          <button className="flex items-center gap-2 text-yellow-500 hover:text-yellow-600 text-sm sm:text-base">
            <span>🏆 Yield Arena</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className={`${colors.bgColor} rounded-xl shadow-lg p-4 sm:p-6 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              {product.ends && (
                <div className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full mb-3 sm:mb-4 inline-block">
                  Ends in {product.ends}
                </div>
              )}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                  product.color === 'blue' ? 'bg-blue-100' :
                  product.color === 'purple' ? 'bg-purple-100' :
                  product.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  <span className="font-bold">{product.coin}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-sm sm:text-base ${colors.textColor} truncate`}>{product.coin}</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${product.type === 'Special Offer' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                      {product.type}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
                      {product.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm text-gray-500 mb-1">APR</div>
                <div className="text-lg sm:text-2xl font-bold text-green-500">{product.apr}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 mb-6 sm:mb-8">
        <div className={`${colors.bgColor} rounded-xl shadow-lg p-4 sm:p-6`}>
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${colors.textColor}`}>Frequently Asked Questions</h2>
          
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-lg transition-all duration-200 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} transition-colors rounded-lg`}
                >
                  <span className={`font-medium text-sm sm:text-base ${colors.textColor} pr-4`}>{faq.question}</span>
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''} ${colors.textColor}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openFAQ === index && (
                  <div className={`px-4 sm:px-6 pb-3 sm:pb-4 ${colors.smTextColor}`}>
                    <div className={`pt-2 border-t text-sm sm:text-base ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`mt-6 p-3 sm:p-4 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <p className={`${colors.smTextColor} mb-3 text-sm sm:text-base`}>Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="/support" 
                className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors text-sm sm:text-base"
              >
                Contact Support
              </a>
              <a 
                href="/help" 
                className={`px-4 py-2 border rounded-lg transition-colors text-sm sm:text-base ${theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-200'}`}
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What is Earn Modal */}
      {isEarnModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${colors.bgColor} rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto`}>
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className={`text-xl sm:text-2xl font-bold ${colors.textColor}`}>What is Finsocial Earn? 💡</h2>
                <button
                  onClick={() => setIsEarnModalOpen(false)}
                  className={`p-2 rounded-lg hover:bg-gray-100 ${theme === 'dark' ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${colors.textColor}`}>Overview</h3>
                  <p className={`${colors.smTextColor} leading-relaxed text-sm sm:text-base`}>
                    Finsocial Earn is a one-stop solution for earning rewards on your crypto holdings. Whether you're looking for flexible savings or structured products with higher yields, we offer 300+ crypto assets to help you grow your portfolio passively.
                  </p>
                </div>

                <div>
                  <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${colors.textColor}`}>Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-500">💰</span>
                        <h4 className={`font-medium text-sm sm:text-base ${colors.textColor}`}>Simple Earn</h4>
                      </div>
                      <p className={`text-xs sm:text-sm ${colors.smTextColor}`}>Flexible and Locked products with competitive APRs</p>
                    </div>
                    
                    <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-500">🔒</span>
                        <h4 className={`font-medium text-sm sm:text-base ${colors.textColor}`}>Staking</h4>
                      </div>
                      <p className={`text-xs sm:text-sm ${colors.smTextColor}`}>Participate in blockchain consensus and earn rewards</p>
                    </div>
                    
                    <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-purple-500">🎯</span>
                        <h4 className={`font-medium text-sm sm:text-base ${colors.textColor}`}>DeFi Staking</h4>
                      </div>
                      <p className={`text-xs sm:text-sm ${colors.smTextColor}`}>Access decentralized finance opportunities</p>
                    </div>
                    
                    <div className={`p-3 sm:p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-500">🏆</span>
                        <h4 className={`font-medium text-sm sm:text-base ${colors.textColor}`}>Auto-Invest</h4>
                      </div>
                      <p className={`text-xs sm:text-sm ${colors.smTextColor}`}>Dollar-cost average with automated investing</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${colors.textColor}`}>How It Works</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className={`font-medium ${colors.textColor}`}>Choose Your Product</h4>
                        <p className={`text-sm ${colors.smTextColor}`}>Select from Flexible Savings, Locked Staking, or DeFi products</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className={`font-medium ${colors.textColor}`}>Subscribe & Earn</h4>
                        <p className={`text-sm ${colors.smTextColor}`}>Start earning rewards immediately after subscription</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className={`font-medium ${colors.textColor}`}>Track & Redeem</h4>
                        <p className={`text-sm ${colors.smTextColor}`}>Monitor your earnings and redeem when ready</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/20 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${colors.textColor}`}>💡 Pro Tip</h3>
                  <p className={`text-sm ${colors.smTextColor}`}>
                    Start with Flexible Savings if you're new to earning. You can withdraw anytime and explore other products as you become more comfortable.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button 
                    onClick={() => setIsEarnModalOpen(false)}
                    className="flex-1 bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors text-sm sm:text-base"
                  >
                    Start Earning Now
                  </button>
                  <button 
                    onClick={() => setIsEarnModalOpen(false)}
                    className={`px-6 py-3 rounded-lg border transition-colors text-sm sm:text-base ${theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Overview
