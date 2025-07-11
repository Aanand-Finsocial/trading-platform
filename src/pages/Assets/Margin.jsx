import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Margin = () => {
  const { theme } = useTheme()

  const [marginData] = useState({
    totalEquity: '15,234.56',
    marginBalance: '12,847.32',
    availableMargin: '8,456.78',
    marginLevel: '245.67',
    borrowedAmount: '3,456.89',
    interestAccrued: '12.45'
  })

  const [marginBalances] = useState([
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      net: '0.2345',
      borrowed: '0.1000',
      available: '0.3345',
      interest: '0.0002',
      value: '9,945.67',
      color: '#f7931a'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      net: '1.8476',
      borrowed: '0.5000',
      available: '2.3476',
      interest: '0.0015',
      value: '4,948.23',
      color: '#627eea'
    },
    {
      symbol: 'USDT',
      name: 'Tether',
      net: '2,340.89',
      borrowed: '1,500.00',
      available: '3,840.89',
      interest: '2.45',
      value: '2,340.89',
      color: '#26a17b'
    }
  ])

  return (
    <div className="space-y-6">
      {/* Margin Account Summary */}
      <div>
        <h2 className={`text-xl font-semibold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Margin Account Summary
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Total Equity
              </span>
              <i className="fas fa-chart-line text-blue-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${marginData.totalEquity}
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Margin Level
              </span>
              <i className="fas fa-percentage text-green-500"></i>
            </div>
            <div className={`text-2xl font-bold text-green-600`}>
              {marginData.marginLevel}%
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Available Margin
              </span>
              <i className="fas fa-coins text-purple-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${marginData.availableMargin}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Margin Balance
              </span>
              <i className="fas fa-wallet text-blue-500"></i>
            </div>
            <div className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${marginData.marginBalance}
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Borrowed
              </span>
              <i className="fas fa-arrow-down text-red-500"></i>
            </div>
            <div className={`text-xl font-bold text-red-600`}>
              ${marginData.borrowedAmount}
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Interest Accrued
              </span>
              <i className="fas fa-clock text-orange-500"></i>
            </div>
            <div className={`text-xl font-bold text-orange-600`}>
              ${marginData.interestAccrued}
            </div>
          </div>
        </div>
      </div>

      {/* Margin Assets Table */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Margin Assets
          </h2>
          <div className="flex items-center space-x-2">
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            } transition-colors`}>
              <i className="fas fa-plus mr-2"></i>Borrow
            </button>
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
              theme === 'dark'
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-green-600 text-white hover:bg-green-700'
            } transition-colors`}>
              <i className="fas fa-arrow-up mr-2"></i>Repay
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <th className={`text-left py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Asset
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Net Assets
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Available
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Borrowed
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Interest
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  USD Value
                </th>
                <th className={`text-center py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {marginBalances.map((balance, index) => (
                <tr key={index} className={`border-b ${
                  theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'
                } transition-colors`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: balance.color }}
                      >
                        {balance.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {balance.symbol}
                        </div>
                        <div className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {balance.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={`py-4 px-4 text-right font-mono ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {balance.net}
                  </td>
                  <td className={`py-4 px-4 text-right font-mono ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}>
                    {balance.available}
                  </td>
                  <td className={`py-4 px-4 text-right font-mono ${
                    theme === 'dark' ? 'text-red-400' : 'text-red-600'
                  }`}>
                    {balance.borrowed}
                  </td>
                  <td className={`py-4 px-4 text-right font-mono ${
                    theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    {balance.interest}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    ${balance.value}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center space-x-2">
                      <button className={`px-3 py-1 rounded text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      } transition-colors`}>
                        Borrow
                      </button>
                      <button className={`px-3 py-1 rounded text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      } transition-colors`}>
                        Repay
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Margin
