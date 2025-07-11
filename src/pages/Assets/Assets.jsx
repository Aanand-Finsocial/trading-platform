import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'
import Footer from '../../components/Footer/Footer'
import Overview from './Overview'
import Spot from './Spot'
import Margin from './Margin'

const Assets = () => {
  const { theme } = useTheme()
  const { user } = useUser()
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-chart-pie' },
    { id: 'spot', label: 'Spot', icon: 'fas fa-coins' },
    { id: 'margin', label: 'Margin', icon: 'fas fa-chart-line' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />
      case 'spot':
        return <Spot />
      case 'margin':
        return <Margin />
      default:
        return <Overview />
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Assets
          </h1>
          <p className={`mt-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Manage your crypto portfolio and trading positions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`rounded-2xl shadow-lg mb-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? theme === 'dark'
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-900/10'
                      : 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Assets
