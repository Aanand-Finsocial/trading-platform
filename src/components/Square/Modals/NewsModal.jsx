import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import { newsData, trendingArticles } from '../../../data/squareData'

const NewsModal = ({ showNews, setShowNews, setActiveSidebarItem }) => {
  const { theme } = useTheme()

  if (!showNews) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-6xl mx-auto max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl`}>
        {/* Modal Header */}
        <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <i className="fas fa-newspaper text-blue-500 text-lg sm:text-xl"></i>
            <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Crypto News
            </h2>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse hidden sm:inline">
              LIVE
            </span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} hidden lg:block`}>
              Subscribe to Updates
            </button>
            <button
              onClick={() => {
                setShowNews(false)
                setActiveSidebarItem('home')
              }}
              className={`p-2 hover:bg-gray-100 rounded touch-manipulation ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
            >
              <i className="fas fa-times text-sm sm:text-base"></i>
            </button>
          </div>
        </div>

        {/* News Categories Filter */}
        <div className={`px-4 sm:px-6 py-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Breaking', 'Regulation', 'Technology', 'DeFi', 'Institutional', 'NFTs', 'CBDC'].map((category) => (
              <button
                key={category}
                className={`px-3 py-1.5 sm:py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors touch-manipulation flex-shrink-0 ${
                  category === 'All'
                    ? 'bg-yellow-500 text-black'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News List */}
        <div className="overflow-y-auto max-h-[70vh] sm:max-h-[65vh]">
          <div className="p-3 sm:p-6">
            <div className="space-y-4 sm:space-y-6">
              {newsData.map((news) => (
                <div 
                  key={news.id} 
                  className={`p-4 sm:p-6 rounded-lg border cursor-pointer transition-all hover:shadow-lg touch-manipulation ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 hover:bg-gray-650' : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    {/* News Image Placeholder */}
                    <div className={`w-full h-32 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex-shrink-0 ${
                      news.category === 'Regulation' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      news.category === 'Technology' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                      'bg-gradient-to-br from-gray-500 to-gray-600'
                    } flex items-center justify-center`}>
                      <i className={`${news.authorAvatar} text-white text-xl sm:text-lg lg:text-xl`}></i>
                    </div>

                    {/* News Content */}
                    <div className="flex-1 min-w-0 w-full">
                      {/* News Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {news.author}
                          </span>
                          {news.verified && (
                            <i className="fas fa-check-circle text-blue-500 text-xs"></i>
                          )}
                          {news.breaking && (
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                              BREAKING
                            </span>
                          )}
                        </div>
                        
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} sm:flex-shrink-0`}>
                          {news.timestamp}
                        </div>
                      </div>

                      {/* News Title and Summary */}
                      <h3 className={`text-base sm:text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} leading-tight`}>
                        {news.title}
                      </h3>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none`}>
                        {news.summary}
                      </p>

                      {/* News Stats and Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 border-t border-gray-300 dark:border-gray-600 space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-4 sm:space-x-6">
                          <div className="flex items-center space-x-1">
                            <i className={`fas fa-eye text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                              {news.views}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <i className={`fas fa-heart text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                              {news.likes || '0'}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <i className={`fas fa-comment text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                              {news.comments || '0'}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end space-x-2">
                          <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                            via {news.source}
                          </span>
                          <button className={`text-xs p-1 touch-manipulation ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                            <i className="fas fa-bookmark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`px-4 sm:px-6 py-3 sm:py-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-center sm:text-left`}>
            Showing {newsData.length} news articles
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium touch-manipulation">
              Browse All Articles
            </button>
            <button className="w-full sm:w-auto px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg text-sm transition-colors touch-manipulation">
              Write Article
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsModal
