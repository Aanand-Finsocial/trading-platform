import React from "react";
import { themeColors, useTheme } from "../../contexts/ThemeContext";

const RefferalTab = () => {
    const {theme} = useTheme();
    const {bgColor,borderColor,buttonBg,textColor,smTextColor} = themeColors(theme);
  return (
    <div>
      <div className={`flex flex-col items-center  py-20 justify-center mt-16 ${smTextColor}`}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486800.png"
          alt="no records"
          className="w-16 h-16 mb-4 opacity-30"
        />
        <p className="text-sm">No refferals</p>
      </div>
    </div>
  );
};

export const RewardTab = () => {
    const {theme} = useTheme();
    const {bgColor,borderColor,buttonBg,textColor,smTextColor} = themeColors(theme);
  return (
    <div>
      <div className={`flex flex-col items-center  py-20 justify-center mt-16 ${smTextColor}`}>
        <img
          src="gift-box.png"
          alt="no records"
          className="w-16 h-16 mb-4 opacity-30"
        />
        <p className="text-sm">No rewards</p>
      </div>
    </div>
  );
};

export default RefferalTab;
