import React from 'react'
import { useTheme, themeColors } from '../../contexts/ThemeContext'

const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  const { theme } = useTheme()
  const colors = themeColors(theme)
  
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className={`relative ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-[#1a1f2e] border-gray-700'} rounded-xl border shadow-2xl m-4 w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-4 sm:p-6 border-b ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'}`}>
          <h3 className={`text-lg sm:text-xl font-semibold ${colors.textColor}`}>{title}</h3>
          <button
            onClick={onClose}
            className={`p-2 ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'} rounded-lg transition-colors duration-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
