import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const TradesPanel = () => {
  const { theme } = useTheme()
  const [activeMainTab, setActiveMainTab] = useState('Market Trades')
  const [activeSubTab, setActiveSubTab] = useState('Open Orders')

  const mainTabs = ['Market Trades', 'My Trades']
  const subTabs = [
    { id: 'Open Orders', label: 'Open Orders', count: '0' },
    { id: 'Order History', label: 'Order History', count: null },
    { id: 'Trade History', label: 'Trade History', count: null },
    { id: 'Funds', label: 'Funds', count: null },
    { id: 'Grid Orders', label: 'Grid Orders', count: null }
  ]

  // Market trades data
  const marketTrades = [
    { price: '104,647.85', amount: '0.00507', time: '11:39:09' },
    { price: '104,647.85', amount: '0.00765', time: '11:39:09' },
    { price: '104,647.85', amount: '0.00215', time: '11:39:09' },
    { price: '104,647.85', amount: '0.00415', time: '11:39:09' },
    { price: '104,647.85', amount: '0.00695', time: '11:39:09' },
    { price: '104,647.85', amount: '0.00258', time: '11:39:09' },
    { price: '104,647.85', amount: '0.00765', time: '11:39:09' },
    { price: '104,647.85', amount: '0.00006', time: '11:39:09' },
    { price: '104,647.84', amount: '0.00018', time: '11:39:09' },
    { price: '104,647.63', amount: '0.00090', time: '11:39:09' },
    { price: '104,647.58', amount: '0.00551', time: '11:39:09' },
    { price: '104,647.50', amount: '0.00106', time: '11:39:09' }
  ]

  return (
    <div className={`h-full w-full flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Market Trades Section - Top */}
      <div className="h-1/2 flex flex-col border-b border-gray-700">
        {/* Market Trades Tab */}
        <div className="flex border-b border-gray-700">
          <button className={`px-4 py-2 text-sm font-medium ${
            theme === 'dark'
              ? 'text-yellow-400 border-b-2 border-yellow-400'
              : 'text-yellow-600 border-b-2 border-yellow-600'
          }`}>
            Market Trades
          </button>
        </div>

        {/* Market Trades Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className={`grid grid-cols-3 gap-4 px-4 py-2 text-xs font-medium ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div>Price (USDT)</div>
            <div>Amount (BTC)</div>
            <div>Time</div>
          </div>

          {/* Trades List */}
          <div className="flex-1 overflow-y-auto">
            {marketTrades.map((trade, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 px-4 py-1 text-xs ${
                  theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                }`}
              >
                <div className="text-green-500 font-mono">{trade.price}</div>
                <div className={`font-mono ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {trade.amount}
                </div>
                <div className={`font-mono ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {trade.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Trades Section - Bottom */}
      <div className="h-1/2 flex flex-col overflow-hidden">
        {/* Tabs Section */}
        <div className="flex justify-between items-center border-b border-gray-700">
          <div className="flex">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`px-3 py-2 text-xs font-medium whitespace-nowrap flex items-center space-x-1 ${
                  activeSubTab === tab.id
                    ? theme === 'dark'
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-yellow-600 border-b-2 border-yellow-600'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count && (
                  <span className={`${
                    activeSubTab === tab.id ? 'text-yellow-400' : 'text-gray-500'
                  }`}>
                    ({tab.count})
                  </span>
                )}
              </button>
            ))}
          </div>
          {activeSubTab === 'Open Orders' && (
            <div className="flex items-center space-x-2 px-3">
              <label className="flex items-center space-x-1 text-xs">
                <input 
                  type="checkbox" 
                  className="w-3 h-3 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" 
                />
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Hide Other Pairs
                </span>
              </label>
              <button className={`text-yellow-500 hover:text-yellow-400 text-xs font-medium`}>
                Cancel All
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {activeSubTab === 'Open Orders' && (
            <>
              {/* Table Header */}
              <div className={`grid grid-cols-8 gap-2 px-4 py-2 text-xs font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <div>Date</div>
                <div>Pair</div>
                <div>Type</div>
                <div>Side</div>
                <div>Price</div>
                <div>Amount</div>
                <div>Filled</div>
                <div>Total</div>
              </div>

              {/* Empty State */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className={`text-5xl mb-3 ${
                  theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  You have no open orders.
                </p>
              </div>
            </>
          )}
          
          {activeSubTab === 'Order History' && (
            <div className="flex-1 flex items-center justify-center">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                No order history found.
              </p>
            </div>
          )}
          
          {activeSubTab === 'Trade History' && (
            <div className="flex-1 flex items-center justify-center">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                No trade history found.
              </p>
            </div>
          )}
          
          {activeSubTab === 'Funds' && (
            <div className="flex-1 flex items-center justify-center">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                No funds data available.
              </p>
            </div>
          )}
          
          {activeSubTab === 'Grid Orders' && (
            <div className="flex-1 flex items-center justify-center">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                No grid orders found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TradesPanel
