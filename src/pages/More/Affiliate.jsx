import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Affiliate = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('overview')
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const tabs = [
    { id: 'overview', label: 'Program Overview', icon: 'fas fa-chart-pie' },
    { id: 'benefits', label: 'Benefits', icon: 'fas fa-gift' },
    { id: 'lifestyle', label: 'Lifestyle', icon: 'fas fa-heart' },
    { id: 'tools', label: 'Marketing Tools', icon: 'fas fa-tools' },
    { id: 'faq', label: 'FAQ', icon: 'fas fa-question-circle' }
  ]

  const marketingTools = [
    {
      title: 'Referral Links',
      description: 'Customizable referral links with tracking',
      icon: 'fas fa-link',
      features: ['Custom URLs', 'Real-time tracking', 'Mobile optimized']
    },
    {
      title: 'Banners & Creatives',
      description: 'Professional marketing materials',
      icon: 'fas fa-image',
      features: ['Various sizes', 'High quality', 'Brand compliant']
    },
    {
      title: 'API Integration',
      description: 'Advanced tracking and automation',
      icon: 'fas fa-code',
      features: ['Real-time data', 'Custom integration', 'Developer friendly']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive performance metrics',
      icon: 'fas fa-chart-bar',
      features: ['Detailed reports', 'Performance insights', 'Export data']
    }
  ]

  const benefits = [
    {
      title: 'High Commission Rates',
      description: 'Earn up to 50% commission on trading fees',
      icon: 'fas fa-percentage',
      color: 'bg-green-500'
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor your referrals and earnings instantly',
      icon: 'fas fa-chart-line',
      color: 'bg-blue-500'
    },
    {
      title: 'Multiple Payment Options',
      description: 'Get paid in crypto or fiat currency',
      icon: 'fas fa-wallet',
      color: 'bg-purple-500'
    },
    {
      title: 'Marketing Support',
      description: 'Access to professional marketing materials',
      icon: 'fas fa-bullhorn',
      color: 'bg-orange-500'
    },
    {
      title: 'Dedicated Support',
      description: '24/7 support from our affiliate team',
      icon: 'fas fa-headset',
      color: 'bg-teal-500'
    },
    {
      title: 'No Cap on Earnings',
      description: 'Unlimited earning potential',
      icon: 'fas fa-infinity',
      color: 'bg-pink-500'
    }
  ]

  const lifestyleFeatures = [
    {
      title: 'Work From Anywhere',
      description: 'Build your crypto affiliate business from any location in the world',
      image: 'fas fa-globe-americas',
      stats: '180+ Countries Supported'
    },
    {
      title: 'Flexible Schedule',
      description: 'Set your own hours and work at your own pace',
      image: 'fas fa-clock',
      stats: '24/7 Earning Potential'
    },
    {
      title: 'Passive Income',
      description: 'Earn commissions while you sleep from your referral network',
      image: 'fas fa-bed',
      stats: 'Lifetime Commissions'
    },
    {
      title: 'Financial Freedom',
      description: 'Build multiple income streams through our affiliate program',
      image: 'fas fa-piggy-bank',
      stats: 'Unlimited Earning Potential'
    }
  ]

  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'Crypto Influencer',
      earnings: '$45,000/month',
      story: 'Started with 100 followers, now earning full-time income through crypto affiliate marketing.',
      image: 'fas fa-user-circle',
      testimonial: 'This program changed my life completely. I can work from anywhere and help others get into crypto.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'YouTube Creator',
      earnings: '$28,000/month',
      story: 'Built a crypto education channel and monetized it through affiliate partnerships.',
      image: 'fas fa-user-circle',
      testimonial: 'The commission structure is incredibly generous. My audience trusts the platform.'
    },
    {
      name: 'Emily Johnson',
      role: 'Blog Writer',
      earnings: '$15,000/month',
      story: 'Writes about crypto trends and earns through affiliate links in her articles.',
      image: 'fas fa-user-circle',
      testimonial: 'Perfect passive income source. The tools and support are amazing.'
    }
  ]

  const faqData = [
    {
      question: 'How do I get started with the affiliate program?',
      answer: 'Simply sign up through our affiliate portal, complete the verification process, and you\'ll receive your unique referral link within 24 hours. No experience required!'
    },
    {
      question: 'What commission rates can I earn?',
      answer: 'Commission rates start at 20% for both spot and futures trading fees, and can go up to 50% based on your performance tier. The more active referrals you have, the higher your commission rate.'
    },
    {
      question: 'When and how do I get paid?',
      answer: 'Commissions are calculated daily and paid out monthly. You can choose to receive payments in cryptocurrency or fiat currency to your preferred wallet or bank account.'
    },
    {
      question: 'Is there a minimum payout threshold?',
      answer: 'Yes, the minimum payout threshold is $50 equivalent. Once you reach this amount, you can request a payout or wait for the automatic monthly distribution.'
    },
    {
      question: 'Can I track my referrals and earnings in real-time?',
      answer: 'Absolutely! Our affiliate dashboard provides real-time tracking of your referrals, their trading activity, and your earned commissions with detailed analytics.'
    },
    {
      question: 'What marketing materials do you provide?',
      answer: 'We provide a comprehensive suite of marketing materials including banners, landing pages, social media content, email templates, and educational resources to help you succeed.'
    },
    {
      question: 'Are there any restrictions on promotional methods?',
      answer: 'We prohibit spam, misleading advertising, and paid search advertising on branded terms. All promotional activities must comply with our terms of service and local regulations.'
    },
    {
      question: 'Do my referrals need to be active traders?',
      answer: 'Your commissions are based on your referrals\' trading activity. The more they trade, the more you earn. We provide tools to help engage and educate your referrals.'
    },
    {
      question: 'Can I refer institutional clients?',
      answer: 'Yes! Institutional referrals often generate higher commission volumes. We have special support and resources for affiliates focusing on institutional clients.'
    },
    {
      question: 'Is there a limit to how much I can earn?',
      answer: 'No, there are no caps on your earnings. Your income potential is unlimited and depends on the size and activity of your referral network.'
    }
  ]

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-green-900 via-blue-900 to-teal-900' : 'bg-gradient-to-br from-green-600 via-blue-600 to-teal-700'} text-white`}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <i className="fas fa-handshake text-yellow-400"></i>
                <span className="text-sm font-medium text-black">Affiliate Program</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Earn More by
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
                  Referring Friends
                </span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Join our affiliate program and earn up to 50% commission on every trade your referrals make. No limits, no caps, just unlimited earning potential.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-300">50%</div>
                  <div className="text-sm text-gray-100">Max Commission</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">24/7</div>
                  <div className="text-sm text-gray-100">Support</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-300">∞</div>
                  <div className="text-sm text-gray-100">Earning Potential</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowRegistrationForm(true)}
                  className="bg-gradient-to-r from-yellow-400 to-green-500 hover:from-yellow-500 hover:to-green-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Join Program
                </button>
                <button className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="w-96 h-96 mx-auto relative">
                {/* Central Network Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-green-500 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-12">
                    <i className="fas fa-handshake text-white text-4xl"></i>
                  </div>
                </div>

                {/* Floating Earning Cards */}
                <div className="absolute top-8 left-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-dollar-sign text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Commission</div>
                      <div className="text-xs text-gray-200">$1,234</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-20 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 animate-float animation-delay-1000">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-users text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Referrals</div>
                      <div className="text-xs text-gray-200">152 Active</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 animate-float animation-delay-2000">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-chart-line text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Growth</div>
                      <div className="text-xs text-gray-200">+45% Monthly</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-16 right-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 animate-float animation-delay-3000">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-trophy text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Tier</div>
                      <div className="text-xs text-gray-200">Gold Level</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors whitespace-nowrap ${
                  tab.id === activeTab
                    ? 'border-yellow-500 text-yellow-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`${tab.icon} text-sm`}></i>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div>
            {/* Benefits Grid */}
            <div className="mb-16">
              <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Why Join Our Affiliate Program?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center`}>
                        <i className={`${benefit.icon} text-white text-xl`}></i>
                      </div>
                      <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {benefit.title}
                      </h3>
                    </div>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How it Works */}
            <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                How It Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Sign Up
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Join our affiliate program and get your unique referral link
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Share & Promote
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Share your link and promote our platform to your network
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Earn Commissions
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Earn up to 50% commission on every trade your referrals make
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div>
            {/* Enhanced Benefits Section */}
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Unlock Exclusive Affiliate Benefits
              </h2>
              <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Join thousands of successful affiliates earning passive income while helping others discover the world of cryptocurrency trading.
              </p>
            </div>

            {/* Detailed Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: 'fas fa-percentage',
                  title: 'Industry-Leading Commissions',
                  description: 'Earn up to 50% commission on trading fees',
                  details: ['20-50% commission rates', 'Both spot and futures', 'Lifetime earnings', 'No commission caps'],
                  color: 'bg-green-500'
                },
                {
                  icon: 'fas fa-rocket',
                  title: 'Fast Track to Success',
                  description: 'Get started in minutes with our easy setup',
                  details: ['Instant approval', 'Quick onboarding', 'Ready-to-use materials', '24-hour support response'],
                  color: 'bg-blue-500'
                },
                {
                  icon: 'fas fa-chart-line',
                  title: 'Real-Time Analytics',
                  description: 'Track performance with advanced dashboards',
                  details: ['Live commission tracking', 'Referral analytics', 'Performance insights', 'Custom reports'],
                  color: 'bg-purple-500'
                },
                {
                  icon: 'fas fa-shield-alt',
                  title: 'Trusted Platform',
                  description: 'Promote a secure and reliable exchange',
                  details: ['Regulatory compliance', 'Advanced security', 'Insurance coverage', '99.9% uptime'],
                  color: 'bg-orange-500'
                },
                {
                  icon: 'fas fa-users',
                  title: 'Community Support',
                  description: 'Join a network of successful affiliates',
                  details: ['Exclusive forums', 'Mentorship programs', 'Regular webinars', 'Success strategies'],
                  color: 'bg-teal-500'
                },
                {
                  icon: 'fas fa-gift',
                  title: 'Exclusive Rewards',
                  description: 'Access special bonuses and incentives',
                  details: ['Performance bonuses', 'Tier upgrades', 'VIP events access', 'Special promotions'],
                  color: 'bg-pink-500'
                }
              ].map((benefit, index) => (
                <div key={index} className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${benefit.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <i className="fas fa-check text-green-500 text-sm"></i>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className={`text-center p-12 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-r from-yellow-900 to-orange-900' : 'bg-gradient-to-r from-yellow-100 to-orange-100'}`}>
              <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Ready to Start Earning?
              </h3>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Join thousands of successful affiliates already earning with our program
              </p>
              <button 
                onClick={() => setShowRegistrationForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Join Now - It's Free!
              </button>
            </div>
          </div>
        )}

        {activeTab === 'lifestyle' && (
          <div>
            {/* Lifestyle Hero */}
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                The Affiliate Lifestyle
              </h2>
              <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Transform your life with the freedom and flexibility of affiliate marketing. Work from anywhere, set your own schedule, and build lasting wealth.
              </p>
            </div>

            {/* Lifestyle Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {lifestyleFeatures.map((feature, index) => (
                <div key={index} className={`text-center p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${feature.image} text-white text-3xl`}></i>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {feature.description}
                  </p>
                  <div className="text-yellow-500 font-bold">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h3 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Real Success Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <div key={index} className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <i className={`${story.image} text-white text-xl`}></i>
                      </div>
                      <div>
                        <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {story.name}
                        </h4>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {story.role}
                        </p>
                        <p className="text-green-500 font-bold">
                          {story.earnings}
                        </p>
                      </div>
                    </div>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4 italic`}>
                      "{story.testimonial}"
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {story.story}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle CTA */}
            <div className={`text-center p-12 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-purple-100 to-blue-100'}`}>
              <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Your New Lifestyle Awaits
              </h3>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Stop trading time for money. Start building passive income that works for you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowRegistrationForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300"
                >
                  Start Your Journey
                </button>
                <button className={`px-8 py-4 border-2 rounded-xl font-semibold transition-colors ${
                  theme === 'dark' 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}>
                  Watch Success Stories
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div>
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Marketing Tools & Resources
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Access professional marketing materials and tools to maximize your earning potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketingTools.map((tool, index) => (
                <div key={index} className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <i className={`${tool.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {tool.title}
                    </h3>
                  </div>
                  <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <i className="fas fa-check text-green-500 text-sm"></i>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Get answers to the most common questions about our affiliate program
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-hidden`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className={`w-full px-6 py-4 text-left flex items-center justify-between ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
                    >
                      <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {faq.question}
                      </span>
                      <i className={`fas ${openFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                    </button>
                    {openFaq === index && (
                      <div className={`px-6 pb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p className="leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Still Have Questions CTA */}
            <div className={`text-center mt-12 p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Still Have Questions?
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                Our affiliate support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
                  Contact Support
                </button>
                <button className={`px-6 py-3 border rounded-lg font-semibold transition-colors ${
                  theme === 'dark' 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}>
                  Join Community
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Join Now Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-yellow-50 to-orange-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Income?
            </h2>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Join thousands of successful affiliates earning passive income with the world's leading crypto exchange
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">$2.5M+</div>
                <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Paid to Affiliates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">15,000+</div>
                <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Active Affiliates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">50%</div>
                <div className={`${theme === 'dark' ? 'text-black' : 'text-black'}`}>Max Commission</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowRegistrationForm(true)}
                className="px-12 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Join Now - It's Free!
              </button>
              <button className={`px-8 py-4 border-2 rounded-xl font-semibold transition-colors ${
                theme === 'dark' 
                  ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
              }`}>
                Download Guide
              </button>
            </div>

            <p className={`text-sm mt-6 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
              No setup fees • Instant approval • Start earning today
            </p>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Join Affiliate Program
              </h2>
              <button
                onClick={() => setShowRegistrationForm(false)}
                className={`p-2 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  How will you promote us?
                </label>
                <select className={`w-full px-4 py-3 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}>
                  <option>Social Media</option>
                  <option>Website/Blog</option>
                  <option>YouTube Channel</option>
                  <option>Email Marketing</option>
                  <option>Community/Forum</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Tell us about your audience
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                  placeholder="Describe your audience and promotional strategy..."
                ></textarea>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-black font-bold rounded-lg transition-all duration-300"
                >
                  Apply to Program
                </button>
                <button
                  type="button"
                  onClick={() => setShowRegistrationForm(false)}
                  className={`px-6 py-3 border rounded-lg font-semibold transition-colors ${
                    theme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
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

export default Affiliate
