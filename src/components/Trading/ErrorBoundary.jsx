import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Chart Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error}
          resetError={() => this.setState({ hasError: false, error: null })}
          theme={this.props.theme}
        />
      )
    }

    return this.props.children
  }
}

const ErrorFallback = ({ error, resetError, theme }) => (
  <div className={`h-full flex items-center justify-center ${
    theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
  }`}>
    <div className="text-center">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-xl font-semibold mb-2">Chart Error</h2>
      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {error?.message || 'Something went wrong with the chart'}
      </p>
      <button
        onClick={resetError}
        className={`px-4 py-2 rounded-lg ${
          theme === 'dark'
            ? 'bg-yellow-500 text-black hover:bg-yellow-600'
            : 'bg-yellow-500 text-white hover:bg-yellow-600'
        }`}
      >
        Try Again
      </button>
    </div>
  </div>
)

export default ErrorBoundary
