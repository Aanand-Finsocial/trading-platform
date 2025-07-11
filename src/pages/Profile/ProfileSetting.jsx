import React, { useEffect, useRef, useState } from "react";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Button = ({ label, bgColor, onClick }) => {
  return (
    <button
      className={`${bgColor} flex justify-center text-sm px-4 py-1 rounded font-medium transition-colors duration-300 w-24`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const ProfileSetting = () => {
  const { toggleTheme, theme } = useTheme();
  const { bgColor, textColor, buttonBg, borderColor, smTextColor } =
    themeColors(theme);

  // State for controlling which modal is active
  const [activeModal, setActiveModal] = useState(null);

  //stat5e for Profile section
  const [nickname, setNickname] = useState("Terrell Hamrick VoLh");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/40");
  const fileInputRef = useRef();

  //state for notfication changes
  const [notification, setNotification] = useState({
    notification: false,
    notificationSound: false,
  });

  //state fro timezone
  const [selectedTimezone, setSelectedTimezone] = useState("Last 24 hours");

  // State for one-step withdrawal options
  const [selectedOption, setSelectedOption] = useState("OFF");
  const options = ["OFF", "500 USDT", "1000 USDT", "1500 USDT"];
  const [withdraw, setWithdraw] = useState("off");

  //state for Trade order-confirmation
  const [orderConfirm, setOrderConfirm] = useState([]);
  const orders = [
    "Market Order",
    "Stop-Limit",
    "Order Auto",
    "Borrow/Repay for Margin",
  ];

  // handling single order in trade
  const handleConfirmOrders = (order) => {
    setOrderConfirm((prevConfirmedOrders) => {
      if (prevConfirmedOrders.includes(order)) {
        return prevConfirmedOrders.filter((item) => item !== order);
      } else {
        return [...prevConfirmedOrders, order];
      }
    });
  };
  //handling all order in trade.
  const handleAllOrders = (e) => {
    if (e.target.checked) {
      setOrderConfirm(orders);
    } else {
      setOrderConfirm([]);
    }
  };
  const isSelectAllChecked =
    orderConfirm.length === orders.length && orders.length > 0;

  const [feeDeduction, setFeeDeduction] = useState({
    fees: true,
    margin: false,
    futures: false,
  });

  // Timezone options for the preferences modal
  const timezones = [
    "Last 24 hours",
    "UTC +12, 00:00",
    "UTC +11, 00:00",
    "UTC +10, 00:00",
    "UTC +9, 00:00",
    "UTC +8, 00:00",
    "UTC +7, 00:00",
    "UTC +6, 00:00",
    "UTC +5, 00:00",
    "UTC +4, 00:00",
    "UTC +3, 00:00",
    "UTC +2, 00:00",
    "UTC +1, 00:00",
    "UTC +0, 00:00",
    "UTC -1, 00:00",
    "UTC -2, 00:00",
    "UTC -3, 00:00",
    "UTC -4, 00:00",
    "UTC -5, 00:00",
    "UTC -6, 00:00",
    "UTC -7, 00:00",
    "UTC -8, 00:00",
    "UTC -9, 00:00",
    "UTC -10, 00:00",
    "UTC -11, 00:00",
    "UTC -12, 00:00",
  ];

  return (
    <div
      className={`min-h-screen transition-colors z-60 duration-300 ${bgColor} p-2 sm:p-4 md:p-6 ${textColor} font-sans`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div
          className={`rounded-xl p-4 sm:p-6 mb-6 border transition-colors duration-300 ${borderColor} w-full`}
        >
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 flex-wrap gap-4">
            <div className="max-w-md w-full">
              <h3 className="text-md font-semibold">Nickname & Avatar</h3>
              <p className="text-sm mt-2 text-gray-500">
                Set up an avatar and nickname, it is suggested not to use your
                real name or the name of your social account as a nickname.
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-full w-10 h-10"
              />
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium whitespace-nowrap">
                  {nickname}
                </span>
                <Button
                  label="Edit"
                  bgColor={buttonBg}
                  onClick={() => {
                    setActiveModal("edit-profile");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full max-w-md">
              <h3 className="text-md font-semibold">C2C Profile</h3>
              <p className="text-sm mt-2 text-gray-500 max-w-md">
                Edit your C2C nickname, manage your payment methods and the list
                of users you follow.
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="bg-[#5865f2] rounded-full w-10 h-10 flex items-center justify-center">
                <span className={`${textColor} font-bold`}>P</span>
              </div>
              <span className="text-sm font-medium">P2P-d65a09u1</span>
              <Button
                label="Edit"
                bgColor={buttonBg}
                onClick={() => {
                  /* Handle C2C Profile Edit */
                }}
              />
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div
          className={`rounded-xl p-4 sm:p-6 mb-6 border transition-colors duration-300 ${borderColor} w-full`}
        >
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="w-full max-w-md">
              <h3 className="text-md font-semibold">Notification Language</h3>
              <p className="text-sm mt-2 text-gray-500 max-w-md">
                This will affect the language settings of E-mail and App push.
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <span className="text-sm font-medium">Default</span>
              <Button
                label="Edit"
                bgColor={buttonBg}
                onClick={() => {
                  /* Handle Language Edit */
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="w-full max-w-md">
              <h3 className="text-md font-semibold">
                Notification Preferences
              </h3>
              <p className="text-sm mt-2 text-gray-500 max-w-md">
                Once configured, you will receive relevant on-site inbox
                notifications within the app and website.
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <span className="text-sm font-medium "> Off</span>
              <Button
                label="Manage"
                bgColor={buttonBg}
                onClick={() => {
                  setActiveModal("notification-preference")
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full max-w-md">
              <h3 className="text-md font-semibold">Auto Price Alert</h3>
              <p className="text-sm mt-2 text-gray-500 max-w-md">
                Once configured, you will receive alerts on the price changes of
                major and holding cryptos.
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <span className="text-sm font-medium">
                Notification On, Sound On
              </span>
              <Button
                label="Manage"
                bgColor={buttonBg}
                onClick={() => {
                  setActiveModal("auto-price-alert");
                }}
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div
          className={`rounded-xl p-4 sm:p-6 mb-6 border transition-colors duration-300 ${borderColor} w-full`}
        >
          <h2 className="text-xl font-bold mb-6">Preferences</h2>
          <div className="space-y-6">
            <div className="grid gap-6">
              {/* Color Preference */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">Color Preference</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      <span className="flex items-center gap-2 text-sm">
                        <span className="text-green-400 text-sm font-medium">
                          Green Up
                        </span>
                        <span>/</span>
                        <span className="text-red-500 text-sm font-medium">
                          Red Down
                        </span>
                      </span>
                    </span>
                    <Button
                      label="Edit"
                      bgColor={buttonBg}
                      onClick={() => setActiveModal("color")}
                    />
                  </div>
                </div>
              </div>
              {/* Style Settings */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">Style Settings</p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span className="text-sm font-medium">Fresh</span>
                    </span>
                    <Button
                      label="Edit"
                      bgColor={buttonBg}
                      onClick={() => setActiveModal("style")}
                    />
                  </div>
                </div>
              </div>
              {/* UTC Time Zone */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">UTC Time Zone</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      {selectedTimezone}
                    </span>
                    <Button
                      label="Edit"
                      bgColor={buttonBg}
                      onClick={() => setActiveModal("timezone")}
                    />
                  </div>
                </div>
              </div>
              {/* Shortcuts */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">Shortcuts</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      <input type="checkbox" className="accent-yellow-500" />
                    </span>
                    <Button
                      label="Edit"
                      bgColor={buttonBg}
                      onClick={() => setActiveModal("shortcuts")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-sm font-medium">Theme</p>
              <div className="flex items-center gap-4">
                <span className="text-sm">{theme.toUpperCase()}</span>
                <div
                  className={`${buttonBg} flex gap-2 w-20 text-sm px-2 rounded-lg font-medium transition-colors`}
                >
                  <div className="flex justify-start items-center">
                    <button
                      onClick={toggleTheme}
                      className={`cursor-pointer ${textColor} outline-none rounded-lg px-2 my-2 py-1 w-2/1 fas ${
                        theme === "light"
                          ? "fa-sun translate-x-0"
                          : "fa-moon translate-x-8"
                      } transition-all duration-200`}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal Section */}
        <div
          className={`rounded-xl p-4 sm:p-6 mb-6 border transition-colors duration-300 ${borderColor} w-full`}
        >
          <h2 className="text-2xl font-semibold mb-4">Withdrawal</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-2">
              <div className="w-full max-w-xl">
                <p className="font-medium">Withdrawal Whitelist</p>
                <p className="text-sm pt-2 text-gray-500 w-full md:w-[39rem]">
                  Once this function is enabled, your account will only be able
                  to withdraw to addresses on your whitelist.
                </p>
                <p className="text-sm text-yellow-400 mt-1 cursor-pointer">
                  Address Management
                </p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-xs text-gray-500">OFF</span>
                <Button
                  label="Enable"
                  bgColor={buttonBg}
                  onClick={() => setActiveModal("withdrawl-whitelist")}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-2">
              <div className="w-full max-w-xl">
                <p className="font-medium">One-step Withdrawal</p>
                <p className="text-sm pt-2 text-gray-500 w-full md:w-[39rem]">
                  When this function is turned on, you can withdraw small amount
                  crypto to whitelisted addresses without passing 2FA
                  verification
                </p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-xs text-gray-500">OFF</span>
                <Button
                  label="Enable"
                  bgColor={buttonBg}
                  onClick={() => setActiveModal("onestep-withdrawl")}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="font-medium">Withdraw Setting</p>
                <p className="text-sm pt-2 text-gray-500">
                  Choose to withdraw through on-chain or off-chain transfer for
                  applicable addresses.
                </p>
              </div>
              <Button
                label="Edit"
                bgColor={buttonBg}
                className="w-20"
                onClick={() => setActiveModal("withdraw-setting")}
              />
            </div>
          </div>
          {/* Main Modal Structure */}
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
              <div
                className={`${bgColor} ${textColor} p-6 rounded-2xl border border-gray-700 shadow-xl mx-auto w-auto max-w-full`}
              >
                {/* Conditional Modal Content based on activeModal state */}

                {activeModal === "edit-profile" && (
                  <div className="w-full max-w-sm sm:max-w-md mx-auto">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-lg font-semibold">
                          Edit Profile
                        </h2>
                        <button
                          onClick={() => setActiveModal(null)}
                          className={`${textColor} hover:text-gray-500`}
                        >
                          <i className="fas fa-times text-lg" />
                        </button>
                      </div>

                    <p className={`text-sm ${smTextColor} mb-6`}>
                      *Avatar and nickname will also be applied to Finsocial
                      Square. Abusing them might lead to community penalties.
                    </p>

                    <div className="flex justify-between items-center mb-6">
                      <label
                        className={`font-semibold ${textColor} pt-2 w-1/4`}
                      >
                        Avatar
                      </label>

                      {/* Right: Avatar + Camera + Help Text */}
                      <div className="flex flex-col items-start relative">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full bg-gray-500 overflow-hidden ">
                            <img
                              src={avatar}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />

                            {/* Hidden File Input */}
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef}
                              className="hidden"
                            />
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="absolute bottom-2 right-1 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 shadow-md"
                            >
                              <i className="fas fa-camera w-6 text-xs" />
                            </button>
                          </div>
                        </div>
                        <span className={`text-sm ${smTextColor} mt-1`}>
                          Avatar can only be modified 1 time per 30 days.
                        </span>
                      </div>
                    </div>

                    <div className="mb-4 flex justify-between">
                      <label className={`font-semibold ${textColor}`}>
                        Nickname
                      </label>
                      <div className="flex flex-col ml-20 w-fit">
                        <input
                          type="text"
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          maxLength={60}
                          className={`bg-[#2C2C2C]  text-white rounded-md px-4 py-2 outline-none `}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
                          {nickname.length}/60
                        </span>
                        <p className={`text-sm ${smTextColor} mt-1`}>
                          Nickname can only be modified 1 time per 30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeModal === "notification-preference" && (
                  <>
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                      <h2 className="text-xl font-bold mb-4">
                        Notification Preferences
                      </h2>
                      <div className="text-sm text-gray-300">
                        Notification Preference Settings here...
                      </div>
                    </div>
                  </>
                )}


                {activeModal === "auto-price-alert" && (
                  <>
                    <div className="w-full max-w-sm sm:max-w-md mx-auto">
                      {" "}
                      {/* Added responsive max-width and mx-auto */}
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-lg font-semibold">
                          Auto Price Alert
                        </h2>
                        <button
                          onClick={() => setActiveModal(null)}
                          className={`${textColor} hover:text-gray-500`}
                        >
                          <i className="fas fa-times text-lg" />
                        </button>
                      </div>
                      <div className="space-y-5">
                        <div className="flex justify-between gap-4 sm:gap-6 items-start">
                          {" "}
                          {/* Adjusted gap */}
                          <div>
                            <p className="font-semibold text-sm">
                              Notification
                            </p>
                            <p className={`text-xs ${smTextColor} mt-1`}>
                              Once open auto price alert, you will receive
                              notifications on price changes for major and
                              holding cryptos on website.
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={notification.notification}
                              onChange={() => {
                                setNotification({
                                  ...notification,
                                  notification: !notification.notification,
                                });
                              }}
                            />
                            <div
                              className={`w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-gradient-to-r from-blue-400 to-purple-400 transition-all relative`}
                            >
                              <div
                                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                                  notification.notification
                                    ? "translate-x-5"
                                    : ""
                                }`}
                              />
                            </div>
                          </label>
                        </div>

                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm">
                              Notification sound
                            </p>
                            <p className={`text-xs ${smTextColor} mt-1`}>
                              Notification sound synchronized with price alerts.
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={notification.notificationSound}
                              onChange={() => {
                                setNotification({
                                  ...notification,
                                  notificationSound:
                                    !notification.notificationSound,
                                });
                              }}
                            />
                            <div
                              className={`w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-gradient-to-r from-blue-400 to-purple-400 transition-all relative`}
                            >
                              <div
                                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                                  notification.notificationSound
                                    ? "translate-x-5"
                                    : ""
                                }`}
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "color" && (
                  <>
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                      <h2 className="text-xl font-bold mb-4">
                        Edit Color Preference
                      </h2>
                      <div className="text-sm text-gray-300">
                        Color Preference Settings here... (e.g., radio buttons
                        for color schemes)
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "style" && (
                  <>
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                      <h2 className="text-xl font-bold mb-4">
                        Edit Style Settings
                      </h2>
                      <div className="text-sm text-gray-300">
                        Style Settings Content here... (e.g., font sizes, border
                        styles)
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "timezone" && (
                  <>
                    <div className="w-[25rem] max-w-sm sm:max-w-md mx-auto">
                      <h2 className="text-xl font-bold mb-4">
                        Select Timezones
                      </h2>
                      <div className="max-h-60 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                        {" "}
                        {/* Added custom-scrollbar */}
                        {timezones.map((zone, index) => (
                          <label
                            key={index}
                            className={`flex items-center text-sm ${textColor} cursor-pointer hover:text-gray-500`}
                          >
                            <input
                              type="radio"
                              checked={selectedTimezone === zone}
                              onChange={() => setSelectedTimezone(zone)}
                              className="mr-2 rounded-2xl accent-yellow-500"
                            />
                            {zone}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "shortcuts" && (
                  <>
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                      <h2 className="text-xl font-bold mb-4">
                        Customize Shortcuts
                      </h2>
                      <div className="text-sm text-gray-300">
                        Shortcut toggles or key binds here... (e.g., checkboxes
                        for enabling/disabling)
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "withdrawl-whitelist" && (
                  <>
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                      <div className="flex justify-center my-4">
                        <i className="fas fa-smile fa-3x text-amber-300" />
                      </div>
                      <h2 className="text-lg sm:text-xl text-center font-semibold mb-3">
                        Enable Whitelist
                      </h2>
                      <div className="text-sm text-gray-400 text-center leading-relaxed max-h-32 overflow-y-auto pr-1 custom-scrollbar">
                        {" "}
                        {/* Added custom-scrollbar */}
                        Once this function is enabled, your account will only be
                        able to withdraw to addresses on your whitelist.
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "onestep-withdrawl" && (
                  <>
                    <div className="w-full max-w-sm sm:max-w-md mx-auto">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-lg font-semibold">
                          Enable One-Step Withdrawal
                        </h2>
                        <button
                          onClick={() => setActiveModal(null)}
                          className={`${textColor} hover:text-gray-500`}
                        >
                          <i className="fas fa-times text-lg" />
                        </button>
                      </div>

                      <p className="text-sm text-gray-400 mb-1">
                        24h verification-free limit: 5000 USDT
                      </p>
                      <p className="text-sm text-gray-400 mb-4">
                        Quota of a single One-Step Withdrawal
                      </p>

                      <div className="space-y-3 mb-4">
                        {options.map(
                          (
                            option // Assuming 'options' state/prop exists
                          ) => (
                            <label
                              key={option}
                              className="flex items-center space-x-3 cursor-pointer text-sm"
                            >
                              <input
                                type="radio"
                                name="withdrawal"
                                checked={selectedOption === option} // Assuming 'selectedOption' state/prop exists
                                onChange={() => setSelectedOption(option)}
                                className="accent-yellow-500 w-4 h-4"
                              />
                              <span
                                className={`${
                                  selectedOption === option
                                    ? `${textColor}`
                                    : "text-gray-400"
                                }`}
                              >
                                {option}
                              </span>
                            </label>
                          )
                        )}
                      </div>

                      <div className="bg-gray-800 text-gray-300 text-xs p-4 rounded-lg mb-6 flex gap-2 items-start">
                        <i className="fas fa-info-circle mt-0.5 text-sm text-white" />
                        <span>
                          For the safety of your funds, even if you have enabled
                          2FA-free withdrawals, we may still require you to
                          perform 2FA authentication based on your account
                          security.
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "withdraw-setting" && (
                  <>                    
                  <div className="w-full max-w-[21rem] sm:max-w-md mx-auto">

                      <div className="flex justify-between mb-4">
                        <h2 className="text-lg font-semibold">
                          Withdraw Settings
                        </h2>
                        <button
                          onClick={() => setActiveModal(null)}
                          className={`${textColor} hover:text-gray-500`}
                        >
                          <i className="fas fa-times text-lg" />
                        </button>
                      </div>
                      <div
                        onClick={() => setWithdraw("on")} // Assuming 'withdraw' state exists
                        className={`p-4 ${
                          withdraw === "on"
                            ? "border-2 border-blue-800"
                            : borderColor
                        } border rounded-lg mb-6 flex flex-col gap-2 items-start cursor-pointer transition-colors duration-200`}
                      >
                        <h3 className="text-lg font-semibold">
                          On-chain withdraw
                        </h3>
                        <p
                          className={`text-xs ${smTextColor} `} // Changed sm:w-[28rem] to max-w-full
                        >
                          Withdrawals will be sent on the blockchain.
                        </p>
                        <p
                          className={`text-xs ${smTextColor} `} // Changed sm:w-[28rem] to max-w-full
                        >
                          Network fees charged.
                        </p>
                      </div>
                      <div
                        onClick={() => setWithdraw("off")} // Assuming 'withdraw' state exists
                        className={`p-4 ${
                          withdraw === "off"
                            ? "border-2 border-blue-800"
                            : borderColor
                        } border rounded-lg mb-6 flex flex-col gap-2 items-start cursor-pointer transition-colors duration-200`}
                      >
                        <h3 className="text-lg font-semibold">
                          Off-chain withdraw
                        </h3>
                        <p
                          className={`text-xs ${smTextColor}`} // Changed sm:w-[28rem] to max-w-full
                        >
                          Withdrawals will be sent on the blockchain.
                        </p>
                        <p
                          className={`text-xs ${smTextColor}`} // Changed sm:w-[28rem] to max-w-full
                        >
                          No Network fees charged.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "order-confirmation" && (
                  <>
                    <div className="w-[25rem] max-w-sm sm:max-w-md mx-auto">
                      <h2 className="text-xl font-bold mb-4">
                        Order Confirmation Reminders
                      </h2>
                      <div className="max-h-60 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                        {" "}
                        {/* Added custom-scrollbar */}
                        {orders.map((order) => (
                          <label
                            key={order}
                            className={`flex items-center text-sm ${textColor} cursor-pointer hover:text-gray-500`}
                          >
                            <input
                              type="checkbox"
                              value={order}
                              checked={orderConfirm.includes(order)}
                              onChange={() => handleConfirmOrders(order)}
                              className="mr-2 rounded-2xl accent-yellow-500"
                            />
                            {order}
                          </label>
                        ))}
                        <label
                          className={`flex items-center text-sm ${textColor} cursor-pointer hover:text-gray-500`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelectAllChecked}
                            onChange={handleAllOrders}
                            className="mr-2 rounded-2xl accent-yellow-500"
                          />
                          Select All
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {activeModal === "fee-deduction" && (
                  <>
                    <div className="w-[20rem] max-w-sm sm:max-w-md mx-auto">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-lg font-semibold">Fee Deduction</h2>
                        <button
                          onClick={() => setActiveModal(null)}
                          className={`${textColor} hover:text-gray-500`}
                        >
                          <i className="fas fa-times text-lg" />
                        </button>
                      </div>

                      <div className="space-y-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm">
                              Use BNB to pay fees
                            </p>
                            <p className={`text-xs ${smTextColor} mt-1`}>
                              Enjoy 25% discount
                            </p>{" "}
                            {/* Used smTextColor for consistency */}
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={feeDeduction.fees} // Assuming 'feeDeduction' state exists
                              onChange={() =>
                                setFeeDeduction({
                                  ...feeDeduction,
                                  fees: !feeDeduction.fees,
                                })
                              }
                            />
                            <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-yellow-400 transition-all relative">
                              <div
                                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                                  feeDeduction.fees ? "translate-x-5" : ""
                                }`}
                              />
                            </div>
                          </label>
                        </div>

                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm">
                              Use BNB to pay Margin interests
                            </p>
                            <p className={`text-xs ${smTextColor} mt-1`}>
                              Enjoy 5% discount
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={feeDeduction.margin} // Assuming 'feeDeduction' state exists
                              onChange={() =>
                                setFeeDeduction({
                                  ...feeDeduction,
                                  margin: !feeDeduction.margin,
                                })
                              }
                            />
                            <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-yellow-400 transition-all relative">
                              <div
                                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                                  feeDeduction.margin ? "translate-x-5" : ""
                                }`}
                              />
                            </div>
                          </label>
                        </div>

                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-sm">
                              Use BNB to pay USDⓈ-M Futures fees
                            </p>
                            <p className={`text-xs ${smTextColor} mt-1`}>
                              Enjoy 10% discount
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={feeDeduction.futures} // Assuming 'feeDeduction' state exists
                              onChange={() =>
                                setFeeDeduction({
                                  ...feeDeduction,
                                  futures: !feeDeduction.futures,
                                })
                              }
                            />
                            <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-yellow-400 transition-all relative">
                              <div
                                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                                  feeDeduction.futures ? "translate-x-5" : ""
                                }`}
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Modal Footer Buttons (common for all modals) */}
                <div className="flex justify-between gap-3 mt-6">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="w-1/2 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-colors duration-200" // Added transition
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      console.log(`Confirmed for: ${activeModal}`);
                      if (activeModal === "timezone") {
                        console.log("Selected Timezone:", selectedTimezone);
                      } else if (activeModal === "onestep-withdrawl") {
                        console.log(
                          "Selected One-step Withdrawal Option:",
                          selectedOption
                        );
                      }
                      // Add more logic here for saving preferences based on activeModal
                      setActiveModal(null);
                    }}
                    className={`w-1/2 py-2 ${buttonBg} ${textColor} font-medium rounded-xl hover:opacity-90 transition-opacity duration-200`} // Added transition
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trade Section */}
        <div
          className={`rounded-xl p-4 sm:p-6 mb-6 border transition-colors duration-300 ${borderColor} w-full`}
        >
          <h2 className="text-2xl font-semibold mb-4">Trade</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 flex-wrap gap-4">
            <div className="max-w-md w-full">
              <h3 className="text-md font-semibold">
                Order Confirmation Reminders
              </h3>
              <p className={`text-sm mt-2 ${smTextColor}`}>
                If the order reminder function is enabled, it will need to be
                reconfirmed every time an order is submitted.
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium ">
                  Stop-Limit Order, Auto Borrow/Repay for Margin
                </span>
                <Button
                  label="Manage"
                  bgColor={buttonBg}
                  onClick={() => setActiveModal("order-confirmation")}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full max-w-md">
              <h3 className="text-md font-semibold">Fee Deduction</h3>
              <p className="text-sm mt-2 text-gray-500 max-w-md">
                Use BNB to pay less
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <span className="text-xs font-medium">Spot fees</span>
              <Button
                label="Manage"
                bgColor={buttonBg}
                onClick={() => {
                  setActiveModal("fee-deduction");
                }}
              />
            </div>
          </div>
        </div>

        {/* Link Account Section */}
        <div
          className={`rounded-xl p-4 sm:p-6 mb-6 border transition-colors duration-300 ${borderColor} w-full`}
        >
          <h2 className="text-2xl font-semibold mb-4">Link Account</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 flex-wrap gap-4">
            <div className="max-w-md w-full">
              <h3 className="text-md font-semibold">Link X Account</h3>
              <p className="text-sm mt-2 text-gray-500">
                Link your X Account to Finsocial
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium whitespace-nowrap">
                  Not-Linked
                </span>
                <Button
                  label="Link"
                  bgColor={buttonBg}
                  onClick={() => {
                    /* Handle Link X Account */
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div
          className={`rounded-xl p-4 sm:p-6 mb-6 border transition-colors duration-300 ${borderColor} w-full`}
        >
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 flex-wrap gap-4">
            <div className="max-w-md w-full">
              <h3 className="text-md font-semibold">Download Personal Data</h3>
              <p className="text-sm mt-2 text-gray-500 text-justify">
                The download includes profile, withdrawal, deposit, and trading
                history data. *For KYC documents, contact the{" "}
                <Link to="" className="text-amber-500">
                  DPO team
                </Link>
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <Button
                  label="Download"
                  bgColor={buttonBg}
                  onClick={() => {
                    /* Handle Download Personal Data */
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="max-w-md w-full">
              <h3 className="text-md font-semibold">Delete Account</h3>
            </div>
            <div className="flex items-center justify-end space-x-4 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <Button
                  label="Delete"
                  bgColor={buttonBg}
                  onClick={() => {
                    /* Handle Delete Account */
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start md:items-center gap-4">
            <div className="max-w-md w-full">
              <h3 className="text-md font-semibold">Privacy Portal</h3>
            </div>
            <div className="flex items-center justify-end space-x-4 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <Button
                  label="Enter"
                  bgColor={buttonBg}
                  onClick={() => {
                    /* Handle Privacy Portal Enter */
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSetting;
