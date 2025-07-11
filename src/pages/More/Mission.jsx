import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import CharityNavigation from "../../components/CharityNavigation"

const Mission = () => {
  const [modals, setModals] = useState({
    joinMission: false,
    donateNow: false,
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
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            To democratize Web3 technology and harness its power for positive social impact across the globe.
          </p>
          <button 
            onClick={() => openModal('joinMission')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Join Our Mission
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Empowering Change Through Technology</h2>
              <p className="text-gray-300 text-lg mb-6">
                At FinSocial Charity, we believe that Web3 technology should be a force for good. Our mission is to bridge 
                the gap between cutting-edge blockchain innovation and meaningful social impact.
              </p>
              <p className="text-gray-300 text-lg">
                We work tirelessly to ensure that the benefits of decentralized technology reach those who need it most, 
                creating sustainable solutions for global challenges.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mission Vision"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
              <p className="text-gray-300">
                We strive to create solutions that transcend borders and benefit communities worldwide.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-300">
                Every donation and project is tracked on the blockchain for complete accountability.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Inclusion</h3>
              <p className="text-gray-300">
                We believe Web3 should be accessible to everyone, regardless of technical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Vision for 2030</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
              <div className="text-gray-300">People Empowered</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Countries Reached</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$1B+</div>
              <div className="text-gray-300">Funds Distributed</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Zero</div>
              <div className="text-gray-300">Administrative Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of the Change</h2>
          <p className="text-xl mb-8">
            Join us in building a more equitable and sustainable future through Web3 technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openModal('donateNow')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Donate Now
            </button>
            <button 
              onClick={() => openModal('joinMission')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={modals.joinMission} onClose={() => closeModal('joinMission')} title="Join Our Mission" size="lg">
        <div className="text-black">
          <p className="mb-6">Thank you for your interest in joining our mission! There are several ways you can get involved:</p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🤝 Volunteer Opportunities</h4>
              <p className="text-sm text-gray-600 mb-3">Contribute your skills to our projects and initiatives.</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Technical development and blockchain expertise</li>
                <li>Content creation and educational materials</li>
                <li>Community outreach and engagement</li>
                <li>Project management and coordination</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🎓 Educational Initiatives</h4>
              <p className="text-sm text-gray-600">Help us create and deliver Web3 education programs.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🔗 Partnership Programs</h4>
              <p className="text-sm text-gray-600">Collaborate with us to amplify our collective impact.</p>
            </div>
          </div>
          
          <form className="space-y-4 mb-6">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
            <select className="w-full p-3 border rounded">
              <option>Select Interest Area</option>
              <option>Technical Development</option>
              <option>Content Creation</option>
              <option>Community Outreach</option>
              <option>Project Management</option>
              <option>Education</option>
              <option>Partnerships</option>
            </select>
            <textarea placeholder="Tell us about your background and how you'd like to contribute" rows="4" className="w-full p-3 border rounded"></textarea>
          </form>
          
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Submit Application
            </button>
            <button onClick={() => closeModal('joinMission')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.donateNow} onClose={() => closeModal('donateNow')} title="Support Our Mission" size="lg">
        <div className="text-black">
          <p className="mb-6">Your donation directly supports our mission to democratize Web3 technology for social good.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$50</button>
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$100</button>
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$250</button>
          </div>
          
          <div className="space-y-4 mb-6">
            <input type="number" placeholder="Custom amount" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
          </div>
          
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Donate Now
            </button>
            <button onClick={() => closeModal('donateNow')} className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-6 rounded">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.supportUs} onClose={() => closeModal('supportUs')} title="Support FinSocial Charity" size="lg">
        <div className="text-black">
          <p className="mb-6">Join us in making a difference through blockchain technology. There are many ways you can support our mission:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">💰 Financial Support</h4>
              <p className="text-sm text-gray-600 mb-3">Make a direct donation to fund our projects and operations.</p>
              <button 
                onClick={() => {
                  closeModal('supportUs')
                  openModal('donateNow')
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
              >
                Donate Now
              </button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🤝 Volunteer</h4>
              <p className="text-sm text-gray-600 mb-3">Join our team of volunteers and contribute your skills.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
                Apply to Volunteer
              </button>
            </div>
          </div>
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

export default Mission
