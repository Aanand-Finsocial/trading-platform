import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const LoanFAQ = ({ title, subtitle, faqData }) => {
  const { theme } = useTheme()
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-6 lg:p-8`}>
      <div className="mb-6 lg:mb-8">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        <p className={`text-base lg:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div 
            key={faq.id} 
            className={`border rounded-lg ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className={`w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-opacity-50 transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}
            >
              <span className={`font-semibold pr-4 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {faq.question}
              </span>
              <i className={`fas ${openFAQ === faq.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } flex-shrink-0`}></i>
            </button>
            
            {openFAQ === faq.id && (
              <div className={`px-4 sm:px-6 pb-4 sm:pb-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={`pt-4 leading-relaxed text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className={`mt-6 lg:mt-8 p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h3 className={`text-lg sm:text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Still have questions?
          </h3>
          <p className={`mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Our support team is here to help you with any loan-related questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
              Contact Support
            </button>
            <button className={`px-6 py-3 border rounded-lg font-semibold transition-colors ${
              theme === 'dark' 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }`}>
              Loan Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanFAQ
