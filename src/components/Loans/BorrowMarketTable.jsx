import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const BorrowMarketTable = () => {
  const { theme } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const [showAllCoins, setShowAllCoins] = useState(false)

  const borrowMarketData = [
    {
      coin: 'BTC',
      icon: 'fab fa-bitcoin',
      color: 'text-orange-500',
      hourlyRate: '0.000131%',
      annualRate: '1.150801%'
    },
    {
      coin: 'ETH',
      icon: 'fab fa-ethereum',
      color: 'text-blue-500',
      hourlyRate: '0.00028%',
      annualRate: '2.454342%'
    },
    {
      coin: 'USDT',
      icon: 'fas fa-dollar-sign',
      color: 'text-green-500',
      hourlyRate: '0.000664%',
      annualRate: '5.81261%'
    },
    {
      coin: 'XRP',
      icon: 'fas fa-times',
      color: 'text-gray-400',
      hourlyRate: '0.000695%',
      annualRate: '6.090653%'
    },
    {
      coin: 'SOL',
      icon: 'fas fa-sun',
      color: 'text-purple-500',
      hourlyRate: '0.000792%',
      annualRate: '6.937605%'
    },
    {
      coin: 'USDC',
      icon: 'fas fa-circle',
      color: 'text-blue-400',
      hourlyRate: '0.000691%',
      annualRate: '6.052967%'
    },
    {
      coin: 'ADA',
      icon: 'fas fa-heart',
      color: 'text-blue-600',
      hourlyRate: '0.000523%',
      annualRate: '4.581428%'
    },
    {
      coin: 'DOT',
      icon: 'fas fa-circle-dot',
      color: 'text-pink-500',
      hourlyRate: '0.000612%',
      annualRate: '5.361072%'
    }
  ]

  const filteredBorrowData = borrowMarketData.filter(item =>
    item.coin.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedBorrowData = searchTerm || showAllCoins 
    ? filteredBorrowData 
    : filteredBorrowData.slice(0, 6)

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      {/* Header */}
      <div className={`px-4 sm:px-6 py-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className={`text-lg lg:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Borrow Market
          </h3>
          
          {/* Search Box */}
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className={`fas fa-search text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}></i>
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 pr-4 py-2 border rounded-lg text-sm w-full sm:w-64 ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <th className={`px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Loanable Coin
              </th>
              <th className={`px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Hourly Interest Rate
              </th>
              <th className={`px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Annually Interest Rate
              </th>
              <th className={`px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedBorrowData.map((item, index) => (
              <tr 
                key={item.coin}
                className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} transition-colors`}
              >
                <td className="px-4 sm:px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                      item.coin === 'BTC' ? 'bg-orange-100' :
                      item.coin === 'ETH' ? 'bg-blue-100' :
                      item.coin === 'USDT' ? 'bg-green-100' :
                      'bg-gray-100'
                    }`}>
                      <i className={`${item.icon} ${item.color} text-xs sm:text-sm`}></i>
                    </div>
                    <span className={`font-medium text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.coin}
                    </span>
                  </div>
                </td>
                <td className={`px-4 sm:px-6 py-4 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.hourlyRate}
                </td>
                <td className={`px-4 sm:px-6 py-4 text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.annualRate}
                </td>
                <td className="px-4 sm:px-6 py-4 text-center">
                  <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg text-xs sm:text-sm transition-colors">
                    Borrow
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View More/Less Button */}
      {!searchTerm && filteredBorrowData.length > 6 && (
        <div className="px-4 sm:px-6 py-4 text-center border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={() => setShowAllCoins(!showAllCoins)}
            className="text-yellow-500 hover:text-yellow-600 font-medium flex items-center space-x-2 mx-auto transition-colors"
          >
            <span>{showAllCoins ? 'View Less' : 'View More'}</span>
            <i className={`fas ${showAllCoins ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
          </button>
        </div>
      )}
    </div>
  )
}



export default BorrowMarketTable
