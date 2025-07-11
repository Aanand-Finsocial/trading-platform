import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/Square/HeroSection'
import NavigationTabs from '../../components/Square/NavigationTabs'
import LeftSidebar from '../../components/Square/Sidebar/LeftSidebar'
import MainFeed from '../../components/Square/Feed/MainFeed'
import RightSidebar from '../../components/Square/Sidebar/RightSidebar'
import NotificationsModal from '../../components/Square/Modals/NotificationsModal'
import NewsModal from '../../components/Square/Modals/NewsModal'
import TrendingModal from '../../components/Square/Modals/TrendingModal'
import { tabs, posts, trendingTopics, suggestedUsers, latestNews, notifications } from '../../data/squareData'

const Square = () => {
  const [activeTab, setActiveTab] = useState('feed')
  const [activeSidebarItem, setActiveSidebarItem] = useState('home')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showTrendingArticles, setShowTrendingArticles] = useState(false)
  const [showNews, setShowNews] = useState(false)

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeroSection />
      
      <NavigationTabs 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setActiveSidebarItem={setActiveSidebarItem}
        setShowTrendingArticles={setShowTrendingArticles}
        tabs={tabs}
      />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Mobile: Show only on larger screens, use drawer on mobile */}
          <div className="hidden xl:block">
            <LeftSidebar
              activeSidebarItem={activeSidebarItem}
              setActiveSidebarItem={setActiveSidebarItem}
              setShowNotifications={setShowNotifications}
              setShowTrendingArticles={setShowTrendingArticles}
              setShowNews={setShowNews}
              unreadCount={unreadCount}
              trendingTopics={trendingTopics}
            />
          </div>

          {/* Mobile: Show mobile menu and main feed */}
          <div className="xl:hidden">
            <LeftSidebar
              activeSidebarItem={activeSidebarItem}
              setActiveSidebarItem={setActiveSidebarItem}
              setShowNotifications={setShowNotifications}
              setShowTrendingArticles={setShowTrendingArticles}
              setShowNews={setShowNews}
              unreadCount={unreadCount}
              trendingTopics={trendingTopics}
            />
          </div>

          <div className="xl:col-span-2">
            <MainFeed 
              activeSidebarItem={activeSidebarItem}
              posts={posts}
            />
          </div>

          {/* Hide right sidebar on mobile and tablet */}
          <div className="hidden xl:block">
            <RightSidebar
              latestNews={latestNews}
              suggestedUsers={suggestedUsers}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <NotificationsModal
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        setActiveSidebarItem={setActiveSidebarItem}
        notifications={notifications}
      />

      <NewsModal
        showNews={showNews}
        setShowNews={setShowNews}
        setActiveSidebarItem={setActiveSidebarItem}
      />

      <TrendingModal
        showTrendingArticles={showTrendingArticles}
        setShowTrendingArticles={setShowTrendingArticles}
        setActiveSidebarItem={setActiveSidebarItem}
      />

      <Footer />
    </div>
  )
}

export default Square
