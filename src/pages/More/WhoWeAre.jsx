import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import CharityNavigation from "../../components/CharityNavigation"

const WhoWeAre = () => {
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

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Former blockchain engineer with 10+ years in social impact technology."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Tech innovator specializing in decentralized systems and humanitarian applications."
    },
    {
      name: "Dr. Amara Okafor",
      role: "Head of Impact",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "International development expert with expertise in sustainable technology deployment."
    },
    {
      name: "David Rodriguez",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Building bridges between traditional NGOs and Web3 innovation ecosystems."
    }
  ]

  const advisors = [
    { name: "Prof. Elena Vasquez", role: "Blockchain Ethics Advisor" },
    { name: "James Thompson", role: "Humanitarian Technology Consultant" },
    { name: "Dr. Raj Patel", role: "Decentralized Finance Expert" },
    { name: "Maria Santos", role: "Global Development Strategist" }
  ]

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
            Who We Are
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate team of technologists, humanitarian experts, and visionaries working to democratize Web3 for social good
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg mb-6">
                Founded in 2021, FinSocial Charity emerged from a simple belief: blockchain technology should benefit everyone, 
                not just those with technical expertise or financial resources.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our founders, coming from backgrounds in both technology and humanitarian work, witnessed firsthand how 
                traditional aid distribution often faces challenges with transparency, efficiency, and reaching those most in need.
              </p>
              <p className="text-gray-300 text-lg">
                We saw an opportunity to revolutionize philanthropy by leveraging the transparency and efficiency of 
                blockchain technology while maintaining the human-centered approach essential to meaningful impact.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Advisory Board</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2">{advisor.name}</h3>
                <p className="text-gray-400 text-sm">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Perspective</h3>
              <p className="text-gray-300">
                We think beyond borders, understanding that challenges and solutions are interconnected across the globe.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Radical Transparency</h3>
              <p className="text-gray-300">
                Every transaction, decision, and impact metric is openly accessible through blockchain technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Inclusive Innovation</h3>
              <p className="text-gray-300">
                Technology should empower everyone, and we work to ensure no one is left behind in the Web3 revolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Technology Partners</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">E</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Ethereum Foundation</h4>
                    <p className="text-gray-400 text-sm">Infrastructure and technical support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Polygon Network</h4>
                    <p className="text-gray-400 text-sm">Scaling solutions and developer tools</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Humanitarian Partners</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">UN</span>
                  </div>
                  <div>
                    <h4 className="font-bold">United Nations</h4>
                    <p className="text-gray-400 text-sm">Global development initiatives</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">O</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Oxfam International</h4>
                    <p className="text-gray-400 text-sm">Poverty alleviation programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">
            We're always looking for passionate individuals who share our vision of using technology for positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modals.supportUs} onClose={() => closeModal('supportUs')} title="Support FinSocial Charity" size="lg">
        <div className="text-black">
          <p className="mb-6">Thank you for your interest in supporting our team and mission.</p>
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

export default WhoWeAre
