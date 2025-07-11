import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const BeginnersGuide = ({ show, onClose }) => {
  const { theme } = useTheme()

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`max-w-2xl w-full rounded-lg shadow-xl max-h-[90vh] overflow-y-auto ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              P2P Trading Guide
            </h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What is P2P Trading?
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Peer-to-peer (P2P) trading allows you to buy and sell cryptocurrencies directly with other users. 
                You can set your own price and choose your preferred payment method.
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                How to Buy Crypto
              </h3>
              <ol className={`list-decimal list-inside space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Choose the cryptocurrency you want to buy</li>
                <li>Select your preferred currency and payment method</li>
                <li>Browse available offers from verified advertisers</li>
                <li>Click "Buy" on an offer that suits your needs</li>
                <li>Complete the payment within the specified time limit</li>
                <li>Wait for the seller to release the crypto to your wallet</li>
              </ol>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Safety Tips
              </h3>
              <ul className={`list-disc list-inside space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Only trade with verified users</li>
                <li>Check the advertiser's completion rate and number of trades</li>
                <li>Read the terms and conditions carefully</li>
                <li>Use the platform's escrow service for protection</li>
                <li>Keep records of all communications and transactions</li>
              </ul>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Payment Methods
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                We support various payment methods including bank transfers, UPI, digital wallets, and more. 
                Choose the method that's most convenient for you.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginnersGuide
