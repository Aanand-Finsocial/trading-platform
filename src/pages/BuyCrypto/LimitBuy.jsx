import React, { useState } from "react";
import BuyCryptoFooter from "./CryptoNavigation/BuyCryptoFooter";
import BuyCryptoNavigation from "./CryptoNavigation/BuyCryptoNavigation";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import Footer from "../../components/Footer/Footer";

const LimitBuy = () => {
  const [spend, setSpend] = useState("");
  const [receive, setReceive] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [targetPrice, setTargetPrice] = useState("");
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor, buttonBg } = themeColors(theme);

  const currency = ["USD", "INR", "AED", "AMD", "ATOM", "ETH", "BTC", "XRP"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Limit buy order submitted:", { spend, receive, fromCurrency, toCurrency, targetPrice });
  };

  return (
    <>
      <BuyCryptoNavigation />
      <div className={`min-h-screen ${bgColor} ${textColor} font-sans pt-16 sm:pt-20 lg:pt-24`}>
        {/* Mobile heading */}
        <div className="lg:hidden px-4 pt-4 pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Limit Buy
          </h1>
          <p className={`text-center ${smTextColor} text-sm sm:text-base`}>
            Buy crypto at your preferred target price
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Form Section - Mobile First */}
            <div className="w-full lg:w-1/2 lg:order-2">
              <div className={`rounded-2xl border ${borderColor} overflow-hidden shadow-lg`}>
                {/* Form Header */}
                <div className={`${bgColor} p-4 sm:p-6 border-b ${borderColor}`}>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Buy with Target Price
                  </h3>
                  <p className={`${smTextColor} text-sm`}>
                    Set your preferred price and we'll execute when the market reaches it
                  </p>
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

                    {/* Target Price Input */}
                    <div className={`flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${borderColor} transition-all duration-200 focus-within:border-blue-500`}>
                      <label 
                        htmlFor="target-price-input" 
                        className={`text-sm ${smTextColor} mb-1`}
                      >
                        Target Price (per {toCurrency})
                      </label>
                      <div className="flex items-center justify-between gap-2">
                        <input
                          id="target-price-input"
                          type="number"
                          placeholder="Enter target price"
                          value={targetPrice}
                          onChange={(e) => setTargetPrice(e.target.value)}
                          className={`flex-1 outline-none text-xl sm:text-2xl ${textColor} ${bgColor} placeholder-gray-500 min-w-0`}
                        />
                        <span className={`text-base sm:text-xl font-medium ${textColor}`}>
                          {fromCurrency}
                        </span>
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
                        Receive (Estimated)
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

                    {/* Order Summary */}
                    <div className={`p-3 sm:p-4 rounded-xl border ${borderColor} ${bgColor}`}>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Order Summary</h4>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span className={smTextColor}>Order Type</span>
                          <span className={textColor}>Limit Buy</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={smTextColor}>Current Price</span>
                          <span className={textColor}>1 {toCurrency} = 0.012 {fromCurrency}</span>
                        </div>
                        {targetPrice && (
                          <div className="flex justify-between">
                            <span className={smTextColor}>Target Price</span>
                            <span className="text-blue-400">{targetPrice} {fromCurrency}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`w-full ${buttonBg} text-black font-semibold py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
                    >
                      Place Limit Order
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="w-full lg:w-1/2 lg:order-1 flex flex-col gap-6 lg:gap-8">
              {/* Desktop heading */}
              <div className="hidden lg:block">
                <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
                  Limit Buy
                </h1>
                <p className={`${smTextColor} text-lg`}>
                  Set your preferred price and buy when the market reaches it
                </p>
              </div>
              
              {/* Buy the Dip Card */}
              <div className={`p-4 sm:p-6 rounded-2xl border ${borderColor} shadow-lg`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <i className="fas fa-chart-line text-white text-lg sm:text-xl"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Buy the Dip</h4>
                    <p className={`${smTextColor} text-sm sm:text-base leading-relaxed`}>
                      Place a limit buy order to purchase crypto at your preferred target price. 
                      Perfect for catching market dips and dollar-cost averaging strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className={`p-4 sm:p-6 rounded-2xl border ${borderColor} shadow-lg`}>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Limit Order Features
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-green-600 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm sm:text-base">Automatic Execution</h5>
                      <p className={`${smTextColor} text-xs sm:text-sm`}>
                        Order executes automatically when target price is reached
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-shield-alt text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm sm:text-base">Price Protection</h5>
                      <p className={`${smTextColor} text-xs sm:text-sm`}>
                        Never pay more than your specified target price
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-calendar-alt text-purple-600 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm sm:text-base">No Expiry</h5>
                      <p className={`${smTextColor} text-xs sm:text-sm`}>
                        Order remains active until executed or cancelled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Stats for larger screens */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${borderColor}`}>
                  <h5 className="font-semibold mb-2 text-sm">24h High</h5>
                  <p className="text-xl sm:text-2xl font-bold text-green-400">$107,890</p>
                  <p className={`${smTextColor} text-xs`}>+2.4% from yesterday</p>
                </div>
                <div className={`p-4 rounded-xl border ${borderColor}`}>
                  <h5 className="font-semibold mb-2 text-sm">24h Low</h5>
                  <p className="text-xl sm:text-2xl font-bold text-red-400">$105,230</p>
                  <p className={`${smTextColor} text-xs`}>Support level</p>
                </div>
              </div>

              {/* Trading Tips */}
              <div className={`p-4 sm:p-6 rounded-2xl border ${borderColor} bg-gradient-to-r from-blue-50/10 to-purple-50/10`}>
                <h4 className="font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                  <i className="fas fa-lightbulb text-yellow-500"></i>
                  Trading Tips
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className={`${smTextColor} flex items-start gap-2`}>
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Set realistic target prices based on market analysis</span>
                  </li>
                  <li className={`${smTextColor} flex items-start gap-2`}>
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Consider using multiple small orders instead of one large order</span>
                  </li>
                  <li className={`${smTextColor} flex items-start gap-2`}>
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Monitor market trends and adjust your strategy accordingly</span>
                  </li>
                </ul>
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

export default LimitBuy;
