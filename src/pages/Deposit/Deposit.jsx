import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'
import Footer from '../../components/Footer/Footer'

const Deposit = () => {
  const { theme } = useTheme()
  const { user } = useUser()
  const [activeTab, setActiveTab] = useState('crypto')
  const [selectedCrypto, setSelectedCrypto] = useState('BTC')
  const [selectedFiat, setSelectedFiat] = useState('USD')
  const [depositAmount, setDepositAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('bank_transfer')
  const [isProcessing, setIsProcessing] = useState(false)
  const [depositHistory, setDepositHistory] = useState([
    {
      id: 1,
      type: 'Crypto',
      currency: 'BTC',
      amount: '0.5',
      usdValue: '21,265.13',
      status: 'Completed',
      date: '2024-01-15 14:30:00',
      txHash: '0x1234...5678'
    },
    {
      id: 2,
      type: 'Fiat',
      currency: 'USD',
      amount: '1,000.00',
      usdValue: '1,000.00',
      status: 'Processing',
      date: '2024-01-14 10:15:00',
      reference: 'DEP-789456123'
    },
    {
      id: 3,
      type: 'Crypto',
      currency: 'ETH',
      amount: '2.5',
      usdValue: '6,701.25',
      status: 'Completed',
      date: '2024-01-13 16:45:00',
      txHash: '0xabcd...efgh'
    }
  ])

  const cryptoOptions = [
    { symbol: 'BTC', name: 'Bitcoin', network: 'Bitcoin', fee: '0.0005 BTC', minDeposit: '0.001 BTC' },
    { symbol: 'ETH', name: 'Ethereum', network: 'Ethereum (ERC20)', fee: '0.005 ETH', minDeposit: '0.01 ETH' },
    { symbol: 'USDT', name: 'Tether', network: 'Ethereum (ERC20)', fee: '5 USDT', minDeposit: '10 USDT' },
    { symbol: 'BNB', name: 'BNB', network: 'BSC (BEP20)', fee: '0.001 BNB', minDeposit: '0.01 BNB' },
    { symbol: 'USDC', name: 'USD Coin', network: 'Ethereum (ERC20)', fee: '5 USDC', minDeposit: '10 USDC' },
    { symbol: 'ADA', name: 'Cardano', network: 'Cardano', fee: '1 ADA', minDeposit: '5 ADA' }
  ]

  const fiatOptions = [
    { currency: 'USD', name: 'US Dollar', minDeposit: '$50', fee: '$2.99' },
    { currency: 'EUR', name: 'Euro', minDeposit: '€50', fee: '€2.99' },
    { currency: 'GBP', name: 'British Pound', minDeposit: '£50', fee: '£2.99' },
    { currency: 'JPY', name: 'Japanese Yen', minDeposit: '¥5,000', fee: '¥299' }
  ]

  const paymentMethods = [
    {
      id: 'bank_transfer',
      name: 'Bank Transfer',
      icon: 'fas fa-university',
      fee: 'Free',
      time: '1-3 business days',
      description: 'Transfer money directly from your bank account'
    },
    {
      id: 'debit_card',
      name: 'Debit Card',
      icon: 'fas fa-credit-card',
      fee: '3.99%',
      time: 'Instant',
      description: 'Use your debit card for instant deposits'
    },
    {
      id: 'credit_card',
      name: 'Credit Card',
      icon: 'fas fa-credit-card',
      fee: '3.99%',
      time: 'Instant',
      description: 'Use your credit card for instant deposits'
    },
    {
      id: 'apple_pay',
      name: 'Apple Pay',
      icon: 'fab fa-apple-pay',
      fee: '3.99%',
      time: 'Instant',
      description: 'Quick and secure payments with Apple Pay'
    },
    {
      id: 'google_pay',
      name: 'Google Pay',
      icon: 'fab fa-google-pay',
      fee: '3.99%',
      time: 'Instant',
      description: 'Fast payments with Google Pay'
    }
  ]

  const handleCryptoDeposit = () => {
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      alert('Crypto deposit address generated! Please check the QR code or copy the address below.')
    }, 2000)
  }

  const handleFiatDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) < 50) {
      alert('Please enter a valid amount (minimum $50)')
      return
    }
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      alert('Deposit initiated successfully! You will receive confirmation shortly.')
    }, 2000)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'Processing':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Failed':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className={`text-3xl sm:text-4xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Deposit Funds
              </h1>
              <p className={`mt-2 text-lg ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Add money to your FinSocial account to start trading
              </p>
            </div>
            <Link
              to="/dashboard"
              className={`self-start px-4 py-2 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Deposit Form */}
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-2xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              {/* Tab Navigation */}
              <div className="flex mb-6 border-b border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => setActiveTab('crypto')}
                  className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                    activeTab === 'crypto'
                      ? 'border-blue-600 text-blue-600'
                      : theme === 'dark'
                        ? 'border-transparent text-gray-400 hover:text-gray-200'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className="fas fa-coins mr-2"></i>
                  Crypto Deposit
                </button>
                <button
                  onClick={() => setActiveTab('fiat')}
                  className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                    activeTab === 'fiat'
                      ? 'border-blue-600 text-blue-600'
                      : theme === 'dark'
                        ? 'border-transparent text-gray-400 hover:text-gray-200'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className="fas fa-dollar-sign mr-2"></i>
                  Fiat Deposit
                </button>
              </div>

              {/* Crypto Deposit Form */}
              {activeTab === 'crypto' && (
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Deposit Cryptocurrency
                  </h3>

                  {/* Crypto Selection */}
                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Select Cryptocurrency
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {cryptoOptions.map((crypto) => (
                        <button
                          key={crypto.symbol}
                          onClick={() => setSelectedCrypto(crypto.symbol)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                            selectedCrypto === crypto.symbol
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                              : theme === 'dark'
                                ? 'border-gray-600 hover:border-gray-500 bg-gray-700'
                                : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                          }`}
                        >
                          <div className={`font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {crypto.symbol}
                          </div>
                          <div className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {crypto.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Crypto Details */}
                  {selectedCrypto && (
                    <div className={`p-4 rounded-lg mb-6 ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      {(() => {
                        const crypto = cryptoOptions.find(c => c.symbol === selectedCrypto)
                        return (
                          <div>
                            <h4 className={`font-semibold mb-3 ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {crypto.name} ({crypto.symbol}) Deposit
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className={`${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Network:</span>
                                <div className={`font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {crypto.network}
                                </div>
                              </div>
                              <div>
                                <span className={`${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Min Deposit:</span>
                                <div className={`font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {crypto.minDeposit}
                                </div>
                              </div>
                              <div>
                                <span className={`${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Network Fee:</span>
                                <div className={`font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {crypto.fee}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  )}

                  {/* Deposit Address */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Deposit Address
                      </h4>
                      <button
                        onClick={handleCryptoDeposit}
                        disabled={isProcessing}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors"
                      >
                        {isProcessing ? 'Generating...' : 'Generate Address'}
                      </button>
                    </div>

                    <div className={`p-4 rounded-lg border-2 border-dashed ${
                      theme === 'dark' ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'
                    }`}>
                      <div className="text-center">
                        <div className={`w-32 h-32 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                          theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                          <i className={`fas fa-qrcode text-4xl ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}></i>
                        </div>
                        <p className={`text-sm mb-2 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Scan QR code or copy address below
                        </p>
                        <div className={`p-3 rounded font-mono text-sm break-all ${
                          theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
                        }`}>
                          1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                        </div>
                        <button className="mt-3 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors">
                          <i className="fas fa-copy mr-2"></i>
                          Copy Address
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Important Notes */}
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-yellow-900/20 border border-yellow-700' : 'bg-yellow-50 border border-yellow-200'
                  }`}>
                    <h5 className={`font-semibold mb-2 flex items-center ${
                      theme === 'dark' ? 'text-yellow-200' : 'text-yellow-800'
                    }`}>
                      <i className="fas fa-exclamation-triangle mr-2"></i>
                      Important Notes
                    </h5>
                    <ul className={`text-sm space-y-1 ${
                      theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'
                    }`}>
                      <li>• Only send {selectedCrypto} to this address</li>
                      <li>• Minimum deposit: {cryptoOptions.find(c => c.symbol === selectedCrypto)?.minDeposit}</li>
                      <li>• Deposits require network confirmations</li>
                      <li>• Do not send from smart contracts</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Fiat Deposit Form */}
              {activeTab === 'fiat' && (
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Deposit Fiat Currency
                  </h3>

                  {/* Currency Selection */}
                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Currency
                    </label>
                    <select
                      value={selectedFiat}
                      onChange={(e) => setSelectedFiat(e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      {fiatOptions.map((fiat) => (
                        <option key={fiat.currency} value={fiat.currency}>
                          {fiat.name} ({fiat.currency})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Amount Input */}
                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Amount
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        placeholder="Enter amount"
                        className={`w-full px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                      <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 font-medium ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {selectedFiat}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Minimum: {fiatOptions.find(f => f.currency === selectedFiat)?.minDeposit}
                    </p>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Payment Method
                    </label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            paymentMethod === method.id
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                              : theme === 'dark'
                                ? 'border-gray-600 hover:border-gray-500'
                                : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <i className={`${method.icon} text-xl mr-3 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}></i>
                              <div>
                                <div className={`font-semibold ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {method.name}
                                </div>
                                <div className={`text-sm ${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {method.description}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-sm font-medium ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                              }`}>
                                Fee: {method.fee}
                              </div>
                              <div className={`text-sm ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {method.time}
                              </div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Deposit Button */}
                  <button
                    onClick={handleFiatDeposit}
                    disabled={isProcessing || !depositAmount}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
                  >
                    {isProcessing ? 'Processing...' : `Deposit ${selectedFiat}`}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Deposit History */}
            <div className={`p-6 rounded-2xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Recent Deposits
              </h3>
              <div className="space-y-3">
                {depositHistory.slice(0, 3).map((deposit) => (
                  <div
                    key={deposit.id}
                    className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {deposit.amount} {deposit.currency}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getStatusColor(deposit.status)
                      }`}>
                        {deposit.status}
                      </span>
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      ${deposit.usdValue} • {new Date(deposit.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/deposits"
                className="block mt-4 text-center text-blue-600 hover:text-blue-500 font-medium"
              >
                View All Deposits
              </Link>
            </div>

            {/* Help & Support */}
            <div className={`p-6 rounded-2xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Need Help?
              </h3>
              <div className="space-y-3">
                <Link
                  to="/support"
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-gray-700 text-gray-300'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <i className="fas fa-headset mr-3 text-blue-600"></i>
                  <div>
                    <div className="font-medium">24/7 Support</div>
                    <div className="text-sm text-gray-500">Get help anytime</div>
                  </div>
                </Link>
                <Link
                  to="/help/deposits"
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-gray-700 text-gray-300'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <i className="fas fa-book mr-3 text-green-600"></i>
                  <div>
                    <div className="font-medium">Deposit Guide</div>
                    <div className="text-sm text-gray-500">Learn how to deposit</div>
                  </div>
                </Link>
                <Link
                  to="/fees"
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-gray-700 text-gray-300'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <i className="fas fa-info-circle mr-3 text-purple-600"></i>
                  <div>
                    <div className="font-medium">Fee Schedule</div>
                    <div className="text-sm text-gray-500">View all fees</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Security Notice */}
            <div className={`p-6 rounded-2xl shadow-lg ${
              theme === 'dark' ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-200'
            }`}>
              <div className="flex items-start">
                <i className={`fas fa-shield-alt text-xl mr-3 mt-1 ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}></i>
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-green-200' : 'text-green-800'
                  }`}>
                    Your Funds Are Secure
                  </h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-green-300' : 'text-green-700'
                  }`}>
                    All deposits are protected by industry-leading security measures and insurance coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Deposit
