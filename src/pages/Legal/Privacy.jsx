import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Privacy = () => {
  const { theme } = useTheme()

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: [
        'At FinSocial Technologies Ltd. ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cryptocurrency trading platform.',
        'This policy applies to all users of our website, mobile application, and related services. By using our services, you consent to the data practices described in this policy.',
        'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.'
      ]
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content: [
        'We collect several types of information from and about users of our service:',
        '• Personal Identification Information: Name, email address, phone number, date of birth, and government-issued ID information',
        '• Financial Information: Bank account details, payment card information, transaction history, and trading activity',
        '• Technical Information: IP address, browser type, device information, operating system, and usage data',
        '• Communication Data: Records of your communications with our customer support team',
        '• Location Data: General location information based on your IP address',
        'We collect this information when you register an account, verify your identity, make transactions, or interact with our platform.'
      ]
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      content: [
        'We use the information we collect for various purposes, including:',
        '• Providing and maintaining our trading services',
        '• Processing transactions and managing your account',
        '• Verifying your identity and preventing fraud',
        '• Complying with legal and regulatory requirements',
        '• Communicating with you about your account and our services',
        '• Improving our platform and developing new features',
        '• Providing customer support and responding to inquiries',
        '• Sending marketing communications (with your consent)',
        '• Detecting and preventing security threats'
      ]
    },
    {
      id: 'information-sharing',
      title: '4. Information Sharing and Disclosure',
      content: [
        'We may share your personal information in the following circumstances:',
        '• With Service Providers: Third-party companies that help us operate our platform (payment processors, identity verification services, cloud hosting providers)',
        '• For Legal Compliance: When required by law, regulation, or legal process',
        '• With Regulators: Financial authorities and regulatory bodies as required',
        '• For Business Transfers: In connection with a merger, acquisition, or sale of assets',
        '• With Your Consent: When you explicitly agree to share information',
        '• For Safety and Security: To protect against fraud, abuse, or security threats',
        'We do not sell your personal information to third parties for marketing purposes.'
      ]
    },
    {
      id: 'data-security',
      title: '5. Data Security',
      content: [
        'We implement robust security measures to protect your personal information:',
        '• Encryption: All sensitive data is encrypted in transit and at rest using industry-standard protocols',
        '• Access Controls: Strict access controls limit who can view your information',
        '• Regular Audits: We conduct regular security audits and assessments',
        '• Secure Infrastructure: Our servers are hosted in secure, certified data centers',
        '• Employee Training: Our staff receives regular training on data protection',
        '• Multi-Factor Authentication: Available to secure your account access',
        'While we strive to protect your information, no method of transmission over the internet is 100% secure.'
      ]
    },
    {
      id: 'data-retention',
      title: '6. Data Retention',
      content: [
        'We retain your personal information for as long as necessary to:',
        '• Provide our services to you',
        '• Comply with legal and regulatory obligations',
        '• Resolve disputes and enforce agreements',
        '• Prevent fraud and abuse',
        'Typically, we retain account information for at least 5 years after account closure to meet regulatory requirements.',
        'You may request deletion of your personal information, subject to legal and regulatory requirements.'
      ]
    },
    {
      id: 'your-rights',
      title: '7. Your Privacy Rights',
      content: [
        'Depending on your location, you may have the following rights:',
        '• Access: Request a copy of the personal information we hold about you',
        '• Correction: Request correction of inaccurate or incomplete information',
        '• Deletion: Request deletion of your personal information (subject to legal requirements)',
        '• Portability: Request transfer of your data to another service provider',
        '• Restriction: Request limitation of processing in certain circumstances',
        '• Objection: Object to processing based on legitimate interests',
        'To exercise these rights, please contact us using the information provided below.'
      ]
    },
    {
      id: 'cookies',
      title: '8. Cookies and Tracking Technologies',
      content: [
        'We use cookies and similar tracking technologies to enhance your experience:',
        '• Essential Cookies: Required for basic platform functionality',
        '• Analytics Cookies: Help us understand how users interact with our platform',
        '• Preference Cookies: Remember your settings and preferences',
        '• Security Cookies: Help detect fraudulent activity and enhance security',
        'You can control cookie settings through your browser preferences. However, disabling certain cookies may affect platform functionality.',
        'We also use web beacons and similar technologies for analytics and communication tracking.'
      ]
    },
    {
      id: 'international',
      title: '9. International Data Transfers',
      content: [
        'Your information may be transferred to and processed in countries other than your own.',
        'We ensure appropriate safeguards are in place for international transfers:',
        '• Standard Contractual Clauses approved by relevant authorities',
        '• Adequacy decisions by competent data protection authorities',
        '• Other legally approved transfer mechanisms',
        'We take steps to ensure your data receives the same level of protection regardless of where it is processed.'
      ]
    },
    {
      id: 'children',
      title: '10. Children\'s Privacy',
      content: [
        'Our services are not intended for children under 18 years of age.',
        'We do not knowingly collect personal information from children under 18.',
        'If we become aware that we have collected information from a child under 18, we will take steps to delete such information.',
        'Parents or guardians who believe their child has provided information to us should contact us immediately.'
      ]
    },
    {
      id: 'changes',
      title: '11. Changes to This Policy',
      content: [
        'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.',
        'We will notify you of material changes by:',
        '• Posting the updated policy on our website',
        '• Sending email notifications to registered users',
        '• Displaying prominent notices on our platform',
        'Your continued use of our services after changes become effective constitutes acceptance of the updated policy.'
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
            }`}>Privacy Policy</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-blue-600 hover:text-blue-500 transition-colors block ${
                    theme === 'dark' ? 'hover:text-blue-400' : ''
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
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
            theme === 'dark' ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'
          } border`}>
            <h2 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Contact Us About Privacy</h2>
            <p className={`text-base mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              If you have questions about this Privacy Policy or how we handle your personal information, please contact our Data Protection Officer:
            </p>
            <div className={`space-y-2 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p>Email: privacy@finsocial.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: Data Protection Officer, FinSocial Technologies Ltd.</p>
              <p>123 Trading Street, Financial District, NY 10001</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/terms"
              className={`text-blue-600 hover:text-blue-500 font-medium transition-colors mb-4 sm:mb-0 ${
                theme === 'dark' ? 'hover:text-blue-400' : ''
              }`}
            >
              View Terms & Conditions →
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

export default Privacy
