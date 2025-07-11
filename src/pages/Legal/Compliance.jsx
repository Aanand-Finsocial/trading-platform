import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Compliance = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('overview')

  const complianceFrameworks = [
    {
      name: 'Know Your Customer (KYC)',
      description: 'Identity verification and customer due diligence procedures',
      status: 'Implemented',
      details: [
        'Multi-level identity verification process',
        'Document verification using AI and manual review',
        'Ongoing monitoring of customer activities',
        'Enhanced due diligence for high-risk customers'
      ]
    },
    {
      name: 'Anti-Money Laundering (AML)',
      description: 'Comprehensive AML program to prevent financial crimes',
      status: 'Implemented',
      details: [
        'Transaction monitoring and suspicious activity reporting',
        'Sanctions screening against global watchlists',
        'Customer risk assessment and categorization',
        'Regular AML training for all employees'
      ]
    },
    {
      name: 'Counter-Terrorism Financing (CTF)',
      description: 'Measures to prevent terrorism financing through our platform',
      status: 'Implemented',
      details: [
        'Real-time screening against terrorism watchlists',
        'Enhanced monitoring of high-risk jurisdictions',
        'Cooperation with law enforcement agencies',
        'Regular updates to screening databases'
      ]
    },
    {
      name: 'Data Protection (GDPR/CCPA)',
      description: 'Compliance with global data protection regulations',
      status: 'Implemented',
      details: [
        'Data minimization and purpose limitation',
        'User consent management',
        'Right to access, rectify, and delete personal data',
        'Data breach notification procedures'
      ]
    },
    {
      name: 'Market Integrity',
      description: 'Measures to ensure fair and orderly markets',
      status: 'Implemented',
      details: [
        'Market manipulation detection systems',
        'Insider trading prevention measures',
        'Trade surveillance and monitoring',
        'Best execution policies'
      ]
    },
    {
      name: 'Cybersecurity Framework',
      description: 'Comprehensive cybersecurity and information security program',
      status: 'Implemented',
      details: [
        'Multi-layered security architecture',
        'Regular security audits and penetration testing',
        'Employee security awareness training',
        'Incident response and recovery procedures'
      ]
    }
  ]

  const licenses = [
    {
      jurisdiction: 'United States',
      regulator: 'FinCEN',
      license: 'Money Services Business (MSB)',
      status: 'Active',
      number: 'MSB-2021-001234',
      validUntil: '2026-12-31'
    },
    {
      jurisdiction: 'European Union',
      regulator: 'Various National Authorities',
      license: 'Crypto Asset Service Provider',
      status: 'Active',
      number: 'EU-CASP-2022-5678',
      validUntil: '2027-06-30'
    },
    {
      jurisdiction: 'United Kingdom',
      regulator: 'FCA',
      license: 'Cryptoasset Registration',
      status: 'Active',
      number: 'UK-CR-2023-9012',
      validUntil: '2028-03-15'
    },
    {
      jurisdiction: 'Singapore',
      regulator: 'MAS',
      license: 'Digital Payment Token Service',
      status: 'Active',
      number: 'SG-DPT-2023-3456',
      validUntil: '2026-09-20'
    }
  ]

  const auditReports = [
    {
      type: 'SOC 2 Type II',
      period: '2023',
      auditor: 'KPMG',
      status: 'Clean Opinion',
      date: '2024-01-15',
      scope: 'Security, Availability, and Confidentiality'
    },
    {
      type: 'ISO 27001',
      period: '2023',
      auditor: 'BSI Group',
      status: 'Certified',
      date: '2023-11-20',
      scope: 'Information Security Management System'
    },
    {
      type: 'PCI DSS Level 1',
      period: '2023',
      auditor: 'Trustwave',
      status: 'Compliant',
      date: '2023-12-05',
      scope: 'Payment Card Data Security'
    }
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'implemented':
      case 'compliant':
      case 'certified':
      case 'clean opinion':
        return theme === 'dark' ? 'text-green-400 bg-green-900/20' : 'text-green-600 bg-green-50'
      case 'pending':
      case 'in progress':
        return theme === 'dark' ? 'text-yellow-400 bg-yellow-900/20' : 'text-yellow-600 bg-yellow-50'
      case 'expired':
      case 'non-compliant':
        return theme === 'dark' ? 'text-red-400 bg-red-900/20' : 'text-red-600 bg-red-50'
      default:
        return theme === 'dark' ? 'text-gray-400 bg-gray-900/20' : 'text-gray-600 bg-gray-50'
    }
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'fas fa-chart-pie' },
    { id: 'frameworks', name: 'Compliance Frameworks', icon: 'fas fa-shield-alt' },
    { id: 'licenses', name: 'Licenses & Registrations', icon: 'fas fa-certificate' },
    { id: 'audits', name: 'Audit Reports', icon: 'fas fa-file-alt' },
    { id: 'reporting', name: 'Reporting', icon: 'fas fa-clipboard-list' }
  ]

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`p-8 rounded-2xl shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h1 className={`text-4xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Regulatory Compliance</h1>
          
          <div className={`prose max-w-none ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } mb-8`}>
            <p className="text-lg">
              FinSocial is committed to maintaining the highest standards of regulatory compliance 
              and operates under strict adherence to applicable laws and regulations in all jurisdictions 
              where we provide services.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-600 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors mr-4 mb-2 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : theme === 'dark'
                      ? 'border-transparent text-gray-400 hover:text-gray-200'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className={`p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-globe text-2xl text-blue-600 mr-3"></i>
                    <h3 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Global Compliance</h3>
                  </div>
                  <p className="text-sm">
                    We operate in compliance with regulations across multiple jurisdictions including 
                    the US, EU, UK, and Asia-Pacific regions.
                  </p>
                </div>

                <div className={`p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-user-shield text-2xl text-green-600 mr-3"></i>
                    <h3 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Customer Protection</h3>
                  </div>
                  <p className="text-sm">
                    Comprehensive KYC/AML procedures ensure customer protection and prevent 
                    financial crimes on our platform.
                  </p>
                </div>

                <div className={`p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-lock text-2xl text-purple-600 mr-3"></i>
                    <h3 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Data Security</h3>
                  </div>
                  <p className="text-sm">
                    Industry-leading security measures and compliance with data protection 
                    regulations including GDPR and CCPA.
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-blue-900/20 border border-blue-700' : 'bg-blue-50 border border-blue-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-blue-200' : 'text-blue-800'
                }`}>
                  <i className="fas fa-info-circle mr-2"></i>
                  Compliance Commitment
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  FinSocial maintains a dedicated compliance team that continuously monitors regulatory 
                  developments and ensures our platform meets or exceeds all applicable requirements. 
                  We work closely with regulators and industry bodies to promote best practices in 
                  cryptocurrency trading and digital asset management.
                </p>
              </div>
            </div>
          )}

          {/* Compliance Frameworks Tab */}
          {activeTab === 'frameworks' && (
            <div className="space-y-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className={`p-6 rounded-lg border ${
                  theme === 'dark' ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{framework.name}</h3>
                      <p className="mb-4">{framework.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      getStatusColor(framework.status)
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Implementation Details:</h4>
                    <ul className="space-y-1">
                      {framework.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Licenses Tab */}
          {activeTab === 'licenses' && (
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className={`w-full rounded-lg overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <thead className={`${
                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                    <tr>
                      <th className={`px-4 py-3 text-left text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Jurisdiction</th>
                      <th className={`px-4 py-3 text-left text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Regulator</th>
                      <th className={`px-4 py-3 text-left text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>License Type</th>
                      <th className={`px-4 py-3 text-left text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Status</th>
                      <th className={`px-4 py-3 text-left text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Valid Until</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {licenses.map((license, index) => (
                      <tr key={index}>
                        <td className={`px-4 py-3 text-sm font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {license.jurisdiction}
                        </td>
                        <td className={`px-4 py-3 text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {license.regulator}
                        </td>
                        <td className={`px-4 py-3 text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {license.license}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            getStatusColor(license.status)
                          }`}>
                            {license.status}
                          </span>
                        </td>
                        <td className={`px-4 py-3 text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {license.validUntil}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-green-200' : 'text-green-800'
                }`}>
                  <i className="fas fa-certificate mr-2"></i>
                  License Verification
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-green-300' : 'text-green-700'
                }`}>
                  All licenses and registrations can be verified directly with the respective regulatory 
                  authorities. License numbers and documentation are available upon request for 
                  verification purposes.
                </p>
              </div>
            </div>
          )}

          {/* Audit Reports Tab */}
          {activeTab === 'audits' && (
            <div className="space-y-6">
              {auditReports.map((audit, index) => (
                <div key={index} className={`p-6 rounded-lg border ${
                  theme === 'dark' ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{audit.type}</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className={`font-medium ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>Auditor:</span> {audit.auditor}
                        </div>
                        <div>
                          <span className={`font-medium ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>Period:</span> {audit.period}
                        </div>
                        <div>
                          <span className={`font-medium ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>Date:</span> {audit.date}
                        </div>
                        <div>
                          <span className={`font-medium ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>Scope:</span> {audit.scope}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      getStatusColor(audit.status)
                    }`}>
                      {audit.status}
                    </span>
                  </div>
                </div>
              ))}

              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-blue-900/20 border border-blue-700' : 'bg-blue-50 border border-blue-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-blue-200' : 'text-blue-800'
                }`}>
                  <i className="fas fa-download mr-2"></i>
                  Audit Report Access
                </h3>
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  Executive summaries of our audit reports are available for review. Full reports may 
                  be provided to institutional clients and regulatory authorities upon request.
                </p>
                <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Request Audit Reports
                </button>
              </div>
            </div>
          )}

          {/* Reporting Tab */}
          {activeTab === 'reporting' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <i className="fas fa-file-upload mr-2 text-blue-600"></i>
                    Regulatory Reporting
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Suspicious Activity Reports (SARs)</li>
                    <li>• Currency Transaction Reports (CTRs)</li>
                    <li>• Large Transaction Reports</li>
                    <li>• Cross-border reporting</li>
                    <li>• Quarterly compliance reports</li>
                  </ul>
                </div>

                <div className={`p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <i className="fas fa-chart-bar mr-2 text-green-600"></i>
                    Transparency Reports
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Annual transparency report</li>
                    <li>• Security incident disclosures</li>
                    <li>• Data breach notifications</li>
                    <li>• Regulatory enforcement actions</li>
                    <li>• Policy updates and changes</li>
                  </ul>
                </div>
              </div>

              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <i className="fas fa-phone mr-2 text-purple-600"></i>
                  Compliance Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>General Compliance Inquiries</h4>
                    <p className="text-sm mb-1"><strong>Email:</strong> compliance@finsocial.com</p>
                    <p className="text-sm"><strong>Phone:</strong> +1 (555) 123-COMP</p>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Regulatory Affairs</h4>
                    <p className="text-sm mb-1"><strong>Email:</strong> regulatory@finsocial.com</p>
                    <p className="text-sm"><strong>Phone:</strong> +1 (555) 123-REGS</p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-yellow-900/20 border border-yellow-700' : 'bg-yellow-50 border border-yellow-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-yellow-200' : 'text-yellow-800'
                }`}>
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  Whistleblower Program
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'
                }`}>
                  FinSocial maintains a confidential whistleblower program for reporting potential 
                  compliance violations or unethical behavior. Reports can be made anonymously through 
                  our secure reporting portal or by contacting our independent compliance hotline at 
                  1-800-ETHICS.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Compliance
