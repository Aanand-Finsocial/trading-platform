import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import { trendingArticles } from '../../../data/squareData'

const TrendingModal = ({ 
  showTrendingArticles, 
  setShowTrendingArticles, 
  setActiveSidebarItem 
}) => {
  const { theme } = useTheme()

  if (!showTrendingArticles) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-7xl mx-auto max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl`}>
        {/* Modal Header */}
        <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <i className="fas fa-fire text-red-500 text-lg sm:text-xl"></i>
            <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Trending Articles
            </h2>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} hidden sm:block`}>
              View All
            </button>
            <button
              onClick={() => {
                setShowTrendingArticles(false)
                setActiveSidebarItem('home')
              }}
              className={`p-2 hover:bg-gray-100 rounded touch-manipulation ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
            >
              <i className="fas fa-times text-sm sm:text-base"></i>
            </button>
          </div>
        </div>

        {/* Articles List */}
        <div className="overflow-y-auto max-h-[75vh] sm:max-h-[70vh]">
          <div className="p-3 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {trendingArticles.map((article) => (
                <div 
                  key={article.id} 
                  className={`p-4 sm:p-6 rounded-lg border cursor-pointer transition-all hover:shadow-lg touch-manipulation ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 hover:bg-gray-650' : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {/* Article Header */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        article.category === 'Bitcoin' ? 'bg-orange-100' :
                        article.category === 'Ethereum' ? 'bg-blue-100' :
                        article.category === 'DeFi' ? 'bg-green-100' :
                        article.category === 'NFTs' ? 'bg-purple-100' :
                        article.category === 'Analysis' ? 'bg-yellow-100' :
                        'bg-gray-100'
                      }`}>
                        <i className={`${article.authorAvatar} text-xs sm:text-sm ${
                          article.category === 'Bitcoin' ? 'text-orange-500' :
                          article.category === 'Ethereum' ? 'text-blue-500' :
                          article.category === 'DeFi' ? 'text-green-500' :
                          article.category === 'NFTs' ? 'text-purple-500' :
                          article.category === 'Analysis' ? 'text-yellow-500' :
                          'text-gray-500'
                        }`}></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                          <span className={`font-medium text-xs sm:text-sm truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {article.author}
                          </span>
                          {article.verified && (
                            <i className="fas fa-check-circle text-blue-500 text-xs flex-shrink-0"></i>
                          )}
                          {article.trending && (
                            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 hidden sm:inline">
                              Trending
                            </span>
                          )}
                        </div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                          {article.timestamp} • {article.readTime}
                        </div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded flex-shrink-0 ml-2 ${
                      article.category === 'Bitcoin' ? 'bg-orange-100 text-orange-700' :
                      article.category === 'Ethereum' ? 'bg-blue-100 text-blue-700' :
                      article.category === 'DeFi' ? 'bg-green-100 text-green-700' :
                      article.category === 'NFTs' ? 'bg-purple-100 text-purple-700' :
                      article.category === 'Analysis' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Article Image Placeholder */}
                  <div className={`h-24 sm:h-32 rounded-lg mb-3 sm:mb-4 ${
                    article.category === 'Bitcoin' ? 'bg-gradient-to-r from-orange-400 to-yellow-400' :
                    article.category === 'Ethereum' ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                    article.category === 'DeFi' ? 'bg-gradient-to-r from-green-400 to-teal-400' :
                    article.category === 'NFTs' ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                    article.category === 'Analysis' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                    'bg-gradient-to-r from-gray-400 to-gray-500'
                  } flex items-center justify-center`}>
                    <i className={`${article.authorAvatar} text-white text-2xl sm:text-3xl`}></i>
                  </div>

                  {/* Article Content */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className={`text-base sm:text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                      {article.title}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} line-clamp-2 sm:line-clamp-3`}>
                      {article.summary}
                    </p>
                  </div>

                  {/* Article Stats */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-600">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex items-center space-x-1">
                        <i className={`fas fa-eye text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {article.views}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i className={`fas fa-heart text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {article.likes}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i className={`fas fa-comment text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {article.comments}
                        </span>
                      </div>
                    </div>
                    <button className={`text-xs p-1 touch-manipulation ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                      <i className="fas fa-bookmark"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`px-4 sm:px-6 py-3 sm:py-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-center sm:text-left`}>
            Showing {trendingArticles.length} trending articles
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

export default TrendingModal
