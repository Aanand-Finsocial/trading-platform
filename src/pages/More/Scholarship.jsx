import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import CharityNavigation from "../../components/CharityNavigation"

const Scholarship = () => {
  const [modals, setModals] = useState({
    apply: false,
    donate: false,
    details: false,
    supportUs: false
  })

  const [selectedScholarship, setSelectedScholarship] = useState(null)

  const openModal = (modalName, scholarship = null) => {
    if (scholarship) {
      setSelectedScholarship(scholarship)
    }
    setModals(prev => ({ ...prev, [modalName]: true }))
  }

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }))
    if (modalName === 'details') {
      setSelectedScholarship(null)
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

  const scholarships = [
    {
      id: 1,
      title: "Web3 Developer Scholarship",
      amount: "$5,000",
      duration: "1 Year",
      deadline: "March 31, 2024",
      description: "Supporting aspiring blockchain developers from underserved communities",
      requirements: ["Basic programming knowledge", "Demonstrated financial need", "Commitment to social impact"],
      benefits: ["Full course access", "Mentorship program", "Job placement assistance"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Blockchain for Social Good",
      amount: "$3,000",
      duration: "6 Months",
      deadline: "April 15, 2024",
      description: "Training social entrepreneurs to use blockchain for community development",
      requirements: ["Social impact background", "Community leadership experience", "Basic tech literacy"],
      benefits: ["Certification program", "Project funding", "Network access"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Women in Web3 Initiative",
      amount: "$4,000",
      duration: "8 Months",
      deadline: "May 1, 2024",
      description: "Empowering women to become leaders in the decentralized economy",
      requirements: ["Female identification", "Interest in blockchain", "Leadership potential"],
      benefits: ["Skills training", "Mentorship network", "Conference attendance"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
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
            Scholarship Programs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Empowering the next generation of Web3 innovators through education and opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openModal('apply')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply for Scholarship
            </button>
            <button 
              onClick={() => openModal('donate')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Fund a Scholar
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Scholars Supported</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5M</div>
              <div className="text-gray-300">Total Scholarships</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300">Job Placement Rate</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">40+</div>
              <div className="text-gray-300">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Scholarships */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Available Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <img
                  src={scholarship.image}
                  alt={scholarship.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{scholarship.title}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">{scholarship.amount}</div>
                      <div className="text-sm text-gray-400">{scholarship.duration}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{scholarship.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                      Deadline: {scholarship.deadline}
                    </div>
                    <button 
                      onClick={() => openModal('details', scholarship)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Scholar"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Maria Rodriguez</h3>
                  <p className="text-gray-400">Web3 Developer, Mexico</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The scholarship program changed my life. I went from having no technical background to becoming a blockchain developer and now I'm building solutions for my community."
              </p>
              <div className="text-sm text-blue-400">Web3 Developer Scholarship Recipient 2023</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Scholar"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">David Chen</h3>
                  <p className="text-gray-400">Social Entrepreneur, Kenya</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Through the Blockchain for Social Good program, I learned to use technology to solve real problems in my community. Now I run a microfinance platform helping local farmers."
              </p>
              <div className="text-sm text-blue-400">Social Good Scholarship Recipient 2022</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={modals.apply} onClose={() => closeModal('apply')} title="Apply for Scholarship" size="lg">
        <div className="text-black">
          <p className="mb-6">Start your journey in Web3 with our scholarship programs. Please fill out this application to be considered.</p>
          
          <form className="space-y-4 mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full p-3 border rounded" />
              <input type="text" placeholder="Last Name" className="w-full p-3 border rounded" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Country" className="w-full p-3 border rounded" />
            <select className="w-full p-3 border rounded">
              <option>Select Scholarship Program</option>
              <option>Web3 Developer Scholarship</option>
              <option>Blockchain for Social Good</option>
              <option>Women in Web3 Initiative</option>
            </select>
            <textarea placeholder="Tell us about your background and why you're interested in Web3" rows="4" className="w-full p-3 border rounded"></textarea>
            <textarea placeholder="Describe your financial need and how this scholarship would help" rows="3" className="w-full p-3 border rounded"></textarea>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">I meet the eligibility requirements for my selected program</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">I commit to completing the program if selected</span>
              </label>
            </div>
          </form>
          
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Submit Application
            </button>
            <button onClick={() => closeModal('apply')} className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-6 rounded">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.details} onClose={() => closeModal('details')} title={selectedScholarship?.title || "Scholarship Details"} size="xl">
        {selectedScholarship && (
          <div className="text-black">
            <div className="mb-6">
              <img 
                src={selectedScholarship.image} 
                alt={selectedScholarship.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg text-green-600">{selectedScholarship.amount}</div>
                  <div className="text-sm text-gray-600">Award Amount</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg">{selectedScholarship.duration}</div>
                  <div className="text-sm text-gray-600">Program Duration</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-bold text-lg text-red-600">{selectedScholarship.deadline}</div>
                  <div className="text-sm text-gray-600">Application Deadline</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Program Description</h4>
                <p className="text-gray-700">{selectedScholarship.description}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Requirements</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selectedScholarship.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Program Benefits</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selectedScholarship.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => {
                  closeModal('details')
                  openModal('apply')
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              >
                Apply Now
              </button>
              <button onClick={() => closeModal('details')} className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={modals.donate} onClose={() => closeModal('donate')} title="Fund a Scholar" size="lg">
        <div className="text-black">
          <p className="mb-6">Help us provide life-changing opportunities to aspiring Web3 innovators from underserved communities.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$500</button>
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$1,000</button>
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded">$2,500</button>
          </div>
          
          <div className="space-y-4 mb-6">
            <input type="number" placeholder="Custom amount" className="w-full p-3 border rounded" />
            <select className="w-full p-3 border rounded">
              <option>Support any scholarship program</option>
              <option>Web3 Developer Scholarship</option>
              <option>Blockchain for Social Good</option>
              <option>Women in Web3 Initiative</option>
            </select>
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" />
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg mb-6">
            <h5 className="font-semibold mb-2">Impact of Your Donation:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• $500 covers course materials for one student</li>
              <li>• $1,000 provides 3 months of mentorship</li>
              <li>• $2,500 sponsors a complete scholarship program</li>
            </ul>
          </div>
          
          <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Donate Now
            </button>
            <button onClick={() => closeModal('donate')} className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-6 rounded">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modals.supportUs} onClose={() => closeModal('supportUs')} title="Support FinSocial Charity" size="lg">
        <div className="text-black">
          <p className="mb-6">Support our scholarship programs and help educate the next generation of Web3 innovators.</p>
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

export default Scholarship
