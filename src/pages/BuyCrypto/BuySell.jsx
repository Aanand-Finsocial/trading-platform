import React, { useState } from "react";
import BuyCryptoFooter from "./CryptoNavigation/BuyCryptoFooter";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import BuyCryptoNavigation from "./CryptoNavigation/BuyCryptoNavigation";
import Footer from "../../components/Footer/Footer";

const BuySell = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [spend, setSpend] = useState("");
  const [receive, setReceive] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");

  // TODO
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };
  const { theme } = useTheme();
  const { buttonBg, smTextColor, textColor, bgColor, borderColor } =
    themeColors(theme);
  const currency = ["USD", "INR", "AED", "AMD", "ATOM", "ETH", "BTC", "XRP"];
  
  return (
    <>
      <BuyCryptoNavigation />
      <div className={`min-h-screen ${bgColor} font-sans pt-16 sm:pt-20 lg:pt-24`}>
        {/* Main heading for mobile */}
        <div className="lg:hidden px-4 pt-4 pb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center">
            Buy {toCurrency} with {fromCurrency}
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Buy/Sell Form - Mobile First */}
            <div className="w-full lg:w-1/2 lg:order-2">
              <div className={`rounded-2xl border ${borderColor} overflow-hidden shadow-lg`}>
                {/* Tabs */}
                <div className="grid grid-cols-2">
                  <button
                    onClick={() => setActiveTab("buy")}
                    className={`py-4 sm:py-6 text-lg sm:text-xl font-semibold transition-all duration-300 ${
                      activeTab === "buy"
                        ? "bg-[#0B0E11] text-white"
                        : `${bgColor} text-gray-400 hover:text-gray-300`
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setActiveTab("sell")}
                    className={`py-4 sm:py-6 text-lg sm:text-xl font-semibold transition-all duration-300 ${
                      activeTab === "sell"
                        ? "bg-[#0B0E11] text-white"
                        : `${bgColor} text-gray-400 hover:text-gray-300`
                    }`}
                  >
                    Sell
                  </button>
                </div>

                {/* Form Content */}
                <div className={`${bgColor} p-4 sm:p-6`}>
                  <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    {/* Spend Input */}
                    <div className={`flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${borderColor} transition-all duration-200 focus-within:border-blue-500`}>
                      <label 
                        htmlFor="spend-input" 
                        className={`text-sm ${smTextColor} mb-1`}
                      >
                        Spend
                      </label>
                      <div className="flex items-center justify-between gap-2">
                        <input
                          id="spend-input"
                          type="number"
                          placeholder="0 - 1,660,000"
                          value={spend}
                          onChange={(e) => setSpend(e.target.value)}
                          className={`flex-1 outline-none text-xl sm:text-2xl ${textColor} ${bgColor} placeholder-gray-500 min-w-0`}
                        />
                        <select
                          name="fromCurrency"
                          id="fromCurrency"
                          onChange={(e) => setFromCurrency(e.target.value)}
                          value={fromCurrency}
                          className={`outline-none text-base sm:text-xl font-medium ${bgColor} ${textColor} cursor-pointer hover:text-blue-400 transition-colors`}
                        >
                          {currency.map((curr) => (
                            <option
                              key={curr}
                              value={curr}
                              className="bg-gray-900 text-white"
                            >
                              {curr}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Exchange Icon */}
                    <div className="flex justify-center">
                      <div className={`p-2 rounded-full border ${borderColor} ${bgColor} hover:border-blue-500 transition-colors cursor-pointer`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </div>

                    {/* Receive Input */}
                    <div className={`flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${borderColor} transition-all duration-200 focus-within:border-blue-500`}>
                      <label 
                        htmlFor="receive-input" 
                        className={`text-sm ${smTextColor} mb-1`}
                      >
                        Receive
                      </label>
                      <div className="flex items-center justify-between gap-2">
                        <input
                          id="receive-input"
                          type="number"
                          placeholder="0"
                          value={receive}
                          onChange={(e) => setReceive(e.target.value)}
                          className={`flex-1 outline-none text-xl sm:text-2xl ${textColor} ${bgColor} placeholder-gray-500 min-w-0`}
                        />
                        <select
                          name="toCurrency"
                          id="toCurrency"
                          value={toCurrency}
                          onChange={(e) => setToCurrency(e.target.value)}
                          className={`outline-none text-base sm:text-xl font-medium ${bgColor} ${textColor} cursor-pointer hover:text-blue-400 transition-colors`}
                        >
                          {currency.map((curr) => (
                            <option
                              key={curr}
                              value={curr}
                              className="bg-gray-900 text-white"
                            >
                              {curr}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Exchange Rate Info */}
                    <div className={`p-3 rounded-xl border ${borderColor} ${bgColor}`}>
                      <div className="flex justify-between items-center text-sm">
                        <span className={smTextColor}>Exchange Rate</span>
                        <span className={textColor}>1 {fromCurrency} = 0.012 {toCurrency}</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`w-full ${buttonBg} text-black font-semibold py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
                    >
                      Verify Identity
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Hot Cryptos Section */}
            <div className="w-full lg:w-1/2 lg:order-1 flex flex-col gap-6 lg:gap-8">
              {/* Desktop heading */}
              <h1 className="hidden lg:block text-3xl xl:text-4xl 2xl:text-5xl font-medium">
                Buy {toCurrency} with {fromCurrency}
              </h1>
              
              <div className={`p-4 sm:p-6 rounded-2xl border ${borderColor} shadow-lg`}>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Hot Cryptos
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  
                  <CryptoItem
                    symbol="BTC"
                    name="Bitcoin"
                    price="$107,444.69"
                    change={+1.81}
                    color="orange"
                  />
                  <CryptoItem
                    symbol="ETH"
                    name="Ethereum"
                    price="$2,536.10"
                    change={+1.17}
                    color="indigo"
                  />
                  <CryptoItem
                    symbol="XRP"
                    name="Ripple"
                    price="$2.26"
                    change={+2.03}
                    color="gray"
                  />
                  <CryptoItem
                    symbol="TRX"
                    name="TRON"
                    price="$0.282"
                    change={-1.26}
                    color="red"
                  />
                </div>
              </div>

              {/* Additional Info Cards for larger screens */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${borderColor}`}>
                  <h3 className="font-semibold mb-2">24h Volume</h3>
                  <p className="text-2xl font-bold text-green-400">$2.1B</p>
                </div>
                <div className={`p-4 rounded-xl border ${borderColor}`}>
                  <h3 className="font-semibold mb-2">Market Cap</h3>
                  <p className="text-2xl font-bold text-blue-400">$1.8T</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <BuyCryptoFooter fromCurrency={fromCurrency} toCurrency={toCurrency} />
      </div>
      <Footer />
    </>
  );
};

// Enhanced Crypto item component
const CryptoItem = ({ symbol, name, price, change, color }) => {
  const changeColor = change >= 0 ? "text-green-400" : "text-red-500";
  const { theme } = useTheme();
  const { borderColor, bgColor } = themeColors(theme);
  
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl border ${borderColor} hover:border-blue-500/30 transition-all duration-200 cursor-pointer hover:transform hover:scale-[1.02]`}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-${color}-500 flex-shrink-0 flex items-center justify-center`}>
          <span className="text-white font-bold text-xs sm:text-sm">{symbol.charAt(0)}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-sm sm:text-base">{symbol}</div>
          <div className="text-xs sm:text-sm text-gray-400 truncate">{name}</div>
        </div>
      </div>
      
      <div className="text-right flex-shrink-0">
        <div className="font-semibold text-sm sm:text-base">{price}</div>
        <div className={`text-xs sm:text-sm ${changeColor} flex items-center justify-end gap-1`}>
          <span>{change > 0 ? "▲" : "▼"}</span>
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
