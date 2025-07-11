import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'

const Overview = () => {
  const { theme } = useTheme()
  const { user } = useUser()

  // Mock data for estimated balance
  const [balanceData] = useState({
    totalBalance: '25,847.92',
    totalBalanceUSD: '25,847.92',
    availableBalance: '18,234.56',
    lockedBalance: '7,613.36',
    change24h: '+1,247.83',
    changePercent: '+5.07%',
    isPositive: true,
    btcValue: '0.8765',
    ethValue: '8.234'
  })

  // Mock data for assets
  const [assets] = useState([
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: '0.4521',
      value: '19,234.56',
      usdPrice: '42,530.25',
      change: '+2.45%',
      isPositive: true,
      allocation: 74.3,
      icon: '₿',
      color: '#f7931a'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      amount: '2.8476',
      value: '7,635.42',
      usdPrice: '2,680.50',
      change: '+1.85%',
      isPositive: true,
      allocation: 29.5,
      icon: 'Ξ',
      color: '#627eea'
    },
    {
      symbol: 'USDT',
      name: 'Tether',
      amount: '1,250.00',
      value: '1,250.00',
      usdPrice: '1.00',
      change: '0.00%',
      isPositive: true,
      allocation: 4.8,
      icon: '₮',
      color: '#26a17b'
    },
    {
      symbol: 'BNB',
      name: 'BNB',
      amount: '8.2341',
      value: '2,594.78',
      usdPrice: '315.20',
      change: '-0.75%',
      isPositive: false,
      allocation: 10.0,
      icon: 'BNB',
      color: '#f3ba2f'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      amount: '2,450.00',
      value: '1,188.25',
      usdPrice: '0.485',
      change: '+3.20%',
      isPositive: true,
      allocation: 4.6,
      icon: 'ADA',
      color: '#0033ad'
    }
  ])

  // Mock data for recent transactions
  const [recentTransactions] = useState([
    {
      id: 1,
      type: 'Buy',
      asset: 'BTC',
      amount: '0.0245',
      value: '1,041.99',
      price: '42,530.25',
      fee: '2.08',
      status: 'Completed',
      date: '2024-01-15 14:32:21',
      method: 'Credit Card'
    },
    {
      id: 2,
      type: 'Sell',
      asset: 'ETH',
      amount: '0.8345',
      value: '2,236.80',
      price: '2,680.50',
      fee: '4.47',
      status: 'Completed',
      date: '2024-01-15 11:15:43',
      method: 'Bank Transfer'
    },
    {
      id: 3,
      type: 'Transfer',
      asset: 'USDT',
      amount: '500.00',
      value: '500.00',
      price: '1.00',
      fee: '1.00',
      status: 'Pending',
      date: '2024-01-15 09:45:12',
      method: 'Wallet Transfer'
    }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Buy':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Sell':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'Transfer':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="space-y-8">
      {/* Estimated Balance Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Estimated Balance
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Balance */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Total Balance
              </span>
              <i className="fas fa-wallet text-blue-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${balanceData.totalBalance}
            </div>
            <div className={`text-sm ${
              balanceData.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {balanceData.change24h} ({balanceData.changePercent})
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
              <i className="fas fa-coins text-green-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${balanceData.availableBalance}
            </div>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Ready to trade
            </div>
          </div>

          {/* Locked Balance */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Locked
              </span>
              <i className="fas fa-lock text-orange-500"></i>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ${balanceData.lockedBalance}
            </div>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              In open orders
            </div>
          </div>

          {/* BTC Value */}
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                BTC Value
              </span>
              <span className="text-orange-500">₿</span>
            </div>
            <div className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {balanceData.btcValue} BTC
            </div>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              ≈ {balanceData.ethValue} ETH
            </div>
          </div>
        </div>
      </div>

      {/* My Assets Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My Assets
          </h2>
          <Link 
            to="/wallet" 
            className="text-blue-600 hover:text-blue-500 text-sm font-medium"
          >
            Manage Assets →
          </Link>
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
                  Balance
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Value
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Price
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  24h Change
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Allocation
                </th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr key={index} className={`border-b ${
                  theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'
                } transition-colors`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: asset.color }}
                      >
                        {asset.icon}
                      </div>
                      <div>
                        <div className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {asset.symbol}
                        </div>
                        <div className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {asset.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={`py-4 px-4 text-right font-mono ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {asset.amount}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    ${asset.value}
                  </td>
                  <td className={`py-4 px-4 text-right font-mono ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    ${asset.usdPrice}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${
                    asset.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {asset.change}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${Math.min(asset.allocation, 100)}%`,
                            backgroundColor: asset.color 
                          }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {asset.allocation}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Recent Transactions
          </h2>
          <div className="flex items-center space-x-2">
            <Link 
              to="/transactions" 
              className="text-blue-600 hover:text-blue-500 text-sm font-medium"
            >
              View All →
            </Link>
            <button className={`px-3 py-1 rounded text-sm ${
              theme === 'dark' 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}>
              <i className="fas fa-download mr-1"></i>Export
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
                  Type
                </th>
                <th className={`text-left py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Asset
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Amount
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Value
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Fee
                </th>
                <th className={`text-center py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Status
                </th>
                <th className={`text-right py-3 px-4 font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className={`border-b ${
                  theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'
                } transition-colors`}>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(transaction.type)}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className={`py-4 px-4 font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {transaction.asset}
                  </td>
                  <td className={`py-4 px-4 text-right font-mono ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {transaction.amount}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    ${transaction.value}
                  </td>
                  <td className={`py-4 px-4 text-right ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    ${transaction.fee}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className={`py-4 px-4 text-right text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {new Date(transaction.date).toLocaleDateString()}
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

export default Overview
