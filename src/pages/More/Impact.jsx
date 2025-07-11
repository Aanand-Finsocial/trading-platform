import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import CharityNavigation from "../../components/CharityNavigation"

const Impact = () => {
  const [modals, setModals] = useState({
    supportUs: false,
    donateNow: false,
    projectDetails: false
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (modalName, project = null) => {
    if (project) {
      setSelectedProject(project)
    }
    setModals(prev => ({ ...prev, [modalName]: true }))
  }

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }))
    if (modalName === 'projectDetails') {
      setSelectedProject(null)
    }
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

  const impactProjects = [
    {
      id: 1,
      title: "Emergency Relief Operations",
      location: "Global",
      beneficiaries: "250,000+",
      amount: "$8.5M",
      description: "Rapid response to natural disasters and humanitarian crises",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "Provided immediate aid during 15 major disasters",
        "Distributed emergency supplies to 250,000+ people",
        "Established temporary shelters in 8 countries",
        "Coordinated with 50+ local organizations"
      ]
    },
    {
      id: 2,
      title: "Financial Inclusion Program",
      location: "Africa & Asia",
      beneficiaries: "500,000+",
      amount: "$12.3M",
      description: "Bringing banking services to the unbanked through blockchain",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "Onboarded 500,000+ users to digital wallets",
        "Processed $50M+ in transactions",
        "Reduced remittance costs by 70%",
        "Supported 25,000 small businesses"
      ]
    },
    {
      id: 3,
      title: "Education & Digital Literacy",
      location: "Global",
      beneficiaries: "150,000+",
      amount: "$3.2M",
      description: "Teaching blockchain and digital skills to underserved communities",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "Trained 150,000+ individuals in Web3 technology",
        "Established 200+ learning centers",
        "Created curriculum in 15 languages",
        "Achieved 85% job placement rate"
      ]
    },
    {
      id: 4,
      title: "Healthcare Access Initiative",
      location: "Latin America",
      beneficiaries: "80,000+",
      amount: "$4.1M",
      description: "Improving healthcare access through decentralized medical records",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "Digitized medical records for 80,000+ patients",
        "Reduced healthcare costs by 40%",
        "Improved treatment outcomes by 60%",
        "Trained 500+ healthcare workers"
      ]
    }
  ]

  const globalStats = [
    { value: "2,085,823", label: "Lives Impacted", icon: "👥" },
    { value: "54", label: "Countries Served", icon: "🌍" },
    { value: "$23M+", label: "Funds Distributed", icon: "💰" },
    { value: "32", label: "Active Projects", icon: "🚀" },
    { value: "500+", label: "Partner Organizations", icon: "🤝" },
    { value: "95%", label: "Transparency Score", icon: "📊" }
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
            Our Global Impact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transforming lives worldwide through transparent, blockchain-powered humanitarian initiatives
          </p>
          <button 
            onClick={() => openModal('donateNow')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Join Our Impact
          </button>
        </div>
      </section>

      {/* Global Statistics */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Impact by Numbers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Projects */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Major Impact Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {impactProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => openModal('projectDetails', project)}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-blue-400">{project.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-400">{project.beneficiaries}</div>
                      <div className="text-sm text-gray-400">Beneficiaries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{project.amount}</div>
                      <div className="text-sm text-gray-400">Investment</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey of Impact</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
            <div className="space-y-12">
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2021</h3>
                  <p className="text-gray-300">Founded FinSocial Charity with a mission to democratize Web3 for social good</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">2022</h3>
                  <p className="text-gray-300">Launched first financial inclusion program, reaching 100,000 users in 6 months</p>
                </div>
              </div>
              
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2023</h3>
                  <p className="text-gray-300">Expanded to 54 countries, distributed over $20M in aid, and helped 2M+ people</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center relative">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">2024</h3>
                  <p className="text-gray-300">Target: Reach 5M beneficiaries and establish presence in 75 countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Stories of Change</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Success Story"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">Maria Santos</h3>
              <p className="text-blue-400 text-center mb-4">Small Business Owner, Philippines</p>
              <p className="text-gray-300 italic">
                "Through FinSocial's financial inclusion program, I was able to access digital banking for the first time. 
                Now I can send money to my family safely and grow my business with microloans."
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Success Story"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">Ahmed Hassan</h3>
              <p className="text-blue-400 text-center mb-4">Developer, Kenya</p>
              <p className="text-gray-300 italic">
                "The blockchain education program changed my life. I went from having no technical skills to becoming 
                a certified Web3 developer and now I'm building solutions for my community."
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="Success Story"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">Dr. Elena Rodriguez</h3>
              <p className="text-blue-400 text-center mb-4">Healthcare Worker, Mexico</p>
              <p className="text-gray-300 italic">
                "The healthcare initiative helped us digitize patient records for our rural clinic. 
                Now we can provide better care and patients have secure access to their medical history."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Amplify Our Impact</h2>
          <p className="text-xl mb-8">
            Every contribution creates a ripple effect of positive change. Join us in building a more equitable world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openModal('donateNow')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Make a Donation
            </button>
            <button 
              onClick={() => openModal('supportUs')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={modals.supportUs} onClose={() => closeModal('supportUs')} title="Support Our Impact" size="lg">
        <div className="text-black">
          <p className="mb-6">Join us in creating meaningful change through blockchain technology.</p>
          <div className="flex justify-end">
            <button onClick={() => closeModal('supportUs')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.donateNow} onClose={() => closeModal('donateNow')} title="Support Our Impact" size="lg">
        <div className="text-black">
          <p className="mb-6">Your donation directly contributes to our global impact initiatives.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$100</button>
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$250</button>
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$500</button>
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

      <Modal isOpen={modals.projectDetails} onClose={() => closeModal('projectDetails')} title={selectedProject?.title || "Project Details"} size="xl">
        {selectedProject && (
          <div className="text-black">
            <div className="mb-6">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg text-green-600">{selectedProject.beneficiaries}</div>
                  <div className="text-sm text-gray-600">Beneficiaries</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg text-blue-600">{selectedProject.amount}</div>
                  <div className="text-sm text-gray-600">Investment</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg">{selectedProject.location}</div>
                  <div className="text-sm text-gray-600">Location</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Project Description</h4>
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
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
                Support This Initiative
              </button>
              <button onClick={() => closeModal('projectDetails')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Footer/>
    </div>
  )
}

export default Impact
