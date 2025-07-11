import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const LoanHistory = () => {
  const { theme } = useTheme()
  const [historyTab, setHistoryTab] = useState('borrowing')
  const [timeFilter, setTimeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const borrowingHistory = [
    {
      id: 1,
      asset: 'USDT',
      amount: '5,000.00',
      collateral: 'BTC',
      collateralAmount: '0.25',
      interestRate: '8.5%',
      duration: '30 days',
      startDate: '2024-01-15',
      endDate: '2024-02-14',
      status: 'Completed',
      totalInterest: '34.93'
    },
    {
      id: 2,
      asset: 'USDC',
      amount: '10,000.00',
      collateral: 'ETH',
      collateralAmount: '5.2',
      interestRate: '7.2%',
      duration: '60 days',
      startDate: '2024-02-01',
      endDate: '2024-04-01',
      status: 'Active',
      totalInterest: '118.36'
    },
    {
      id: 3,
      asset: 'BUSD',
      amount: '2,500.00',
      collateral: 'BNB',
      collateralAmount: '12.5',
      interestRate: '9.1%',
      duration: '14 days',
      startDate: '2024-02-10',
      endDate: '2024-02-24',
      status: 'Repaid Early',
      totalInterest: '8.73'
    }
  ]

  const lendingHistory = [
    {
      id: 1,
      asset: 'USDT',
      amount: '15,000.00',
      interestRate: '6.8%',
      duration: '45 days',
      borrower: '0x1234...5678',
      startDate: '2024-01-20',
      endDate: '2024-03-05',
      status: 'Completed',
      totalEarned: '126.03'
    },
    {
      id: 2,
      asset: 'USDC',
      amount: '8,000.00',
      interestRate: '7.5%',
      duration: '90 days',
      borrower: '0x9876...4321',
      startDate: '2024-02-05',
      endDate: '2024-05-05',
      status: 'Active',
      totalEarned: '147.95'
    },
    {
      id: 3,
      asset: 'DAI',
      amount: '5,500.00',
      interestRate: '8.2%',
      duration: '30 days',
      borrower: '0x5555...7777',
      startDate: '2024-02-15',
      endDate: '2024-03-16',
      status: 'Active',
      totalEarned: '37.15'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-500 bg-green-100'
      case 'Completed':
        return 'text-blue-500 bg-blue-100'
      case 'Repaid Early':
        return 'text-purple-500 bg-purple-100'
      case 'Overdue':
        return 'text-red-500 bg-red-100'
      default:
        return 'text-gray-500 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Loan History
          </h1>
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Track your borrowing and lending activities
          </p>
        </div>
        
        {/* Export Button */}
        <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors">
          <i className="fas fa-download mr-2"></i>
          Export History
        </button>
      </div>

      {/* Filters */}
      <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Time Period
            </label>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border text-sm ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option value="all">All Time</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg border text-sm ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="repaid">Repaid Early</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>
      </div>

      {/* History Tabs */}
      <div className="flex space-x-1 p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
        <button
          onClick={() => setHistoryTab('borrowing')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            historyTab === 'borrowing'
              ? 'bg-yellow-500 text-black'
              : theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <i className="fas fa-hand-holding-usd mr-2"></i>
          Borrowing History
        </button>
        <button
          onClick={() => setHistoryTab('lending')}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            historyTab === 'lending'
              ? 'bg-yellow-500 text-black'
              : theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <i className="fas fa-piggy-bank mr-2"></i>
          Lending History
        </button>
      </div>

      {/* History Table */}
      <div className={`rounded-lg border overflow-hidden ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Asset
                </th>
                <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Amount
                </th>
                {historyTab === 'borrowing' && (
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Collateral
                  </th>
                )}
                <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Interest Rate
                </th>
                <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Duration
                </th>
                <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Period
                </th>
                <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Status
                </th>
                <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {historyTab === 'borrowing' ? 'Interest Paid' : 'Interest Earned'}
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {(historyTab === 'borrowing' ? borrowingHistory : lendingHistory).map((item) => (
                <tr key={item.id} className={`hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.asset}
                  </td>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {item.amount}
                  </td>
                  {historyTab === 'borrowing' && (
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {item.collateralAmount} {item.collateral}
                    </td>
                  )}
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {item.interestRate}
                  </td>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {item.duration}
                  </td>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {item.startDate} - {item.endDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    {historyTab === 'borrowing' ? item.totalInterest : item.totalEarned}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Total {historyTab === 'borrowing' ? 'Borrowed' : 'Lent'}
          </h3>
          <p className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            ${historyTab === 'borrowing' ? '17,500.00' : '28,500.00'}
          </p>
        </div>
        
        <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Total {historyTab === 'borrowing' ? 'Interest Paid' : 'Interest Earned'}
          </h3>
          <p className={`text-xl font-bold ${historyTab === 'borrowing' ? 'text-red-500' : 'text-green-500'}`}>
            ${historyTab === 'borrowing' ? '162.02' : '311.13'}
          </p>
        </div>
        
        <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Active {historyTab === 'borrowing' ? 'Loans' : 'Lendings'}
          </h3>
          <p className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {historyTab === 'borrowing' ? '1' : '2'}
          </p>
        </div>
        
        <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Average Rate
          </h3>
          <p className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {historyTab === 'borrowing' ? '8.3%' : '7.5%'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoanHistory
