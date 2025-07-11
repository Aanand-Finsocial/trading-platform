import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"

const Charity = () => {
  const [modals, setModals] = useState({
    supportUs: false,
    donateNow: false,
    learnMoreCommitments: false,
    learnMoreImpact: false,
    projectDetails: false,
    newsletter: false
  })

  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openModal = (modalName, projectData = null) => {
    if (projectData) {
      setSelectedProject(projectData)
    }
    setModals(prev => ({ ...prev, [modalName]: true }))
  }

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }))
    if (modalName === 'projectDetails') {
      setSelectedProject(null)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Modal Component
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

  const projects = [
    {
      id: 1,
      title: "Morocco Earthquake Emergency Appeal",
      description: "Providing Emergency Relief to People in Morocco",
      status: "In Progress",
      progress: 100,
      participants: 0,
      amount: "3.49K",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      fullDescription: "Following the devastating earthquake in Morocco, our emergency appeal is providing immediate relief including food, water, shelter, and medical supplies to affected families. Your donation helps us deliver critical aid directly to those who need it most.",
      goals: ["Provide emergency shelter for 1,000 families", "Distribute clean water and food supplies", "Support medical treatment for injured victims", "Help rebuild community infrastructure"],
      totalGoal: "50,000 USD"
    },
    {
      id: 2,
      title: "Libya Floods - Emergency Appeal",
      description: "Providing Emergency Relief to People in Libya",
      status: "In Progress",
      progress: 100,
      participants: 0,
      amount: "426.48",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      fullDescription: "The severe flooding in Libya has displaced thousands of families. Our emergency response focuses on providing immediate humanitarian aid and supporting long-term recovery efforts.",
      goals: ["Emergency evacuation assistance", "Temporary housing solutions", "Clean water and sanitation", "Medical care and supplies"],
      totalGoal: "75,000 USD"
    },
    {
      id: 3,
      title: "FinSocial Lunch for Children",
      description: "By providing a nutritious lunch, we can help give children a chance at securi...",
      status: "Funding",
      progress: 100,
      participants: "3K",
      amount: "2,363.13K",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      fullDescription: "Our school lunch program ensures that children in underserved communities receive nutritious meals, helping improve their health, education outcomes, and overall development.",
      goals: ["Feed 10,000 children daily", "Improve school attendance rates", "Support local food suppliers", "Create sustainable nutrition programs"],
      totalGoal: "5,000,000 USD"
    },
    {
      id: 4,
      title: "Crypto Connect - Financial Inclusion for All",
      description: "Provide affordable financial services to all the people.",
      status: "Completed",
      progress: 100,
      participants: "6K",
      amount: "2,501.08K",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      fullDescription: "Our financial inclusion initiative has successfully provided blockchain-based financial services to underbanked communities, enabling secure transactions and savings opportunities.",
      goals: ["Onboard 50,000 users to crypto wallets", "Provide financial literacy education", "Enable cross-border remittances", "Support small business microloans"],
      totalGoal: "3,000,000 USD",
      achievements: ["Successfully onboarded 65,000 users", "Processed over $10M in transactions", "Reduced remittance costs by 70%", "Supported 2,000 small businesses"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation and Hero Combined Background */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold">FinSocial CHARITY</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/mission" className="text-blue-400 hover:text-blue-300 transition-colors">
                Mission
              </Link>
              <Link to="/commitments" className="text-gray-300 hover:text-white transition-colors">
                Commitments
              </Link>
              <Link to="/approach" className="text-gray-300 hover:text-white transition-colors">
                Approach
              </Link>
              <Link to="/impact" className="text-gray-300 hover:text-white transition-colors">
                Impact
              </Link>
              <Link to="/scholarship" className="text-gray-300 hover:text-white transition-colors">
                Scholarship
              </Link>
              <Link to="/who-we-are" className="text-gray-300 hover:text-white transition-colors">
                Who We Are
              </Link>
            </div>
            
            {/* Desktop Support Button */}
            <button 
              onClick={() => openModal('supportUs')}
              className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Support Us
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg z-50">
              <div className="px-6 py-4 space-y-4">
                <Link 
                  to="/mission" 
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mission
                </Link>
                <Link 
                  to="/commitments" 
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Commitments
                </Link>
                <Link 
                  to="/approach" 
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Approach
                </Link>
                <Link 
                  to="/impact" 
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Impact
                </Link>
                <Link 
                  to="/scholarship" 
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Scholarship
                </Link>
                <Link 
                  to="/who-we-are" 
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Who We Are
                </Link>
                <button 
                  onClick={() => {
                    openModal('supportUs')
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors text-left"
                >
                  Support Us
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-2xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-12 h-12 bg-white rounded transform rotate-45"></div>
                  </div>
                  <div className="text-blue-400 text-sm">
                    <div className="flex space-x-2 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
                <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Web3 Solutions for Social Change
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We are FinSocial Charity, a non-profit organization dedicated to building a future where Web3
                  technology is used as a force for good.
                </p>
              </div>
              <div className="hidden lg:block flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Blockchain Technology"
                    className="relative w-96 h-96 object-cover rounded-full opacity-80 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Commitments and Impact Section */}
      <section id="commitments" className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Commitments */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Our Commitments</h2>
                <button 
                  onClick={() => openModal('learnMoreCommitments')}
                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-2 transition-colors"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Education"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    We enable Web3 as a driver of social transformation by making its education and research accessible
                    to all, and advancing global solutions for local humanitarian impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Impact */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Our Impact</h2>
                <button 
                  onClick={() => openModal('learnMoreImpact')}
                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-2 transition-colors"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Global Impact"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    To date, we have helped over 2 million people in more than 54 countries by committing more than $23
                    million to fund 32 projects. Because we believe Web3 should be built by and benefit all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Our Approach</h2>
            <button 
              onClick={() => openModal('donateNow')}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Donate Now
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Statistics */}
            <div className="space-y-8">
              <div className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-5xl font-bold text-blue-400 mb-2">2,085,823</div>
                <div className="text-gray-400">Total Beneficiaries</div>
              </div>
              <div className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-5xl font-bold text-green-400 mb-2">10,033</div>
                <div className="text-gray-400">Amount Donations</div>
              </div>
              <div className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-5xl font-bold text-purple-400 mb-2">
                  1,037 <span className="text-2xl">BTC</span>
                </div>
                <div className="text-gray-400">Bitcoin Donations Raised</div>
              </div>
            </div>

            {/* Approach Details */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Direct Giving"
                    className="w-6 h-6 rounded object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">Direct Giving</h3>
                <p className="text-gray-300">
                  We transfer your donation directly to the end beneficiary - meaning 100% of your money goes to those
                  who need it most.
                </p>
              </div>

              <div className="space-y-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Transparency"
                    className="w-6 h-6 rounded object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">Transparency</h3>
                <p className="text-gray-300">
                  We revolutionize global giving by making it more transparent to address challenges facing the social
                  sector such as corruption, lack of trust in nonprofits, high global transfer fees, inefficient
                  processes and lack of accountability in donor spending.
                </p>
              </div>

              <div className="space-y-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Technology"
                    className="w-6 h-6 rounded object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">Transformative Tech</h3>
                <p className="text-gray-300">
                  We believe tech should serve people so we repurpose emerging tech as tools for social change.
                </p>
              </div>

              <div className="space-y-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Research"
                    className="w-6 h-6 rounded object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">Research</h3>
                <p className="text-gray-300">
                  To better understand and support Web3 solutions, we invest in the innovation, research and development
                  of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News and Projects */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured News and Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => openModal('projectDetails', project)}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <span>👥 {project.participants}</span>
                      <span>💰 {project.amount}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm ${
                      project.status === 'Completed' ? 'text-green-400' :
                      project.status === 'Funding' ? 'text-orange-400' : 'text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-green-400 text-sm">{project.progress}%</span>
                  </div>
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold">FinSocial CHARITY</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering change through blockchain transparency. Donate and make a difference today!
          </p>
          <button 
            onClick={() => openModal('donateNow')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
          >
            Donate Now
          </button>
        </div>
      </footer>

      {/* Modals */}
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
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🔗 Partnership</h4>
              <p className="text-sm text-gray-600 mb-3">Partner with us to amplify our impact.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                Become a Partner
              </button>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">📢 Spread the Word</h4>
              <p className="text-sm text-gray-600 mb-3">Share our mission with your network.</p>
              <button 
                onClick={() => openModal('newsletter')}
                className="bg-orange-600 text-white px-4 py-2 rounded text-sm"
              >
                Subscribe to Updates
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

      <Modal isOpen={modals.donateNow} onClose={() => closeModal('donateNow')} title="Make a Donation" size="lg">
        <div className="text-black">
          <p className="mb-6">Your donation helps us provide direct aid to those who need it most. Choose your preferred donation method:</p>
          
          <div className="space-y-4 mb-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-3">💳 Traditional Payment</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded">$25</button>
                <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded">$50</button>
                <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded">$100</button>
              </div>
              <input type="number" placeholder="Custom amount" className="w-full p-3 border rounded mb-4" />
              <div className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
                <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
                <input type="text" placeholder="Card Number" className="w-full p-3 border rounded" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM/YY" className="p-3 border rounded" />
                  <input type="text" placeholder="CVV" className="p-3 border rounded" />
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-3">₿ Cryptocurrency Donation</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 border rounded">
                  <div className="text-2xl mb-2">₿</div>
                  <div className="text-sm">Bitcoin</div>
                </div>
                <div className="text-center p-3 border rounded">
                  <div className="text-2xl mb-2">Ξ</div>
                  <div className="text-sm">Ethereum</div>
                </div>
                <div className="text-center p-3 border rounded">
                  <div className="text-2xl mb-2">◆</div>
                  <div className="text-sm">BNB</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Select a cryptocurrency to see the donation address and QR code.</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Complete Donation
            </button>
            <button onClick={() => closeModal('donateNow')} className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-6 rounded">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.learnMoreCommitments} onClose={() => closeModal('learnMoreCommitments')} title="Our Commitments" size="xl">
        <div className="text-black">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3">Education & Accessibility</h4>
              <p className="text-gray-700 mb-4">We believe that Web3 technology should be accessible to everyone, regardless of their technical background or economic status. Our educational initiatives include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Free online courses on blockchain and cryptocurrency</li>
                <li>Local workshops in underserved communities</li>
                <li>Multilingual educational resources</li>
                <li>Partnerships with educational institutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3">Research & Development</h4>
              <p className="text-gray-700 mb-4">We invest in cutting-edge research to advance Web3 technology for social good:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Blockchain solutions for humanitarian aid</li>
                <li>Decentralized identity systems for refugees</li>
                <li>Smart contracts for transparent governance</li>
                <li>Sustainable consensus mechanisms</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3">Global Impact</h4>
              <p className="text-gray-700 mb-4">Our commitment extends to creating lasting change worldwide:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Direct aid distribution using blockchain technology</li>
                <li>Financial inclusion programs in developing countries</li>
                <li>Disaster relief coordination through decentralized networks</li>
                <li>Supporting local communities with sustainable solutions</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button onClick={() => closeModal('learnMoreCommitments')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.learnMoreImpact} onClose={() => closeModal('learnMoreImpact')} title="Our Impact" size="xl">
        <div className="text-black">
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">2,085,823</div>
                <div className="text-gray-600">People Helped</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">54</div>
                <div className="text-gray-600">Countries Reached</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">$23M+</div>
                <div className="text-gray-600">Funds Distributed</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3">Key Achievements</h4>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
                  <h5 className="font-semibold">Emergency Relief Operations</h5>
                  <p className="text-gray-600">Provided immediate aid during natural disasters and humanitarian crises in over 20 countries.</p>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-gray-50">
                  <h5 className="font-semibold">Financial Inclusion Programs</h5>
                  <p className="text-gray-600">Enabled 500,000+ people to access digital financial services for the first time.</p>
                </div>
                <div className="p-4 border-l-4 border-purple-500 bg-gray-50">
                  <h5 className="font-semibold">Educational Initiatives</h5>
                  <p className="text-gray-600">Trained over 100,000 individuals in blockchain technology and digital literacy.</p>
                </div>
                <div className="p-4 border-l-4 border-orange-500 bg-gray-50">
                  <h5 className="font-semibold">Technology Innovation</h5>
                  <p className="text-gray-600">Developed 15+ open-source solutions for humanitarian organizations worldwide.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3">Success Stories</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-gray-700">"Thanks to FinSocial Charity's financial inclusion program, I was able to send money to my family safely and affordably." - Maria, Philippines</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-gray-700">"The blockchain education course helped me start my own tech business and support my community." - Ahmed, Kenya</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button onClick={() => closeModal('learnMoreImpact')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.projectDetails} onClose={() => closeModal('projectDetails')} title={selectedProject?.title || "Project Details"} size="xl">
        {selectedProject && (
          <div className="text-black">
            <div className="mb-6">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedProject.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  selectedProject.status === 'Funding' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {selectedProject.status}
                </span>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Progress</div>
                  <div className="font-bold text-green-600">{selectedProject.progress}%</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg">{selectedProject.participants}</div>
                  <div className="text-sm text-gray-600">Participants</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg">${selectedProject.amount}</div>
                  <div className="text-sm text-gray-600">Raised</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Project Description</h4>
                <p className="text-gray-700">{selectedProject.fullDescription}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Project Goals</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selectedProject.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
              
              {selectedProject.achievements && (
                <div>
                  <h4 className="font-bold text-lg mb-3">Achievements</h4>
                  <ul className="list-check space-y-2 text-gray-700">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold mb-2">Target Goal: {selectedProject.totalGoal}</h5>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${selectedProject.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">Help us reach our goal by making a donation today!</p>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => {
                  closeModal('projectDetails')
                  openModal('donateNow')
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              >
                Donate to This Project
              </button>
              <button onClick={() => closeModal('projectDetails')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={modals.newsletter} onClose={() => closeModal('newsletter')} title="Stay Updated" size="md">
        <div className="text-black">
          <p className="mb-6">Subscribe to our newsletter to receive updates on our projects and impact.</p>
          <form className="space-y-4 mb-6">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Project updates and impact reports</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Volunteer opportunities</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Partnership opportunities</span>
              </label>
            </div>
          </form>
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Subscribe
            </button>
            <button onClick={() => closeModal('newsletter')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Footer/>
    </div>
  )
}

export default Charity