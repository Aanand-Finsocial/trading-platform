import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const LightweightChart = ({ data, timeFrame, pair, currentPrice, volume }) => {
  const { theme } = useTheme()
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 })
  const [isDrawing, setIsDrawing] = useState(false)

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current?.parentElement) {
        const rect = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({
          width: rect.width || 800,
          height: rect.height || 400
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Draw the chart
  useEffect(() => {
    if (!canvasRef.current || !data?.length || isDrawing) return

    setIsDrawing(true)

    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
      try {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        
        // Set canvas size
        canvas.width = dimensions.width
        canvas.height = dimensions.height

        // Clear canvas
        ctx.clearRect(0, 0, dimensions.width, dimensions.height)

        // Chart settings
        const padding = 40
        const chartWidth = dimensions.width - 2 * padding
        const chartHeight = dimensions.height - 2 * padding

        // Validate data
        if (!data || data.length === 0) {
          setIsDrawing(false)
          return
        }

        // Get price range
        const prices = data.flatMap(d => [d.high, d.low]).filter(p => p && !isNaN(p))
        if (prices.length === 0) {
          setIsDrawing(false)
          return
        }

        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)
        const priceRange = maxPrice - minPrice || 1

        // Draw background
        ctx.fillStyle = theme === 'dark' ? '#1F2937' : '#FFFFFF'
        ctx.fillRect(0, 0, dimensions.width, dimensions.height)

        // Draw grid lines
        ctx.strokeStyle = theme === 'dark' ? '#374151' : '#E5E7EB'
        ctx.lineWidth = 1

        // Horizontal grid lines
        for (let i = 0; i <= 5; i++) {
          const y = padding + (chartHeight / 5) * i
          ctx.beginPath()
          ctx.moveTo(padding, y)
          ctx.lineTo(dimensions.width - padding, y)
          ctx.stroke()
        }

        // Vertical grid lines
        for (let i = 0; i <= 5; i++) {
          const x = padding + (chartWidth / 5) * i
          ctx.beginPath()
          ctx.moveTo(x, padding)
          ctx.lineTo(x, dimensions.height - padding)
          ctx.stroke()
        }

        // Draw candlesticks
        const candleWidth = Math.max(1, Math.floor(chartWidth / data.length) - 2)
        
        data.forEach((candle, index) => {
          if (!candle || typeof candle.open !== 'number') return

          const x = padding + (chartWidth / data.length) * index
          const openY = padding + chartHeight - ((candle.open - minPrice) / priceRange) * chartHeight
          const closeY = padding + chartHeight - ((candle.close - minPrice) / priceRange) * chartHeight
          const highY = padding + chartHeight - ((candle.high - minPrice) / priceRange) * chartHeight
          const lowY = padding + chartHeight - ((candle.low - minPrice) / priceRange) * chartHeight

          const isGreen = candle.close >= candle.open
          ctx.strokeStyle = isGreen ? '#10B981' : '#EF4444'
          ctx.fillStyle = isGreen ? '#10B981' : '#EF4444'
          ctx.lineWidth = 1

          // Draw high-low line
          ctx.beginPath()
          ctx.moveTo(x + candleWidth / 2, highY)
          ctx.lineTo(x + candleWidth / 2, lowY)
          ctx.stroke()

          // Draw candle body
          const bodyTop = Math.min(openY, closeY)
          const bodyHeight = Math.abs(closeY - openY)
          
          if (bodyHeight > 0) {
            ctx.fillRect(x, bodyTop, candleWidth, bodyHeight)
          } else {
            // Draw a line for doji
            ctx.beginPath()
            ctx.moveTo(x, openY)
            ctx.lineTo(x + candleWidth, openY)
            ctx.stroke()
          }
        })

        // Draw price labels
        ctx.fillStyle = theme === 'dark' ? '#D1D5DB' : '#374151'
        ctx.font = '12px Arial'
        ctx.textAlign = 'right'

        for (let i = 0; i <= 5; i++) {
          const price = minPrice + (priceRange / 5) * (5 - i)
          const y = padding + (chartHeight / 5) * i
          ctx.fillText(price.toFixed(2), padding - 10, y + 4)
        }

        // Draw current price line
        if (currentPrice && currentPrice >= minPrice && currentPrice <= maxPrice) {
          const currentY = padding + chartHeight - ((currentPrice - minPrice) / priceRange) * chartHeight
          
          ctx.strokeStyle = theme === 'dark' ? '#FCD34D' : '#F59E0B'
          ctx.lineWidth = 2
          ctx.setLineDash([5, 5])
          
          ctx.beginPath()
          ctx.moveTo(padding, currentY)
          ctx.lineTo(dimensions.width - padding, currentY)
          ctx.stroke()
          
          ctx.setLineDash([])
          
          // Price label
          ctx.fillStyle = theme === 'dark' ? '#FCD34D' : '#F59E0B'
          ctx.textAlign = 'left'
          ctx.fillText(currentPrice.toFixed(2), dimensions.width - padding + 5, currentY + 4)
        }

      } catch (error) {
        console.error('Error drawing chart:', error)
      } finally {
        setIsDrawing(false)
      }
    })
  }, [data, dimensions, theme, currentPrice, isDrawing])

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      
      {/* Chart overlay with current price */}
      <div className="absolute top-4 left-4 z-10">
        <div className={`px-3 py-2 rounded-lg backdrop-blur-sm ${
          theme === 'dark' ? 'bg-gray-800/80 text-white' : 'bg-white/80 text-gray-900'
        }`}>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{pair}</span>
            <span className="text-lg font-bold">
              ${currentPrice?.toFixed(2) || '0.00'}
            </span>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {(!data?.length || isDrawing) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <div className="text-lg font-medium">Loading Chart...</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LightweightChart