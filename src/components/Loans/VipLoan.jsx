import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import LoanFAQ from './LoanFAQ'
import RiskDisclaimer from './RiskDisclaimer'

const VipLoan = () => {
  const { theme } = useTheme()

  const vipLoanFaqData = [
    {
      id: 1,
      question: "What is VIP Loan and who is eligible?",
      answer: "VIP Loan is an institutional-level loan service designed for high-net-worth individuals and VIP users. Eligibility is based on your VIP tier, trading volume, and account balance."
    },
    {
      id: 2,
      question: "What are the benefits of delayed liquidation?",
      answer: "Delayed liquidation provides VIP users with additional time to add collateral or reduce debt before liquidation occurs. This feature reduces the risk of forced liquidation during short-term market volatility."
    }
  ]

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Main Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left Side - Content */}
        <div>
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 ${theme === 'dark' ? 'text-yellow-500' : 'text-yellow-600'}`}>
            VIP Loan
          </h1>
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Institutional Level Loan Service
          </h2>
          
          <p className={`text-base lg:text-lg mb-6 lg:mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Delayed liquidation, support fixed and flexible rates and aggregate assets across accounts as collateral to enhance capital efficiency.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
            <button className="px-6 lg:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
              Apply Now
            </button>
            <button className={`px-6 lg:px-8 py-3 border rounded-lg font-semibold transition-colors ${
              theme === 'dark' 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }`}>
              Contact Us
            </button>
          </div>

          {/* VIP Program Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Level up your VIP tier with Loan
            </span>
            <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium">
              VIP Borrower program ›
            </button>
          </div>
        </div>

        {/* Right Side - Bank Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className={`w-48 h-36 sm:w-64 sm:h-48 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg relative`}>
              {/* Bank Front */}
              <div className={`absolute inset-x-4 bottom-0 top-8 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} rounded-t-lg`}>
                {/* Bank Sign */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                    <i className="fas fa-university text-black text-sm"></i>
                  </div>
                </div>
              </div>
              {/* Security Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-lock text-black text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIP Assets Table - simplified */}
      <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className={`px-4 sm:px-6 py-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-lg lg:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            VIP Loanable Assets
          </h3>
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4">
              <i className="fas fa-search text-4xl sm:text-6xl text-gray-400"></i>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Apply for VIP status to access these features.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <LoanFAQ 
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about VIP Loans and institutional-level services."
        faqData={vipLoanFaqData}
      />

      {/* Risk Disclaimer */}
      <RiskDisclaimer type="vip" />
    </div>
  )
}


      

export default VipLoan
