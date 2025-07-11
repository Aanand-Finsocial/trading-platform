import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'

const RightSidebar = ({ latestNews, suggestedUsers }) => {
  const { theme } = useTheme()

  return (
    <div className="lg:col-span-1">
      {/* Enhanced Latest News */}
      <div className={`rounded-2xl border p-6 mb-8 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            📰 Latest News
          </h3>
          <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {latestNews.slice(0, 3).map((news) => (
            <div key={news.id} className={`p-4 rounded-xl cursor-pointer transition-all hover:shadow-md ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            }`}>
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  news.category === 'Regulation' ? 'bg-blue-500' :
                  news.category === 'DeFi' ? 'bg-green-500' :
                  news.category === 'Exchange' ? 'bg-purple-500' :
                  'bg-orange-500'
                } shadow-lg`}>
                  <i className={`${news.image} text-white text-sm`}></i>
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold mb-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {news.title}
                  </h4>
                  <p className={`text-xs mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {news.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                      {news.source} • {news.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Suggested Users */}
      <div className={`rounded-2xl border p-6 mb-8 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h3 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          👥 Suggested to Follow
        </h3>
        <div className="space-y-4">
          {suggestedUsers.map((user, index) => (
            <div key={index} className={`p-3 rounded-xl transition-all ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <i className="fas fa-user text-white text-sm"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className={`font-bold text-sm truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {user.name}
                    </span>
                    {user.verified && (
                      <i className="fas fa-check-circle text-blue-500 text-xs flex-shrink-0"></i>
                    )}
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {user.followers} followers
                  </div>
                  <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    {user.bio}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-sm transition-all transform hover:scale-105">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Live Streams */}
      <div className={`rounded-2xl border p-6 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h3 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          🔴 Live Streams
        </h3>
        <div className="relative">
          <div className={`h-32 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-br from-red-600 to-pink-600' : 'bg-gradient-to-br from-red-500 to-pink-500'} flex items-center justify-center shadow-lg`}>
            <i className="fas fa-play text-white text-3xl"></i>
          </div>
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse font-bold">
            🔴 LIVE
          </div>
          <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
            2.4K viewers
          </div>
          <div className="mt-4">
            <div className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Bitcoin Technical Analysis
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              CryptoAnalyst • Live market insights
            </div>
          </div>
        </div>
        
        {/* Additional Live Streams */}
        <div className="mt-6 space-y-3">
          <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <i className="fas fa-microphone text-white text-xs"></i>
              </div>
              <div className="flex-1">
                <div className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  DeFi Podcast Live
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  1.2K listening
                </div>
              </div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-bar text-white text-xs"></i>
              </div>
              <div className="flex-1">
                <div className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Market Watch
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  856 watching
                </div>
              </div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
