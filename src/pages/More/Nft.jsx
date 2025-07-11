import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Nft = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('trending')
  const [timeFilter, setTimeFilter] = useState('24H')
  const [chainFilter, setChainFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState(null)
  
  // Modal states
  const [showStakeModal, setShowStakeModal] = useState(false)
  const [showVipModal, setShowVipModal] = useState(false)
  const [showSupportModal, setShowSupportModal] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredCollections = [
    {
      id: 1,
      name: 'ForeverSkills: Premium',
      logo: '/api/placeholder/60/60',
      volume: '25.3K USD',
      floorPrice: '229.23 USD',
      verified: true
    }
  ]

  const trendingCollections = [
    {
      rank: 1, // #1 ranked collection in trending
      name: 'Proud Kitty Gang',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.05 BNB',
      floorChange: '-14.63%',
      volume: '187.24 BNB',
      volumeChange: '-3.89%',
      verified: true,
      premium: true,
      chain: 'bnb'
    },
    {
      rank: 2, // #2 ranked collection in trending
      name: 'Fluffy Metaverse',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.02 BNB',
      floorChange: '-8.66%',
      volume: '0.51 BNB',
      volumeChange: '-36.27%',
      verified: true,
      chain: 'bnb'
    },
    {
      rank: 3,
      name: 'Football Club',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.07 BNB',
      floorChange: '+0.00%',
      volume: '0.4 BNB',
      volumeChange: '+0.00%',
      verified: true,
      chain: 'bnb'
    },
    {
      rank: 4,
      name: 'Otherdeed Expanded',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.18 ETH',
      floorChange: '-0.81%',
      volume: '25.59 ETH',
      volumeChange: '+416.30%',
      verified: true,
      info: true,
      chain: 'eth'
    },
    {
      rank: 5,
      name: 'Alpine Race Collectibles',
      logo: '/api/placeholder/40/40',
      floorPrice: '< 0.01 BNB',
      floorChange: '+0.00%',
      volume: '2.16 BNB',
      volumeChange: '+133.63%',
      verified: true,
      premium: true,
      chain: 'bnb'
    },
    {
      rank: 6,
      name: 'Gemesis',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.03 ETH',
      floorChange: '-1.83%',
      volume: '2.95 ETH',
      volumeChange: '-25.88%',
      verified: true,
      info: true,
      chain: 'eth'
    }
  ]

  const topCollections = [
    {
      rank: 1, // #1 ranked collection in top
      name: 'The Captainz',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.37 ETH',
      floorChange: '-12.21%',
      volume: '19.71 ETH',
      volumeChange: '+121.19%',
      verified: true,
      info: true,
      chain: 'eth'
    },
    {
      rank: 2, // #2 ranked collection in top
      name: 'Opepen Edition',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.23 ETH',
      floorChange: '-0.81%',
      volume: '31.11 ETH',
      volumeChange: '-87.52%',
      verified: true,
      info: true
    },
    {
      rank: 3,
      name: 'Moonbirds',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.68 ETH',
      floorChange: '-3.92%',
      volume: '34.78 ETH',
      volumeChange: '-28.83%',
      verified: true,
      info: true
    },
    {
      rank: 4,
      name: 'WonderPals',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.01 ETH',
      floorChange: '-9.74%',
      volume: '0.52 ETH',
      volumeChange: '+293.83%',
      verified: true,
      info: true
    },
    {
      rank: 5,
      name: 'Lil Pudgys',
      logo: '/api/placeholder/40/40',
      floorPrice: '1.18 ETH',
      floorChange: '+0.95%',
      volume: '49.95 ETH',
      volumeChange: '-7.66%',
      verified: true,
      info: true
    },
    {
      rank: 6,
      name: 'HV-MTL',
      logo: '/api/placeholder/40/40',
      floorPrice: '0.02 ETH',
      floorChange: '-7.85%',
      volume: '2.57 ETH',
      volumeChange: '+3,869.75%',
      verified: true,
      info: true
    }
  ]

  // Filter functions
  const getFilteredCollections = (collections) => {
    let filtered = collections

    // Filter by chain
    if (chainFilter === 'bnb') {
      filtered = filtered.filter(collection => collection.chain === 'bnb')
    } else if (chainFilter === 'eth') {
      filtered = filtered.filter(collection => collection.chain === 'eth')
    }

    // Filter by category (premium/info)
    if (categoryFilter === 'premium') {
      filtered = filtered.filter(collection => collection.premium)
    } else if (categoryFilter === 'info') {
      filtered = filtered.filter(collection => collection.info)
    }

    return filtered
  }

  // Get filtered data based on current filters
  const getDisplayCollections = () => {
    const baseCollections = activeTab === 'trending' ? trendingCollections : topCollections
    return getFilteredCollections(baseCollections)
  }

  const faqData = [
    {
      question: 'What is Finsocial NFT?',
      answer: 'Finsocial NFT is a comprehensive marketplace for non-fungible tokens where you can buy, sell, trade, stake, and loan NFTs securely. We support multiple blockchains including Ethereum and BNB Chain, offering a wide variety of digital collectibles, art, gaming items, and more.'
    },
    {
      question: 'How do I buy an NFT on Finsocial?',
      answer: 'To buy an NFT, first connect your wallet to our platform. Browse collections or search for specific NFTs, click on the item you want to purchase, and follow the checkout process. Make sure you have sufficient cryptocurrency in your wallet to cover the NFT price plus gas fees.'
    },
    {
      question: 'What wallets are supported?',
      answer: 'We support popular wallets including MetaMask, Trust Wallet, WalletConnect, and Finsocial Chain Wallet. Choose the wallet that corresponds to the blockchain network where your desired NFT is hosted.'
    },
    {
      question: 'How do I create and sell my own NFT?',
      answer: 'To create an NFT, go to the "Create" section, upload your digital artwork or content, add metadata including title and description, choose your blockchain network, and mint your NFT. Once minted, you can list it for sale by setting a fixed price or auction format.'
    },
    {
      question: 'What are the fees for trading NFTs?',
      answer: 'Our platform charges a 2.5% service fee on successful sales. Additionally, you\'ll pay blockchain network fees (gas fees) for transactions. These network fees vary based on blockchain congestion and are paid directly to the network, not to us.'
    },
    {
      question: 'What is NFT staking and how does it work?',
      answer: 'NFT staking allows you to lock your NFTs in our staking pools to earn rewards over time. Different collections offer various reward rates and staking periods. Your NFTs remain in your ownership but are temporarily locked during the staking period.'
    },
    {
      question: 'Can I use my NFT as collateral for loans?',
      answer: 'Yes, our NFT lending feature allows you to use valuable NFTs as collateral to borrow cryptocurrency. The loan amount depends on your NFT\'s appraised value, and you must repay the loan plus interest within the agreed timeframe to reclaim your NFT.'
    },
    {
      question: 'How are NFT prices and rankings determined?',
      answer: 'NFT prices are set by sellers and determined by market demand. Our ranking system considers factors like trading volume, floor price changes, number of transactions, and community activity over different time periods (1H, 6H, 24H, 7D).'
    },
    {
      question: 'What makes an NFT collection verified?',
      answer: 'Verified collections have undergone our authentication process to confirm the legitimacy of the creator and project. Look for the blue checkmark next to collection names. This helps protect users from counterfeit or imposter collections.'
    },
    {
      question: 'How do I participate in NFT drops and launches?',
      answer: 'NFT drops and launches are announced in our VIP Program section. Join our VIP program to get early access to exclusive drops, participate in whitelists, and receive notifications about upcoming launches from verified creators and projects.'
    },
    {
      question: 'What should I do if I encounter a problem?',
      answer: 'If you experience any issues, contact our 24/7 customer support through live chat, email, or our help center. For technical issues, provide transaction hashes and wallet addresses to help us assist you more effectively.'
    },
    {
      question: 'Is my NFT ownership secure on Finsocial?',
      answer: 'Yes, NFT ownership is secured by blockchain technology. We don\'t store your NFTs; they remain in your wallet on the blockchain. Our platform only facilitates trading while you maintain full custody and ownership of your digital assets.'
    }
  ]

  // Button handlers
  const handleStakeNow = () => {
    setShowStakeModal(true)
  }

  const handleJoinVip = () => {
    setShowVipModal(true)
  }

  const handleExploreFaqs = () => {
    document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' })
  }

  const handleViewAll = () => {
    navigate('/nft/featured')
  }

  const handleLiveChat = () => {
    window.open('https://tawk.to/chat/nft-support', '_blank', 'noopener,noreferrer')
  }

  const handleEmailSupport = () => {
    window.open('mailto:nft@finsocial.com?subject=NFT Support', '_blank')
  }

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Modal close handlers
  const closeStakeModal = () => {
    setShowStakeModal(false)
  }

  const closeVipModal = () => {
    setShowVipModal(false)
  }

  const closeSupportModal = () => {
    setShowSupportModal(false)
  }

  return (
    <div className={`min-h-screen pt-16 transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative py-12 md:py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} leading-tight`}>
              One-stop platform for all things NFTs
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto px-4`}>
              Trade, Stake and Loan NFTs securely on Finsocial NFT
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <div className={`p-4 md:p-6 rounded-xl ${theme === 'dark' ? 'bg-yellow-600' : 'bg-yellow-500'} text-black`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-star text-yellow-200"></i>
                </div>
                <span className="font-bold text-sm md:text-base">CR7 ForeverZone</span>
              </div>
              <p className="text-xs md:text-sm">NFT Collection</p>
            </div>

            <div className={`p-4 md:p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-800'} text-white`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-coins text-yellow-400"></i>
                </div>
                <span className="font-bold text-sm md:text-base">Ape NFT</span>
              </div>
              <p className="text-xs md:text-sm mb-2">Staking Program</p>
              <button 
                onClick={handleStakeNow}
                className="px-3 py-1 bg-yellow-500 text-black text-xs rounded font-semibold hover:bg-yellow-600 transition-colors"
              >
                STAKE NOW
              </button>
            </div>

            <div className={`p-4 md:p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-800'} text-white`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-gem text-purple-400"></i>
                </div>
                <span className="font-bold text-sm md:text-base">NFT VIP Program</span>
              </div>
              <p className="text-xs md:text-sm mb-2">Launches</p>
              <button 
                onClick={handleJoinVip}
                className="px-3 py-1 bg-yellow-500 text-black text-xs rounded font-semibold hover:bg-yellow-600 transition-colors"
              >
                Join Now
              </button>
            </div>

            <div 
              onClick={handleExploreFaqs}
              className={`p-4 md:p-6 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-question-circle"></i>
                </div>
                <span className="font-bold text-sm md:text-base">Explore</span>
              </div>
              <p className="text-xs md:text-sm">NFT FAQs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className={`py-12 md:py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 space-y-4 sm:space-y-0">
            <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Featured
            </h2>
            <button 
              onClick={handleViewAll}
              className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors self-start sm:self-auto`}
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {featuredCollections.map((collection) => (
              <div
                key={collection.id}
                className={`p-4 md:p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img src={collection.logo} alt={collection.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className={`font-bold text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                        {collection.name}
                      </h3>
                      {collection.verified && (
                        <i className="fas fa-check-circle text-yellow-500 text-sm flex-shrink-0"></i>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                      Volume
                    </p>
                    <p className={`font-bold text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {collection.volume}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                      Floor Price
                    </p>
                    <p className={`font-bold text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {collection.floorPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            New Listings
          </h2>
          <div className={`p-6 md:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
            <div className="h-24 md:h-32 flex items-center justify-center">
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base`}>
                No new listings available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending/Top Section */}
      <div className={`py-12 md:py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 md:mb-8 space-y-4 lg:space-y-0">
            <div className="flex space-x-6 md:space-x-8">
              <button
                onClick={() => setActiveTab('trending')}
                className={`pb-2 border-b-2 transition-colors duration-300 ${
                  activeTab === 'trending'
                    ? 'border-yellow-500 text-yellow-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="text-base md:text-lg font-medium">Trending</span>
              </button>
              <button
                onClick={() => setActiveTab('top')}
                className={`pb-2 border-b-2 transition-colors duration-300 ${
                  activeTab === 'top'
                    ? 'border-yellow-500 text-yellow-500'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="text-base md:text-lg font-medium">Top</span>
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setChainFilter(chainFilter === 'all' ? 'all' : 'all')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    chainFilter === 'all'
                      ? 'bg-yellow-500 text-black'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setChainFilter(chainFilter === 'bnb' ? 'all' : 'bnb')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    chainFilter === 'bnb'
                      ? 'bg-yellow-500 text-black'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  title="BNB Chain"
                >
                  <i className="fas fa-coins"></i>
                  <span className="ml-1 hidden sm:inline">BNB</span>
                </button>
                <button 
                  onClick={() => setCategoryFilter(categoryFilter === 'info' ? 'all' : 'info')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    categoryFilter === 'info'
                      ? 'bg-yellow-500 text-black'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  title="Info Collections"
                >
                  <i className="fas fa-info-circle"></i>
                  <span className="ml-1 hidden sm:inline">Info</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-1">
                {['1H', '6H', '24H', '7D'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeFilter(period)}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      timeFilter === period
                        ? 'bg-yellow-500 text-black'
                        : theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Cards View */}
          <div className="lg:hidden space-y-4">
            {getDisplayCollections().length === 0 ? (
              <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} text-center`}>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  No collections found for the selected filters
                </p>
              </div>
            ) : (
              getDisplayCollections().map((collection, index) => (
                <div
                  key={`mobile-${collection.rank}-${index}`}
                  className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        #{collection.rank}
                      </span>
                      <img src={collection.logo} alt={collection.name} className="w-8 h-8 rounded-full" />
                      <div className="flex items-center space-x-2 min-w-0">
                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                          {collection.name}
                        </span>
                        {collection.verified && (
                          <i className="fas fa-check-circle text-yellow-500 text-xs flex-shrink-0"></i>
                        )}
                        {collection.premium && (
                          <i className="fas fa-coins text-yellow-500 text-xs flex-shrink-0"></i>
                        )}
                        {collection.info && (
                          <i className="fas fa-info-circle text-gray-400 text-xs flex-shrink-0"></i>
                        )}
                      </div>
                    </div>
                    {collection.chain && (
                      <span className={`px-2 py-1 text-xs rounded flex-shrink-0 ${
                        collection.chain === 'bnb' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {collection.chain.toUpperCase()}
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        Floor Price
                      </p>
                      <p className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {collection.floorPrice}
                      </p>
                      <p className={`text-xs ${collection.floorChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {collection.floorChange}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        Volume ({timeFilter})
                      </p>
                      <p className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {collection.volume}
                      </p>
                      <p className={`text-xs ${collection.volumeChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {collection.volumeChange}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop Table View */}
          <div className={`hidden lg:block rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <tr>
                    <th className={`px-6 py-4 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Collections
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Floor Price
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Volume ({timeFilter})
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Collections
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Floor Price
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Volume ({timeFilter})
                    </th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {getDisplayCollections().length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center">
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          No collections found for the selected filters
                        </p>
                      </td>
                    </tr>
                  ) : (
                    getDisplayCollections().map((collection, index) => {
                      const pairedCollection = activeTab === 'trending' ? 
                        getFilteredCollections(topCollections)[index] : 
                        getFilteredCollections(trendingCollections)[index];
                      
                      return (
                        <tr key={`${collection.rank}-${index}`} className={`hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} transition-colors`}>
                          {/* Left Collection */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {collection.rank}
                              </span>
                              <img src={collection.logo} alt={collection.name} className="w-8 h-8 rounded-full" />
                              <div className="flex items-center space-x-2 min-w-0">
                                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                                  {collection.name}
                                </span>
                                {collection.verified && (
                                  <i className="fas fa-check-circle text-yellow-500 text-xs"></i>
                                )}
                                {collection.premium && (
                                  <i className="fas fa-coins text-yellow-500 text-xs"></i>
                                )}
                                {collection.info && (
                                  <i className="fas fa-info-circle text-gray-400 text-xs"></i>
                                )}
                                {collection.chain === 'bnb' && (
                                  <span className="px-1 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded">BNB</span>
                                )}
                                {collection.chain === 'eth' && (
                                  <span className="px-1 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">ETH</span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">
                              <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {collection.floorPrice}
                              </div>
                              <div className={`text-xs ${collection.floorChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {collection.floorChange}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">
                              <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {collection.volume}
                              </div>
                              <div className={`text-xs ${collection.volumeChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {collection.volumeChange}
                              </div>
                            </div>
                          </td>

                          {/* Right Collection */}
                          {pairedCollection ? (
                            <>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center space-x-3">
                                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {pairedCollection.rank}
                                  </span>
                                  <img src={pairedCollection.logo} alt={pairedCollection.name} className="w-8 h-8 rounded-full" />
                                  <div className="flex items-center space-x-2 min-w-0">
                                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} truncate`}>
                                      {pairedCollection.name}
                                    </span>
                                    {pairedCollection.verified && (
                                      <i className="fas fa-check-circle text-yellow-500 text-xs"></i>
                                    )}
                                    {pairedCollection.premium && (
                                      <i className="fas fa-coins text-yellow-500 text-xs"></i>
                                    )}
                                    {pairedCollection.info && (
                                      <i className="fas fa-info-circle text-gray-400 text-xs"></i>
                                    )}
                                    {pairedCollection.chain === 'bnb' && (
                                      <span className="px-1 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded">BNB</span>
                                    )}
                                    {pairedCollection.chain === 'eth' && (
                                      <span className="px-1 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">ETH</span>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm">
                                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {pairedCollection.floorPrice}
                                  </div>
                                  <div className={`text-xs ${pairedCollection.floorChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                    {pairedCollection.floorChange}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm">
                                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {pairedCollection.volume}
                                  </div>
                                  <div className={`text-xs ${pairedCollection.volumeChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                    {pairedCollection.volumeChange}
                                  </div>
                                </div>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4"></td>
                              <td className="px-6 py-4"></td>
                              <td className="px-6 py-4"></td>
                            </>
                          )}
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Filter Status */}
          {(chainFilter !== 'all' || categoryFilter !== 'all') && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Active filters:
              </span>
              {chainFilter !== 'all' && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full flex items-center">
                  {chainFilter.toUpperCase()} Chain
                  <button 
                    onClick={() => setChainFilter('all')}
                    className="ml-1 text-yellow-600 hover:text-yellow-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {categoryFilter !== 'all' && (
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full flex items-center">
                  {categoryFilter} Collections
                  <button 
                    onClick={() => setCategoryFilter('all')}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
              <button 
                onClick={() => {
                  setChainFilter('all')
                  setCategoryFilter('all')
                }}
                className={`text-xs ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'} underline`}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-section" className={`py-12 md:py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} px-4`}>
              Everything you need to know about Finsocial NFT
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                <button
                  className="w-full p-4 md:p-6 text-left focus:outline-none"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-base md:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} hover:text-yellow-600 transition-colors pr-4`}>
                      {faq.question}
                    </h3>
                    <i className={`fas fa-chevron-${expandedFaq === index ? 'up' : 'down'} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} transition-transform duration-300 flex-shrink-0`}></i>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed text-sm md:text-base`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center mt-8 md:mt-12">
            <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6 px-4`}>
              Still have questions? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setShowSupportModal(true)}
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors duration-300"
              >
                <i className="fas fa-comments mr-2"></i>
                Live Chat Support
              </button>
              <button 
                onClick={handleEmailSupport}
                className={`px-6 py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} font-semibold rounded-lg transition-colors duration-300`}
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* NFT Staking Modal */}
      {showStakeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  NFT Staking Program
                </h3>
                <button 
                  onClick={closeStakeModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Available Staking Pools
                  </h4>
                  <div className="space-y-3">
                    {/*
                      Hardcoded staking pools for demo purposes
                      Replace with dynamic data in real implementation
                    */}
                    {/*
                      { name: 'Ape NFT Collection', apy: '25%', duration: '30 days' },
                      { name: 'CryptoPunks', apy: '18%', duration: '60 days' },
                      { name: 'Bored Ape Yacht Club', apy: '22%', duration: '90 days' }
                    */}
                    {/*
                      Hardcoded staking pools for demo purposes
                      Replace with dynamic data in real implementation
                    */}
                    {['Ape NFT Collection', 'CryptoPunks', 'Bored Ape Yacht Club'].map((pool, index) => (
                      <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-500' : 'border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{pool}</span>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              APY: {pool.apy} | Duration: {pool.duration}
                            </p>
                          </div>
                          <button className="px-4 py-2 bg-yellow-500 text-black text-sm rounded font-semibold hover:bg-yellow-600 transition-colors">
                            Stake
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleExternalLink('/nft/staking')}
                    className="flex-1 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    View All Pools
                  </button>
                  <button 
                    onClick={() => handleExternalLink('/nft/staking/guide')}
                    className={`flex-1 px-6 py-3 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIP Program Modal */}
      {showVipModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-3xl w-full rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  NFT VIP Program
                </h3>
                <button 
                  onClick={closeVipModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white`}>
                  <h4 className="text-xl font-bold mb-3">VIP Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><i className="fas fa-check mr-2"></i>Early access to exclusive NFT drops</li>
                    <li className="flex items-center"><i className="fas fa-check mr-2"></i>Priority whitelist spots</li>
                    <li className="flex items-center"><i className="fas fa-check mr-2"></i>Reduced trading fees</li>
                    <li className="flex items-center"><i className="fas fa-check mr-2"></i>Exclusive community access</li>
                  </ul>
                </div>
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Upcoming VIP Launches
                  </h4>
                  <div className="space-y-3">
                    {/*
                      Hardcoded upcoming launches for demo purposes
                      Replace with dynamic data in real implementation
                    */}
                    {['Metaverse Legends', 'Digital Art Masters', 'Gaming NFT Collection'].map((launch, index) => (
                      <div key={index} className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'}`}>
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{launch}</span>
                          <span className="text-sm text-yellow-500">VIP Only</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleExternalLink('/nft/vip/join')}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300"
                  >
                    Join VIP Program
                  </button>
                  <button 
                    onClick={() => handleExternalLink('/nft/vip/benefits')}
                    className={`flex-1 px-6 py-3 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  NFT Support
                </h3>
                <button 
                  onClick={closeSupportModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button 
                  onClick={handleLiveChat}
                  className="w-full p-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300"
                >
                  <i className="fas fa-comments mr-3"></i>
                  Live Chat Support
                </button>
                <button 
                  onClick={handleEmailSupport}
                  className={`w-full p-4 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  <i className="fas fa-envelope mr-3"></i>
                  Email Support
                </button>
                <button 
                  onClick={() => handleExternalLink('https://docs.finsocial.com/nft')}
                  className={`w-full p-4 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  <i className="fas fa-book mr-3"></i>
                  NFT Guide
                </button>
                <button 
                  onClick={() => handleExternalLink('https://t.me/finsocial_nft')}
                  className={`w-full p-4 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  <i className="fab fa-telegram mr-3"></i>
                  Telegram Community
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Nft