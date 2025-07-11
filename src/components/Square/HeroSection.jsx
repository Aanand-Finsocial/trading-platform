import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const HeroSection = () => {
  const { theme } = useTheme()

  return (
    <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'} text-white`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 sm:w-72 sm:h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 lg:mb-8">
              <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 lg:mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-black">Social Trading Hub</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-white">
                Connect. Share.
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Grow Together.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 mb-6 lg:mb-8 leading-relaxed">
                Join the crypto community where traders share insights, discuss strategies, and grow their knowledge together.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 lg:mb-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-300">500K+</div>
                <div className="text-xs sm:text-sm text-black">Members</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-300">1M+</div>
                <div className="text-xs sm:text-sm text-black">Posts</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-300">24/7</div>
                <div className="text-xs sm:text-sm text-black">Active</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="relative z-10 text-black">Join Community</div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              <button className="group relative overflow-hidden bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                <span className="text-black">Explore Feed</span>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              {/* Main Community Illustration */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
                {/* Central Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-12">
                    <i className="fas fa-users text-white text-2xl sm:text-4xl"></i>
                  </div>
                </div>

                {/* Floating User Cards - Responsive positioning */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-2 sm:p-3 animate-float">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-black">CryptoTrader</div>
                      <div className="text-xs text-black hidden sm:block">+12.5% today</div>
                    </div>
                  </div>
                </div>

                {/* ...existing floating cards with responsive adjustments... */}
                
                {/* Connection Lines - Simplified for mobile */}
                <svg className="absolute inset-0 w-full h-full hidden sm:block">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                  <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse animation-delay-1000" />
                  <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse animation-delay-2000" />
                  <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse animation-delay-3000" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
