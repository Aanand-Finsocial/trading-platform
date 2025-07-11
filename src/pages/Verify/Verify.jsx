import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'

const Verify = () => {
  const { theme } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [showAadhaarOTP, setShowAadhaarOTP] = useState(false)
  const [showPanOTP, setShowPanOTP] = useState(false)
  const [aadhaarVerified, setAadhaarVerified] = useState(false)
  const [panVerified, setPanVerified] = useState(false)
  const [otpTimer, setOtpTimer] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: 'IN', // Default to India
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'IN',
    
    // Document Details
    aadhaarNumber: '',
    panNumber: '',
    aadhaarOtp: '',
    panOtp: '',
    
    // Additional Info
    sourceOfFunds: '',
    occupation: '',
    annualIncome: '',
    tradingExperience: '',
    agreeToTerms: false
  })

  const steps = [
    { number: 1, title: 'Personal Information', icon: 'fas fa-user' },
    { number: 2, title: 'Aadhaar Verification', icon: 'fas fa-id-card' },
    { number: 3, title: 'PAN Verification', icon: 'fas fa-credit-card' },
    { number: 4, title: 'Additional Information', icon: 'fas fa-clipboard-list' },
    { number: 5, title: 'Review & Submit', icon: 'fas fa-check-circle' }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const formatAadhaarNumber = (value) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '')
    // Add spaces after every 4 digits
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ')
    return formatted
  }

  const handleAadhaarChange = (e) => {
    const formatted = formatAadhaarNumber(e.target.value)
    if (formatted.replace(/\s/g, '').length <= 12) {
      setFormData(prev => ({
        ...prev,
        aadhaarNumber: formatted
      }))
    }
  }

  const handlePanChange = (e) => {
    const value = e.target.value.toUpperCase()
    if (value.length <= 10) {
      setFormData(prev => ({
        ...prev,
        panNumber: value
      }))
    }
  }

  const validateAadhaar = (aadhaar) => {
    const cleaned = aadhaar.replace(/\s/g, '')
    return cleaned.length === 12 && /^\d{12}$/.test(cleaned)
  }

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    return panRegex.test(pan)
  }

  const sendAadhaarOTP = () => {
    if (!validateAadhaar(formData.aadhaarNumber)) {
      setErrorMessage('Please enter a valid 12-digit Aadhaar number')
      return
    }
    
    setErrorMessage('')
    setShowAadhaarOTP(true)
    setOtpTimer(60)
    setSuccessMessage(`OTP sent to mobile number registered with Aadhaar ending in ***${formData.aadhaarNumber.slice(-4)}`)
    
    // Simulate OTP timer
    const timer = setInterval(() => {
      setOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const verifyAadhaarOTP = () => {
    if (formData.aadhaarOtp.length !== 6) {
      setErrorMessage('Please enter a valid 6-digit OTP')
      return
    }
    
    // Simulate OTP verification
    if (formData.aadhaarOtp === '123456') { // Demo OTP
      setAadhaarVerified(true)
      setShowAadhaarOTP(false)
      setErrorMessage('')
      setSuccessMessage('Aadhaar verified successfully!')
      setTimeout(() => {
        setCurrentStep(3)
        setSuccessMessage('')
      }, 2000)
    } else {
      setErrorMessage('Invalid OTP. Please try again. (Use 123456 for demo)')
    }
  }

  const sendPanOTP = () => {
    if (!validatePAN(formData.panNumber)) {
      setErrorMessage('Please enter a valid PAN number')
      return
    }
    
    setErrorMessage('')
    setShowPanOTP(true)
    setOtpTimer(60)
    setSuccessMessage(`OTP sent to mobile number registered with PAN ${formData.panNumber}`)
    
    // Simulate OTP timer
    const timer = setInterval(() => {
      setOtpTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const verifyPanOTP = () => {
    if (formData.panOtp.length !== 6) {
      setErrorMessage('Please enter a valid 6-digit OTP')
      return
    }
    
    // Simulate OTP verification
    if (formData.panOtp === '654321') { // Demo OTP
      setPanVerified(true)
      setShowPanOTP(false)
      setErrorMessage('')
      setSuccessMessage('PAN verified successfully!')
      setTimeout(() => {
        setCurrentStep(4)
        setSuccessMessage('')
      }, 2000)
    } else {
      setErrorMessage('Invalid OTP. Please try again. (Use 654321 for demo)')
    }
  }

  const nextStep = () => {
    setErrorMessage('')
    
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.phoneNumber) {
        setErrorMessage('Please fill all required fields')
        return
      }
      setCurrentStep(2)
    } else if (currentStep === 2) {
      if (!aadhaarVerified) {
        setErrorMessage('Please complete Aadhaar verification first')
        return
      }
      setCurrentStep(3)
    } else if (currentStep === 3) {
      if (!panVerified) {
        setErrorMessage('Please complete PAN verification first')
        return
      }
      setCurrentStep(4)
    } else if (currentStep === 4) {
      if (!formData.sourceOfFunds || !formData.occupation) {
        setErrorMessage('Please fill all required fields')
        return
      }
      setCurrentStep(5)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    if (!formData.agreeToTerms) {
      setErrorMessage('Please agree to the terms and conditions')
      return
    }
    
    setErrorMessage('')
    console.log('Verification form submitted:', formData)
    setIsSubmitted(true)
    setSuccessMessage('Verification completed successfully! A confirmation email has been sent to your registered email address.')
  }

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
            Account Verification (India)
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Complete your KYC verification with Aadhaar and PAN
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-exclamation-triangle text-red-400 text-xl"></i>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    {errorMessage}
                  </p>
                </div>
                <div className="ml-auto pl-3">
                  <button
                    onClick={() => setErrorMessage('')}
                    className="text-red-400 hover:text-red-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 max-w-4xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    {successMessage}
                  </p>
                </div>
                <div className="ml-auto pl-3">
                  <button
                    onClick={() => setSuccessMessage('')}
                    className="text-green-400 hover:text-green-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submission Success */}
        {isSubmitted && (
          <div className="mb-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-envelope text-blue-400 text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Verification Complete!
                  </h3>
                  <p className="text-sm text-blue-700 mb-3">
                    Your KYC verification has been successfully submitted. A confirmation email has been sent to your registered email address.
                  </p>
                  <p className="text-sm text-blue-600">
                    Your account will be fully activated within 24 hours.
                  </p>
                  <Link
                    to="/"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Return to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Steps */}
        <div className="mb-8">
          {/* Desktop Progress Steps */}
           <div className="hidden md:flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : theme === 'dark'
                      ? 'border-gray-600 text-gray-400'
                      : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <i className="fas fa-check"></i>
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    currentStep > step.number
                      ? 'bg-blue-600'
                      : theme === 'dark'
                        ? 'bg-gray-600'
                        : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div> 

          {/* Mobile Progress Steps */}
          <div className="md:hidden mb-4">
            <div className="flex items-center justify-center mb-2">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 mr-3 ${
                currentStep >= steps[currentStep - 1]?.number
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : theme === 'dark'
                    ? 'border-gray-600 text-gray-400'
                    : 'border-gray-300 text-gray-400'
              }`}>
                <span className="text-sm">{currentStep}</span>
              </div>
              <div className="text-center">
                <div className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Step {currentStep} of {steps.length}
                </div>
                <div className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {steps[currentStep - 1]?.title}
                </div>
              </div>
            </div>
            <div className={`w-full bg-gray-200 rounded-full h-2 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Desktop Step Labels */}
          <div className="hidden md:flex justify-between text-xs">
            {steps.map((step) => (
              <div key={step.number} className={`text-center ${
                currentStep >= step.number
                  ? 'text-blue-600 font-medium'
                  : theme === 'dark'
                    ? 'text-gray-400'
                    : 'text-gray-500'
              }`}>
                <div className="flex items-center justify-center mb-1">
                  <i className={`${step.icon} mr-1`}></i>
                </div>
                {step.title}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8`}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Nationality *
                  </label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  >
                    <option value="IN">Indian</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  >
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Aadhaar Verification */}
          {currentStep === 2 && (
            <div>
              <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
                Aadhaar Verification
              </h2>
              
              {!showAadhaarOTP ? (
                <div className="space-y-6">
                  <div className={`border-l-4 border-blue-500 ${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'} p-4 rounded`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-info-circle text-blue-500"></i>
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>
                          Enter your 12-digit Aadhaar number. An OTP will be sent to your registered mobile number.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Aadhaar Number *
                    </label>
                    <input
                      type="text"
                      value={formData.aadhaarNumber}
                      onChange={handleAadhaarChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-base md:text-lg`}
                      placeholder="1234 5678 9012"
                      maxLength="14"
                    />
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Format: XXXX XXXX XXXX
                    </p>
                  </div>

                  <button
                    onClick={sendAadhaarOTP}
                    disabled={!validateAadhaar(formData.aadhaarNumber)}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                      validateAadhaar(formData.aadhaarNumber)
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Send OTP to Registered Mobile
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`border-l-4 border-green-500 ${theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'} p-4 rounded`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-mobile-alt text-green-500"></i>
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm ${theme === 'dark' ? 'text-green-200' : 'text-green-700'}`}>
                          OTP sent to mobile number ending with ***{formData.aadhaarNumber.slice(-4)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Enter 6-digit OTP *
                    </label>
                    <input
                      type="text"
                      name="aadhaarOtp"
                      value={formData.aadhaarOtp}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-base md:text-lg text-center`}
                      placeholder="123456"
                      maxLength="6"
                    />
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-center`}>
                      {otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : 'Use 123456 for demo'}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={verifyAadhaarOTP}
                      disabled={formData.aadhaarOtp.length !== 6}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                        formData.aadhaarOtp.length === 6
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Verify OTP
                    </button>
                    
                    {otpTimer === 0 && (
                      <button
                        onClick={sendAadhaarOTP}
                        className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>
              )}

              {aadhaarVerified && (
                <div className={`mt-6 border-l-4 border-green-500 ${theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'} p-4 rounded`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-green-500"></i>
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-green-200' : 'text-green-700'}`}>
                        Aadhaar verified successfully!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: PAN Verification */}
          {currentStep === 3 && (
            <div>
              <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
                PAN Verification
              </h2>
              
              {!showPanOTP ? (
                <div className="space-y-6">
                  <div className={`border-l-4 border-blue-500 ${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'} p-4 rounded`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-info-circle text-blue-500"></i>
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>
                          Enter your 10-character PAN number. An OTP will be sent to your registered mobile number.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      PAN Number *
                    </label>
                    <input
                      type="text"
                      value={formData.panNumber}
                      onChange={handlePanChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-base md:text-lg`}
                      placeholder="ABCDE1234F"
                      maxLength="10"
                    />
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Format: 5 letters + 4 numbers + 1 letter
                    </p>
                  </div>

                  <button
                    onClick={sendPanOTP}
                    disabled={!validatePAN(formData.panNumber)}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                      validatePAN(formData.panNumber)
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Send OTP to Registered Mobile
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`border-l-4 border-green-500 ${theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'} p-4 rounded`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-mobile-alt text-green-500"></i>
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm ${theme === 'dark' ? 'text-green-200' : 'text-green-700'}`}>
                          OTP sent to mobile number registered with PAN {formData.panNumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Enter 6-digit OTP *
                    </label>
                    <input
                      type="text"
                      name="panOtp"
                      value={formData.panOtp}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-base md:text-lg text-center`}
                      placeholder="654321"
                      maxLength="6"
                    />
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-center`}>
                      {otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : 'Use 654321 for demo'}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={verifyPanOTP}
                      disabled={formData.panOtp.length !== 6}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                        formData.panOtp.length === 6
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Verify OTP
                    </button>
                    
                    {otpTimer === 0 && (
                      <button
                        onClick={sendPanOTP}
                        className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>
              )}

              {panVerified && (
                <div className={`mt-6 border-l-4 border-green-500 ${theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'} p-4 rounded`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-green-500"></i>
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-green-200' : 'text-green-700'}`}>
                        PAN verified successfully!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Additional Information */}
          {currentStep === 4 && (
            <div>
              <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
                Additional Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Source of Funds *
                  </label>
                  <select
                    name="sourceOfFunds"
                    value={formData.sourceOfFunds}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  >
                    <option value="">Select Source</option>
                    <option value="salary">Salary/Employment</option>
                    <option value="business">Business Income</option>
                    <option value="investment">Investment Returns</option>
                    <option value="savings">Personal Savings</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Occupation *
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Your current occupation"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Annual Income *
                  </label>
                  <select
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  >
                    <option value="">Select Range</option>
                    <option value="0-3L">₹0 - ₹3 Lakhs</option>
                    <option value="3L-5L">₹3 - ₹5 Lakhs</option>
                    <option value="5L-10L">₹5 - ₹10 Lakhs</option>
                    <option value="10L-25L">₹10 - ₹25 Lakhs</option>
                    <option value="25L+">₹25 Lakhs+</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Trading Experience *
                  </label>
                  <select
                    name="tradingExperience"
                    value={formData.tradingExperience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3-5 years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1 flex-shrink-0"
                  />
                  <span className={`ml-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-700 underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div>
              <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
                Review & Submit
              </h2>
              <div className="space-y-6">
                <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-3`}>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Name:</span>
                      <span className={`ml-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div>
                      <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Date of Birth:</span>
                      <span className={`ml-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {formData.dateOfBirth}
                      </span>
                    </div>
                    <div>
                      <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Phone:</span>
                      <span className={`ml-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {formData.phoneNumber}
                      </span>
                    </div>
                    <div>
                      <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Nationality:</span>
                      <span className={`ml-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {formData.nationality === 'IN' ? 'Indian' : formData.nationality}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-3`}>
                    Verification Status
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Aadhaar Verified: {formData.aadhaarNumber}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        PAN Verified: {formData.panNumber}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`border-l-4 border-blue-500 ${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'} p-4 rounded`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-info-circle text-blue-500"></i>
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>
                        <strong>Important:</strong> Your KYC verification is complete. A confirmation email will be sent to your registered email address. Your account will be fully activated within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3 sm:space-y-0">
            <button
              onClick={prevStep}
              disabled={currentStep === 1 || isSubmitted}
              className={`order-2 sm:order-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1 || isSubmitted
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : theme === 'dark'
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 order-1 sm:order-2">
              {!isSubmitted && (
                <Link
                  to="/"
                  className={`text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    theme === 'dark'
                      ? 'border border-gray-600 text-gray-300 hover:bg-gray-700'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Cancel
                </Link>
              )}
              
              {currentStep < 5 && !isSubmitted ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Next Step
                </button>
              ) : !isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms}
                  className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                    formData.agreeToTerms
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Complete Verification
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verify
