import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const AccountStatement = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("30days");
  const [selectedAsset, setSelectedAsset] = useState("All");

  // Sample portfolio data
  const portfolioData = {
    totalBalance: 45678.90,
    totalBalanceChange: 2.45,
    totalPnL: 1234.56,
    totalPnLPercentage: 2.8,
    availableBalance: 12345.67,
    inOrders: 3456.78,
    margins: 8910.12
  };

  // Sample asset balances
  const assetBalances = [
    {
      asset: "BTC",
      icon: "₿",
      color: "bg-orange-500",
      total: 1.25674,
      available: 0.85674,
      inOrders: 0.4,
      usdValue: 32500.45,
      change24h: 3.45,
      percentage: 71.2
    },
    {
      asset: "ETH",
      icon: "⟠",
      color: "bg-blue-500",
      total: 8.567,
      available: 6.567,
      inOrders: 2.0,
      usdValue: 8567.89,
      change24h: -1.23,
      percentage: 18.8
    },
    {
      asset: "USDT",
      icon: "₮",
      color: "bg-green-500",
      total: 2456.78,
      available: 2456.78,
      inOrders: 0,
      usdValue: 2456.78,
      change24h: 0,
      percentage: 5.4
    },
    {
      asset: "BNB",
      icon: "Ⓑ",
      color: "bg-yellow-500",
      total: 12.45,
      available: 8.45,
      inOrders: 4.0,
      usdValue: 2153.77,
      change24h: 2.1,
      percentage: 4.6
    }
  ];

  // Sample transaction history for statements
  const statements = [
    {
      date: "2024-01-15",
      type: "Spot Trading",
      description: "Buy BTC/USDT",
      asset: "BTC",
      amount: 0.5,
      fee: 0.001,
      balance: 1.25674,
      usdValue: 21500.00
    },
    {
      date: "2024-01-14",
      type: "Deposit",
      description: "Crypto Deposit",
      asset: "ETH",
      amount: 2.0,
      fee: 0,
      balance: 8.567,
      usdValue: 5000.00
    },
    {
      date: "2024-01-13",
      type: "Staking Reward",
      description: "Staking Reward",
      asset: "BNB",
      amount: 0.45,
      fee: 0,
      balance: 12.45,
      usdValue: 94.5
    }
  ];

  const getChangeColor = (change) => {
    if (change > 0) return "text-green-400";
    if (change < 0) return "text-red-400";
    return isDark ? "text-gray-400" : "text-gray-600";
  };

  const renderOverview = () => (
    <div className="space-y-4 lg:space-y-6">
      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className={`p-4 lg:p-6 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
          <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1 lg:mb-2`}>Total Balance</div>
          <div className={`text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
            ${portfolioData.totalBalance.toLocaleString()}
          </div>
          <div className={`text-xs lg:text-sm ${getChangeColor(portfolioData.totalBalanceChange)}`}>
            +{portfolioData.totalBalanceChange}% (24h)
          </div>
        </div>

        <div className={`p-4 lg:p-6 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
          <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1 lg:mb-2`}>Total P&L</div>
          <div className={`text-xl lg:text-2xl font-bold ${getChangeColor(portfolioData.totalPnL)} mb-1`}>
            ${portfolioData.totalPnL.toLocaleString()}
          </div>
          <div className={`text-xs lg:text-sm ${getChangeColor(portfolioData.totalPnLPercentage)}`}>
            +{portfolioData.totalPnLPercentage}%
          </div>
        </div>

        <div className={`p-4 lg:p-6 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
          <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1 lg:mb-2`}>Available Balance</div>
          <div className={`text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
            ${portfolioData.availableBalance.toLocaleString()}
          </div>
          <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Free to trade
          </div>
        </div>

        <div className={`p-4 lg:p-6 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
          <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1 lg:mb-2`}>In Orders</div>
          <div className={`text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
            ${portfolioData.inOrders.toLocaleString()}
          </div>
          <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Locked in trades
          </div>
        </div>
      </div>

      {/* Portfolio Allocation Chart */}
      <div className={`p-4 lg:p-6 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
        <h3 className={`text-lg lg:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 lg:mb-6`}>Portfolio Allocation</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Pie Chart Placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <div className="w-full h-full rounded-full border-4 lg:border-8 border-orange-500" style={{background: `conic-gradient(#f97316 0deg ${71.2 * 3.6}deg, #3b82f6 ${71.2 * 3.6}deg ${(71.2 + 18.8) * 3.6}deg, #10b981 ${(71.2 + 18.8) * 3.6}deg ${(71.2 + 18.8 + 5.4) * 3.6}deg, #eab308 ${(71.2 + 18.8 + 5.4) * 3.6}deg 360deg)`}}>
                <div className={`absolute inset-2 lg:inset-4 rounded-full ${isDark ? 'bg-[#1E2329]' : 'bg-white'} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>100%</div>
                    <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asset List */}
          <div className="space-y-3 lg:space-y-4">
            {assetBalances.map((asset) => (
              <div key={asset.asset} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 ${asset.color} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-bold text-sm lg:text-base">{asset.icon}</span>
                  </div>
                  <div>
                    <div className={`font-medium text-sm lg:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{asset.asset}</div>
                    <div className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {asset.total} {asset.asset}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-medium text-sm lg:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    ${asset.usdValue.toLocaleString()}
                  </div>
                  <div className="flex items-center justify-end">
                    <span className={`text-xs lg:text-sm ${getChangeColor(asset.change24h)} mr-2`}>
                      {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
                    </span>
                    <span className={`text-xs lg:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {asset.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBalances = () => (
    <div className="space-y-4 lg:space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        <select
          value={selectedAsset}
          onChange={(e) => setSelectedAsset(e.target.value)}
          className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base ${isDark ? 'bg-[#2B2F36] text-white border-[#3B3F46]' : 'bg-gray-100 text-gray-900 border-gray-200'} border touch-manipulation`}
        >
          <option value="All">All Assets</option>
          {assetBalances.map(asset => (
            <option key={asset.asset} value={asset.asset}>{asset.asset}</option>
          ))}
        </select>
        
        <button className="px-3 lg:px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors text-sm lg:text-base touch-manipulation">
          Export Statement
        </button>
      </div>

      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-4">
        {assetBalances
          .filter(asset => selectedAsset === "All" || asset.asset === selectedAsset)
          .map((asset) => (
          <div key={asset.asset} className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} p-4`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className={`w-10 h-10 ${asset.color} rounded-full flex items-center justify-center mr-3`}>
                  <span className="text-white font-bold">{asset.icon}</span>
                </div>
                <div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{asset.asset}</div>
                  <div className={`text-sm ${getChangeColor(asset.change24h)}`}>
                    {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ${asset.usdValue.toLocaleString()
                  }
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {asset.percentage}%
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-600">
              <div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total</div>
                <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {asset.total}
                </div>
              </div>
              <div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Available</div>
                <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {asset.available}
                </div>
              </div>
              <div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>In Orders</div>
                <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {asset.inOrders}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className={`hidden lg:block ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDark ? 'bg-[#2B2F36]' : 'bg-gray-50'}`}>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Balance</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Orders</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USD Value</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} divide-y ${isDark ? 'divide-[#3B3F46]' : 'divide-gray-200'}`}>
              {assetBalances
                .filter(asset => selectedAsset === "All" || asset.asset === selectedAsset)
                .map((asset) => (
                <tr key={asset.asset} className="hover:bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 ${asset.color} rounded-full flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold text-sm">{asset.icon}</span>
                      </div>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {asset.asset}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {asset.total} {asset.asset}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {asset.available} {asset.asset}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {asset.inOrders} {asset.asset}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      ${asset.usdValue.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getChangeColor(asset.change24h)}>
                      {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStatements = () => (
    <div className="space-y-4 lg:space-y-6">
      {/* Period Filter */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex flex-wrap gap-2">
          {[
            {
              value: "7days",
              label: "7 Days"
            },
            {
              value: "30days",
              label: "30 Days"
            },
            {
              value: "90days",
              label: "90 Days"
            },
            {
              value: "1year",
              label: "1 Year"
            }
          ].map(period => (
            <button
              key={period.value}
              onClick={() => setSelectedPeriod(period.value)}
              className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base touch-manipulation ${
                selectedPeriod === period.value
                  ? "bg-yellow-500 text-black"
                  : `${isDark ? 'bg-[#2B2F36] text-gray-300 hover:text-white' : 'bg-gray-100 text-gray-700 hover:text-gray-900'}`
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button className="px-3 lg:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm lg:text-base touch-manipulation">
            Download PDF
          </button>
          <button className="px-3 lg:px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm lg:text-base touch-manipulation">
            Download CSV
          </button>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-4">
        {statements.map((statement, index) => (
          <div key={index} className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} p-4`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{statement.type}</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{statement.date}</div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {statement.amount} {statement.asset}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  ${statement.usdValue.toLocaleString()}
                </div>
              </div>
            </div>
            
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              {statement.description}
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-600">
              <div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Fee</div>
                <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {statement.fee} {statement.asset}
                </div>
              </div>
              <div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Balance</div>
                <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {statement.balance} {statement.asset}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className={`hidden lg:block ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-xl border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDark ? 'bg-[#2B2F36]' : 'bg-gray-50'}`}>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USD Value</th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} divide-y ${isDark ? 'divide-[#3B3F46]' : 'divide-gray-200'}`}>
              {statements.map((statement, index) => (
                <tr key={index} className="hover:bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {statement.date}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {statement.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {statement.description}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {statement.asset}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {statement.amount} {statement.asset}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {statement.fee} {statement.asset}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {statement.balance} {statement.asset}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      ${statement.usdValue.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case "overview": return renderOverview();
      case "balances": return renderBalances();
      case "statements": return renderStatements();
      default: return renderOverview();
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-[#0B0E11] via-[#1A1D29] to-[#0B0E11] text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 space-y-4 sm:space-y-0">
          <h1 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Account Statement</h1>
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-lg ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36] border-[#3B3F46]' : 'bg-white border-gray-200'} border transition-all duration-300 text-sm lg:text-base touch-manipulation`}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6 lg:mb-8 overflow-x-auto">
          <div className="flex min-w-max">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "overview" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Portfolio Overview
            </button>
            <button
              onClick={() => setActiveTab("balances")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "balances" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Asset Balances
            </button>
            <button
              onClick={() => setActiveTab("statements")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "statements" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Account Statements
            </button>
          </div>
        </div>

        {/* Main content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountStatement;
