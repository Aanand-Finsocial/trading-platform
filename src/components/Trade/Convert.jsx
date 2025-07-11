import React, { useState, useEffect } from 'react';
import { useWalletBalance } from "../../hooks/useWalletBalance";
import { ArrowDownIcon, RefreshCwIcon, Wallet, Search, RotateCcw, ArrowUpDown, Download, Filter } from "lucide-react";
import { useTheme, themeColors } from '../../contexts/ThemeContext';

const Convert = () => {
  const { theme } = useTheme();
  const colors = themeColors(theme);
  
  // Use wallet balance hook
  const { isConnected, balances, isLoading, fetchBalances, getExchangeRate, calculateConversion, executeSwap } = useWalletBalance();
  
  const [fromCoin, setFromCoin] = useState("BTC");
  const [toCoin, setToCoin] = useState("ETH");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  
  // Order history state
  const [orderHistory, setOrderHistory] = useState([]);
  const [selectedTab, setSelectedTab] = useState("1D");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Mock order history data - replace with actual API call
  const mockOrderHistory = [
    {
      id: 1,
      tradeDate: "2025-05-26 14:32:18",
      wallet: "0x1234...5678",
      pair: "BTC/ETH",
      type: "Convert",
      from: "0.5 BTC",
      to: "8.25 ETH",
      price: "16.5",
      settlementDate: "2025-05-26 14:33:01",
      status: "Completed"
    },
    {
      id: 2,
      tradeDate: "2025-05-25 10:15:42",
      wallet: "0x1234...5678",
      pair: "ETH/USDT",
      type: "Convert",
      from: "2.0 ETH",
      to: "6,400 USDT",
      price: "3,200",
      settlementDate: "2025-05-25 10:16:15",
      status: "Completed"
    },
    {
      id: 3,
      tradeDate: "2025-05-24 09:22:33",
      wallet: "0x1234...5678",
      pair: "USDC/BTC",
      type: "Convert",
      from: "10,000 USDC",
      to: "0.15 BTC",
      price: "66,666.67",
      settlementDate: "2025-05-24 09:23:05",
      status: "Failed"
    }
  ];
  
  // Refresh balances
  const handleRefreshBalance = () => {
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }
    fetchBalances(localStorage.getItem("walletAddress") || "");
    alert("Balances refreshed");
  };
  
  // New handlers for button functionality
  const handleRefreshHistory = () => {
    // Simulate refreshing order history
    setOrderHistory([...mockOrderHistory]);
    alert("Order history refreshed!");
  };

  const handleExportHistory = () => {
    // Generate CSV data
    const csvData = orderHistory.map(order => [
      order.tradeDate,
      order.wallet,
      order.pair,
      order.type,
      order.from,
      order.to,
      order.price,
      order.settlementDate,
      order.status
    ]);
    
    const csvHeader = ['Trade Date', 'Wallet', 'Pair', 'Type', 'From', 'To', 'Price', 'Settlement Date', 'Status'];
    const csvContent = [csvHeader, ...csvData].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'convert_history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedTab("1D");
    alert("Filters cleared!");
  };

  const handleMaxAmount = () => {
    const availableBalance = balances[fromCoin] || "0";
    setAmount(availableBalance);
  };

  const handlePasteAddress = async () => {
    try {
      const text = await navigator.clipboard.readText();
      // Simple validation for crypto addresses
      if (text.length > 20 && text.length < 100) {
        alert(`Address pasted: ${text.substring(0, 20)}...`);
      } else {
        alert("Invalid address format");
      }
    } catch (err) {
      alert("Failed to paste from clipboard");
    }
  };

  // Update exchange rate and converted amount when inputs change
  useEffect(() => {
    if (amount && !isNaN(parseFloat(amount))) {
      const converted = calculateConversion(fromCoin, toCoin, parseFloat(amount));
      setConvertedAmount(converted.toFixed(6));
    } else {
      setConvertedAmount("");
    }
  }, [fromCoin, toCoin, amount, calculateConversion]);
  
  useEffect(() => {
    // Load order history when component mounts
    // In real app, this would be an API call
    setOrderHistory(mockOrderHistory);
  }, []);
  
  // Handle from coin change
  const handleFromCoinChange = (e) => {
    setFromCoin(e.target.value);
    // Reset amount if changing coin
    setAmount("");
    setConvertedAmount("");
  };
  
  // Handle to coin change
  const handleToCoinChange = (e) => {
    setToCoin(e.target.value);
    // Recalculate converted amount
    if (amount && !isNaN(parseFloat(amount))) {
      const converted = calculateConversion(fromCoin, e.target.value, parseFloat(amount));
      setConvertedAmount(converted.toFixed(6));
    }
  };
  
  // Handle amount change
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    
    if (value && !isNaN(parseFloat(value))) {
      const converted = calculateConversion(fromCoin, toCoin, parseFloat(value));
      setConvertedAmount(converted.toFixed(6));
    } else {
      setConvertedAmount("");
    }
  };
  
  // Handle conversion
  const handleConvert = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }
    
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    
    const availableBalance = parseFloat(balances[fromCoin]);
    if (parseFloat(amount) > availableBalance) {
      alert(`Insufficient ${fromCoin.toUpperCase()} balance`);
      return;
    }
    
    // Get token addresses from backend and execute the swap
    try {
      // Show loading state
      alert("Processing swap...");
      
      // Execute the swap using our hook that connects to the backend
      const result = await executeSwap(fromCoin, toCoin, parseFloat(amount));
      
      if (result && result.success) {
        alert(`Successfully swapped ${result.fromAmount} ${result.fromCoin} to ${result.toAmount.toFixed(6)} ${result.toCoin}`);
        
        // Reset the form
        setAmount("");
        setConvertedAmount("");
      } else {
        alert("Swap failed. Please try again.");
      }
    } catch (error) {
      alert(`Swap error: ${error.message || 'Unknown error'}`);
      console.error("Swap error:", error);
    }
  };
  
  // Swap from and to coins
  const handleSwapCoins = () => {
    const tempCoin = fromCoin;
    setFromCoin(toCoin);
    setToCoin(tempCoin);
    
    // Recalculate if there's an amount
    if (amount && !isNaN(parseFloat(amount))) {
      const converted = calculateConversion(toCoin, tempCoin, parseFloat(amount));
      setConvertedAmount(converted.toFixed(6));
    }
  };
  
  return (
    <div className={`min-h-screen ${colors.bgColor} ${colors.textColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-4 lg:mb-6">
          <h1 className={`text-2xl sm:text-3xl font-bold ${colors.textColor}`}>Convert</h1>
          <div className="flex gap-2">
            <button 
              className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors touch-manipulation"
              onClick={handleExportHistory}
            >
              <Download className="w-4 h-4 mr-1 inline" />
              Export
            </button>
            <button 
              className={`px-3 py-2 ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' : 'bg-gray-600 hover:bg-gray-700 text-white'} rounded-lg text-sm transition-colors touch-manipulation`}
              onClick={handleClearFilters}
            >
              <Filter className="w-4 h-4 mr-1 inline" />
              Clear
            </button>
          </div>
        </div>
        
        {/* Convert Crypto Card */}
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} rounded-lg shadow-xl overflow-hidden ${colors.borderColor} border ${theme === 'light' ? 'hover:border-gray-300' : 'hover:border-[#474d57]'} transition-all duration-300 mb-6 lg:mb-8`}>
          <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#8a2be2] mb-2 lg:mb-3">Convert Crypto</h2>
            <p className={`${colors.smTextColor} mb-4 lg:mb-6 text-sm sm:text-base`}>
              Instantly convert between cryptocurrencies with zero fees
            </p>
            
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-4">
                {/* From Section */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${colors.textColor}`}>From</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select 
                      value={fromCoin}
                      onChange={handleFromCoinChange}
                      className={`${colors.borderColor} border ${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} ${colors.textColor} rounded-lg px-3 lg:px-4 py-3 w-full sm:w-[140px] lg:w-[160px] ${theme === 'light' ? 'hover:border-gray-300 focus:border-[#8a2be2]' : 'hover:border-[#474d57] focus:border-[#8a2be2]'} transition-colors duration-300 outline-none text-sm lg:text-base`}
                    >
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USDT">Tether (USDT)</option>
                      <option value="USDC">USD Coin (USDC)</option>
                    </select>
                    <div className="relative flex-1">
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        className={`w-full ${colors.borderColor} border ${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} ${colors.textColor} rounded-lg px-3 lg:px-4 py-3 pr-16 ${theme === 'light' ? 'hover:border-gray-300 focus:border-[#8a2be2]' : 'hover:border-[#474d57] focus:border-[#8a2be2]'} transition-colors duration-300 outline-none text-sm lg:text-base`}
                        value={amount}
                        onChange={handleAmountChange}
                      />
                      <button 
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-400 px-2 py-1 text-xs lg:text-sm hover:text-yellow-300 transition-colors touch-manipulation"
                        onClick={handleMaxAmount}
                      >
                        MAX
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div className={`text-xs sm:text-sm ${colors.smTextColor}`}>
                      {isConnected ? (
                        <span>Available: {balances[fromCoin]} {fromCoin.toUpperCase()}</span>
                      ) : (
                        <span className="flex items-center">
                          <Wallet className="h-3 w-3 mr-1" /> Connect wallet to see balance
                        </span>
                      )}
                    </div>
                    {isConnected && (
                      <button 
                        className="text-blue-500 text-xs flex items-center self-start sm:self-auto hover:text-blue-400 transition-colors"
                        onClick={handleRefreshBalance}
                        disabled={isLoading}
                      >
                        <RefreshCwIcon className="h-3 w-3 mr-1" />
                        Refresh
                      </button>
                    )}
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-2">
                  <button 
                    className={`rounded-full p-3 ${colors.borderColor} border ${theme === 'light' ? 'bg-white hover:bg-gray-50' : 'bg-[#181a20] hover:bg-[#2b3139]'} ${colors.textColor} hover:border-[#8a2be2] hover:text-[#8a2be2] hover:scale-110 transition-all duration-300 shadow-lg touch-manipulation`}
                    onClick={handleSwapCoins}
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </div>
                
                {/* To Section */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${colors.textColor}`}>To</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select
                      value={toCoin}
                      onChange={handleToCoinChange}
                      className={`${colors.borderColor} border ${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} ${colors.textColor} rounded-lg px-3 lg:px-4 py-3 w-full sm:w-[140px] lg:w-[160px] ${theme === 'light' ? 'hover:border-gray-300 focus:border-[#8a2be2]' : 'hover:border-[#474d57] focus:border-[#8a2be2]'} transition-colors duration-300 outline-none text-sm lg:text-base`}
                    >
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USDT">Tether (USDT)</option>
                      <option value="USDC">USD Coin (USDC)</option>
                    </select>
                    <input 
                      type="number" 
                      placeholder="0.00" 
                      className={`flex-1 ${colors.borderColor} border ${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} ${colors.textColor} rounded-lg px-3 lg:px-4 py-3 focus:border-[#8a2be2] transition-colors duration-300 outline-none text-sm lg:text-base`}
                      value={convertedAmount}
                      readOnly 
                    />
                  </div>
                  <div className={`text-xs sm:text-sm ${colors.smTextColor}`}>
                    {isConnected && (
                      <span>Balance: {balances[toCoin]} {toCoin.toUpperCase()}</span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Exchange Rate */}
              <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-[#181a20]'} p-3 lg:p-4 rounded-lg ${colors.borderColor} border ${theme === 'light' ? 'hover:border-gray-300' : 'hover:border-[#474d57]'} transition-all duration-300 shadow-md`}>
                <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm ${colors.textColor}`}>
                  <span className={colors.smTextColor}>Exchange Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm">1 {fromCoin.toUpperCase()} ≈ {getExchangeRate(fromCoin, toCoin).toFixed(6)} {toCoin.toUpperCase()}</span>
                    <button 
                      className={`text-[#8a2be2] hover:text-[#8a2be2]/80 transition-colors p-1 ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-[#2b3139]'} rounded-full touch-manipulation`}
                      onClick={handleRefreshBalance}
                      disabled={isLoading}
                    >
                      <RefreshCwIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Convert Button */}
              <button 
                className="w-full py-3 lg:py-4 px-6 mt-2 bg-[#8a2be2] hover:bg-[#8a2be2]/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 text-sm lg:text-base touch-manipulation"
                onClick={handleConvert}
                disabled={!isConnected || !amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0}
              >
                {isConnected ? 'Convert Now' : 'Connect Wallet to Convert'}
              </button>
              
              {/* Information */}
              <div className={`text-xs sm:text-sm ${colors.smTextColor} space-y-1`}>
                <p>Zero fees. Conversion is based on current market rates.</p>
                <p>Minimum conversion amount: 0.0001 {fromCoin.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} rounded-lg shadow-xl overflow-hidden ${colors.borderColor} border ${theme === 'light' ? 'hover:border-gray-300' : 'hover:border-[#474d57]'} transition-all duration-300`}>
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4 lg:mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#8a2be2]">Order History</h2>
                <span className={`${theme === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-[#2b3139] text-gray-300'} px-3 py-1 rounded-full text-xs sm:text-sm`}>
                  {orderHistory.length}
                </span>
              </div>
              
              {/* Mobile Filter Toggle */}
              <button 
                className={`lg:hidden self-start ${theme === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-[#2b3139] text-white'} px-4 py-2 rounded-lg text-sm touch-manipulation`}
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                Filters {showMobileFilters ? '▲' : '▼'}
              </button>
              
              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center gap-3">
                <div className={`flex ${theme === 'light' ? 'bg-gray-100' : 'bg-[#2b3139]'} rounded-lg p-1 ${colors.borderColor} border`}>
                  {['1D', '1W', '1M', '3M'].map((tab) => (
                    <button 
                      key={tab}
                      className={`px-3 lg:px-4 py-2 text-xs font-medium ${selectedTab === tab ? "bg-[#8a2be2] text-white" : `${colors.smTextColor} hover:${colors.textColor} ${theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-[#474d57]'}`} rounded-lg transition-all duration-200`}
                      onClick={() => setSelectedTab(tab)}
                    >
                      {tab === '1D' ? '1 Day' : tab === '1W' ? '1 Week' : tab === '1M' ? '1 Month' : '3 Months'}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${colors.smTextColor}`} />
                    <input 
                      placeholder="Search by pair or wallet" 
                      className={`pl-10 h-10 w-[220px] ${colors.borderColor} border ${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} ${colors.textColor} rounded-lg ${theme === 'light' ? 'hover:border-gray-300 focus:border-[#8a2be2]' : 'hover:border-[#474d57] focus:border-[#8a2be2]'} transition-colors duration-300 outline-none text-sm`}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <button 
                    className={`p-2 ${colors.borderColor} border ${theme === 'light' ? 'bg-white' : 'bg-[#181a20]'} ${colors.textColor} rounded-lg ${theme === 'light' ? 'hover:border-gray-300' : 'hover:border-[#474d57]'} hover:text-[#8a2be2] transition-all duration-300`}
                    onClick={handleRefreshHistory}
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showMobileFilters && (
              <div className={`lg:hidden space-y-4 mb-6 p-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-[#2b3139]/30'} rounded-lg`}>
                <div className="flex flex-wrap gap-2">
                  {['1D', '1W', '1M', '3M'].map((tab) => (
                    <button 
                      key={tab}
                      className={`px-3 py-2 text-xs font-medium ${selectedTab === tab ? "bg-[#8a2be2] text-white" : "bg-[#2b3139] text-gray-300"} rounded-lg transition-all duration-200 touch-manipulation`}
                      onClick={() => setSelectedTab(tab)}
                    >
                      {tab === '1D' ? '1 Day' : tab === '1W' ? '1 Week' : tab === '1M' ? '1 Month' : '3 Months'}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input 
                      placeholder="Search by pair or wallet" 
                      className="pl-10 w-full h-10 border border-[#2b3139] bg-[#181a20] text-white rounded-lg focus:border-[#8a2be2] transition-colors duration-300 outline-none text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <button 
                    className="p-2 border border-[#2b3139] bg-[#181a20] text-white rounded-lg hover:text-[#8a2be2] transition-all duration-300 touch-manipulation"
                    onClick={handleRefreshHistory}
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Card View */}
          <div className="block lg:hidden px-4 pb-4">
            <div className="space-y-4">
              {orderHistory.length > 0 ? (
                orderHistory
                  .filter(order => 
                    order.pair.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    order.wallet.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((order) => (
                    <div key={order.id} className={`${theme === 'light' ? 'bg-gray-50' : 'bg-[#2b3139]/30'} rounded-lg p-4 ${colors.borderColor} border ${theme === 'light' ? 'hover:border-gray-300' : 'hover:border-[#474d57]'} transition-all duration-200`}>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-medium text-white text-sm">{order.pair}</div>
                          <div className="text-xs text-gray-400">{order.tradeDate}</div>
                        </div>
                        <span 
                          className={`px-2 py-1 text-xs rounded-md ${
                            order.status === "Completed" 
                              ? "bg-[#0ecb81]/10 text-[#0ecb81] border border-[#0ecb81]/30" 
                              : "bg-[#f6465d]/10 text-[#f6465d] border border-[#f6465d]/30"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <div className="text-gray-400">From</div>
                          <div className="text-white">{order.from}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">To</div>
                          <div className="text-white">{order.to}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Price</div>
                          <div className="text-white">{order.price}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Type</div>
                          <div className="text-white">{order.type}</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-[#2b3139] text-xs">
                        <div className="text-gray-400">Wallet</div>
                        <div className="text-white font-mono">{order.wallet}</div>
                      </div>
                    </div>
                  ))
              ) : (
                <div className={`text-center ${colors.smTextColor} py-8`}>
                  <RotateCcw className="h-8 w-8 mx-auto mb-2 opacity-20" />
                  <p>No order history found</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${colors.borderColor}`}>
                  <th className={`text-left px-5 py-4 text-xs font-medium ${colors.smTextColor} whitespace-nowrap`}>Trade Date</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">Wallet</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">Pair</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">Type</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">From</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">To</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">Price</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">Settlement Date</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.length > 0 ? (
                  orderHistory
                    .filter(order => 
                      order.pair.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      order.wallet.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((order) => (
                      <tr key={order.id} className={`border-b ${colors.borderColor} ${theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-[#2b3139]/30'} transition-all duration-200 ${colors.textColor} group`}>
                        <td className="px-5 py-4 text-sm whitespace-nowrap">{order.tradeDate}</td>
                        <td className="px-5 py-4 text-sm font-mono group-hover:text-[#8a2be2] transition-colors duration-200 whitespace-nowrap">{order.wallet}</td>
                        <td className="px-5 py-4 text-sm font-medium group-hover:text-[#8a2be2] transition-colors duration-200 whitespace-nowrap">{order.pair}</td>
                        <td className="px-5 py-4 text-sm whitespace-nowrap">
                          <span className="px-3 py-1 text-xs border border-[#2b3139] rounded-md group-hover:border-[#474d57] transition-all duration-200">
                            {order.type}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-sm whitespace-nowrap">{order.from}</td>
                        <td className="px-5 py-4 text-sm whitespace-nowrap">{order.to}</td>
                        <td className="px-5 py-4 text-sm whitespace-nowrap">{order.price}</td>
                        <td className="px-5 py-4 text-sm whitespace-nowrap">{order.settlementDate}</td>
                        <td className="px-5 py-4 text-sm whitespace-nowrap">
                          <span 
                            className={`px-3 py-1 text-xs rounded-md ${
                              order.status === "Completed" 
                                ? "bg-[#0ecb81]/10 text-[#0ecb81] border border-[#0ecb81]/30" 
                                : "bg-[#f6465d]/10 text-[#f6465d] border border-[#f6465d]/30"
                            } group-hover:scale-105 transition-transform duration-200`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan={9} className={`p-12 text-center ${colors.smTextColor}`}>
                      <div className="flex flex-col items-center gap-3">
                        <RotateCcw className="h-10 w-10 animate-spin opacity-20" />
                        <p className="text-lg">No order history found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;