import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { aiTradingService } from '../../services/aiTradingService'

const AITradingPanel = ({ 
  aiSignal, 
  automationStatus, 
  recommendations, 
  sentiment,
  onStartAutomation,
  onStopAutomation,
  onGetRecommendations 
}) => {
  const { theme } = useTheme()
  const [automationConfig, setAutomationConfig] = useState({
    riskLevel: 'medium',
    maxTradeAmount: 0.01,
    stopLoss: 5,
    takeProfit: 10,
    timeframe: '1H'
  })
  
  // Add natural language input state
  const [nlInput, setNlInput] = useState('')
  const [nlResult, setNlResult] = useState(null)
  const [nlLoading, setNlLoading] = useState(false)

  // Handle natural language interpretation
  const handleNLInterpret = async () => {
    if (!nlInput.trim()) return
    
    setNlLoading(true)
    try {
      const result = await aiTradingService.interpretTradingCommand(nlInput)
      setNlResult(result)
    } catch (error) {
      setNlResult({ error: error.message })
    } finally {
      setNlLoading(false)
    }
  }

  const getSignalColor = (signal) => {
    switch (signal) {
      case 'BUY': return 'text-green-500'
      case 'SELL': return 'text-red-500'
      default: return 'text-yellow-500'
    }
  }

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'bullish': return 'text-green-500'
      case 'bearish': return 'text-red-500'
      default: return 'text-yellow-500'
    }
  }

  return (
    <div className={`h-full p-4 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="space-y-6">
        {/* Natural Language Input */}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            AI Trading Assistant
          </h3>
          
          <div className="space-y-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={nlInput}
                onChange={(e) => setNlInput(e.target.value)}
                placeholder="Ask me about trading... (e.g., 'Show me ETH/USDT on 15 minute chart with RSI')"
                className={`flex-1 p-2 rounded text-sm ${
                  theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                }`}
                onKeyPress={(e) => e.key === 'Enter' && handleNLInterpret()}
              />
              <button
                onClick={handleNLInterpret}
                disabled={nlLoading || !nlInput.trim()}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded text-sm font-medium disabled:opacity-50"
              >
                {nlLoading ? '...' : 'Ask AI'}
              </button>
            </div>
            
            {nlResult && (
              <div className={`p-3 rounded text-sm ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                {nlResult.error ? (
                  <div className="text-red-500">Error: {nlResult.error}</div>
                ) : (
                  <div className="space-y-1">
                    {nlResult.symbol && (
                      <div><strong>Symbol:</strong> {nlResult.symbol}</div>
                    )}
                    {nlResult.interval && (
                      <div><strong>Interval:</strong> {nlResult.interval}</div>
                    )}
                    {nlResult.studies && nlResult.studies.length > 0 && (
                      <div><strong>Studies:</strong> {nlResult.studies.join(', ')}</div>
                    )}
                    {nlResult.signal && (
                      <div><strong>Signal:</strong> <span className={getSignalColor(nlResult.signal)}>{nlResult.signal}</span></div>
                    )}
                    {nlResult.reasoning && (
                      <div><strong>Reasoning:</strong> {nlResult.reasoning}</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* AI Signal */}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            AI Trading Signal
          </h3>
          
          {aiSignal.isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Analyzing...</span>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Signal:</span>
                <span className={`font-bold ${getSignalColor(aiSignal.signal)}`}>
                  {aiSignal.signal}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Confidence:</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  {(aiSignal.confidence * 100).toFixed(1)}%
                </span>
              </div>
              {aiSignal.reasoning && (
                <div className="mt-2">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Reasoning:</span>
                  <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {aiSignal.reasoning}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Market Sentiment */}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Market Sentiment
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Overall:</span>
              <span className={`font-bold ${getSentimentColor(sentiment.sentiment)}`}>
                {sentiment.sentiment.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Score:</span>
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                {(sentiment.score * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        {/* Automation Controls */}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Automation
          </h3>
          
          {!automationStatus.isActive ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Risk Level
                  </label>
                  <select
                    value={automationConfig.riskLevel}
                    onChange={(e) => setAutomationConfig(prev => ({ ...prev, riskLevel: e.target.value }))}
                    className={`w-full p-2 rounded text-sm ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Max Trade Amount
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    value={automationConfig.maxTradeAmount}
                    onChange={(e) => setAutomationConfig(prev => ({ ...prev, maxTradeAmount: parseFloat(e.target.value) }))}
                    className={`w-full p-2 rounded text-sm ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Stop Loss (%)
                  </label>
                  <input
                    type="number"
                    value={automationConfig.stopLoss}
                    onChange={(e) => setAutomationConfig(prev => ({ ...prev, stopLoss: parseFloat(e.target.value) }))}
                    className={`w-full p-2 rounded text-sm ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Take Profit (%)
                  </label>
                  <input
                    type="number"
                    value={automationConfig.takeProfit}
                    onChange={(e) => setAutomationConfig(prev => ({ ...prev, takeProfit: parseFloat(e.target.value) }))}
                    className={`w-full p-2 rounded text-sm ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                  />
                </div>
              </div>

              <button
                onClick={() => onStartAutomation(automationConfig)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-medium"
              >
                Start AI Automation
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-green-500 font-medium">🤖 AI Automation Active</span>
                <button
                  onClick={onStopAutomation}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                >
                  Stop
                </button>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Total Trades:</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {automationStatus.performance.totalTrades}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Success Rate:</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    {automationStatus.performance.successRate.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>P&L:</span>
                  <span className={automationStatus.performance.totalPnL >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {automationStatus.performance.totalPnL >= 0 ? '+' : ''}
                    {automationStatus.performance.totalPnL.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* AI Recommendations */}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              AI Recommendations
            </h3>
            <button
              onClick={() => onGetRecommendations()}
              className="text-yellow-500 hover:text-yellow-400 text-sm"
            >
              Refresh
            </button>
          </div>
          
          {recommendations.length > 0 ? (
            <div className="space-y-2">
              {recommendations.map((rec, index) => (
                <div key={index} className={`p-2 rounded text-sm ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={getSignalColor(rec.action)}>{rec.action}</span>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {rec.confidence}% confidence
                    </span>
                  </div>
                  <p className={`mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {rec.reason}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              No recommendations available
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AITradingPanel
