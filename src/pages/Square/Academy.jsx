import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Academy = () => {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState('All')
  const [showActivityRules, setShowActivityRules] = useState(false)
  const [showRewardHistory, setShowRewardHistory] = useState(false)

  const filterOptions = ['All', 'Ended', 'Ongoing']

  const courses = [
    {
      id: 1,
      title: 'What is dYdX?',
      description: 'dYdX is a DeFi professional trading platform that offers a fully decentralized, non-custodial experience.',
      status: 'Ended',
      reward: '10 USDT',
      participants: '12.5K',
      image: 'fas fa-exchange-alt',
      category: 'DeFi',
      duration: '15 min',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Understanding Blockchain Technology',
      description: 'Learn the fundamentals of blockchain, how it works, and why it\'s revolutionary for digital transactions.',
      status: 'Ongoing',
      reward: '15 USDT',
      participants: '8.9K',
      image: 'fas fa-cube',
      category: 'Blockchain',
      duration: '20 min',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Cryptocurrency Trading Basics',
      description: 'Master the basics of crypto trading, including order types, market analysis, and risk management.',
      status: 'Ongoing',
      reward: '25 USDT',
      participants: '15.2K',
      image: 'fas fa-chart-line',
      category: 'Trading',
      duration: '30 min',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'DeFi Yield Farming Strategies',
      description: 'Explore advanced yield farming techniques and learn how to maximize your DeFi returns safely.',
      status: 'Ended',
      reward: '50 USDT',
      participants: '6.7K',
      image: 'fas fa-seedling',
      category: 'DeFi',
      duration: '45 min',
      difficulty: 'Advanced'
    },
    {
      id: 5,
      title: 'NFT Marketplace Fundamentals',
      description: 'Discover the world of non-fungible tokens, how to mint, buy, and sell NFTs on various platforms.',
      status: 'Ongoing',
      reward: '20 USDT',
      participants: '11.3K',
      image: 'fas fa-palette',
      category: 'NFT',
      duration: '25 min',
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Smart Contract Security',
      description: 'Learn about smart contract vulnerabilities, auditing processes, and best security practices.',
      status: 'Ended',
      reward: '75 USDT',
      participants: '4.1K',
      image: 'fas fa-shield-alt',
      category: 'Security',
      duration: '60 min',
      difficulty: 'Advanced'
    }
  ]

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.status === activeFilter)

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Responsive Hero Section with Floating Elements */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'}`}>
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-36 sm:w-72 h-36 sm:h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-4 sm:-bottom-8 left-20 sm:left-40 w-40 sm:w-80 h-40 sm:h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Responsive Warning Banner */}
          <div className="relative z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="fas fa-shield-alt text-xs sm:text-sm"></i>
                </div>
                <div>
            <div className="font-semibold text-xs sm:text-sm text-black">Security Notice</div>
            <div className="text-xs opacity-90">Account verification required for full access to learning rewards</div>
                </div>
              </div>
              <button 
                onClick={() => window.location.href = '/verify'}
                className="w-full sm:w-auto bg-black bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                Verify Account
              </button>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content with Responsive Text */}
            <div className="text-white text-center lg:text-left">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-black">Learn & Earn Program</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Master Crypto,
                  <br />Earn Rewards
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                  Unlock the future of finance through interactive learning. Complete courses, pass quizzes, and earn cryptocurrency rewards.
                </p>
              </div>
              
              {/* Responsive Stats Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400">50+</div>
                  <div className="text-xs sm:text-sm text-black">Courses</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">$5K+</div>
                  <div className="text-xs sm:text-sm text-black">Rewards</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">100K+</div>
                  <div className="text-xs sm:text-sm text-black">Learners</div>
                </div>
              </div>

              {/* Responsive Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setShowActivityRules(true)}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <i className="fas fa-book-open text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">View Rules</span>
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <button 
                  onClick={() => setShowRewardHistory(true)}
                  className="group relative overflow-hidden bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <i className="fas fa-trophy text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">My Rewards</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Responsive Right Illustration */}
            <div className="relative order-first lg:order-last">
              {/* Main Character Container */}
              <div className="relative w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 mx-auto">
                {/* Responsive Floating Elements */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-2xl rotate-12 animate-bounce shadow-xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="fas fa-coins text-white text-sm sm:text-xl"></i>
                  </div>
                </div>
                
                <div className="absolute top-12 sm:top-20 left-2 sm:left-4 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-md sm:rounded-lg rotate-45 animate-pulse">
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-white text-xs sm:text-sm"></i>
                  </div>
                </div>

                <div className="absolute bottom-12 sm:bottom-20 right-6 sm:right-12 w-6 sm:w-10 h-6 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-ping">
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="fas fa-star text-white text-xs"></i>
                  </div>
                </div>

                {/* Responsive Central Character/Mascot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Base Platform */}
                    <div className="w-64 sm:w-72 lg:w-80 h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl transform perspective-1000 rotateX-12 shadow-2xl">
                      <div className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl opacity-10"></div>
                      
                      {/* Screen/Monitor */}
                      <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 bottom-8 sm:bottom-12 lg:bottom-16 bg-gray-900 rounded-lg sm:rounded-2xl shadow-inner">
                        <div className="p-2 sm:p-3 lg:p-4">
                          {/* Simulated Course Interface */}
                          <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-3">
                            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="h-1 sm:h-2 bg-gray-700 rounded w-3/4"></div>
                            <div className="h-1 sm:h-2 bg-gray-700 rounded w-1/2"></div>
                            <div className="h-2 sm:h-3 lg:h-4 bg-yellow-500 rounded w-full mt-2 sm:mt-4"></div>
                          </div>
                        </div>
                      </div>

                      {/* Keyboard */}
                      <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 h-4 sm:h-6 lg:h-8 bg-gray-800 rounded-md sm:rounded-lg">
                        <div className="flex items-center justify-center h-full">
                          <div className="grid grid-cols-6 sm:grid-cols-8 gap-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="w-1 sm:w-2 h-1 sm:h-2 bg-gray-600 rounded-sm"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Achievement Badges */}
                    <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-8 sm:left-12 lg:left-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2 sm:p-3 shadow-lg animate-float">
                      <i className="fas fa-medal text-white text-sm sm:text-lg"></i>
                    </div>
                    <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 right-8 sm:right-12 lg:right-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2 sm:p-3 shadow-lg animate-float animation-delay-1000">
                      <i className="fas fa-certificate text-white text-sm sm:text-lg"></i>
                    </div>
                  </div>
                </div>

                {/* Responsive Orbiting Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-0 left-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-400 rounded-full -translate-x-1/2 animate-orbit"></div>
                    <div className="absolute bottom-0 left-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full -translate-x-1/2 animate-orbit-reverse"></div>
                    <div className="absolute left-0 top-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full -translate-y-1/2 animate-orbit-slow"></div>
                    <div className="absolute right-0 top-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-purple-400 rounded-full -translate-y-1/2 animate-orbit-slow-reverse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Filter Section */}
      <div className={`sticky top-0 sm:top-16 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Learning Hub
              </h2>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1 overflow-x-auto">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      filter === activeFilter
                        ? 'bg-yellow-500 text-black shadow-lg transform scale-105'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Responsive Advanced Filter */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <select className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-xl border-0 shadow-md text-sm ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-gray-900'
              } focus:ring-2 focus:ring-yellow-500 transition-all`}>
                <option>All Categories</option>
                <option>DeFi</option>
                <option>Trading</option>
                <option>Blockchain</option>
                <option>NFT</option>
              </select>
              <button className={`p-2 sm:p-3 rounded-xl shadow-md transition-all hover:shadow-lg ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:text-white' : 'bg-white text-gray-600 hover:text-gray-900'
              }`}>
                <i className="fas fa-sort text-xs sm:text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Course Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
              
              {/* Responsive Course Image with Gradient Overlay */}
              <div className={`relative h-40 sm:h-48 lg:h-56 ${
                course.status === 'Ended' 
                  ? 'bg-gradient-to-br from-gray-500 to-gray-600' 
                  : 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600'
              } overflow-hidden`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Responsive Icon with Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl ${course.status === 'Ended' ? 'bg-gray-700' : 'bg-white bg-opacity-20'} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${course.image} text-white text-2xl sm:text-3xl`}></i>
                    </div>
                    
                    {/* Pulse Effect */}
                    {course.status === 'Ongoing' && (
                      <div className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl opacity-20 animate-ping"></div>
                    )}
                  </div>
                </div>
                
                {/* Responsive Status Badge */}
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm ${
                  course.status === 'Ended' 
                    ? 'bg-gray-800 bg-opacity-80 text-gray-300' 
                    : 'bg-green-500 bg-opacity-90 text-white'
                }`}>
                  <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${
                    course.status === 'Ended' ? 'bg-gray-400' : 'bg-white animate-pulse'
                  }`}></div>
                  <span className="text-xs font-semibold">{course.status}</span>
                </div>

                {/* Responsive Reward Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg transform group-hover:scale-105 transition-transform">
                  {course.reward}
                </div>

                {/* Ended Overlay */}
                {course.status === 'Ended' && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <i className="fas fa-check-circle text-white text-2xl sm:text-3xl mb-2"></i>
                      <div className="text-white font-semibold text-sm">Course Completed</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Responsive Course Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    <i className="fas fa-tag mr-1 text-xs"></i>
                    {course.category}
                  </span>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <i className="fas fa-users mr-1"></i>
                    {course.participants}
                  </div>
                </div>

                <h3 className={`text-lg sm:text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-yellow-500 transition-colors line-clamp-2`}>
                  {course.title}
                </h3>
                
                <p className={`text-xs sm:text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} line-clamp-3 leading-relaxed`}>
                  {course.description}
                </p>

                {/* Responsive Course Meta */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 sm:w-8 h-6 sm:h-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
                      <i className="fas fa-clock text-xs text-yellow-500"></i>
                    </div>
                    <div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Duration</div>
                      <div className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 sm:w-8 h-6 sm:h-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
                      <i className="fas fa-signal text-xs text-blue-500"></i>
                    </div>
                    <div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Level</div>
                      <div className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{course.difficulty}</div>
                    </div>
                  </div>
                </div>

                {/* Responsive Action Button */}
                <button 
                  disabled={course.status === 'Ended'}
                  className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform ${
                    course.status === 'Ended'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {course.status === 'Ended' ? (
                    <span className="flex items-center justify-center space-x-2">
                      <i className="fas fa-lock text-sm"></i>
                      <span>Course Ended</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <i className="fas fa-play text-sm"></i>
                      <span>Start Learning</span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Activity Rules Modal */}
      {showActivityRules && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-2xl max-h-[80vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className={`text-lg sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Activity Rules
              </h2>
              <button
                onClick={() => setShowActivityRules(false)}
                className={`p-2 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className={`space-y-3 sm:space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">1. Eligibility</h3>
                <p className="text-xs sm:text-sm">Users must complete KYC verification and pass risk assessment to participate in Learn & Earn activities.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">2. Course Completion</h3>
                <p className="text-xs sm:text-sm">Complete all lessons and pass the final quiz with a minimum score of 80% to earn rewards.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">3. Reward Distribution</h3>
                <p className="text-xs sm:text-sm">Rewards are distributed within 24 hours of successful course completion to your spot wallet.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">4. Terms & Conditions</h3>
                <p className="text-xs sm:text-sm">Each user can only earn rewards once per course. Multiple attempts to game the system will result in disqualification.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Reward History Modal */}
      {showRewardHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-3xl max-h-[80vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className={`text-lg sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Reward History
              </h2>
              <button
                onClick={() => setShowRewardHistory(false)}
                className={`p-2 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            {/* Responsive Reward History Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`text-left py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Course</th>
                    <th className={`text-left py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Reward</th>
                    <th className={`text-left py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Date</th>
                    <th className={`text-left py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className={`py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>What is dYdX?</td>
                    <td className="py-2 sm:py-3 text-xs sm:text-sm text-yellow-500">10 USDT</td>
                    <td className={`py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>2024-01-15</td>
                    <td className="py-2 sm:py-3 text-xs sm:text-sm text-green-500">Completed</td>
                  </tr>
                  <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className={`py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Blockchain Basics</td>
                    <td className="py-2 sm:py-3 text-xs sm:text-sm text-yellow-500">15 USDT</td>
                    <td className={`py-2 sm:py-3 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>2024-01-12</td>
                    <td className="py-2 sm:py-3 text-xs sm:text-sm text-green-500">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Academy
