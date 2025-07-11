import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import Footer from "../../components/Footer/Footer";

const Options = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated } = useUser();
  const [selectedExpiry, setSelectedExpiry] = useState("2024-01-26");
  const [selectedStrike, setSelectedStrike] = useState("105000");
  const [orderType, setOrderType] = useState("Limit");
  const [optionType, setOptionType] = useState("Call");
  const [orderPrice, setOrderPrice] = useState("1250.5");
  const [orderQuantity, setOrderQuantity] = useState("1");
  const [selectedDate, setSelectedDate] = useState("2025-06-05");
  const [aroundATM, setAroundATM] = useState(false);
  const [strikeRange, setStrikeRange] = useState(false);

  const sidebarItems = [
    {
      path: "/futures/usd-m",
      label: "USD-M Futures",
      icon: "fas fa-chart-line",
    },
    {
      path: "/futures/coin-m",
      label: "COIN-M Futures",
      icon: "fas fa-chart-bar",
    },
    {
      path: "/futures/options",
      label: "Options",
      icon: "fas fa-sliders-h",
      isActive: true,
    },
    {
      path: "/futures/trading-bots",
      label: "Trading Bots",
      icon: "fas fa-robot",
    },
    {
      path: "/futures/copy-trading",
      label: "Copy Trading",
      icon: "fas fa-copy",
    },
    { path: "/futures/data", label: "Data", icon: "fas fa-database" },
  ];

  const topTickers = [
    { symbol: "SOLUSDT", price: "153.8949", change: "+", volume: "44.50" },
    { symbol: "BTCUSDT", price: "105,193.9", change: "+", volume: "44.50" },
    { symbol: "ETHUSDT", price: "2,630.8", change: "+", volume: "70.97" },
    { symbol: "BNBUSDT", price: "667.7", change: "+", volume: "" },
    { symbol: "XRPUSDT", price: "2.212", change: "-", volume: "" },
    { symbol: "DOGEUSDT", price: "0.1964", change: "+", volume: "" },
  ];

  const dateFilters = [
    "Favorites",
    "Heatmap",
    "All",
    "2025-06-05",
    "2025-06-06",
    "2025-06-07",
    "2025-06-13",
    "2025-06-20",
    "2025-06-27",
    "2025-07-25",
    "2025-08-29",
    "2025",
  ];

  const optionsData = [
    {
      strike: "101000",
      call: {
        open: "272,653.19",
        delta: "0.99791",
        bidSize: "0.01",
        bid: "1,850.0",
        iv: "2,196.8",
        ask: "2,800.0",
        askSize: "0.02",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "9.60",
        bid: "5.0",
        iv: "4.9",
        ask: "10.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "103000",
      call: {
        open: "2,808,687.34",
        delta: "0.65481",
        bidSize: "1.44",
        bid: "200.0",
        iv: "311.4",
        ask: "340.0",
        askSize: "3.00",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "4.68",
        bid: "110.0",
        iv: "114.9",
        ask: "125.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "105000",
      call: {
        open: "9,787,276.06",
        delta: "0.07680",
        bidSize: "2.65",
        bid: "15.0",
        iv: "19.3",
        ask: "35.0",
        askSize: "8.60",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "4.09",
        bid: "760.0",
        iv: "822.8",
        ask: "865.0",
        askSize: "--",
        position: "--",
      },
      isATM: true,
      atmPrice: "105,193.8",
    },
    {
      strike: "106000",
      call: {
        open: "4,498,107.53",
        delta: "0.00125",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.3",
        ask: "5.0",
        askSize: "10.26",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "0.24",
        bid: "605.0",
        iv: "2,803.8",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "108000",
      call: {
        open: "9,492,732.07",
        delta: "0.00011",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.1",
        ask: "5.0",
        askSize: "27.20",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "0.18",
        bid: "805.0",
        iv: "3,803.5",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "108000",
      call: {
        open: "9,492,732.07",
        delta: "0.00011",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.1",
        ask: "5.0",
        askSize: "27.20",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "0.18",
        bid: "805.0",
        iv: "3,803.5",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "108000",
      call: {
        open: "9,492,732.07",
        delta: "0.00011",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.1",
        ask: "5.0",
        askSize: "27.20",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "0.18",
        bid: "805.0",
        iv: "3,803.5",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "108000",
      call: {
        open: "9,492,732.07",
        delta: "0.00011",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.1",
        ask: "5.0",
        askSize: "27.20",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "0.18",
        bid: "805.0",
        iv: "3,803.5",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "108000",
      call: {
        open: "9,492,732.07",
        delta: "0.00011",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.1",
        ask: "5.0",
        askSize: "27.20",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "0.18",
        bid: "805.0",
        iv: "3,803.5",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "109000",
      call: {
        open: "10,641,584.50",
        delta: "0.00000",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.1",
        ask: "5.0",
        askSize: "20.50",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "8.02",
        bid: "5.0",
        iv: "4,803.4",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "110000",
      call: {
        open: "2,988,569.57",
        delta: "0.00000",
        bidSize: "0.00",
        bid: "0.0",
        iv: "0.1",
        ask: "5.0",
        askSize: "7.00",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "8.02",
        bid: "5.0",
        iv: "8,803.3",
        ask: "0.0",
        askSize: "--",
        position: "--",
      },
    },
    {
      strike: "114000",
      call: {
        open: "--",
        delta: "--",
        bidSize: "--",
        bid: "--",
        iv: "--",
        ask: "--",
        askSize: "--",
        position: "--",
      },
      put: {
        open: "--",
        delta: "--",
        bidSize: "--",
        bid: "--",
        iv: "--",
        ask: "--",
        askSize: "--",
        position: "--",
      },
    },
  ];

  // TradingView Chart Component
  const TradingViewChart = () => {
    const container = useRef(null);
    const scriptRef = useRef(null);

    useEffect(() => {
      if (container.current) {
        container.current.innerHTML = "";

        if (scriptRef.current && scriptRef.current.parentNode) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }

        const script = document.createElement("script");
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
          autosize: true,
          symbol: "Finsocial:BTCUSDT",
          interval: "15",
          timezone: "Etc/UTC",
          theme: theme === "dark" ? "dark" : "light",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          calendar: false,
          support_host: "https://www.tradingview.com",
        });

        scriptRef.current = script;
        container.current.appendChild(script);
      }

      return () => {
        if (scriptRef.current && scriptRef.current.parentNode) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }
      };
    }, [theme]);

    return (
      <div
        className="tradingview-widget-container h-full w-full"
        ref={container}
      >
        <div className="tradingview-widget-container__widget h-full w-full"></div>
      </div>
    );
  };

  //Trading position at the bottom
  const TradePosition = () => {
    const [showMoreTabs, setShowMoreTabs] = useState(false);

    const commonTabClass = `text-sm ${
      theme === "dark"
        ? "text-gray-400 hover:text-gray-300"
        : "text-gray-600 hover:text-gray-800"
    }`;

    return (
      <div
        className={`${
          theme === "dark"
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
        } border-t`}
      >
        {/* Tab Headers */}
        <div
          className={`flex flex-col justify-between px-4 py-3 border-b ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          {/* Left Side - Tabs */}
          <div className="flex  gap-3 items-center">
            {/* Always visible tabs */}
            <button className="text-yellow-500 text-sm font-medium border-b-2 border-yellow-500 pb-1">
              Positions(0)
            </button>
            <button className={commonTabClass}>Open Orders(0)</button>

            {/* Toggle for More Tabs (Mobile Only) */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setShowMoreTabs((prev) => !prev)}
                className={`text-sm px-3 py-1 rounded border ${
                  theme === "dark"
                    ? "text-gray-300 border-gray-700 bg-gray-800"
                    : "text-gray-700 border-gray-300 bg-gray-100"
                }`}
              >
                More ▾
              </button>

              {showMoreTabs && (
                <div
                  className={`absolute z-10 mt-2 p-3 rounded shadow-lg w-48 ${
                    theme === "dark"
                      ? "bg-gray-800"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {[
                    "Order History",
                    "Trade History",
                    "Transaction History",
                    "Position History",
                    "Strategy",
                    "Assets",
                  ].map((label) => (
                    <button
                      key={label}
                      className={`block w-full text-left mb-2 last:mb-0 ${commonTabClass}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Full Tab Set for Desktop */}
            <div className="hidden lg:flex space-x-6">
              {[
                "Order History",
                "Trade History",
                "Transaction History",
                "Position History",
                "Strategy",
                "Assets",
              ].map((label) => (
                <button key={label} className={commonTabClass}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div
                className={`text-6xl mb-4 ${
                  theme === "dark" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                📊
              </div>
              <h3
                className={`text-lg font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                }`}
              >
                Open Futures Account to trade
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                } mb-6`}
              >
                Start trading futures with advanced tools and features
              </p>
              <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded transition-colors">
                Open Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full ${
          theme === "dark"
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
        } border-b z-50`}
      >
        {/* Top Ticker Bar */}
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-gray-100"
          } px-4 py-2`}
        >
          <div className="flex items-center space-x-6 text-sm overflow-x-auto">
            {topTickers.map((ticker, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 flex-shrink-0"
              >
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  } font-medium`}
                >
                  {ticker.symbol}
                </span>
                <span
                  className={`font-bold ${
                    ticker.change === "+" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {ticker.price}
                </span>
                {ticker.volume && (
                  <span
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    DVOL: {ticker.volume}
                  </span>
                )}
                {ticker.change === "+" && (
                  <span className="text-green-500">↑</span>
                )}
                {ticker.change === "-" && (
                  <span className="text-red-500">↓</span>
                )}
              </div>
            ))}
            <button
              className={`ml-auto p-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <i className="fas fa-th"></i>
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center h-14 px-4">
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-white text-sm"></i>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                FinSocial
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.isActive
                      ? theme === "dark"
                        ? "text-blue-400 bg-blue-900/20"
                        : "text-blue-600 bg-blue-50"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <i className={`${item.icon} mr-2 text-xs`}></i>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <span
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } font-bold`}
              >
                Trade Options
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <i
                className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}
              ></i>
            </button>

            {isAuthenticated && (
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {user?.firstName?.charAt(0) || "U"}
                </span>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Options Interface */}
      <div className="pt-10 w-full overflow-x-auto">
        {/* left Panel - Account Info */}
        <div
          className={`fixed left-0 h-full z-40 transition-transform duration-300 ease-in-out
                    ${showSidebar ? "translate-x-0" : "-translate-x-full"}
                    ${
                      theme === "dark"
                        ? "bg-gray-900 border-gray-800"
                        : "bg-white border-gray-200"
                    }
                    w-80 border-r flex flex-col`}
        >
          {/* Panel Content (your existing code) */}
          <div className="p-4">
            <div className="text-right mb-4">
              <span
                className={`text-lg font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Select an Option from market list to enable trading panel.
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-500 text-black rounded text-sm font-medium">
                  Tutorial Video
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-black rounded text-sm font-medium">
                  Easy Options
                </button>
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div
            className={`p-4 border-t ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Account
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              {/* Total Equity with Icon */}
              <div className="flex items-center justify-between  font-medium">
                <span
                  className={`flex-1 text-md ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Total Equity
                </span>
                <span
                  className={`mx-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  -
                </span>
                <button
                  className={` ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <i className="fas fa-chevron-down w-4"></i>
                </button>
              </div>

              {/* Market Value */}
              <div className="flex items-center text-sm justify-between">
                <span
                  className={`flex-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Market Value
                </span>
                <span
                  className={`mx-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  -
                </span>
                <div className="w-4" /> {/* empty icon space */}
              </div>

              {/* Margin Balance */}
              <div className="flex items-center text-sm justify-between">
                <span
                  className={`flex-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Margin Balance
                </span>
                <span
                  className={`mx-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  -
                </span>
                <div className="w-4" />
              </div>

              {/* Section Divider */}
              <div className="flex flex-col gap-3 mt-3 pt-2 border-t border-gray-700">
                {/* Available Margin with Icon */}
                <div className="flex items-center justify-between font-medium text:md">
                  <span
                    className={`flex-1 text-md ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Available Margin
                  </span>
                  <span
                    className={`mx-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    -
                  </span>
                  <button
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <i className="fas fa-chevron-down w-4"></i>
                  </button>
                </div>

                {/* In Order */}
                <div className="flex text-sm items-center justify-between">
                  <span
                    className={`flex-1 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    In Order
                  </span>
                  <span
                    className={`mx-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    -
                  </span>
                  <div className="w-4" />
                </div>

                {/* Maintenance Margin */}
                <div className="flex text-sm items-center justify-between">
                  <span
                    className={`flex-1 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Maintenance Margin
                  </span>
                  <span
                    className={`mx-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    -
                  </span>
                  <div className="w-4" />
                </div>
              </div>

              {/* Unrealized PnL */}
              <div className="mt-3 pt-2 border-t border-gray-700">
                <div className="flex items-center justify-between font-bold text-lg">
                  <span
                    className={`flex-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Unrealized PnL
                  </span>
                  <span
                    className={`mx-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    -
                  </span>
                  <div className="w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Account Greeks */}
          <div
            className={`p-4 border-t ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3
                className={`text-md font-medium ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Account Greeks
              </h3>
              <button
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="flex overflow-x-auto mb-3 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-500 no-scrollbar">
              {topTickers.map((item) => (
                <span className="mx-1 py-1 bg-gray-600 text-gray-300 hover:text-white px-2 rounded-lg text-xs">
                  {item.symbol}
                </span>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                } mb-2`}
              >
                Announcements
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Chat Room
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Cookie Preferences
              </div>
            </div>
          </div>

          {/* Toggle Button – Right center of the sidebar */}
          <button
            onClick={toggleSidebar}
            className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-full z-50 
      w-6 h-14 rounded-r bg-yellow-500 text-black shadow-md flex items-center justify-center`}
          >
            {showSidebar ? (
              <i className="fas fa-chevron-left" />
            ) : (
              <i className="fas fa-chevron-right" />
            )}
          </button>
        </div>
        {/* Date Filter Tabs */}
        <div
          className={`${
            theme === "dark"
              ? "bg-gray-900 border-gray-800"
              : "bg-white border-gray-200"
          } border-b px-4 py-2 flex flex-row `}
        >
          <button className="bg-green-500 mx-2 py-1 px-2 text-xs rounded lg:hidden">
            Call
          </button>
          <button className="bg-red-500 mx-2 py-1 px-2 text-xs rounded lg:hidden">
            Put
          </button>
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-500 no-scrollbar">
            {dateFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(filter)}
                className={`flex-shrink-0 px-3 py-1 text-sm font-medium transition-colors ${
                  (filter === "2025-06-05" && selectedDate === "2025-06-05") ||
                  filter === "All"
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : theme === "dark"
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
            <button
              className={`ml-auto px-3 py-1 rounded text-sm ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              ⋯
            </button>
          </div>
        </div>
        {/* Options Info Header */}
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } px-4 py-3 border-b border-gray-800`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Ticker Info Row */}
            <div className="w-full overflow-x-auto no-scrollbar">
              <div className="flex items-center justify-around gap-4 text-xs whitespace-nowrap min-w-max">
                <div
                  className={`hidden lg:block font-medium text-lg ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Calls
                </div>
                <div className="flex gap-4 items-center">
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-500" : "text-gray-900"
                    }`}
                  >
                    BTCUSDT Price: 105,193.9
                  </span>
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-500" : "text-gray-900"
                    }`}
                  >
                    ATM Vol: 25.5%
                  </span>
                  <span
                    className={`font-medium text-lg ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    2025-06-05
                  </span>
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-500" : "text-gray-900"
                    }`}
                  >
                    Time to Expiry: 03:09:07 (Daily)
                  </span>
                </div>
                <div
                  className={`hidden lg:block font-medium text-lg ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Puts
                </div>
              </div>
            </div>

            {/* Checkbox Controls */}
            <div className="hidden lg:flex justify-end w-md items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={aroundATM}
                  onChange={(e) => setAroundATM(e.target.checked)}
                  className="w-4 h-4"
                />
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Around ATM
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={strikeRange}
                  onChange={(e) => setStrikeRange(e.target.checked)}
                  className="w-4 h-4"
                />
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Strike Range
                </span>
              </div>
              <button
                className={`px-3 py-1 rounded text-sm ${
                  theme === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                ⋯
              </button>
            </div>
          </div>
        </div>
        {/* Main Layout */}
        <div className="flex h-[calc(100vh-200px)]">
          {/* Left Panel - Options Chain */}
          <div
            className={`flex-1 ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } overflow-hidden`}
          >
            {/* Scrollable Wrapper */}
            <div className="overflow-x-auto scrollbar-thin">
              <div className="min-w-[900px] h-full overflow-y-auto">
                {/* Headers */}
                <div
                  className={`grid grid-cols-11 gap-1 p-3 text-xs font-medium border-b sticky top-0 z-10 ${
                    theme === "dark"
                      ? "text-gray-400 border-gray-800 bg-gray-900"
                      : "text-gray-600 border-gray-200 bg-white"
                  }`}
                >
                  <div className="text-left">Open (USDT)</div>
                  <div className="text-center">Delta</div>
                  <div className="text-center">Bid Size</div>
                  <div className="text-center">Bid / IV</div>
                  <div className="text-center">Mark / IV</div>
                  <div className="text-center">Ask / IV</div>
                  <div className="text-center">Ask Size</div>
                  <div className="text-center">Position</div>
                  <div className="text-center font-bold">Strike</div>
                  <div className="text-center">Position</div>
                  <div className="text-center">Bid Size</div>
                </div>

                {/* Options Data Rows */}
                {optionsData.map((option, index) => (
                  <div
                    key={option.strike}
                    className={`grid grid-cols-11 gap-1 p-2 text-xs border-b hover:bg-opacity-50 cursor-pointer ${
                      theme === "dark"
                        ? "border-gray-800 hover:bg-gray-800"
                        : "border-gray-200 hover:bg-gray-100"
                    } ${
                      option.isATM
                        ? theme === "dark"
                          ? "bg-gray-800/30"
                          : "bg-gray-100/30"
                        : ""
                    }`}
                  >
                    {/* Call Options */}
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-mono text-xs`}
                    >
                      {option.call.open}
                    </div>
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-mono text-center`}
                    >
                      {option.call.delta}
                    </div>
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-mono text-center`}
                    >
                      {option.call.bidSize}
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 font-mono">
                        {option.call.bid}
                      </div>
                      <div
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } text-xs`}
                      >
                        {option.call.iv}
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        } font-mono`}
                      >
                        --
                      </div>
                      <div
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } text-xs`}
                      >
                        --%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-500 font-mono">
                        {option.call.ask}
                      </div>
                      <div
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } text-xs`}
                      >
                        {option.call.iv}
                      </div>
                    </div>
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-mono text-center`}
                    >
                      {option.call.askSize}
                    </div>
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-mono text-center`}
                    >
                      {option.call.position}
                    </div>

                    {/* Strike Price - Highlighted if ATM */}
                    <div
                      className={`text-center font-bold ${
                        option.isATM
                          ? "text-yellow-400"
                          : theme === "dark"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {option.strike}
                      {option.isATM && (
                        <div className="text-xs text-gray-500 mt-1">
                          {option.atmPrice}
                        </div>
                      )}
                    </div>

                    {/* Put Options */}
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-mono text-center`}
                    >
                      {option.put.position}
                    </div>
                    <div
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-mono text-center`}
                    >
                      {option.put.bidSize}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <TradePosition />
      </div>
      <Footer />
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
              display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE/Edge */
            scrollbar-width: none; /* Firefox */
          }
            `}
      </style>
    </div>
  );
};

export default Options;
