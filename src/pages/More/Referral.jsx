import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Referral = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [copied, setCopied] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState('30d')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-line' },
    { id: 'invite', label: 'Invite Friends', icon: 'fas fa-user-plus' },
    { id: 'rebates', label: 'Rebate History', icon: 'fas fa-history' },
    { id: 'structure', label: 'Commission Structure', icon: 'fas fa-percentage' }
  ]

  const referralLink = 'https://trading.com/register?ref=ABC123XYZ'

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const stats = {
    totalReferrals: 156,
    totalCommission: '$2,847.32',
    monthlyCommission: '$445.78',
    activeReferrals: 89,
    conversionRate: '12.5%',
    tier: 'Gold'
  }

  const recentReferrals = [
    {
      id: 1,
      username: 'user***123',
      registrationDate: '2024-01-15',
      status: 'Active',
      commission: '$45.32',
      volume: '$12,450'
    },
    {
      id: 2,
      username: 'trader***456',
      registrationDate: '2024-01-14',
      status: 'Active',
      commission: '$78.90',
      volume: '$23,670'
    },
    {
      id: 3,
      username: 'crypto***789',
      registrationDate: '2024-01-13',
      status: 'Inactive',
      commission: '$12.45',
      volume: '$3,720'
    }
  ]

  const commissionHistory = [
    {
      date: '2024-01-15',
      referral: 'user***123',
      type: 'Spot Trading',
      commission: '$12.34',
      rate: '20%'
    },
    {
      date: '2024-01-15',
      referral: 'trader***456',
      type: 'Futures Trading',
      commission: '$23.45',
      rate: '25%'
    },
    {
      date: '2024-01-14',
      referral: 'crypto***789',
      type: 'Spot Trading',
      commission: '$8.90',
      rate: '20%'
    }
  ]

  const commissionStructure = [
    {
      tier: 'Bronze',
      referrals: '0-9',
      spotCommission: '20%',
      futuresCommission: '20%',
      benefits: ['Basic support', 'Standard rates'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      tier: 'Silver',
      referrals: '10-49',
      spotCommission: '25%',
      futuresCommission: '25%',
      benefits: ['Priority support', 'Enhanced rates', 'Monthly bonuses'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      tier: 'Gold',
      referrals: '50-199',
      spotCommission: '30%',
      futuresCommission: '30%',
      benefits: ['VIP support', 'Premium rates', 'Exclusive events'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      tier: 'Platinum',
      referrals: '200+',
      spotCommission: '40%',
      futuresCommission: '40%',
      benefits: ['Dedicated manager', 'Highest rates', 'Custom solutions'],
      color: 'from-purple-400 to-purple-600'
    }
  ]

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Invite Friends & Earn Together
              </h1>
              <p className={`text-lg sm:text-xl mb-6 sm:mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Get up to 40% commission on your friends' trading fees. The more you invite, the more you earn!
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="text-xl sm:text-2xl font-bold text-yellow-500 mb-1">{stats.totalReferrals}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Referrals</div>
                </div>
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="text-xl sm:text-2xl font-bold text-green-500 mb-1">{stats.totalCommission}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Earned</div>
                </div>
              </div>

              {/* Referral Link */}
              <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className={`text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Your Referral Link
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className={`flex-1 px-3 py-2 text-sm rounded border min-w-0 ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-gray-300'
                        : 'bg-gray-50 border-gray-300 text-gray-700'
                    }`}
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded text-sm transition-colors touch-manipulation w-full sm:w-auto"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative order-first lg:order-last">
              <div className={`p-6 sm:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                <div className="relative z-10">
                  {/* Central Referral Hub */}
                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-users text-black text-2xl sm:text-3xl"></i>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-3 animate-pulse">
                    <div className="text-xs sm:text-sm font-medium text-white">+$45.32</div>
                    <div className="text-xs text-gray-200">Commission</div>
                  </div>

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-3 animate-pulse animation-delay-1000">
                    <div className="text-xs sm:text-sm font-medium text-white">156</div>
                    <div className="text-xs text-gray-200">Referrals</div>
                  </div>

                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-3 animate-pulse animation-delay-2000">
                    <div className="text-xs sm:text-sm font-medium text-white">Gold Tier</div>
                    <div className="text-xs text-gray-200">30% Rate</div>
                  </div>

                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 sm:p-3 animate-pulse animation-delay-3000">
                    <div className="text-xs sm:text-sm font-medium text-white">89</div>
                    <div className="text-xs text-gray-200">Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 sm:space-x-8 py-4 sm:py-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-3 sm:pb-4 border-b-2 transition-colors whitespace-nowrap touch-manipulation flex-shrink-0 ${
                  tab.id === activeTab
                    ? 'border-yellow-500 text-yellow-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`${tab.icon} text-sm`}></i>
                <span className="font-medium text-sm sm:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'dashboard' && (
          <div>
            {/* Overview Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-users text-white text-sm"></i>
                  </div>
                  <div>
                    <div className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {stats.totalReferrals}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Total Referrals
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-dollar-sign text-white text-sm"></i>
                  </div>
                  <div>
                    <div className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {stats.totalCommission}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Total Commission
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-line text-black text-sm"></i>
                  </div>
                  <div>
                    <div className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {stats.activeReferrals}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Active Referrals
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-crown text-white text-sm"></i>
                  </div>
                  <div>
                    <div className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {stats.tier}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Current Tier
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Referrals Table */}
            <div className={`rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Recent Referrals
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <tr>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        User
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Registration Date
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Status
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Commission Earned
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Trading Volume
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    {recentReferrals.map((referral) => (
                      <tr key={referral.id}>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {referral.username}
                        </td>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                          {referral.registrationDate}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            referral.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {referral.status}
                          </span>
                        </td>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500`}>
                          {referral.commission}
                        </td>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                          {referral.volume}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invite' && (
          <div>
            {/* Invite Friends Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Invite Friends & Earn Commission
              </h2>
              <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Share your referral link and start earning up to 40% commission on your friends' trading fees
              </p>
            </div>

            {/* Referral Link Section */}
            <div className={`rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Your Referral Link
              </h3>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className={`flex-1 px-4 py-3 text-sm rounded-lg border min-w-0 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-gray-300'
                      : 'bg-gray-50 border-gray-300 text-gray-700'
                  }`}
                />
                <button
                  onClick={handleCopyLink}
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors touch-manipulation w-full sm:w-auto"
                >
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
              
              {/* Share Options */}
              <div>
                <h4 className={`text-base sm:text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Share via Social Media
                </h4>
                <div className="grid grid-cols-2 sm:flex sm:space-x-4 gap-3 sm:gap-0">
                  <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors touch-manipulation">
                    <i className="fab fa-twitter"></i>
                    <span className="text-sm sm:text-base">Twitter</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors touch-manipulation">
                    <i className="fab fa-facebook"></i>
                    <span className="text-sm sm:text-base">Facebook</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors touch-manipulation">
                    <i className="fab fa-whatsapp"></i>
                    <span className="text-sm sm:text-base">WhatsApp</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors touch-manipulation">
                    <i className="fas fa-envelope"></i>
                    <span className="text-sm sm:text-base">Email</span>
                  </button>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className={`rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg sm:text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                How It Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-xl font-bold">1</span>
                  </div>
                  <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Share Your Link
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Share your unique referral link with friends and family
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-xl font-bold">2</span>
                  </div>
                  <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Friends Sign Up
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your friends register and start trading using your link
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-xl font-bold">3</span>
                  </div>
                  <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Earn Commission
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Earn up to 40% commission on their trading fees forever
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className={`rounded-lg p-6 sm:p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg sm:text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Why Refer Friends?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: 'fas fa-percentage', title: 'High Commission', desc: 'Earn up to 40% on trading fees' },
                  { icon: 'fas fa-infinity', title: 'Lifetime Earnings', desc: 'Earn from every trade they make' },
                  { icon: 'fas fa-users', title: 'No Limits', desc: 'Invite unlimited friends' },
                  { icon: 'fas fa-dollar-sign', title: 'Instant Payouts', desc: 'Get paid immediately' },
                  { icon: 'fas fa-chart-line', title: 'Tier Benefits', desc: 'Higher tiers, better rates' },
                  { icon: 'fas fa-shield-alt', title: 'Trusted Platform', desc: 'Secure and reliable trading' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className={`${benefit.icon} text-black text-sm`}></i>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {benefit.title}
                      </h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rebates' && (
          <div>
            {/* Rebate History Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
              <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Commission History
              </h2>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className={`px-4 py-2 rounded-lg border touch-manipulation ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
                <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors touch-manipulation">
                  Export
                </button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className={`p-4 sm:p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  This Month
                </h3>
                <div className="text-xl sm:text-2xl font-bold text-green-500 mb-1">{stats.monthlyCommission}</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Commission Earned
                </div>
              </div>
            </div>
            
            {/* Commission History Table */}
            <div className={`rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Recent Commissions
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <tr>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Date
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Referral
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Type
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Commission
                      </th>
                      <th className={`px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    {commissionHistory.map((item, index) => (
                      <tr key={index}>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                          {item.date}
                        </td>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {item.referral}
                        </td>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                          {item.type}
                        </td>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500`}>
                          {item.commission}
                        </td>
                        <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                          {item.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'structure' && (
          <div>
            {/* Commission Structure Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Commission Structure
              </h2>
              <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Higher tiers unlock better commission rates and exclusive benefits
              </p>
            </div>
            
            {/* Tier Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {commissionStructure.map((tier, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl ${
                    stats.tier === tier.tier
                      ? 'ring-2 ring-yellow-500 shadow-lg'
                      : ''
                  }`}
                >
                  <div className={`bg-gradient-to-br ${tier.color} p-4 sm:p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg sm:text-xl font-bold">{tier.tier}</h3>
                      {stats.tier === tier.tier && (
                        <div className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs font-medium">
                          Current
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="text-sm opacity-80">Referrals Required</div>
                      <div className="text-base sm:text-lg font-semibold">{tier.referrals}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
                      <div>
                        <div className="text-xs opacity-80">Spot</div>
                        <div className="font-bold">{tier.spotCommission}</div>
                      </div>
                      <div>
                        <div className="text-xs opacity-80">Futures</div>
                        <div className="font-bold">{tier.futuresCommission}</div>
                      </div>
                    </div>
                  </div>
                  <div className={`p-4 sm:p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          <i className="fas fa-check text-green-500 text-xs mr-2 flex-shrink-0"></i>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Referral