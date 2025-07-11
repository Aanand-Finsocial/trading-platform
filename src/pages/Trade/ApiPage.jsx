"use client"
import { useState } from "react"
import { useTheme, themeColors } from "../../contexts/ThemeContext"
import Footer from "../../components/Footer/Footer"
import Modal from "../../components/Modal/Modal"

const ApiPage = () => {
  const { theme } = useTheme()
  const colors = themeColors(theme)
  const [activeModal, setActiveModal] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const closeModal = () => setActiveModal(null)
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "How to create API key?",
      answer: "To create an API key, follow these steps:\n\n1. Log into your Finsocial account and navigate to Account Settings\n2. Click on 'API Management' in the security section\n3. Click 'Create API Key' and enter a label for identification\n4. Complete security verification (2FA/Email verification)\n5. Set permissions for your API key (Read Info, Enable Trading, Enable Withdrawals)\n6. Add IP restrictions for enhanced security (recommended)\n7. Save your API Key and Secret Key securely - the secret will only be shown once\n\nImportant: Never share your API credentials and enable IP restrictions for production use."
    },
    {
      question: "Is there an API Documentation?",
      answer: "Yes, we provide comprehensive API documentation that includes:\n\n• Complete REST API reference with all endpoints\n• WebSocket API documentation for real-time data\n• Code examples in multiple programming languages (Python, JavaScript, Java, C#, PHP)\n• Interactive API explorer for testing endpoints\n• Rate limiting information and best practices\n• Authentication and security guidelines\n• Error codes and troubleshooting guide\n• SDKs and libraries for popular languages\n\nYou can access the documentation at docs.finsocial.com/api or through the 'API Docs' link in your account dashboard."
    },
    {
      question: "Does Finsocial provide Testing environment?",
      answer: "Yes, Finsocial provides a comprehensive testing environment:\n\n• **Testnet Environment**: Complete sandbox that mirrors production\n• **Test Funds**: Virtual assets for testing without risk\n• **All Features Available**: Trade, deposit, withdraw with test funds\n• **Real-time Data**: Live market data feeds for realistic testing\n• **Same API Structure**: Identical endpoints and responses as production\n• **No Rate Limits**: More relaxed limits for development testing\n• **Reset Functionality**: Ability to reset test account balances\n\nTestnet URL: testnet.finsocial.com\nAPI Base URL: https://testnet-api.finsocial.com\n\nPerfect for developing and testing your trading strategies before going live."
    },
    {
      question: "Can I use other languages(such as Python or Java) with Finsocial API?",
      answer: "Absolutely! Finsocial API supports all major programming languages:\n\n**Official SDKs:**\n• Python (finsocial-python)\n• JavaScript/Node.js (finsocial-js)\n• Java (finsocial-java)\n• C# (.NET)\n• PHP (finsocial-php)\n• Go (finsocial-go)\n\n**Community Libraries:**\n• Ruby, Rust, Swift, Kotlin, and more\n\n**HTTP REST API:**\nSince our API uses standard HTTP REST protocols, you can use any language that supports HTTP requests:\n• Python (requests, httpx)\n• Java (OkHttp, HttpClient)\n• C++ (cURL, Beast)\n• Rust (reqwest)\n• And many others\n\n**WebSocket Support:**\nReal-time data streaming available in all languages with WebSocket support.\n\nCheck our GitHub organization for official SDKs and community contributions."
    },
    {
      question: "Where can I find more information?",
      answer: "You can find additional information through multiple channels:\n\n**Documentation & Resources:**\n• API Documentation: docs.finsocial.com/api\n• Developer Portal: developers.finsocial.com\n• GitHub Repositories: github.com/finsocial\n• Blog & Tutorials: blog.finsocial.com/developers\n\n**Community Support:**\n• Developer Discord: discord.gg/finsocial-dev\n• Stack Overflow: Tag questions with 'finsocial-api'\n• Reddit: r/FinsocialDev\n• Telegram: @FinsocialDevelopers\n\n**Direct Support:**\n• Help Center: help.finsocial.com\n• Support Tickets: Submit through your account dashboard\n• Live Chat: Available 24/7 for VIP users\n• Email: api-support@finsocial.com\n\n**Stay Updated:**\n• API Changelog: docs.finsocial.com/changelog\n• Twitter: @FinsocialAPI\n• Newsletter: Subscribe for API updates and new features"
    }
  ]

  const modalContent = {
    marketData: {
      title: "Market Data API",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Access real-time and historical market data through our comprehensive API.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Features:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Real-time price feeds</li>
              <li>• Historical OHLCV data</li>
              <li>• Order book snapshots</li>
              <li>• Trade history</li>
              <li>• 24h ticker statistics</li>
            </ul>
          </div>
          <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )
    },
    websocket: {
      title: "WebSocket Streams",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Real-time data streaming with low-latency WebSocket connections.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Available Streams:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Price ticker streams</li>
              <li>• Order book updates</li>
              <li>• Trade streams</li>
              <li>• User data streams</li>
              <li>• Market depth streams</li>
            </ul>
          </div>
          <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white py-2 rounded-lg">
            Connect WebSocket
          </button>
        </div>
      )
    },
    wallet: {
      title: "Wallet Management",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Secure wallet management with multi-signature support.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Features</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Multi-currency support</li>
                <li>• Cold storage integration</li>
                <li>• Transaction history</li>
              </ul>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Security</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 2FA authentication</li>
                <li>• IP whitelisting</li>
                <li>• Withdrawal limits</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    simpleEarn: {
      title: "Simple Earn",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Earn passive income on your crypto holdings with flexible and fixed savings products.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Earning Options:</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">BTC Flexible Savings</span>
                <span className="text-green-400">2.5% APY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">ETH Fixed Savings (30d)</span>
                <span className="text-green-400">4.2% APY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">USDT Flexible Savings</span>
                <span className="text-green-400">3.8% APY</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    mining: {
      title: "Mining Pool",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Join our mining pool for stable and profitable mining rewards.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Supported Coins</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Bitcoin (BTC)</li>
                <li>• Ethereum (ETH)</li>
                <li>• Litecoin (LTC)</li>
              </ul>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Low fees (1%)</li>
                <li>• Daily payouts</li>
                <li>• Real-time monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    c2c: {
      title: "C2C Trading",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Trade directly with other users in a secure peer-to-peer environment.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Features:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Escrow protection</li>
              <li>• Multiple payment methods</li>
              <li>• 24/7 customer support</li>
              <li>• User verification system</li>
            </ul>
          </div>
        </div>
      )
    },
    fiat: {
      title: "Fiat Gateway",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Easy fiat to crypto conversion with multiple payment options.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Supported Currencies</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>USD, EUR, GBP</div>
                <div>JPY, AUD, CAD</div>
              </div>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Payment Methods</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>Bank Transfer</div>
                <div>Credit/Debit Card</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    ethStaking: {
      title: "ETH 2.0 Staking",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Stake your ETH and earn rewards while supporting the Ethereum network.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">Current APR</span>
              <span className="text-green-400 text-xl font-bold">5.2%</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Minimum Stake</span>
                <span className="text-white">0.1 ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Lock Period</span>
                <span className="text-white">Flexible</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    cryptoLoan: {
      title: "Crypto Loan",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Get instant loans using your crypto as collateral without selling your assets.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Loan Details:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Interest Rate</span>
                <span className="text-green-400">From 7.95% APR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">LTV Ratio</span>
                <span className="text-white">Up to 65%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Loan Term</span>
                <span className="text-white">7-180 days</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    subAccount: {
      title: "Sub Account Management",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Manage multiple trading accounts under one master account for better organization.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Benefits:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Separate trading strategies</li>
              <li>• Risk isolation</li>
              <li>• Consolidated reporting</li>
              <li>• API key management</li>
              <li>• Transfer between accounts</li>
            </ul>
          </div>
        </div>
      )
    },
    taxReport: {
      title: "Tax Report API",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Generate comprehensive tax reports for all your trading activities.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Report Features:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Trade history export</li>
              <li>• Capital gains/losses calculation</li>
              <li>• Multiple jurisdiction support</li>
              <li>• CSV and PDF formats</li>
              <li>• Real-time data sync</li>
            </ul>
          </div>
        </div>
      )
    },
    liquidity: {
      title: "Liquidity Solutions",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Access deep liquidity pools for institutional-grade trading.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Features:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Deep order books</li>
              <li>• Low slippage</li>
              <li>• Competitive spreads</li>
              <li>• High-frequency trading support</li>
            </ul>
          </div>
        </div>
      )
    },
    fiatGateway: {
      title: "Fiat Gateway Integration",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Seamless fiat onramp and offramp solutions for your platform.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Integration Options:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• White-label solutions</li>
              <li>• API integration</li>
              <li>• KYC/AML compliance</li>
              <li>• Multi-currency support</li>
            </ul>
          </div>
        </div>
      )
    },
    linkSubAccount: {
      title: "Link Sub Account",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Connect and manage sub-accounts within the Link Program ecosystem.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Management Features:</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Centralized control</li>
              <li>• Commission tracking</li>
              <li>• Performance analytics</li>
              <li>• Risk management tools</li>
            </ul>
          </div>
        </div>
      )
    },
    rebates: {
      title: "Trading Rebates",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Earn rebates on your trading volume and reduce overall trading costs.</p>
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Rebate Tiers:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Bronze (0-100 BTC)</span>
                <span className="text-green-400">5% rebate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Silver (100-500 BTC)</span>
                <span className="text-green-400">10% rebate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Gold (500+ BTC)</span>
                <span className="text-green-400">15% rebate</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    learnMore: {
      title: "VIP & Institutional Services",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Discover our comprehensive VIP and institutional trading solutions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">VIP Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Reduced trading fees</li>
                <li>• Priority customer support</li>
                <li>• Higher withdrawal limits</li>
              </ul>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Institutional</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Dedicated account manager</li>
                <li>• Custom trading solutions</li>
                <li>• OTC trading desk</li>
              </ul>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white py-2 rounded-lg">
            Contact Sales Team
          </button>
        </div>
      )
    },
    faq: {
      title: "Frequently Asked Questions",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">Find answers to common questions about our API and services.</p>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-[#0d1117] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left hover:bg-[#161b22] transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold">{item.question}</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4">
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
         
        </div>
      )
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-[#0f1419]'}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden py-12 sm:py-16 lg:py-20 ${theme === 'light' ? 'bg-white' : ''}`}>
        {/* Background abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 h-32 sm:h-48 ${theme === 'light' ? 'bg-gradient-to-br from-blue-200/40 to-transparent' : 'bg-gradient-to-br from-[#1e3a8a]/20 to-transparent'} rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 ${theme === 'light' ? 'bg-gradient-to-br from-purple-200/30 to-transparent' : 'bg-gradient-to-br from-[#1e40af]/10 to-transparent'} rounded-full blur-3xl`}></div>
          <div className={`absolute top-1/2 left-1/4 sm:left-1/3 w-4 sm:w-6 h-4 sm:h-6 ${theme === 'light' ? 'bg-blue-400/40' : 'bg-[#3b82f6]/30'} rotate-45`}></div>
          <div className={`absolute top-1/4 right-1/4 w-3 sm:w-4 h-3 sm:h-4 ${theme === 'light' ? 'bg-purple-400/30' : 'bg-[#3b82f6]/20'} rounded-full`}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${colors.textColor} mb-4`}>Finsocial API</h1>
              <p className={`text-lg sm:text-xl lg:text-2xl ${colors.smTextColor} font-medium`}>
                Unlimited Opportunities
                <br />
                with One Key.
              </p>
            </div>

            {/* Right Content - Code Example */}
            <div className="lg:w-1/2 w-full">
              <div className={`${theme === 'light' ? 'bg-gray-100 border-gray-300' : 'bg-[#0d1117] border-gray-700'} rounded-lg overflow-hidden shadow-xl border`}>
                {/* Code editor window dots */}
                <div className={`flex items-center px-3 sm:px-4 py-2 ${theme === 'light' ? 'bg-gray-200 border-gray-300' : 'bg-[#161b22] border-gray-700'} border-b`}>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#f87171] mr-1.5 sm:mr-2"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#fbbf24] mr-1.5 sm:mr-2"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#34d399]"></div>
                </div>

                {/* Code content */}
                <div className={`p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}>
                  <pre className="leading-relaxed">
                    <span className="text-gray-500">1 </span>
                    <span className="text-[#c678dd]">from</span> finsocial.futures{" "}
                    <span className="text-[#c678dd]">import</span> <span className="text-[#61afef]">Futures</span>
                    {"\n"}
                    <span className="text-gray-500">2 </span>
                    {"\n"}
                    <span className="text-gray-500">3 </span>client = <span className="text-[#61afef]">Futures</span>()
                    {"\n"}
                    <span className="text-gray-500">4 </span>print(client.time())
                    {"\n"}
                    <span className="text-gray-500">5 </span>
                    {"\n"}
                    <span className="text-gray-500">6 </span>client = <span className="text-[#61afef]">Futures</span>
                    (key=<span className="text-[#98c379]">"api_key"</span>, secret=
                    {"\n"}
                    <span className="text-[#98c379]">"api_secret"</span>)
                    {"\n"}
                    <span className="text-gray-500">7 </span>
                    {"\n"}
                    <span className="text-gray-500">8 </span>
                    <span className="text-[#5c6370]"># Get account information</span>
                    {"\n"}
                    <span className="text-gray-500">9 </span>print(client.account())
                    {"\n"}
                    <span className="text-gray-500">10 </span>
                    {"\n"}
                    <span className="text-gray-500">11 </span>
                    <span className="text-[#5c6370]"># Post a new order</span>
                    {"\n"}
                    <span className="text-gray-500">12 </span>params = {"{"}
                    {"\n"}
                    <span className="text-gray-500">13 </span> <span className="text-[#98c379]">'symbol'</span>:{" "}
                    <span className="text-[#98c379]">'BTCUSDT'</span>,
                    {"\n"}
                    <span className="text-gray-500">14 </span>{" "}
                    <span className="text-[#98c379]">'side'</span>: <span className="text-[#98c379]">'SELL'</span>,
                    {"\n"}
                    <span className="text-gray-500">15 </span> <span className="text-[#98c379]">'type'</span>:{" "}
                    <span className="text-[#98c379]">'LIMIT'</span>,
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Connectivity Section */}
      <div className={`py-12 sm:py-16 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#0a0f14]'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-5 w-4 sm:w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${colors.textColor}`}>Trading Connectivity</h2>
            </div>
            <p className={`text-base sm:text-lg ${colors.smTextColor} max-w-4xl px-4`}>
              We offer access to Spot, Margin, Futures, and Options API trading for over 300 digital and fiat
              currencies. API trading provides a testing environment, API documentation, and sample code in multiple
              programming languages. Suitable for all your trading needs.
            </p>
          </div>

          {/* API Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            <div className={`${theme === 'light' ? 'bg-gradient-to-br from-blue-100/80 to-blue-50/40 border-blue-200' : 'bg-gradient-to-br from-[#1e3a8a]/20 to-[#1e3a8a]/5 border-[#3b82f6]/20'} p-4 sm:p-6 rounded-xl border`}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 sm:h-6 w-5 sm:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold ${colors.textColor} mb-2`}>Secure API Access</h3>
              <p className={`text-sm sm:text-base ${colors.smTextColor}`}>
                Enterprise-grade security with API keys, secret keys, and IP whitelisting.
              </p>
            </div>

            <div className={`${theme === 'light' ? 'bg-gradient-to-br from-blue-100/80 to-blue-50/40 border-blue-200' : 'bg-gradient-to-br from-[#1e3a8a]/20 to-[#1e3a8a]/5 border-[#3b82f6]/20'} p-4 sm:p-6 rounded-xl border`}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 sm:h-6 w-5 sm:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold ${colors.textColor} mb-2`}>High Performance</h3>
              <p className={`text-sm sm:text-base ${colors.smTextColor}`}>
                Low-latency connectivity with high throughput for algorithmic trading strategies.
              </p>
            </div>

            <div className={`${theme === 'light' ? 'bg-gradient-to-br from-blue-100/80 to-blue-50/40 border-blue-200' : 'bg-gradient-to-br from-[#1e3a8a]/20 to-[#1e3a8a]/5 border-[#3b82f6]/20'} p-4 sm:p-6 rounded-xl border sm:col-span-2 lg:col-span-1`}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 sm:h-6 w-5 sm:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold ${colors.textColor} mb-2`}>Comprehensive Documentation</h3>
              <p className={`text-sm sm:text-base ${colors.smTextColor}`}>
                Extensive API documentation with examples in Python, Java, Node.js and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Data Section */}
      <div className={`py-12 sm:py-16 ${theme === 'light' ? 'bg-white' : 'bg-[#0f1419]'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-5 w-4 sm:w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${colors.textColor}`}>Market Data</h2>
            </div>
            <p className={`text-base sm:text-lg ${colors.smTextColor} max-w-4xl mb-6 sm:mb-8 px-4`}>
              Market Data at your fingertips with Finsocial API and Websocket Services
            </p>

            {/* Market Data Options */}
            <div className={`${theme === 'light' ? 'bg-gray-50 border-purple-200' : 'bg-[#1a1f2e] border-[#8b5cf6]/20'} rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl w-full border`}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button 
                  onClick={() => setActiveModal('marketData')}
                  className="flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] hover:from-[#7c3aed] hover:to-[#9333ea] rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">Market Data</span>
                </button>
                <button 
                  onClick={() => setActiveModal('websocket')}
                  className={`flex items-center justify-center px-4 sm:px-6 py-3 ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 border-purple-300 hover:border-purple-400' : 'bg-[#2d3748] hover:bg-[#374151] border-[#8b5cf6]/30 hover:border-[#8b5cf6]/60'} border rounded-lg ${colors.textColor} font-medium transition-all duration-300 transform hover:scale-105`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-[#8b5cf6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">Websocket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment & Services Section */}
      <div className={`py-12 sm:py-16 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#0a0f14]'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-5 w-4 sm:w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${colors.textColor}`}>Investment & Services</h2>
            </div>
            <p className={`text-base sm:text-lg ${colors.smTextColor} max-w-4xl mb-6 sm:mb-8 px-4`}>
              Manage and grow your digital wealth all in one place.
            </p>

            {/* Services Grid */}
            <div className={`${theme === 'light' ? 'bg-gray-50 border-purple-200' : 'bg-[#1a1f2e] border-[#8b5cf6]/20'} rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl w-full border`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                { [
                  {
                    name: "Wallet",
                    modalKey: "wallet",
                    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                  },
                  {
                    name: "Simple Earn",
                    modalKey: "simpleEarn",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                  },
                  {
                    name: "Mining",
                    modalKey: "mining",
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                  },
                  {
                    name: "C2C",
                    modalKey: "c2c",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 009.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  },
                  {
                    name: "Fiat",
                    modalKey: "fiat",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                  },
                  {
                    name: "ETH Staking",
                    modalKey: "ethStaking",
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  },
                ].map((service, index) => (
                  <button
                    key={service.name}
                    onClick={() => setActiveModal(service.modalKey)}
                    className={`flex flex-col sm:flex-row items-center justify-center px-3 sm:px-4 py-3 ${theme === 'light' ? 'bg-gray-200 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 border-gray-300 hover:border-purple-300' : 'bg-[#2d3748] hover:bg-gradient-to-r hover:from-[#8b5cf6]/20 hover:to-[#a855f7]/20 border-[#4a5568]/30 hover:border-[#8b5cf6]/50'} border rounded-lg ${colors.textColor} font-medium transition-all duration-300 transform hover:scale-105 min-h-[60px] sm:min-h-auto`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 sm:h-5 w-4 sm:w-5 mb-1 sm:mb-0 sm:mr-2 ${theme === 'light' ? 'text-purple-600' : 'text-[#8b5cf6]'} flex-shrink-0`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                    <span className="text-xs sm:text-sm text-center">{service.name}</span>
                  </button>
                )) }
              </div>

              {/* Crypto Loan - Separate row */}
              <div className="flex justify-center">
                <button 
                  onClick={() => setActiveModal('cryptoLoan')}
                  className={`flex items-center justify-center px-4 sm:px-6 py-3 ${theme === 'light' ? 'bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 border-purple-300 hover:border-purple-400' : 'bg-gradient-to-r from-[#8b5cf6]/20 to-[#a855f7]/20 hover:from-[#8b5cf6] hover:to-[#a855f7] border-[#8b5cf6]/40 hover:border-[#8b5cf6]/80'} border rounded-lg ${colors.textColor} font-medium transition-all duration-300 transform hover:scale-105`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-[#8b5cf6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">Crypto Loan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIP & Institutional Section */}
      <div className={`py-12 sm:py-16 ${theme === 'light' ? 'bg-white' : 'bg-[#1a202c]'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content - Illustration */}
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="relative w-48 sm:w-64 h-48 sm:h-64 mx-auto">
                {/* Key illustration */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="relative w-full h-full">
                    {/* Key handle */}
                    <div className={`absolute top-1/4 left-1/4 w-16 sm:w-20 h-16 sm:h-20 ${theme === 'light' ? 'bg-green-500' : 'bg-[#10b981]'} rounded-full transform -rotate-45`}></div>
                    {/* Key shaft */}
                    <div className={`absolute top-1/2 left-1/2 w-24 sm:w-32 h-6 sm:h-8 ${theme === 'light' ? 'bg-green-500' : 'bg-[#10b981]'} transform -translate-y-1/2`}></div>
                    {/* Key teeth */}
                    <div className={`absolute top-1/2 right-6 sm:right-8 w-5 sm:w-6 h-10 sm:h-12 ${theme === 'light' ? 'bg-green-500' : 'bg-[#10b981]'} transform -translate-y-1/2`}></div>
                    <div className={`absolute top-1/2 right-12 sm:right-16 w-3 sm:w-4 h-6 sm:h-8 ${theme === 'light' ? 'bg-green-500' : 'bg-[#10b981]'} transform -translate-y-1/2`}></div>
                  </div>
                </div>

                {/* Circle with purple coin */}
                <div className={`absolute top-1/4 right-1/4 w-20 sm:w-24 h-20 sm:h-24 ${theme === 'light' ? 'bg-gray-100 border-gray-400' : 'bg-[#1e293b] border-gray-700'} rounded-full border-4 flex items-center justify-center`}>
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-full"></div>
                </div>

                {/* Decorative elements */}
                <div className={`absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-5 sm:w-6 h-5 sm:h-6 ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-500'} transform rotate-45`}></div>
                <div className={`absolute bottom-12 sm:bottom-16 left-12 sm:left-16 w-3 sm:w-4 h-3 sm:h-4 ${theme === 'light' ? 'bg-gray-500' : 'bg-gray-600'} rounded-sm`}></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3 order-1 lg:order-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${colors.textColor}`}>VIP & Institutional</h2>
              </div>
              <p className={`text-base sm:text-lg ${colors.smTextColor} mb-6 sm:mb-8 px-4 lg:px-0`}>
                Finsocial VIP and Institutional offers access to professional services including better fees, higher
                trading limits, flexible account management function and OTC services. Our experienced team works
                closely with a wide range of market participants to provide bespoke trading solutions.
              </p>

              {/* Options */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <button 
                  onClick={() => setActiveModal('subAccount')}
                  className={`flex items-center justify-center px-4 sm:px-6 py-3 ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-[#2d3748] hover:bg-[#374151]'} rounded-lg ${colors.textColor} font-medium transition-all duration-300 transform hover:scale-105`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-[#8b5cf6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 009.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">Sub Account</span>
                </button>
                <button 
                  onClick={() => setActiveModal('taxReport')}
                  className={`flex items-center justify-center px-4 sm:px-6 py-3 ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-[#2d3748] hover:bg-[#374151]'} rounded-lg ${colors.textColor} font-medium transition-all duration-300 transform hover:scale-105`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-[#8b5cf6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">TAX Report API</span>
                </button>
              </div>

              {/* Learn More Button */}
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => setActiveModal('learnMore')}
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] hover:from-[#7c3aed] hover:to-[#9333ea] rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm sm:text-base">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link Program Section */}
      <div className={`py-12 sm:py-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-[#111827]'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="flex items-center justify-center mb-8 sm:mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 sm:h-8 w-6 sm:w-8 ${theme === 'light' ? 'text-purple-600' : 'text-[#8b5cf6]'} mr-2 sm:mr-3`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
            <h2 className={`text-2xl sm:text-3xl font-bold ${colors.textColor}`}>Link Program</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <p className={`text-base sm:text-lg ${colors.smTextColor} mb-6 sm:mb-8 px-4 lg:px-0`}>
                Finsocial Link Program enables enterprise clients to build their business with Finsocial technology
                while earning commission from trading fees by leveraging Finsocial's liquidity and market depth.
              </p>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <button 
                  onClick={() => setActiveModal('liquidity')}
                  className="flex flex-col sm:flex-row items-center justify-center px-3 sm:px-4 py-3 bg-[#2d3748] hover:bg-[#374151] rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 min-h-[60px] sm:min-h-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mb-1 sm:mb-0 sm:mr-2 text-[#8b5cf6] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Liquidity</span>
                </button>
                <button 
                  onClick={() => setActiveModal('fiatGateway')}
                  className="flex flex-col sm:flex-row items-center justify-center px-3 sm:px-4 py-3 bg-[#2d3748] hover:bg-[#374151] rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 min-h-[60px] sm:min-h-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mb-1 sm:mb-0 sm:mr-2 text-[#8b5cf6] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">Fiat Gateway</span>
                </button>
                <button 
                  onClick={() => setActiveModal('linkSubAccount')}
                  className="flex flex-col sm:flex-row items-center justify-center px-3 sm:px-4 py-3 bg-[#2d3748] hover:bg-[#374151] rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 min-h-[60px] sm:min-h-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mb-1 sm:mb-0 sm:mr-2 text-[#8b5cf6] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 009.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">Link Sub Account</span>
                </button>
                <button 
                  onClick={() => setActiveModal('rebates')}
                  className="flex flex-col sm:flex-row items-center justify-center px-3 sm:px-4 py-3 bg-[#2d3748] hover:bg-[#374151] rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 min-h-[60px] sm:min-h-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 sm:h-5 w-4 sm:w-5 mb-1 sm:mb-0 sm:mr-2 text-[#8b5cf6] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Rebates</span>
                </button>
              </div>
            </div>

            {/* Center Content - Finsocial Ecosystem */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center order-last lg:order-none">
                           <div className={`w-24 sm:w-32 h-24 sm:h-32 ${theme === 'light' ? 'bg-gray-100 border-purple-300' : 'bg-[#1a202c] border-[#8b5cf6]/30'} border-2 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transform rotate-45`}>
                <div className="transform -rotate-45">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${theme === 'light' ? 'text-purple-600' : 'text-[#8b5cf6]'} w-10 sm:w-12 h-10 sm:h-12`}
                  >
                    <path d="M30 5L38.66 13.66L30 22.32L21.34 13.66L30 5Z" fill="currentColor" />
                    <path d="M13.66 21.34L22.32 30L13.66 38.66L5 30L13.66 21.34Z" fill="currentColor" />
                    <path d="M46.34 21.34L55 30L46.34 38.66L37.68 30L46.34 21.34Z" fill="currentColor" />
                    <path d="M30 37.68L38.66 46.34L30 55L21.34 46.34L30 37.68Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <p className={`text-base sm:text-lg font-semibold ${colors.textColor}`}>Finsocial Ecosystem</p>
            </div>

            {/* Right Content - Integration Diagram */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center">
                {/* Liquidity & Trading Integration */}
                <div className="mb-4 sm:mb-6 w-full max-w-xs">
                  <p className={`${colors.textColor} font-medium mb-2 text-center text-sm sm:text-base`}>Liquidity & Trading Integration</p>
                  <div className={`w-full h-2 ${theme === 'light' ? 'bg-gray-300' : 'bg-[#2d3748]'} rounded-full relative`}>
                    <div className="absolute left-0 top-0 h-2 w-3/4 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-full"></div>
                    <div className={`absolute -right-2 -top-1 w-4 h-4 ${theme === 'light' ? 'bg-purple-600' : 'bg-[#8b5cf6]'} rounded-full`}></div>
                    <div className={`absolute -left-2 -top-1 w-4 h-4 ${theme === 'light' ? 'bg-purple-600' : 'bg-[#8b5cf6]'} rounded-full`}></div>
                  </div>
                </div>

                {/* Rebate on Volume */}
                <div className="mb-6 sm:mb-8 w-full max-w-xs">
                  <p className={`${colors.textColor} font-medium mb-2 text-center text-sm sm:text-base`}>Rebate on Volume</p>
                  <div className={`w-full h-2 ${theme === 'light' ? 'bg-gray-300' : 'bg-[#2d3748]'} rounded-full relative`}>
                    <div className="absolute left-0 top-0 h-2 w-1/2 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-full"></div>
                    <div className={`absolute -right-2 -top-1 w-4 h-4 ${theme === 'light' ? 'bg-purple-600' : 'bg-[#8b5cf6]'} rounded-full`}></div>
                    <div className={`absolute -left-2 -top-1 w-4 h-4 ${theme === 'light' ? 'bg-purple-600' : 'bg-[#8b5cf6]'} rounded-full`}></div>
                  </div>
                </div>

                {/* Balance Scale */}
                <div className="relative w-32 sm:w-40 h-32 sm:h-40">
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-20 sm:h-24 ${theme === 'light' ? 'bg-purple-600' : 'bg-[#8b5cf6]'}`}></div>
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 ${theme === 'light' ? 'bg-purple-600' : 'bg-[#8b5cf6]'} rounded-full`}></div>
                  <div className={`absolute top-20 sm:top-24 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-2 ${theme === 'light' ? 'bg-purple-600' : 'bg-[#8b5cf6]'}`}></div>
                  <div className={`absolute top-20 sm:top-24 left-0 w-10 sm:w-12 h-10 sm:h-12 ${theme === 'light' ? 'bg-gray-100 border-purple-400' : 'bg-[#1a202c] border-[#8b5cf6]'} border-2 rounded-full`}></div>
                  <div className={`absolute top-20 sm:top-24 right-0 w-10 sm:w-12 h-10 sm:h-12 ${theme === 'light' ? 'bg-gray-100 border-purple-400' : 'bg-[#1a202c] border-[#8b5cf6]'} border-2 rounded-full`}></div>
                  <div className={`absolute top-32 sm:top-36 left-1/2 transform -translate-x-1/2 ${colors.textColor} font-medium text-sm sm:text-base`}>
                    Link Client
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className={`py-12 sm:py-16 ${theme === 'light' ? 'bg-white' : 'bg-[#0f1419]'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${colors.textColor}`}>FAQ</h2>
            <button 
              onClick={() => setActiveModal('faq')}
              className={`${theme === 'light' ? 'text-purple-600 hover:text-purple-700' : 'text-[#8b5cf6] hover:text-[#a855f7]'} font-medium transition-colors duration-300 text-sm sm:text-base`}
            >
              View All
            </button>
          </div>

          <div className="max-w-4xl">
            {faqData.slice(0, 3).map((item, index) => (
              <div key={index} className={`border-b ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} last:border-b-0`}>
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between py-4 sm:py-6 text-left ${theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-[#1a1f2e]/50'} transition-colors duration-300 group px-2 sm:px-0`}
                >
                  <span className={`text-sm sm:text-lg ${colors.textColor} font-medium pr-4`}>
                    {index + 1}. {item.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 sm:h-5 w-4 sm:w-5 ${theme === 'light' ? 'text-gray-500 group-hover:text-purple-600' : 'text-gray-400 group-hover:text-[#8b5cf6]'} transition-all duration-300 flex-shrink-0 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-2 sm:px-0 pb-4 sm:pb-6">
                    <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-[#1a1f2e]'} p-4 rounded-lg`}>
                      <p className={`${colors.smTextColor} text-sm sm:text-base whitespace-pre-line leading-relaxed`}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Show more questions link */}
            <div className="pt-6 text-center">
              <button 
                onClick={() => setActiveModal('faq')}
                className={`inline-flex items-center ${theme === 'light' ? 'text-purple-600 hover:text-purple-700' : 'text-[#8b5cf6] hover:text-[#a855f7]'} font-medium transition-colors duration-300`}
              >
                <span>View all {faqData.length} questions</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

      {/* Modal */}
      {activeModal && (
        <Modal
          isOpen={!!activeModal}
          onClose={closeModal}
          title={modalContent[activeModal]?.title || "Information"}
          size="lg"
        >
          {modalContent[activeModal]?.content || <p className="text-gray-300">Content coming soon...</p>}
        </Modal>
      )}
    </div>
  )
}

export default ApiPage