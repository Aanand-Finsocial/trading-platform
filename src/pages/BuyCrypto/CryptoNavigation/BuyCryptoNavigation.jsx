import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { themeColors, useTheme } from "../../../contexts/ThemeContext";

const BuyCryptoNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor, buttonBg } = themeColors(theme);

  const navigationItems = [
    { path: "/buy-crypto/", label: "Buy & Sell", icon: "fas fa-exchange-alt", isExact: true },
    { path: "/buy-crypto/limit-buy", label: "Limit Buy", icon: "fas fa-chart-line" },
    { path: "/buy-crypto/Recurring-buy", label: "Recurring Buy", icon: "fas fa-sync" },
    { path: "/buy-crypto/Deposit-buy", label: "Deposit", icon: "fas fa-plus-circle" },
    { path: "/buy-crypto/withdraw-buy", label: "Withdraw", icon: "fas fa-minus-circle" },
  ];

  return (
    <div className={`${bgColor} border-b ${borderColor} sticky top-14 sm:top-16 z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <nav className="hidden md:block py-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.isExact}
                  className={({ isActive }) =>
                    `px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-200 relative overflow-hidden group ${
                      isActive
                        ? theme === "dark"
                          ? "text-blue-400 bg-gradient-to-r from-blue-900/30 to-purple-900/30 shadow-lg"
                          : "text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md"
                        : theme === "dark"
                          ? "text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                    }`
                  }
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <i className={`${item.icon} text-sm`}></i>
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </NavLink>
              ))}
            </div>

           
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden py-3">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-lg font-semibold ${textColor}`}>
              Buy Crypto
            </h2>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg border ${borderColor} transition-all duration-200 ${
                menuOpen ? 'bg-blue-50/10 border-blue-500' : 'hover:border-blue-500'
              }`}
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-sm ${textColor}`}></i>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className={`transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-2 pb-3">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.isExact}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? theme === "dark"
                          ? "text-blue-400 bg-blue-900/20 border border-blue-700/50"
                          : "text-blue-600 bg-blue-50 border border-blue-200"
                        : theme === "dark"
                          ? "text-gray-400 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`
                  }
                >
                  <i className={`${item.icon} w-4 text-center`}></i>
                  {item.label}
                </NavLink>
              ))}

              
            </div>
          </div>

          {/* Mobile Quick Navigation Bar (Always Visible) */}
          <div className={`flex overflow-x-auto scrollbar-hide gap-2 py-2 ${menuOpen ? 'hidden' : 'block'}`}>
            {navigationItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.isExact}
                className={({ isActive }) =>
                  `flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? theme === "dark"
                        ? "text-blue-400 bg-blue-900/20"
                        : "text-blue-600 bg-blue-50"
                      : theme === "dark"
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`
                }
              >
                <i className={`${item.icon} text-xs`}></i>
                <span className="whitespace-nowrap">{item.label}</span>
              </NavLink>
            ))}
            <button 
              onClick={() => setMenuOpen(true)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              <i className="fas fa-ellipsis-h text-xs"></i>
              <span>More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay for Mobile Menu */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-[-1]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default BuyCryptoNavigation;
