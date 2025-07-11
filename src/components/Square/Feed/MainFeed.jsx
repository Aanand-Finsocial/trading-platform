import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import CreatePostCard from './CreatePostCard'
import PostCard from './PostCard'

const MainFeed = ({ activeSidebarItem, posts }) => {
  const { theme } = useTheme()

  if (activeSidebarItem !== 'home') {
    return (
      <div className={`rounded-2xl border p-6 lg:p-8 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Feature Coming Soon
        </h2>
        <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          This section is under development. Stay tuned for amazing features!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      <CreatePostCard />
      
      <div className="space-y-6 lg:space-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default MainFeed
