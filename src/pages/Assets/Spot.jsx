import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Spot = () => {
  const { theme } = useTheme()

  // Add estimated balance data for spot account
  const [spotSummary] = useState({
    totalBalance: '30,714.81',
    availableBalance: '27,958.58',
    lockedBalance: '2,756.23',
    change24h: '+1,847.92',
    changePercent: '+6.39%',
    isPositive: true,
    btcValue: '0.7221',
    ethValue: '11.458'
  })

  const [spotBalances] = useState([
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      total: '0.4521',
      available: '0.4521',
      locked: '0.0000',
      value: '19,234.56',
      usdPrice: '42,530.25',
      color: '#f7931a'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      total: '2.8476',
      available: '2.5476',
      locked: '0.3000',
      value: '7,635.42',
      usdPrice: '2,680.50',
      color: '#627eea'
    },
    {
      symbol: 'USDT',
      name: 'Tether',
      total: '1,250.00',
      available: '750.00',
      locked: '500.00',
      value: '1,250.00',
      usdPrice: '1.00',
      color: '#26a17b'
    },
    {
      symbol: 'BNB',
      name: 'BNB',
      total: '8.2341',
      available: '8.2341',
      locked: '0.0000',
      value: '2,594.78',
      usdPrice: '315.20',
      color: '#f3ba2f'
    }
  ])

  return (
    <div className="space-y-6">
      {/* Estimated Spot Balance Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Spot Account Balance
          </h2>
          <div className="flex items-center space-x-2">
            <button className={`px-3 py-1 rounded text-sm ${
              theme === 'dark' 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}>
              24H
            </button>
            <button className={`px-3 py-1 rounded text-sm ${
              theme === 'dark' 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-600 text-white'
            }`}>
              7D
            </button>
            <button className={`px-3 py-1 rounded text-sm ${
              theme === 'dark' 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}>
              30D
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Spot Balance */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Total Spot Balance
              </span>
              <i className="fas fa-coins text-blue-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${spotSummary.totalBalance}
            </div>
            <div className={`text-sm ${
              spotSummary.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {spotSummary.change24h} ({spotSummary.changePercent})
            </div>
          </div>

          {/* Available Balance */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Available
              </span>
              <i className="fas fa-check-circle text-green-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${spotSummary.availableBalance}
            </div>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Ready to trade
            </div>
          </div>

          {/* In Orders */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                In Orders
              </span>
              <i className="fas fa-clock text-orange-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${spotSummary.lockedBalance}
            </div>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Locked in orders
            </div>
          </div>

          {/* BTC Equivalent */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                BTC Equivalent
              </span>
              <span className="text-orange-500">₿</span>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {spotSummary.btcValue} BTC
            </div>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              ≈ {spotSummary.ethValue} ETH
            </div>
          </div>
        </div>
      </div>

      {/* Spot Balances Table */}
      <div className="flex items-center justify-between">
        <h2 className={`text-xl font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Spot Balances
        </h2>
        <div className="flex items-center space-x-2">
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
            theme === 'dark'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition-colors`}>
            <i className="fas fa-plus mr-2"></i>Deposit
          </button>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
            theme === 'dark'
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } transition-colors`}>
            <i className="fas fa-minus mr-2"></i>Withdraw
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
                Total
              </th>
              <th className={`text-right py-3 px-4 font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Available
              </th>
              <th className={`text-right py-3 px-4 font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                In Order
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
            {spotBalances.map((balance, index) => (
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
                  {balance.total}
                </td>
                <td className={`py-4 px-4 text-right font-mono ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>
                  {balance.available}
                </td>
                <td className={`py-4 px-4 text-right font-mono ${
                  theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {balance.locked}
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
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    } transition-colors`}>
                      Buy
                    </button>
                    <button className={`px-3 py-1 rounded text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    } transition-colors`}>
                      Sell
                    </button>
                    <button className={`px-3 py-1 rounded text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-gray-600 text-white hover:bg-gray-700'
                        : 'bg-gray-600 text-white hover:bg-gray-700'
                    } transition-colors`}>
                      Transfer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Spot
