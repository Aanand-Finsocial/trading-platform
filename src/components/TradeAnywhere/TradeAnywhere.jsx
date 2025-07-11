import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const TradeAnywhere = () => {
  const [activeView, setActiveView] = useState('desktop')
  const { theme } = useTheme()

  return (
    <section className={`py-12 lg:py-20 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900' 
        : 'bg-gradient-to-br from-blue-600 to-purple-700'
    } text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Trade Anywhere, Anytime</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
            Experience professional trading with our advanced platform, available on desktop and mobile
          </p>
          
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setActiveView('desktop')}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-l-lg ${
                  activeView === 'desktop'
                    ? theme === 'dark'
                      ? 'bg-white text-gray-900'
                      : 'bg-white text-blue-700'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                }`}
              >
                <i className="fas fa-desktop mr-2"></i>
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView('mobile')}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-r-lg ${
                  activeView === 'mobile'
                    ? theme === 'dark'
                      ? 'bg-white text-gray-900'
                      : 'bg-white text-blue-700'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                }`}
              >
                <i className="fas fa-mobile-alt mr-2"></i>
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Trading Platform */}
        {activeView === 'desktop' && (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">Advanced Desktop Trading</h3>
              <p className={`text-base sm:text-lg mb-4 lg:mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'opacity-90'
              }`}>
                Experience the full power of professional trading with our comprehensive desktop platform
              </p>
              
              <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 text-left">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Advanced charting with 100+ technical indicators</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Real-time order book and market depth</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Multiple order types and trading strategies</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Portfolio management and analytics</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Customizable workspace and layouts</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <button className={`px-4 sm:px-6 py-3 font-bold rounded-lg transition-colors duration-300 text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-700 hover:bg-gray-100'
                }`}>
                  <i className="fas fa-external-link-alt mr-2"></i> Launch Platform
                </button>
                <button className={`px-4 sm:px-6 py-3 border-2 font-bold rounded-lg transition-colors duration-300 text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900'
                    : 'border-white text-white hover:bg-white hover:text-blue-700'
                }`}>
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right side - Trading platform mockup */}
            <div className="flex-1 w-full max-w-4xl">
              {/* Browser Frame */}
              <div className={`rounded-t-lg p-2 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className={`flex-1 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm ${
                    theme === 'dark' 
                      ? 'bg-gray-600 text-gray-300' 
                      : 'bg-white text-gray-600'
                  }`}>
                    <span className="hidden sm:inline">https://finsocial.com/trade/btc-usdt</span>
                    <span className="sm:hidden">finsocial.com/trade</span>
                  </div>
                </div>
              </div>
              
              {/* Trading Platform Screenshot Mockup */}
              <div className={`rounded-b-lg overflow-hidden shadow-2xl ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-black'
              }`}>
                {/* Top Navigation */}
                <div className="bg-gray-900 p-2 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="text-white font-bold text-xs sm:text-sm">FinSocial Pro</div>
                      <nav className="flex space-x-2 sm:space-x-3 text-xs">
                        <span className="text-blue-400 border-b-2 border-blue-400 pb-1">Spot</span>
                        <span className="text-gray-400 hover:text-white cursor-pointer hidden sm:inline">Futures</span>
                        <span className="text-gray-400 hover:text-white cursor-pointer hidden sm:inline">Options</span>
                      </nav>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
                      <span className="text-gray-400 hidden sm:inline">24h Volume: $2.4B</span>
                      <button className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs">
                        <span className="hidden sm:inline">Connect Wallet</span>
                        <span className="sm:hidden">Connect</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Main Trading Interface */}
                <div className="flex flex-col md:flex-row gap-1 p-1 min-h-[200px] md:h-[300px]">
                  {/* Left Panel - Market List - Hidden on mobile */}
                  <div className="hidden md:block w-32 lg:w-36 bg-gray-900 rounded flex-shrink-0">
                    <div className="p-2 border-b border-gray-700">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-white font-semibold text-xs">Markets</h3>
                        <i className="fas fa-star text-gray-500 text-xs"></i>
                      </div>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Search"
                          className="w-full bg-gray-800 text-white text-xs p-1 rounded border border-gray-700"
                        />
                      </div>
                    </div>
                    
                    <div className="p-1 space-y-1 overflow-y-auto">
                      {[
                        { pair: 'BTC/USDT', price: '42,530.25', change: '+2.45%', positive: true },
                        { pair: 'ETH/USDT', price: '2,680.50', change: '+1.85%', positive: true },
                        { pair: 'BNB/USDT', price: '315.20', change: '-0.75%', positive: false },
                        { pair: 'SOL/USDT', price: '98.75', change: '+5.15%', positive: true },
                        { pair: 'ADA/USDT', price: '0.485', change: '+3.20%', positive: true },
                        { pair: 'DOT/USDT', price: '7.85', change: '-1.25%', positive: false },
                      ].map((market, index) => (
                        <div key={index} className={`p-1 rounded cursor-pointer transition-colors ${
                          index === 0 ? 'bg-blue-900' : 'hover:bg-gray-800'
                        }`}>
                          <div className="flex justify-between text-xs">
                            <span className="text-white font-medium">{market.pair}</span>
                            <span className={market.positive ? 'text-green-500' : 'text-red-500'}>
                              {market.change}
                            </span>
                          </div>
                          <div className="text-gray-400 text-xs mt-1">${market.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Center - Chart Area */}
                  <div className="flex-1 bg-gray-900 rounded">
                    <div className="p-1 sm:p-2 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <h2 className="text-white text-sm font-bold">BTC/USDT</h2>
                          <div className="text-green-500 text-sm">$42,530.25</div>
                          <div className="text-green-500 text-xs">+2.45%</div>
                        </div>
                        <div className="flex space-x-1">
                          {['1m', '5m', '1h', '4h', '1D'].map((timeframe, index) => (
                            <button
                              key={timeframe}
                              className={`px-1 sm:px-2 py-1 text-xs rounded ${
                                index === 2 ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
                              }`}
                            >
                              {timeframe}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart */}
                    <div className="relative h-32 sm:h-48 md:h-full p-1 sm:p-2">
                      <div className="absolute top-3 left-3 flex space-x-2 text-xs text-gray-400 z-10">
                        <span>O: 41,850</span>
                        <span>H: 43,120</span>
                        <span>L: 41,200</span>
                        <span className="text-white">C: 42,530</span>
                      </div>
                      
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        {/* Grid */}
                        <defs>
                          <pattern id="grid" width="20" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 10" fill="none" stroke="#374151" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* Price levels */}
                        {[43000, 42500, 42000, 41500, 41000].map((price, i) => (
                          <g key={price}>
                            <line x1="0" y1={20 + i * 30} x2="400" y2={20 + i * 30} stroke="#444" strokeWidth="1"/>
                            <text x="360" y={25 + i * 30} fill="#888" fontSize="8">{price.toLocaleString()}</text>
                          </g>
                        ))}
                        
                        {/* Candlesticks */}
                        <g>
                          {Array.from({length: 20}, (_, i) => {
                            const x = 15 + i * 18
                            const high = 20 + Math.random() * 40
                            const low = high + 25 + Math.random() * 60
                            const open = high + 10 + Math.random() * 20
                            const close = high + 10 + Math.random() * 20
                            const isGreen = close < open
                            
                            return (
                              <g key={i}>
                                <line x1={x} y1={high} x2={x} y2={low} stroke="#666" strokeWidth="1"/>
                                <rect
                                  x={x - 2}
                                  y={Math.min(open, close)}
                                  width="4"
                                  height={Math.abs(open - close) || 1}
                                  fill={isGreen ? '#10b981' : '#ef4444'}
                                />
                              </g>
                            )
                          })}
                        </g>
                        
                        {/* Volume bars */}
                        <g>
                          {Array.from({length: 20}, (_, i) => {
                            const x = 15 + i * 18
                            const height = 3 + Math.random() * 12
                            return (
                              <rect
                                key={i}
                                x={x - 2}
                                y={180 - height}
                                width="4"
                                height={height}
                                fill="#4f46e5"
                                opacity="0.7"
                              />
                            )
                          })}
                        </g>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Right Panel - Order Book & Trades - Hidden on mobile */}
                  <div className="hidden lg:flex w-32 flex-col gap-1 flex-shrink-0">
                    {/* Order Book */}
                    <div className="bg-gray-900 rounded p-1 flex-1">
                      <h3 className="text-white font-semibold mb-1 text-xs">Order Book</h3>
                      
                      {/* Asks */}
                      <div className="space-y-0.5 mb-1">
                        {Array.from({length: 4}, (_, i) => (
                          <div key={i} className="grid grid-cols-3 text-xs">
                            <span className="text-red-400">{(42550 + i * 5).toLocaleString()}</span>
                            <span className="text-gray-400 text-right">{(2.5 - i * 0.2).toFixed(1)}</span>
                            <span className="text-gray-500 text-right">{(12.5 - i * 0.5).toFixed(1)}K</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Current Price */}
                      <div className="text-center py-0.5 border-y border-gray-700 mb-1">
                        <span className="text-white font-bold text-xs">42,530.25</span>
                      </div>
                      
                      {/* Bids */}
                      <div className="space-y-0.5">
                        {Array.from({length: 4}, (_, i) => (
                          <div key={i} className="grid grid-cols-3 text-xs">
                            <span className="text-green-400">{(42525 - i * 5).toLocaleString()}</span>
                            <span className="text-gray-400 text-right">{(3.2 + i * 0.3).toFixed(1)}</span>
                            <span className="text-gray-500 text-right">{(15.0 + i * 0.8).toFixed(1)}K</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Recent Trades */}
                    <div className="bg-gray-900 rounded p-1 flex-1">
                      <h3 className="text-white font-semibold mb-1 text-xs">Recent Trades</h3>
                      <div className="space-y-0.5">
                        {Array.from({length: 8}, (_, i) => (
                          <div key={i} className="grid grid-cols-3 text-xs">
                            <span className={i % 3 === 0 ? 'text-red-400' : 'text-green-400'}>
                              {(42530 + (i % 3 === 0 ? 5 : -3)).toLocaleString()}
                            </span>
                            <span className="text-gray-400 text-right">{(0.1 + i * 0.02).toFixed(2)}</span>
                            <span className="text-gray-500 text-right">
                              {new Date(Date.now() - i * 1000).toLocaleTimeString().slice(-5)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Panel - Trading Form */}
                <div className="bg-gray-900 p-1 sm:p-2 flex flex-col sm:flex-row gap-2 border-t border-gray-700">
                  {/* Buy Section */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-green-500 font-bold text-xs">Buy BTC</h3>
                      <span className="text-xs text-gray-400 hidden sm:inline">Avbl: 25,463 USDT</span>
                    </div>
                    <div className="flex gap-1 mb-1">
                      <div className="flex-1">
                        <label className="text-xs text-gray-400 block mb-0.5 hidden sm:block">Price</label>
                        <input 
                          type="text" 
                          value="42,530" 
                          placeholder="Price"
                          className="w-full bg-gray-800 text-white p-1 rounded border border-gray-600 text-xs"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="text-xs text-gray-400 block mb-0.5 hidden sm:block">Amount</label>
                        <input 
                          type="text" 
                          placeholder="Amount" 
                          className="w-full bg-gray-800 text-white p-1 rounded border border-gray-600 text-xs"
                        />
                      </div>
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-1 rounded text-xs">
                      Buy BTC
                    </button>
                  </div>
                  
                  {/* Sell Section */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-red-500 font-bold text-xs">Sell BTC</h3>
                      <span className="text-xs text-gray-400 hidden sm:inline">Avbl: 0.842 BTC</span>
                    </div>
                    <div className="flex gap-1 mb-1">
                      <div className="flex-1">
                        <label className="text-xs text-gray-400 block mb-0.5 hidden sm:block">Price</label>
                        <input 
                          type="text" 
                          value="42,530" 
                          placeholder="Price"
                          className="w-full bg-gray-800 text-white p-1 rounded border border-gray-600 text-xs"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="text-xs text-gray-400 block mb-0.5 hidden sm:block">Amount</label>
                        <input 
                          type="text" 
                          placeholder="Amount" 
                          className="w-full bg-gray-800 text-white p-1 rounded border border-gray-600 text-xs"
                        />
                      </div>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-1 rounded text-xs">
                      Sell BTC
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile App Interface */}
        {activeView === 'mobile' && (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">Mobile Trading App</h3>
              <p className={`text-base sm:text-lg mb-4 lg:mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'opacity-90'
              }`}>
                Trade on the go with our feature-rich mobile application for iOS and Android
              </p>
              
              <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 text-left">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Instant buy and sell with one-tap trading</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Real-time price alerts and notifications</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Secure biometric authentication</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Portfolio tracking and performance analytics</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-3 flex-shrink-0"></i>
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-200' : 'text-white'}`}>Seamless sync with desktop platform</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <button className={`px-4 sm:px-6 py-3 font-bold rounded-lg transition-colors duration-300 flex items-center justify-center text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-700 hover:bg-gray-100'
                }`}>
                  <i className="fab fa-apple mr-2"></i> App Store
                </button>
                <button className={`px-4 sm:px-6 py-3 border-2 font-bold rounded-lg transition-colors duration-300 flex items-center justify-center text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900'
                    : 'border-white text-white hover:bg-white hover:text-blue-700'
                }`}>
                  <i className="fab fa-google-play mr-2"></i> Google Play
                </button>
              </div>
            </div>
            
            {/* Right side - Mobile interface */}
            <div className="flex justify-center w-full lg:flex-1">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xs">
                {/* Phone Frame */}
                <div className={`rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 mx-auto ${
                  theme === 'dark' 
                    ? 'border-gray-700 bg-gray-800' 
                    : 'border-gray-800 bg-gray-900'
                }`} style={{maxWidth: "280px"}}>
                  {/* Status Bar */}
                  <div className="bg-black px-4 py-1 flex justify-between items-center text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-signal"></i>
                      <i className="fas fa-wifi"></i>
                      <i className="fas fa-battery-three-quarters"></i>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-gray-900 p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-arrow-left text-gray-400 mr-3"></i>
                        <div>
                          <div className="text-white font-bold">BTC/USDT</div>
                          <div className="text-green-400 text-sm">+2.45%</div>
                        </div>
                      </div>
                      <div className="flex space-x-3 text-gray-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-ellipsis-v"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Section */}
                  <div className="bg-gray-900 p-4">
                    <div className="text-center mb-4">
                      <div className="text-white text-2xl font-bold">$42,530.25</div>
                      <div className="text-green-400">+$1,032.50 (+2.45%)</div>
                    </div>
                    
                    {/* Mini Chart */}
                    <div className="h-32 bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <defs>
                          <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 L30,75 L60,85 L90,70 L120,65 L150,55 L180,50 L210,45 L240,40 L270,30 L300,25"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                        />
                        <path
                          d="M0,80 L30,75 L60,85 L90,70 L120,65 L150,55 L180,50 L210,45 L240,40 L270,30 L300,25 L300,120 L0,120 Z"
                          fill="url(#mobileGradient)"
                          opacity="0.3"
                        />
                      </svg>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 text-xs text-center">
                      <div>
                        <div className="text-gray-400">24h High</div>
                        <div className="text-white font-bold">$43,120.80</div>
                      </div>
                      <div>
                        <div className="text-gray-400">24h Low</div>
                        <div className="text-white font-bold">$41,200.15</div>
                      </div>
                      <div>
                        <div className="text-gray-400">24h Volume</div>
                        <div className="text-white font-bold">45.2K BTC</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trading Buttons */}
                  <div className="bg-gray-900 p-4">
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold">
                        Buy
                      </button>
                      <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold">
                        Sell
                      </button>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="bg-gray-900 border-t border-gray-700 px-2 py-3">
                    <div className="flex justify-between text-xs">
                      <div className="text-center px-3">
                        <i className="fas fa-home block mb-1 text-gray-400"></i>
                        <span className="text-gray-400">Home</span>
                      </div>
                      <div className="text-center px-3">
                        <i className="fas fa-chart-line block mb-1 text-blue-500"></i>
                        <span className="text-blue-500">Markets</span>
                      </div>
                      <div className="text-center px-3">
                        <i className="fas fa-exchange-alt block mb-1 text-gray-400"></i>
                        <span className="text-gray-400">Trade</span>
                      </div>
                      <div className="text-center px-3">
                        <i className="fas fa-wallet block mb-1 text-gray-400"></i>
                        <span className="text-gray-400">Wallet</span>
                      </div>
                      <div className="text-center px-3">
                        <i className="fas fa-user block mb-1 text-gray-400"></i>
                        <span className="text-gray-400">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TradeAnywhere
