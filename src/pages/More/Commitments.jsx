import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import CharityNavigation from "../../components/CharityNavigation"

const Commitments = () => {
  const [modals, setModals] = useState({
    supportUs: false,
    joinCommitment: false
  })

  const [activeCommitment, setActiveCommitment] = useState('education')

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

  const commitments = {
    education: {
      title: "Education & Accessibility",
      icon: "🎓",
      description: "Making Web3 education accessible to everyone, regardless of background or location",
      initiatives: [
        {
          name: "Free Online Courses",
          description: "Comprehensive blockchain and cryptocurrency courses available in 15+ languages",
          stats: "150,000+ students enrolled"
        },
        {
          name: "Community Workshops",
          description: "Local workshops in underserved communities worldwide",
          stats: "500+ workshops conducted"
        },
        {
          name: "Educational Partnerships",
          description: "Collaborations with universities and educational institutions",
          stats: "100+ partner institutions"
        },
        {
          name: "Digital Literacy Programs",
          description: "Basic digital skills training for Web3 readiness",
          stats: "75,000+ people trained"
        }
      ],
      goals: [
        "Reach 1 million students by 2025",
        "Launch programs in 100+ countries",
        "Create curriculum for all skill levels",
        "Establish Web3 certification standards"
      ]
    },
    research: {
      title: "Research & Development",
      icon: "🔬",
      description: "Investing in cutting-edge research to advance Web3 technology for social good",
      initiatives: [
        {
          name: "Humanitarian Blockchain Solutions",
          description: "Developing blockchain applications for aid distribution and transparency",
          stats: "$5M+ invested in R&D"
        },
        {
          name: "Decentralized Identity Systems",
          description: "Creating secure identity solutions for refugees and displaced persons",
          stats: "3 pilot programs launched"
        },
        {
          name: "Smart Contract Governance",
          description: "Building transparent governance systems for NGOs and communities",
          stats: "25+ organizations using our tools"
        },
        {
          name: "Sustainable Consensus Mechanisms",
          description: "Researching eco-friendly blockchain technologies",
          stats: "50% reduction in energy consumption"
        }
      ],
      goals: [
        "Open-source 100% of our research",
        "Collaborate with 50+ research institutions",
        "Publish 25+ peer-reviewed papers annually",
        "Create industry standards for humanitarian tech"
      ]
    },
    global: {
      title: "Global Impact",
      icon: "🌍",
      description: "Creating lasting change worldwide through blockchain-powered solutions",
      initiatives: [
        {
          name: "Direct Aid Distribution",
          description: "Using blockchain for transparent and efficient aid delivery",
          stats: "$23M+ distributed directly"
        },
        {
          name: "Financial Inclusion Programs",
          description: "Bringing banking services to the unbanked through crypto wallets",
          stats: "500,000+ people onboarded"
        },
        {
          name: "Disaster Relief Coordination",
          description: "Coordinating emergency response through decentralized networks",
          stats: "15+ disaster responses coordinated"
        },
        {
          name: "Community Empowerment",
          description: "Supporting local communities with sustainable tech solutions",
          stats: "200+ communities supported"
        }
      ],
      goals: [
        "Reach 10 million beneficiaries by 2030",
        "Operate in 100+ countries",
        "Achieve 100% transparency in all operations",
        "Reduce operational costs by 50%"
      ]
    },
    sustainability: {
      title: "Environmental Sustainability",
      icon: "🌱",
      description: "Ensuring our technology solutions are environmentally responsible",
      initiatives: [
        {
          name: "Carbon Neutral Operations",
          description: "Offsetting all carbon emissions from our blockchain operations",
          stats: "Carbon neutral since 2022"
        },
        {
          name: "Green Blockchain Research",
          description: "Developing energy-efficient consensus mechanisms",
          stats: "3 new protocols developed"
        },
        {
          name: "Renewable Energy Partnerships",
          description: "Powering operations with 100% renewable energy",
          stats: "100% renewable since 2023"
        },
        {
          name: "Environmental Impact Tracking",
          description: "Transparent reporting of our environmental footprint",
          stats: "Monthly impact reports published"
        }
      ],
      goals: [
        "Achieve net-negative carbon emissions by 2025",
        "Influence 100+ projects to adopt green practices",
        "Develop industry-leading sustainability standards",
        "Plant 1 million trees through our initiatives"
      ]
    }
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
            Our Commitments
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Dedicated to making Web3 technology a force for positive change through education, research, and global impact
          </p>
          <button 
            onClick={() => openModal('joinCommitment')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Join Our Mission
          </button>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-300">Every transaction and decision is recorded on the blockchain for complete accountability</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Inclusion</h3>
              <p className="text-gray-300">Building technology that serves everyone, leaving no one behind in the digital revolution</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">Pushing the boundaries of what's possible with blockchain technology for social good</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-300">Ensuring our solutions are environmentally responsible and future-proof</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Commitments */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Key Commitments</h2>
          
          {/* Commitment Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-lg p-1 flex flex-wrap gap-1">
              {Object.entries(commitments).map(([key, commitment]) => (
                <button
                  key={key}
                  onClick={() => setActiveCommitment(key)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors flex items-center space-x-2 ${
                    activeCommitment === key ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{commitment.icon}</span>
                  <span className="hidden sm:inline">{commitment.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Commitment Details */}
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{commitments[activeCommitment].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{commitments[activeCommitment].title}</h3>
              <p className="text-xl text-gray-300">{commitments[activeCommitment].description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Current Initiatives</h4>
                <div className="space-y-4">
                  {commitments[activeCommitment].initiatives.map((initiative, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4">
                      <h5 className="font-bold text-lg mb-2">{initiative.name}</h5>
                      <p className="text-gray-300 mb-2">{initiative.description}</p>
                      <div className="text-blue-400 font-semibold">{initiative.stats}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6">Future Goals</h4>
                <div className="space-y-4">
                  {commitments[activeCommitment].goals.map((goal, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-gray-300">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Tracking Our Progress</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300 mb-4">Transparency Score</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">78%</div>
              <div className="text-gray-300 mb-4">Education Goals Met</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300 mb-4">Carbon Neutral Operations</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Hold Us Accountable</h2>
          <p className="text-xl mb-8">
            We believe in radical transparency. Track our progress, access our reports, and help us stay committed to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Progress Reports
            </button>
            <button 
              onClick={() => openModal('joinCommitment')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={modals.supportUs} onClose={() => closeModal('supportUs')} title="Support Our Commitments" size="lg">
        <div className="text-black">
          <p className="mb-6">Help us fulfill our commitments to making Web3 technology accessible and beneficial for all.</p>
          <div className="flex justify-end">
            <button onClick={() => closeModal('supportUs')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.joinCommitment} onClose={() => closeModal('joinCommitment')} title="Join Our Mission" size="lg">
        <div className="text-black">
          <p className="mb-6">Be part of our commitment to democratizing Web3 technology for social good.</p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🎓 Education Advocate</h4>
              <p className="text-sm text-gray-600">Help create and deliver educational content</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🔬 Research Contributor</h4>
              <p className="text-sm text-gray-600">Contribute to our open-source research initiatives</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-bold mb-2">🌍 Global Ambassador</h4>
              <p className="text-sm text-gray-600">Represent our mission in your local community</p>
            </div>
          </div>
          
          <form className="space-y-4 mb-6">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
            <select className="w-full p-3 border rounded">
              <option>How would you like to contribute?</option>
              <option>Education & Training</option>
              <option>Research & Development</option>
              <option>Community Outreach</option>
              <option>Technical Development</option>
            </select>
            <textarea placeholder="Tell us about your background and interests" rows="3" className="w-full p-3 border rounded"></textarea>
          </form>
          
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Join Now
            </button>
            <button onClick={() => closeModal('joinCommitment')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Footer/>
    </div>
  )
}

export default Commitments
