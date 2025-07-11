import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const BTCAccelerator = () => {
  const { theme } = useTheme()
  const [txHash, setTxHash] = useState('')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqData = [
    {
      question: 'What is a transaction accelerator?',
      answer: 'A transaction accelerator is a service that helps speed up Bitcoin transactions by prioritizing them in the mining pools. When the Bitcoin network is congested, transactions with lower fees might take longer to confirm. Our accelerator service works with mining pools to include your transaction in the next available block.'
    },
    {
      question: 'Why does it take so long for a transaction to be confirmed?',
      answer: 'Bitcoin transactions require confirmation by miners who include them in blocks. When the network is busy, transactions with higher fees get priority. If your transaction has a low fee relative to network demand, it may take longer to be picked up by miners. Network congestion, fee competition, and block size limits all contribute to confirmation delays.'
    },
    {
      question: 'When can I use a transaction accelerator?',
      answer: 'You can use a transaction accelerator when your Bitcoin transaction has been pending for an extended period (typically more than 30 minutes to several hours). It\'s most useful during periods of high network congestion when transactions with lower fees are experiencing delays. The accelerator works best for transactions that are stuck in the mempool.'
    },
    {
      question: 'Can I cancel my acceleration request?',
      answer: 'Once a transaction acceleration request has been submitted and is being processed by our mining partners, it cannot be cancelled. However, if your transaction gets confirmed through normal network processing before our acceleration takes effect, you will not be charged for the service. We recommend only using acceleration for transactions that are genuinely stuck.'
    },
    {
      question: 'How long will it take to confirm my transaction after using a transaction accelerator?',
      answer: 'After using our transaction accelerator, most transactions are confirmed within the next 1-3 blocks, which typically means 10-30 minutes. However, the exact time depends on network conditions, the current mining difficulty, and the specific mining pools we partner with. During extremely high congestion periods, it may take slightly longer.'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
            BTC Transaction Accelerator
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} max-w-3xl`}>
            Finsocial Pool collaborates with leading mining pools to offer the quickest BTC transaction acceleration service. If you see a mining pool other than Finsocial Pool confirming your transaction, it could be one of the partner pools.
          </p>
        </div>
        <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}>
          <i className="fas fa-history"></i>
          <span>Acceleration history</span>
        </button>
      </div>

      {/* Transaction Input Form */}
      <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg`}>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <input
              type="text"
              value={txHash}
              onChange={(e) => setTxHash(e.target.value)}
              placeholder="Enter transaction ID"
              className={`w-full px-6 py-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-slate-300 text-slate-800 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg`}
            />
          </div>
          <button
            className={`px-8 py-4 rounded-lg font-semibold transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Clear
          </button>
          <button
            disabled={!txHash}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              txHash
                ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
            }`}
          >
            Check
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-slate-200'} shadow-lg transition-all duration-300`}
            >
              <button
                className="w-full p-6 text-left focus:outline-none"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'} hover:text-blue-600 transition-colors`}>
                    {index + 1}. {faq.question}
                  </h4>
                  <i className={`fas fa-chevron-${expandedFaq === index ? 'up' : 'down'} ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} transition-transform duration-300`}></i>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="text-center mt-8">
          <button className={`px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}>
            More
            <i className="fas fa-chevron-down ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BTCAccelerator
