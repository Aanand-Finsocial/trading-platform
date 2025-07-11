

import { useState } from "react"
import Footer from "../../components/Footer/Footer"

const Travel = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const stats = [
    {
      number: "3,427,699",
      label: "Number of Transactions",
      bgColor: "bg-cyan-500",
    },
    {
      number: "$11.2 Trillion",
      label: "Transaction volume",
      bgColor: "bg-indigo-600",
    },
    {
      number: "Access to all Finsocial entities globally",
      label: "",
      bgColor: "bg-purple-600",
      isText: true,
    },
    {
      number: "69",
      label: "VASPs connected in GTR's network",
      bgColor: "bg-teal-500",
    },
  ]

  const features = [
    {
      icon: "🌐",
      title: "Holistic",
      description:
        "One platform across regions - Finsocial helps streamline your Travel Rule requirements with an FATF-compliant solution. We regularly analyze data-driven news and stay on top of regulatory changes to enable you to operate with peace of mind.",
    },
    {
      icon: "🔒",
      title: "Secure",
      description:
        "Our experience managing large volumes of sensitive data means we are able to offer best-in-class data security. Our advantage is that only you hold the encryption key to your data so no outsiders can access it!",
    },
    {
      icon: "🔄",
      title: "Seamless",
      description:
        "We offer an easy, one-time integration with the largest exchange in the world (Finsocial). Ensure that your operations stay uninterrupted and that you stay on track with your business goals.",
    },
  ]

  const newsItems = [
    {
      title: "What is the Travel Rule?",
      description: "The Travel Rule is a global regulatory standard that requires Virtual Asset Service...",
      date: "2025-03-31",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=center&auto=format",
    },
    {
      title: "HashKey Global Joins Forces with...",
      description: "HashKey Global, a leading licensed virtual asset exchange, is pleased to announce its...",
      date: "2025-03-07",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center&auto=format",
    },
    {
      title: "Ceffu Joins Forces with Global Trav...",
      description: "We are pleased to share that Ceffu, an institutional-grade custody platform, is now...",
      date: "2024-09-13",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format",
    },
  ]

  const faqs = [
    {
      question: "Who is the Financial Action Task Force (FATF)?",
      answer:
        "The Financial Action Task Force (FATF) is an inter-governmental body established to develop policies to combat money laundering and terrorist financing.",
    },
    {
      question: "What is the FATF Travel Rule?",
      answer:
        "The FATF Travel Rule requires financial institutions to share certain information about the sender and recipient when transferring funds.",
    },
    {
      question: "Do I need to comply with the FATF Travel Rule?",
      answer:
        "If you are a Virtual Asset Service Provider (VASP), you likely need to comply with the Travel Rule depending on your jurisdiction.",
    },
    {
      question: "How does the Global Travel Rule work?",
      answer:
        "Our platform facilitates secure information sharing between VASPs to ensure Travel Rule compliance while maintaining data privacy.",
    },
  ]

return (
    <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-gray-900">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">F</span>
                        </div>
                        <span className="text-xl font-bold">Finsocial</span>
                        <span className="text-sm text-gray-400">Travel Rule</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-300 hover:text-white">
                            Demo
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Documentation
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            FAQ
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            About
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Blog
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium transition-colors">
                            GET STARTED
                        </button>
                        <button className="text-gray-300 hover:text-white">LOG IN</button>
                    </div>
                </div>
            </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            Ready for
                            <br />
                            Travel Rule
                            <br />
                            Compliance?
                        </h1>
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center">
                            GET STARTED
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`${stat.bgColor} rounded-2xl p-6 text-white ${
                                    index === 2 ? "col-span-1 row-span-2" : ""
                                } ${index === 1 ? "row-span-2" : ""}`}
                            >
                                {stat.isText ? (
                                    <div className="h-full flex items-center">
                                        <h3 className="text-2xl font-bold leading-tight">{stat.number}</h3>
                                    </div>
                                ) : (
                                    <>
                                        <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                                        <div className="text-sm opacity-90">{stat.label}</div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-300">
                    Why use the Global Travel Rule platform?
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* News Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-300">Check Out Our Latest News</h2>
                    <button className="text-gray-400 hover:text-white">More</button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl overflow-hidden">
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                                <p className="text-gray-500 text-sm">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-300">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                <div className="flex items-center">
                                    <span className="text-indigo-500 font-bold text-xl mr-6">{String(index + 1).padStart(2, "0")}</span>
                                    <span className="text-lg font-medium">{faq.question}</span>
                                </div>
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openFaq === index ? "rotate-45" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-6">
                                    <div className="ml-12 text-gray-400 leading-relaxed">{faq.answer}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer/>
    </div>
)
}

export default Travel