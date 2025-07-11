import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const AdvancedEarns = () => {
  const { theme } = useTheme()
  const [showAdvancedEarnModal, setShowAdvancedEarnModal] = useState(false)
  const [activeTab, setActiveTab] = useState('on-chain-yields')
  const [openFAQ, setOpenFAQ] = useState(null)

  // Data for different tabs
  const onChainYieldsData = [
    {
      coin: 'BTC',
      icon: 'fab fa-bitcoin',
      color: 'text-orange-500',
      protocols: 'Solv',
      protocolIcon: 'fas fa-circle',
      protocolColor: 'text-purple-500',
      apr: '1.5%'
    },
    {
      coin: 'BNB',
      icon: 'fas fa-coins',
      color: 'text-yellow-500',
      protocols: 'Lista',
      protocolIcon: 'fas fa-circle',
      protocolColor: 'text-blue-500',
      apr: '0.2%~0.56%'
    },
    {
      coin: 'WBETH',
      icon: 'fab fa-ethereum',
      color: 'text-blue-500',
      protocols: 'EigenLayer',
      protocolIcon: 'fas fa-layer-group',
      protocolColor: 'text-gray-500',
      apr: '0.2%~0.4%'
    }
  ]

  const smartArbitrageData = [
    {
      portfolio: 'ETH/USDT',
      icons: ['fab fa-ethereum', 'fas fa-dollar-sign'],
      colors: ['text-blue-500', 'text-green-500'],
      nextApr: '1.93%',
      thirtyDayApr: '6.73%'
    },
    {
      portfolio: 'SOL/USDT',
      icons: ['fas fa-sun', 'fas fa-dollar-sign'],
      colors: ['text-purple-500', 'text-green-500'],
      nextApr: '5.35%',
      thirtyDayApr: '2.55%'
    },
    {
      portfolio: 'XRP/USDT',
      icons: ['fas fa-times', 'fas fa-dollar-sign'],
      colors: ['text-gray-500', 'text-green-500'],
      nextApr: '10.95%',
      thirtyDayApr: '5.91%'
    }
  ]

  const dualInvestmentData = [
    {
      coin: 'BTC',
      icon: 'fab fa-bitcoin',
      color: 'text-orange-500',
      apr: 'Up to 157.05%',
      settlementDate: '1-144 days'
    },
    {
      coin: 'ETH',
      icon: 'fab fa-ethereum',
      color: 'text-blue-500',
      apr: 'Up to 281.43%',
      settlementDate: '1-172 days'
    },
    {
      coin: 'BNB',
      icon: 'fas fa-coins',
      color: 'text-yellow-500',
      apr: 'Up to 91.31%',
      settlementDate: '1-172 days'
    }
  ]

  const tabs = [
    {
      id: 'dual-investment',
      label: 'Dual Investment',
      icon: 'fas fa-coins',
      description: 'Enjoy high rewards - Buy Low, Sell High'
    },
    {
      id: 'smart-arbitrage',
      label: 'Smart Arbitrage',
      icon: 'fas fa-robot',
      description: 'Arbitrage Steadily and Increase Your Profits Easily'
    },
    {
      id: 'on-chain-yields',
      label: 'On-chain Yields',
      icon: 'fas fa-link',
      description: 'Unlock the potential of on-chain rewards and stay ahead with earning opportunities.'
    }
  ]

  const faqData = [
    {
      id: 1,
      question: "What is Advanced Earn and how does it work?",
      answer: "Advanced Earn is a sophisticated DeFi investment platform that offers high-yield products through automated strategies. It works by deploying your funds across various DeFi protocols, liquidity pools, and yield farming opportunities to maximize returns while managing risks through smart contracts and algorithmic trading."
    },
    {
      id: 2,
      question: "What are the risks involved in Advanced Earn products?",
      answer: "Advanced Earn products involve several risks including: smart contract vulnerabilities, impermanent loss in liquidity pools, market volatility affecting yields, counterparty risks, and potential total loss of funds. These products are designed for experienced investors who understand DeFi risks."
    },
    {
      id: 3,
      question: "What is the minimum investment amount?",
      answer: "Minimum investment amounts vary by product: On-chain Yields typically start from $50, Smart Arbitrage from $100, and Dual Investment from $500. Some premium strategies may require higher minimums ranging from $1,000 to $10,000."
    },
    {
      id: 4,
      question: "How are the APY rates calculated and guaranteed?",
      answer: "APY rates are estimated based on historical performance and current market conditions. They are NOT guaranteed and can fluctuate significantly. Actual returns may be higher or lower than displayed rates. Past performance does not guarantee future results."
    },
    {
      id: 5,
      question: "Can I withdraw my funds anytime?",
      answer: "Withdrawal terms depend on the specific product: Flexible products allow instant withdrawal, while others may have lock-up periods ranging from 7 days to 6 months. Some products may charge early withdrawal fees. Check individual product terms before investing."
    },
    {
      id: 6,
      question: "What is Dual Investment and how does it work?",
      answer: "Dual Investment is a structured product that allows you to earn high yields while potentially buying crypto at a lower price or selling at a higher price. Your principal is protected, but you may receive settlement in either the base or quote currency depending on market performance."
    },
    {
      id: 7,
      question: "How does Smart Arbitrage generate returns?",
      answer: "Smart Arbitrage exploits price differences across multiple exchanges and trading pairs. Our algorithms automatically execute trades to capture these price discrepancies, generating profits from market inefficiencies while maintaining a market-neutral position."
    },
    {
      id: 8,
      question: "What are On-chain Yields and which protocols are supported?",
      answer: "On-chain Yields involve staking and liquidity provision directly on blockchain protocols. We support major protocols including Ethereum 2.0, Solana, Polygon, Avalanche, and various DeFi platforms like Compound, Aave, Uniswap, and PancakeSwap."
    },
    {
      id: 9,
      question: "Are my funds insured or protected?",
      answer: "While we implement multiple security measures including smart contract audits and insurance coverage for some products, DeFi investments are inherently risky. We recommend only investing funds you can afford to lose and diversifying across multiple strategies."
    },
    {
      id: 10,
      question: "How do I track my investment performance?",
      answer: "You can monitor your investments through our dashboard which provides real-time updates on: current value, profit/loss, APY performance, transaction history, and detailed analytics. Push notifications and email alerts keep you informed of important changes."
    },
    {
      id: 11,
      question: "What fees are involved in Advanced Earn products?",
      answer: "Fees vary by product but typically include: management fees (0.5-2% annually), performance fees (10-20% of profits), and network gas fees for blockchain transactions. All fees are clearly disclosed before investment."
    },
    {
      id: 12,
      question: "Who should invest in Advanced Earn products?",
      answer: "Advanced Earn is suitable for experienced crypto investors who: understand DeFi risks, have experience with volatile investments, can afford potential losses, and seek higher yields than traditional savings products. Beginners should start with our Simple Earn products."
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'on-chain-yields':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="mb-6 sm:mb-8">
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Unlock the potential of on-chain rewards and stay ahead with earning opportunities.
              </h2>
            </div>

            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-4">
              {onChainYieldsData.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <i className={`${item.icon} ${item.color} text-xl`}></i>
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.coin}
                      </span>
                    </div>
                    <div className="text-green-500 font-semibold text-lg">
                      {item.apr}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <i className={`${item.protocolIcon} ${item.protocolColor} text-sm`}></i>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.protocols}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Coins
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Protocols
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  APR
                </div>
                <div></div>
              </div>

              {/* Table Content */}
              <div className="space-y-4">
                {onChainYieldsData.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-4 items-center">
                    <div className="flex items-center space-x-3">
                      <i className={`${item.icon} ${item.color} text-xl`}></i>
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.coin}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className={`${item.protocolIcon} ${item.protocolColor} text-sm`}></i>
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.protocols}
                      </span>
                    </div>
                    <div className="text-green-500 font-semibold">
                      {item.apr}
                    </div>
                    <div className="text-right">
                      <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center pt-4 sm:pt-6">
              <button className="text-yellow-500 hover:text-yellow-600 font-medium">
                View More
              </button>
            </div>
          </div>
        )

      case 'smart-arbitrage':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Arbitrage Steadily and Increase Your Profits Easily
              </h2>
              <button className={`flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm ${
                theme === 'dark' ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
              }`}>
                <i className="fas fa-play text-sm"></i>
                <span>Tutorials</span>
              </button>
            </div>

            {/* Timer */}
            <div className="mb-4 sm:mb-6">
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                Next APR
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className={`text-xl sm:text-2xl font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  01 : 13 : 56
                </span>
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  30d APR
                </span>
              </div>
            </div>

            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-4">
              {smartArbitrageData.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <i className={`${item.icons[0]} ${item.colors[0]} text-lg`}></i>
                        <i className={`${item.icons[1]} ${item.colors[1]} text-lg`}></i>
                      </div>
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.portfolio}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-4">
                      <div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Next APR</div>
                        <div className="text-green-500 font-semibold">{item.nextApr}</div>
                      </div>
                      <div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>30d APR</div>
                        <div className="text-green-500 font-semibold">{item.thirtyDayApr}</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Portfolio
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Next APR
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  30d APR
                </div>
                <div></div>
              </div>

              {/* Table Content */}
              <div className="space-y-4">
                {smartArbitrageData.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-4 items-center">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <i className={`${item.icons[0]} ${item.colors[0]} text-lg`}></i>
                        <i className={`${item.icons[1]} ${item.colors[1]} text-lg`}></i>
                      </div>
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.portfolio}
                      </span>
                    </div>
                    <div className="text-green-500 font-semibold">
                      {item.nextApr}
                    </div>
                    <div className="text-green-500 font-semibold">
                      {item.thirtyDayApr}
                    </div>
                    <div className="text-right">
                      <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center pt-4 sm:pt-6">
              <button className="text-yellow-500 hover:text-yellow-600 font-medium">
                View More
              </button>
            </div>
          </div>
        )

      case 'dual-investment':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Enjoy high rewards - Buy Low, Sell High
              </h2>
              <button className={`flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm ${
                theme === 'dark' ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
              }`}>
                <i className="fas fa-play text-sm"></i>
                <span>Tutorials</span>
              </button>
            </div>

            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-4">
              {dualInvestmentData.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <i className={`${item.icon} ${item.color} text-xl`}></i>
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.coin}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>APR</div>
                      <div className="text-green-500 font-semibold">{item.apr}</div>
                    </div>
                    <div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Settlement Date</div>
                      <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.settlementDate}</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="flex-1 px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-medium rounded-lg transition-colors text-sm">
                      Customize
                    </button>
                    <button className="flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Coins
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  APR
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Settlement Date
                </div>
                <div></div>
              </div>

              {/* Table Content */}
              <div className="space-y-4">
                {dualInvestmentData.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-4 items-center">
                    <div className="flex items-center space-x-3">
                      <i className={`${item.icon} ${item.color} text-xl`}></i>
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.coin}
                      </span>
                    </div>
                    <div className="text-green-500 font-semibold">
                      {item.apr}
                    </div>
                    <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.settlementDate}
                    </div>
                    <div className="text-right flex space-x-2">
                      <button className="px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-medium rounded-lg transition-colors">
                        Customize
                      </button>
                      <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center pt-4 sm:pt-6">
              <button className="text-yellow-500 hover:text-yellow-600 font-medium">
                View More
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8">
      {/* Header Section with Chart Illustration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left Side - Content */}
        <div className="order-2 lg:order-1">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Advanced Earn
          </h1>
          <p className={`text-base sm:text-lg mb-4 sm:mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            Benefit from our innovative products that are designed to help navigate the various market scenarios.
          </p>
          
          {/* Risk Notice */}
          <div className="mb-4 sm:mb-6">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
              *Advanced Earn products involve higher risks. See our{' '}
              <button className="text-yellow-500 hover:text-yellow-600 underline">
                FAQ
              </button>{' '}
              for more information.
            </p>
          </div>

          {/* What is Advanced Earn Button */}
          <button 
            onClick={() => setShowAdvancedEarnModal(true)}
            className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600 font-medium"
          >
            <span>What is Advanced Earn</span>
            <i className="fas fa-question-circle text-sm"></i>
          </button>
        </div>

        {/* Right Side - Chart Illustration */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative scale-75 sm:scale-90 lg:scale-100">
            {/* Chart Bars */}
            <div className="flex items-end space-x-3 sm:space-x-4">
              {/* Bar 1 */}
              <div className={`w-12 sm:w-16 h-24 sm:h-32 rounded-t-lg ${
                theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'
              }`}></div>
              
              {/* Bar 2 */}
              <div className={`w-12 sm:w-16 h-30 sm:h-40 rounded-t-lg ${
                theme === 'dark' ? 'bg-gray-500' : 'bg-gray-500'
              }`}></div>
              
              {/* Bar 3 (Tallest) */}
              <div className={`w-12 sm:w-16 h-39 sm:h-52 rounded-t-lg ${
                theme === 'dark' ? 'bg-gray-400' : 'bg-gray-300'
              }`}></div>
            </div>

            {/* Yellow Growth Arrow and Lines */}
            <div className="absolute top-6 sm:top-8 right-0">
              {/* Upward trending lines */}
              <svg width="100" height="70" viewBox="0 0 120 80" className="absolute -top-4 -right-6 sm:-right-8">
                {/* Main trending line */}
                <path
                  d="M10 60 Q30 40 50 45 Q70 35 90 25 Q100 20 110 15"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Secondary trending line */}
                <path
                  d="M15 65 Q35 45 55 50 Q75 40 95 30"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                {/* Third trending line */}
                <path
                  d="M5 55 Q25 35 45 40 Q65 30 85 20"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                
                {/* Arrow head */}
                <polygon
                  points="105,12 115,18 105,24"
                  fill="#F59E0B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-2`}>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                activeTab === tab.id
                  ? theme === 'dark'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-100 text-gray-900'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <i className={`${tab.icon} text-sm`}></i>
              <span className="text-center sm:text-left">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-6 lg:p-8`}>
        {renderTabContent()}
      </div>

      {/* FAQ Section */}
      <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-6 lg:p-8`}>
        <div className="mb-6 sm:mb-8">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Get answers to common questions about Advanced Earn products and DeFi investing.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`border rounded-lg ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-opacity-50 transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`font-semibold pr-4 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <i className={`fas ${openFAQ === faq.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } flex-shrink-0`}></i>
              </button>
              
              {openFAQ === faq.id && (
                <div className={`px-4 sm:px-6 pb-4 sm:pb-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`pt-4 leading-relaxed text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className={`mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="text-center">
            <h3 className={`text-lg sm:text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Still have questions?
            </h3>
            <p className={`mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Our support team is here to help you with any Advanced Earn related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-4 sm:px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors text-sm sm:text-base">
                Contact Support
              </button>
              <button className={`px-4 sm:px-6 py-3 border rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                theme === 'dark' 
                  ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}>
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Earn Information Modal */}
      {showAdvancedEarnModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            {/* Modal Header */}
            <div className={`p-4 sm:p-6 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  What is Advanced Earn?
                </h2>
                <button
                  onClick={() => setShowAdvancedEarnModal(false)}
                  className={`p-2 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
                >
                  <i className="fas fa-times text-lg sm:text-xl"></i>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              <div className="mb-6 sm:mb-8">
                <p className={`text-base sm:text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Advanced Earn is a sophisticated investment platform that offers high-yield DeFi products designed for experienced cryptocurrency investors seeking maximum returns.
                </p>
                <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Our innovative products leverage cutting-edge blockchain technology and smart contracts to help you navigate various market scenarios while optimizing your earning potential.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-4 sm:pt-6">
                <button className="px-6 sm:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors text-sm sm:text-base">
                  Explore Products
                </button>
                <button
                  onClick={() => setShowAdvancedEarnModal(false)}
                  className={`px-6 sm:px-8 py-3 border rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                    theme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AdvancedEarns