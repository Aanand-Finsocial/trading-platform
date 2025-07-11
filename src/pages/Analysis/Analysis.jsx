import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Analysis = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen py-12 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Analysis</h1>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Advanced market analysis and trading insights
          </p>
          <div className={`rounded-2xl p-12 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <i className="fas fa-chart-line text-6xl text-blue-600 mb-4"></i>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              Analysis tools coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis
