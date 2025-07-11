import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Terms = () => {
  const { theme } = useTheme()

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: [
        'Welcome to FinSocial, a cryptocurrency trading platform operated by FinSocial Technologies Ltd. ("we," "us," or "our"). These Terms of Service ("Terms") govern your use of our website, mobile application, and related services (collectively, the "Service").',
        'By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.',
        'We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through our platform. Continued use of the Service after such modifications constitutes acceptance of the updated Terms.'
      ]
    },
    {
      id: 'eligibility',
      title: '2. Eligibility and Account Registration',
      content: [
        'To use our Service, you must be at least 18 years old and legally capable of entering into binding contracts.',
        'You must provide accurate, complete, and current information during registration and keep your account information updated.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.',
        'One person may only register for one account. Multiple accounts by the same person are prohibited.'
      ]
    },
    {
      id: 'services',
      title: '3. Trading Services',
      content: [
        'FinSocial provides a platform for buying, selling, and trading cryptocurrencies. We act as an intermediary between buyers and sellers.',
        'All trading activities are subject to market conditions, liquidity, and technical limitations.',
        'We do not guarantee the execution of any trade or the availability of any particular cryptocurrency.',
        'Trading fees apply to all transactions and are clearly displayed before order execution.',
        'You acknowledge that cryptocurrency trading involves substantial risk and may result in significant losses.'
      ]
    },
    {
      id: 'risks',
      title: '4. Risk Disclosure',
      content: [
        'Cryptocurrency trading carries inherent risks, including but not limited to:',
        '• High volatility and price fluctuations',
        '• Potential total loss of invested capital',
        '• Regulatory changes that may affect cryptocurrency legality',
        '• Technical risks including system failures or cyber attacks',
        '• Liquidity risks in certain markets',
        'You should only invest funds that you can afford to lose and seek independent financial advice if necessary.'
      ]
    },
    {
      id: 'prohibited',
      title: '5. Prohibited Activities',
      content: [
        'You agree not to engage in any of the following prohibited activities:',
        '• Using the Service for any illegal or unauthorized purpose',
        '• Attempting to manipulate markets or engage in wash trading',
        '• Using automated trading systems without prior written consent',
        '• Accessing another user\'s account without permission',
        '• Transmitting viruses, malware, or other harmful code',
        '• Violating any applicable laws or regulations',
        'Violation of these terms may result in immediate account suspension or termination.'
      ]
    },
    {
      id: 'compliance',
      title: '6. Regulatory Compliance',
      content: [
        'We comply with applicable laws and regulations in the jurisdictions where we operate.',
        'You are responsible for complying with all local laws and regulations regarding cryptocurrency trading.',
        'We may be required to report certain transactions to regulatory authorities.',
        'Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures apply to all accounts.',
        'We reserve the right to request additional documentation to verify your identity at any time.'
      ]
    },
    {
      id: 'fees',
      title: '7. Fees and Charges',
      content: [
        'Current fee schedules are available on our website and may be updated from time to time.',
        'Trading fees are charged based on your trading volume and account tier.',
        'Deposit and withdrawal fees may apply depending on the payment method used.',
        'All fees are clearly disclosed before transaction confirmation.',
        'We reserve the right to modify our fee structure with appropriate notice to users.'
      ]
    },
    {
      id: 'liability',
      title: '8. Limitation of Liability',
      content: [
        'Our liability is limited to the maximum extent permitted by law.',
        'We are not liable for any indirect, incidental, special, or consequential damages.',
        'Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.',
        'We do not guarantee uninterrupted or error-free service.',
        'You agree to indemnify us against any claims arising from your use of the Service.'
      ]
    },
    {
      id: 'termination',
      title: '9. Account Termination',
      content: [
        'Either party may terminate this agreement at any time with or without cause.',
        'Upon termination, you must immediately cease using the Service.',
        'We will provide reasonable notice before terminating your account unless immediate termination is necessary.',
        'You may withdraw your funds (subject to applicable fees) before account closure.',
        'Certain provisions of these Terms will survive termination.'
      ]
    },
    {
      id: 'governing',
      title: '10. Governing Law and Dispute Resolution',
      content: [
        'These Terms are governed by the laws of [Jurisdiction].',
        'Any disputes will be resolved through binding arbitration.',
        'You waive your right to participate in class action lawsuits.',
        'The arbitration will be conducted in English.',
        'If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect.'
      ]
    }
  ]

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Main Content */}
      <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className={`text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Terms & Conditions</h1>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Last updated: December 2024</p>
          </div>

          {/* Table of Contents */}
          <div className={`rounded-lg p-6 mb-8 ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } border`}>
            <h2 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Table of Contents</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`text-blue-600 hover:text-blue-500 transition-colors ${
                      theme === 'dark' ? 'hover:text-blue-400' : ''
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={`rounded-lg p-6 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } border`}
              >
                <h2 className={`text-2xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-base leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      } ${paragraph.startsWith('•') ? 'ml-4' : ''}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Information */}
          <div className={`rounded-lg p-6 mt-8 ${
            theme === 'dark' ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-50 border-blue-200'
          } border`}>
            <h2 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Questions?</h2>
            <p className={`text-base mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className={`space-y-2 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p>Email: legal@finsocial.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Trading Street, Financial District, NY 10001</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/privacy"
              className={`text-blue-600 hover:text-blue-500 font-medium transition-colors mb-4 sm:mb-0 ${
                theme === 'dark' ? 'hover:text-blue-400' : ''
              }`}
            >
              View Privacy Policy →
            </Link>
            <Link
              to="/"
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Terms
