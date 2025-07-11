import { useState } from "react"
import Footer from "../../components/Footer/Footer"

const FinsocialWallet = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [modals, setModals] = useState({
    getStarted: false,
    walletSDK: false,
    contactUs: false,
    buy: false,
    deposit: false,
    send: false,
    receive: false,
    swap: false,
    history: false
  })

  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(index)
    }
  }

  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }))
  }

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }))
  }

  const closeAllModals = () => {
    setModals({
      getStarted: false,
      walletSDK: false,
      contactUs: false,
      buy: false,
      deposit: false,
      send: false,
      receive: false,
      swap: false,
      history: false
    })
  }

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">{title}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
                ×
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  }

  const faqItems = [
    {
      question: "What is Finsocial Wallet?",
      answer:
        "Finsocial Wallet is a self-custody crypto wallet that allows you to securely store, send, receive, and swap cryptocurrencies across multiple blockchains.",
    },
    {
      question: "What are the benefits of using Finsocial Wallet?",
      answer:
        "Finsocial Wallet offers self-custody, multi-chain support, built-in security features, seamless swaps, and integration with the broader Finsocial ecosystem.",
    },
    {
      question: "How do I use my Finsocial Wallet to send and receive tokens?",
      answer:
        "Simply select the 'Send' or 'Receive' option, choose the cryptocurrency, enter the recipient's address (for sending), and confirm the transaction.",
    },
    {
      question: "Is Finsocial Wallet a self-custody wallet? Who has control over my funds?",
      answer:
        "Yes, Finsocial Wallet is a self-custody wallet. Only you have control over your funds. Your private keys are secured using advanced MPC technology.",
    },
    {
      question: "Do I need to back up my Finsocial Wallet?",
      answer:
        "Yes, it's recommended to back up your wallet by securely storing your recovery phrase in a safe location.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section - Rewarding Your World of Web3 */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <div className="text-yellow-400 font-medium mb-2 text-sm sm:text-base">Finsocial Wallet</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rewarding.
              <br />
              Your world of
              <br />
              Web3.
            </h1>
            <button 
              onClick={() => openModal('getStarted')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-md transition-all touch-manipulation"
            >
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 sm:mt-12 lg:mt-0 relative">
            <div className="relative z-10 mx-auto lg:ml-auto w-56 sm:w-64 md:w-80">
              <div className="bg-gray-800 rounded-3xl p-3 sm:p-4 border border-gray-700 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="mr-auto">
                    <span className="text-gray-400">←</span>
                  </div>
                  <div className="text-center font-medium text-sm sm:text-base">Select Address</div>
                  <div className="ml-auto w-5"></div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="bg-yellow-400 rounded-full p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <span className="text-black font-bold text-sm sm:text-base">B</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="font-bold text-sm sm:text-base">BNB</div>
                  <div className="text-xs sm:text-sm text-gray-400">BNB Chain</div>
                </div>

                <div className="mb-2 text-xs sm:text-sm text-gray-400">My Address</div>

                <div className="bg-gray-700 rounded-lg p-2 sm:p-3 mb-3 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Wallet2</div>
                    <div className="text-xs text-gray-400">0x --------</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-xs sm:text-sm">0.0094618 BNB</div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-2 sm:p-3 mb-3 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Wallet1</div>
                    <div className="text-xs text-gray-400">0x --------</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-xs sm:text-sm">0.0075235 BNB</div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-2 sm:p-3 mb-3 border border-gray-700">
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 mr-2 mt-1">🛡</span>
                    <div className="text-xs text-gray-400">
                      The address below is unavailable due to zero balance or unsupported use.
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-2 sm:p-3 mb-4 sm:mb-6 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Wallet3</div>
                    <div className="text-xs text-gray-400">0x --------</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-xs sm:text-sm">0 BNB</div>
                  </div>
                </div>

                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg w-full transition-all touch-manipulation text-sm sm:text-base">
                  Confirm
                </button>
              </div>
            </div>

            {/* Floating crypto icons */}
            <div className="absolute top-1/4 right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-full opacity-70 animate-pulse flex items-center justify-center">
              <span className="text-white text-sm sm:text-base">₿</span>
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-6 h-6 sm:w-10 sm:h-10 bg-purple-500 rounded-full opacity-70 animate-pulse delay-300 flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm">Ξ</span>
            </div>
            <div className="absolute top-1/2 right-1/3 w-10 h-10 sm:w-14 sm:h-14 bg-yellow-400 rounded-full opacity-70 animate-pulse delay-700 flex items-center justify-center">
              <span className="text-black text-sm sm:text-lg">$</span>
            </div>
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full opacity-70 animate-pulse delay-500 flex items-center justify-center">
              <span className="text-white text-sm sm:text-lg">◆</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 order-2 lg:order-1">
            <div className="relative mx-auto lg:mr-auto w-56 sm:w-64 md:w-72">
              <div className="bg-gray-900 rounded-3xl p-3 sm:p-4 border border-gray-700 shadow-xl">
                <div className="mb-4">
                  <div className="text-center font-medium text-sm sm:text-base">Exchange</div>
                </div>

                <div className="flex border-b border-gray-700 mb-4 text-xs overflow-x-auto">
                  <div className="px-2 sm:px-3 py-2 border-b-2 border-yellow-400 whitespace-nowrap">Overview</div>
                  <div className="px-2 sm:px-3 py-2 text-gray-500 whitespace-nowrap">Spot</div>
                  <div className="px-2 sm:px-3 py-2 text-gray-500 whitespace-nowrap">Funding</div>
                  <div className="px-2 sm:px-3 py-2 text-gray-500 whitespace-nowrap">Margin</div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400">Total Balance</div>
                  <div className="text-xl sm:text-2xl font-bold">$3,389.04</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button 
                    onClick={() => openModal('buy')}
                    className="bg-gray-800 text-white py-2 rounded-md text-sm touch-manipulation"
                  >
                    Buy
                  </button>
                  <button 
                    onClick={() => openModal('deposit')}
                    className="bg-yellow-400 text-black py-2 rounded-md text-sm touch-manipulation"
                  >
                    Deposit
                  </button>
                </div>

                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded flex items-center justify-center">
                          <span className="text-black text-xs">📊</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-xs sm:text-sm">Assets Analysis Report</div>
                        <div className="text-xs text-gray-400">Your overview of your investments</div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-yellow-400 rounded-full p-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                        <span className="text-xs text-black">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <div className="text-yellow-400 font-medium mb-2 text-sm sm:text-base">Transfer</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Bridge between the exchange and Web3</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Why juggle multiple apps? Simply do it all in one! Transfer funds between exchange and wallet quickly and
              easily. Move across CeFi, DeFi, and Web3 in a single tap.
            </p>
          </div>
        </div>
      </section>

      {/* Swap Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-yellow-400 font-medium mb-2 text-center lg:text-left text-sm sm:text-base">Swap</div>
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Swap tokens cross-chain at the best prices</h2>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Powered by Finsocial Bridge and other DEXs, trade thousands of tokens across various networks. Get the
                best prices thanks to deep liquidity and low slippage.
              </p>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gray-800 rounded-xl p-4 sm:p-6 flex items-center w-full max-w-xs sm:max-w-sm">
                  <div className="bg-yellow-400 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <span className="text-black font-bold text-sm sm:text-base">B</span>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">BNB</div>
                    <div className="text-xs sm:text-sm text-gray-400">Finsocial Smart Chain</div>
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-bold">↓</div>

                <div className="bg-gray-800 rounded-xl p-4 sm:p-6 flex items-center w-full max-w-xs sm:max-w-sm">
                  <div className="bg-blue-500 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base">Ξ</span>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">ETH</div>
                    <div className="text-xs sm:text-sm text-gray-400">Arbitrum One Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Putting you in control.</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Security at every stage.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">Self-custody wallet</h4>
              <p className="text-gray-300 mb-8 sm:mb-12 text-sm sm:text-base">
                Funds in the wallet are exclusively held and managed by the user. You are in complete control over your
                crypto assets.
              </p>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-3xl sm:text-4xl">🔒</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-lg sm:text-2xl">👆</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">Powered by MPC</h4>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Advanced multi-party computation (MPC) technology creates three separately stored 'key shares'. Enjoy
                unparalleled security without the need for a seed phrase.
              </p>
              <div className="flex items-center mb-4 sm:mb-6">
                <span className="text-yellow-400 mr-2 text-sm sm:text-base">Learn More</span>
                <span className="text-yellow-400">→</span>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-400 text-lg sm:text-2xl">🔑</span>
                  </div>
                  <div className="absolute top-3 -right-8 sm:top-4 sm:-right-12 w-8 h-8 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center transform rotate-45">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-6 left-0 sm:-bottom-8 w-16 h-8 sm:w-20 sm:h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black text-sm sm:text-base">🛡</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">Built-in risk controls</h4>
              <p className="text-gray-300 mb-8 sm:mb-12 text-sm sm:text-base">
                Get alerts if a token or blockchain carries security risks, including wrong address protection or
                malicious contract detection.
              </p>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-teal-500 rounded-full flex items-center justify-center opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-lg sm:text-2xl">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engage with Millions Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Engage with Millions of Users</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
            Deepen your understanding of your users with our robust Wallet SDK. Connect, engage, and grow with
            Finsocial's vast and active user base.
          </p>
          <button 
            onClick={() => openModal('walletSDK')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-md transition-all touch-manipulation"
          >
            Get Wallet SDK
          </button>
        </div>
      </section>

      {/* Drive Impactful Campaigns */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Drive Impactful Campaigns</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              Harness the power of Finsocial Wallet to host impactful campaigns for your project. Boost your project's
              visibility and rely on our advanced technology for seamless execution.
            </p>
            <button 
              onClick={() => openModal('contactUs')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md transition-all touch-manipulation"
            >
              Contact Us
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-32 h-24 sm:w-40 sm:h-32 bg-yellow-400 rounded-t-xl relative">
                <div className="absolute top-1/4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-black text-sm sm:text-base">📧</span>
                </div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <div className="w-3 h-32 sm:w-4 sm:h-40 bg-gray-700 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 is Easier Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 text-center lg:text-left">
            <div className="text-yellow-400 font-medium mb-2 text-sm sm:text-base">Finsocial Wallet</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Web3 is easier
              <br />
              with Finsocial
            </h2>
            <button 
              onClick={() => openModal('getStarted')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-md transition-all touch-manipulation"
            >
              Get Started
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="flex space-x-2 sm:space-x-4">
              {/* Phone 1 */}
              <div className="w-24 sm:w-32 bg-gray-900 rounded-3xl p-2 sm:p-3 shadow-xl transform rotate-[-5deg]">
                <div className="text-white text-xs mb-2 px-1 sm:px-2">Swap</div>
                <div className="flex items-center mb-2 px-1 sm:px-2">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full mr-1 sm:mr-2 flex items-center justify-center">
                    <span className="text-black text-xs">B</span>
                  </div>
                  <div className="text-white text-xs">BNB</div>
                  <div className="ml-auto text-white text-xs">$</div>
                </div>
                <div className="flex items-center mb-2 px-1 sm:px-2">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-teal-500 rounded-full mr-1 sm:mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">U</span>
                  </div>
                  <div className="text-white text-xs">USDT</div>
                  <div className="ml-auto text-white text-xs">1,094.15</div>
                </div>
                <div className="bg-yellow-400 text-black text-xs font-bold py-1 sm:py-2 rounded-lg text-center mb-2 sm:mb-4">
                  Swap
                </div>
                <div className="text-white text-xs px-1 sm:px-2 mb-1">Price</div>
                <div className="text-white text-xs px-1 sm:px-2 mb-2 sm:mb-4 break-words">1 USDT = 0.0000000 BNB</div>
              </div>

              {/* Phone 2 */}
              <div className="w-24 sm:w-32 bg-gray-900 rounded-3xl p-2 sm:p-3 shadow-xl">
                <div className="flex justify-between mb-2 text-xs">
                  <div className="text-white">Exchange</div>
                  <div className="text-white">Wallet</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-1 sm:p-2 mb-2">
                  <div className="text-white text-xs mb-1">Main wallet</div>
                  <div className="text-white text-sm sm:text-lg font-bold">$2,203.42</div>
                </div>
                <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-2 sm:mb-4">
                  <button onClick={() => openModal('send')} className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">↗</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">Send</div>
                  </button>
                  <button onClick={() => openModal('receive')} className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">↙</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">Receive</div>
                  </button>
                  <button onClick={() => openModal('swap')} className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">⇄</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">Swap</div>
                  </button>
                  <button onClick={() => openModal('history')} className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">📋</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">History</div>
                  </button>
                </div>
                <div className="text-white text-xs mb-2">Crypto (3)</div>
                <div className="bg-gray-800 rounded-lg p-1 sm:p-2 mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 sm:w-5 sm:h-5 bg-yellow-400 rounded-full mr-1 sm:mr-2 flex items-center justify-center">
                      <span className="text-black text-xs">B</span>
                    </div>
                    <div>
                      <div className="text-white text-xs">BNB</div>
                      <div className="text-gray-400 text-[6px] sm:text-[8px]">+3.41%</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-white text-xs">5.32500</div>
                      <div className="text-gray-400 text-[6px] sm:text-[8px]">$1,234.56</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 */}
              <div className="w-24 sm:w-32 bg-gray-900 rounded-3xl p-2 sm:p-3 shadow-xl transform rotate-[5deg]">
                <div className="flex justify-between mb-2 text-xs">
                  <span className="text-white">←</span>
                  <div className="text-white">BNB</div>
                  <span className="text-white">⋯</span>
                </div>
                <div className="text-center mb-2">
                  <div className="text-white text-xs">$281.40</div>
                  <div className="text-green-500 text-[6px] sm:text-[8px]">+2.41%</div>
                </div>
                <div className="h-12 sm:h-20 bg-gray-800 rounded-lg mb-2 sm:mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="w-full h-1/2 bg-gradient-to-t from-green-500 to-transparent opacity-50"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-green-500 text-xs">📈</span>
                  </div>
                </div>
                <div className="flex justify-between mb-2 sm:mb-4 text-[6px] sm:text-[8px] text-gray-400">
                  <div>1H</div>
                  <div>24H</div>
                  <div>7D</div>
                  <div>30D</div>
                  <div>1Y</div>
                  <div>All</div>
                </div>
                <div className="grid grid-cols-4 gap-1 sm:gap-2">
                  <button onClick={() => openModal('send')} className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">↗</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">Send</div>
                  </button>
                  <button onClick={() => openModal('receive')} className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">↙</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">Receive</div>
                  </button>
                  <button onClick={() => openModal('swap')} className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">⇄</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">Swap</div>
                  </button>
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                      <span className="text-white text-xs">💰</span>
                    </div>
                    <div className="text-white text-[6px] sm:text-[8px]">Earn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left py-3 sm:py-4 touch-manipulation"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center flex-1 pr-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <span className="font-medium text-sm sm:text-base">{index + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-medium">{item.question}</h3>
                </div>
                <div className="flex-shrink-0">
                  {expandedFaq === index ? (
                    <span className="text-gray-500 text-xl">−</span>
                  ) : (
                    <span className="text-gray-500 text-xl">+</span>
                  )}
                </div>
              </button>
              {expandedFaq === index && (
                <div className="pl-9 sm:pl-12 pr-4 pb-4">
                  <p className="text-gray-600 text-sm sm:text-base">{item.answer}</p>
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-6 sm:mt-8">
            <button className="flex items-center mx-auto text-yellow-500 font-medium touch-manipulation">
              <span>View more</span>
              <span className="ml-2">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-500 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs leading-relaxed">
            Disclaimer: Digital asset prices can be volatile. The value of your investment may go down or up and you may
            not get back the amount invested. You are solely responsible for your investment decisions and Finsocial is
            not liable for any losses you may incur. APR is an estimate of rewards you will earn in cryptocurrency over
            the selected timeframe. It does not display the actual or predicted returns/yield in any fiat currency. APR
            is adjusted daily and the estimated rewards may differ from the actual rewards generated. For selected
            staking products, Finsocial takes on all slashing risk. This means that the same amount of digital assets
            staked will be returned to you, even if they are slashed. Not financial advice. For more information, see
            our Terms of Use and Risk Warning.
          </p>
        </div>
      </section>
      <Modal isOpen={modals.getStarted} onClose={() => closeModal('getStarted')} title="Get Started with Finsocial Wallet">
        <div className="text-black">
          <p className="mb-4">Welcome to Finsocial Wallet! Get started with these simple steps:</p>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Download the Finsocial app from your app store</li>
            <li>Create your secure wallet account</li>
            <li>Set up your security preferences</li>
            <li>Start exploring Web3!</li>
          </ol>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Download App
            </button>
            <button onClick={() => closeModal('getStarted')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.walletSDK} onClose={() => closeModal('walletSDK')} title="Wallet SDK">
        <div className="text-black">
          <p className="mb-4">Integrate Finsocial Wallet into your application with our comprehensive SDK.</p>
          <div className="space-y-3 mb-6">
            <div className="p-3 bg-gray-100 rounded">
              <h4 className="font-bold">Features:</h4>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Easy integration</li>
                <li>• Multi-chain support</li>
                <li>• Secure transactions</li>
                <li>• Developer documentation</li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Access SDK
            </button>
            <button onClick={() => closeModal('walletSDK')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.contactUs} onClose={() => closeModal('contactUs')} title="Contact Us">
        <div className="text-black">
          <p className="mb-4">Get in touch with our team for partnerships and campaigns.</p>
          <form className="space-y-4 mb-6">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Company" className="w-full p-3 border rounded" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded"></textarea>
          </form>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Send Message
            </button>
            <button onClick={() => closeModal('contactUs')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.buy} onClose={() => closeModal('buy')} title="Buy Crypto">
        <div className="text-black">
          <p className="mb-4">Purchase cryptocurrency with fiat currency.</p>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Select Currency</label>
              <select className="w-full p-3 border rounded">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>BNB</option>
                <option>USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Amount (USD)</label>
              <input type="number" placeholder="100" className="w-full p-3 border rounded" />
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Continue to Payment
            </button>
            <button onClick={() => closeModal('buy')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.deposit} onClose={() => closeModal('deposit')} title="Deposit Crypto">
        <div className="text-black">
          <p className="mb-4">Deposit cryptocurrency to your wallet.</p>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Select Currency</label>
              <select className="w-full p-3 border rounded">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>BNB</option>
                <option>USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Network</label>
              <select className="w-full p-3 border rounded">
                <option>Ethereum Network</option>
                <option>BSC Network</option>
                <option>Polygon Network</option>
              </select>
            </div>
            <div className="p-3 bg-gray-100 rounded">
              <p className="text-sm">Your deposit address will be generated after selection.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Generate Address
            </button>
            <button onClick={() => closeModal('deposit')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.send} onClose={() => closeModal('send')} title="Send Crypto">
        <div className="text-black">
          <p className="mb-4">Send cryptocurrency to another wallet.</p>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select className="w-full p-3 border rounded">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>BNB</option>
                <option>USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Recipient Address</label>
              <input type="text" placeholder="0x..." className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Amount</label>
              <input type="number" placeholder="0.001" className="w-full p-3 border rounded" />
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Send
            </button>
            <button onClick={() => closeModal('send')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.receive} onClose={() => closeModal('receive')} title="Receive Crypto">
        <div className="text-black">
          <p className="mb-4">Receive cryptocurrency in your wallet.</p>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Select Currency</label>
              <select className="w-full p-3 border rounded">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>BNB</option>
                <option>USDT</option>
              </select>
            </div>
            <div className="p-4 bg-gray-100 rounded text-center">
              <div className="w-32 h-32 bg-white mx-auto mb-3 rounded flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <p className="text-sm font-mono break-all">0x1234...abcd</p>
              <p className="text-xs text-gray-600 mt-2">QR Code for easy scanning</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Copy Address
            </button>
            <button onClick={() => closeModal('receive')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.swap} onClose={() => closeModal('swap')} title="Swap Tokens">
        <div className="text-black">
          <p className="mb-4">Exchange one cryptocurrency for another.</p>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">From</label>
              <div className="flex space-x-2">
                <select className="flex-1 p-3 border rounded">
                  <option>BNB</option>
                  <option>ETH</option>
                  <option>USDT</option>
                </select>
                <input type="number" placeholder="0.001" className="flex-1 p-3 border rounded" />
              </div>
            </div>
            <div className="text-center">
              <span className="text-2xl">⇄</span>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">To</label>
              <div className="flex space-x-2">
                <select className="flex-1 p-3 border rounded">
                  <option>USDT</option>
                  <option>ETH</option>
                  <option>BNB</option>
                </select>
                <input type="number" placeholder="≈ 250.00" className="flex-1 p-3 border rounded" readOnly />
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded text-sm">
              <p>Rate: 1 BNB = 250.00 USDT</p>
              <p>Fee: 0.1%</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Swap
            </button>
            <button onClick={() => closeModal('swap')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.history} onClose={() => closeModal('history')} title="Transaction History">
        <div className="text-black">
          <p className="mb-4">View your recent transactions.</p>
          <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
            <div className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Sent BNB</p>
                  <p className="text-xs text-gray-600">To: 0x1234...abcd</p>
                  <p className="text-xs text-gray-600">Dec 15, 2023 14:30</p>
                </div>
                <div className="text-right">
                  <p className="text-red-600">-0.5 BNB</p>
                  <p className="text-xs text-gray-600">Completed</p>
                </div>
              </div>
            </div>
            <div className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Received USDT</p>
                  <p className="text-xs text-gray-600">From: 0x5678...efgh</p>
                  <p className="text-xs text-gray-600">Dec 14, 2023 09:15</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600">+100 USDT</p>
                  <p className="text-xs text-gray-600">Completed</p>
                </div>
              </div>
            </div>
            <div className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Swapped ETH → BNB</p>
                  <p className="text-xs text-gray-600">Via Finsocial Bridge</p>
                  <p className="text-xs text-gray-600">Dec 13, 2023 16:45</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-600">0.1 ETH → 0.8 BNB</p>
                  <p className="text-xs text-gray-600">Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              View All
            </button>
            <button onClick={() => closeModal('history')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Footer/>
    </div>
  )
}

export default FinsocialWallet