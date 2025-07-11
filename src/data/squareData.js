export const tabs = [
  { id: 'feed', label: 'Feed', icon: 'fas fa-home' },
  { id: 'trending', label: 'Trending', icon: 'fas fa-fire' },
  { id: 'following', label: 'Following', icon: 'fas fa-users' },
  { id: 'live', label: 'Live', icon: 'fas fa-video' }
]

export const posts = [
  {
    id: 1,
    author: {
      name: 'CryptoTrader_Pro',
      avatar: 'fas fa-user-circle',
      verified: true,
      followers: '12.5K'
    },
    timestamp: '2h ago',
    content: 'Bitcoin is showing strong support at $42,000. The bulls are back! 🚀 #BTC #Bullish',
    tags: ['#Bitcoin', '#BTC', '#Bullish'],
    likes: 234,
    comments: 45,
    shares: 12,
    image: null,
    trending: true
  },
  {
    id: 2,
    author: {
      name: 'EthAnalyst',
      avatar: 'fas fa-user-circle',
      verified: false,
      followers: '8.2K'
    },
    timestamp: '4h ago',
    content: 'Ethereum 2.0 staking rewards are looking attractive. Current APY around 5-7%. Great for long-term holders! 💎',
    tags: ['#Ethereum', '#ETH', '#Staking'],
    likes: 156,
    comments: 23,
    shares: 8,
    image: null,
    trending: false
  },
  {
    id: 3,
    author: {
      name: 'AltcoinGuru',
      avatar: 'fas fa-user-circle',
      verified: true,
      followers: '25.1K'
    },
    timestamp: '6h ago',
    content: 'Market update: Altcoin season might be starting. Keep an eye on these gems: SOL, MATIC, DOT 📈',
    tags: ['#Altcoins', '#SOL', '#MATIC', '#DOT'],
    likes: 342,
    comments: 67,
    shares: 25,
    image: null,
    trending: true
  }
]

export const trendingTopics = [
  { tag: '#Bitcoin', posts: '12.5K', change: '+5.2%' },
  { tag: '#Ethereum', posts: '8.7K', change: '+3.1%' },
  { tag: '#BullMarket', posts: '6.2K', change: '+12.8%' },
  { tag: '#DeFi', posts: '4.9K', change: '+2.4%' },
  { tag: '#NFT', posts: '3.8K', change: '-1.2%' }
]

export const suggestedUsers = [
  {
    name: 'BlockchainBeast',
    handle: '@blockchainbeast',
    followers: '45.2K',
    verified: true,
    bio: 'Crypto analyst & educator'
  },
  {
    name: 'DeFiDegen',
    handle: '@defidegen',
    followers: '23.8K',
    verified: false,
    bio: 'DeFi yield farmer'
  },
  {
    name: 'NFTCollector',
    handle: '@nftcollector',
    followers: '18.5K',
    verified: true,
    bio: 'Digital art enthusiast'
  }
]

export const latestNews = [
  {
    id: 1,
    title: 'Bitcoin ETF Approval Sparks Market Rally',
    summary: 'SEC approves spot Bitcoin ETF applications from major financial institutions',
    timestamp: '2h ago',
    source: 'CryptoNews',
    category: 'Regulation',
    image: 'fas fa-newspaper'
  },
  {
    id: 2,
    title: 'Ethereum 2.0 Staking Rewards Hit New High',
    summary: 'Staking yields reach 7.2% as more validators join the network',
    timestamp: '4h ago',
    source: 'ETH Today',
    category: 'DeFi',
    image: 'fas fa-coins'
  },
  {
    id: 3,
    title: 'Major Exchange Announces New Trading Pairs',
    summary: 'Over 50 new altcoin trading pairs added to support growing demand',
    timestamp: '6h ago',
    source: 'Trading Weekly',
    category: 'Exchange',
    image: 'fas fa-exchange-alt'
  },
  {
    id: 4,
    title: 'DeFi Protocol Launches Yield Farming Program',
    summary: 'New liquidity mining incentives offer up to 25% APY',
    timestamp: '8h ago',
    source: 'DeFi Pulse',
    category: 'DeFi',
    image: 'fas fa-seedling'
  }
]

