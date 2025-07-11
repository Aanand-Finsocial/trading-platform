import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Support = () => {
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: '',
    priority: 'medium'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ text: '', type: '' })

  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: 'fas fa-th-large' },
    { id: 'account', name: 'Account', icon: 'fas fa-user' },
    { id: 'trading', name: 'Trading', icon: 'fas fa-chart-line' },
    { id: 'deposit', name: 'Deposits', icon: 'fas fa-plus-circle' },
    { id: 'withdrawal', name: 'Withdrawals', icon: 'fas fa-minus-circle' },
    { id: 'security', name: 'Security', icon: 'fas fa-shield-alt' },
    { id: 'fees', name: 'Fees', icon: 'fas fa-credit-card' },
    { id: 'technical', name: 'Technical', icon: 'fas fa-cog' }
  ]

  const supportArticles = [
    {
      id: 1,
      title: 'How to create and verify your account',
      category: 'account',
      description: 'Step-by-step guide to setting up your FinSocial account and completing verification',
      readTime: '3 min read',
      popular: true
    },
    {
      id: 2,
      title: 'How to deposit funds into your account',
      category: 'deposit',
      description: 'Learn about different deposit methods including bank transfers, cards, and crypto',
      readTime: '4 min read',
      popular: true
    },
    {
      id: 3,
      title: 'Understanding trading fees and limits',
      category: 'fees',
      description: 'Complete breakdown of all trading fees, deposit fees, and withdrawal limits',
      readTime: '5 min read',
      popular: true
    },
    {
      id: 4,
      title: 'How to place your first trade',
      category: 'trading',
      description: 'Beginner-friendly guide to placing buy and sell orders on FinSocial',
      readTime: '6 min read',
      popular: true
    },
    {
      id: 5,
      title: 'Enabling two-factor authentication (2FA)',
      category: 'security',
      description: 'Secure your account with 2FA using Google Authenticator or SMS',
      readTime: '3 min read',
      popular: false
    },
    {
      id: 6,
      title: 'How to withdraw cryptocurrency',
      category: 'withdrawal',
      description: 'Guide to withdrawing crypto to external wallets safely',
      readTime: '4 min read',
      popular: false
    },
    {
      id: 7,
      title: 'Troubleshooting mobile app issues',
      category: 'technical',
      description: 'Common solutions for mobile app problems and connectivity issues',
      readTime: '5 min read',
      popular: false
    },
    {
      id: 8,
      title: 'Understanding stop-loss and take-profit orders',
      category: 'trading',
      description: 'Advanced trading strategies using stop-loss and take-profit orders',
      readTime: '7 min read',
      popular: false
    }
  ]

  const contactMethods = [
    {
      type: 'Live Chat',
      icon: 'fas fa-comments',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      responseTime: 'Instant response',
      action: 'Start Chat',
      color: 'blue'
    },
    {
      type: 'Email Support',
      icon: 'fas fa-envelope',
      description: 'Send us a detailed message',
      availability: 'support@finsocial.com',
      responseTime: 'Within 24 hours',
      action: 'Send Email',
      color: 'green'
    },
    {
      type: 'Phone Support',
      icon: 'fas fa-phone',
      description: 'Speak directly with our team',
      availability: '+1 (555) 123-4567',
      responseTime: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      color: 'purple'
    },
    {
      type: 'Help Center',
      icon: 'fas fa-book',
      description: 'Browse our comprehensive guides',
      availability: 'Self-service',
      responseTime: 'Instant access',
      action: 'Browse Articles',
      color: 'orange'
    }
  ]

  const filteredArticles = supportArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleContactFormChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContactFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage({ text: 'Submitting your request...', type: 'info' })

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage({ 
        text: 'Your support request has been submitted successfully! We\'ll get back to you within 24 hours.', 
        type: 'success' 
      })
      setContactForm({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: '',
        priority: 'medium'
      })
    }, 2000)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } mb-4 lg:mb-6`}>
            How can we help you?
          </h1>
          <p className={`text-lg sm:text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          } mb-8 max-w-2xl mx-auto`}>
            Get support 24/7 from our expert team or browse our help articles
          </p>

          {/* Search Bar */}
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

        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              } shadow-lg hover:shadow-xl`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  method.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  method.color === 'green' ? 'bg-green-100 text-green-600' :
                  method.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <i className={`${method.icon} text-2xl`}></i>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {method.type}
                </h3>
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {method.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <strong>Contact:</strong> {method.availability}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <strong>Response:</strong> {method.responseTime}
                  </div>
                </div>
                <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  method.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                  method.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                  method.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                  'bg-orange-600 hover:bg-orange-700 text-white'
                }`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Help Articles */}
        <div className="mb-16">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Help Articles
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? theme === 'dark'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              } shadow-lg hover:shadow-xl`}>
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
                    to={`/help/${article.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <i className={`fas fa-search text-4xl mb-4 ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}></i>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                No articles found
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className={`max-w-4xl mx-auto p-8 rounded-2xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-xl`}>
          <div className="text-center mb-8">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Still need help?
            </h2>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Send us a message and we'll get back to you as soon as possible
            </p>
          </div>

          {submitMessage.text && (
            <div className={`p-4 rounded-lg mb-6 ${
              submitMessage.type === 'success' 
                ? theme === 'dark'
                  ? 'bg-green-900 text-green-300 border border-green-700'
                  : 'bg-green-50 text-green-700 border border-green-200'
                : theme === 'dark'
                  ? 'bg-blue-900 text-blue-300 border border-blue-700'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}>
              {submitMessage.text}
            </div>
          )}

          <form onSubmit={handleContactFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Category *
                </label>
                <select
                  name="category"
                  value={contactForm.category}
                  onChange={handleContactFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="general">General Inquiry</option>
                  <option value="account">Account Issues</option>
                  <option value="trading">Trading Support</option>
                  <option value="technical">Technical Issues</option>
                  <option value="security">Security Concerns</option>
                  <option value="billing">Billing & Payments</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Priority
                </label>
                <select
                  name="priority"
                  value={contactForm.priority}
                  onChange={handleContactFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={contactForm.subject}
                onChange={handleContactFormChange}
                required
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Brief description of your issue"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Message *
              </label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleContactFormChange}
                required
                rows="6"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Please provide detailed information about your issue or question..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <h3 className={`text-xl font-semibold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Quick Links
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/terms"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/fees"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Trading Fees
            </Link>
            <Link
              to="/security"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Security
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Support
