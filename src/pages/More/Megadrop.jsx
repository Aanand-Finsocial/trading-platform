import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Megadrop = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [showTutorialModal, setShowTutorialModal] = useState(false)
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const megadropFeatures = [
    {
      icon: '🎯',
      title: 'Massive Rewards',
      description: 'Participate in token airdrops worth millions of dollars'
    },
    {
      icon: '🚀',
      title: 'Early Access',
      description: 'Get tokens before they hit the market'
    },
    {
      icon: '💎',
      title: 'BNB Benefits',
      description: 'Hold BNB and earn exclusive rewards'
    },
    {
      icon: '🎮',
      title: 'Web3 Quests',
      description: 'Complete simple tasks for bonus rewards'
    }
  ]

  const participationSteps = [
    {
      step: 1,
      title: 'Hold BNB',
      description: 'Maintain a minimum BNB balance in your account during the snapshot period',
      icon: '💰',
      details: [
        'Check minimum BNB requirement for each project',
        'Keep BNB in your spot wallet',
        'Balance is calculated daily during the subscription period'
      ]
    },
    {
      step: 2,
      title: 'Complete Web3 Quest',
      description: 'Participate in project-specific tasks to earn additional rewards',
      icon: '🎯',
      details: [
        'Visit the project\'s official website',
        'Complete social media tasks',
        'Take quizzes about the project',
        'Verify your participation'
      ]
    },
    {
      step: 3,
      title: 'Subscribe to Megadrop',
      description: 'Click subscribe on the Megadrop project page',
      icon: '✅',
      details: [
        'Navigate to the active Megadrop project',
        'Click the "Subscribe" button',
        'Confirm your participation',
        'Monitor your score in real-time'
      ]
    },
    {
      step: 4,
      title: 'Receive Rewards',
      description: 'Get your tokens automatically distributed to your account',
      icon: '🎁',
      details: [
        'Rewards calculated based on your BNB score',
        'Web3 quest completion adds bonus points',
        'Tokens distributed within 48 hours',
        'Check your spot wallet for new tokens'
      ]
    }
  ]

  const faqData = [
    {
      question: 'What is Megadrop?',
      answer: 'Megadrop is a token launch platform that allows users to participate in airdrops by holding BNB and completing Web3 quests. It provides early access to promising blockchain projects with massive reward pools.'
    },
    {
      question: 'How is my BNB score calculated?',
      answer: 'Your BNB score is calculated based on your average BNB holding during the subscription period. The formula considers both the amount of BNB held and the duration of holding. Higher scores lead to larger reward allocations.'
    },
    {
      question: 'What are Web3 quests?',
      answer: 'Web3 quests are simple tasks related to the launching project, such as visiting their website, following social media accounts, completing educational quizzes, or interacting with their protocol. These tasks help you learn about the project while earning bonus rewards.'
    },
    {
      question: 'When will I receive my rewards?',
      answer: 'Rewards are typically distributed within 48 hours after the Megadrop ends. You can check your spot wallet for the new tokens. The exact distribution time is announced for each individual project.'
    },
    {
      question: 'Can I participate in multiple Megadrops?',
      answer: 'Yes! You can participate in all available Megadrop projects simultaneously. Each project has its own requirements and reward pools. Your BNB can count towards multiple projects if you meet their individual requirements.'
    },
    {
      question: 'What happens if I don\'t complete the Web3 quest?',
      answer: 'You can still receive rewards based on your BNB holding score, but you\'ll miss out on the additional rewards allocated to Web3 quest participants. It\'s recommended to complete all tasks for maximum rewards.'
    },
    {
      question: 'Is there a minimum BNB requirement?',
      answer: 'Yes, each Megadrop project sets its own minimum BNB requirement, typically ranging from 0.1 to 1 BNB. The exact requirement is displayed on each project\'s page before the launch begins.'
    },
    {
      question: 'Are there any fees for participating?',
      answer: 'No, participating in Megadrop is completely free. You only need to hold the required BNB amount and complete the Web3 quests. There are no subscription fees or hidden charges.'
    }
  ]

  const stats = {
    totalRewards: '$2.5B+',
    participants: '50M+',
    projects: '25+',
    avgReturn: '340%'
  }

  // Button handlers
  const handleStartEarning = () => {
    setIsSubscribing(true)
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribing(false)
      alert('Successfully subscribed to Megadrop! Check your dashboard for active projects.')
      // Navigate to a hypothetical megadrop dashboard
      navigate('/megadrop-dashboard')
    }, 2000)
  }

  const handleWatchTutorial = () => {
    setShowTutorialModal(true)
  }

  const handleExploreActiveMegadrops = () => {
    navigate('/megadrop-projects')
  }

  const handleContactSupport = () => {
    setShowSupportModal(true)
  }

  const handleCloseTutorial = () => {
    setShowTutorialModal(false)
  }

  const handleCloseSupport = () => {
    setShowSupportModal(false)
  }

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`min-h-screen pt-16 transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50'}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900' : 'bg-gradient-to-br from-slate-700 via-gray-700 to-blue-800'}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-slate-400/20 to-gray-500/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-blue-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          {['🚀', '💎', '🎯', '⭐', '🔥', '💰'].map((icon, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-float"
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white text-lg font-semibold border border-white/20 animate-pulse">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping"></span>
                Revolutionary Token Launch Platform
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-slate-300 bg-clip-text text-transparent animate-pulse">
                MEGA
              </span>
              <span className="block text-white drop-shadow-2xl">
                DROP
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Join the biggest crypto airdrops in history. Hold BNB, complete Web3 quests, 
              and earn massive rewards from the most promising blockchain projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button 
                onClick={handleStartEarning}
                disabled={isSubscribing}
                className={`px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-xl hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-blue-400/50 ${isSubscribing ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                <i className={`${isSubscribing ? 'fas fa-spinner fa-spin' : 'fas fa-rocket'} mr-2`}></i>
                {isSubscribing ? 'Subscribing...' : 'Start Earning Now'}
              </button>
              <button 
                onClick={handleWatchTutorial}
                className="px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-bold text-lg rounded-xl border border-white/30 hover:bg-white/30 transform transition-all duration-300"
              >
                <i className="fas fa-play mr-2"></i>
                Watch Tutorial
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {Object.entries(stats).map(([key, value], index) => (
                <div
                  key={key}
                  className={`p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-black mb-2 text-white">
                    {value}
                  </div>
                  <div className="text-sm text-gray-200 capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-slate-100 to-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Why Choose Megadrop?
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
              Experience the future of token launches with exclusive benefits and massive reward opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {megadropFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-slate-50'} border ${theme === 'dark' ? 'border-gray-600 hover:border-gray-500' : 'border-slate-200 hover:border-blue-300'} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both` }}
              >
                <div className="text-6xl mb-6 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'} group-hover:text-blue-600 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Participate Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-gray-50 to-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              How to Participate
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
              Follow these simple steps to start earning rewards from Megadrop projects
            </p>
          </div>

          <div className="space-y-12">
            {participationSteps.map((step, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${activeStep === index ? 'scale-105' : ''}`}
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                style={{ animation: `slideInLeft 0.8s ease-out ${index * 0.3}s both` }}
              >
                <div className={`flex items-start space-x-8 p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-slate-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full ${activeStep === index ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : theme === 'dark' ? 'bg-gray-700' : 'bg-slate-200'} flex items-center justify-center transition-all duration-300`}>
                    <span className={`text-xl font-bold ${activeStep === index ? 'text-white' : theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{step.icon}</span>
                        <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'} group-hover:text-blue-600 transition-colors`}>
                          {step.title}
                        </h3>
                      </div>
                      <i className={`fas fa-chevron-${activeStep === index ? 'up' : 'down'} ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} transition-transform duration-300`}></i>
                    </div>
                    
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} mb-4`}>
                      {step.description}
                    </p>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${activeStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className={`mt-6 p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-100'} border-l-4 border-blue-500`}>
                        <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                          Detailed Steps:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className={`flex items-start space-x-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                              <i className="fas fa-check-circle text-green-500 mt-1 flex-shrink-0"></i>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-slate-100 to-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              Everything you need to know about Megadrop
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-600' : 'border-slate-200'} shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                <button
                  className="w-full p-6 text-left focus:outline-none"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'} hover:text-blue-600 transition-colors`}>
                      {faq.question}
                    </h3>
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
      </div>

      {/* CTA Section */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 to-gray-900' : 'bg-gradient-to-r from-slate-700 to-gray-800'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join millions of users already participating in Megadrop and earning massive rewards
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleExploreActiveMegadrops}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-xl hover:scale-105 transform transition-all duration-300 shadow-2xl"
            >
              <i className="fas fa-rocket mr-2"></i>
              Explore Active Megadrops
            </button>
            <button 
              onClick={handleContactSupport}
              className="px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-bold text-lg rounded-xl border border-white/30 hover:bg-white/30 transform transition-all duration-300"
            >
              <i className="fas fa-question-circle mr-2"></i>
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Tutorial Modal */}
      {showTutorialModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Megadrop Tutorial
                </h3>
                <button 
                  onClick={handleCloseTutorial}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <i className="fas fa-play-circle text-6xl mb-4"></i>
                  <p className="text-xl font-semibold">Tutorial Video Coming Soon</p>
                  <p className="text-blue-200">Learn how to maximize your Megadrop rewards</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleExternalLink('https://academy.Finsocial.com/megadrop')}
                  className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <i className="fas fa-book mr-2"></i>
                  Read Documentation
                </button>
                <button 
                  onClick={() => handleExternalLink('https://www.youtube.com/watch?v=megadrop-tutorial')}
                  className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <i className="fab fa-youtube mr-2"></i>
                  Watch on YouTube
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Contact Support
                </h3>
                <button 
                  onClick={handleCloseSupport}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button 
                  onClick={() => handleExternalLink('https://www.Finsocial.com/en/chat')}
                  className="w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center"
                >
                  <i className="fas fa-comments mr-3"></i>
                  Live Chat Support
                </button>
                <button 
                  onClick={() => handleExternalLink('mailto:support@Finsocial.com?subject=Megadrop Support')}
                  className={`w-full p-4 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-lg transition-colors flex items-center justify-center`}
                >
                  <i className="fas fa-envelope mr-3"></i>
                  Email Support
                </button>
                <button 
                  onClick={() => handleExternalLink('https://www.Finsocial.com/en/support/faq/megadrop')}
                  className={`w-full p-4 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-lg transition-colors flex items-center justify-center`}
                >
                  <i className="fas fa-question-circle mr-3"></i>
                  FAQ & Help Center
                </button>
                <button 
                  onClick={() => handleExternalLink('https://t.me/Finsocial')}
                  className={`w-full p-4 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-lg transition-colors flex items-center justify-center`}
                >
                  <i className="fab fa-telegram mr-3"></i>
                  Telegram Community
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Megadrop