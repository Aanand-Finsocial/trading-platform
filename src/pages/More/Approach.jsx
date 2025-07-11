import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import CharityNavigation from "../../components/CharityNavigation"

const Approach = () => {
  const [activeTab, setActiveTab] = useState('methodology')
  const [modals, setModals] = useState({
    supportUs: false
  })

  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }))
  }

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }))
  }

  const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
    if (!isOpen) return null
    
    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md", 
      lg: "max-w-lg",
      xl: "max-w-2xl"
    }
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className={`bg-white rounded-xl ${sizeClasses[size]} w-full max-h-[90vh] overflow-y-auto`}>
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <CharityNavigation onSupportClick={() => openModal('supportUs')} />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Approach
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative strategies combining blockchain transparency with direct impact delivery
          </p>
        </div>
      </section>

      {/* Methodology Tabs */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-lg p-1 flex">
              <button 
                onClick={() => setActiveTab('methodology')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'methodology' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Methodology
              </button>
              <button 
                onClick={() => setActiveTab('technology')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'technology' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Technology
              </button>
              <button 
                onClick={() => setActiveTab('impact')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'impact' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Impact Measurement
              </button>
            </div>
          </div>

          {activeTab === 'methodology' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Direct Giving Methodology</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Our approach eliminates intermediaries and ensures 100% of donations reach beneficiaries through blockchain technology.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Identification & Verification</h3>
                      <p className="text-gray-300">We identify beneficiaries through local partnerships and verify their needs using blockchain-based identity systems.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Smart Contract Deployment</h3>
                      <p className="text-gray-300">Funds are locked in smart contracts with predefined conditions for release and distribution.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Direct Distribution</h3>
                      <p className="text-gray-300">Beneficiaries receive funds directly to their crypto wallets or through local conversion partners.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Methodology"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          )}

          {activeTab === 'technology' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⛓️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Blockchain Infrastructure</h3>
                <p className="text-gray-300 mb-4">Multi-chain architecture supporting Ethereum, Polygon, and Finsocial Smart Chain for optimal cost and speed.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Gas optimization strategies</li>
                  <li>• Cross-chain bridges</li>
                  <li>• Layer 2 scaling solutions</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-xl p-8">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
                <p className="text-gray-300 mb-4">Real-time tracking and analytics dashboard for complete transparency and impact measurement.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Impact metrics tracking</li>
                  <li>• Beneficiary feedback systems</li>
                  <li>• Automated reporting</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-xl p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Security Framework</h3>
                <p className="text-gray-300 mb-4">Multi-layered security approach protecting funds and beneficiary data.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Smart contract audits</li>
                  <li>• Multi-signature wallets</li>
                  <li>• Privacy-preserving protocols</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6">Measuring Real Impact</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We use quantitative and qualitative metrics to ensure our interventions create lasting positive change.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Performance Indicators</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Distribution Efficiency</span>
                        <span className="text-green-400 font-bold">98.5%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '98.5%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Beneficiary Satisfaction</span>
                        <span className="text-blue-400 font-bold">94.2%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Transparency Score</span>
                        <span className="text-purple-400 font-bold">100%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Impact Categories</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-3xl font-bold text-blue-400 mb-2">2.1M+</div>
                      <div className="text-gray-300">Lives Improved</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-3xl font-bold text-green-400 mb-2">54</div>
                      <div className="text-gray-300">Countries Served</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-3xl font-bold text-purple-400 mb-2">$23M+</div>
                      <div className="text-gray-300">Funds Distributed</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-3xl font-bold text-orange-400 mb-2">32</div>
                      <div className="text-gray-300">Active Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modals.supportUs} onClose={() => closeModal('supportUs')} title="Support FinSocial Charity" size="lg">
        <div className="text-black">
          <p className="mb-6">Thank you for your interest in supporting our approach to charitable giving through blockchain technology.</p>
          <div className="flex justify-end">
            <button onClick={() => closeModal('supportUs')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Footer/>
    </div>
  )
}

export default Approach
