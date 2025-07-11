import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const CharityNavigation = ({ onSupportClick }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: "/mission", label: "Mission" },
    { path: "/commitments", label: "Commitments" },
    { path: "/approach", label: "Approach" },
    { path: "/impact", label: "Impact" },
    { path: "/scholarship", label: "Scholarship" },
    { path: "/who-we-are", label: "Who We Are" }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/charity" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
          </div>
          <span className="text-xl font-bold">FinSocial CHARITY</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={index}
                to={item.path}
                className={`transition-colors ${
                  isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
        
        {/* Desktop Support Button */}
        <button 
          onClick={onSupportClick}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`block py-2 transition-colors ${
                    isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <button 
              onClick={() => {
                onSupportClick()
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
  )
}

export default CharityNavigation
