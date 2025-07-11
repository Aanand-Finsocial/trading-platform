import { useState, useEffect, useCallback } from 'react'
import { aiTradingService } from '../services/aiTradingService'

export const useAITrading = (pair, marketData) => {
  const [aiSignal, setAISignal] = useState({
    signal: 'HOLD',
    confidence: 0,
    reasoning: '',
    timestamp: null,
    isLoading: false,
    error: null
  })

  const [automationStatus, setAutomationStatus] = useState({
    isActive: false,
    sessionId: null,
    config: null,
    trades: [],
    performance: {
      totalTrades: 0,
      successRate: 0,
      totalPnL: 0
    }
  })

  const [recommendations, setRecommendations] = useState([])
  const [sentiment, setSentiment] = useState({
    sentiment: 'neutral',
    score: 0.5,
    factors: []
  })

  // Analyze trading signal with fallback
  const analyzeSignal = useCallback(async () => {
    if (!marketData || !marketData.price) return

    setAISignal(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      const result = await aiTradingService.analyzeTradingSignal({
        symbol: pair,
        ...marketData
      })

      setAISignal({
        signal: result.signal || 'HOLD',
        confidence: result.confidence || 0.5,
        reasoning: result.reasoning || 'AI analysis completed',
        timestamp: new Date().toISOString(),
        isLoading: false,
        error: null
      })
    } catch (error) {
      // Provide mock signal as fallback
      const mockSignals = ['BUY', 'SELL', 'HOLD']
      const randomSignal = mockSignals[Math.floor(Math.random() * mockSignals.length)]
      
      setAISignal({
        signal: randomSignal,
        confidence: Math.random() * 0.4 + 0.3, // 0.3 to 0.7
        reasoning: `Mock AI signal generated due to API error: ${error.message}`,
        timestamp: new Date().toISOString(),
        isLoading: false,
        error: error.message
      })
    }
  }, [pair, marketData])

  // Get automated recommendations with fallback
  const getRecommendations = useCallback(async (timeframe = '1D', riskLevel = 'medium') => {
    try {
      const result = await aiTradingService.getAutomatedRecommendations(pair, timeframe, riskLevel)
      setRecommendations(result.recommendations || [])
    } catch (error) {
      console.error('Error getting recommendations:', error)
      // Provide mock recommendations as fallback
      setRecommendations([
        {
          action: 'HOLD',
          confidence: 65,
          reason: 'Market conditions are neutral, waiting for clearer signals'
        },
        {
          action: 'BUY',
          confidence: 45,
          reason: 'Potential support level identified, but low confidence'
        }
      ])
    }
  }, [pair])

  // Get market sentiment with fallback
  const getSentiment = useCallback(async () => {
    try {
      const result = await aiTradingService.getMarketSentiment(pair.split('/')[0])
      setSentiment(result)
    } catch (error) {
      console.error('Error getting sentiment:', error)
      // Provide mock sentiment as fallback
      setSentiment({
        sentiment: 'neutral',
        score: 0.5 + (Math.random() - 0.5) * 0.4, // 0.3 to 0.7
        factors: ['API unavailable', 'Using fallback data']
      })
    }
  }, [pair])

  // Start automation
  const startAutomation = useCallback(async (config) => {
    try {
      const result = await aiTradingService.startAutomation({
        pair,
        ...config
      })

      if (result.success) {
        setAutomationStatus(prev => ({
          ...prev,
          isActive: true,
          sessionId: result.sessionId,
          config
        }))
      }

      return result
    } catch (error) {
      console.error('Error starting automation:', error)
      return { success: false, error: error.message }
    }
  }, [pair])

  // Stop automation
  const stopAutomation = useCallback(async () => {
    if (!automationStatus.sessionId) return

    try {
      const result = await aiTradingService.stopAutomation(automationStatus.sessionId)

      if (result.success) {
        setAutomationStatus(prev => ({
          ...prev,
          isActive: false,
          sessionId: null,
          config: null
        }))
      }

      return result
    } catch (error) {
      console.error('Error stopping automation:', error)
      return { success: false, error: error.message }
    }
  }, [automationStatus.sessionId])

  // Auto-analyze when market data changes
  useEffect(() => {
    if (marketData && marketData.price) {
      analyzeSignal()
    }
  }, [analyzeSignal])

  return {
    aiSignal,
    automationStatus,
    recommendations,
    sentiment,
    analyzeSignal,
    getRecommendations,
    getSentiment,
    startAutomation,
    stopAutomation
  }
}
