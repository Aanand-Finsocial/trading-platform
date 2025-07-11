import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'

const CreatePostCard = () => {
  const { theme } = useTheme()

  return (
    <div className={`rounded-2xl border p-6 lg:p-8 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
          <i className="fas fa-user text-white"></i>
        </div>
        <input
          type="text"
          placeholder="Share your crypto insights with the community..."
          className={`flex-1 px-4 lg:px-6 py-3 lg:py-4 rounded-xl border-0 shadow-inner ${
            theme === 'dark'
              ? 'bg-gray-700 text-white placeholder-gray-400'
              : 'bg-gray-50 text-gray-900 placeholder-gray-500'
          } focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm lg:text-base`}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex flex-wrap items-center gap-3 lg:gap-6">
          <button className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-all text-sm lg:text-base ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}>
            <i className="fas fa-image"></i>
            <span className="hidden sm:inline">Photo</span>
          </button>
          <button className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-all text-sm lg:text-base ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}>
            <i className="fas fa-chart-line"></i>
            <span className="hidden sm:inline">Chart</span>
          </button>
          <button className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-all text-sm lg:text-base ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}>
            <i className="fas fa-poll"></i>
            <span className="hidden sm:inline">Poll</span>
          </button>
        </div>
        <button className="w-full sm:w-auto px-6 lg:px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm lg:text-base">
          Share
        </button>
      </div>
    </div>
  )
}

export default CreatePostCard
