import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const SuperMine = () => {
  const { theme } = useTheme()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const miningPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      hashrate: '10 TH/s',
      duration: '30 days',
      price: '$99',
      dailyReturn: '$3.50',
      features: ['24/7 Mining', 'Real-time Monitoring', 'Basic Support']
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      hashrate: '50 TH/s',
      duration: '90 days',
      price: '$449',
      dailyReturn: '$18.75',
      features: ['24/7 Mining', 'Real-time Monitoring', 'Priority Support', 'Higher Efficiency']
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      hashrate: '200 TH/s',
      duration: '180 days',
      price: '$1,599',
      dailyReturn: '$75.00',
      features: ['24/7 Mining', 'Real-time Monitoring', 'Dedicated Support', 'Maximum Efficiency', 'Custom Solutions']
    }
  ]

  const stats = {
    totalMiners: '150,000+',
    totalHashrate: '2.5 EH/s',
    dailyPayouts: '$2.1M',
    uptime: '99.9%'
  }

  const campaigns = [
    {
      id: 1,
      title: 'Bitcoin Boost Campaign',
      description: 'Get 25% extra hashrate for your first month',
      reward: '+25% Hashrate',
      duration: '30 days',
      requirement: 'Minimum $500 investment',
      status: 'active',
      participants: '12,450',
      endDate: '2024-12-31'
    },
    {
      id: 2,
      title: 'Ethereum Mining Bonanza',
      description: 'Double rewards for Ethereum mining campaigns',
      reward: '2x ETH Rewards',
      duration: '60 days',
      requirement: 'Premium plan or higher',
      status: 'active',
      participants: '8,750',
      endDate: '2025-01-15'
    },
    {
      id: 3,
      title: 'Referral Super Boost',
      description: 'Earn 10% commission for every successful referral',
      reward: '10% Commission',
      duration: 'Ongoing',
      requirement: 'Refer 3+ friends',
      status: 'ongoing',
      participants: '25,890',
      endDate: 'Ongoing'
    }
  ]

  const faqData = [
    {
      question: 'What is Super Mine?',
      answer: 'Super Mine is our premium cloud mining service that provides enhanced mining power and exclusive rewards. It allows you to supercharge your mining operations with optimized hardware and priority access to mining pools.'
    },
    {
      question: 'How do I participate in Super Mine campaigns?',
      answer: 'To participate, simply select a Super Mine campaign that suits your needs, meet the minimum requirements, and start mining. You can track your progress through our dashboard and win rewards based on your mining performance.'
    },
    {
      question: 'What are the minimum requirements for Super Mine?',
      answer: 'Requirements vary by campaign. Generally, you need a minimum investment amount, an active mining plan, and sometimes specific mining duration commitments. Check individual campaign details for specific requirements.'
    },
    {
      question: 'How are Super Mine rewards calculated?',
      answer: 'Rewards are calculated based on your mining hashrate, duration of participation, and campaign-specific multipliers. The more you mine and the longer you participate, the higher your potential rewards.'
    },
    {
      question: 'When will I receive my Super Mine rewards?',
      answer: 'Rewards are typically distributed daily for active mining and at the end of campaign periods for bonus rewards. You can track all your earnings in real-time through your mining dashboard.'
    },
    {
      question: 'Can I participate in multiple campaigns simultaneously?',
      answer: 'Yes, you can participate in multiple Super Mine campaigns at the same time, provided you meet the requirements for each campaign. This allows you to maximize your earning potential.'
    },
    {
      question: 'What happens if I stop mining during a campaign?',
      answer: 'If you stop mining before completing a campaign, you may forfeit bonus rewards but will keep any rewards already earned. Some campaigns have minimum participation requirements to be eligible for final bonuses.'
    },
    {
      question: 'Is there a limit to how much I can earn?',
      answer: 'There are no hard limits on earnings, but individual campaigns may have maximum reward caps. Your earning potential is primarily limited by your mining investment and the duration of your participation.'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header with Clean Design */}
      <div className="text-center py-16">
        <div className="flex items-center justify-center mb-8">
          <h2 className={`text-6xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-800'} mr-6`}>
            Super Mine
          </h2>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <i className="fas fa-cog text-white text-xl"></i>
            </div>
            <div className="text-5xl">⛏️</div>
          </div>
        </div>
        <p className={`text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} max-w-4xl mx-auto font-medium`}>
          Supercharge your mining power, Unlock more rewards
        </p>
      </div>

      {/* Earn in 3 Easy Steps */}
      <div className={`p-12 rounded-3xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-xl`}>
        <h3 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
          Earn in 3 Easy Steps
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="text-6xl mb-4">⛏️</div>
              <div className="absolute -top-2 -right-2 text-2xl text-yellow-500">✨</div>
            </div>
            <h4 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Begin Mining on Finsocial Pool
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
              Start your mining journey with our professional mining pool infrastructure and get access to optimized mining algorithms.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="text-6xl mb-4">⭐</div>
              <div className="absolute -top-2 -right-2 text-2xl text-yellow-500">🎯</div>
            </div>
            <h4 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Select the 'Super Mine' campaign that best suits your needs and participate accordingly
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
              Choose from various Super Mine campaigns with different reward structures and requirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="text-6xl mb-4">💰</div>
              <div className="absolute -top-2 -right-2 text-2xl text-yellow-500">🏆</div>
            </div>
            <h4 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Track Your Progress & Win Your Rewards
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
              Monitor your mining performance in real-time and collect your enhanced rewards automatically.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(stats).map(([key, value], index) => (
          <div
            key={key}
            className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg text-center`}
          >
            <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              {value}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} capitalize`}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      {/* Active Campaigns */}
      <div>
        <h3 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
          Active Super Mine Campaigns
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  campaign.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {campaign.status.toUpperCase()}
                </span>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  {campaign.participants} participants
                </div>
              </div>

              <h4 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                {campaign.title}
              </h4>
              
              <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                {campaign.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Reward:</span>
                  <span className="text-yellow-500 font-semibold">{campaign.reward}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Duration:</span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{campaign.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Requirement:</span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{campaign.requirement}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Ends:</span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{campaign.endDate}</span>
                </div>
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}>
                Join Campaign
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
          Frequently Asked Questions
        </h3>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg transition-all duration-300`}
            >
              <button
                className="w-full p-6 text-left focus:outline-none"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'} hover:text-blue-600 transition-colors`}>
                    {faq.question}
                  </h4>
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
      </div>

      {/* Features */}
      <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg`}>
        <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
          Why Choose Super Mine?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <i className="fas fa-shield-alt text-green-500 mt-1"></i>
              <div>
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  Secure Infrastructure
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  Enterprise-grade security with 24/7 monitoring and redundant systems.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-bolt text-yellow-500 mt-1"></i>
              <div>
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  Optimized Performance
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  Latest generation mining hardware with maximum efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <i className="fas fa-chart-line text-blue-500 mt-1"></i>
              <div>
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  Real-time Analytics
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  Comprehensive dashboard with detailed mining statistics.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-headset text-purple-500 mt-1"></i>
              <div>
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  24/7 Support
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  Dedicated support team available around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperMine
