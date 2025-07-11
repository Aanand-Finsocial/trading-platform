import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'
import Footer from '../../components/Footer/Footer'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)
  
  const { theme } = useTheme()
  const { login } = useUser()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear previous messages
    setMessage({ text: '', type: '' })
    
    // Validation
    if (!formData.email.trim() || !formData.password) {
      setMessage({ text: 'Please fill in all required fields', type: 'error' })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' })
      return
    }

    setLoading(true)
    setMessage({ text: 'Logging in...', type: 'info' })

    // Simulate API call
    setTimeout(() => {
      const userData = {
        email: formData.email.trim().toLowerCase(),
        firstName: 'John',
        lastName: 'Doe'
      }
      login(userData)
      setMessage({ text: 'Login successful! Redirecting...', type: 'success' })
      setTimeout(() => {
        navigate('/')
      }, 1500)
    }, 1000)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
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
              <h2 className={`text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Welcome Back</h2>
              <p className={`mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Sign in to your FinSocial account</p>
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
                  maxLength="100"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="password" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                    maxLength="128"
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                      theme === 'dark'
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-gray-200'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    name="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className={`ml-2 text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
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

export default Login
