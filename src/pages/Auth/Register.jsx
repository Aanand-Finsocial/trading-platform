import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'
import Footer from '../../components/Footer/Footer'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
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
    
    const { firstName, lastName, email, password, confirmPassword, terms } = formData

    // Required field validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password || !confirmPassword) {
      setMessage({ text: 'Please fill in all required fields', type: 'error' })
      return
    }

    // Name validation - only letters, no spaces, hyphens, or apostrophes
    const nameRegex = /^[a-zA-Z]+$/
    if (!nameRegex.test(firstName.trim())) {
      setMessage({ text: 'First name can only contain letters without spaces', type: 'error' })
      return
    }

    if (!nameRegex.test(lastName.trim())) {
      setMessage({ text: 'Last name can only contain letters without spaces', type: 'error' })
      return
    }

    if (firstName.trim().length < 2) {
      setMessage({ text: 'First name must be at least 2 characters long', type: 'error' })
      return
    }

    if (lastName.trim().length < 2) {
      setMessage({ text: 'Last name must be at least 2 characters long', type: 'error' })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' })
      return
    }

    // Password validation
    if (password.length < 8) {
      setMessage({ text: 'Password must be at least 8 characters long', type: 'error' })
      return
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setMessage({ text: 'Password must contain at least one uppercase letter, one lowercase letter, and one number', type: 'error' })
      return
    }

    if (password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match', type: 'error' })
      return
    }

    if (!terms) {
      setMessage({ text: 'Please accept the terms and conditions', type: 'error' })
      return
    }

    setLoading(true)
    setMessage({ text: 'Creating account...', type: 'info' })

    // Simulate API call
    setTimeout(() => {
      const userData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase()
      }
      login(userData)
      setMessage({ text: 'Account created successfully! Redirecting...', type: 'success' })
      setTimeout(() => {
        navigate('/')
      }, 2000)
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
              }`}>Create Account</h2>
              <p className={`mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Join FinSocial and start trading today</p>
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
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={`block text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    minLength="2"
                    maxLength="50"
                    pattern="[a-zA-Z]+$"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                      theme === 'dark'
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={`block text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    minLength="2"
                    maxLength="50"
                    pattern="[a-zA-Z]+$"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                      theme === 'dark'
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${
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
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className={`block text-sm font-medium mb-1 ${
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
                    minLength="8"
                    maxLength="128"
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                      theme === 'dark'
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="At least 8 characters"
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
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Must contain uppercase, lowercase, and number
                </p>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="8"
                  maxLength="128"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Confirm your password"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className={`ml-2 text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I agree to the{' '}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </Link>
                  <span className="text-red-500"> *</span>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in
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

export default Register
