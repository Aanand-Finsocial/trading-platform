import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Market Analysis', 'Trading Tips', 'Technology', 'DeFi', 'NFT', 'Education', 'News']

  const featuredArticle = {
    id: 1,
    title: 'The Future of Decentralized Finance: Trends and Opportunities in 2024',
    excerpt: 'Explore the latest developments in DeFi ecosystem, from yield farming innovations to cross-chain interoperability solutions that are reshaping the financial landscape.',
    author: 'Sarah Johnson',
    authorAvatar: 'fas fa-user-circle',
    date: '2024-01-20',
    readTime: '8 min read',
    category: 'DeFi',
    image: 'fas fa-chart-line',
    tags: ['DeFi', 'Blockchain', 'Finance', 'Innovation'],
    views: '12.5K',
    likes: '892'
  }

  const articles = [
    {
      id: 2,
      title: 'Bitcoin ETF Approval: What It Means for Institutional Adoption',
      excerpt: 'Breaking down the implications of Bitcoin ETF approvals and how they could accelerate mainstream cryptocurrency adoption.',
      author: 'Michael Chen',
      authorAvatar: 'fas fa-user-circle',
      date: '2024-01-19',
      readTime: '5 min read',
      category: 'Market Analysis',
      image: 'fab fa-bitcoin',
      tags: ['Bitcoin', 'ETF', 'Institutional', 'Regulation'],
      views: '8.2K',
      likes: '645'
    },
    {
      id: 3,
      title: 'Smart Contract Security: Best Practices for Developers',
      excerpt: 'Essential security measures and coding practices to prevent vulnerabilities in smart contract development.',
      author: 'Alex Rodriguez',
      authorAvatar: 'fas fa-user-circle',
      date: '2024-01-18',
      readTime: '12 min read',
      category: 'Technology',
      image: 'fas fa-shield-alt',
      tags: ['Smart Contracts', 'Security', 'Development', 'Ethereum'],
      views: '6.8K',
      likes: '423'
    },
    {
      id: 4,
      title: 'NFT Market Recovery: Blue-Chip Collections Lead the Way',
      excerpt: 'Analysis of the NFT market recovery patterns and which collections are driving renewed investor interest.',
      author: 'Emma Wilson',
      authorAvatar: 'fas fa-user-circle',
      date: '2024-01-17',
      readTime: '6 min read',
      category: 'NFT',
      image: 'fas fa-palette',
      tags: ['NFT', 'Market Analysis', 'Digital Art', 'Collections'],
      views: '5.4K',
      likes: '312'
    },
    {
      id: 5,
      title: 'Mastering Technical Analysis: Advanced Chart Patterns',
      excerpt: 'Deep dive into complex chart patterns and how to use them for better trading decisions in volatile markets.',
      author: 'David Kim',
      authorAvatar: 'fas fa-user-circle',
      date: '2024-01-16',
      readTime: '10 min read',
      category: 'Trading Tips',
      image: 'fas fa-chart-area',
      tags: ['Technical Analysis', 'Trading', 'Charts', 'Patterns'],
      views: '9.1K',
      likes: '756'
    },
    {
      id: 6,
      title: 'Cryptocurrency Regulations: Global Landscape 2024',
      excerpt: 'Comprehensive overview of cryptocurrency regulations across major jurisdictions and their impact on the market.',
      author: 'Lisa Thompson',
      authorAvatar: 'fas fa-user-circle',
      date: '2024-01-15',
      readTime: '15 min read',
      category: 'News',
      image: 'fas fa-gavel',
      tags: ['Regulation', 'Policy', 'Global', 'Compliance'],
      views: '7.6K',
      likes: '534'
    }
  ]

  const trendingTopics = [
    { tag: '#BitcoinETF', posts: '234' },
    { tag: '#DeFiYield', posts: '189' },
    { tag: '#SmartContracts', posts: '156' },
    { tag: '#NFTRecovery', posts: '134' },
    { tag: '#CryptoRegulation', posts: '98' }
  ]

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'} text-white overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-40 h-20 sm:h-40 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-12 sm:w-24 h-12 sm:h-24 bg-cyan-400 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Crypto Insights & Analysis
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Stay ahead of the curve with expert analysis, market insights, and educational content from industry leaders.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative px-4">
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-0 shadow-lg text-sm sm:text-base ${
                  theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } focus:ring-2 focus:ring-yellow-500 transition-all`}
              />
              <button className="absolute right-6 sm:right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-500">
                <i className="fas fa-search text-sm sm:text-base"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className={`sticky top-16 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  category === selectedCategory
                    ? 'bg-yellow-500 text-black shadow-lg'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Content Area */}
          <div className="xl:col-span-3">
            {/* Featured Article */}
            <div className={`rounded-2xl overflow-hidden shadow-xl mb-8 sm:mb-12 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } group hover:shadow-2xl transition-all duration-500`}>
              <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${featuredArticle.image} text-white text-4xl sm:text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  Featured
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {featuredArticle.readTime}
                </div>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium self-start ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {featuredArticle.category}
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {featuredArticle.date}
                  </span>
                </div>
                
                <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-yellow-500 transition-colors`}>
                  {featuredArticle.title}
                </h2>
                
                <p className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <i className={`${featuredArticle.authorAvatar} text-gray-500`}></i>
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {featuredArticle.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <i className="fas fa-eye"></i>
                        <span>{featuredArticle.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <i className="fas fa-heart"></i>
                        <span>{featuredArticle.likes}</span>
                      </span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base self-start sm:self-auto">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className={`rounded-xl overflow-hidden shadow-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } hover:shadow-xl transition-all duration-300 group`}>
                  <div className={`h-40 sm:h-48 bg-gradient-to-br ${
                    article.category === 'Market Analysis' ? 'from-blue-500 to-cyan-500' :
                    article.category === 'Trading Tips' ? 'from-green-500 to-teal-500' :
                    article.category === 'Technology' ? 'from-purple-500 to-indigo-500' :
                    article.category === 'DeFi' ? 'from-orange-500 to-red-500' :
                    article.category === 'NFT' ? 'from-pink-500 to-purple-500' :
                    'from-gray-500 to-gray-600'
                  } relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className={`${article.image} text-white text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {article.category}
                      </span>
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {article.date}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-yellow-500 transition-colors line-clamp-2`}>
                      {article.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <i className={`${article.authorAvatar} text-gray-500 text-xs`}></i>
                        </div>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                          {article.author}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <i className="fas fa-eye"></i>
                          <span className="hidden sm:inline">{article.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <i className="fas fa-heart"></i>
                          <span className="hidden sm:inline">{article.likes}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-6 sm:space-y-8">
            {/* Trending Topics */}
            <div className={`rounded-xl p-4 sm:p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Trending Topics
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-yellow-500 font-medium cursor-pointer hover:text-yellow-600 text-sm">
                      {topic.tag}
                    </span>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {topic.posts}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={`rounded-xl p-4 sm:p-6 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-yellow-50 to-orange-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-yellow-200'}`}>
              <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Stay Updated
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Get the latest crypto insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded-lg border-0 text-sm ${
                    theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                  } focus:ring-2 focus:ring-yellow-500`}
                />
                <button className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Authors */}
            <div className={`rounded-xl p-4 sm:p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Popular Authors
              </h3>
              <div className="space-y-4">
                {['Sarah Johnson', 'Michael Chen', 'Alex Rodriguez'].map((author, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <i className="fas fa-user text-gray-500"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                        {author}
                      </div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Crypto Analyst
                      </div>
                    </div>
                    <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium flex-shrink-0">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog
