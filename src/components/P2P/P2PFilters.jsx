import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const P2PFilters = ({
  selectedCrypto,
  setSelectedCrypto,
  selectedCurrency,
  setSelectedCurrency,
  selectedPayments,
  setSelectedPayments,
  showCurrencyDropdown,
  setShowCurrencyDropdown,
  showPaymentDropdown,
  setShowPaymentDropdown,
  cryptoList,
  currencies,
  paymentMethods,
  togglePaymentMethod,
  currencySearch,
  setCurrencySearch,
  paymentSearch,
  setPaymentSearch
}) => {
  const { theme } = useTheme()

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} px-4 sm:px-6 py-4`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Left side filters */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          {/* Crypto Selection */}
          <div className="flex items-center space-x-2 overflow-x-auto">
            {cryptoList.slice(0, 6).map((crypto) => (
              <button
                key={crypto}
                onClick={() => setSelectedCrypto(crypto)}
                className={`px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCrypto === crypto
                    ? "bg-yellow-400 text-black"
                    : theme === 'dark'
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {crypto}
              </button>
            ))}
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className={`px-3 py-2 text-sm rounded-lg border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              {cryptoList.map((crypto) => (
                <option key={crypto} value={crypto}>
                  {crypto}
                </option>
              ))}
            </select>
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>{currencies.find(c => c.code === selectedCurrency)?.flag}</span>
              <span>{selectedCurrency}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {showCurrencyDropdown && (
              <div className={`absolute top-full left-0 mt-1 w-64 rounded-lg shadow-lg border z-50 ${
                theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
              }`}>
                <div className="p-3">
                  <input
                    type="text"
                    placeholder="Search currency..."
                    value={currencySearch}
                    onChange={(e) => setCurrencySearch(e.target.value)}
                    className={`w-full px-3 py-2 text-sm rounded border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {currencies
                    .filter(currency => 
                      currency.name.toLowerCase().includes(currencySearch.toLowerCase()) ||
                      currency.code.toLowerCase().includes(currencySearch.toLowerCase())
                    )
                    .map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => {
                          setSelectedCurrency(currency.code)
                          setShowCurrencyDropdown(false)
                          setCurrencySearch("")
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          selectedCurrency === currency.code ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''
                        }`}
                      >
                        <span>{currency.flag}</span>
                        <div>
                          <div className="font-medium">{currency.code}</div>
                          <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {currency.name}
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Payment Methods Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPaymentDropdown(!showPaymentDropdown)}
              className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>Payment</span>
              <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">
                {selectedPayments.length}
              </span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {showPaymentDropdown && (
              <div className={`absolute top-full left-0 mt-1 w-80 rounded-lg shadow-lg border z-50 ${
                theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
              }`}>
                <div className="p-3">
                  <input
                    type="text"
                    placeholder="Search payment methods..."
                    value={paymentSearch}
                    onChange={(e) => setPaymentSearch(e.target.value)}
                    className={`w-full px-3 py-2 text-sm rounded border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {paymentMethods
                    .filter(method => 
                      method.label.toLowerCase().includes(paymentSearch.toLowerCase())
                    )
                    .map((method) => (
                      <div
                        key={method.value}
                        onClick={() => togglePaymentMethod(method.value)}
                        className={`flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          selectedPayments.includes(method.value) ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedPayments.includes(method.value)}
                          onChange={() => {}}
                          className="h-4 w-4 text-yellow-400 rounded"
                        />
                        <div className="flex items-center space-x-2 flex-1">
                          {method.icon && (
                            <i className={`fas fa-${method.icon} text-sm`}></i>
                          )}
                          <span className="text-sm">{method.label}</span>
                          {method.recommended && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                              Recommended
                            </span>
                          )}
                          {method.popular && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-3">
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Refresh
          </span>
          <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default P2PFilters
