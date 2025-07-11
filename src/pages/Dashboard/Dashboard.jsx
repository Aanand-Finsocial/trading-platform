import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'
import Footer from '../../components/Footer/Footer'
import { 
  ComposedChart, 
  Line, 
  Area, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts'

const Dashboard = () => {
  const { theme } = useTheme()
  const { user } = useUser()
  
  // Add state for copy confirmation
  const [copyMessage, setCopyMessage] = useState('')
  
  // Add copy handler function
  const handleCopyUserId = async () => {
    const userId = user?.userId || 'FS-000001'
    try {
      await navigator.clipboard.writeText(userId)
      setCopyMessage('ID Copied!')
      setTimeout(() => setCopyMessage(''), 2000) // Clear message after 2 seconds
    } catch (err) {
      setCopyMessage('Copy Failed')
      setTimeout(() => setCopyMessage(''), 2000)
    }
  }

  // Mock data for portfolio chart (Recharts format)
  const portfolioChartData = [
    { month: 'Jan', value: 8000 },
    { month: 'Feb', value: 9200 },
    { month: 'Mar', value: 8800 },
    { month: 'Apr', value: 10500 },
    { month: 'May', value: 11200 },
    { month: 'Jun', value: 12100 },
    { month: 'Jul', value: 12453.67 }
  ]

  // Mock trading data for portfolio chart (more realistic trading data)
  const portfolioTradingData = [
    { 
      time: '09:00', 
      open: 11800, 
      high: 12100, 
      low: 11750, 
      close: 12000, 
      volume: 150,
      ma20: 11850,
      ma50: 11700
    },
    { 
      time: '10:00', 
      open: 12000, 
      high: 12300, 
      low: 11950, 
      close: 12200, 
      volume: 220,
      ma20: 11900,
      ma50: 11720
    },
    { 
      time: '11:00', 
      open: 12200, 
      high: 12250, 
      low: 11900, 
      close: 11950, 
      volume: 180,
      ma20: 11950,
      ma50: 11740
    },
    { 
      time: '12:00', 
      open: 11950, 
      high: 12400, 
      low: 11900, 
      close: 12350, 
      volume: 290,
      ma20: 12000,
      ma50: 11760
    },
    { 
      time: '13:00', 
      open: 12350, 
      high: 12500, 
      low: 12250, 
      close: 12450, 
      volume: 260,
      ma20: 12050,
      ma50: 11780
    },
    { 
      time: '14:00', 
      open: 12450, 
      high: 12550, 
      low: 12300, 
      close: 12453.67, 
      volume: 195,
      ma20: 12100,
      ma50: 11800
    }
  ]

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
        titleColor: theme === 'dark' ? '#ffffff' : '#111827',
        bodyColor: theme === 'dark' ? '#d1d5db' : '#374151',
        borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `$${context.parsed.y.toLocaleString()}`
          }
        }
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          font: {
            size: 12
          }
        }
      },
      y: {
        display: true,
        grid: {
          color: theme === 'dark' ? '#374151' : '#f3f4f6',
          borderDash: [5, 5],
        },
        ticks: {
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          font: {
            size: 12
          },
          callback: function(value) {
            return '$' + value.toLocaleString()
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  }

  // Mock data for dashboard
  const [portfolioData] = useState({
    totalBalance: '12,453.67',
    totalBalanceUSD: '12,453.67',
    availableBalance: '8,231.45',
    change24h: '+5.23',
    changePercent: '+2.45%',
    isPositive: true
  })

  const [cryptoHoldings] = useState([
    { 
      symbol: 'BTC', 
      name: 'Bitcoin', 
      amount: '0.2847', 
      value: '12,108.45', 
      change: '+2.45%', 
      isPositive: true,
      icon: '₿'
    },
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      amount: '4.8592', 
      value: '13,025.78', 
      change: '+1.85%', 
      isPositive: true,
      icon: 'Ξ'
    },
    { 
      symbol: 'USDT', 
      name: 'Tether', 
      amount: '2,453.67', 
      value: '2,453.67', 
      change: '0.00%', 
      isPositive: true,
      icon: '₮'
    },
    { 
      symbol: 'BNB', 
      name: 'BNB', 
      amount: '15.3421', 
      value: '4,837.21', 
      change: '-0.75%', 
      isPositive: false,
      icon: 'BNB'
    }
  ])

  const [recentTrades] = useState([
    {
      id: 1,
      pair: 'BTC/USDT',
      type: 'Buy',
      amount: '0.0245',
      price: '42,530.25',
      total: '1,041.99',
      time: '2 hours ago',
      status: 'Completed'
    },
    {
      id: 2,
      pair: 'ETH/USDT',
      type: 'Sell',
      amount: '0.8345',
      price: '2,680.50',
      total: '2,236.80',
      time: '5 hours ago',
      status: 'Completed'
    },
    {
      id: 3,
      pair: 'BNB/USDT',
      type: 'Buy',
      amount: '5.2341',
      price: '315.20',
      total: '1,649.79',
      time: '1 day ago',
      status: 'Completed'
    }
  ])

  const [marketData] = useState([
    { symbol: 'BTC', price: '42,530.25', change: '+2.45%', isPositive: true },
    { symbol: 'ETH', price: '2,680.50', change: '+1.85%', isPositive: true },
    { symbol: 'BNB', price: '315.20', change: '-0.75%', isPositive: false },
    { symbol: 'ADA', price: '0.485', change: '+3.20%', isPositive: true }
  ])

  const quickActions = [
    { 
      title: 'Buy Crypto', 
      description: 'Purchase cryptocurrencies', 
      icon: 'fas fa-plus-circle', 
      color: 'blue',
      link: '/buy-crypto'
    },
    { 
      title: 'Sell Crypto', 
      description: 'Sell your holdings', 
      icon: 'fas fa-minus-circle', 
      color: 'red',
      link: '/sell-crypto'
    },
    { 
      title: 'Deposit Funds', 
      description: 'Add money to wallet', 
      icon: 'fas fa-wallet', 
      color: 'green',
      link: '/deposit'
    },
    { 
      title: 'Trade', 
      description: 'Advanced trading', 
      icon: 'fas fa-chart-line', 
      color: 'purple',
      link: '/trade'
    }
  ]

  // Custom tooltip for trading chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className={`p-3 rounded-lg shadow-lg border ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-600 text-white' 
            : 'bg-white border-gray-200 text-gray-900'
        }`}>
          <p className="font-semibold mb-2">{`Time: ${label}`}</p>
          <div className="space-y-1 text-sm">
            <p className="flex justify-between">
              <span>Open:</span> 
              <span className="font-mono">${data.open?.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span>High:</span> 
              <span className="font-mono text-green-600">${data.high?.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span>Low:</span> 
              <span className="font-mono text-red-600">${data.low?.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span>Close:</span> 
              <span className="font-mono font-bold">${data.close?.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span>Volume:</span> 
              <span className="font-mono">{data.volume}</span>
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  // Custom candlestick component
  const CandlestickBar = (props) => {
    const { payload, x, y, width, height } = props
    const { open, high, low, close } = payload
    
    const isPositive = close >= open
    const color = isPositive ? '#10b981' : '#ef4444'
    const wickColor = theme === 'dark' ? '#6b7280' : '#374151'
    
    const bodyHeight = Math.abs(close - open) * height / (payload.high - payload.low)
    const bodyY = y + (Math.max(close, open) - payload.high) * height / (payload.high - payload.low)
    
    return (
      <g>
        {/* High-Low wick */}
        <line
          x1={x + width / 2}
          y1={y}
          x2={x + width / 2}
          y2={y + height}
          stroke={wickColor}
          strokeWidth={1}
        />
        {/* Open-Close body */}
        <rect
          x={x + width * 0.2}
          y={bodyY}
          width={width * 0.6}
          height={Math.max(bodyHeight, 1)}
          fill={color}
          stroke={color}
          strokeWidth={1}
        />
      </g>
    )
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className={`text-2xl sm:text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Welcome back, {user?.firstName}!
              </h1>
              <p className={`mt-1 sm:mt-2 text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Here's your portfolio overview and recent activity
              </p>
            </div>
            <div className={`p-3 sm:p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-sm self-start lg:self-auto`}>
              <div className="text-center">
                <p className={`text-xs uppercase tracking-wide font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  User ID
                </p>
                <p className={`text-sm sm:text-lg font-mono font-bold ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {user?.userId || 'FS-000001'}
                </p>
                <button
                  onClick={handleCopyUserId}
                  className={`mt-1 text-xs ${
                    theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                  } transition-colors relative`}
                  title="Copy User ID"
                >
                  <i className="fas fa-copy mr-1"></i>
                  {copyMessage || 'Copy ID'}
                </button>
                {copyMessage && (
                  <div className={`absolute mt-1 px-2 py-1 rounded text-xs font-medium ${
                    copyMessage === 'ID Copied!' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  } shadow-lg z-10`}>
                    {copyMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
          {/* Total Balance Card */}
          <div className={`col-span-1 lg:col-span-2 p-4 sm:p-6 rounded-2xl shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h2 className={`text-lg sm:text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Portfolio Balance
              </h2>
              <Link 
                to="/portfolio" 
                className="text-blue-600 hover:text-blue-500 text-sm font-medium self-start sm:self-auto"
              >
                View Details →
              </Link>
            </div>
            
            <div className="mb-4 lg:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 gap-1 sm:gap-0">
                <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ${portfolioData.totalBalance}
                </span>
                <span className={`text-sm sm:text-lg ${
                  portfolioData.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {portfolioData.changePercent}
                </span>
              </div>
              <p className={`text-xs sm:text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Available: ${portfolioData.availableBalance}
              </p>
            </div>

            {/* Portfolio Trading Chart */}
            <div className={`rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            } p-2 sm:p-3`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
                  <h3 className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Portfolio Performance
                  </h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>MA20</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>MA50</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    portfolioData.isPositive 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {portfolioData.changePercent}
                  </span>
                </div>
              </div>
              
              <div className="h-24 sm:h-32 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={portfolioTradingData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} 
                      strokeOpacity={0.3}
                    />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                      height={20}
                    />
                    <YAxis 
                      yAxisId="price"
                      domain={['dataMin - 50', 'dataMax + 50']}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                      tickFormatter={(value) => `$${(value/1000).toFixed(1)}k`}
                      width={35}
                    />
                    <YAxis 
                      yAxisId="volume"
                      orientation="right"
                      domain={[0, 'dataMax']}
                      axisLine={false}
                      tickLine={false}
                      tick={false}
                      width={0}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    
                    {/* Volume bars at bottom */}
                    <Bar 
                      yAxisId="volume"
                      dataKey="volume" 
                      fill={theme === 'dark' ? '#374151' : '#d1d5db'}
                      opacity={0.3}
                    />
                    
                    {/* Moving Averages */}
                    <Line 
                      yAxisId="price"
                      type="monotone" 
                      dataKey="ma20" 
                      stroke="#3b82f6"
                      strokeWidth={1.5}
                      dot={false}
                      strokeDasharray="0"
                    />
                    <Line 
                      yAxisId="price"
                      type="monotone" 
                      dataKey="ma50" 
                      stroke="#8b5cf6"
                      strokeWidth={1.5}
                      dot={false}
                      strokeDasharray="2 2"
                    />
                    
                    {/* Main price line (close) with gradient fill */}
                    <Area 
                      yAxisId="price"
                      type="monotone"
                      dataKey="close"
                      fill="url(#colorGradient)"
                      stroke="#10b981"
                      strokeWidth={2}
                      fillOpacity={0.2}
                    />
                    
                    {/* Support/Resistance levels */}
                    <ReferenceLine 
                      yAxisId="price"
                      y={12000} 
                      stroke="#f59e0b" 
                      strokeDasharray="3 3" 
                      strokeOpacity={0.6}
                    />
                    <ReferenceLine 
                      yAxisId="price"
                      y={12400} 
                      stroke="#ef4444" 
                      strokeDasharray="3 3" 
                      strokeOpacity={0.6}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              
              {/* Trading indicators and controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2 text-xs">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className={`flex items-center space-x-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span>RSI:</span>
                    <span className="text-yellow-600 font-medium">68.5</span>
                    <span className="text-yellow-500 hidden sm:inline">(Overbought)</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span>MACD:</span>
                    <span className="text-green-600 font-medium">+12.3</span>
                    <i className="fas fa-arrow-up text-green-500"></i>
                  </div>
                  <div className={`flex items-center space-x-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span>Vol:</span>
                    <span className="font-medium">1.2M</span>
                    <span className="text-blue-500">(+15%)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {['5M', '15M', '1H', '4H', '1D'].map((timeframe, index) => (
                    <button 
                      key={timeframe}
                      className={`px-1.5 sm:px-2 py-1 rounded text-xs transition-colors ${
                        index === 2
                          ? theme === 'dark' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-blue-600 text-white'
                          : theme === 'dark' 
                            ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Market sentiment indicators */}
              <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 pt-2 border-t gap-2 ${
                theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Support: $12K</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Resistance: $12.4K</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-chart-line text-blue-500"></i>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Bullish</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-xs px-2 py-1 rounded ${
                    theme === 'dark' 
                      ? 'bg-green-900 text-green-200' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    <i className="fas fa-arrow-up mr-1"></i>Strong Buy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={`p-4 sm:p-6 rounded-2xl shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className={`text-lg sm:text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Actions
            </h2>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-700 border border-gray-700' 
                      : 'hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 ${
                    action.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    action.color === 'red' ? 'bg-red-100 text-red-600' :
                    action.color === 'green' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <i className={`${action.icon} text-xs sm:text-sm`}></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`font-medium text-sm ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {action.title}
                    </p>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    } truncate`}>
                      {action.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Holdings and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
          {/* Crypto Holdings */}
          <div className={`p-4 sm:p-6 rounded-2xl shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h2 className={`text-lg sm:text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Your Holdings
              </h2>
              <Link 
                to="/wallet" 
                className="text-blue-600 hover:text-blue-500 text-sm font-medium self-start sm:self-auto"
              >
                View All →
              </Link>
            </div>
            
            <div className="space-y-3">
              {cryptoHoldings.map((holding, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                } transition-colors`}>
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs sm:text-sm">{holding.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className={`font-medium text-sm sm:text-base ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {holding.symbol}
                      </p>
                      <p className={`text-xs sm:text-sm truncate ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {holding.amount} {holding.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className={`font-medium text-sm sm:text-base ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      ${holding.value}
                    </p>
                    <p className={`text-xs sm:text-sm ${
                      holding.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {holding.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Trades */}
          <div className={`p-4 sm:p-6 rounded-2xl shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h2 className={`text-lg sm:text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Recent Trades
              </h2>
              <Link 
                to="/orders" 
                className="text-blue-600 hover:text-blue-500 text-sm font-medium self-start sm:self-auto"
              >
                View All →
              </Link>
            </div>
            
            <div className="space-y-3">
              {recentTrades.map((trade) => (
                <div key={trade.id} className={`p-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'border-gray-700 hover:bg-gray-700' 
                    : 'border-gray-200 hover:bg-gray-50'
                } transition-colors`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        trade.type === 'Buy' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {trade.type}
                      </span>
                      <span className={`font-medium text-sm ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {trade.pair}
                      </span>
                    </div>
                    <span className={`text-xs self-start sm:self-auto ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {trade.time}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-1">
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {trade.amount} @ ${trade.price}
                    </span>
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      ${trade.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Overview */}
        <div className={`p-4 sm:p-6 rounded-2xl shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <h2 className={`text-lg sm:text-xl font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Market Overview
            </h2>
            <Link 
              to="/markets" 
              className="text-blue-600 hover:text-blue-500 text-sm font-medium self-start sm:self-auto"
            >
              View All Markets →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {marketData.map((coin, index) => (
              <div key={index} className={`p-3 sm:p-4 rounded-lg text-center ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              } transition-colors cursor-pointer`}>
                <div className={`font-semibold mb-1 text-sm sm:text-base ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {coin.symbol}
                </div>
                <div className={`text-base sm:text-lg font-bold mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ${coin.price}
                </div>
                <div className={`text-xs sm:text-sm font-medium ${
                  coin.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {coin.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
               
