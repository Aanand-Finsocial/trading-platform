import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const P2PListings = ({ listings, activeTab, selectedCurrency }) => {
  const { theme } = useTheme()

  const getCurrencySymbol = (currency) => {
    const currencyMap = {
      'INR': '₹',
      'USD': '$',
      'EUR': '€',
      'GBP': '£'
    }
    return currencyMap[currency] || currency
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Table Header */}
      <div className={`hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-medium uppercase tracking-wider border-b ${
        theme === 'dark' ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-200'
      }`}>
        <div className="col-span-3">Advertiser</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Available</div>
        <div className="col-span-2">Limit</div>
        <div className="col-span-2">Payment</div>
        <div className="col-span-1">Action</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {/* Advertiser Info */}
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {listing.advertiser.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-1">
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {listing.advertiser.name}
                    </p>
                    {listing.advertiser.isVerified && (
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {listing.advertiser.isPro && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                        Pro
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {listing.advertiser.trades} trades
                    </p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {listing.advertiser.completionRate}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-1 md:col-span-2">
              <div className="md:hidden text-xs text-gray-500 mb-1">Price</div>
              <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {getCurrencySymbol(listing.currency)}{listing.price.toFixed(2)}
              </p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {listing.currency}
              </p>
            </div>

            {/* Available */}
            <div className="col-span-1 md:col-span-2">
              <div className="md:hidden text-xs text-gray-500 mb-1">Available</div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {listing.available}
              </p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                USDT
              </p>
            </div>

            {/* Limit */}
            <div className="col-span-1 md:col-span-2">
              <div className="md:hidden text-xs text-gray-500 mb-1">Limit</div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {getCurrencySymbol(listing.currency)}{listing.minLimit} - {getCurrencySymbol(listing.currency)}{listing.maxLimit}
              </p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {listing.timeLimit} min
              </p>
            </div>

            {/* Payment Methods */}
            <div className="col-span-1 md:col-span-2">
              <div className="md:hidden text-xs text-gray-500 mb-1">Payment</div>
              <div className="flex flex-wrap gap-1">
                {listing.paymentMethods.slice(0, 2).map((method, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-2 py-1 text-xs rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {method}
                  </span>
                ))}
                {listing.paymentMethods.length > 2 && (
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    +{listing.paymentMethods.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="col-span-1 md:col-span-1">
              <button
                className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'buy'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {activeTab === 'buy' ? 'Buy' : 'Sell'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default P2PListings
