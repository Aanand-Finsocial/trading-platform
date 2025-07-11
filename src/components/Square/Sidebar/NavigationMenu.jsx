import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'

const NavigationMenu = ({
  activeSidebarItem,
  setActiveSidebarItem,
  setShowNotifications,
  setShowTrendingArticles,
  setShowNews,
  unreadCount
}) => {
  const { theme } = useTheme()

  const menuItems = [
    {
      id: 'home',
      icon: 'fas fa-home',
      label: 'Feed',
      count: null
    },
    {
      id: 'notifications',
      icon: 'fas fa-bell',
      label: 'Notifications',
      count: unreadCount
    },
    {
      id: 'profile',
      icon: 'fas fa-user-circle',
      label: 'Profile',
      count: null
    },
    {
      id: 'trending',
      icon: 'fas fa-fire',
      label: 'Trending',
      count: null
    },
    {
      id: 'news',
      icon: 'fas fa-newspaper',
      label: 'News',
      count: null
    },
    {
      id: 'bookmarks',
      icon: 'fas fa-bookmark',
      label: 'Saved',
      count: null
    },
    {
      id: 'creator',
      icon: 'fas fa-star',
      label: 'Creator Hub',
      count: null
    }
  ]

  const handleItemClick = (item) => {
    setActiveSidebarItem(item.id)
    if (item.id === 'notifications') setShowNotifications(true)
    if (item.id === 'trending') setShowTrendingArticles(true)
    if (item.id === 'news') setShowNews(true)
  }

  return (
    <div className={`rounded-2xl border p-6 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <h3 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Navigation
      </h3>
      <div className="space-y-2">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
              activeSidebarItem === item.id
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg transform scale-105' 
                : theme === 'dark' 
                  ? 'text-gray-300 hover:bg-gray-700 hover:scale-102' 
                  : 'text-gray-700 hover:bg-gray-100 hover:scale-102'
            }`}
            onClick={() => handleItemClick(item)}
          >
            <div className="flex items-center space-x-3">
              <i className={`${item.icon} text-lg`}></i>
              <span className="font-medium">{item.label}</span>
            </div>
            {item.count && item.count > 0 && (
              <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                {item.count > 9 ? '9+' : item.count}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavigationMenu
