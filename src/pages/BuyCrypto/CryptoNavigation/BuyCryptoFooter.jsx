import React, { useState } from "react";
import { themeColors, useTheme } from "../../../contexts/ThemeContext";

const BuyCryptoFooter = ({ fromCurrency, toCurrency }) => {
  const [active, setActive] = useState("1D");
  const [selectedConversion, setSelectedConversion] = useState("toINR");
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor } = themeColors(theme);
  const timestamp = ["1D", "7D", "1M", "3M", "1Y"];

  return (
    <div className={`${bgColor} px-4 sm:px-6 lg:px-8 py-8 lg:py-12 font-sans`}>
      <div className="max-w-7xl mx-auto">
        {/* How to Buy Crypto Section */}
        <section className="mb-12 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center lg:text-left">
            How to Buy Crypto
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/*
              Steps would be rendered here. Example implementation:
              {[
                {
                  step: "1",
                  title: "Enter Amount & Select Payment",
                  desc: "Enter the amount, select the available payment method, and choose the payment account or bind the payment card.",
                  icon: "fas fa-dollar-sign",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  step: "2", 
                  title: "Confirm Order",
                  desc: "Confirmation of transaction detail information, including trading pair quotes, fees, and other explanatory tips.",
                  icon: "fas fa-check-circle",
                  color: "from-green-500 to-teal-500"
                },
                {
                  step: "3",
                  title: "Receive Crypto",
                  desc: "After successful payment, the purchased crypto will be deposited into your Spot or Funding Wallet.",
                  icon: "fas fa-wallet",
                  color: "from-yellow-500 to-orange-500"
                },
              ].map((step, index) => (
                <div key={index} className={`relative p-6 lg:p-8 rounded-2xl border ${borderColor} hover:border-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] group`}>
                  <div className={`absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.step}
                  </div>
                  
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${step.icon} text-white text-lg`}></i>
                  </div>
                  
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 leading-tight">
                    {step.title}
                  </h2>
                  <p className={`text-sm sm:text-base ${smTextColor} leading-relaxed`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            */}
          </div>
        </section>

        {/* Cosmos Markets Section */}
        <section className="mb-12 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 lg:mb-12 text-center lg:text-left">
            {fromCurrency} Markets
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Chart Section */}
            <div className="order-2 lg:order-1">
              {/* Price Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    {fromCurrency}/{toCurrency}
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">{fromCurrency}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium">{toCurrency}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-left sm:text-right">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">₹ 388.14</div>
                  <div className="text-green-500 text-lg sm:text-xl font-semibold flex items-center gap-1">
                    <i className="fas fa-arrow-up text-sm"></i>
                    +3.64%
                  </div>
                </div>
              </div>

              {/* Time Period Selector */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-end mb-6">
                {timestamp.map((label) => (
                  <button
                    key={label}
                    onClick={() => setActive(label)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      label === active 
                        ? 'bg-blue-500 text-white shadow-lg' 
                        : `${borderColor} border hover:border-blue-500 hover:text-blue-500`
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Chart Area */}
              <div className={`h-64 sm:h-80 lg:h-96 rounded-2xl border ${borderColor} relative overflow-hidden bg-gradient-to-t from-yellow-500/10 to-transparent`}>
                <div className="absolute inset-4 flex items-end justify-center">
                  <div className="w-1 h-3/4 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-full"></div>
                </div>
                <div className="absolute top-4 left-4 text-xs sm:text-sm text-gray-400">
                  Price Chart ({active})
                </div>
                <div className="absolute bottom-4 right-4 text-xs sm:text-sm text-gray-400">
                  Live Data
                </div>
              </div>
            </div>

            {/* Market Info Section */}
            <div className="order-1 lg:order-2">
              <div className={`rounded-2xl border ${borderColor} p-6 lg:p-8 h-fit lg:sticky lg:top-24`}>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Market Statistics
                </h3>
                
                {/* Market Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className={`p-4 rounded-xl border ${borderColor} text-center`}>
                    <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>Popularity</p>
                    <p className="text-lg sm:text-xl font-bold">#53</p>
                  </div>
                  <div className={`p-4 rounded-xl border ${borderColor} text-center`}>
                    <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>Market Cap</p>
                    <p className="text-lg sm:text-xl font-bold">₹151.74B</p>
                  </div>
                  <div className={`p-4 rounded-xl border ${borderColor} text-center`}>
                    <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>Volume</p>
                    <p className="text-lg sm:text-xl font-bold">₹11.39B</p>
                  </div>
                  <div className={`p-4 rounded-xl border ${borderColor} text-center`}>
                    <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>Supply</p>
                    <p className="text-lg sm:text-xl font-bold">390.93M</p>
                  </div>
                </div>

                {/* Description */}
                <div className={`p-4 rounded-xl bg-gradient-to-r from-blue-50/10 to-purple-50/10 border ${borderColor} mb-6`}>
                  <p className={`text-sm sm:text-base ${smTextColor} leading-relaxed`}>
                    {fromCurrency} is experiencing a rise in value this week. Currently priced at ₹388.14 per {fromCurrency}, 
                    with a circulating supply of 390.93M, resulting in a total market cap of ₹151.74B.
                  </p>
                </div>

                {/* Exchange Rates */}
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-4">Exchange Rates</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-3 rounded-lg border ${borderColor}`}>
                      <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>24h Change</p>
                      <p className="text-green-500 font-bold text-base sm:text-lg">+3.64%</p>
                    </div>
                    <div className={`p-3 rounded-lg border ${borderColor}`}>
                      <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>7d Change</p>
                      <p className="text-green-500 font-bold text-base sm:text-lg">+1.96%</p>
                    </div>
                    <div className={`p-3 rounded-lg border ${borderColor}`}>
                      <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>1m Change</p>
                      <p className="text-red-500 font-bold text-base sm:text-lg">-10.6%</p>
                    </div>
                    <div className={`p-3 rounded-lg border ${borderColor}`}>
                      <p className={`text-xs sm:text-sm ${smTextColor} mb-1`}>3m Change</p>
                      <p className="text-green-500 font-bold text-base sm:text-lg">+16.10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Tables Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center lg:text-left">
            Conversion Tables
          </h2>
          
          {/* Mobile Toggle */}
          <div className="flex justify-center mb-6 lg:hidden">
            <div className={`inline-flex rounded-xl border ${borderColor} p-1`}>
              <button
                onClick={() => setSelectedConversion("toINR")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedConversion === "toINR" 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-500'
                }`}
              >
                {fromCurrency} to {toCurrency}
              </button>
              <button
                onClick={() => setSelectedConversion("fromINR")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedConversion === "fromINR" 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-500'
                }`}
              >
                {toCurrency} to {fromCurrency}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* FROM to TO Conversion */}
            <div className={`${selectedConversion === "toINR" ? "block" : "hidden"} lg:block w-full border ${borderColor} p-6 lg:p-8 rounded-2xl`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left">
                {fromCurrency} TO {toCurrency}
              </h3>
              <div className="space-y-4">
                {/*
                  Example rates that would be mapped:
                  [{
                    from: "0.5", to: "204.86" 
                  }, {
                    from: "1", to: "409.72"
                  }].map((rate, index) => (
                    <div key={index} className={`flex justify-between items-center p-3 rounded-lg hover:bg-gray-50/5 transition-colors border ${borderColor}`}>
                      <span className="font-medium">{rate.from} {fromCurrency}</span>
                      <span className={`${textColor} font-semibold`}>{rate.to} {toCurrency}</span>
                    </div>
                  ))
                */}
              </div>
            </div>

            {/* TO to FROM Conversion */}
            <div className={`${selectedConversion === "fromINR" ? "block" : "hidden"} lg:block w-full border ${borderColor} p-6 lg:p-8 rounded-2xl`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left">
                {toCurrency} TO {fromCurrency}
              </h3>
              <div className="space-y-4">
                {/*
                  Example rates that would be mapped:
                  [{
                    from: "0.5", to: "0.0012203" 
                  }, {
                    from: "1", to: "0.0024407"
                  }].map((rate, index) => (
                    <div key={index} className={`flex justify-between items-center p-3 rounded-lg hover:bg-gray-50/5 transition-colors border ${borderColor}`}>
                      <span className="font-medium">{rate.from} {toCurrency}</span>
                      <span className={`${textColor} font-semibold`}>{rate.to} {fromCurrency}</span>
                    </div>
                  ))
                */}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`mt-8 p-6 rounded-2xl border ${borderColor} bg-gradient-to-r from-blue-50/10 to-purple-50/10`}>
            <p className={`text-sm sm:text-base ${smTextColor} leading-relaxed text-center lg:text-left`}>
              <strong>Exchange Rate:</strong> Currently, the value of 1 {fromCurrency} is {toCurrency === 'INR' ? '388.14' : '0.012'} {toCurrency}. 
              All rates are updated in real-time and exclude platform or gas fees. 
              Historical data shows varying performance across different time periods.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuyCryptoFooter;
