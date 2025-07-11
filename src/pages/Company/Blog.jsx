import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding DeFi: A Comprehensive Guide for Beginners',
      excerpt: 'Decentralized Finance (DeFi) is revolutionizing the financial industry. Learn the basics, benefits, and risks of DeFi protocols.',
      category: 'Education',
      author: 'Sarah Johnson',
      authorRole: 'Senior Crypto Analyst',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/300',
      featured: true,
      tags: ['DeFi', 'Blockchain', 'Cryptocurrency']
    },
    {
      id: 2,
      title: 'Bitcoin Halving 2024: What Investors Need to Know',
      excerpt: 'The upcoming Bitcoin halving event could significantly impact crypto markets. Here\'s everything you need to know about this crucial event.',
      category: 'Market Analysis',
      author: 'Michael Chen',
      authorRole: 'Market Research Director',
      date: '2024-01-12',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      featured: false,
      tags: ['Bitcoin', 'Halving', 'Investment']
    },
    {
      id: 3,
      title: 'How to Secure Your Cryptocurrency Portfolio',
      excerpt: 'Learn essential security practices to protect your digital assets from hackers and scams.',
      category: 'Security',
      author: 'David Rodriguez',
      authorRole: 'Chief Security Officer',
      date: '2024-01-10',
      readTime: '10 min read',
      image: '/api/placeholder/600/300',
      featured: false,
      tags: ['Security', 'Wallet', 'Best Practices']
    },
    {
      id: 4,
      title: 'The Rise of NFTs in 2024: Trends and Opportunities',
      excerpt: 'Non-Fungible Tokens continue to evolve. Explore the latest trends and opportunities in the NFT space.',
      category: 'Technology',
      author: 'Emily Zhang',
      authorRole: 'Product Manager',
      date: '2024-01-08',
      readTime: '7 min read',
      image: '/api/placeholder/600/300',
      featured: false,
      tags: ['NFT', 'Digital Art', 'Blockchain']
    },
    {
      id: 5,
      title: 'Trading Psychology: Managing Emotions in Volatile Markets',
      excerpt: 'Successful trading requires more than technical analysis. Learn how to manage emotions and make rational decisions.',
      category: 'Trading',
      author: 'Alex Thompson',
      authorRole: 'Trading Expert',
      date: '2024-01-05',
      readTime: '9 min read',
      image: '/api/placeholder/600/300',
      featured: false,
      tags: ['Trading', 'Psychology', 'Risk Management']
    },
    {
      id: 6,
      title: 'Central Bank Digital Currencies (CBDCs): The Future of Money?',
      excerpt: 'Governments worldwide are exploring digital versions of their currencies. What does this mean for the crypto industry?',
      category: 'Regulation',
      author: 'Dr. Maria Santos',
      authorRole: 'Regulatory Affairs Lead',
      date: '2024-01-03',
      readTime: '12 min read',
      image: '/api/placeholder/600/300',
      featured: false,
      tags: ['CBDC', 'Regulation', 'Digital Currency']
    },
    {
      id: 7,
      title: 'Yield Farming Strategies for Maximum Returns',
      excerpt: 'Discover advanced yield farming techniques and strategies to maximize your DeFi earnings while managing risks.',
      category: 'DeFi',
      author: 'James Wilson',
      authorRole: 'DeFi Specialist',
      date: '2024-01-01',
      readTime: '11 min read',
      image: '/api/placeholder/600/300',
      featured: false,
      tags: ['Yield Farming', 'DeFi', 'Liquidity Mining']
    },
    {
      id: 8,
      title: 'Technical Analysis: Reading Cryptocurrency Charts Like a Pro',
      excerpt: 'Master the art of technical analysis with our comprehensive guide to reading crypto charts and identifying trading opportunities.',
      category: 'Trading',
      author: 'Robert Kim',
      authorRole: 'Technical Analyst',
      date: '2023-12-28',
      readTime: '15 min read',
      image: '/api/placeholder/600/300',
      featured: false,
      tags: ['Technical Analysis', 'Charts', 'Trading']
    }
  ]

  const categories = ['all', 'Education', 'Market Analysis', 'Security', 'Technology', 'Trading', 'Regulation', 'DeFi']

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return categoryMatch && searchMatch
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const featuredPost = blogPosts.find(post => post.featured)

  const handleNewsletterSubscription = async (e) => {
    e.preventDefault()
    
    // Clear previous status
    setNewsletterStatus('')
    
    // Validate email
    if (!newsletterEmail.trim()) {
      setNewsletterStatus('Please enter your email address')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterStatus('Please enter a valid email address')
      return
    }

    setIsNewsletterSubmitting(true)
    setNewsletterStatus('Subscribing...')

    // Simulate API call
    setTimeout(() => {
      setIsNewsletterSubmitting(false)
      setNewsletterStatus('Successfully subscribed! You\'ll receive our latest articles in your inbox.')
      setNewsletterEmail('')
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setNewsletterStatus('')
      }, 5000)
    }, 1500)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            FinSocial <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Insights, analysis, and educational content about cryptocurrency, blockchain technology, and the future of finance
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 pl-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <i className={`fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}></i>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && (
          <div className="mb-16">
            <div className={`rounded-2xl overflow-hidden shadow-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <div className={`w-full h-64 lg:h-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <i className={`fas fa-image text-4xl ${
                      theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                    }`}></i>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className={`ml-3 text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {featuredPost.category} • {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {featuredPost.title}
                  </h2>
                  <p className={`text-lg mb-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">
                        {featuredPost.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className={`font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {featuredPost.author}
                      </div>
                      <div className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {featuredPost.authorRole} • {formatDate(featuredPost.date)}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured || selectedCategory !== 'all').map((post) => (
              <article key={post.id} className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className={`w-full h-48 flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <i className={`fas fa-image text-2xl ${
                    theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                  }`}></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {post.category}
                    </span>
                    <span className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className={`text-xs px-2 py-1 rounded ${
                        theme === 'dark'
                          ? 'bg-gray-900 text-gray-400'
                          : 'bg-gray-50 text-gray-500'
                      }`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-xs">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {post.author}
                        </div>
                        <div className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
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

        {/* Newsletter Signup */}
        <div className={`p-8 rounded-2xl text-center ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Stay Updated with Our Latest Articles
          </h2>
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Subscribe to our newsletter and never miss important crypto insights and market analysis
          </p>
          {newsletterStatus && (
            <p className={`text-sm mb-4 ${
              newsletterStatus.includes('Successfully') || newsletterStatus.includes('Subscribing')
                ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                : theme === 'dark' ? 'text-red-400' : 'text-red-600'
            }`}>
              {newsletterStatus}
            </p>
          )}
          <form onSubmit={handleNewsletterSubscription} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              disabled={isNewsletterSubmitting}
            />
            <button 
              type="submit"
              disabled={isNewsletterSubmitting}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
            >
              {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
