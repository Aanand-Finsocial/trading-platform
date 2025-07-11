import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const FAQPage = () => {
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqCategories = [
    { id: 'general', label: 'General', icon: 'fas fa-info-circle' },
    { id: 'trading-bots', label: 'Trading Bots', icon: 'fas fa-robot' },
    { id: 'grid-trading', label: 'Grid Trading', icon: 'fas fa-th' },
    { id: 'dca', label: 'DCA', icon: 'fas fa-chart-area' },
    { id: 'arbitrage', label: 'Arbitrage', icon: 'fas fa-exchange-alt' },
    { id: 'security', label: 'Security', icon: 'fas fa-shield-alt' },
    { id: 'fees', label: 'Fees & Pricing', icon: 'fas fa-dollar-sign' }
  ]

  const faqData = {
    general: [
      {
        question: 'What is automated trading?',
        answer: 'Automated trading uses algorithms and bots to execute trades automatically based on predefined criteria. This allows you to trade 24/7 without constant monitoring and helps remove emotional decision-making from your trading strategy.'
      },
      {
        question: 'Do I need trading experience to use your platform?',
        answer: 'No, our platform is designed for both beginners and experienced traders. We offer preset strategies, educational resources, and intuitive interfaces that make it easy for anyone to start automated trading.'
      },
      {
        question: 'How do I get started?',
        answer: 'Simply sign up for an account, complete the verification process, deposit funds, and choose your first trading strategy. Our step-by-step guides will walk you through the entire process.'
      },
      {
        question: 'Is my money safe on your platform?',
        answer: 'Yes, we implement industry-leading security measures including cold storage for funds, two-factor authentication, and regular security audits. Your funds are protected by multiple layers of security.'
      }
    ],
    'trading-bots': [
      {
        question: 'How do trading bots work?',
        answer: 'Trading bots execute trades automatically based on pre-programmed strategies. They monitor market conditions 24/7 and place buy/sell orders when specific conditions are met, helping you capitalize on market opportunities even when you\'re not actively watching.'
      },
      {
        question: 'Can I customize my trading bot settings?',
        answer: 'Yes, you can customize various parameters including investment amount, price ranges, grid spacing, and risk management settings. You can also choose from preset configurations or create your own custom strategies.'
      },
      {
        question: 'How many bots can I run simultaneously?',
        answer: 'The number of bots you can run depends on your account tier. Basic accounts can run up to 5 bots, while premium accounts have unlimited bot capacity.'
      },
      {
        question: 'Can I stop a bot anytime?',
        answer: 'Yes, you can pause or stop any bot at any time. When you stop a bot, it will close all open positions and return your funds to your account balance.'
      }
    ],
    'grid-trading': [
      {
        question: 'What is grid trading?',
        answer: 'Grid trading is a strategy that places buy and sell orders at regular intervals above and below a set price. This creates a "grid" of orders that profit from market volatility by buying low and selling high repeatedly.'
      },
      {
        question: 'What markets work best for grid trading?',
        answer: 'Grid trading works best in sideways or ranging markets with high volatility. It\'s particularly effective for cryptocurrency pairs that tend to fluctuate within predictable ranges.'
      },
      {
        question: 'How do I set up a grid trading bot?',
        answer: 'Select your trading pair, set your investment amount, define the price range (upper and lower limits), choose the number of grids, and start the bot. Our preset configurations can help beginners get started quickly.'
      },
      {
        question: 'What happens if the price breaks out of my grid range?',
        answer: 'If the price moves outside your grid range, the bot will hold positions until the price returns to the range. You can also set stop-loss orders or manually adjust the grid range if needed.'
      }
    ],
    dca: [
      {
        question: 'What is Dollar Cost Averaging (DCA)?',
        answer: 'DCA is an investment strategy where you invest a fixed amount of money at regular intervals, regardless of the asset\'s price. This helps reduce the impact of volatility and can lower your average purchase price over time.'
      },
      {
        question: 'How often should I make DCA purchases?',
        answer: 'The frequency depends on your investment strategy and market conditions. Common intervals include daily, weekly, or monthly. Our platform allows you to customize the frequency based on your preferences.'
      },
      {
        question: 'Can I adjust my DCA amount after starting?',
        answer: 'Yes, you can modify your DCA parameters including the investment amount, frequency, and target allocation at any time through your bot settings.'
      },
      {
        question: 'Is DCA suitable for all market conditions?',
        answer: 'DCA is particularly effective in volatile markets and for long-term investment strategies. It helps reduce timing risk but may not be optimal in strongly trending markets.'
      }
    ],
    arbitrage: [
      {
        question: 'What is arbitrage trading?',
        answer: 'Arbitrage trading involves buying and selling the same asset on different exchanges or markets to profit from price differences. It\'s considered a low-risk strategy as it exploits market inefficiencies.'
      },
      {
        question: 'How do arbitrage bots find opportunities?',
        answer: 'Our arbitrage bots continuously monitor prices across multiple exchanges and identify price discrepancies. When profitable opportunities are detected, the bot executes trades automatically to capture the price difference.'
      },
      {
        question: 'What are the risks of arbitrage trading?',
        answer: 'While arbitrage is generally low-risk, potential risks include execution delays, exchange connectivity issues, and withdrawal restrictions. Our bots are designed to minimize these risks through advanced monitoring and risk management.'
      },
      {
        question: 'How much profit can I expect from arbitrage?',
        answer: 'Arbitrage profits are typically smaller but more consistent than other strategies. Returns vary based on market conditions, but our bots aim to capture profitable opportunities while minimizing risk.'
      }
    ],
    security: [
      {
        question: 'How do you protect user funds?',
        answer: 'We use multiple security layers including cold storage for the majority of funds, multi-signature wallets, regular security audits, and advanced encryption. Your funds are protected by institutional-grade security measures.'
      },
      {
        question: 'Do you offer two-factor authentication?',
        answer: 'Yes, we strongly recommend enabling 2FA for your account. We support various 2FA methods including SMS, email, and authenticator apps like Google Authenticator.'
      },
      {
        question: 'What happens if I lose access to my account?',
        answer: 'We have a comprehensive account recovery process that includes identity verification and security checks. Contact our support team with your account details, and they will guide you through the recovery process.'
      },
      {
        question: 'Are my trading strategies visible to others?',
        answer: 'No, your trading strategies and positions are private and encrypted. Only you have access to your trading data and bot configurations.'
      }
    ],
    fees: [
      {
        question: 'What fees do you charge?',
        answer: 'We charge a small performance fee only when your bots make a profit. There are no monthly subscription fees or setup costs. Our transparent fee structure ensures you only pay when you earn.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, we believe in transparent pricing. All fees are clearly displayed before you start trading. The only costs are performance fees and standard exchange trading fees.'
      },
      {
        question: 'How are performance fees calculated?',
        answer: 'Performance fees are calculated as a percentage of your realized profits. The exact percentage depends on your account tier and the specific trading strategy used.'
      },
      {
        question: 'Can I see a breakdown of all fees?',
        answer: 'Yes, you can view a detailed breakdown of all fees in your account dashboard. We provide transparent reporting of all charges and performance fees.'
      }
    ]
  }

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked Questions
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Find answers to common questions about our trading platform and automated strategies
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-black transform scale-105'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData[activeCategory]?.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-hidden`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between hover:bg-opacity-50 transition-colors ${
                    theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <i className={`fas ${openFAQ === index ? 'fa-chevron-up' : 'fa-chevron-down'} ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } transition-transform`}></i>
                </button>
                {openFAQ === index && (
                  <div className={`px-6 pb-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed pt-4`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className={`mt-16 text-center p-12 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className={`w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-lg flex items-center justify-center`}>
            <i className="fas fa-headset text-black text-2xl"></i>
          </div>
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Still Need Help?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Can't find the answer you're looking for? Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg transition-colors">
              Contact Support
            </button>
            <button className={`px-8 py-3 border rounded-lg font-semibold transition-colors ${
              theme === 'dark' 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }`}>
              Live Chat
            </button>
          </div>
        </div>

        {/* Popular Articles */}
       
      </div>
    </div>
  )
}

export default FAQPage
