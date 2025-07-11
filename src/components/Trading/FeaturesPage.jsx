import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const FeaturesPage = () => {
  const { theme } = useTheme()
  const [activeFeature, setActiveFeature] = useState('grid-trading')

  const features = [
    {
      id: 'grid-trading',
      title: 'Grid Trading',
      subtitle: 'Automate Your Trades',
      description: 'Buy low and sell high automatically with customizable grid strategies',
      icon: 'fas fa-th',
      color: 'bg-blue-500',
      benefits: [
        '24/7 automated trading',
        'Profit from market volatility',
        'Customizable grid ranges',
        'Risk management tools'
      ]
    },
    {
      id: 'dca',
      title: 'DCA (Dollar Cost Averaging)',
      subtitle: 'Smart Investment Strategy',
      description: 'Reduce average cost and risk through systematic investment',
      icon: 'fas fa-chart-area',
      color: 'bg-green-500',
      benefits: [
        'Reduce market timing risk',
        'Lower average purchase price',
        'Automated recurring buys',
        'Perfect for long-term investing'
      ]
    },
    {
      id: 'rebalancing',
      title: 'Portfolio Rebalancing',
      subtitle: 'Maintain Optimal Allocation',
      description: 'Automatically rebalance your portfolio to maintain target allocations',
      icon: 'fas fa-balance-scale',
      color: 'bg-purple-500',
      benefits: [
        'Maintain target allocation',
        'Automatic rebalancing',
        'Diversify investment risk',
        'Professional portfolio management'
      ]
    },
    {
      id: 'arbitrage',
      title: 'Arbitrage Trading',
      subtitle: 'Risk-Free Profits',
      description: 'Capture price differences across different markets and exchanges',
      icon: 'fas fa-exchange-alt',
      color: 'bg-orange-500',
      benefits: [
        'Market-neutral strategy',
        'Low-risk profit opportunities',
        'Cross-exchange trading',
        'Automated execution'
      ]
    }
  ]

  const statistics = [
    { label: 'Total Users', value: '2.5M+', icon: 'fas fa-users' },
    { label: 'Total Volume', value: '$50B+', icon: 'fas fa-chart-line' },
    { label: 'Success Rate', value: '95%', icon: 'fas fa-trophy' },
    { label: 'Active Bots', value: '500K+', icon: 'fas fa-robot' }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Crypto Trader',
      avatar: 'SC',
      rating: 5,
      comment: 'Trading bots have revolutionized my trading strategy. The grid trading feature helped me profit even in volatile markets.'
    },
    {
      name: 'Mark Johnson',
      role: 'Investment Manager',
      avatar: 'MJ',
      rating: 5,
      comment: 'DCA and rebalancing features are game-changers. My portfolio performance has improved significantly with automated strategies.'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Day Trader',
      avatar: 'AR',
      rating: 5,
      comment: 'The arbitrage bot finds opportunities I would never spot manually. It\'s like having a 24/7 trading assistant.'
    }
  ]

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Advanced Trading Features
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Unlock the power of automated trading with our comprehensive suite of trading bots and strategies
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className={`w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-lg flex items-center justify-center`}>
                <i className={`${stat.icon} text-black text-xl`}></i>
              </div>
              <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Trading Strategies & Features
          </h2>
          
          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFeature === feature.id
                    ? 'bg-blue-500 text-black transform scale-105'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <i className={`${features.find(f => f.id === feature.id)?.icon} mr-2`}></i>
                {feature.title}
              </button>
            ))}
          </div>

          {/* Active Feature Details */}
          {features.map((feature) => (
            activeFeature === feature.id && (
              <div key={feature.id} className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mr-4`}>
                        <i className={`${feature.icon} text-white text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {feature.title}
                        </h3>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-3"></i>
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg transition-colors">
                      Try {feature.title}
                    </button>
                  </div>
                  <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-8 h-80 flex items-center justify-center`}>
                    <div className="text-center">
                      <i className={`${feature.icon} text-6xl ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-4`}></i>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Interactive {feature.title} Demo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Testimonials Section */}
       

        {/* CTA Section */}
        <div className={`text-center p-12 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Ready to Start Automated Trading?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Join millions of users who trust our platform for their trading automation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg transition-colors">
              Get Started Now
            </button>
            <button className={`px-8 py-3 border rounded-lg font-semibold transition-colors ${
              theme === 'dark' 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage
