import React, { useState } from "react";
import BuyCryptoNavigation from "./CryptoNavigation/BuyCryptoNavigation";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import Footer from "../../components/Footer/Footer";

// --- CreateRecurringPlan Component ---
const CreateRecurringPlan = () => {
  const [spend, setSpend] = useState("");
  const [receive, setReceive] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("Weekly, Tuesday, 11:00 (UTC+5)");
  
  const currency = ["USD", "INR", "AED", "AMD", "ATOM", "ETH", "BTC", "XRP"];
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor, buttonBg } = themeColors(theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recurring plan created:", { fromCurrency, toCurrency, amount, frequency });
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className={`rounded-2xl border ${borderColor} overflow-hidden shadow-lg`}>
        {/* Header */}
        <div className={`${bgColor} p-4 sm:p-6 border-b ${borderColor}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Create Recurring Plan
            </h3>
            <button className="text-sm text-blue-500 hover:text-blue-600 transition-colors text-left sm:text-right">
              Auto-invest with stablecoin &rarr;
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className={`${bgColor} p-4 sm:p-6`}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Select Assets */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-3">
                Select Assets
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className={`flex-1 border ${borderColor} rounded-xl p-3 sm:p-4 transition-all duration-200 focus-within:border-blue-500`}>
                  <select
                    name="fromCurrency"
                    id="fromCurrency"
                    onChange={(e) => setFromCurrency(e.target.value)}
                    value={fromCurrency}
                    className={`w-full outline-none text-sm sm:text-base font-medium ${bgColor} ${textColor} cursor-pointer`}
                  >
                    {currency.map((curr) => (
                      <option key={curr} value={curr} className="bg-gray-900 text-white">
                        {curr}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center justify-center">
                  <span className="text-sm sm:text-base font-medium px-2">To</span>
                </div>

                <div className={`flex-1 border ${borderColor} rounded-xl p-3 sm:p-4 transition-all duration-200 focus-within:border-blue-500`}>
                  <select
                    name="toCurrency"
                    id="toCurrency"
                    onChange={(e) => setToCurrency(e.target.value)}
                    value={toCurrency}
                    className={`w-full outline-none text-sm sm:text-base font-medium ${bgColor} ${textColor} cursor-pointer`}
                  >
                    {currency.map((curr) => (
                      <option key={curr} value={curr} className="bg-gray-900 text-white">
                        {curr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-3">
                Investment Amount
              </label>
              <div className={`relative border ${borderColor} rounded-xl p-3 sm:p-4 transition-all duration-200 focus-within:border-blue-500`}>
                <input
                  type="number"
                  placeholder="10 - 5,000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`w-full outline-none text-lg sm:text-xl ${textColor} ${bgColor} placeholder-gray-500 pr-16`}
                />
                <span className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-base sm:text-lg font-medium ${textColor} border-l ${borderColor} pl-3`}>
                  {fromCurrency}
                </span>
              </div>
              <p className={`${smTextColor} text-xs sm:text-sm mt-2`}>
                Minimum: 10 {fromCurrency} • Maximum: 5,000 {fromCurrency}
              </p>
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-3">
                Investment Frequency
              </label>
              <div className={`relative border ${borderColor} rounded-xl p-3 sm:p-4 transition-all duration-200 focus-within:border-blue-500`}>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className={`w-full outline-none text-sm sm:text-base ${textColor} ${bgColor} appearance-none cursor-pointer`}
                >
                  <option value="Weekly, Tuesday, 11:00 (UTC+5)">Weekly, Tuesday, 11:00 (UTC+5)</option>
                  <option value="Daily, 11:00 (UTC+5)">Daily, 11:00 (UTC+5)</option>
                  <option value="Monthly, 1st, 11:00 (UTC+5)">Monthly, 1st, 11:00 (UTC+5)</option>
                  <option value="Bi-weekly, Tuesday, 11:00 (UTC+5)">Bi-weekly, Tuesday, 11:00 (UTC+5)</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Estimated Return */}
            <div className={`p-4 rounded-xl border ${borderColor} bg-gradient-to-r from-blue-50/10 to-purple-50/10`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm ${smTextColor}`}>Estimated receive:</span>
                <span className={`text-lg font-semibold text-blue-400`}>
                  {amount ? (parseFloat(amount) * 0.012).toFixed(6) : '0'} {toCurrency}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-xs ${smTextColor}`}>Exchange rate:</span>
                <span className={`text-sm ${textColor}`}>1 {fromCurrency} ≈ 0.012 {toCurrency}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full ${buttonBg} text-black font-semibold py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              Create Recurring Plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- CryptoItem Component ---
const CryptoItem = ({ name, price, roi, icon }) => {
  const roiColor = roi.includes("-") ? "text-red-500" : "text-green-500";
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor } = themeColors(theme);
  
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl border ${borderColor} hover:border-blue-500/30 transition-all duration-200 cursor-pointer hover:transform hover:scale-[1.02]`}>
      <div className="flex items-center gap-3 flex-1">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${icon} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-xs sm:text-sm">{name.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className={`font-semibold text-sm sm:text-base ${textColor}`}>{name}</div>
          <div className={`text-xs sm:text-sm ${smTextColor}`}>Historical ROI</div>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-sm sm:text-base font-medium ${textColor}`}>{price}</p>
        <p className={`text-xs sm:text-sm ${roiColor} flex items-center justify-end gap-1`}>
          <span>{roi.includes("-") ? "▼" : "▲"}</span>
          <span>{roi}</span>
        </p>
      </div>
    </div>
  );
};

// --- TopCryptos Component ---
const TopCryptos = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("3Y");
  const periods = ["3Y", "1Y", "6M", "3M"];
  
  const cryptos = [
    { name: "SOL", price: "€ 141.14", roi: "304.00%", icon: "bg-purple-500" },
    { name: "DOT", price: "€ 3.67", roi: "-26.00%", icon: "bg-pink-500" },
    { name: "MATIC", price: "€ 0.35", roi: "-61.00%", icon: "bg-indigo-500" },
    { name: "LUNA", price: "€ 0.00", roi: "-66.00%", icon: "bg-blue-500" },
    { name: "AVAX", price: "€ 19.32", roi: "12.00%", icon: "bg-red-500" },
  ];
  
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor } = themeColors(theme);

  return (
    <div className="w-full lg:w-1/2">
      <div className={`rounded-2xl border ${borderColor} p-4 sm:p-6 shadow-lg`}>
        {/* Header */}
        <div className="mb-6">
          <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${textColor} flex items-center gap-2`}>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Top Performing Cryptos
          </h3>
          
          {/* Time Period Selector */}
          <div className="flex flex-wrap gap-2">
            <span className={`text-sm ${smTextColor} mr-2`}>Time period:</span>
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedPeriod === period
                    ? 'bg-blue-500 text-white'
                    : `${borderColor} border text-gray-400 hover:text-blue-400 hover:border-blue-400`
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Crypto List */}
        <div className="space-y-3">
          {cryptos.map((crypto, index) => (
            <CryptoItem key={crypto.name} {...crypto} />
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-6 p-4 rounded-xl border ${borderColor} bg-gradient-to-r from-yellow-50/10 to-orange-50/10`}>
          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <i className="fas fa-info-circle text-yellow-500"></i>
            Dollar-Cost Averaging Benefits
          </h4>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li className={`${smTextColor} flex items-start gap-2`}>
              <span className="text-yellow-500 mt-1">•</span>
              <span>Reduce impact of market volatility</span>
            </li>
            <li className={`${smTextColor} flex items-start gap-2`}>
              <span className="text-yellow-500 mt-1">•</span>
              <span>Build wealth through consistent investing</span>
            </li>
            <li className={`${smTextColor} flex items-start gap-2`}>
              <span className="text-yellow-500 mt-1">•</span>
              <span>Remove emotional decisions from investing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const RecurringBuy = () => {
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor } = themeColors(theme);
  
  return (
    <>
      <BuyCryptoNavigation />
      <div className={`min-h-screen ${bgColor} font-sans pt-16 sm:pt-20 lg:pt-24`}>
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${textColor} mb-2`}>
                Recurring Buy
              </h1>
              <p className={`${smTextColor} text-sm sm:text-base`}>
                Automate your crypto investments with dollar-cost averaging
              </p>
            </div>
            <button className="text-blue-500 hover:text-blue-600 transition-colors text-sm sm:text-base font-medium">
              View My Plans &rarr;
            </button>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <CreateRecurringPlan />
            <TopCryptos />
          </div>

          {/* Features Section */}
          <div className="mt-8 lg:mt-12">
            <h2 className={`text-xl sm:text-2xl font-semibold ${textColor} mb-6 text-center`}>
              Why Choose Recurring Buy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl border ${borderColor} text-center`}>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-blue-600 text-xl"></i>
                </div>
                <h3 className={`font-semibold mb-2 ${textColor}`}>Automated Investing</h3>
                <p className={`${smTextColor} text-sm`}>
                  Set it once and let it run automatically based on your schedule
                </p>
              </div>
              
              <div className={`p-6 rounded-xl border ${borderColor} text-center`}>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-green-600 text-xl"></i>
                </div>
                <h3 className={`font-semibold mb-2 ${textColor}`}>Reduce Volatility</h3>
                <p className={`${smTextColor} text-sm`}>
                  Dollar-cost averaging helps smooth out price fluctuations over time
                </p>
              </div>
              
              <div className={`p-6 rounded-xl border ${borderColor} text-center`}>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-purple-600 text-xl"></i>
                </div>
                <h3 className={`font-semibold mb-2 ${textColor}`}>Risk Management</h3>
                <p className={`${smTextColor} text-sm`}>
                  Spread your investment risk across different time periods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecurringBuy;
