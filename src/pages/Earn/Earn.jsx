import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLocation, useNavigate } from 'react-router-dom'
import Overview from './Overview'
import SimpleEarn from './SimpleEarn'
import AdvancedEarns from './AdvancedEarns'
import Loans from './Loans'

const Earn = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('overview')
  const location = useLocation()
  const navigate = useNavigate()

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-chart-pie', path: '/earn' },
    { id: 'simple-earn', label: 'Simple Earn', icon: 'fas fa-piggy-bank', path: '/earn/simple-earn' },
    { id: 'advanced-earns', label: 'Advanced Earns', icon: 'fas fa-chart-line', path: '/earn/advanced-earns' },
    { id: 'loans', label: 'Loans', icon: 'fas fa-handshake', path: '/earn/loans' }
  ]

  // Set active tab based on current URL
  useEffect(() => {
    const currentPath = location.pathname
    console.log('Current path:', currentPath) // Debug log
    
    switch (currentPath) {
      case '/earn/simple-earn':
        setActiveTab('simple-earn')
        break
      case '/earn/advanced-earns':
        setActiveTab('advanced-earns')
        break
      case '/earn/loans':
        setActiveTab('loans')
        break
      case '/earn':
      default:
        setActiveTab('overview')
        break
    }
  }, [location.pathname])

  const handleTabClick = (tabId) => {
    console.log('Tab clicked:', tabId) // Debug log
    setActiveTab(tabId)
    
    // Navigate to the correct route
    const tab = tabs.find(t => t.id === tabId)
    if (tab) {
      navigate(tab.path, { replace: true })
    }
  }

  const renderContent = () => {
    console.log('Rendering content for tab:', activeTab) // Debug log
    
    switch (activeTab) {
      case 'simple-earn':
        return <SimpleEarn />
      case 'advanced-earns':
        return <AdvancedEarns />
      case 'loans':
        return <Loans />
      case 'overview':
      default:
        return <Overview />
    }
  }

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Earn
            </h1>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl`}>
              Grow your crypto with various earning products. From simple savings to advanced DeFi strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-yellow-500 text-yellow-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`${tab.icon} text-sm`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  )
}

export default Earn
