import React from 'react';
import Convert from '../../components/Trade/Convert';
import Footer from '../../components/Footer/Footer';
import { useTheme, themeColors } from '../../contexts/ThemeContext';

const ConvertPage = () => {
  const { theme } = useTheme();
  const colors = themeColors(theme);

  return (
    <div className={`min-h-screen ${colors.bgColor}`}>
      <div className="container mx-auto">
        <Convert />
        <Footer/>
      </div>
    </div>
  );
};

export default ConvertPage;