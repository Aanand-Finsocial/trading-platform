import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Press & Media', path: '/press' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact Us', path: '/support' }
    ],
    products: [
      { name: 'Spot Trading', path: '/trade/spot' },
      { name: 'Futures', path: '/futures/usd-m' },
      { name: 'Options', path: '/futures/options' },
      { name: 'NFT Marketplace', path: '/nft' },
     
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Contact Support', path: '/support' },
      { name: 'API Documentation', path: '/api-docs' },
      { name: 'Fees', path: '/fees' },
      { name: 'Status', path: '/status' }
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Risk Disclosure', path: '/risk' },
      { name: 'Compliance', path: '/compliance' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/finsocial' },
    { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/finsocial' },
    { name: 'Telegram', icon: 'fab fa-telegram', url: 'https://t.me/finsocial' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/finsocial' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/finsocial' },
    { name: 'Reddit', icon: 'fab fa-reddit', url: 'https://reddit.com/r/finsocial' }
  ]

  const handleSubscription = async (e) => {
    e.preventDefault()
    
    // Clear previous status
    setSubscriptionStatus('')
    
    // Validate email
    if (!email.trim()) {
      setSubscriptionStatus('Please enter your email address')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setSubscriptionStatus('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setSubscriptionStatus('Subscribing...')

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubscriptionStatus('Successfully subscribed! Thank you for joining our newsletter.')
      setEmail('')
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus('')
      }, 5000)
    }, 1500)
  }

  return (
    <footer className={`${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-coins text-lg sm:text-xl text-white"></i>
                </div>
                <span className={`text-xl sm:text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>FinSocial</span>
              </div>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } mb-4 lg:mb-6 max-w-md text-sm sm:text-base`}>
                The world's leading cryptocurrency exchange platform. Trade with confidence, 
                security, and advanced tools designed for both beginners and professionals.
              </p>
              
              {/* Download Links */}
              <div className="space-y-3 mb-4 lg:mb-6">
                <h4 className={`text-base sm:text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Download Our App</h4>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="#"
                    className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm ${
                      theme === 'dark'
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    <i className="fab fa-apple text-lg sm:text-xl mr-2 sm:mr-3"></i>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm ${
                      theme === 'dark'
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    <i className="fab fa-google-play text-lg sm:text-xl mr-2 sm:mr-3"></i>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className={`text-base sm:text-lg font-semibold mb-4 lg:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Company</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className={`text-sm sm:text-base ${
                        theme === 'dark' 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors duration-200`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className={`text-base sm:text-lg font-semibold mb-4 lg:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Products</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className={`text-sm sm:text-base ${
                        theme === 'dark' 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors duration-200`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className={`text-base sm:text-lg font-semibold mb-4 lg:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Support</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className={`text-sm sm:text-base ${
                        theme === 'dark' 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors duration-200`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className={`text-base sm:text-lg font-semibold mb-4 lg:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Legal</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className={`text-sm sm:text-base ${
                        theme === 'dark' 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors duration-200`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className={`py-6 sm:py-8 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
            <div className="mb-4 lg:mb-0 w-full lg:w-auto">
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Stay Updated</h3>
              <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Get the latest crypto news and market updates
              </p>
              {subscriptionStatus && (
                <p className={`text-sm mt-2 ${
                  subscriptionStatus.includes('Successfully') || subscriptionStatus.includes('Subscribing')
                    ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    : theme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`}>
                  {subscriptionStatus}
                </p>
              )}
            </div>
            <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 lg:w-64 xl:w-80 text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:from-purple-300 disabled:to-indigo-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className={`py-6 sm:py-8 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg sm:text-xl transition-colors duration-200 p-2 rounded-lg hover:bg-opacity-10 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white hover:bg-white' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900'
                  }`}
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className={`text-xs sm:text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © {currentYear} FinSocial. All rights reserved.
              </p>
              <p className={`text-xs mt-1 ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Cryptocurrency trading involves risk. Please trade responsibly.
              </p>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className={`py-4 sm:py-6 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            <div className={`flex items-center justify-center sm:justify-start ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <i className="fas fa-shield-alt text-green-500 mr-2 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm">SSL Secured</span>
            </div>
            <div className={`flex items-center justify-center sm:justify-start ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <i className="fas fa-lock text-green-500 mr-2 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm">Bank-level Security</span>
            </div>
            <div className={`flex items-center justify-center sm:justify-start ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <i className="fas fa-certificate text-green-500 mr-2 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm">SOC2 Compliant</span>
            </div>
            <div className={`flex items-center justify-center sm:justify-start ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <i className="fas fa-user-shield text-green-500 mr-2 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
