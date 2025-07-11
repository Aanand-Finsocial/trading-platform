import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const NavigationTabs = ({ 
  activeTab, 
  setActiveTab, 
  setActiveSidebarItem, 
  setShowTrendingArticles,
  tabs 
}) => {
  const { theme } = useTheme()

  const handleTabClick = (tab) => {
    setActiveTab(tab.id)
    if (tab.id === 'trending') {
      setActiveSidebarItem('trending')
      setShowTrendingArticles(true)
    } else if (tab.id === 'following') {
      setActiveSidebarItem('profile')
    } else if (tab.id === 'live') {
      setActiveSidebarItem('live')
    } else {
      setActiveSidebarItem('home')
    }
  }

  return (
    <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Mobile Tab Selector */}
          <div className="flex lg:hidden w-full">
            <select 
              value={activeTab}
              onChange={(e) => {
                const selectedTab = tabs.find(tab => tab.id === e.target.value)
                if (selectedTab) handleTabClick(selectedTab)
              }}
              className={`w-full px-4 py-2 rounded-lg font-medium ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white border-gray-700' 
                  : 'bg-white text-gray-900 border-gray-300'
              } border focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex items-center space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  tab.id === activeTab
                    ? 'bg-yellow-500 text-black shadow-lg transform scale-105'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <i className={`${tab.icon} text-sm group-hover:scale-110 transition-transform`}></i>
                <span>{tab.label}</span>
                {tab.id === 'live' && (
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-3 rounded-xl shadow-md transition-all hover:shadow-lg ${
              theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:text-white' : 'bg-white text-gray-600 hover:text-gray-900'
            }`}>
              <i className="fas fa-search"></i>
            </button>
            <button className={`p-3 rounded-xl shadow-md transition-all hover:shadow-lg ${
              theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:text-white' : 'bg-white text-gray-600 hover:text-gray-900'
            }`}>
              <i className="fas fa-bell"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationTabs
