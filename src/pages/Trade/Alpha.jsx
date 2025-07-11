import React, { useEffect, useState } from "react";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import TradingChart from "../../components/Trading/TradingChart";
import Footer from "../../components/Footer/Footer";

// --- Header Component ---
const Header = () => {
  const { theme } = useTheme();
  const { bgColor, borderColor, textColor, smTextColor } = themeColors(theme);

  return (
    <header
      className={`p-2 sm:p-3 ${bgColor} flex flex-col gap-2 text-xs md:text-sm border-b ${borderColor}`}
    >
      {/* Top Row - Symbol and Price */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center font-semibold text-sm md:text-base">
            <span className="text-red-500 mr-1">&#9679;</span> VELO
          </div>
          <div className="text-lg sm:text-2xl font-bold">0.011177</div>
          <div className="text-red-400 text-sm sm:text-base">-9.45%</div>
        </div>
        
        {/* Tags - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-2 text-green-400 text-xs">
          <span className="font-semibold">Alpha Airdrop</span>
          <span className="font-semibold">BNB Smart Chain</span>
          <span className="font-semibold">Defi</span>
          <span className="font-semibold">Payments</span>
          <svg
            className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.827 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.827 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.827-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.827-3.31 2.37-2.37z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-gray-400 text-xs">
        <div className="text-center sm:text-left">
          24h High: <span className={`${textColor}`}>0.012475</span>
        </div>
        <div className="text-center sm:text-left">
          24h Low: <span className={`${textColor}`}>0.009916</span>
        </div>
        <div className="text-center sm:text-left">
          24h Volume: <span className={`${textColor}`}>51,110</span>
        </div>
        <div className="text-center sm:text-left">
          24h Transactions: <span className={`${textColor}`}>58,118</span>
        </div>
      </div>

      {/* Mobile Tags */}
      <div className="flex lg:hidden flex-wrap gap-1 text-green-400 text-xs">
        <span className="px-2 py-1 bg-green-400/10 rounded">Alpha Airdrop</span>
        <span className="px-2 py-1 bg-green-400/10 rounded">BNB Smart Chain</span>
        <span className="px-2 py-1 bg-green-400/10 rounded">Defi</span>
        <span className="px-2 py-1 bg-green-400/10 rounded">Payments</span>
      </div>
    </header>
  );
};

// --- Sidebar Component ---
const Sidebar = () => {
  const { theme } = useTheme();
  const { bgColor, borderColor, smTextColor } = themeColors(theme);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button - Fixed positioning */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`lg:hidden fixed top-32 left-4 z-30 p-3 ${bgColor} border ${borderColor} rounded-lg shadow-lg hover:shadow-xl transition-all duration-200`}
        style={{ 
          boxShadow: theme === 'dark' 
            ? '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' 
            : '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`
          ${bgColor} border ${borderColor} rounded-md
          ${isVisible ? 'fixed inset-0 z-40 p-4' : 'hidden lg:flex'}
          lg:relative lg:w-[250px] lg:h-[530px]
          flex flex-col
        `}
      >
        {/* Mobile Header with Back Button */}
        {isVisible && (
          <div className="lg:hidden flex items-center justify-between mb-4 pt-2">
            <button
              onClick={() => setIsVisible(false)}
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Back
            </button>
            <h2 className="text-lg font-semibold">Tokens</h2>
            <div className="w-12"></div> {/* Spacer for center alignment */}
          </div>
        )}

        <div className="relative mb-4 mt-0">
          <input
            type="text"
            placeholder="Search token name or address"
            className={`w-full ${borderColor} border rounded-md py-2 pl-8 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          <svg
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 ${smTextColor}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>

        <div className={`flex justify-between items-center ${smTextColor} text-xs mb-3`}>
          <span>Name / Vol <span className="text-gray-500">&#9660;</span></span>
          <span>Last Price / 24h Chg <span className="text-gray-500">&#9660;</span></span>
        </div>

        {/* Coin List - Scrollable */}
        <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
          {[
            {
              name: "VELO",
              price: "$14.42M",
              change: "-9.45%",
              value: "0.011177",
              changeColor: "text-red-400",
            },
            {
              name: "F",
              price: "$28.9M",
              change: "-3.88%",
              value: "0.0095649",
              changeColor: "text-red-400",
            },
            {
              name: "ROAM",
              price: "$55.45M",
              change: "+1.64%",
              value: "0.15693",
              changeColor: "text-green-400",
            },
            {
              name: "SGC",
              price: "$1.18M",
              change: "-32.80%",
              value: "0.0011523",
              changeColor: "text-red-400",
            },
            {
              name: "PUNDIAI",
              price: "$4M",
              change: "+1.86%",
              value: "7.36123",
              changeColor: "text-green-400",
            },
            {
              name: "IDOL",
              price: "$6.70M",
              change: "-8.47%",
              value: "0.015131",
              changeColor: "text-red-400",
            },
            {
              name: "SERAPH",
              price: "$643.01M",
              change: "+13.73%",
              value: "0.119649",
              changeColor: "text-green-400",
            },
            {
              name: "SKATE",
              price: "$6.49M",
              change: "+29.97%",
              value: "0.047771",
              changeColor: "text-green-400",
            },
            {
              name: "OI",
              price: "$71.46M",
              change: "+13.18%",
              value: "0.037007",
              changeColor: "text-green-400",
            },
            {
              name: "XYZ",
              price: "$10M",
              change: "+5.00%",
              value: "0.050000",
              changeColor: "text-green-400",
            },
            {
              name: "ABC",
              price: "$2M",
              change: "-1.23%",
              value: "0.001234",
              changeColor: "text-red-400",
            },
          ].map((coin, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-3 px-2 ${
                theme === "light" ? "hover:bg-blue-100" : "hover:bg-gray-600"
              } cursor-pointer rounded-sm touch-manipulation`}
              onClick={() => isVisible && setIsVisible(false)}
            >
              <div className="text-sm font-medium">{coin.name}</div>
              <div className="text-right">
                <div className="text-xs">{coin.value}</div>
                <div className={`${coin.changeColor} text-xs`}>{coin.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// --- Chart Area Component ---
const ChartArea = () => {
  const { theme } = useTheme();
  const { bgColor } = themeColors(theme);

  const [currentPrice, setCurrentPrice] = useState(104611.5);
  const [chartPair, setChartPair] = useState("BTC/USDT");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice((prevPrice) => prevPrice + (Math.random() - 0.5) * 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex-1 ${bgColor} relative flex flex-col w-full h-[400px] sm:h-[500px] lg:h-[530px]`}>
      <div className="flex-grow rounded-lg relative overflow-hidden">
        <TradingChart pair={chartPair} currentPrice={currentPrice} />
      </div>
    </div>
  );
};

// --- Trading Panel Component ---
const TradingPanel = () => {
  const { theme } = useTheme();
  const { smTextColor, bgColor, textColor, borderColor } = themeColors(theme);
  const [transactionTab, setTransactionTab] = useState("buy");
  const [activeTab, setActiveTab] = useState("limit");
  const [amount, setAmount] = useState({
    price: "",
    amount: "",
    payAmount: "",
  });
  const [fromCurrency, setFromCurrency] = useState("INR");
  const currency = ["USD", "INR", "AED", "AMD", "ATOM", "ETH", "BTC", "XRP"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAmount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={`${bgColor} p-3 sm:p-4 rounded-lg w-full max-w-sm mx-auto space-y-3 sm:space-y-4 font-sans border ${borderColor}`}>
      {/* Top Stats - Responsive Grid */}
      <div className="grid grid-cols-2 gap-2 text-center text-xs sm:text-sm">
        <div>
          <div className={`text-xs font-semibold ${textColor}`}>Market Cap</div>
          <div className={smTextColor}>59.46M</div>
        </div>
        <div>
          <div className={`text-xs font-semibold ${textColor}`}>Holders</div>
          <div className={smTextColor}>6,384</div>
        </div>
        <div>
          <div className={`text-xs font-semibold ${textColor}`}>Liquidity</div>
          <div className={smTextColor}>1.67M</div>
        </div>
        <div>
          <div className={`text-xs font-semibold ${textColor}`}>FDV</div>
          <div className={smTextColor}>59.46M</div>
        </div>
      </div>

      {/* Buy/Sell Tabs */}
      <div className="flex w-full bg-[#0f172a] rounded-md overflow-hidden text-sm font-medium">
        <button
          onClick={() => setTransactionTab("buy")}
          className={`w-1/2 py-3 text-center touch-manipulation ${
            transactionTab === "buy" ? "bg-green-500" : "hover:bg-[#1f2937]"
          } text-white transition`}
        >
          Buy
        </button>
        <button
          onClick={() => setTransactionTab("sell")}
          className={`w-1/2 py-3 text-center touch-manipulation ${
            transactionTab === "sell" ? "bg-green-500" : "hover:bg-[#1f2937]"
          } text-white transition`}
        >
          Sell
        </button>
      </div>

      {/* Limit/Instant Tabs */}
      <div className="flex items-center gap-4 text-sm">
        <button
          onClick={() => setActiveTab("limit")}
          className={`touch-manipulation ${
            activeTab === "limit"
              ? `border-b-2 border-purple-600 ${textColor}`
              : smTextColor
          } px-3 py-2`}
        >
          Limit
        </button>
        <button
          onClick={() => setActiveTab("instant")}
          className={`touch-manipulation ${
            activeTab === "instant"
              ? `border-b-2 border-purple-600 ${textColor}`
              : smTextColor
          } px-3 py-2`}
        >
          Instant
        </button>
      </div>

      {/* Form Content */}
      {activeTab === "limit" && (
        <>
          {/* Price Input */}
          <div className="space-y-1 text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span>Price</span>
              <span className="text-xs underline text-blue-400">
                Suggest Price $0.08705945
              </span>
            </div>
            <div className={`${borderColor} border-2 flex items-center ${bgColor} px-3 py-3 rounded`}>
              <input
                type="number"
                className="bg-transparent flex-1 outline-none text-base"
                placeholder="0.00"
                name="price"
                value={amount.price}
                onChange={handleChange}
              />
              <span className="text-sm">USDT</span>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-1 text-sm">
            <div>Amount</div>
            <div className={`${borderColor} border-2 flex items-center ${bgColor} px-3 py-3 rounded`}>
              <input
                type="number"
                className="bg-transparent flex-1 outline-none text-base"
                placeholder="0.00"
                name="amount"
                value={amount.amount}
                onChange={handleChange}
              />
              <span className="text-yellow-400 font-bold">🪙 BID</span>
            </div>
          </div>

          {/* Total Input */}
          <div className="space-y-1 text-sm">
            <div>Total</div>
            <div className={`${borderColor} border-2 flex items-center ${bgColor} px-3 py-3 rounded`}>
              <input
                type="text"
                className="bg-transparent flex-1 outline-none text-base"
                value="Min 0.1"
                readOnly
              />
              <span className="text-sm">USDT</span>
            </div>
          </div>

          {/* Info Section */}
          <div className={`text-xs ${smTextColor} space-y-1`}>
            <div className="flex justify-between">
              <span>Available</span>
              <span className="flex items-center gap-1">0.00000000 USDT</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated fee</span>
              <span className="text-yellow-400 font-semibold">-- BID</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className={`w-full ${
              transactionTab === "buy" ? "bg-green-500" : "bg-red-500"
            } hover:opacity-90 transition py-3 rounded-md font-semibold text-white text-base touch-manipulation`}
          >
            {transactionTab.toUpperCase()} BID
          </button>
        </>
      )}

      {activeTab === "instant" && (
        <>
          {/* Pay Amount Section */}
          <div className="mb-3">
            <div className={`flex flex-col sm:flex-row sm:justify-between ${smTextColor} text-xs mb-3 gap-1`}>
              <span>Pay Amount</span>
              <span>
                Available <span className={`text-xs ${textColor}`}>0.00000000 USDT</span>{" "}
                <span className="text-yellow-500 cursor-pointer">Add funds</span>
              </span>
            </div>

            <div className={`flex items-center border ${borderColor} rounded px-3 py-3`}>
              <input
                type="number"
                name="payAmount"
                placeholder="0.00000000"
                value={amount.payAmount}
                onChange={handleChange}
                className="flex-1 outline-none bg-transparent text-base"
              />
              <select
                name="currency"
                onChange={(e) => setFromCurrency(e.target.value)}
                value={fromCurrency}
                className="outline-none text-sm font-medium ml-2 bg-transparent"
              >
                {currency.map((e) => (
                  <option key={e} value={e} className="text-sm bg-gray-800">
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={`border-b border-gray-600 my-4`} />

          {/* Info Rows */}
          <div className={`space-y-3 text-sm ${smTextColor}`}>
            <div className="flex justify-between">
              <span>Receive Amount</span>
              <span>-- (--%)</span>
            </div>
            <div className="flex justify-between">
              <span>Min Received</span>
              <span>--</span>
            </div>
            <div className={`border-b border-gray-600 my-4`} />
            <div className="flex justify-between">
              <span>Priority</span>
              <span>--</span>
            </div>
            <div className="flex justify-between">
              <span>Rate</span>
              <span>--</span>
            </div>
          </div>

          {/* Buy Button */}
          <button
            disabled={!amount.payAmount}
            className="mt-6 w-full py-3 bg-green-100 text-green-800 font-semibold rounded disabled:opacity-60 cursor-not-allowed touch-manipulation text-base"
          >
            Buy AB
          </button>
        </>
      )}
    </div>
  );
};

// --- Information Component ---
const InfoSection = () => {
  const { theme } = useTheme();
  const { smTextColor, textColor, bgColor, borderColor } = themeColors(theme);
  
  return (
    <div
      className={`${bgColor} p-3 sm:p-4 w-full rounded-md flex flex-col border ${borderColor} h-[350px] overflow-y-auto custom-scrollbar`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm mr-2">
            OL
          </div>
          <div>
            <h3 className="text-base font-semibold">OL</h3>
            <p className={`${smTextColor} text-xs`}>Open Loot</p>
          </div>
        </div>
        <div className="text-gray-400 text-xs flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
          <span className="hidden sm:inline">Audit</span>
          <span className="text-red-500 text-[10px] sm:text-xs">&#9650; 0 Risk(s)</span>
          <span className="text-yellow-500 text-[10px] sm:text-xs">&#9650; 1 Caution(s)</span>
        </div>
      </div>

      {/* Warning Box */}
      <div className="bg-gray-700 p-3 rounded-lg mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-400 text-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
            Mintable Detected
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      {/* Tax Info */}
      <div className={`mb-4 text-xs ${smTextColor} space-y-1`}>
        <div className="flex justify-between">
          <span>Buy Tax</span>
          <span>0%</span>
        </div>
        <div className="flex justify-between">
          <span>Sell Tax</span>
          <span>0%</span>
        </div>
      </div>

      {/* Token Details */}
      <div className={`mb-4 text-xs ${smTextColor} space-y-2`}>
        <div className="flex justify-between">
          <span>Circulating Supply</span>
          <span>588.15M OL</span>
        </div>
        <div className="flex justify-between">
          <span>Total Supply</span>
          <span>5B OL</span>
        </div>
        <div className="flex justify-between">
          <span>Create Time</span>
          <span>2025-05-27 20:36</span>
        </div>
        <div className="flex justify-between">
          <span>Launch Time</span>
          <span>2025-05-27 20:36</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Contract Address</span>
          <span className="text-blue-400 cursor-pointer hover:underline text-right break-all">
            0x3116...9844c1
          </span>
        </div>
        <div className="flex justify-between">
          <span>Website</span>
          <span className="text-blue-400 cursor-pointer hover:underline">
            Official Website
          </span>
        </div>
      </div>

      {/* Introduction */}
      <div>
        <h5 className={`${smTextColor} text-sm font-semibold mb-2`}>Introduction</h5>
        <p className={`${textColor} font-bold mb-2`}>{""}</p>
        <p className={`${smTextColor} text-xs leading-relaxed`}>
          * The data presented is for informational purposes only. It's
          provided by the third party, and shown on an "as is" basis,
          without representation or warranty of any kind.
        </p>
      </div>
    </div>
  );
};

// --- OrderHistory Component ---
const OrderHistory = () => {
  const [historySection, setHistorySection] = useState("open-orders");
  const [activeTab, setActiveTab] = useState("limit");
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor } = themeColors(theme);

  return (
    <div className={`${bgColor} p-3 sm:p-4 w-full rounded-md flex-shrink-0 flex flex-col border-t ${borderColor} h-[300px] sm:h-[350px]`}>
      {/* Main Tabs */}
      <div className="flex mb-4 text-xs overflow-x-auto">
        <button
          onClick={() => setHistorySection("open-orders")}
          className={`px-3 py-2 whitespace-nowrap touch-manipulation ${
            historySection === "open-orders"
              ? `border-b-amber-400 border-b-2 ${textColor}`
              : `${smTextColor} hover:${textColor}`
          } transition-colors duration-200 text-sm`}
        >
          Open orders
        </button>
        <button
          onClick={() => setHistorySection("order-history")}
          className={`px-3 py-2 whitespace-nowrap touch-manipulation ${
            historySection === "order-history"
              ? `border-b-amber-400 border-b-2 ${textColor}`
              : `${smTextColor} hover:${textColor}`
          } transition-colors duration-200 text-sm`}
        >
          Order history
        </button>
        <button
          onClick={() => setHistorySection("holding")}
          className={`px-3 py-2 whitespace-nowrap touch-manipulation ${
            historySection === "holding"
              ? `border-b-amber-400 border-b-2 ${textColor}`
              : `${smTextColor} hover:${textColor}`
          } transition-colors duration-200 text-sm`}
        >
          Holding
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-2 mb-4 text-xs">
        <button
          onClick={() => setActiveTab("limit")}
          className={`${
            activeTab === "limit" ? "bg-gray-700 text-white" : ""
          } px-3 py-2 rounded-md transition-all touch-manipulation`}
        >
          Limit
        </button>
        <button
          onClick={() => setActiveTab("instant")}
          className={`${
            activeTab === "instant" ? "bg-gray-700 text-white" : ""
          } px-3 py-2 rounded-md transition-all touch-manipulation`}
        >
          Instant
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex items-center justify-center text-gray-500 text-sm flex-col rounded-lg">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        No Ongoing Orders
      </div>
    </div>
  );
};

const Alpha = () => {
  const { theme } = useTheme();
  const { bgColor, borderColor } = themeColors(theme);
  const [showTradingPanelModal, setShowTradingPanelModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleBuySellClick = () => {
    setShowTradingPanelModal(true);
  };

  const handleInfoClick = () => {
    setShowInfoModal(true);
  };

  return (
    <div className={`flex flex-col min-h-screen ${bgColor} font-sans`}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 flex-col p-1 sm:p-2 gap-1 sm:gap-2 pb-20 lg:pb-2">
        <div className="flex flex-col lg:flex-row gap-1 sm:gap-2">
          {/* Sidebar */}
          <div className="w-full lg:w-[250px]">
            <Sidebar />
          </div>

          {/* Chart Area */}
          <div className="flex-1 min-h-0">
            <ChartArea />
          </div>

          {/* Trading Panel (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-[350px] flex-shrink-0">
            <TradingPanel />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row gap-1 sm:gap-2">
          {/* Order History */}
          <div className="flex-1 min-h-0">
            <OrderHistory />
          </div>

          {/* Info Section (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-[350px] flex-shrink-0">
            <InfoSection />
          </div>
        </div>
      </div>

      {/* Mobile Action Buttons */}
      <div className={`fixed bottom-0 left-0 right-0 p-3 ${bgColor} border-t ${borderColor} lg:hidden flex gap-2 z-30`}>
        <button
          onClick={handleBuySellClick}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold text-base touch-manipulation"
        >
          Buy
        </button>
        <button
          onClick={handleBuySellClick}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold text-base touch-manipulation"
        >
          Sell
        </button>
        <button
          onClick={handleInfoClick}
          className={`px-4 py-3 border-2 ${borderColor} rounded-lg font-semibold text-base touch-manipulation`}
        >
          Info
        </button>
      </div>

      {/* Mobile Trading Panel Modal */}
      {showTradingPanelModal && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowTradingPanelModal(false)} />
          <div className={`fixed inset-x-0 bottom-0 ${bgColor} rounded-t-xl shadow-lg max-h-[90vh] overflow-y-auto`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-600">
              <h3 className="text-lg font-semibold">Trade</h3>
              <button
                onClick={() => setShowTradingPanelModal(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <TradingPanel />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowInfoModal(false)} />
          <div className={`fixed inset-x-0 bottom-0 ${bgColor} rounded-t-xl shadow-lg max-h-[90vh] overflow-y-auto`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-600">
              <h3 className="text-lg font-semibold">Token Information</h3>
              <button
                onClick={() => setShowInfoModal(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <InfoSection />
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #3f444c;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #6b7280;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #9ca3af;
          }
          
          @media (max-width: 1024px) {
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
              height: 4px;
            }
          }
        `}
      </style>
      <Footer/>
    </div>
  );
};

export default Alpha;
