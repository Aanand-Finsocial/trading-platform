import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const RiskDisclaimer = ({ type = 'flexible' }) => {
  const { theme } = useTheme()

  const getDisclaimerContent = () => {
    switch (type) {
      case 'vip':
        return {
          color: 'purple',
          icon: 'fas fa-crown',
          title: 'VIP Loan Considerations',
          content: 'VIP Loans involve larger amounts and institutional-level responsibilities. While offering enhanced features like delayed liquidation and cross-account collateral, these products require sophisticated risk management.'
        }
      case 'fixed':
        return {
          color: 'blue',
          icon: 'fas fa-info-circle',
          title: 'Fixed Rate Loan Important Information',
          content: 'Fixed Rate Loans lock in interest rates for the loan duration, providing rate certainty but potentially limiting flexibility to benefit from favorable rate changes.'
        }
      default:
        return {
          color: 'red',
          icon: 'fas fa-exclamation-triangle',
          title: 'Risk Warning',
          content: 'Cryptocurrency lending carries significant risks including potential loss of collateral through liquidation. Interest rates are variable and can change rapidly. Only borrow amounts you can afford to repay.'
        }
    }
  }

  const disclaimer = getDisclaimerContent()
  const colorClasses = {
    red: {
      bg: theme === 'dark' ? 'bg-red-900/10 border-red-800' : 'bg-red-50 border-red-200',
      icon: 'text-red-500',
      title: theme === 'dark' ? 'text-red-400' : 'text-red-800',
      content: theme === 'dark' ? 'text-red-300' : 'text-red-700'
    },
    purple: {
      bg: theme === 'dark' ? 'bg-purple-900/10 border-purple-800' : 'bg-purple-50 border-purple-200',
      icon: 'text-purple-500',
      title: theme === 'dark' ? 'text-purple-400' : 'text-purple-800',
      content: theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
    },
    blue: {
      bg: theme === 'dark' ? 'bg-blue-900/10 border-blue-800' : 'bg-blue-50 border-blue-200',
      icon: 'text-blue-500',
      title: theme === 'dark' ? 'text-blue-400' : 'text-blue-800',
      content: theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
    }
  }

  const colors = colorClasses[disclaimer.color]

  return (
    <div className={`rounded-lg border ${colors.bg} p-4 sm:p-6`}>
      <div className="flex items-start space-x-3">
        <i className={`${disclaimer.icon} ${colors.icon} mt-1 text-lg`}></i>
        <div className="flex-1">
          <h3 className={`font-bold mb-2 text-sm sm:text-base ${colors.title}`}>
            {disclaimer.title}
          </h3>
          <p className={`text-xs sm:text-sm leading-relaxed ${colors.content}`}>
            {disclaimer.content}
          </p>
        </div>
      </div>
    </div>
  )
}



export default RiskDisclaimer
