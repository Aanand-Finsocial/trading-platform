import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const TradeForm = ({ pair, currentPrice, onTradeSubmit }) => {
  const { theme } = useTheme()
  const [activeSection, setActiveSection] = useState('spot')
  const [activeTab, setActiveTab] = useState('buy')
  const [orderType, setOrderType] = useState('limit')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')
  const [total, setTotal] = useState('')
  const [stopPrice, setStopPrice] = useState('')
  const [limitPrice, setLimitPrice] = useState('')
  const [tpslEnabled, setTpslEnabled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onTradeSubmit({
      type: activeTab,
      orderType,
      amount: parseFloat(amount),
      price: parseFloat(price),
      total: parseFloat(total)
    })
  }

  const calculateFromAmount = (value) => {
    if (price && value) {
      setTotal((parseFloat(value) * parseFloat(price)).toFixed(2))
    }
  }

  const calculateFromTotal = (value) => {
    if (price && value) {
      setAmount((parseFloat(value) / parseFloat(price)).toFixed(8))
    }
  }

  const setPercentage = (percentage) => {
    const availableBalance = activeTab === 'buy' ? 10000 : 0.1 // Mock balance
    const calculatedAmount = (availableBalance * percentage / 100).toFixed(8)
    setAmount(calculatedAmount)
    if (price) {
      setTotal((parseFloat(calculatedAmount) * parseFloat(price)).toFixed(2))
    }
  }

  const renderStopLimitForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Stop Price */}
      <div>
        <label className={`block text-xs mb-1 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Stop
        </label>
        <div className="relative">
          <input
            type="number"
            value={stopPrice}
            onChange={(e) => setStopPrice(e.target.value)}
            step="0.01"
            placeholder="Stop price"
            className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
          />
          <span className={`absolute right-3 top-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            USDT
          </span>
        </div>
      </div>

      {/* Limit Price */}
      <div>
        <label className={`block text-xs mb-1 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Limit
        </label>
        <div className="relative">
          <input
            type="number"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            step="0.01"
            placeholder="Limit price"
            className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
          />
          <span className={`absolute right-3 top-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            USDT
          </span>
        </div>
      </div>

      {/* Amount */}
      <div>
        <label className={`block text-xs mb-1 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Amount
        </label>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
              calculateFromAmount(e.target.value)
            }}
            step="0.00000001"
            placeholder="Amount"
            className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
          />
          <span className={`absolute right-3 top-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            BTC
          </span>
        </div>
        
        {/* Percentage Slider */}
        <div className="mt-2">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs mt-1">
            {[0, 25, 50, 75, 100].map((pct) => (
              <button
                key={pct}
                type="button"
                onClick={() => setPercentage(pct)}
                className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Total */}
      <div>
        <label className={`block text-xs mb-1 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Total
        </label>
        <div className="relative">
          <input
            type="number"
            value={total}
            onChange={(e) => {
              setTotal(e.target.value)
              calculateFromTotal(e.target.value)
            }}
            step="0.01"
            placeholder="Total"
            className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
          />
          <span className={`absolute right-3 top-2 text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            USDT
          </span>
        </div>
        <div className={`text-xs mt-1 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Minimum 5 USDT
        </div>
      </div>

      {/* TP/SL Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="tpsl-stop"
          checked={tpslEnabled}
          onChange={(e) => setTpslEnabled(e.target.checked)}
          className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        />
        <label htmlFor="tpsl-stop" className={`text-xs ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          TP/SL
        </label>
      </div>

      {/* Available Balance */}
      <div className={`text-xs space-y-1 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <div className="flex justify-between">
          <span>Avbl</span>
          <span>
            {activeTab === 'buy' ? '0.00000000 USDT' : '0.00000000 BTC'}
            <i className="fas fa-info-circle ml-1"></i>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Max {activeTab === 'buy' ? 'Buy' : 'Sell'}</span>
          <span>{activeTab === 'buy' ? '0 BTC' : '0 USDT'}</span>
        </div>
        <div className="flex justify-between">
          <span>Est. Fee</span>
          <span>-</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-3 font-medium rounded transition-colors ${
          activeTab === 'buy'
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
      >
        {activeTab === 'buy' ? 'Buy' : 'Sell'} BTC
      </button>
    </form>
  )

  return (
    <div className={`h-full flex flex-col ${
      theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      {/* Top Section Tabs */}
      <div className="flex border-b border-gray-700">
        {['Spot', 'Cross', 'Isolated', 'Grid'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section.toLowerCase())}
            className={`px-4 py-3 text-sm font-medium ${
              activeSection === section.toLowerCase()
                ? theme === 'dark'
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-yellow-600 border-b-2 border-yellow-600'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Fee Level and Options */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Fee Level
          </span>
          <span className="text-xs text-yellow-400">VIP 0</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className={`flex items-center space-x-1 text-xs ${
            theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
          }`}>
            <i className="fas fa-chart-line"></i>
            <span>Auto-Invest</span>
          </button>
          <button className={`flex items-center space-x-1 text-xs ${
            theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
          }`}>
            <i className="fas fa-euro-sign"></i>
            <span>Buy with EUR</span>
          </button>
        </div>
      </div>

      {/* Order Type Tabs */}
      <div className="flex border-b border-gray-700">
        {['Limit', 'Market', 'Stop Limit'].map((type) => (
          <button
            key={type}
            onClick={() => setOrderType(type.toLowerCase().replace(' ', '-'))}
            className={`px-4 py-2 text-sm font-medium ${
              orderType === type.toLowerCase().replace(' ', '-')
                ? theme === 'dark'
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-yellow-600 border-b-2 border-yellow-600'
                : theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {type}
          </button>
        ))}
        <button className={`ml-auto p-2 ${
          theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
        }`}>
          <i className="fas fa-info-circle"></i>
        </button>
      </div>

      {/* Buy and Sell Forms - Full Width Side by Side */}
      <div className="flex flex-1 min-h-0">
        {/* Buy Side - Left Half */}
        <div className="w-1/2 border-r border-gray-700 p-3 overflow-y-auto">
          <div className="space-y-3">
            {/* Buy Header */}
            <h3 className="text-sm font-medium text-green-500">Buy {pair?.split('/')[0] || 'BTC'}</h3>
            
            {/* Price Field */}
            {orderType === 'stop-limit' ? (
              <>
                <div>
                  <label className="block text-xs mb-1 text-gray-400">Stop</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={stopPrice}
                      onChange={(e) => setStopPrice(e.target.value)}
                      step="0.01"
                      placeholder="Stop price"
                      className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-400">Limit</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={limitPrice}
                      onChange={(e) => setLimitPrice(e.target.value)}
                      step="0.01"
                      placeholder="Limit price"
                      className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
                  </div>
                </div>
              </>
            ) : orderType !== 'market' ? (
              <div>
                <label className="block text-xs mb-1 text-gray-400">Price</label>
                <div className="relative">
                  <input
                    type="number"
                    value={price || currentPrice}
                    onChange={(e) => setPrice(e.target.value)}
                    step="0.01"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white"
                  />
                  <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-gray-400 p-2 bg-gray-800 rounded">
                Market Price: ${currentPrice.toLocaleString()}
              </div>
            )}

            {/* Amount Field */}
            <div>
              <label className="block text-xs mb-1 text-gray-400">Amount</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value)
                    calculateFromAmount(e.target.value)
                  }}
                  step="0.00000001"
                  placeholder="Amount"
                  className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                />
                <span className="absolute right-3 top-2 text-xs text-gray-400">BTC</span>
              </div>
              
              {/* Percentage Slider */}
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">0%</span>
                  <span className="text-xs text-gray-400">25%</span>
                  <span className="text-xs text-gray-400">50%</span>
                  <span className="text-xs text-gray-400">75%</span>
                  <span className="text-xs text-gray-400">100%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Total Field */}
            <div>
              <label className="block text-xs mb-1 text-gray-400">Total</label>
              <div className="relative">
                <input
                  type="number"
                  value={total}
                  onChange={(e) => {
                    setTotal(e.target.value)
                    calculateFromTotal(e.target.value)
                  }}
                  step="0.01"
                  placeholder="Total"
                  className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                />
                <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
              </div>
              <div className="text-xs mt-1 text-gray-400">Minimum 5 USDT</div>
            </div>

            {/* TP/SL Checkbox */}
            {orderType !== 'market' && (
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="buy-tpsl"
                checked={tpslEnabled}
                onChange={(e) => setTpslEnabled(e.target.checked)}
                  className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
                <label htmlFor="buy-tpsl" className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  TP/SL
                </label>
            </div>
            )}

            {/* Available Balance */}
            <div className={`text-xs space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex justify-between">
                <span>Avbl</span>
                <span>0.00000000 USDT <i className="fas fa-info-circle ml-1 text-yellow-500"></i></span>
              </div>
              <div className="flex justify-between">
                <span>Max Buy</span>
                <span>0 BTC</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Fee</span>
                <span>-</span>
              </div>
            </div>

            {/* Buy Button */}
            <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors">
              Buy BTC
            </button>
          </div>
        </div>

        {/* Sell Side - Right Half */}
        <div className="w-1/2 p-3 overflow-y-auto">
          <div className="space-y-3">
            {/* Sell Header */}
            <h3 className="text-sm font-medium text-red-500">Sell {pair?.split('/')[0] || 'BTC'}</h3>

            {/* Price Field */}
            {orderType === 'stop-limit' ? (
              <>
                <div>
                  <label className="block text-xs mb-1 text-gray-400">Stop</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={stopPrice}
                      onChange={(e) => setStopPrice(e.target.value)}
                      step="0.01"
                      placeholder="Stop price"
                      className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-400">Limit</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={limitPrice}
                      onChange={(e) => setLimitPrice(e.target.value)}
                      step="0.01"
                      placeholder="Limit price"
                      className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
                  </div>
                </div>
              </>
            ) : orderType !== 'market' ? (
              <div>
                <label className="block text-xs mb-1 text-gray-400">Price</label>
                <div className="relative">
                  <input
                    type="number"
                    value={price || currentPrice}
                    onChange={(e) => setPrice(e.target.value)}
                    step="0.01"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white"
                  />
                  <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-gray-400 p-2 bg-gray-800 rounded">
                Market Price: ${currentPrice.toLocaleString()}
              </div>
            )}

            {/* Amount Field */}
            <div>
              <label className="block text-xs mb-1 text-gray-400">Amount</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value)
                    calculateFromAmount(e.target.value)
                  }}
                  step="0.00000001"
                  placeholder="Amount"
                  className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                />
                <span className="absolute right-3 top-2 text-xs text-gray-400">BTC</span>
              </div>
              
              {/* Percentage Slider */}
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">0%</span>
                  <span className="text-xs text-gray-400">25%</span>
                  <span className="text-xs text-gray-400">50%</span>
                  <span className="text-xs text-gray-400">75%</span>
                  <span className="text-xs text-gray-400">100%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Total Field */}
            <div>
              <label className="block text-xs mb-1 text-gray-400">Total</label>
              <div className="relative">
                <input
                  type="number"
                  value={total}
                  onChange={(e) => {
                    setTotal(e.target.value)
                    calculateFromTotal(e.target.value)
                  }}
                  step="0.01"
                  placeholder="Total"
                  className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                />
                <span className="absolute right-3 top-2 text-xs text-gray-400">USDT</span>
              </div>
              <div className="text-xs mt-1 text-gray-400">Minimum 5 USDT</div>
            </div>

            {/* TP/SL Checkbox */}
            {orderType !== 'market' && (
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sell-tpsl"
                checked={tpslEnabled}
                onChange={(e) => setTpslEnabled(e.target.checked)}
                  className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
                <label htmlFor="sell-tpsl" className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  TP/SL
                </label>
            </div>
            )}

            {/* Available Balance */}
            <div className={`text-xs space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex justify-between">
                <span>Avbl</span>
                <span>0.00000000 BTC <i className="fas fa-info-circle ml-1 text-yellow-500"></i></span>
              </div>
              <div className="flex justify-between">
                <span>Max Sell</span>
                <span>0 USDT</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Fee</span>
                <span>-</span>
              </div>
            </div>

            {/* Sell Button */}
            <button className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors">
              Sell BTC
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeForm
