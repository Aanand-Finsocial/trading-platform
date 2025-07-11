import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'

const PostCard = ({ post }) => {
  const { theme } = useTheme()

  return (
    <div className={`rounded-2xl border p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      {/* Enhanced Post Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
            <i className={`${post.author.avatar} text-white`}></i>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className={`font-bold text-base lg:text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {post.author.name}
              </span>
              {post.author.verified && (
                <i className="fas fa-check-circle text-blue-500"></i>
              )}
              {post.trending && (
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 lg:px-3 py-1 rounded-full font-bold animate-pulse shadow-lg">
                  🔥 Trending
                </span>
              )}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {post.author.followers} followers • {post.timestamp}
            </div>
          </div>
        </div>
        <button className={`p-2 lg:p-3 rounded-xl transition-all ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}>
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>

      {/* Enhanced Post Content */}
      <div className="mb-6">
        <p className={`text-base lg:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {post.content}
        </p>
        <div className="flex flex-wrap gap-2 lg:gap-3 mt-4">
          {post.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-yellow-500 font-medium hover:text-yellow-400 cursor-pointer transition-colors text-sm lg:text-base"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Post Image (if exists) */}
      {post.image && (
        <div className="mb-6">
          <div className={`h-48 lg:h-64 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 ${theme === 'dark' ? 'from-gray-700 to-gray-600' : ''} flex items-center justify-center`}>
            <i className="fas fa-image text-4xl text-gray-400"></i>
          </div>
        </div>
      )}

      {/* Enhanced Post Actions */}
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} space-y-4 sm:space-y-0`}>
        <div className="flex items-center space-x-4 lg:space-x-8">
          <button className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl transition-all ${theme === 'dark' ? 'text-gray-400 hover:text-red-400 hover:bg-gray-700' : 'text-gray-500 hover:text-red-500 hover:bg-red-50'}`}>
            <i className="far fa-heart"></i>
            <span className="font-medium text-sm lg:text-base">{post.likes}</span>
          </button>
          <button className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl transition-all ${theme === 'dark' ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700' : 'text-gray-500 hover:text-blue-500 hover:bg-blue-50'}`}>
            <i className="far fa-comment"></i>
            <span className="font-medium text-sm lg:text-base">{post.comments}</span>
          </button>
          <button className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl transition-all ${theme === 'dark' ? 'text-gray-400 hover:text-green-400 hover:bg-gray-700' : 'text-gray-500 hover:text-green-500 hover:bg-green-50'}`}>
            <i className="fas fa-share"></i>
            <span className="font-medium text-sm lg:text-base">{post.shares}</span>
          </button>
        </div>
        <button className={`p-2 lg:p-3 rounded-xl transition-all ${theme === 'dark' ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-700' : 'text-gray-500 hover:text-yellow-500 hover:bg-yellow-50'}`}>
          <i className="far fa-bookmark"></i>
        </button>
      </div>
    </div>
  )
}

export default PostCard
