import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import LoanFAQ from './LoanFAQ'
import RiskDisclaimer from './RiskDisclaimer'

const FixedRateLoans = () => {
  const { theme } = useTheme()
  const [fixedRateWorkflowTab, setFixedRateWorkflowTab] = useState('borrower')

  const fixedRateLoanFaqData = [
    {
      id: 1,
      question: "What are Fixed Rate Loans and how do they differ from Flexible Rate Loans?",
      answer: "Fixed Rate Loans allow you to lock in a specific interest rate for the entire loan duration, providing predictability and protection from market volatility. Unlike flexible rate loans where rates can change based on market conditions, fixed rates remain constant throughout the loan term, making it easier to plan your finances and manage risk."
    },
    {
      id: 2,
      question: "How does the order matching system work?",
      answer: "Our automated matching system connects borrowers and lenders based on compatible terms including interest rate, loan amount, duration, and collateral requirements. The algorithm prioritizes orders with the best rate matches and ensures fair distribution among participants."
    },
    {
      id: 3,
      question: "What cryptocurrencies can I use as collateral?",
      answer: "We support multiple major cryptocurrencies as collateral including Bitcoin (BTC), Ethereum (ETH), Cardano (ADA), Solana (SOL), and other established tokens. Each asset has different collateral ratios based on its volatility and liquidity profile."
    },
    {
      id: 4,
      question: "What happens if my collateral value drops below the required ratio?",
      answer: "If your collateral-to-loan ratio falls below the maintenance threshold (typically 110-120%), you'll receive margin call notifications. You can either add more collateral or partially repay the loan. If the ratio drops too low, automatic liquidation may occur to protect lenders."
    },
    {
      id: 5,
      question: "Can I repay my loan early without penalties?",
      answer: "Yes, you can repay your fixed rate loan at any time without early repayment penalties. Early repayment will unlock your collateral immediately and may save you on interest payments, though the agreed fixed rate applies to the time the loan was active."
    },
    {
      id: 6,
      question: "How are interest rates determined for fixed rate loans?",
      answer: "Interest rates are determined by market forces - borrowers propose rates they're willing to pay, and lenders set rates they're willing to accept. The matching system finds compatible rates. Rates typically depend on loan duration, collateral type, and current market conditions."
    },
    {
      id: 7,
      question: "What are the minimum and maximum loan amounts?",
      answer: "Minimum loan amounts typically start from $100 USD equivalent, while maximum amounts depend on available liquidity and your collateral value. Individual loans can range up to $1 million USD equivalent, subject to platform limits and collateral requirements."
    },
    {
      id: 8,
      question: "How long can I borrow for with fixed rate loans?",
      answer: "Fixed rate loan terms typically range from 7 days to 365 days. Popular durations include 30, 60, 90, and 180-day terms. Longer-term loans may offer better rates but require higher collateral ratios due to increased market risk."
    },
    {
      id: 9,
      question: "What fees are associated with fixed rate loans?",
      answer: "Platform fees typically include a small origination fee (0.1-0.5% of loan amount) and may include withdrawal fees for certain cryptocurrencies. All fees are clearly displayed before you confirm any transaction. There are no hidden charges or early repayment penalties."
    },
    {
      id: 10,
      question: "Is my collateral safe and how is it protected?",
      answer: "Your collateral is secured in audited smart contracts with multi-signature security. We use industry-standard security practices including cold storage for excess funds, regular security audits, and insurance coverage. The platform has never experienced a security breach."
    },
    {
      id: 11,
      question: "Can I partially repay my loan or add more collateral?",
      answer: "Yes, you can make partial repayments at any time, which will proportionally reduce your collateral requirements. You can also add more collateral to improve your loan-to-value ratio and reduce liquidation risk. These actions can be performed through your loan management dashboard."
    },
    {
      id: 12,
      question: "What happens if I can't repay my loan on time?",
      answer: "If you cannot repay by the maturity date, the loan may enter default status. Your collateral will be used to repay the lender automatically. We recommend monitoring your loans closely and communicating early if you anticipate repayment difficulties to explore possible solutions."
    }
  ]

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
        {/* Left Side - Content */}
        <div className="lg:col-span-2">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 ${theme === 'dark' ? 'text-yellow-500' : 'text-yellow-600'}`}>
            Fixed Rate Loans
          </h1>
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Borrow and Supply with Your Chosen Fixed Interest Rate
          </h2>
          
          {/* Features */}
          <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            <div className="flex items-center space-x-3">
              <i className="fas fa-coins text-yellow-500"></i>
              <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Borrow with customized interest rate
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-percentage text-yellow-500"></i>
              <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Earn customized interest rate
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-layer-group text-yellow-500"></i>
              <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Multi-Asset Collateral Supported
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-6">
            <button className="px-6 lg:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
              Supply Fund
            </button>
            <button className={`px-6 lg:px-8 py-3 border rounded-lg font-semibold transition-colors ${
              theme === 'dark' 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 bg-gray-700' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400 bg-gray-100'
            }`}>
              Borrow Fund
            </button>
          </div>

          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Create a borrow request or supply order with your preferred amount and interest rate.
          </p>
        </div>

        {/* Right Side - Order Management */}
        <div className={`p-4 sm:p-6 rounded-lg border ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-base lg:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              My Order
            </h3>
            <i className="fas fa-external-link-alt text-gray-400"></i>
          </div>

          <div className="mb-6">
            <h4 className={`font-medium mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Pending Orders
            </h4>
            <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Check and manage unmatched orders
            </p>
          </div>

          <div>
            <h4 className={`font-medium mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Ongoing Orders
            </h4>
            <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Check, adjust LTV, and repay matched orders
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              How Fixed Rate Loans Work
            </h2>
            <p className={`text-base lg:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Choose your role and start earning or borrowing with fixed rates
            </p>
          </div>

          {/* Workflow Tabs */}
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className={`inline-flex rounded-lg p-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <button
                onClick={() => setFixedRateWorkflowTab('borrower')}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  fixedRateWorkflowTab === 'borrower'
                    ? 'bg-yellow-500 text-black'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="fas fa-hand-holding-usd mr-2"></i>
                As a Borrower
              </button>
              <button
                onClick={() => setFixedRateWorkflowTab('lender')}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  fixedRateWorkflowTab === 'lender'
                    ? 'bg-yellow-500 text-black'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="fas fa-piggy-bank mr-2"></i>
                As a Lender
              </button>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4">
            {fixedRateWorkflowTab === 'borrower' ? (
              <>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-black font-bold text-lg">
                      1
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Create Borrow Request
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Set your desired loan amount, fixed interest rate, duration, and preferred cryptocurrency
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-black font-bold text-lg">
                      2
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Choose Collateral
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Select from multiple supported cryptocurrencies and determine your collateral ratio
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-black font-bold text-lg">
                      3
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Deposit Collateral
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Transfer your chosen cryptocurrency assets to secure smart contract escrow
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-black font-bold text-lg">
                      4
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Get Matched
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Our automated system matches you with lenders offering compatible terms and rates
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-black font-bold text-lg">
                      5
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Receive Funds
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Get instant access to borrowed funds at your locked-in fixed interest rate
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-black font-bold text-lg">
                      6
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Manage & Repay
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Monitor LTV ratio, make partial payments, or repay early to unlock collateral
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Create Supply Order
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Set lending amount, minimum fixed interest rate, preferred duration, and risk tolerance
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Set Risk Parameters
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Define minimum collateral ratios and acceptable collateral types for borrowers
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Lock Funds
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Deposit cryptocurrency to smart contract lending pool with automated fund management
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Get Matched
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Algorithm connects you with qualified borrowers meeting your risk and return criteria
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                      5
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Monitor Loans
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Track loan performance, collateral health, and receive real-time notifications
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                      6
                    </div>
                  </div>
                  <h4 className={`font-bold mb-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Earn Returns
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Receive consistent fixed returns plus principal repayment at loan maturity
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <LoanFAQ 
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about Fixed Rate Loans and customizable lending terms."
        faqData={fixedRateLoanFaqData}
      />

      {/* Risk Disclaimer */}
      <RiskDisclaimer type="fixed" />
    </div>
  )
}

export default FixedRateLoans
