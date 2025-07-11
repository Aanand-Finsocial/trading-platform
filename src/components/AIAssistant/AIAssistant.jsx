import React, { useState, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'


const AIAssistant = ({ 
  chatbotUrl = "https://new.hindai.finsocial.tech", 
  position = "bottom-right",
  showLabel = true,
  size = "medium"
}) => {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 })
  const [navigationStatus, setNavigationStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [chatMode, setChatMode] = useState('assistant') // 'assistant' | 'fullscreen'
  const chatWindowRef = useRef(null)

  const handleClick = () => {
    setIsClicked(true)
    setIsChatOpen(!isChatOpen)
    if (!isChatOpen) {
      setIsLoading(true)
      // Simulate loading time
      setTimeout(() => setIsLoading(false), 1500)
    }
    setTimeout(() => setIsClicked(false), 200)
  }

  const closeChat = () => {
    setIsChatOpen(false)
    setIsLoading(false)
  }

  const handleNavigationRequest = (request) => {
    setNavigationStatus({
      type: 'requesting',
      message: request.intent?.type === 'interaction' 
        ? `Performing ${request.intent.action} on ${request.intent.element}...`
        : `Navigating to ${request.intent?.route}...`,
      timestamp: Date.now()
    })
  }

  const handleNavigationComplete = (result) => {
    setNavigationStatus({
      type: result.success ? 'success' : 'error',
      message: result.success 
        ? (result.intent?.type === 'interaction' 
          ? `${result.intent.action} completed successfully`
          : `Navigated to ${result.intent?.route}`)
        : 'Action failed',
      timestamp: Date.now()
    })
    
    // Clear status after 3 seconds
    setTimeout(() => setNavigationStatus(null), 3000)
  }

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-6 left-6"
      case "bottom-right":
        return "bottom-6 right-6"
      case "top-right":
        return "top-20 right-6"
      case "top-left":
        return "top-20 left-6"
      default:
        return "bottom-6 right-6"
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-12 h-12"
      case "medium":
        return "w-14 h-14"
      case "large":
        return "w-16 h-16"
      default:
        return "w-14 h-14"
    }
  }

  const handleMouseDown = (e) => {
    if (e.target.closest('.drag-handle')) {
      setIsDragging(true)
      const rect = chatWindowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      
      // Constrain to viewport
      const maxX = window.innerWidth - 420
      const maxY = window.innerHeight - 100
      
      setWindowPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  const toggleFullscreen = () => {
    setChatMode(chatMode === 'assistant' ? 'fullscreen' : 'assistant')
  }

  return (
    <>
      {/* Navigation Handler - handles chatbot navigation requests */}
      
      <div className={`fixed ${getPositionClasses()} z-50`}>
        <div className="flex items-center space-x-3">
          {/* Navigation Status Indicator */}
          {navigationStatus && (
            <div className={`px-4 py-2 rounded-full shadow-lg text-sm font-medium backdrop-blur-sm ${
              navigationStatus.type === 'success' 
                ? 'bg-green-500/90 text-white border border-green-400'
                : navigationStatus.type === 'error'
                ? 'bg-red-500/90 text-white border border-red-400'
                : 'bg-blue-500/90 text-white border border-blue-400'
            } animate-slideIn`}>
              <div className="flex items-center space-x-2">
                {navigationStatus.type === 'requesting' && (
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {navigationStatus.type === 'success' && (
                  <i className="fas fa-check text-xs"></i>
                )}
                {navigationStatus.type === 'error' && (
                  <i className="fas fa-exclamation-triangle text-xs"></i>
                )}
                <span>{navigationStatus.message}</span>
              </div>
            </div>
          )}

          {/* Chat bubble tooltip */}
          {showLabel && isHovered && !navigationStatus && (
            <div className={`px-4 py-3 rounded-xl shadow-xl backdrop-blur-md ${
              theme === 'dark' 
                ? 'bg-gray-800/95 text-white border border-gray-600/50' 
                : 'bg-white/95 text-gray-900 border border-gray-200/50'
            } whitespace-nowrap animate-fadeIn`}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Trading Assistant</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Navigate • Interact • Trade with AI</div>
              <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                position.includes('right') ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
              }`}>
                <div className={`w-0 h-0 ${
                  position.includes('right') 
                    ? 'border-l-4 border-r-0 border-l-' + (theme === 'dark' ? 'gray-800' : 'white')
                    : 'border-r-4 border-l-0 border-r-' + (theme === 'dark' ? 'gray-800' : 'white')
                } border-t-4 border-b-4 border-t-transparent border-b-transparent`}></div>
              </div>
            </div>
          )}

          {/* AI Assistant Button */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`${getSizeClasses()} rounded-full shadow-xl transition-all duration-300 transform ${
              isClicked ? 'scale-95' : isHovered ? 'scale-110' : 'scale-100'
            } ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
            } focus:outline-none focus:ring-4 focus:ring-blue-300 group relative overflow-hidden`}
            aria-label="Open AI Assistant"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            
            {/* Rotating outer ring */}
            <div className="absolute inset-1 border-2 border-white/30 rounded-full animate-spin-slow"></div>
            
            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <svg
                className={`text-white transition-all duration-500 ${
                  isHovered ? 'animate-bounce' : 'animate-pulse-slow'
                }`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* AI Brain Icon with rotating elements */}
                <g className="animate-spin-reverse">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
                  <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
                </g>
                
                {/* Central core */}
                <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-pulse"/>
                
                {/* Connecting lines */}
                <g stroke="currentColor" strokeWidth="1" opacity="0.8">
                  <line x1="12" y1="10" x2="12" y2="8" className="animate-pulse"/>
                  <line x1="10" y1="12" x2="8" y2="12" className="animate-pulse"/>
                  <line x1="14" y1="12" x2="16" y2="12" className="animate-pulse"/>
                  <line x1="12" y1="14" x2="12" y2="16" className="animate-pulse"/>
                </g>
                
                {/* Orbiting particles */}
                <g className="animate-spin">
                  <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.7"/>
                  <circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.7"/>
                  <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.7"/>
                  <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.7"/>
                </g>
              </svg>
            </div>

            {/* Pulse animation rings */}
            <div className={`absolute inset-0 rounded-full border-2 border-white opacity-0 ${
              isHovered ? 'animate-ping' : ''
            }`}></div>
            <div className={`absolute inset-2 rounded-full border border-white opacity-0 ${
              isHovered ? 'animate-ping animate-delay-100' : ''
            }`}></div>
          </button>
        </div>
      </div>

      {/* Enhanced AI Assistant Chat Window */}
      {isChatOpen && (
        <div 
          ref={chatWindowRef}
          className={`fixed ${
            chatMode === 'fullscreen' 
              ? 'inset-4' 
              : 'w-96 h-[520px] sm:w-[420px] sm:h-[580px] lg:w-[480px] lg:h-[640px]'
          } ${
            theme === 'dark' 
              ? 'bg-gray-900/95 border border-gray-700/50 backdrop-blur-lg' 
              : 'bg-white/95 border border-gray-200/50 backdrop-blur-lg'
          } rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform animate-slideUp z-50 ${
            isDragging ? 'cursor-grabbing' : ''
          }`}
          style={chatMode === 'assistant' ? {
            left: windowPosition.x || (position.includes('right') ? 'auto' : '24px'),
            right: windowPosition.x ? 'auto' : (position.includes('right') ? '24px' : 'auto'),
            top: windowPosition.y || (position.includes('bottom') ? 'auto' : '80px'),
            bottom: windowPosition.y ? 'auto' : (position.includes('bottom') ? '80px' : 'auto'),
            transform: windowPosition.x || windowPosition.y ? 'none' : undefined
          } : {}}
          onMouseDown={handleMouseDown}
        >
          {/* Enhanced Chat Header */}
          <div className={`drag-handle relative ${
            theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-r from-gray-50 to-white border-gray-200'
          } border-b cursor-grab active:cursor-grabbing select-none overflow-hidden`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            </div>
            
            <div className="relative p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* AI Avatar */}
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      AI Trading Assistant
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-green-500 font-medium">Online</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center space-x-2">
                    <span>Navigation • Trading • Analysis</span>
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    <span>Powered by AI</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {/* Fullscreen toggle */}
                <button
                  onClick={toggleFullscreen}
                  className={`p-2 rounded-lg hover:bg-gray-200 ${
                    theme === 'dark' ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                  } transition-all duration-200`}
                  title={chatMode === 'fullscreen' ? 'Exit fullscreen' : 'Fullscreen'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {chatMode === 'fullscreen' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 15v4.5M15 15h4.5M15 15l5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M9 15H4.5M9 15v4.5M9 15l-5.25 5.25" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7V4a1 1 0 011-1h3M4 17v3a1 1 0 001 1h3M20 7V4a1 1 0 00-1-1h-3M20 17v3a1 1 0 01-1 1h-3" />
                    )}
                  </svg>
                </button>
                
                {/* Reset position */}
                <button
                  onClick={() => setWindowPosition({ x: 0, y: 0 })}
                  className={`p-2 rounded-lg hover:bg-gray-200 ${
                    theme === 'dark' ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                  } transition-all duration-200`}
                  title="Reset position"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                
                {/* Close */}
                <button
                  onClick={closeChat}
                  className={`p-2 rounded-lg hover:bg-red-100 ${
                    theme === 'dark' ? 'hover:bg-red-900/30 text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-600'
                  } transition-all duration-200`}
                  title="Close chat"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Chat Content with Loading State */}
          <div className="relative w-full h-[calc(100%-80px)]">
            {/* Loading Overlay */}
            {isLoading && (
              <div className={`absolute inset-0 ${
                theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'
              } backdrop-blur-sm flex flex-col items-center justify-center z-10`}>
                <div className="relative">
                  {/* Loading animation */}
                  <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animate-reverse" style={{ animationDelay: '0.15s' }}></div>
                </div>
                <div className="mt-4 text-center">
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Initializing AI Assistant...
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Loading navigation capabilities
                  </div>
                </div>
                
                {/* Loading progress indicators */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Neural networks ready</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Navigation system online</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span>Trading analysis ready</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Enhanced iframe container */}
            <div className="w-full h-full relative overflow-hidden rounded-b-2xl">
              {/* Ambient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none"></div>
              
              {/* iframe with enhanced styling */}
              <iframe
                src={`${chatbotUrl}?navigation=enabled&theme=${theme}&mode=assistant`}
                className="w-full h-full border-0 pointer-events-auto bg-transparent"
                title="AI Trading Assistant"
                allow="camera; microphone; geolocation; clipboard-read; clipboard-write"
                loading="lazy"
                style={{
                  colorScheme: theme === 'dark' ? 'dark' : 'light'
                }}
              />
              
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-gray-900/5 dark:to-gray-100/5"></div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        
        .animate-reverse {
          animation-direction: reverse;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        
        /* Custom scrollbar for iframe content */
        iframe::-webkit-scrollbar {
          width: 6px;
        }
        
        iframe::-webkit-scrollbar-track {
          background: transparent;
        }
        
        iframe::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.3);
          border-radius: 3px;
        }
        
        iframe::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.5);
        }
      `}</style>
    </>
  )
}

export default AIAssistant
