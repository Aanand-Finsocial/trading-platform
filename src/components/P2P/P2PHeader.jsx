import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const P2PHeader = ({ 
  activeMode, 
  setActiveMode, 
  activeTab, 
  setActiveTab,
  showBeginnersGuide,
  setShowBeginnersGuide
}) => {
  const { theme } = useTheme()

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
      {/* Mode Selection */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveMode("p2p")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeMode === "p2p"
                ? "bg-yellow-400 text-black"
                : theme === 'dark'
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            P2P Trading
          </button>
          <button
            onClick={() => setActiveMode("express")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeMode === "express"
                ? "bg-yellow-400 text-black"
                : theme === 'dark'
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Express
          </button>
        </div>

        <button
          onClick={() => setShowBeginnersGuide(!showBeginnersGuide)}
          className={`text-sm ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          Beginner's Guide
        </button>
      </div>

      {/* Buy/Sell Tabs */}
      <div className="flex px-4 sm:px-6">
        <button
          onClick={() => setActiveTab("buy")}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "buy"
              ? "border-yellow-400 text-yellow-400"
              : theme === 'dark'
                ? "border-transparent text-gray-400 hover:text-gray-200"
                : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab("sell")}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "sell"
              ? "border-yellow-400 text-yellow-400"
              : theme === 'dark'
                ? "border-transparent text-gray-400 hover:text-gray-200"
                : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Sell
        </button>
      </div>
    </div>
  )
}

export default P2PHeader
