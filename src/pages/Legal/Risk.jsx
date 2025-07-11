import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Risk = () => {
  const { theme } = useTheme()
  const [acknowledgedRisks, setAcknowledgedRisks] = useState({
    volatility: false,
    liquidityRisk: false,
    technicalRisk: false,
    regulatoryRisk: false,
    leverageRisk: false,
    counterpartyRisk: false
  })

  const handleRiskAcknowledgment = (riskType) => {
    setAcknowledgedRisks(prev => ({
      ...prev,
      [riskType]: !prev[riskType]
    }))
  }

  const allRisksAcknowledged = Object.values(acknowledgedRisks).every(Boolean)

  const riskFactors = [
    {
      id: 'volatility',
      title: 'Price Volatility Risk',
      icon: 'fas fa-chart-line',
      description: 'Cryptocurrency prices can be extremely volatile and unpredictable.',
      details: [
        'Prices can fluctuate dramatically within short periods',
        'Market movements can result in significant losses',
        'Past performance does not guarantee future results',
        'External factors can cause sudden price changes'
      ],
      severity: 'high'
    },
    {
      id: 'liquidityRisk',
      title: 'Liquidity Risk',
      icon: 'fas fa-water',
      description: 'You may not be able to buy or sell assets when you want to.',
      details: [
        'Limited market depth for certain cryptocurrencies',
        'Trading halts during extreme market conditions',
        'Difficulty executing large orders without price impact',
        'Withdrawal restrictions during high demand periods'
      ],
      severity: 'medium'
    },
    {
      id: 'technicalRisk',
      title: 'Technical and Operational Risk',
      icon: 'fas fa-cog',
      description: 'Technology failures and operational issues can impact trading.',
      details: [
        'Platform downtime or system failures',
        'Cybersecurity threats and hacking attempts',
        'Software bugs or technical glitches',
        'Internet connectivity issues'
      ],
      severity: 'medium'
    },
    {
      id: 'regulatoryRisk',
      title: 'Regulatory and Legal Risk',
      icon: 'fas fa-gavel',
      description: 'Changing regulations can affect cryptocurrency trading and ownership.',
      details: [
        'Government restrictions or bans on cryptocurrencies',
        'Changes in tax laws and reporting requirements',
        'Compliance requirements in different jurisdictions',
        'Legal uncertainty around digital assets'
      ],
      severity: 'high'
    },
    {
      id: 'leverageRisk',
      title: 'Leverage and Margin Trading Risk',
      icon: 'fas fa-expand-arrows-alt',
      description: 'Using leverage amplifies both potential gains and losses.',
      details: [
        'Losses can exceed your initial investment',
        'Margin calls may force position closure',
        'Interest charges on borrowed funds',
        'Liquidation risk during volatile periods'
      ],
      severity: 'high'
    },
    {
      id: 'counterpartyRisk',
      title: 'Counterparty Risk',
      icon: 'fas fa-handshake',
      description: 'Risk associated with the financial stability of the trading platform.',
      details: [
        'Platform insolvency or bankruptcy',
        'Mismanagement of customer funds',
        'Lack of regulatory protection',
        'Third-party service provider failures'
      ],
      severity: 'medium'
    }
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return theme === 'dark' ? 'text-red-400 bg-red-900/20' : 'text-red-600 bg-red-50'
      case 'medium':
        return theme === 'dark' ? 'text-yellow-400 bg-yellow-900/20' : 'text-yellow-600 bg-yellow-50'
      case 'low':
        return theme === 'dark' ? 'text-green-400 bg-green-900/20' : 'text-green-600 bg-green-50'
      default:
        return theme === 'dark' ? 'text-gray-400 bg-gray-900/20' : 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`p-8 rounded-2xl shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h1 className={`text-4xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Risk Disclosure Statement</h1>
          
          <div className={`prose max-w-none ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p className="text-sm text-gray-500 mb-8">Last updated: January 15, 2024</p>
            
            {/* Warning Banner */}
            <div className={`p-6 rounded-lg border-l-4 mb-8 ${
              theme === 'dark'
                ? 'bg-red-900/20 border-red-500 text-red-200'
                : 'bg-red-50 border-red-500 text-red-700'
            }`}>
              <div className="flex items-start">
                <i className="fas fa-exclamation-triangle text-2xl mr-4 mt-1"></i>
                <div>
                  <h3 className="text-lg font-bold mb-2">Important Risk Warning</h3>
                  <p className="mb-2">
                    Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. 
                    You should carefully consider whether trading digital assets is appropriate for you in light of 
                    your financial condition and risk tolerance.
                  </p>
                  <p className="font-bold">
                    YOU SHOULD NEVER INVEST MORE THAN YOU CAN AFFORD TO LOSE.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>General Investment Risks</h2>
              <p className="mb-4">
                Trading cryptocurrencies carries inherent risks that all users must understand before engaging 
                in any trading activities. The cryptocurrency markets are highly volatile, largely unregulated, 
                and can be subject to significant price swings without notice.
              </p>
              <p className="mb-4">
                Digital assets are experimental and relatively new technologies. The regulatory environment is 
                evolving, and future regulations may adversely affect the value and utility of cryptocurrencies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Specific Risk Factors</h2>
              
              <div className="space-y-6">
                {riskFactors.map((risk) => (
                  <div key={risk.id} className={`p-6 rounded-lg border ${
                    theme === 'dark' ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                        }`}>
                          <i className={`${risk.icon} text-xl text-blue-600`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className={`text-lg font-semibold mr-3 ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {risk.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                              getSeverityColor(risk.severity)
                            }`}>
                              {risk.severity} Risk
                            </span>
                          </div>
                          <p className="mb-4">{risk.description}</p>
                        </div>
                      </div>
                      <label className="flex items-center cursor-pointer ml-4">
                        <input
                          type="checkbox"
                          checked={acknowledgedRisks[risk.id]}
                          onChange={() => handleRiskAcknowledgment(risk.id)}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className={`ml-2 text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Acknowledged
                        </span>
                      </label>
                    </div>
                    
                    <div>
                      <h4 className={`font-medium mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Key Risk Points:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {risk.details.map((detail, index) => (
                          <li key={index} className="text-sm">{detail}</li>
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
              }`}>Platform-Specific Risks</h2>
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs mt-2 mr-3 text-blue-600"></i>
                    <span><strong>Account Security:</strong> Your account security depends on maintaining secure login credentials and enabling two-factor authentication.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs mt-2 mr-3 text-blue-600"></i>
                    <span><strong>Market Data:</strong> Market data and pricing information may be delayed or inaccurate during periods of high volatility.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs mt-2 mr-3 text-blue-600"></i>
                    <span><strong>Order Execution:</strong> Orders may not be executed at desired prices due to market conditions, system limitations, or network congestion.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-circle text-xs mt-2 mr-3 text-blue-600"></i>
                    <span><strong>Fund Security:</strong> While we implement security measures, no system is completely immune to security breaches.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Risk Management Recommendations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'
                }`}>
                  <h4 className={`font-semibold mb-3 text-green-600`}>
                    <i className="fas fa-shield-alt mr-2"></i>
                    Best Practices
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Only invest what you can afford to lose</li>
                    <li>• Diversify your investment portfolio</li>
                    <li>• Use stop-loss orders to limit losses</li>
                    <li>• Regularly review and adjust your strategy</li>
                    <li>• Stay informed about market developments</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'
                }`}>
                  <h4 className={`font-semibold mb-3 text-blue-600`}>
                    <i className="fas fa-graduation-cap mr-2"></i>
                    Education
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Learn about blockchain technology</li>
                    <li>• Understand trading terminology</li>
                    <li>• Practice with small amounts first</li>
                    <li>• Read market analysis and research</li>
                    <li>• Consider professional advice</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Disclaimer</h2>
              <div className={`p-6 rounded-lg border ${
                theme === 'dark' ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'
              }`}>
                <p className="mb-4">
                  This risk disclosure statement does not disclose all of the risks associated with 
                  cryptocurrency trading. You should carefully consider whether such trading is suitable 
                  for you in light of your circumstances and financial resources.
                </p>
                <p className="mb-4">
                  FinSocial does not provide investment advice, and nothing on this platform should be 
                  considered as such. All trading decisions are made at your own discretion and risk.
                </p>
                <p className="font-bold">
                  By using our platform, you acknowledge that you have read, understood, and accepted 
                  all the risks outlined in this disclosure statement.
                </p>
              </div>
            </section>

            {/* Risk Acknowledgment Section */}
            <section className="mb-8">
              <div className={`p-6 rounded-lg border-2 ${
                allRisksAcknowledged
                  ? theme === 'dark'
                    ? 'border-green-500 bg-green-900/20'
                    : 'border-green-500 bg-green-50'
                  : theme === 'dark'
                    ? 'border-yellow-500 bg-yellow-900/20'
                    : 'border-yellow-500 bg-yellow-50'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  allRisksAcknowledged ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  <i className={`fas ${allRisksAcknowledged ? 'fa-check-circle' : 'fa-exclamation-triangle'} mr-2`}></i>
                  Risk Acknowledgment Status
                </h3>
                <p className="mb-4">
                  {allRisksAcknowledged
                    ? 'You have acknowledged all major risk factors. Remember to trade responsibly.'
                    : 'Please review and acknowledge all risk factors above to proceed with trading.'
                  }
                </p>
                <div className="text-sm">
                  <strong>Progress:</strong> {Object.values(acknowledgedRisks).filter(Boolean).length} of {Object.keys(acknowledgedRisks).length} risks acknowledged
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Contact Information</h2>
              <p className="mb-4">
                If you have questions about the risks associated with cryptocurrency trading, please contact:
              </p>
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <p className="mb-2"><strong>Email:</strong> risk@finsocial.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-RISK</p>
                <p><strong>Address:</strong> 123 Crypto Street, Digital City, DC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Risk
