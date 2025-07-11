import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: ''
  })
  const [message, setMessage] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  
  const { theme } = useTheme()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear previous messages
    setMessage({ text: '', type: '' })
    
    // Validation
    if (!formData.email) {
      setMessage({ text: 'Please enter your email address', type: 'error' })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' })
      return
    }

    setLoading(true)
    setMessage({ text: 'Sending reset link...', type: 'info' })

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setEmailSent(true)
      setMessage({ 
        text: 'Password reset link has been sent to your email address. Please check your inbox and follow the instructions.', 
        type: 'success' 
      })
    }, 2000)
  }

  const handleResend = () => {
    setLoading(true)
    setMessage({ text: 'Resending reset link...', type: 'info' })
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setMessage({ 
        text: 'Password reset link has been resent to your email address.', 
        type: 'success' 
      })
    }, 1500)
  }

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className={`p-8 rounded-2xl shadow-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="text-center mb-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
              }`}>
                <i className={`fas fa-key text-2xl ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}></i>
              </div>
              <h2 className={`text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Forgot Password?</h2>
              <p className={`mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {!emailSent 
                  ? "Don't worry, we'll send you reset instructions" 
                  : "Check your email for reset instructions"
                }
              </p>
            </div>
            
            {message.text && (
              <div className={`p-4 rounded-lg mb-6 ${
                message.type === 'error' 
                  ? theme === 'dark'
                    ? 'bg-red-900 text-red-300 border border-red-700'
                    : 'bg-red-50 text-red-700 border border-red-200'
                  : message.type === 'success' 
                    ? theme === 'dark'
                      ? 'bg-green-900 text-green-300 border border-green-700'
                      : 'bg-green-50 text-green-700 border border-green-200'
                    : theme === 'dark'
                      ? 'bg-blue-900 text-blue-300 border border-blue-700'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {message.text}
              </div>
            )}
            
            {!emailSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                      theme === 'dark'
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                  <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    We'll send a password reset link to this email
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-green-900' : 'bg-green-100'
                  }`}>
                    <i className={`fas fa-envelope text-3xl ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}></i>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Email Sent!</h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    We've sent password reset instructions to{' '}
                    <span className="font-medium">{formData.email}</span>
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={handleResend}
                    disabled={loading}
                    className={`w-full py-3 px-4 border-2 font-semibold rounded-lg transition-colors duration-200 ${
                      theme === 'dark'
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50'
                    }`}
                  >
                    {loading ? 'Resending...' : 'Resend Email'}
                  </button>
                  
                  <div className={`text-center text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <p>Didn't receive the email? Check your spam folder or try again.</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <Link 
                to="/login" 
                className={`inline-flex items-center text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Sign In
              </Link>
            </div>
            
            <div className="mt-4 text-center">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ForgotPassword
