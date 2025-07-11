import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'
import FlexibleRateLoan from '../../components/Loans/FlexibleRateLoan'
import VipLoan from '../../components/Loans/VipLoan'
import FixedRateLoans from '../../components/Loans/FixedRateLoans'
import LoanHistory from '../../components/Loans/LoanHistory'
import LoanData from '../../components/Loans/LoanData'

const Loans = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('flexible-rate-loan')

  const tabs = [
    {
      id: 'flexible-rate-loan',
      label: 'Flexible Rate Loan',
      description: 'Borrow for Spot/Margin/Futures Trading or staking to earn high APY.'
    },
    {
      id: 'vip-loan',
      label: 'VIP Loan',
      description: 'Institutional Level Loan Service'
    },
    {
      id: 'fixed-rate-loans',
      label: 'Fixed Rate Loans',
      description: 'Borrow and Supply with Your Chosen Fixed Interest Rate'
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'flexible-rate-loan':
        return <FlexibleRateLoan />
      case 'vip-loan':
        return <VipLoan />
      case 'fixed-rate-loans':
        return <FixedRateLoans />
      case 'loan-history':
        return <LoanHistory />
      case 'loan-data':
        return <LoanData />
      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation Tabs */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} sticky top-16 z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-4 sm:space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs sm:text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${
                    tab.id === activeTab
                      ? 'border-yellow-500 text-yellow-500'
                      : theme === 'dark'
                        ? 'border-transparent text-gray-400 hover:text-gray-200'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Action Links */}
            <div className="flex flex-wrap gap-4 sm:space-x-6">
              <button 
                onClick={() => setActiveTab('loan-history')}
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'loan-history'
                    ? 'text-yellow-500'
                    : 'text-yellow-500 hover:text-yellow-600'
                }`}
              >
                <i className="fas fa-history mr-1"></i>
                Loan History
              </button>
              <button 
                onClick={() => setActiveTab('loan-data')}
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'loan-data'
                    ? 'text-yellow-500'
                    : 'text-yellow-500 hover:text-yellow-600'
                }`}
              >
                <i className="fas fa-chart-bar mr-1"></i>
                Loan Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {renderTabContent()}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Loans