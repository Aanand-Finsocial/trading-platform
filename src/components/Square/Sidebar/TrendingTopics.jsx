import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'

const TrendingTopics = ({ trendingTopics }) => {
  const { theme } = useTheme()

  return (
    <div className={`rounded-2xl border p-6 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <h3 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🔥 Trending Now
      </h3>
      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-xl transition-all cursor-pointer hover:scale-102 ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-yellow-500 font-bold text-lg hover:text-yellow-400 transition-colors">
                  {topic.tag}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {topic.posts} posts
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
                topic.change.startsWith('+') 
                  ? theme === 'dark' 
                    ? 'bg-green-900 text-green-300 hover:bg-green-800' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                  : theme === 'dark' 
                    ? 'bg-red-900 text-red-300 hover:bg-red-800' 
                    : 'bg-red-100 text-red-700 hover:bg-red-200'
              }`}>
                {topic.change}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View More Button */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full px-4 py-2 text-yellow-500 hover:text-yellow-600 font-medium text-sm transition-colors hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-lg">
          View All Trending Topics
        </button>
      </div>
    </div>
  )
}

export default TrendingTopics
