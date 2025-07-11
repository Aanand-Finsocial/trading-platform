import React, { useState } from "react";
import BuyCryptoNavigation from "./CryptoNavigation/BuyCryptoNavigation";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import Footer from "../../components/Footer/Footer";

const Deposit = ({ onPurpose = "Deposit Funds" }) => {
  const { theme } = useTheme();
  const { bgColor, textColor, borderColor, smTextColor, buttonBg } = themeColors(theme);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedPayment, setSelectedPayment] = useState(null);

  //following cards
  const paymentCards = [
    {
      index: 0,
      symbol: "🏦",
      name: "Payment by bank app",
      description: "Fast and secure bank transfer using your mobile banking app",
      discount: "Fees from 0.5 EUR",
      isInstant: false,
    },
    {
      index: 1,
      symbol: "Z",
      name: "Zen.com",
      description: "Instant deposit with cards, wallets and other local payment methods",
      discount: "1% Fee Instant",
      isInstant: true,
    },
    {
      index: 2,
      symbol: "A",
      name: "Apple Pay",
      description: "Quick and secure payment using your Apple device",
      discount: "2% Fee",
      isInstant: true,
    },
    {
      index: 3,
      symbol: "G",
      name: "Google Pay",
      description: "Pay securely with your Google account",
      discount: "2% Fee",
      isInstant: true,
    },
  ];

  //following currency
  const currency = [
    {
      index: 0,
      name: "USD",
      country: "United States Dollar",
      flag: "🇺🇸",
    },
    {
      index: 1,
      name: "INR",
      country: "Indian Rupee",
      flag: "🇮🇳",
    },
    {
      index: 2,
      name: "AED",
      country: "UAE Dirham",
      flag: "🇦🇪",
    },
    {
      index: 3,
      name: "AMD",
      country: "Armenian Dram",
      flag: "🇦🇲",
    },
  ];

  const handlePaymentSelect = (index) => {
    setSelectedPayment(index);
  };

  const handleContinue = () => {
    if (selectedPayment !== null) {
      console.log("Selected payment method:", paymentCards[selectedPayment]);
      // Handle continue logic here
    }
  };

  return (
    <>
      <BuyCryptoNavigation />
      <div className={`min-h-screen ${bgColor} ${textColor} font-sans pt-16 sm:pt-20 lg:pt-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          
          {/* Page Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {onPurpose}
            </h1>
            <p className={`${smTextColor} text-sm sm:text-base`}>
              Choose your preferred payment method to add funds to your account
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            
            {/* Main Content - Left Section */}
            <div className="w-full lg:w-2/3">
              <div className={`rounded-2xl border ${borderColor} p-4 sm:p-6 lg:p-8 shadow-lg`}>
                
                {/* Currency Selection */}
                <div className="mb-6 sm:mb-8">
                  <label className="block text-sm sm:text-base font-medium mb-3">
                    Select Currency
                  </label>
                  <div className={`border ${borderColor} rounded-xl p-3 sm:p-4 transition-all duration-200 focus-within:border-blue-500`}>
                    <select
                      name="currency"
                      id="currency"
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                      className={`w-full text-sm sm:text-base font-medium ${textColor} ${bgColor} focus:outline-none cursor-pointer`}
                    >
                      {currency.map((curr) => (
                        <option
                          key={curr.name}
                          value={curr.name}
                          className="bg-gray-900 text-white py-2"
                        >
                          {curr.flag} {curr.name} - {curr.country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Recommended Payment */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-semibold">Recommended</h3>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Best Rate
                    </span>
                  </div>
                  
                  <div 
                    onClick={() => handlePaymentSelect('recommended')}
                    className={`border ${borderColor} rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-pointer hover:border-blue-500 ${
                      selectedPayment === 'recommended' ? 'border-blue-500 bg-blue-50/10' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                        🏦
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base mb-1">
                          SEPA Bank Transfer (Credited as USDC)
                        </h4>
                        <p className={`${smTextColor} text-xs sm:text-sm mb-2 leading-relaxed`}>
                          You will receive USDC after making a bank transfer via our third-party partner Paymonade.
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-lg font-medium">
                            0.5 EUR Fee
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-lg">
                            1-2 hours
                          </span>
                        </div>
                      </div>
                      {selectedPayment === 'recommended' && (
                        <div className="text-blue-500 flex-shrink-0">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Other Payment Methods */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Other Payment Methods</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {paymentCards.map((element) => (
                      <div
                        key={element.index}
                        onClick={() => handlePaymentSelect(element.index)}
                        className={`border ${borderColor} rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-pointer hover:border-blue-500 transform hover:scale-[1.01] ${
                          selectedPayment === element.index ? 'border-blue-500 bg-blue-50/10' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                            {element.symbol}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                              {element.name}
                              {element.isInstant && (
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-lg">
                                  Instant
                                </span>
                              )}
                            </h4>
                            <p className={`${smTextColor} text-xs sm:text-sm mb-2`}>
                              {element.description}
                            </p>
                            <span className={`border ${borderColor} ${smTextColor} text-xs px-2 py-1 rounded-lg inline-block`}>
                              {element.discount}
                            </span>
                          </div>
                          {selectedPayment === element.index && (
                            <div className="text-blue-500 flex-shrink-0">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Button */}
                <div className="sticky bottom-4 sm:bottom-6">
                  <button
                    onClick={handleContinue}
                    disabled={selectedPayment === null}
                    className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                      selectedPayment !== null
                        ? `${buttonBg} text-black hover:opacity-90 shadow-lg`
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {selectedPayment !== null ? 'Continue' : 'Select a payment method'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - FAQ */}
            <div className="w-full lg:w-1/3">
              <div className={`rounded-2xl border ${borderColor} p-4 sm:p-6 shadow-lg h-fit lg:sticky lg:top-24`}>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className={`p-3 sm:p-4 rounded-xl border ${borderColor} hover:border-blue-500 transition-all duration-200 cursor-pointer group`}>
                    <h4 className="font-medium text-sm sm:text-base group-hover:text-blue-500 transition-colors">
                      What is P2P exchange?
                    </h4>
                    <p className={`${smTextColor} text-xs sm:text-sm mt-1`}>
                      Learn about peer-to-peer trading
                    </p>
                  </div>
                  
                  <div className={`p-3 sm:p-4 rounded-xl border ${borderColor} hover:border-blue-500 transition-all duration-200 cursor-pointer group`}>
                    <h4 className="font-medium text-sm sm:text-base group-hover:text-blue-500 transition-colors">
                      How do I buy Bitcoin locally?
                    </h4>
                    <p className={`${smTextColor} text-xs sm:text-sm mt-1`}>
                      Guide to local Bitcoin purchases
                    </p>
                  </div>
                  
                  <div className={`p-3 sm:p-4 rounded-xl border ${borderColor} hover:border-blue-500 transition-all duration-200 cursor-pointer group`}>
                    <h4 className="font-medium text-sm sm:text-base group-hover:text-blue-500 transition-colors">
                      Payment security & verification
                    </h4>
                    <p className={`${smTextColor} text-xs sm:text-sm mt-1`}>
                      How we protect your transactions
                    </p>
                  </div>
                  
                  <div className={`p-3 sm:p-4 rounded-xl border ${borderColor} hover:border-blue-500 transition-all duration-200 cursor-pointer group`}>
                    <h4 className="font-medium text-sm sm:text-base group-hover:text-blue-500 transition-colors">
                      Processing times & fees
                    </h4>
                    <p className={`${smTextColor} text-xs sm:text-sm mt-1`}>
                      Understanding costs and timing
                    </p>
                  </div>
                </div>

                {/* Support Contact */}
                <div className={`mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50/10 to-purple-50/10 border ${borderColor}`}>
                  <h4 className="font-semibold text-sm mb-2">Need Help?</h4>
                  <p className={`${smTextColor} text-xs mb-3`}>
                    Our support team is available 24/7
                  </p>
                  <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                    Contact Support →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deposit;
