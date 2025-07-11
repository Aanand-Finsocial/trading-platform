import React from 'react';
import CopyTrading from '../../components/Trading/copyTrading';
import { useTheme } from '../../contexts/ThemeContext';
import Footer from '../../components/Footer/Footer';

const CopyTradingPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#121417]' : 'bg-gray-50'} pt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CopyTrading />
        <Footer/>
        
      </div>
    </div>
  );
};

export default CopyTradingPage;