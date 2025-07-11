import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import Footer from '../../components/Footer/Footer'

const Careers = () => {
  const { theme } = useTheme()
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build and maintain our trading platform frontend using React, TypeScript, and modern web technologies.',
      requirements: ['React/TypeScript expertise', 'Trading platform experience', 'WebSocket implementation', 'Performance optimization'],
      salary: '$120K - $180K'
    },
    {
      id: 2,
      title: 'Blockchain Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop and maintain blockchain infrastructure, smart contracts, and DeFi protocols.',
      requirements: ['Solidity programming', 'Web3 integration', 'DeFi protocols', 'Security best practices'],
      salary: '$140K - $200K'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and development for our cryptocurrency trading features.',
      requirements: ['Product management experience', 'FinTech background', 'User research', 'Data-driven decisions'],
      salary: '$130K - $170K'
    },
    {
      id: 4,
      title: 'Security Engineer',
      department: 'Security',
      location: 'London, UK',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Ensure the security of our platform, conduct security audits, and implement security measures.',
      requirements: ['Cybersecurity expertise', 'Penetration testing', 'Compliance knowledge', 'Incident response'],
      salary: '$110K - $160K'
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop and execute marketing strategies to grow our user base and brand awareness.',
      requirements: ['Digital marketing', 'Content strategy', 'Social media', 'Analytics'],
      salary: '$80K - $120K'
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze trading data, build predictive models, and provide insights for business decisions.',
      requirements: ['Python/R expertise', 'Machine learning', 'Statistical analysis', 'Financial markets knowledge'],
      salary: '$125K - $175K'
    },
    {
      id: 7,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Help customers succeed with our platform and ensure high satisfaction rates.',
      requirements: ['Customer service experience', 'FinTech knowledge', 'Communication skills', 'Problem solving'],
      salary: '$70K - $100K'
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Singapore',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage our cloud infrastructure, CI/CD pipelines, and deployment processes.',
      requirements: ['AWS/GCP expertise', 'Kubernetes', 'Docker', 'Monitoring tools'],
      salary: '$100K - $150K'
    }
  ]

  const departments = ['all', 'Engineering', 'Product', 'Security', 'Marketing', 'Data', 'Customer Success']
  const locations = ['all', 'Remote', 'San Francisco, CA', 'New York, NY', 'London, UK', 'Austin, TX', 'Seattle, WA', 'Singapore']

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with equity options',
      icon: 'fas fa-dollar-sign'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: 'fas fa-heart'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible scheduling',
      icon: 'fas fa-laptop-house'
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and conference attendance',
      icon: 'fas fa-graduation-cap'
    },
    {
      title: 'Crypto Benefits',
      description: 'Cryptocurrency bonuses and trading fee discounts',
      icon: 'fas fa-coins'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events',
      icon: 'fas fa-users'
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation
    return departmentMatch && locationMatch
  })

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Join the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future</span> of Finance
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Help us build the world's leading cryptocurrency exchange. Join our team of innovators, 
            creators, and visionaries who are shaping the future of digital finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#openings"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Open Positions
            </a>
            <Link
              to="/about"
              className={`px-8 py-4 border-2 font-semibold rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Learn About Us
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`p-6 rounded-2xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${benefit.icon} text-white text-xl`}></i>
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{benefit.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings Section */}
        <div id="openings">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Open Positions</h2>

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className={`p-6 rounded-2xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className={`flex items-center ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <i className="fas fa-building mr-2"></i>
                        {job.department}
                      </span>
                      <span className={`flex items-center ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {job.location}
                      </span>
                      <span className={`flex items-center ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <i className="fas fa-clock mr-2"></i>
                        {job.type}
                      </span>
                      <span className={`flex items-center ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <i className="fas fa-star mr-2"></i>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="text-blue-600 font-semibold text-lg mb-2">{job.salary}</div>
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{job.description}</p>
                
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Key Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <i className={`fas fa-search text-4xl mb-4 ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}></i>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                No positions found
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Try adjusting your filters or check back later for new openings
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Don't see the perfect role?
          </h2>
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Send Your Resume
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Careers
