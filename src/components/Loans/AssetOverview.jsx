import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const AssetOverview = ({ activeTab, setActiveTab }) => {
  const { theme } = useTheme()

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      {/* Tab Navigation */}
      <div className={`px-4 sm:px-6 py-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-4 sm:space-x-8">
            <button
              onClick={() => setActiveTab('ongoing-orders')}
              className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                activeTab === 'ongoing-orders'
                  ? 'border-yellow-500 text-yellow-500'
                  : theme === 'dark'
                    ? 'border-transparent text-gray-400 hover:text-gray-200'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Ongoing Orders (0)
            </button>
            <button
              onClick={() => setActiveTab('asset-overview')}
              className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                activeTab === 'asset-overview'
                  ? 'border-yellow-500 text-yellow-500'
                  : theme === 'dark'
                    ? 'border-transparent text-gray-400 hover:text-gray-200'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Asset Overview
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6">
        {activeTab === 'asset-overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Total Debt Amount Section */}
            <div>
              <div className="mb-6">
                <h3 className={`text-base lg:text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Debt Amount (USD)
                </h3>
                <div className={`text-2xl lg:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  ≈0
                </div>
              </div>

              {/* No Records Found */}
              <div className="flex flex-col items-center justify-center py-12 lg:py-16">
                <div className="mb-4">
                  <i className="fas fa-search text-4xl sm:text-6xl text-gray-400"></i>
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  No Records Found.
                </p>
              </div>
            </div>

            {/* Total Collateral Amount Section */}
            <div>
              <div className="mb-6">
                <h3 className={`text-base lg:text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Collateral Amount (USD)
                </h3>
                <div className={`text-2xl lg:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  ≈0
                </div>
              </div>

              {/* No Records Found */}
              <div className="flex flex-col items-center justify-center py-12 lg:py-16">
                <div className="mb-4">
                  <i className="fas fa-search text-4xl sm:text-6xl text-gray-400"></i>
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  No Records Found.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Ongoing Orders Content */
          <div className="flex flex-col items-center justify-center py-12 lg:py-16">
            <div className="mb-4">
              <i className="fas fa-search text-4xl sm:text-6xl text-gray-400"></i>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              No Records Found.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


export default AssetOverview
