import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const Funding = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState("deposit");
  const [selectedCurrency, setSelectedCurrency] = useState("BTC");
  const [selectedNetwork, setSelectedNetwork] = useState("Bitcoin");
  const [paymentMethod, setPaymentMethod] = useState("crypto");
  const [amount, setAmount] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [historyFilter, setHistoryFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("1 Month");
  const [showMobileCryptoList, setShowMobileCryptoList] = useState(false);

  // Sample crypto data
  const cryptoOptions = [
    { symbol: "BTC", name: "Bitcoin", networks: ["Bitcoin"], balance: 0.0021, icon: "₿", color: "bg-orange-500" },
    { symbol: "ETH", name: "Ethereum", networks: ["Ethereum", "BSC"], balance: 0.15, icon: "⟠", color: "bg-blue-500" },
    { symbol: "USDT", name: "Tether", networks: ["Ethereum", "BSC", "TRON"], balance: 120.45, icon: "₮", color: "bg-green-500" },
    { symbol: "BNB", name: "BNB", networks: ["BSC"], balance: 3.2, icon: "Ⓑ", color: "bg-yellow-500" },
    { symbol: "SOL", name: "Solana", networks: ["Solana"], balance: 10.75, icon: "◎", color: "bg-purple-500" },
  ];

  // Sample transaction history
  const transactions = [
    { 
      id: "TX123456789", 
      type: "Deposit", 
      asset: "BTC", 
      amount: 0.0025, 
      status: "Completed", 
      time: "2023-11-20 14:32", 
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", 
      fee: 0.0002,
      txid: "3a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u"
    },
    { 
      id: "TX123456788", 
      type: "Withdrawal", 
      asset: "ETH", 
      amount: 0.5, 
      status: "Completed", 
      time: "2023-11-15 09:45", 
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", 
      fee: 0.002,
      txid: "0xabcdef1234567890abcdef1234567890abcdef1234"
    },
    { 
      id: "TX123456787", 
      type: "Deposit", 
      asset: "USDT", 
      amount: 100, 
      status: "Processing", 
      time: "2023-11-21 11:27", 
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", 
      fee: 1,
      txid: "0x7890abcdef1234567890abcdef1234567890abcdef"
    },
    { 
      id: "TX123456786", 
      type: "Withdrawal", 
      asset: "BTC", 
      amount: 0.01, 
      status: "Rejected", 
      time: "2023-11-10 17:15", 
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", 
      fee: 0.0001,
      txid: "4a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-400";
      case "Processing": return "text-yellow-400";
      case "Rejected": return "text-red-500";
      default: return isDark ? "text-white" : "text-gray-900";
    }
  };

  const getCurrentCrypto = () => {
    return cryptoOptions.find(crypto => crypto.symbol === selectedCurrency) || cryptoOptions[0];
  };

  const getNetworkOptions = () => {
    const crypto = getCurrentCrypto();
    return crypto ? crypto.networks : [];
  };

  const handleCryptoSelect = (symbol) => {
    setSelectedCurrency(symbol);
    const crypto = cryptoOptions.find(c => c.symbol === symbol);
    setSelectedNetwork(crypto.networks[0]);
  };

  const handleNetworkSelect = (network) => {
    setSelectedNetwork(network);
  };

  const renderDepositContent = () => {
    return (
      <div className="mt-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Column - Crypto Selection */}
          <div className="order-2 xl:order-1">
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg font-medium mb-2`}>Select Coin</h3>
            
            {/* Mobile Crypto Selector */}
            <div className="block xl:hidden mb-4">
              <button
                onClick={() => setShowMobileCryptoList(!showMobileCryptoList)}
                className={`w-full p-4 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 ${getCurrentCrypto().color} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-bold text-sm">{getCurrentCrypto().icon}</span>
                  </div>
                  <div className="text-left">
                    <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>{getCurrentCrypto().name}</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{getCurrentCrypto().symbol}</div>
                  </div>
                </div>
                <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'} transform transition-transform ${showMobileCryptoList ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showMobileCryptoList && (
                <div className={`mt-2 p-2 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} max-h-60 overflow-y-auto`}>
                  {cryptoOptions.map((crypto) => (
                    <div 
                      key={crypto.symbol} 
                      onClick={() => {
                        handleCryptoSelect(crypto.symbol);
                        setShowMobileCryptoList(false);
                      }}
                      className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedCurrency === crypto.symbol ? (isDark ? 'bg-[#2B2F36]' : 'bg-gray-100') : 'hover:bg-opacity-30 hover:bg-gray-700'}`}
                    >
                      <div className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold text-sm">{crypto.icon}</span>
                      </div>
                      <div className="flex-grow">
                        <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>{crypto.name}</div>
                        <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs`}>{crypto.symbol}</div>
                      </div>
                      <div className="text-right">
                        <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>{crypto.balance}</div>
                        <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs`}>Available</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Crypto List */}
            <div className={`hidden xl:block p-4 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} mb-6`}>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search coin" 
                  className={`w-full p-3 ${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} rounded-lg ${isDark ? 'text-white' : 'text-gray-900'} outline-none text-sm`} 
                />
                <svg 
                  className={`absolute top-3 right-3 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} 
                  fill="none"
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="mt-4 max-h-64 overflow-y-auto">
                {cryptoOptions.map((crypto) => (
                  <div 
                    key={crypto.symbol} 
                    onClick={() => handleCryptoSelect(crypto.symbol)}
                    className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedCurrency === crypto.symbol ? (isDark ? 'bg-[#2B2F36]' : 'bg-gray-100') : 'hover:bg-opacity-30 hover:bg-gray-700'}`}
                  >
                    <div className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center mr-3`}>
                      <span className="text-white font-bold">{crypto.icon}</span>
                    </div>
                    <div className="flex-grow">
                      <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>{crypto.name}</div>
                      <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{crypto.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>{crypto.balance}</div>
                      <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Available</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg font-medium mb-2`}>Network</h3>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {getNetworkOptions().map(network => (
                <div 
                  key={network}
                  onClick={() => handleNetworkSelect(network)}
                  className={`p-3 lg:p-4 border rounded-lg cursor-pointer transition-all touch-manipulation ${selectedNetwork === network 
                    ? 'border-2 border-yellow-500' 
                    : (isDark ? 'border-[#3B3F46] hover:border-yellow-500/50' : 'border-gray-200 hover:border-yellow-500/50')}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-2 sm:mb-0">
                      <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm lg:text-base`}>{network}</div>
                      <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm`}>
                        Estimated arrival: 1 network confirmation
                      </div>
                    </div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm`}>
                      <div>Fee: 0</div>
                      <div>Min Deposit: 0.0001 {selectedCurrency}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Deposit Info */}
          <div className="order-1 xl:order-2">
            <div className={`p-4 lg:p-6 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg lg:text-xl font-medium mb-4`}>Deposit {selectedCurrency}</h3>
              
              <div className="mb-6">
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1 text-sm`}>Address</div>
                <div className={`flex items-center ${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} p-3 lg:p-4 rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} overflow-x-auto whitespace-nowrap flex-grow text-xs lg:text-sm`}>
                    bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                  </div>
                  <button className="ml-2 text-blue-500 hover:opacity-80 p-1 touch-manipulation">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2 text-sm`}>QR Code</div>
                <div className="flex justify-center p-4 rounded-lg bg-white">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-gray-800 text-xs lg:text-sm">QR Code</div>
                  </div>
                </div>
              </div>

              <div className={`${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} p-3 lg:p-4 rounded-lg mb-4`}>
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm mb-1`}>Minimum Deposit</div>
                <div className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm lg:text-base`}>0.0001 {selectedCurrency}</div>
              </div>

              <div className={`${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} p-3 lg:p-4 rounded-lg`}>
                <div className="text-yellow-400 text-xs lg:text-sm font-medium">Important</div>
                <ul className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm mt-2 list-disc pl-4 space-y-1`}>
                  <li>Send only {selectedCurrency} to this deposit address.</li>
                  <li>Ensure the network is {selectedNetwork}.</li>
                  <li>Do not send NFTs to this address.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderWithdrawContent = () => {
    return (
      <div className="mt-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Column - Crypto Selection */}
          <div className="order-2 xl:order-1">
            {/* ...existing code for crypto selection with mobile responsive updates... */}
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg font-medium mb-2`}>Select Coin</h3>
            
            {/* Mobile Crypto Selector */}
            <div className="block xl:hidden mb-4">
              <button
                onClick={() => setShowMobileCryptoList(!showMobileCryptoList)}
                className={`w-full p-4 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 ${getCurrentCrypto().color} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-bold text-sm">{getCurrentCrypto().icon}</span>
                  </div>
                  <div className="text-left">
                    <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>{getCurrentCrypto().name}</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{getCurrentCrypto().symbol}</div>
                  </div>
                </div>
                <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'} transform transition-transform ${showMobileCryptoList ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showMobileCryptoList && (
                <div className={`mt-2 p-2 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} max-h-60 overflow-y-auto`}>
                  {cryptoOptions.map((crypto) => (
                    <div 
                      key={crypto.symbol} 
                      onClick={() => {
                        handleCryptoSelect(crypto.symbol);
                        setShowMobileCryptoList(false);
                      }}
                      className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedCurrency === crypto.symbol ? (isDark ? 'bg-[#2B2F36]' : 'bg-gray-100') : 'hover:bg-opacity-30 hover:bg-gray-700'}`}
                    >
                      <div className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold text-sm">{crypto.icon}</span>
                      </div>
                      <div className="flex-grow">
                        <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>{crypto.name}</div>
                        <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs`}>{crypto.symbol}</div>
                      </div>
                      <div className="text-right">
                        <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>{crypto.balance}</div>
                        <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs`}>Available</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Crypto List */}
            <div className={`hidden xl:block p-4 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} mb-6`}>
              {/* ...existing desktop crypto list code... */}
            </div>

            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg font-medium mb-2`}>Network</h3>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {getNetworkOptions().map(network => (
                <div 
                  key={network}
                  onClick={() => handleNetworkSelect(network)}
                  className={`p-3 lg:p-4 border rounded-lg cursor-pointer transition-all touch-manipulation ${selectedNetwork === network 
                    ? 'border-2 border-yellow-500' 
                    : (isDark ? 'border-[#3B3F46] hover:border-yellow-500/50' : 'border-gray-200 hover:border-yellow-500/50')}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-2 sm:mb-0">
                      <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm lg:text-base`}>{network}</div>
                      <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm`}>
                        Estimated arrival: 15 network confirmations
                      </div>
                    </div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm`}>
                      <div>Fee: {selectedCurrency === 'BTC' ? '0.0005' : '0.005'} {selectedCurrency}</div>
                      <div>Min Withdrawal: 0.001 {selectedCurrency}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Withdrawal Form */}
          <div className="order-1 xl:order-2">
            <div className={`p-4 lg:p-6 ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
              <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg lg:text-xl font-medium mb-4`}>Withdraw {selectedCurrency}</h3>
              
              <div className="mb-4">
                <label className={`block ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1 text-sm`}>
                  Address
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={addressInput}
                    onChange={(e) => setAddressInput(e.target.value)}
                    placeholder={`Enter ${selectedCurrency} address`}
                    className={`w-full p-3 lg:p-3 ${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} rounded-lg ${isDark ? 'text-white' : 'text-gray-900'} outline-none border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} text-sm lg:text-base pr-16`} 
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 px-2 py-1 text-xs lg:text-sm touch-manipulation">
                    Paste
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <label className={`block ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1 text-sm`}>
                  Amount
                </label>
                <div className="relative flex items-center">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className={`w-full p-3 lg:p-3 ${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} rounded-lg ${isDark ? 'text-white' : 'text-gray-900'} outline-none border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} text-sm lg:text-base pr-16`} 
                  />
                  <button className="absolute right-3 text-yellow-400 px-2 py-1 text-xs lg:text-sm touch-manipulation">
                    MAX
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-1 space-y-1 sm:space-y-0">
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm`}>
                    Available: {getCurrentCrypto()?.balance} {selectedCurrency}
                  </span>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm`}>
                    ≈ ${(getCurrentCrypto()?.balance * 30000).toFixed(2)} USD
                  </span>
                </div>
              </div>

              <div className={`${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} p-3 lg:p-4 rounded-lg mb-4`}>
                <div className="flex justify-between mb-1">
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Fee</span>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm`}>
                    {selectedCurrency === 'BTC' ? '0.0005' : '0.005'} {selectedCurrency}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>You will receive</span>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm`}>
                    {amount ? (parseFloat(amount) - (selectedCurrency === 'BTC' ? 0.0005 : 0.005)).toFixed(6) : '0'} {selectedCurrency}
                  </span>
                </div>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 lg:py-3 rounded-lg transition-colors text-sm lg:text-base touch-manipulation">
                Withdraw
              </button>

              <div className={`${isDark ? 'bg-[#1E2329]' : 'bg-gray-50'} p-3 lg:p-4 rounded-lg mt-4`}>
                <div className="text-yellow-400 text-xs lg:text-sm font-medium">Important</div>
                <ul className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm mt-2 list-disc pl-4 space-y-1`}>
                  <li>Double check the address before confirming withdrawal.</li>
                  <li>Withdrawals cannot be cancelled once submitted.</li>
                  <li>Your withdrawal request may be subject to review.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderHistoryContent = () => {
    const filteredTransactions = transactions.filter(tx => {
      if (historyFilter === "All") return true;
      return tx.type === historyFilter;
    });

    return (
      <div className="mt-6">
        <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setHistoryFilter("All")}
              className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base touch-manipulation ${historyFilter === "All" 
                ? "bg-yellow-500 text-black" 
                : `${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36] text-white' : 'bg-white text-gray-900'} border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}`}
            >
              All
            </button>
            <button 
              onClick={() => setHistoryFilter("Deposit")}
              className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base touch-manipulation ${historyFilter === "Deposit" 
                ? "bg-yellow-500 text-black" 
                : `${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36] text-white' : 'bg-white text-gray-900'} border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}`}
            >
              Deposits
            </button>
            <button 
              onClick={() => setHistoryFilter("Withdrawal")}
              className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base touch-manipulation ${historyFilter === "Withdrawal" 
                ? "bg-yellow-500 text-black" 
                : `${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36] text-white' : 'bg-white text-gray-900'} border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}`}
            >
              Withdrawals
            </button>
          </div>
          <div className="relative">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className={`appearance-none ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} rounded-lg px-3 lg:px-4 py-2 pr-8 lg:pr-10 ${isDark ? 'text-white' : 'text-gray-900'} text-sm lg:text-base`}
            >
              <option>1 Day</option>
              <option>1 Week</option>
              <option>1 Month</option>
              <option>3 Months</option>
            </select>
            <svg
              className={`absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} pointer-events-none`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {filteredTransactions.map((tx) => (
            <div key={tx.id} className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} p-4`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>{tx.type} {tx.asset}</div>
                  <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{tx.time}</div>
                </div>
                <div className="text-right">
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>{tx.amount}</div>
                  <div className={`${getStatusColor(tx.status)} text-sm`}>{tx.status}</div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-600">
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs`}>TxID</span>
                <div className="flex items-center">
                  <span className="text-blue-500 text-xs truncate w-20">{tx.txid}</span>
                  <button className="ml-2 text-blue-500 hover:opacity-80 p-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredTransactions.length === 0 && (
            <div className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} p-8 text-center`}>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No transaction records found</div>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className={`hidden lg:block ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} rounded-lg border ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'} overflow-x-auto`}>
          <table className="min-w-full divide-y divide-gray-700">
            <thead className={`${isDark ? 'bg-[#2B2F36]' : 'bg-gray-50'}`}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TxID</th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36]' : 'bg-white'} divide-y ${isDark ? 'border-[#3B3F46]' : 'border-gray-200'}`}>
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-700 hover:bg-opacity-20">
                  <td className={`px-6 py-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>{tx.time}</td>
                  <td className={`px-6 py-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tx.type}</td>
                  <td className={`px-6 py-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tx.asset}</td>
                  <td className={`px-6 py-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tx.amount}</td>
                  <td className={`px-6 py-4`}>
                    <span className={`${getStatusColor(tx.status)}`}>{tx.status}</span>
                  </td>
                  <td className={`px-6 py-4`}>
                    <div className="flex items-center">
                      <span className="text-blue-500 text-sm truncate w-20">{tx.txid}</span>
                      <button className="ml-2 text-blue-500 hover:opacity-80">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan={6} className={`px-6 py-10 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    No transaction records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch(activeTab) {
      case "deposit": return renderDepositContent();
      case "withdraw": return renderWithdrawContent();
      case "history": return renderHistoryContent();
      default: return renderDepositContent();
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-[#0B0E11] via-[#1A1D29] to-[#0B0E11] text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <h1 className={`text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Wallet & Funding</h1>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className={`p-2 lg:p-2 rounded-lg ${isDark ? 'bg-gradient-to-br from-[#1E2329] to-[#2B2F36] border-[#3B3F46]' : 'bg-white border-gray-200'} border transition-all duration-300 text-sm lg:text-base touch-manipulation`}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
          <div className="flex min-w-max">
            <button
              onClick={() => setActiveTab("deposit")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "deposit" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Deposit
            </button>
            <button
              onClick={() => setActiveTab("withdraw")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "withdraw" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Withdraw
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "history" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Transaction History
            </button>
            <button
              onClick={() => setActiveTab("crypto")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "crypto" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Crypto Convert
            </button>
            <button
              onClick={() => setActiveTab("fiat")}
              className={`pb-4 px-4 lg:px-6 font-medium whitespace-nowrap text-sm lg:text-base touch-manipulation ${activeTab === "fiat" 
                ? `${isDark ? 'text-white' : 'text-gray-900'} border-b-2 border-yellow-500` 
                : (isDark ? 'text-gray-400' : 'text-gray-600')}`}
            >
              Fiat & Spot
            </button>
          </div>
        </div>

        {/* Main content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Funding;
