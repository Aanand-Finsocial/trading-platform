import React, { useState } from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import NavigationMenu from './NavigationMenu'
import TrendingTopics from './TrendingTopics'

const LeftSidebar = ({
  activeSidebarItem,
  setActiveSidebarItem,
  setShowNotifications,
  setShowTrendingArticles,
  setShowNews,
  unreadCount,
  trendingTopics
}) => {
  const { theme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="lg:col-span-1">
      {/* Mobile Navigation Drawer Button */}
      <div className="lg:hidden mb-4">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`w-full p-4 rounded-xl shadow-md transition-all ${
            theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'
          } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <div className="flex items-center justify-center space-x-2">
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform`}></i>
            <span className="font-medium">{isMobileMenuOpen ? 'Close Menu' : 'Menu'}</span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className={`relative flex flex-col w-80 max-w-xs h-full shadow-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } transform transition-transform duration-300 ease-in-out`}>
            {/* Drawer Header */}
            <div className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Navigation
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <NavigationMenu
                activeSidebarItem={activeSidebarItem}
                setActiveSidebarItem={(item) => {
                  setActiveSidebarItem(item)
                  setIsMobileMenuOpen(false) // Close menu when item is selected
                }}
                setShowNotifications={(show) => {
                  setShowNotifications(show)
                  setIsMobileMenuOpen(false)
                }}
                setShowTrendingArticles={(show) => {
                  setShowTrendingArticles(show)
                  setIsMobileMenuOpen(false)
                }}
                setShowNews={(show) => {
                  setShowNews(show)
                  setIsMobileMenuOpen(false)
                }}
                unreadCount={unreadCount}
              />
              
              <TrendingTopics trendingTopics={trendingTopics} />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block space-y-8">
        <NavigationMenu
          activeSidebarItem={activeSidebarItem}
          setActiveSidebarItem={setActiveSidebarItem}
          setShowNotifications={setShowNotifications}
          setShowTrendingArticles={setShowTrendingArticles}
          setShowNews={setShowNews}
          unreadCount={unreadCount}
        />
        
        <TrendingTopics trendingTopics={trendingTopics} />
      </div>
    </div>
  )
}

export default LeftSidebar
