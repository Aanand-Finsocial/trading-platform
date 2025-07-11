import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Cookies = () => {
  const { theme } = useTheme()
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  })

  const handleCookiePreferenceChange = (type) => {
    if (type === 'necessary') return // Necessary cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const savePreferences = () => {
    // In a real app, this would save to localStorage or send to server
    alert('Cookie preferences saved successfully!')
  }

  const acceptAllCookies = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    })
    alert('All cookies accepted!')
  }

  const cookieTypes = [
    {
      type: 'necessary',
      title: 'Necessary Cookies',
      description: 'These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.',
      examples: ['User authentication', 'Security tokens', 'Shopping cart functionality', 'Form submissions'],
      canDisable: false
    },
    {
      type: 'functional',
      title: 'Functional Cookies',
      description: 'These cookies enhance functionality and personalization, such as language preferences and user interface customizations.',
      examples: ['Language settings', 'Theme preferences', 'Recent searches', 'Customized layouts'],
      canDisable: true
    },
    {
      type: 'analytics',
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'Click tracking', 'User journey analysis', 'Performance metrics'],
      canDisable: true
    },
    {
      type: 'marketing',
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
      examples: ['Targeted advertising', 'Social media integration', 'Campaign tracking', 'Remarketing'],
      canDisable: true
    }
  ]

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`p-8 rounded-2xl shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h1 className={`text-4xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Cookie Policy</h1>
          
          <div className={`prose max-w-none ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p className="text-sm text-gray-500 mb-8">Last updated: January 15, 2024</p>
            
            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>What are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="mb-4">
                FinSocial uses cookies to enhance your browsing experience, analyze site traffic, personalize content, 
                and serve targeted advertisements. This policy explains how we use cookies and similar technologies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                {cookieTypes.map((cookie) => (
                  <div key={cookie.type} className={`p-6 rounded-lg border ${
                    theme === 'dark' ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{cookie.title}</h3>
                        <p className="mb-4">{cookie.description}</p>
                      </div>
                      <div className="ml-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[cookie.type]}
                            onChange={() => handleCookiePreferenceChange(cookie.type)}
                            disabled={!cookie.canDisable}
                            className={`w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${
                              !cookie.canDisable ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                          />
                          <span className={`ml-2 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {cookie.canDisable ? 'Optional' : 'Required'}
                          </span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className={`font-medium mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Examples:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {cookie.examples.map((example, index) => (
                          <li key={index} className="text-sm">{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party service providers who may set cookies on your device on our behalf. 
                These cookies allow third parties to deliver services and advertisements relevant to your interests.
              </p>
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Third-party services we use:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Google Analytics - For website analytics and performance monitoring</li>
                  <li>Google Ads - For targeted advertising and remarketing</li>
                  <li>Facebook Pixel - For social media advertising and analytics</li>
                  <li>Hotjar - For user behavior analysis and heatmaps</li>
                  <li>Intercom - For customer support and live chat functionality</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Managing Your Cookie Preferences</h2>
              <p className="mb-4">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                may impact your user experience and some functionality may no longer work as intended.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Browser Settings</h4>
                  <p className="text-sm mb-2">
                    Most web browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Clear cookies when closing browser</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Cookie Preferences (Current Session)</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={savePreferences}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Save Current Preferences
                    </button>
                    <button
                      onClick={acceptAllCookies}
                      className={`px-6 py-2 border-2 font-medium rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Accept All Cookies
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Cookie Retention</h2>
              <p className="mb-4">
                Different types of cookies are stored for different periods:
              </p>
              <div className={`overflow-x-auto ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              } rounded-lg p-4`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      <th className={`text-left py-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Cookie Type</th>
                      <th className={`text-left py-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                    }`}>
                      <td className="py-2">Session Cookies</td>
                      <td className="py-2">Until browser is closed</td>
                    </tr>
                    <tr className={`border-b ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                    }`}>
                      <td className="py-2">Persistent Cookies</td>
                      <td className="py-2">Up to 2 years</td>
                    </tr>
                    <tr className={`border-b ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                    }`}>
                      <td className="py-2">Authentication Cookies</td>
                      <td className="py-2">30 days</td>
                    </tr>
                    <tr>
                      <td className="py-2">Preference Cookies</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, 
                regulatory, or operational reasons. We will notify you of any material changes by posting the updated 
                policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <p className="mb-2"><strong>Email:</strong> privacy@finsocial.com</p>
                <p className="mb-2"><strong>Address:</strong> 123 Crypto Street, Digital City, DC 12345</p>
                <p><strong>Data Protection Officer:</strong> dpo@finsocial.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cookies
