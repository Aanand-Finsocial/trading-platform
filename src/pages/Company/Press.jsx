import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Press = () => {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const pressReleases = [
    {
      id: 1,
      title: 'FinSocial Reaches 150 Million Registered Users Milestone',
      category: 'Company News',
      date: '2024-01-15',
      excerpt: 'Leading cryptocurrency exchange FinSocial announces reaching 150 million registered users worldwide, marking significant growth in the digital asset space.',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'FinSocial Launches Advanced Trading Features for Institutional Clients',
      category: 'Product Launch',
      date: '2024-01-10',
      excerpt: 'New institutional-grade trading tools and APIs now available, targeting professional traders and financial institutions.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 3,
      title: 'FinSocial Partners with Major Financial Institution for Crypto Custody',
      category: 'Partnership',
      date: '2024-01-05',
      excerpt: 'Strategic partnership aims to provide enhanced security and custody solutions for institutional cryptocurrency investments.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 4,
      title: 'FinSocial Receives Industry Recognition for Security Excellence',
      category: 'Awards',
      date: '2024-01-01',
      excerpt: 'Platform recognized by leading cybersecurity organization for implementing best-in-class security measures.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 5,
      title: 'FinSocial Expands Operations to New European Markets',
      category: 'Expansion',
      date: '2023-12-20',
      excerpt: 'Company announces expansion into three new European markets, bringing cryptocurrency trading to millions of new users.',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 6,
      title: 'FinSocial CEO Speaks at Global Blockchain Summit',
      category: 'Events',
      date: '2023-12-15',
      excerpt: 'CEO discusses the future of decentralized finance and cryptocurrency adoption at prestigious industry conference.',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ]

  const mediaKit = [
    {
      title: 'Company Logos',
      description: 'High-resolution FinSocial logos in various formats',
      icon: 'fas fa-image',
      downloadUrl: '#'
    },
    {
      title: 'Brand Guidelines',
      description: 'Official brand guidelines and usage instructions',
      icon: 'fas fa-palette',
      downloadUrl: '#'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of key executives',
      icon: 'fas fa-user-tie',
      downloadUrl: '#'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information',
      icon: 'fas fa-file-alt',
      downloadUrl: '#'
    }
  ]

  const categories = ['all', 'Company News', 'Product Launch', 'Partnership', 'Awards', 'Expansion', 'Events']

  const filteredReleases = pressReleases.filter(release => 
    selectedCategory === 'all' || release.category === selectedCategory
  )

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Press & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Media</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Latest news, press releases, and media resources from FinSocial
          </p>
        </div>

        {/* Contact Information */}
        <div className={`p-8 rounded-2xl shadow-lg mb-16 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Media Inquiries</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-600"></i>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    press@finsocial.com
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone mr-3 text-blue-600"></i>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    +1 (555) 123-PRESS
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock mr-3 text-blue-600"></i>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Available 24/7 for urgent inquiries
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Speaking Opportunities</h2>
              <p className={`mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our executives are available for interviews, conferences, and speaking engagements.
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Request Speaker
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
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
                {category === 'all' ? 'All News' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story */}
        {filteredReleases.find(release => release.featured) && (
          <div className="mb-16">
            {(() => {
              const featured = filteredReleases.find(release => release.featured)
              return (
                <div className={`rounded-2xl overflow-hidden shadow-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className={`w-full h-64 md:h-full flex items-center justify-center ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <i className={`fas fa-image text-4xl ${
                          theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                        }`}></i>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className={`ml-3 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {featured.category} • {formatDate(featured.date)}
                        </span>
                      </div>
                      <h2 className={`text-2xl font-bold mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {featured.title}
                      </h2>
                      <p className={`text-lg mb-6 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {featured.excerpt}
                      </p>
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                        Read Full Story
                      </button>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* Press Releases Grid */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Latest Press Releases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReleases.filter(release => !release.featured).map((release) => (
              <div key={release.id} className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
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
                  <div className="mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {release.category}
                    </span>
                    <span className={`ml-2 text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {formatDate(release.date)}
                    </span>
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {release.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {release.excerpt}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div>
          <h2 className={`text-3xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Media Kit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className={`p-6 rounded-2xl shadow-lg text-center ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-white text-xl`}></i>
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Press
