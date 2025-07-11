import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { ChevronRight, Rocket, CreditCard, Store, Star, TrendingUp, Users, Trophy, Zap, Shield, Play, Sparkles } from 'lucide-react';

const FanToken = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(2);
  const [activeTab, setActiveTab] = useState('fan');
  const [mounted, setMounted] = useState(false);
  
  // Modal states
  const [showTeamSelectionModal, setShowTeamSelectionModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showLaunchpadModal, setShowLaunchpadModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showMarketplaceModal, setShowMarketplaceModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isJoining, setIsJoining] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Team logos for the top bar
  const teamLogos = [
    { id: 'lazio', name: 'Lazio', src: 'https://cryptologos.cc/logos/lazio-fan-token-lazio-logo.png' },
    { id: 'porto', name: 'Porto', src: 'https://cryptologos.cc/logos/fc-porto-fan-token-porto-logo.png' },
    { id: 'santos', name: 'Santos', src: 'https://cryptologos.cc/logos/santos-fc-fan-token-santos-logo.png' },
    { id: 'juventus', name: 'Juventus', src: 'https://cryptologos.cc/logos/juventus-fan-token-juve-logo.png' }
  ];

  // Featured teams data
  const featuredTeams = [
    {
      id: 'lazio',
      name: 'S.S. Lazio',
      shortName: 'LAZIO',
      logo: 'https://cryptologos.cc/logos/lazio-fan-token-lazio-logo.png',
      price: 0.881,
      usdPrice: 0.88,
      change: '+12.5%',
      isPositive: true,
      volume: '2.4M'
    },
    {
      id: 'porto',
      name: 'FC Porto',
      shortName: 'PORTO',
      logo: 'https://cryptologos.cc/logos/fc-porto-fan-token-porto-logo.png',
      price: 0.91,
      usdPrice: 0.91,
      change: '+8.2%',
      isPositive: true,
      volume: '1.8M'
    },
    {
      id: 'santos',
      name: 'Santos FC',
      shortName: 'SANTOS',
      logo: 'https://cryptologos.cc/logos/santos-fc-fan-token-santos-logo.png',
      price: 2.342,
      usdPrice: 2.34,
      change: '-3.1%',
      isPositive: false,
      volume: '3.2M'
    }
  ];

  const benefits = [
    {
      icon: <Trophy className="w-5 h-5" />,
      text: 'Support the teams you love with FinSocial Fan Tokens'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Influence team decisions through Fan Voting Polls'
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: 'Unlock Fan Badges to win special rewards and privileges'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: 'Be first to buy limited edition NFTs from your favorite teams'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: 'Score experiences that money can\'t buy with FinSocial Fan Tokens'
    }
  ];

  const features = [
    {
      title: 'Launchpad',
      description: 'FinSocial Fan Token Launch Platform',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Buy',
      description: 'Using Bank Card',
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: 'Marketplace',
      description: 'On Spot Market',
      icon: <Store className="w-8 h-8" />
    }
  ];

  // Button handlers
  const handleChooseTeam = () => {
    setShowTeamSelectionModal(true);
  };

  const handleJoinNow = () => {
    setIsJoining(true);
    setTimeout(() => {
      setIsJoining(false);
      alert('Welcome to FC Shakhtar Fanverse! Check your dashboard for exclusive content.');
      navigate('/fan-dashboard');
    }, 2000);
  };

  const handleWatchDemo = () => {
    setShowDemoModal(true);
  };

  const handleBrowseAllTeams = () => {
    navigate('/fan-tokens/teams');
  };

  const handleTradeNow = (team) => {
    setSelectedTeam(team);
    setShowMarketplaceModal(true);
  };

  const handleLaunchpad = () => {
    setShowLaunchpadModal(true);
  };

  const handleBuyWithCard = () => {
    setShowBuyModal(true);
  };

  const handleMarketplace = () => {
    setShowMarketplaceModal(true);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Modal close handlers
  const closeTeamSelectionModal = () => {
    setShowTeamSelectionModal(false);
  };

  const closeDemoModal = () => {
    setShowDemoModal(false);
  };

  const closeLaunchpadModal = () => {
    setShowLaunchpadModal(false);
  };

  const closeBuyModal = () => {
    setShowBuyModal(false);
  };

  const closeMarketplaceModal = () => {
    setShowMarketplaceModal(false);
    setSelectedTeam(null);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`relative min-h-screen overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-800' : 'bg-gradient-to-br from-white via-gray-50 to-slate-100'}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
            }}
          />
        </div>

        {/* Top Navigation Bar */}
        <div className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-wrap justify-center gap-4 p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-lg border shadow-lg`}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {teamLogos.map((team, index) => (
                  <div
                    key={team.id}
                    className="group relative"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 p-2 rounded-xl ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 cursor-pointer hover:scale-105`}>
                      <img
                        src={team.src || "/placeholder.svg"}
                        alt={team.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'} text-xs px-2 py-1 rounded-lg whitespace-nowrap`}>
                        {team.name}
                      </div>
                    </div>
                  </div>
                ))}
                <button 
                  onClick={handleChooseTeam}
                  className={`ml-4 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} shadow-lg`}
                >
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  <span className="hidden sm:inline">Choose Team</span>
                  <span className="sm:hidden">Choose</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50' : 'bg-blue-50 text-blue-600 border border-blue-200'}`}>
                <Play className="w-4 h-4 mr-2" />
                🚀 New Fan Experience
              </div>
              
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                FC Shakhtar
                <span className={`block ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Fanverse
                </span>
              </h1>
              
              <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Discover a brand new fanverse with FC Shakhtar. Connect, engage, and be part of the future of fan interaction with cutting-edge blockchain technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleJoinNow}
                disabled={isJoining}
                className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  isJoining 
                    ? 'opacity-75 cursor-not-allowed' 
                    : theme === 'dark' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <span className="flex items-center">
                  {isJoining ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Now
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </span>
              </button>
              
              <button 
                onClick={handleWatchDemo}
                className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'border-2 border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                <span className="flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <div className="flex space-x-3">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? theme === 'dark' ? 'bg-blue-500 scale-125' : 'bg-blue-600 scale-125'
                    : theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Teams Section */}
      <div className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-16">
            <div className={`w-1 h-12 md:h-16 rounded-full mr-0 md:mr-8 mb-4 md:mb-0 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            <div>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Featured 
                <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}> Teams</span>
              </h2>
              <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Top performing fan tokens with live metrics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
            <div className="lg:col-span-1">
              <div className="space-y-8 lg:sticky lg:top-8">
                <div className={`p-6 md:p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'}`}>
                  <p className={`text-base md:text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Find top teams on FinSocial and explore Fan Tokens to enjoy an all-new fan engagement experience with real-time trading.
                  </p>
                  <button 
                    onClick={handleBrowseAllTeams}
                    className={`group flex items-center font-semibold transition-all duration-300 ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                  >
                    Browse All Teams
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {featuredTeams.map((team, index) => (
                <div
                  key={team.id}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${theme === 'dark' ? 'bg-gray-700 border border-gray-600 hover:border-gray-500 hover:shadow-xl' : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl'}`}
                >
                  {/* Team Header */}
                  <div className={`relative h-32 md:h-40 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-gray-600 to-gray-700' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                    {/* Price change badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        team.isPositive 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-red-100 text-red-700 border border-red-200'
                      }`}>
                        {team.change}
                      </div>
                    </div>

                    {/* Team logo and volume */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className={`w-16 h-16 md:w-20 md:h-20 p-3 rounded-xl ${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                        <img
                          src={team.logo || "/placeholder.svg"}
                          alt={team.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {team.volume}
                        </div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>24h Volume</div>
                      </div>
                    </div>
                  </div>

                  {/* Team Info */}
                  <div className="relative z-10 p-4 md:p-6 space-y-4">
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {team.name}
                      </h3>
                      <p className={`text-sm font-semibold tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{team.shortName}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{team.price}</span>
                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>USDT</span>
                      </div>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>≈ ${team.usdPrice} USD</p>
                    </div>

                    {/* Action button */}
                    <button 
                      onClick={() => handleTradeNow(team)}
                      className={`w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                    >
                      Trade Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fan Benefits Section */}
      <div className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Write the 
              <span className={`block ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                future
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal">with your team</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className={`p-2 rounded-2xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
              <div className="flex">
                <button
                  className={`px-6 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 ${
                    activeTab === 'fan'
                      ? theme === 'dark' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'bg-blue-500 text-white shadow-lg'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('fan')}
                >
                  As a Fan
                </button>
                <button
                  className={`px-6 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 ${
                    activeTab === 'team'
                      ? theme === 'dark' 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'bg-blue-500 text-white shadow-lg'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('team')}
                >
                  As a Team
                </button>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="max-w-5xl mx-auto mb-16 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group flex items-start space-x-4 md:space-x-6 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'} shadow-lg hover:shadow-xl`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <p className={`leading-relaxed text-base md:text-lg ${theme === 'dark' ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'} transition-colors duration-300`}>
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => {
                  if (feature.title === 'Launchpad') handleLaunchpad();
                  else if (feature.title === 'Buy') handleBuyWithCard();
                  else if (feature.title === 'Marketplace') handleMarketplace();
                }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'} shadow-lg hover:shadow-xl`}
              >
                <div className="relative z-10 p-8 md:p-10">
                  <div className="space-y-6 md:space-y-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'}`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-base md:text-lg transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end">
                      <div className={`transition-transform duration-300 group-hover:translate-x-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Team Selection Modal */}
      {showTeamSelectionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Choose Your Team
                </h3>
                <button 
                  onClick={closeTeamSelectionModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamLogos.map((team) => (
                  <div
                    key={team.id}
                    onClick={() => {
                      setSelectedTeam(team);
                      closeTeamSelectionModal();
                      handleJoinNow();
                    }}
                    className={`p-6 rounded-xl border-2 border-dashed ${theme === 'dark' ? 'border-gray-600 hover:border-blue-500 bg-gray-700' : 'border-gray-300 hover:border-blue-500 bg-gray-50'} cursor-pointer transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center space-x-4">
                      <img src={team.src} alt={team.name} className="w-16 h-16 object-contain" />
                      <div>
                        <h4 className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                          {team.name}
                        </h4>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          Click to join this team's fanverse
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Fan Token Demo
                </h3>
                <button 
                  onClick={closeDemoModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Interactive Demo</p>
                  <p className="text-blue-200">Experience fan token features firsthand</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleExternalLink('https://finsocial.com/fan-tokens/demo')}
                  className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <i className="fas fa-play mr-2"></i>
                  Start Interactive Demo
                </button>
                <button 
                  onClick={() => handleExternalLink('https://www.youtube.com/watch?v=fan-token-guide')}
                  className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <i className="fab fa-youtube mr-2"></i>
                  Video Tutorial
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Launchpad Modal */}
      {showLaunchpadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-3xl w-full rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Fan Token Launchpad
                </h3>
                <button 
                  onClick={closeLaunchpadModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Upcoming Launches
                  </h4>
                  <div className="space-y-3">
                    {['Real Madrid Fan Token', 'Manchester United Token', 'Barcelona FC Token'].map((token, index) => (
                      <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-500' : 'border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{token}</span>
                          <span className="text-sm text-blue-500">Coming Soon</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleExternalLink('/fan-tokens/launchpad')}
                    className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View All Launches
                  </button>
                  <button 
                    onClick={() => handleExternalLink('/fan-tokens/notify')}
                    className={`flex-1 px-6 py-3 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Get Notified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Buy Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Buy Fan Tokens
                </h3>
                <button 
                  onClick={closeBuyModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button 
                  onClick={() => handleExternalLink('/fan-tokens/buy/card')}
                  className="w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:scale-105 transform transition-all duration-300"
                >
                  <i className="fas fa-credit-card mr-3"></i>
                  Buy with Credit/Debit Card
                </button>
                <button 
                  onClick={() => handleExternalLink('/fan-tokens/buy/crypto')}
                  className={`w-full p-4 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  <i className="fas fa-coins mr-3"></i>
                  Buy with Cryptocurrency
                </button>
                <button 
                  onClick={() => handleExternalLink('/fan-tokens/buy/bank')}
                  className={`w-full p-4 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  <i className="fas fa-university mr-3"></i>
                  Bank Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Marketplace Modal */}
      {showMarketplaceModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {selectedTeam ? `${selectedTeam.name} Trading` : 'Fan Token Marketplace'}
                </h3>
                <button 
                  onClick={closeMarketplaceModal}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              {selectedTeam && (
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} mb-6`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={selectedTeam.logo} alt={selectedTeam.name} className="w-16 h-16 object-contain" />
                    <div>
                      <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {selectedTeam.name}
                      </h4>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Current Price: ${selectedTeam.price} USDT
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      <i className="fas fa-arrow-up mr-2"></i>
                      Buy
                    </button>
                    <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      <i className="fas fa-arrow-down mr-2"></i>
                      Sell
                    </button>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleExternalLink('/fan-tokens/spot')}
                  className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <i className="fas fa-chart-line mr-2"></i>
                  Spot Trading
                </button>
                <button 
                  onClick={() => handleExternalLink('/fan-tokens/portfolio')}
                  className={`p-4 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  <i className="fas fa-wallet mr-2"></i>
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FanToken;