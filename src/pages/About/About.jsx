import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const About = () => {
  const { theme } = useTheme()

  

  const milestones = [
    { year: '2019', event: 'FinSocial founded with vision to democratize crypto trading' },
    { year: '2020', event: 'Launched beta platform with 10,000 early adopters' },
    { year: '2021', event: 'Reached 1 million users and $10B in trading volume' },
    { year: '2022', event: 'Expanded to 50+ countries and launched mobile app' },
    { year: '2023', event: 'Introduced advanced trading features and institutional services' },
    { year: '2024', event: 'Serving 150M+ users with $76B daily trading volume' }
  ]

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FinSocial</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We're building the future of cryptocurrency trading with cutting-edge technology, 
            unparalleled security, and user-centric design.
          </p>
        </div>

        {/* Mission Section */}
        <div className={`p-8 rounded-2xl shadow-lg mb-16 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Our Mission</h2>
              <p className={`text-lg mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                To make cryptocurrency trading accessible, secure, and profitable for everyone. 
                We believe in empowering individuals with the tools and knowledge they need to 
                participate in the digital economy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Democratize access to financial markets
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Provide institutional-grade security
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    Foster innovation in blockchain technology
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className={`w-64 h-64 mx-auto rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <i className={`fas fa-chart-line text-6xl ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}></i>
              </div>
            </div>
          </div>
        </div>

       

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-600 mr-8"></div>
                <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={`p-8 rounded-2xl shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Security First</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We prioritize the security of user funds and data above all else
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-users text-4xl text-blue-600 mb-4"></i>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>User-Centric</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Every decision we make is guided by what's best for our users
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-rocket text-4xl text-blue-600 mb-4"></i>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Innovation</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We continuously push the boundaries of what's possible in crypto
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
