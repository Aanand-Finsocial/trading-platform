import React from 'react';
import { FiSettings, FiCopy, FiHelpCircle, FiX, FiGrid, FiSend, FiDownload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useState, useRef, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';

const Pay = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showPayLimitModal, setShowPayLimitModal] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [sendAmount, setSendAmount] = useState('');
  const [recipientId, setRecipientId] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USDT');
  const settingsRef = useRef(null);

  const finSocialId = '1055206651';
  
  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [settingsRef]);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(finSocialId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSend = () => {
    setShowSendModal(true);
    setIsSettingsOpen(false);
  };

  const handleReceive = () => {
    setShowReceiveModal(true);
    setIsSettingsOpen(false);
  };

  const handlePayLimit = () => {
    setShowPayLimitModal(true);
    setIsSettingsOpen(false);
  };

  const handleSendSubmit = () => {
    if (sendAmount && recipientId) {
      // Process send transaction
      console.log('Sending:', { amount: sendAmount, to: recipientId, currency: selectedCurrency });
      setShowSendModal(false);
      setSendAmount('');
      setRecipientId('');
    }
  };

  const currencies = ['USDT', 'BTC', 'ETH', 'BNB', 'ADA'];

  const faqData = [
    {
      question: "How to Send Cryptocurrency to an Individual with FinSocial Pay",
      answer: "To send cryptocurrency: 1) Click the Send button, 2) Enter the recipient's FinSocial ID, 3) Choose the amount and currency, 4) Confirm the transaction with your Pay PIN."
    },
    {
      question: "Why Haven't I Received the Cryptocurrency from FinSocial Pay?",
      answer: "Common reasons include: Network congestion, incorrect FinSocial ID, pending verification, or the sender hasn't completed the transaction. Check your transaction history and contact support if needed."
    },
    {
      question: "FinSocial Pay Frequently Asked Questions",
      answer: "Find answers to common questions about fees, limits, supported currencies, security features, and troubleshooting in our comprehensive FAQ section."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Send Modal Component
  const SendModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-lg p-6 w-full max-w-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Send Cryptocurrency</h3>
          <button onClick={() => setShowSendModal(false)} className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            <FiX size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Recipient FinSocial ID
            </label>
            <input
              type="text"
              value={recipientId}
              onChange={(e) => setRecipientId(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              placeholder="Enter FinSocial ID"
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Currency
            </label>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            >
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Amount
            </label>
            <input
              type="number"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              placeholder="0.00"
            />
          </div>
        </div>
        
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setShowSendModal(false)}
            className={`flex-1 py-2 px-4 rounded-md ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Cancel
          </button>
          <button
            onClick={handleSendSubmit}
            className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );

  // Receive Modal Component
  const ReceiveModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-lg p-6 w-full max-w-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Receive Cryptocurrency</h3>
          <button onClick={() => setShowReceiveModal(false)} className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            <FiX size={24} />
          </button>
        </div>
        
        <div className="text-center">
          <div className={`w-48 h-48 mx-auto mb-4 border-2 border-dashed rounded-lg flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>
            <FiGrid size={64} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
          </div>
          
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Share your FinSocial ID for others to send you cryptocurrency
          </p>
          
          <div className={`p-3 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
            <p className="font-mono text-lg">{finSocialId}</p>
          </div>
          
          <button
            onClick={handleCopyId}
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-md mb-2"
          >
            {copiedId ? 'Copied!' : 'Copy FinSocial ID'}
          </button>
        </div>
      </div>
    </div>
  );

  // Pay Limit Modal Component
  const PayLimitModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-lg p-6 w-full max-w-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Pay Limits</h3>
          <button onClick={() => setShowPayLimitModal(false)} className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            <FiX size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h4 className="font-semibold mb-2">Daily Limit</h4>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>$10,000 USD equivalent</p>
          </div>
          
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h4 className="font-semibold mb-2">Monthly Limit</h4>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>$100,000 USD equivalent</p>
          </div>
          
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h4 className="font-semibold mb-2">Single Transaction</h4>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>$5,000 USD equivalent</p>
          </div>
        </div>
        
        <button
          onClick={() => setShowPayLimitModal(false)}
          className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-md"
        >
          Got it
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen p-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">FinSocial Pay</h1>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>Send, receive and spend crypto</p>
          </div>
          <div className="relative">
            {/* Coin animations - styled to match the theme */}
            <div className="h-32 w-32 relative">
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-90"></div>
              <div className="absolute left-0 top-10 h-12 w-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>
              <div className="absolute bottom-0 right-12 h-16 w-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div className={`rounded-lg p-6 mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">User-f332b</h2>
              <div className="flex items-center">
                <span className={isDark ? "text-gray-400 mr-2" : "text-gray-600 mr-2"}>FinSocial ID: {finSocialId}</span>
                <button 
                  onClick={handleCopyId}
                  className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"} transition-colors`}
                  title={copiedId ? "Copied!" : "Copy ID"}
                >
                  <FiCopy size={16} />
                </button>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="relative" ref={settingsRef}>
                <button 
                  className={`mr-4 hover:text-blue-500 flex items-center transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  onClick={toggleSettings}
                >
                  <FiSettings size={18} className="mr-1" />
                  <span>Settings</span>
                </button>
                
                {/* Settings Dropdown */}
                {isSettingsOpen && (
                  <div className={`absolute right-0 mt-2 w-48 border rounded shadow-lg z-10 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="py-1">
                      <button 
                        className={`block w-full text-left px-4 py-2 transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        onClick={() => {
                          setIsSettingsOpen(false);
                          console.log('Payment Priority Order clicked');
                        }}
                      >
                        Payment Priority Order
                      </button>
                      <button 
                        className={`block w-full text-left px-4 py-2 transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        onClick={() => {
                          setIsSettingsOpen(false);
                          console.log('Set Pay PIN clicked');
                        }}
                      >
                        Set Pay PIN
                      </button>
                      <button 
                        className={`block w-full text-left px-4 py-2 transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        onClick={() => {
                          setIsSettingsOpen(false);
                          console.log('Receiving Setting clicked');
                        }}
                      >
                        Receiving Setting
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <span className={isDark ? "text-gray-600 mr-4" : "text-gray-400 mr-4"}>|</span>
              <button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:underline transition-all"
                onClick={handlePayLimit}
              >
                Pay Limit
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition flex items-center"
              onClick={handleSend}
            >
              <FiSend className="mr-2" size={18} />
              Send
            </button>
            <button
              className={`px-8 py-3 rounded-md font-medium transition flex items-center ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              onClick={handleReceive}
            >
              <FiDownload className="mr-2" size={18} />
              Receive
            </button>
          </div>
        </div>

        <hr className={isDark ? "border-gray-800 mb-8" : "border-gray-200 mb-8"} />

        {/* Transactions and FAQ Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Recent Transactions</h3>
             
            </div>
            
            {/* Empty state for transactions */}
            <div className={`flex flex-col items-center justify-center py-12 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className={`p-4 rounded-full mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <img 
                  src="/src/assets/empty-transactions.svg" 
                  alt="No transactions" 
                  className="w-16 h-16"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';
                  }}
                />
              </div>
              <p className={isDark ? "text-gray-500" : "text-gray-500"}>No transactions in the last 24 hours</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">FAQ</h3>
              
            </div>
            
            <ul className="space-y-4">
              {faqData.map((faq, index) => (
                <li key={index}>
                  <button 
                    className={`flex items-start text-left w-full hover:bg-opacity-50 p-3 rounded-lg transition ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <FiHelpCircle className={`mt-1 mr-3 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <div className="flex-1">
                      <span className={isDark ? "text-gray-300" : "text-gray-700"}>{faq.question}</span>
                      {expandedFaq === index && (
                        <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showSendModal && <SendModal />}
      {showReceiveModal && <ReceiveModal />}
      {showPayLimitModal && <PayLimitModal />}

      <Footer/>
    </div>
  );
};

export default Pay;