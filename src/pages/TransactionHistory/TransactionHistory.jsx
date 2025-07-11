import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const TransactionHistory = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [activeFilter, setActiveFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("All Time");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const itemsPerPage = 10;

  // Sample transaction data
  const allTransactions = [
    {
      id: "TX001",
      type: "Deposit",
      asset: "BTC",
      amount: 0.5,
      status: "Completed",
      date: "2024-01-15",
      time: "14:32:15",
      fee: 0.0005,
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      txHash: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z",
      network: "Bitcoin",
      confirmations: 6,
      usdValue: 21500.00
    },
    {
      id: "TX002",
      type: "Withdrawal",
      asset: "ETH",
      amount: 2.5,
      status: "Processing",
      date: "2024-01-14",
      time: "09:45:22",
      fee: 0.002,
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      txHash: "0xabcdef1234567890abcdef1234567890abcdef1234567890",
      network: "Ethereum",
      confirmations: 2,
      usdValue: 6250.00
    },
    {
      id: "TX003",
      type: "Trade",
      asset: "USDT",
      amount: 1000,
      status: "Completed",
      date: "2024-01-13",
      time: "16:20:10",
      fee: 1.0,
      address: "Internal",
      txHash: "trade_123456789",
      network: "Internal",
      confirmations: null,
      usdValue: 1000.00,
      tradePair: "BTC/USDT"
    },
    {
      id: "TX004",
      type: "Deposit",
      asset: "BNB",
      amount: 10,
      status: "Failed",
      date: "2024-01-12",
      time: "11:15:33",
      fee: 0.01,
      address: "bnb1xyz789abc123def456ghi789jkl012mno345pqr",
      txHash: "failed_transaction_hash",
      network: "BSC",
      confirmations: 0,
      usdValue: 2100.00
    },
    {
      id: "TX005",
      type: "Staking Reward",
      asset: "SOL",
      amount: 0.25,
      status: "Completed",
      date: "2024-01-11",
      time: "08:30:45",
      fee: 0,
      address: "Staking Pool",
      txHash: "stake_reward_001",
      network: "Solana",
      confirmations: null,
      usdValue: 25.75
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-400";
      case "Processing": return "text-yellow-400";
      case "Failed": return "text-red-400";
      case "Pending": return "text-blue-400";
      default: return isDark ? "text-white" : "text-gray-900";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case "Processing":
        return (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
      case "Failed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Deposit":
        return (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        );
      case "Withdrawal":
        return (
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        );
      case "Trade":
        return (
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case "Staking Reward":
        return (
          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Filter transactions
  const filteredTransactions = allTransactions.filter(tx => {
    const matchesType = activeFilter === "All" || tx.type === activeFilter;
    const matchesStatus = statusFilter === "All" || tx.status === statusFilter;
    const matchesSearch = tx.asset.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tx.txHash.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tx.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const TransactionModal = ({ transaction, onClose }) => {
    if (!transaction) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Transaction Details
              </h3>
              <button onClick={onClose} className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Transaction ID</label>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-mono break-all`}>{transaction.id}</div>
                </div>
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Type</label>
                  <div className="flex items-center">
                    {getTypeIcon(transaction.type)}
                    <span className={`ml-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{transaction.type}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Asset</label>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold`}>{transaction.asset}</div>
                </div>
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Amount</label>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold`}>
                    {transaction.amount} {transaction.asset}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Status</label>
                  <div className="flex items-center">
                    <span className={getStatusColor(transaction.status)}>
                      {getStatusIcon(transaction.status)}
                    </span>
                    <span className={`ml-2 ${getStatusColor(transaction.status)}`}>{transaction.status}</span>
                  </div>
                </div>
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>USD Value</label>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>${transaction.usdValue.toFixed(2)}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Date & Time</label>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{transaction.date} {transaction.time}</div>
                </div>
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Network</label>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{transaction.network}</div>
                </div>
              </div>

              <div>
                <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Address</label>
                <div className={`${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} p-3 rounded-lg`}>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-mono text-sm break-all`}>
                    {transaction.address}
                  </div>
                </div>
              </div>

              <div>
                <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Transaction Hash</label>
                <div className={`${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} p-3 rounded-lg flex items-center justify-between`}>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-mono text-sm break-all`}>
                    {transaction.txHash}
                  </div>
                  <button className="ml-2 text-blue-500 hover:opacity-80">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>

              {transaction.confirmations !== null && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Confirmations</label>
                    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {transaction.confirmations}/6
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Fee</label>
                    <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {transaction.fee} {transaction.asset}
                    </div>
                  </div>
                </div>
              )}

              {transaction.tradePair && (
                <div>
                  <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Trading Pair</label>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>{transaction.tradePair}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-[#0B0E11] via-[#1A1D29] to-[#0B0E11] text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'}`}>
      <div className="w-full max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Transaction History</h1>
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-lg ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36] border-[#3B3F46]' : 'bg-white border-gray-200'} border transition-all duration-300`}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Filters */}
        <div className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} p-6 mb-6`}>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Transaction Type Filter */}
            <div className="flex flex-wrap gap-2">
              {["All", "Deposit", "Withdrawal", "Trade", "Staking Reward"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === type
                      ? "bg-yellow-500 text-black"
                      : `${isDark ? 'bg-[#2B2F36] text-gray-300 hover:text-white' : 'bg-gray-100 text-gray-700 hover:text-gray-900'}`
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`px-4 py-2 rounded-lg ${isDark ? 'bg-[#2B2F36] text-white border-[#3B3F46]' : 'bg-gray-100 text-gray-900 border-gray-200'} border`}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
              <option value="Failed">Failed</option>
              <option value="Pending">Pending</option>
            </select>

            {/* Time Filter */}
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className={`px-4 py-2 rounded-lg ${isDark ? 'bg-[#2B2F36] text-white border-[#3B3F46]' : 'bg-gray-100 text-gray-900 border-gray-200'} border`}
            >
              <option value="All Time">All Time</option>
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="Last 3 Months">Last 3 Months</option>
            </select>

            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by asset, hash, or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${isDark ? 'bg-[#2B2F36] text-white border-[#3B3F46]' : 'bg-gray-100 text-gray-900 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              />
              <svg
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} overflow-hidden`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDark ? 'bg-[#2B2F36]' : 'bg-gray-50'}`}>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USD Value</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} divide-y ${isDark ? 'divide-[#3B3F46]' : 'divide-gray-200'}`}>
                {paginatedTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-opacity-50 hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getTypeIcon(tx.type)}
                        <span className={`ml-2 text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {tx.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {tx.asset}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {tx.amount} {tx.asset}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={getStatusColor(tx.status)}>
                          {getStatusIcon(tx.status)}
                        </span>
                        <span className={`ml-2 text-sm ${getStatusColor(tx.status)}`}>
                          {tx.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div>{tx.date}</div>
                        <div className="text-xs">{tx.time}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        ${tx.usdValue.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => setSelectedTransaction(tx)}
                        className="text-blue-500 hover:opacity-80 text-sm font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-700 flex items-center justify-between">
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length} results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${page === currentPage ? 'bg-yellow-500 text-black' : `${isDark ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Transaction Details Modal */}
        <TransactionModal 
          transaction={selectedTransaction} 
          onClose={() => setSelectedTransaction(null)} 
        />
      </div>
    </div>
  );
};

export default TransactionHistory;