export const notifications = [
  {
    id: 1,
    type: 'like',
    user: 'CryptoTrader_Pro',
    userAvatar: 'fas fa-user-circle',
    verified: true,
    action: 'liked your post',
    content: 'Bitcoin is showing strong support...',
    timestamp: '2 hours ago',
    read: false
  },
  {
    id: 2,
    type: 'comment',
    user: 'EthAnalyst',
    userAvatar: 'fas fa-user-circle',
    verified: false,
    action: 'commented on your post',
    content: 'Great analysis! What do you think about...',
    timestamp: '4 hours ago',
    read: false
  },
  {
    id: 3,
    type: 'follow',
    user: 'BlockchainBeast',
    userAvatar: 'fas fa-user-circle',
    verified: true,
    action: 'started following you',
    content: null,
    timestamp: '1 day ago',
    read: true
  },
  {
    id: 4,
    type: 'mention',
    user: 'DeFiDegen',
    userAvatar: 'fas fa-user-circle',
    verified: false,
    action: 'mentioned you in a post',
    content: '@you check out this new DeFi protocol...',
    timestamp: '2 days ago',
    read: true
  },
  {
    id: 5,
    type: 'share',
    user: 'NFTCollector',
    userAvatar: 'fas fa-user-circle',
    verified: true,
    action: 'shared your post',
    content: 'Market update: Altcoin season might be starting...',
    timestamp: '3 days ago',
    read: true
  }
]

export const trendingArticles = [
  {
    id: 1,
    title: 'Bitcoin Reaches New All-Time High as Institutional Adoption Grows',
    summary: 'Major corporations and financial institutions continue to add Bitcoin to their balance sheets, driving unprecedented demand.',
    author: 'CryptoNews24',
    authorAvatar: 'fas fa-newspaper',
    verified: true,
    timestamp: '1h ago',
    readTime: '3 min read',
    category: 'Bitcoin',
    views: '12.5K',
    likes: 892,
    comments: 156,
    image: 'bitcoin-ath',
    trending: true
  },
  {
    id: 2,
    title: 'Ethereum 2.0 Staking Yields Surge to 8% as Network Upgrades Complete',
    summary: 'Recent network improvements have led to increased staking rewards, attracting more validators to the network.',
    author: 'EthereumToday',
    authorAvatar: 'fas fa-coins',
    verified: true,
    timestamp: '3h ago',
    readTime: '5 min read',
    category: 'Ethereum',
    views: '8.7K',
    likes: 634,
    comments: 89,
    image: 'eth-staking',
    trending: true
  }
]

export const newsData = [
  {
    id: 1,
    title: 'SEC Approves Bitcoin ETF Applications from BlackRock and Fidelity',
    summary: 'The Securities and Exchange Commission has officially approved spot Bitcoin ETF applications from major asset managers, marking a historic moment for cryptocurrency adoption.',
    content: 'In a groundbreaking decision, the SEC has approved multiple spot Bitcoin ETF applications...',
    author: 'Reuters Crypto',
    authorAvatar: 'fas fa-newspaper',
    verified: true,
    timestamp: '30 min ago',
    category: 'Regulation',
    views: '45.2K',
    likes: 3420,
    comments: 567,
    shares: 890,
    source: 'Reuters',
    breaking: true,
    image: 'bitcoin-etf'
  },
  {
    id: 2,
    title: 'Ethereum Network Completes Shanghai Upgrade Successfully',
    summary: 'The Ethereum blockchain has successfully implemented the Shanghai upgrade, enabling staking withdrawals and improving network efficiency.',
    content: 'The long-awaited Shanghai upgrade has been completed without any major issues...',
    author: 'CoinDesk',
    authorAvatar: 'fas fa-coins',
    verified: true,
    timestamp: '2h ago',
    category: 'Technology',
    views: '32.8K',
    likes: 2156,
    comments: 423,
    shares: 654,
    source: 'CoinDesk',
    breaking: false,
    image: 'ethereum-shanghai'
  }
]

export const getNotificationIcon = (type) => {
  switch (type) {
    case 'like':
      return 'fas fa-heart text-red-500'
    case 'comment':
      return 'fas fa-comment text-blue-500'
    case 'follow':
      return 'fas fa-user-plus text-green-500'
    case 'mention':
      return 'fas fa-at text-purple-500'
    case 'share':
      return 'fas fa-share text-yellow-500'
    default:
      return 'fas fa-bell text-gray-500'
  }
}
