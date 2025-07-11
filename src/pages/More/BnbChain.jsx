import { useState } from "react"
import { ChevronDown, ExternalLink, Github, Sparkles, ArrowRight, X, Menu } from "lucide-react"
import Footer from "../../components/Footer/Footer"
import { useTheme } from "../../contexts/ThemeContext"

const BnbChain = () => {
  const { theme } = useTheme()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [aiQuery, setAiQuery] = useState("")
  const [fixedAiQuery, setFixedAiQuery] = useState("")

  const dropdownItems = {
    chains: ['BNB Smart Chain', 'opBNB', 'BNB Greenfield'],
    developers: ['Documentation', 'Tutorials', 'API Reference', 'SDKs'],
    solutions: ['DeFi', 'Gaming', 'NFTs', 'Enterprise'],
    ecosystem: ['DApps', 'Wallets', 'Exchanges', 'Analytics'],
    community: ['Discord', 'Telegram', 'Forum', 'Events']
  }

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleAiSubmit = (e, query, setQuery) => {
    e.preventDefault()
    if (query.trim()) {
      // Simulate AI interaction
      alert(`AI Query: ${query}`)
      setQuery("")
    }
  }

  const handleQuickStart = () => {
    // Scroll to tools section or navigate to getting started
    document.querySelector('#tools-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGetBnb = () => {
    // Open BNB purchase/faucet page
    window.open('https://www.bnbchain.org/faucet', '_blank')
  }

  const handleProjectClick = (projectName) => {
    // Open project repository or demo
    alert(`Opening ${projectName} project`)
  }

  const handleToolClick = (toolName) => {
    const toolUrls = {
      'Faucet': 'https://www.bnbchain.org/faucet',
      'Bridge': 'https://www.bnbchain.org/bridge',
      'Networks & RPCs': 'https://docs.bnbchain.org/docs/rpc'
    }
    
    if (toolUrls[toolName]) {
      window.open(toolUrls[toolName], '_blank')
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`flex items-center justify-between px-6 py-4 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm relative`}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded flex items-center justify-center">
            <div className={`w-4 h-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-sm`}></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">BNB CHAIN</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {Object.keys(dropdownItems).map((item) => (
            <div key={item} className="relative">
              <div 
                className={`flex items-center space-x-1 cursor-pointer hover:text-purple-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                onClick={() => handleDropdownToggle(item)}
              >
                <span className="capitalize">{item}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />
              </div>
              
              {activeDropdown === item && (
                <div className={`absolute top-full left-0 mt-2 w-48 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg z-50`}>
                  {dropdownItems[item].map((subItem, index) => (
                    <div 
                      key={index}
                      className={`px-4 py-2 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} cursor-pointer first:rounded-t-lg last:rounded-b-lg`}
                      onClick={() => {
                        alert(`Navigate to ${subItem}`)
                        setActiveDropdown(null)
                      }}
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg"
            onClick={() => setFixedAiQuery("How can I help you today?")}
          >
            <span>Ask AI</span>
            <Sparkles className="w-4 h-4" />
          </button>
          <button 
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
            onClick={handleQuickStart}
          >
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t md:hidden z-50`}>
            {Object.keys(dropdownItems).map((item) => (
              <div key={item} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b last:border-b-0`}>
                <div 
                  className={`px-6 py-4 capitalize cursor-pointer ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
                  onClick={() => handleDropdownToggle(item)}
                >
                  {item}
                </div>
                {activeDropdown === item && (
                  <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    {dropdownItems[item].map((subItem, index) => (
                      <div 
                        key={index}
                        className={`px-8 py-2 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                        onClick={() => {
                          alert(`Navigate to ${subItem}`)
                          setActiveDropdown(null)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`relative px-6 py-20 text-center ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded`}></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Low Gas Fee.</span>
            <br />
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>All In One BNB.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button 
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg"
              onClick={handleQuickStart}
            >
              <span>Quick Start</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              className={`flex items-center space-x-2 border px-8 py-4 rounded-lg font-bold text-lg transition-colors ${theme === 'dark' ? 'border-gray-600 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:bg-gray-100'}`}
              onClick={handleGetBnb}
            >
              <span>Get BNB</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={(e) => handleAiSubmit(e, aiQuery, setAiQuery)} className="flex items-center justify-center max-w-md mx-auto">
            <input
              type="text"
              placeholder="How to deploy..."
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              className={`flex-1 px-6 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-500 ${theme === 'dark' ? 'bg-white text-gray-900' : 'bg-white text-gray-900 border border-gray-300'}`}
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-r-full font-medium flex items-center space-x-2 hover:from-purple-600 hover:to-indigo-700 transition-all"
            >
              <span>Ask AI</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Trends Section */}
      <section className={`px-6 py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold">🔥</span>
              </div>
              <h2 className="text-2xl font-bold">Top Trends & Breaking News: Stay Ahead in Web3!</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl text-white">
              <h3 className="text-4xl font-bold mb-2">BUILDER</h3>
              <h3 className="text-4xl font-bold mb-2">NYC</h3>
              <h3 className="text-4xl font-bold">BUNKER</h3>
            </div>

            <div className={`p-8 rounded-2xl border relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} rounded`}></div>
                  ))}
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded"></div>
                  <span className="text-sm font-medium">BNB CHAIN</span>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">AI BOT</h3>
              </div>
            </div>

            <div className={`p-8 rounded-2xl border relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} rounded`}></div>
                  ))}
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded"></div>
                  <span className="text-sm font-medium">BNB CHAIN</span>
                </div>
                <div className="text-sm text-purple-500 mb-2">UPCOMING HARDFORK:</div>
                <h3 className="text-3xl font-bold">MAXWELL</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`px-6 py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-5xl font-bold mb-4">Real Web3 Projects</h2>
              <h2 className="text-5xl font-bold text-gray-400">You Can Learn From</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className={`p-3 border rounded-lg transition-colors ${theme === 'dark' ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
                onClick={() => window.open('https://github.com/bnb-chain', '_blank')}
              >
                <Github className="w-6 h-6" />
              </button>
              <button 
                className={`px-6 py-3 border rounded-lg transition-colors ${theme === 'dark' ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
                onClick={() => alert('View all projects')}
              >
                View All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}
                onClick={() => handleProjectClick(`Project ${index + 1}`)}
              >
                <div className="h-40 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                    <span className="text-purple-500 text-2xl">🤖</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {index + 1}</h3>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    A brief description of what Project {index + 1} does...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>BSC</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>Greenfield</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>AI</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>MCP</span>
                  </div>
                  <div className="mt-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs">Typescript</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools-section" className={`px-6 py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4">Everything You</h2>
              <h2 className="text-5xl font-bold mb-6">Need to Start</h2>
              <p className="text-xl text-gray-400 mb-8">Your gateway to Web3 development</p>

              <div className="flex items-center space-x-4">
                <button 
                  className={`px-8 py-4 rounded-lg font-bold transition-colors ${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                  onClick={() => alert('Explore more tools')}
                >
                  Explore More Tools
                </button>
                <button 
                  className={`p-4 border rounded-lg transition-colors ${theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}`}
                  onClick={() => window.open('https://github.com/bnb-chain', '_blank')}
                >
                  <Github className="w-6 h-6" />
                </button>
                <button 
                  className={`p-4 border rounded-lg transition-colors ${theme === 'dark' ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}`}
                  onClick={() => window.open('https://docs.bnbchain.org', '_blank')}
                >
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border cursor-pointer transition-colors ${theme === 'dark' ? 'bg-gray-900 border-purple-400/30 hover:border-purple-400/60' : 'bg-gray-50 border-purple-400/30 hover:border-purple-400/60'}`}
                  onClick={() => handleToolClick(['Faucet', 'Bridge', 'Networks & RPCs'][index])}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${['bg-purple-400', 'bg-teal-400', 'bg-indigo-400'][index]}`}>
                      <span className="text-white text-xl">{['💧', '🌉', '🔗'][index]}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{['Faucet', 'Bridge', 'Networks & RPCs'][index]}</h3>
                      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{['Pilot tokens on BNB Smart Chain', 'Cross-chain transfer between networks', 'A list of BNB Chain related networks'][index]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className={`px-6 py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-5xl font-bold mb-6">We're Investing in</h2>
              <h2 className="text-5xl font-bold mb-6">Web3 Builders –</h2>
              <h2 className="text-5xl font-bold mb-8">Are You In?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Explore our vast program offerings that could meet your needs here.
              </p>

              <button 
                className={`px-8 py-4 rounded-lg font-bold transition-colors ${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                onClick={() => alert('View more programs')}
              >
                View More Programs
              </button>
            </div>

            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30 cursor-pointer hover:border-purple-500/60 transition-colors"
                  onClick={() => alert(`Apply for ${['TVL Incentive', 'Gas Grants', 'Kickstart'][index]}`)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{['TVL Incentive', 'Gas Grants', 'Kickstart'][index]}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-medium">Grants</span>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{['Compete with your project\'s incremental TVL on BSC and opBNB.', 'Compete with your project\'s incremental DAU and Trading Volume on BSC and opBNB.', 'Apply to claim the discounts and special offers provided by ecosystem partners of BNB Chain.'][index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Fixed Ask AI Button */}
            <div className="fixed bottom-6 right-6 z-40">
              <button 
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
                onClick={() => {
                  const query = prompt("What would you like to ask?")
                  if (query) setFixedAiQuery(query)
                }}
              >
                <span>Ask AI</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
            
            <Footer />
          </div>
        )
      }
      
      export default BnbChain