import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";

const COINMFutures = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated } = useUser();
  const location = useLocation();
  const [orderType, setOrderType] = useState("Limit");
  const [positionSide, setPositionSide] = useState("Long");
  const [leverage, setLeverage] = useState("20x");

  const [tpslEnabled, setTpslEnabled] = useState(false);
  const [reduceOnlyEnabled, setReduceOnlyEnabled] = useState(false);
  const { borderColor, bgColor } = themeColors(theme);

  const [mobileTab, setMobileTab] = useState("chart");
  const [showTradingPanelModal, setShowTradingPanelModal] = useState(false);

  const sidebarItems = [
    {
      path: "/futures/usd-m",
      label: "USD-M Futures",
      icon: "fas fa-chart-line",
    },
    {
      path: "/futures/coin-m",
      label: "COIN_M Futuers",
      icon: "fas fa-sliders-h",
    },
    {
      path: "/futures/options",
      label: "Options",
      icon: "fas fa-robot",
    },
  ];

  const orderBookData = {
    asks: [
      { price: "105284.4", size: "0.001", sum: "13.541" },
      { price: "105284.0", size: "0.001", sum: "13.540" },
      { price: "105283.6", size: "0.003", sum: "13.539" },
      { price: "105283.2", size: "0.001", sum: "13.536" },
      { price: "105282.9", size: "0.004", sum: "13.535" },
      { price: "105282.8", size: "1.024", sum: "13.531" },
      { price: "105282.7", size: "12.507", sum: "12.507" },
    ],
    currentPrice: "105282.7",
    bids: [
      { price: "105282.6", size: "2.747", sum: "2.747" },
      { price: "105282.5", size: "0.009", sum: "2.756" },
      { price: "105282.2", size: "0.004", sum: "2.760" },
      { price: "105282.1", size: "0.140", sum: "2.900" },
      { price: "105282.0", size: "0.063", sum: "2.963" },
      { price: "105281.9", size: "0.002", sum: "2.965" },
      { price: "105281.8", size: "0.001", sum: "2.966" },
    ],
  };

  const recentTrades = [
    { price: "105,282.7", amount: "0.030", time: "12:35:27" },
    { price: "105,282.7", amount: "0.028", time: "12:35:26" },
    { price: "105,282.7", amount: "0.001", time: "12:35:26" },
    { price: "105,282.7", amount: "0.058", time: "12:35:25" },
    { price: "105,282.7", amount: "0.007", time: "12:35:24" },
  ];

  const handleBuySellClick = () => {
    setShowTradingPanelModal(true);
  };

  const handleCloseTradingPanelModal = () => {
    setShowTradingPanelModal(false);
  };

  const FuturesNavItem = () => {
    return (
      <nav
        className={`fixed top-0 w-full ${
          theme === "dark"
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
        } border-b z-50`}
      >
        {/* Main Navigation */}
        <div className="flex justify-between items-center h-16 px-4">
          <div className="flex items-center space-x-6">
            <NavLink to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-white text-sm"></i>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                FinSocial
              </span>
            </NavLink>

            <div className="hidden lg:flex items-center space-x-1">
              {sidebarItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? theme === "dark"
                          ? "bg-blue-900/20 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                        : theme === "dark"
                        ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                >
                  <i className={`${item.icon} mr-2 text-xs`}></i>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
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
    );
  };

  // TradingView Chart Component
  const TradingViewChart = () => {
    const container = useRef(null);
    const scriptRef = useRef(null);

    useEffect(() => {
      if (container.current) {
        // Clear any existing content
        container.current.innerHTML = "";

        // Remove any existing script
        if (scriptRef.current && scriptRef.current.parentNode) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }

        // Create new script
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

  const OrderBook = () => {
    return (
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Order Book Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-800">
          <h3 className="text-sm font-medium text-white">Order Book</h3>
          <button className="text-gray-400 hover:text-gray-300">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>

        {/* Order Book Controls */}
        <div
          className={`flex items-center p-2 border-b ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex space-x-1">
            <button
              className={`p-1 rounded ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <div className="flex flex-col space-y-0.5">
                <div className="w-3 h-0.5 bg-red-500"></div>
                <div className="w-3 h-0.5 bg-green-500"></div>
              </div>
            </button>
            <button className="p-1 rounded">
              <div className="flex flex-col space-y-0.5">
                <div className="w-3 h-0.5 bg-red-500"></div>
                <div className="w-3 h-0.5 bg-red-500"></div>
              </div>
            </button>
            <button className="p-1 rounded">
              <div className="flex flex-col space-y-0.5">
                <div className="w-3 h-0.5 bg-green-500"></div>
                <div className="w-3 h-0.5 bg-green-500"></div>
              </div>
            </button>
          </div>
          <div
            className={`ml-4 text-xs ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            0.1
          </div>
        </div>

        {/* Headers */}
        <div
          className={`flex justify-between px-3 py-2 text-xs ${
            theme === "dark"
              ? "text-gray-400 border-gray-800"
              : "text-gray-600 border-gray-200"
          } border-b`}
        >
          <span>Price (USDT)</span>
          <span>Size (BTC)</span>
          <span>Sum (BTC)</span>
        </div>

        {/* Order Book Data */}
        <div className="flex-1 ">
          {/* Asks */}
          <div className="space-y-0.5 p-2">
            {orderBookData.asks.map((ask, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-red-500 font-mono">{ask.price}</span>
                <span
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                >
                  {ask.size}
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {ask.sum}
                </span>
              </div>
            ))}
          </div>

          {/* Current Price */}
          <div
            className={`flex items-center justify-center py-2 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <span className="text-green-500 font-bold text-lg">
              {orderBookData.currentPrice}
            </span>
            <span className="text-green-500 ml-2">↑</span>
            <span
              className={`text-xs ml-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              105286.6
            </span>
          </div>

          {/* Bids */}
          <div className="space-y-0.5 p-2">
            {orderBookData.bids.map((bid, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-green-500 font-mono">{bid.price}</span>
                <span
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                >
                  {bid.size}
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {bid.sum}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top trades Data */}
        <div
          className={`${
            theme === "dark"
              ? "bg-gray-900 border-gray-800"
              : "bg-white border-gray-200"
          } border-t h-64 sm:h-72 md:h-80 lg:h-90`}
        >
          {/* Header */}
          <div
            className={`flex flex-row  items-start sm:items-center justify-between p-3 border-b gap-2 ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="flex space-x-4 ">
              <button className="text-yellow-500 text-sm font-medium border-b-2 border-yellow-500">
                Trades
              </button>
              <button
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Top Movers
              </button>
            </div>
            <button
              className={`text-sm ${
                theme === "dark"
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <i className="fas fa-external-link-alt" />
            </button>
          </div>

          {/* Table Header */}
          <div
            className={`flex justify-between text-xs mb-2 px-2 border-b pb-1 ${
              theme === "dark"
                ? "text-gray-400 border-gray-800"
                : "text-gray-600 border-gray-200"
            }`}
          >
            <span>Price (USD)</span>
            <span>Amount (BTC)</span>
            <span>Time</span>
          </div>

          {/* Trades */}
          <div className="overflow-y-auto max-h-[180px]">
            <div className="space-y-2 px-2">
              {recentTrades.map((trade, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between text-xs  pb-0"
                >
                  <div className="flex justify-between sm:block">
                    <span className="text-green-500 font-mono">
                      {trade.price}
                    </span>
                  </div>
                  <div className="flex justify-between sm:block">
                    <span
                      className={
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }
                    >
                      {trade.amount}
                    </span>
                  </div>
                  <div className="flex justify-between sm:block">
                    <span
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      {trade.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TradingInput = () => {
    const [sliderPercent, setSliderPercent] = useState(0);

    const [orderData, setOrderData] = useState({
      orderPrice: "",
      orderSize: "",
      stopPrice: "",
    });

    const handleOrderData = (e) => {
      const { name, value } = e.target;
      setOrderData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const maxSize = 1.0;

    const handleSliderChange = (e) => {
      const percent = Number(e.target.value);
      setSliderPercent(percent);

      setOrderData((prev) => ({
        ...prev,
        orderSize: percent,
      }));
    };

    return (
      <>
        <div
          className={`border-l h-full w-[100vw] sm:w-auto rounded-2xl lg:rounded overflow-y-auto ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div
            className={`flex items-center justify-between p-3 border-b ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex space-x-1">
              <button
                className={`px-3 py-1 rounded text-xs font-medium ${
                  theme === "dark"
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Cross
              </button>
              <button
                className={`px-3 py-1 rounded text-xs font-medium ${
                  theme === "dark"
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                20x
              </button>
              <button
                className={`px-3 py-1 rounded text-xs font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                S
              </button>
            </div>
            <button
              className={`${
                theme === "dark"
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>

          {/* Order Type Tabs */}
          <div
            className={`flex border-b ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {["Limit", "Market", "Stop Limit"].map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`flex-1 py-3 lg:px-4 text-sm font-medium transition-colors ${
                  orderType === type
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : theme === "dark"
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {type}
              </button>
            ))}
            <button
              className={`px-3 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <i className="fas fa-info-circle"></i>
            </button>
          </div>

          {/* Available Balance */}
          <div
            className={`p-4 border-b ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between text-sm">
              <span
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Avbl
              </span>
              <div className="flex items-center space-x-2">
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  - USDT
                </span>
                <button className="text-yellow-400">
                  <i className="fas fa-exchange-alt"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-4 space-y-4 flex-1">
            {/* Stop Price */}
            {orderType === "Stop Limit" && (
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Stop Price
                </label>
                <div className="flex rounded-md shadow-sm focus-within:ring-2 focus-within:ring-yellow-500 focus-within:border-yellow-500 overflow-hidden">
                  <input
                    type="number"
                    name="stopPrice"
                    value={orderData.stopPrice}
                    onChange={handleOrderData}
                    placeholder="0.00"
                    autoComplete="off"
                    className={`flex-1 px-3 py-2 border text-sm focus:outline-none ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                  />
                  <button
                    className={`px-3 py-2 rounded-r border-l-0 border text-sm ${
                      theme === "dark"
                        ? "bg-gray-600 border-gray-600 text-gray-300 hover:bg-gray-500"
                        : "bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Mark ▼
                  </button>
                </div>
              </div>
            )}

            {/* Price */}
            {(orderType === "Limit" || orderType === "Stop Limit") && (
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Price
                </label>

                <div className="flex rounded-md shadow-sm focus-within:ring-2 focus-within:ring-yellow-500 focus-within:border-yellow-500 overflow-hidden">
                  <input
                    type="number"
                    name="orderPrice"
                    value={orderData.orderPrice}
                    onChange={handleOrderData}
                    placeholder="105272.5"
                    autoComplete="off"
                    className={`flex-1 px-3 py-2 border text-sm focus:outline-none ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                  <button
                    type="button"
                    className={`px-3 py-2 border-l text-sm ${
                      theme === "dark"
                        ? "bg-gray-600 border-gray-600 text-gray-300"
                        : "bg-gray-100 border-gray-300 text-gray-600"
                    }`}
                  >
                    USDT
                  </button>
                  <button
                    type="button"
                    className={`px-3 py-2 border-l text-sm ${
                      theme === "dark"
                        ? "bg-gray-600 border-gray-600 text-gray-300 hover:bg-gray-500"
                        : "bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    BBO
                  </button>
                </div>
              </div>
            )}

            {/* Size */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Size
              </label>
              <div className="flex rounded-md shadow-sm focus-within:ring-2 focus-within:ring-yellow-500 focus-within:border-yellow-500 overflow-hidden">
                <input
                  type="number"
                  name="orderSize"
                  value={orderData.orderSize}
                  onChange={handleOrderData}
                  placeholder="0.000"
                  autoComplete="off"
                  className={`flex-1 px-3 py-2 border text-sm focus:outline-none ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
                <select
                  className={`px-3 py-2 border-l text-sm focus:outline-none ${
                    theme === "dark"
                      ? "bg-gray-600 border-gray-600 text-gray-300"
                      : "bg-gray-100 border-gray-300 text-gray-600"
                  }`}
                >
                  <option>BTC ▼</option>
                  <option>USDT</option>
                </select>
              </div>

              {/* Slider Section */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Buy 0.000 BTC
                  </span>
                  <span
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Sell 0.000 BTC
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0"
                    value={sliderPercent}
                    onChange={handleSliderChange}
                    className={`w-full h-1 rounded appearance-none slider ${
                      theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                    }`}
                    style={{
                      background:
                        theme === "dark"
                          ? `linear-gradient(to right, #10b981 0%, #10b981 ${sliderPercent}%, #374151 ${sliderPercent}%, #374151 100%)`
                          : `linear-gradient(to right, #10b981 0%, #10b981 ${sliderPercent}%, #d1d5db ${sliderPercent}%, #d1d5db 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={tpslEnabled}
                    onChange={(e) => setTpslEnabled(e.target.checked)}
                    className="w-4 h-4 text-yellow-400 bg-transparent border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                  />
                  <label
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    TP/SL
                  </label>
                </div>
                {orderType === "Stop Limit" && (
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      TIF
                    </span>
                    <select
                      className={`px-2 py-1 rounded border text-sm ${
                        theme === "dark"
                          ? "bg-gray-600 border-gray-600 text-gray-300"
                          : "bg-gray-100 border-gray-300 text-gray-600"
                      }`}
                    >
                      <option>GTC ▼</option>
                      <option>IOC</option>
                      <option>FOK</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={reduceOnlyEnabled}
                  onChange={(e) => setReduceOnlyEnabled(e.target.checked)}
                  className="w-4 h-4 text-yellow-400 bg-transparent border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                />
                <label
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Reduce-Only
                </label>
              </div>
            </div>

            {/* Order Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className="py-3 bg-green-600 hover:bg-green-700 text-white rounded font-medium text-sm transition-colors">
                Buy/Long
              </button>
              <button className="py-3 bg-red-600 hover:bg-red-700 text-white rounded font-medium text-sm transition-colors">
                Sell/Short
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

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

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Navigation */}
      <FuturesNavItem />

      {/* Main Trading Interface */}
      <div className="flex flex-col min-h-screen">
        {/* Trading Pair Header */}
        <div
          className={`${
            theme === "dark"
              ? "bg-gray-900 border-gray-800"
              : "bg-white border-gray-200"
          } border-b px-4 py-3`}
        >
          <div className="flex flex-row lg:flex-row justify-between lg:justify-start items-start lg:items-center gap-10 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <button className="flex items-center space-x-1 text-lg font-bold">
                <span
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                >
                  BTCUSDT
                </span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-500">Perp</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>

              <div className="flex flex-col md:flex-row items-start md:items-center">
                <span className="text-2xl font-bold text-red-500">
                  105309.3
                </span>
                <span className="text-red-500 md:ml-2">-25.30 -0.02%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 text-gray-400 text-[11px] sm:text-xs md:text-sm">
              <div>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } block`}
                >
                  Mark
                </span>
                <span
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                >
                  105,309.2
                </span>
              </div>
              <div>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } block`}
                >
                  Index
                </span>
                <span
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                >
                  105,358.6
                </span>
              </div>
              <div>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } block`}
                >
                  24h High
                </span>
                <span
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                >
                  106,775.0
                </span>
              </div>
              <div>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } block`}
                >
                  24h Low
                </span>
                <span
                  className={theme === "dark" ? "text-white" : "text-gray-900"}
                >
                  104,822.4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex lg:hidden justify-around border-b border-gray-700 bg-gray-800">
          <button
            onClick={() => setMobileTab("chart")}
            className={` py-2 text-sm ${
              mobileTab === "chart"
                ? "border-b-2 border-yellow-500 text-yellow-400"
                : "text-gray-400"
            }`}
          >
            Chart
          </button>
          <button
            onClick={() => setMobileTab("orderBook")}
            className={` py-2 text-sm ${
              mobileTab === "orderBook"
                ? "border-b-2 border-yellow-500 text-yellow-400"
                : "text-gray-400"
            }`}
          >
            Order Book
          </button>
        </div>

        {/* Main Trading Layout */}
        <div className="flex h-[60vh] md:h-[calc(100vh-120px)]">
          {/* Left Side - Order Book */}
          <div
            className={`w-80 hidden lg:flex flex-col ${
              theme === "dark"
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-300"
            } border-r`}
          >
            <OrderBook />
          </div>

          {/* Center Panel - Chart or Order Book (in mobile) */}
          <div className="flex-1 flex flex-col">
            {/* Mobile-only Tab Rendering */}
            <div className="lg:hidden flex-1 overflow-y-auto">
              {mobileTab === "chart" && (
                <div
                  className={`${
                    theme === "dark" ? "bg-gray-900" : "bg-white"
                  } h-full`}
                >
                  <TradingViewChart />
                </div>
              )}
              {mobileTab === "orderBook" && (
                <div
                  className={`h-full overflow-y-auto ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-800"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <OrderBook />
                </div>
              )}
            </div>

            {/* Desktop-only Chart */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden">
              <TradingViewChart />
            </div>
          </div>

          {/* Right Panel - Buy/Sell (hidden in mobile) */}
          <div className="w-100 hidden lg:block">
            <TradingInput />
          </div>
        </div>

        {/* Bottom Trading Panel */}
        <TradePosition />

        {/* Mobile Trading Input Modal */}
        <div
          className={`fixed inset-0 z-50 flex justify-center items-end bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            showTradingPanelModal
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          } lg:hidden`}
          onClick={handleCloseTradingPanelModal}
        >
          {/* Modal Content */}
          <div
            className={`w-full p-4 rounded-t-xl shadow-lg transition-transform duration-300 transform ${
              showTradingPanelModal ? "translate-y-0" : "translate-y-full"
            } ${bgColor}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={handleCloseTradingPanelModal}
                className="text-white text-sm px-2 py-1 bg-red-500 hover:bg-red-600 rounded"
              >
                <i className="fas fa-close" />
              </button>
            </div>
            <div className="flex justify-center w-full">
              <TradingInput />
            </div>
          </div>
        </div>

        {/* Mobile Buy/Sell Buttons */}
        <div
          className={`fixed bottom-0 left-0 right-0 p-2 ${bgColor} border-t ${borderColor} lg:hidden flex justify-around z-10`}
        >
          <button
            onClick={handleBuySellClick}
            className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold text-lg"
          >
            Buy
          </button>
          <button
            onClick={handleBuySellClick}
            className="w-1/2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold text-lg"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default COINMFutures;
