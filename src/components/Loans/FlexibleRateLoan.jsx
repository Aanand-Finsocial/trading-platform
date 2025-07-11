import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import BorrowMarketTable from './BorrowMarketTable'
import AssetOverview from './AssetOverview'
import LoanFAQ from './LoanFAQ'
import RiskDisclaimer from './RiskDisclaimer'

const FlexibleRateLoan = () => {
  const { theme } = useTheme()
  const [activeAssetTab, setActiveAssetTab] = useState('asset-overview')

  const faqData = [
    {
      id: 1,
      question: "What is Flexible Rate Loan and how does it work?",
      answer: "Flexible Rate Loan is a borrowing service that allows you to borrow cryptocurrencies with variable interest rates. You can use borrowed funds for spot trading, margin trading, futures trading, or staking. The interest rate adjusts based on market conditions and supply/demand."
    },
    {
      id: 2,
      question: "What are the interest rates for borrowing?",
      answer: "Interest rates vary by cryptocurrency and market conditions. Rates are calculated hourly and compound over time. You can see current rates in the Borrow Market table above. Rates typically range from 0.0001% to 0.001% per hour."
    },
    {
      id: 3,
      question: "What can I use as collateral?",
      answer: "You can use various cryptocurrencies as collateral including BTC, ETH, USDT, USDC, and other supported assets. Some Simple Earn (Flexible) assets can also be used as collateral. The loan-to-value (LTV) ratio varies by asset type."
    },
    {
      id: 4,
      question: "How do I repay my loan?",
      answer: "You can repay your loan at any time without penalties. Repayment can be made using the same cryptocurrency you borrowed or equivalent value in other supported assets. Interest is calculated up to the moment of repayment."
    },
    {
      id: 5,
      question: "What happens if my collateral value drops?",
      answer: "If your collateral value drops and your LTV ratio exceeds the liquidation threshold, you'll receive margin call notifications. If the ratio continues to deteriorate, automatic liquidation may occur to protect both you and the platform from losses."
    }
  ]

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
        {/* Left Side - Content */}
        <div className="lg:col-span-2">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 ${theme === 'dark' ? 'text-yellow-500' : 'text-yellow-600'}`}>
            Flexible Rate Loan
          </h1>
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Borrow for Spot/Margin/Futures Trading or staking to earn high APY.
          </h2>
          
          {/* Features */}
          <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            <div className="flex items-center space-x-3">
              <i className="fas fa-clock text-yellow-500"></i>
              <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Repay at any time
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-coins text-yellow-500"></i>
              <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                No transaction fee
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-chart-line text-yellow-500"></i>
              <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Simple Earn (Flexible) assets can be collateralized in Flexible Loan ↗
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full sm:w-auto px-6 lg:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
            Borrow Now
          </button>
        </div>

        {/* Right Side - Promotional Cards */}
        <div className="space-y-4">
          <div className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold text-sm lg:text-base ${theme === 'dark' ? 'text-yellow-500' : 'text-yellow-600'}`}>
                Fixed Rate Loans
              </h3>
              <div className="flex items-center space-x-2">
                <i className="fas fa-coins text-yellow-500 text-sm"></i>
                <i className="fas fa-percentage text-yellow-500 text-sm"></i>
              </div>
            </div>
            <p className={`text-xs lg:text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Create a borrow request or supply order with your preferred amount and interest rate.
            </p>
            <button className="text-yellow-500 hover:text-yellow-600 text-xs lg:text-sm font-medium">
              Explore Now
            </button>
          </div>

          <div className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold text-sm lg:text-base ${theme === 'dark' ? 'text-yellow-500' : 'text-yellow-600'}`}>
                VIP Loan
              </h3>
              <div className="flex items-center space-x-2">
                <i className="fas fa-lock text-yellow-500 text-sm"></i>
                <i className="fas fa-star text-yellow-500 text-sm"></i>
              </div>
            </div>
            <p className={`text-xs lg:text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Institutional Level Loan Services for VIP users
            </p>
            <button className="text-yellow-500 hover:text-yellow-600 text-xs lg:text-sm font-medium">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Borrow Market Section */}
      <BorrowMarketTable />

      {/* Asset Overview Section */}
      <AssetOverview activeTab={activeAssetTab} setActiveTab={setActiveAssetTab} />

      {/* FAQ Section */}
      <LoanFAQ 
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Flexible Rate Loans and crypto borrowing."
        faqData={faqData}
      />

      {/* Risk Disclaimer */}
      <RiskDisclaimer type="flexible" />
    </div>
  )
}



export default FlexibleRateLoan
