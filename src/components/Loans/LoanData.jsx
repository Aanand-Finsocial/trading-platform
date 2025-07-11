import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const LoanData = () => {
  const { theme } = useTheme()
  const [dataTab, setDataTab] = useState('market')
  const [timeRange, setTimeRange] = useState('24h')

  const marketData = [
    {
      asset: 'USDT',
      totalBorrowed: '125M',
      totalSupplied: '180M',
      utilizationRate: '69.4%',
      avgBorrowRate: '8.2%',
      avgSupplyRate: '5.7%',
      change24h: '+0.3%'
    },
    {
      asset: 'USDC',
      totalBorrowed: '98M',
      totalSupplied: '142M',
      utilizationRate: '69.0%',
      avgBorrowRate: '7.8%',
      avgSupplyRate: '5.4%',
      change24h: '-0.1%'
    },
    {
      asset: 'BUSD',
      totalBorrowed: '45M',
      totalSupplied: '67M',
      utilizationRate: '67.2%',
      avgBorrowRate: '8.5%',
      avgSupplyRate: '5.8%',
      change24h: '+0.5%'
    },
    {
      asset: 'DAI',
      totalBorrowed: '32M',
      totalSupplied: '48M',
      utilizationRate: '66.7%',
      avgBorrowRate: '8.1%',
      avgSupplyRate: '5.5%',
      change24h: '+0.2%'
    }
  ]

  const topBorrowers = [
    { rank: 1, address: '0x1234...5678', totalBorrowed: '$2.5M', activeLoans: 12, avgRate: '7.8%' },
    { rank: 2, address: '0x9876...4321', totalBorrowed: '$1.8M', activeLoans: 8, avgRate: '8.1%' },
    { rank: 3, address: '0x5555...7777', totalBorrowed: '$1.2M', activeLoans: 15, avgRate: '8.3%' },
    { rank: 4, address: '0x1111...2222', totalBorrowed: '$950K', activeLoans: 6, avgRate: '7.9%' },
    { rank: 5, address: '0x3333...4444', totalBorrowed: '$720K', activeLoans: 9, avgRate: '8.2%' }
  ]

  const topLenders = [
    { rank: 1, address: '0xaaaa...bbbb', totalSupplied: '$5.2M', activeLoans: 28, avgRate: '5.8%' },
    { rank: 2, address: '0xcccc...dddd', totalSupplied: '$3.7M', activeLoans: 22, avgRate: '5.6%' },
    { rank: 3, address: '0xeeee...ffff', totalSupplied: '$2.9M', activeLoans: 31, avgRate: '5.7%' },
    { rank: 4, address: '0x7777...8888', totalSupplied: '$2.1M', activeLoans: 18, avgRate: '5.5%' },
    { rank: 5, address: '0x9999...0000', totalSupplied: '$1.8M', activeLoans: 24, avgRate: '5.9%' }
  ]

  const marketMetrics = [
    { label: 'Total Value Locked', value: '$437M', change: '+2.4%', positive: true },
    { label: 'Total Active Loans', value: '12,847', change: '+156', positive: true },
    { label: 'Average Loan Size', value: '$34,500', change: '-1.2%', positive: false },
    { label: 'Platform Utilization', value: '68.9%', change: '+0.3%', positive: true }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Loan Market Data
          </h1>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Real-time analytics and market statistics
          </p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex space-x-2">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-yellow-500 text-black'
                  : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketMetrics.map((metric, index) => (
          <div key={index} className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <h3 className={`text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              {metric.label}
            </h3>
            <div className="flex items-center justify-between">
              <p className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {metric.value}
              </p>
              <span className={`text-sm font-medium ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Data Tabs */}
      <div className="flex space-x-1 p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
        <button
          onClick={() => setDataTab('market')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            dataTab === 'market'
              ? 'bg-yellow-500 text-black'
              : theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <i className="fas fa-chart-line mr-2"></i>
          Market Overview
        </button>
        <button
          onClick={() => setDataTab('borrowers')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            dataTab === 'borrowers'
              ? 'bg-yellow-500 text-black'
              : theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <i className="fas fa-users mr-2"></i>
          Top Borrowers
        </button>
        <button
          onClick={() => setDataTab('lenders')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            dataTab === 'lenders'
              ? 'bg-yellow-500 text-black'
              : theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <i className="fas fa-bank mr-2"></i>
          Top Lenders
        </button>
      </div>

      {/* Tab Content */}
      {dataTab === 'market' && (
        <div className={`rounded-lg border overflow-hidden ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Asset
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Total Borrowed
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Total Supplied
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Utilization
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Borrow Rate
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Supply Rate
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    24h Change
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {marketData.map((item, index) => (
                  <tr key={index} className={`hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.asset}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      ${item.totalBorrowed}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      ${item.totalSupplied}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {item.utilizationRate}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                      {item.avgBorrowRate}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                      {item.avgSupplyRate}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${item.change24h.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change24h}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {dataTab === 'borrowers' && (
        <div className={`rounded-lg border overflow-hidden ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Rank
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Address
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Total Borrowed
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Active Loans
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Avg Rate
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {topBorrowers.map((borrower) => (
                  <tr key={borrower.rank} className={`hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      #{borrower.rank}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {borrower.address}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {borrower.totalBorrowed}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {borrower.activeLoans}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                      {borrower.avgRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {dataTab === 'lenders' && (
        <div className={`rounded-lg border overflow-hidden ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Rank
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Address
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Total Supplied
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Active Loans
                  </th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Avg Rate
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {topLenders.map((lender) => (
                  <tr key={lender.rank} className={`hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      #{lender.rank}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {lender.address}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {lender.totalSupplied}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {lender.activeLoans}
                    </td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                      {lender.avgRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanData
