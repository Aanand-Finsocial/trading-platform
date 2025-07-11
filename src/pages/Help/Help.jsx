import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Help = () => {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const helpCategories = [
    { id: 'all', name: 'All Topics', icon: 'fas fa-th-large', count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: 'fas fa-play-circle', count: 12 },
    { id: 'trading', name: 'Trading', icon: 'fas fa-chart-line', count: 15 },
    { id: 'security', name: 'Security', icon: 'fas fa-shield-alt', count: 8 },
    { id: 'deposits', name: 'Deposits & Withdrawals', icon: 'fas fa-exchange-alt', count: 10 }
  ]

  const helpArticles = [
    {
      id: 1,
      title: 'How to create and verify your FinSocial account',
      category: 'getting-started',
      description: 'Complete guide to account creation and identity verification process',
      readTime: '5 min read',
      popular: true
    },
    {
      id: 2,
      title: 'How to make your first cryptocurrency purchase',
      category: 'getting-started', 
      description: 'Step-by-step tutorial for buying your first crypto on FinSocial',
      readTime: '4 min read',
      popular: true
    },
    {
      id: 3,
      title: 'Understanding trading fees and how they work',
      category: 'trading',
      description: 'Detailed explanation of maker/taker fees and fee tiers',
      readTime: '6 min read',
      popular: true
    },
    {
      id: 4,
      title: 'Setting up two-factor authentication (2FA)',
      category: 'security',
      description: 'Enhance your account security with 2FA setup guide',
      readTime: '3 min read',
      popular: false
    },
    {
      id: 5,
      title: 'How to deposit funds using bank transfer',
      category: 'deposits',
      description: 'Guide for depositing fiat currency via bank transfer',
      readTime: '4 min read',
      popular: false
    },
    {
      id: 6,
      title: 'Advanced order types: Stop-loss and Take-profit',
      category: 'trading',
      description: 'Learn to use advanced order types for better risk management',
      readTime: '8 min read',
      popular: false
    }
  ]

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Help Center
          </h1>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Find answers to common questions and learn how to use FinSocial
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-6 py-4 pl-14 rounded-2xl text-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <i className={`fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-lg ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}></i>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : theme === 'dark'
                      ? 'border-gray-700 hover:border-gray-600 bg-gray-800'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                }`}
              >
                <i className={`${category.icon} text-2xl mb-2 block ${
                  activeCategory === category.id ? 'text-blue-600' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}></i>
                <div className={`font-semibold text-sm ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.name}
                </div>
                <div className={`text-xs mt-1 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {category.count} articles
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              } shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {article.title}
                </h3>
                {article.popular && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                    Popular
                  </span>
                )}
              </div>
              <p className={`text-sm mb-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {article.readTime}
                </span>
                <Link
                  to={`/help/article/${article.id}`}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Still need help?
          </h2>
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Can't find what you're looking for? Our support team is here to help 24/7.
          </p>
          <Link
            to="/support"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Help
