import React from "react";
import Footer from "../../components/Footer/Footer";
import { themeColors, useTheme } from "../../contexts/ThemeContext";

const RewardsHub = () => {
  const { theme } = useTheme();
  const { bgColor, textColor, buttonBg, borderColor } = themeColors(theme);
  return (
    <div className={`min-h-screen ${bgColor} ${textColor} font-sans p-4 sm:p-6 md:p-12`}>
      {/* Header Section */}
      <div className="max-w-7xl px-2 sm:px-4 md:px-8 mx-auto">
        <div className="flex flex-col my-8 md:my-6 md:flex-row justify-between items-center gap-10">
          {/* Left Side Text */}
          <div className="flex-1 w-full">
            <h1 className="text-2xl hidden md:flex md:text-2xl lg:flex sm:text-4xl lg:text-5xl font-semibold leading-10 sm:leading-[3.5rem] w-full sm:w-[32rem] md:w-[45rem] mb-4">
              Join activities and earn attractive rewards in Rewards Hub.
            </h1>
            <p className={`${textColor} hidden md:flex lg:flex mb-6`}>
              Grab the rewards before they run out!
            </p>

            <div className="flex flex-wrap items-center gap-8 sm:gap-10 mb-4">
              <div>
                <span className="text-amber-600 text-2xl font-semibold">0</span>
                <span className={`ml-2 ${textColor}`}>Points</span>
              </div>
              <div>
                <span className="text-amber-600 text-2xl font-semibold">0</span>
                <span className={`ml-2 ${textColor}`}>Vouchers</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 text-amber-500 font-medium">
              <a href="#" className="hover:underline">
                Rewards Shop &gt;
              </a>
              <a href="#" className="hover:underline">
                My Vouchers &gt;
              </a>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="flex-1 hidden lg:flex justify-center md:justify-end w-full mt-8 md:mt-0">
            <img
              src="/reward.png"
              alt="Reward Illustration"
              className="w-48 sm:w-64 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={`border-t ${borderColor} my-8 md:my-14`} />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto p-2 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Get Rewards</h2>
            <p className={`${textColor} py-4`}>
              Complete these tasks to earn daily rewards!
            </p>
          </div>
          <a
            href="#"
            className="text-yellow-400 mt-4 sm:mt-0 font-medium hover:underline"
          >
            View More &gt;
          </a>
        </div>
        <div className="h-[26rem] sm:h-[30rem] m-auto flex">
          <div className="flex flex-col items-center justify-center w-full">
            <i
              className="fa-solid fa-file fa-5x text-gray-400"
            ></i>
            <p className="text-xs font-semibold my-3">No Ongoing Tasks</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Enjoy Rewards</h2>
            <p className={`${textColor} py-4`}>
              Use these voucher and enjoy there benefits!
            </p>
          </div>
          <a
            href="#"
            className="text-yellow-400 mt-4 sm:mt-0 font-medium hover:underline"
          >
            View More &gt;
          </a>
        </div>
        <div className="h-[26rem] sm:h-[25rem] m-auto flex">
          <div className="flex flex-col items-center justify-center w-full">
            <i
              className="fa-solid fa-file fa-5x text-gray-400"
            ></i>
            <p className="text-xs font-semibold my-3">No Ongoing Vouchers</p>
          </div>
        </div>
      </div>
      <div className={`border-t ${borderColor} mb-8 md:mb-14`} />
      <Footer />
    </div>
  );
};

export default RewardsHub;