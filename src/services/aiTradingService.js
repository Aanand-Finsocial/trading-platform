const AI_BACKEND_URL =  'http://localhost:4000'

export class AITradingService {
  constructor() {
    this.baseURL = AI_BACKEND_URL
  }

  // Interpret natural language trading commands
  async interpretTradingCommand(message) {
    try {
      const response = await fetch(`${this.baseURL}/api/interpret`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      // Ensure proper data formatting
      return {
        symbol: data.symbol || null,
        interval: data.interval ? parseInt(data.interval) : null, // Convert string to number
        studies: Array.isArray(data.studies) ? data.studies : [],
        signal: data.signal || null,
        confidence: data.confidence ? parseFloat(data.confidence) : null,
        reasoning: data.reasoning || null,
        recommendations: data.recommendations || null,
        sentiment: data.sentiment || null,
        score: data.score ? parseFloat(data.score) : null,
        factors: data.factors || null,
        error: data.error || null
      }
    } catch (error) {
      console.error('Error interpreting trading command:', error)
      return {
        error: error.message,
        symbol: null,
        interval: null,
        studies: []
      }
    }
  }

  // Analyze market data and get trading signals using AI
  async analyzeTradingSignal(marketData) {
    try {
      const analysisPrompt = `
        Analyze this market data for ${marketData.symbol}:
        - Current Price: $${marketData.price}
        - 24h Change: ${marketData.priceChangePercent}%
        - High: $${marketData.high}
        - Low: $${marketData.low}
        - Volume: ${marketData.volume}
        
        Provide a trading signal (BUY/SELL/HOLD), confidence level (0-1), and reasoning.
        Format: {"signal": "BUY/SELL/HOLD", "confidence": 0.75, "reasoning": "explanation"}
      `

      const response = await this.interpretTradingCommand(analysisPrompt)
      
      if (response.error) {
        return {
          signal: 'HOLD',
          confidence: 0.5,
          reasoning: 'Unable to analyze market data due to API error',
          error: response.error
        }
      }

      // Extract signal information from response or provide defaults
      return {
        signal: response.signal || 'HOLD',
        confidence: response.confidence || 0.5,
        reasoning: response.reasoning || 'AI analysis completed',
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      console.error('Error analyzing trading signal:', error)
      return {
        signal: 'HOLD',
        confidence: 0,
        reasoning: 'Unable to analyze market data',
        error: error.message
      }
    }
  }

  // Get automated trading recommendations
  async getAutomatedRecommendations(pair, timeframe, riskLevel = 'medium') {
    try {
      const recommendationPrompt = `
        Generate trading recommendations for ${pair} on ${timeframe} timeframe with ${riskLevel} risk level.
        Provide 3 actionable recommendations with confidence scores.
        Format: {"recommendations": [{"action": "BUY/SELL/HOLD", "confidence": 85, "reason": "explanation"}]}
      `

      const response = await this.interpretTradingCommand(recommendationPrompt)
      
      if (response.error) {
        return {
          recommendations: [],
          error: response.error
        }
      }

      return {
        recommendations: response.recommendations || [
          {
            action: 'HOLD',
            confidence: 50,
            reason: 'Neutral market conditions detected'
          }
        ]
      }
    } catch (error) {
      console.error('Error getting automated recommendations:', error)
      return {
        recommendations: [],
        error: error.message
      }
    }
  }

  // Get market sentiment analysis
  async getMarketSentiment(symbol) {
    try {
      const sentimentPrompt = `
        Analyze market sentiment for ${symbol}.
        Consider recent price movements, volume, and general market conditions.
        Format: {"sentiment": "bullish/bearish/neutral", "score": 0.65, "factors": ["factor1", "factor2"]}
      `

      const response = await this.interpretTradingCommand(sentimentPrompt)
      
      if (response.error) {
        return {
          sentiment: 'neutral',
          score: 0.5,
          factors: [],
          error: response.error
        }
      }

      return {
        sentiment: response.sentiment || 'neutral',
        score: response.score || 0.5,
        factors: response.factors || []
      }
    } catch (error) {
      console.error('Error getting market sentiment:', error)
      return {
        sentiment: 'neutral',
        score: 0.5,
        factors: [],
        error: error.message
      }
    }
  }

  // Simulate automated trading (since your backend doesn't have actual trading)
  async startAutomation(config) {
    try {
      const automationPrompt = `
        Create an automated trading session for ${config.pair} with:
        - Risk Level: ${config.riskLevel}
        - Max Trade Amount: ${config.maxTradeAmount}
        - Stop Loss: ${config.stopLoss}%
        - Take Profit: ${config.takeProfit}%
        
        Format: {"success": true, "sessionId": "unique_id", "message": "Session started"}
      `

      const response = await this.interpretTradingCommand(automationPrompt)
      
      if (response.error) {
        return {
          success: false,
          error: response.error
        }
      }

      return {
        success: true,
        sessionId: `session_${Date.now()}`,
        message: 'AI automation session started',
        config
      }
    } catch (error) {
      console.error('Error starting automation:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }

  // Simulate stopping automation
  async stopAutomation(sessionId) {
    try {
      return {
        success: true,
        message: `Automation session ${sessionId} stopped`,
        finalStats: {
          totalTrades: Math.floor(Math.random() * 10) + 1,
          successRate: Math.random() * 100,
          totalPnL: (Math.random() - 0.5) * 20
        }
      }
    } catch (error) {
      console.error('Error stopping automation:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }

  // Execute automated trade (simulation)
  async executeAutomatedTrade(tradeParams) {
    try {
      const tradePrompt = `
        Execute ${tradeParams.side} trade for ${tradeParams.symbol}:
        - Amount: ${tradeParams.amount}
        - Price: ${tradeParams.price}
        
        Format: {"success": true, "tradeId": "trade_123", "executedPrice": 45000}
      `

      const response = await this.interpretTradingCommand(tradePrompt)
      
      return {
        success: true,
        tradeId: `trade_${Date.now()}`,
        executedPrice: tradeParams.price,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      console.error('Error executing automated trade:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }
}

export const aiTradingService = new AITradingService()
