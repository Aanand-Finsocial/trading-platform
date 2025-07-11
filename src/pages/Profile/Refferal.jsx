import React, { useState } from "react";
import { themeColors, useTheme } from "../../contexts/ThemeContext";
import RefferalTab, { RewardTab } from "./RefferalTab";
import Footer from "../../components/Footer/Footer"

const Referral = () => {
  const { theme } = useTheme();

  const { bgColor, textColor, smTextColor, buttonBg, borderColor } =
    themeColors(theme);
  const [searchCode, setSearchCode] = useState("");
  const [activeTab, setActiveTab] = useState("refferal");
  const [showMore, setShowMore] = useState(false);

  const dataCards = [
    { label: "Total Referrals", value: 0 },
    { label: "Task Completed Referrals", value: 0 },
    {
      label: "Total Trading Fee Rebate Voucher (USD)",
      value: 0,
      sub: "≈ $0",
    },
    {
      label: "Total Token Voucher (USD)",
      value: 0,
      sub: "≈ $0",
    },
  ];

  const topEarners = [
    { id: "4******4", value: "3.1357047 BTC" },
    { id: "8******2", value: "0.38458431 BTC" },
    { id: "4******8", value: "0.34392535 BTC" },
    { id: "8******3", value: "0.31904881 BTC" },
    { id: "8******3", value: "0.31904881 BTC" },
  ];

  const referralCode = "CPA_00S8BEO0EV";
  const referralLink = "https://blockchain.finsocial.tech";

  const primaryShareOptions = [
    { icon: "fab fa-whatsapp", label: "WhatsApp" },
    { icon: "fab fa-facebook-f", label: "Facebook" },
    { icon: "fab fa-telegram-plane", label: "Telegram" },
    { icon: "fas fa-qrcode", label: "QR code" },
    { icon: "fas fa-ellipsis-h", label: "More", isMore: true },
    { icon: "fab fa-reddit-alien", label: "Reddit" },
    { icon: "fab fa-x-twitter", label: "X" }, // Twitter/X
    { icon: "fab fa-linkedin-in", label: "LinkedIn" },
    { icon: "fab fa-instagram", label: "Instagram" },
    { icon: "fab fa-discord", label: "Discord" },
    { icon: "fas fa-envelope", label: "Email" },
  ];

  return (
    <div
      className={`min-h-screen ${bgColor} ${textColor} px-2 sm:px-6 py-6 sm:py-10 font-sans space-y-12`}
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex items-center ">
          <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 w-1 h-8" />
          <h2 className="text-2xl font-semibold pl-2 mb-3">Referral</h2>
        </div>
        <h1 className="text-2xl font-semibold my-3">
          Refer a Friend Both Earn $100
        </h1>
        <p className={`${smTextColor} mb-6`}>
          Refer friends to deposit over $50, and both receive{" "}
          <span className="text-amber-500">$100</span> in trading fee rebate
          vouchers. <span className="text-amber-500">Learn More,</span>
        </p>

        <div className="space-y-4 flex flex-col mb-8">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={referralCode}
              readOnly
              className={`w-1/3 px-4 py-2 text-xs rounded-lg outline-none ${bgColor} ${textColor} border ${borderColor} placeholder-gray-400`}
              placeholder="Referral Link"
            />
            <button
              onClick={() => navigator.clipboard.writeText(referralCode)}
              className="shrink-0"
            >
              <i className={`fas fa-copy ${textColor}`}></i>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className={`w-1/3 px-4 py-2 text-xs rounded-lg outline-none ${bgColor} ${textColor} border ${borderColor} placeholder-gray-400`}
              placeholder="Referral Link"
            />
            <button
              onClick={() => navigator.clipboard.writeText(referralLink)}
              className="shrink-0"
            >
              <i className={`fas fa-copy ${textColor}`}></i>
            </button>
          </div>
        </div>

        <h5 className={`h5 text-sm ${smTextColor} mb-6`}>Share to</h5>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-6 mb-18">
            {primaryShareOptions
              .map(({ icon, label, isMore }, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => isMore && setShowMore(!showMore)}
                    className={`${icon} ${buttonBg} p-4 rounded-2xl ${textColor} text-lg hover:opacity-80`}
                  ></button>
                  <span className={`text-sm ${smTextColor}`}>{label}</span>
                </div>
              ))
              .slice(0, 5)}
          </div>

          {/* More options modal */}
          {showMore && (
            <div className="absolute top-full lg:left-[19rem] sm:left-0 sm:top-[3rem] mt-4 w-60 p-4 bg-[#1e1f24] rounded-lg shadow-lg border border-gray-700 z-10">
              <div className="grid grid-cols-2 gap-4">
                {primaryShareOptions
                  .map(({ icon, label }, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div
                        className={`${icon} ${buttonBg} p-4 rounded-2xl ${textColor} text-base hover:opacity-80`}
                      ></div>
                      <span className="text-xs text-gray-400">{label}</span>
                    </div>
                  ))
                  .slice(5, 11)}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-700">
            <p className={`${textColor} font-medium mb-2`}>
              1. Share your referral link with friends
            </p>
            <div className="text-2xl">😎 😀</div>
          </div>

          <div className="p-6 rounded-xl border border-gray-700">
            <p className={`${textColor} font-medium mb-2`}>
              2. Invite your friends to sign up and deposit more than $50 within
              14 days of registration
            </p>
            <div className="text-2xl">💰</div>
          </div>

          <div className="p-6 rounded-xl border border-gray-700">
            <p className={`${textColor} font-medium mb-2`}>
              Receive trading fee rebate vouchers worth $100 each.
            </p>
            <div className="text-2xl">🎟️</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 hidden lg:block md:block ">
        {/* Overview Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Overview</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className={`border ${borderColor} p-6 rounded-xl col-span-1`}>
              <p className={`text-sm ${textColor} mb-2`}>Total Rewards (USD)</p>
              <h1 className="text-4xl font-bold">0</h1>
              <p className={`${smTextColor}`}>≈ $0</p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dataCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`border ${borderColor} p-6 rounded-xl`}
                >
                  <p className={`text-sm ${textColor} mb-2`}>{card.label}</p>
                  <h1 className="text-2xl font-bold">{card.value}</h1>
                  {card.sub && <p className={` ${smTextColor}`}>{card.sub}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className={`flex items-center border {borderColor} rounded-lg px-4 py-2 w-full md:max-w-md`}>
              <div className={`fas fa-search ${textColor} mr-2`} />
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Search by UID/Note/Referral Code"
                className={`bg-transparent w-full outline-none ${textColor} placeholder-gray-500`}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="date"
                defaultValue="2019-01-01"
                className={`border ${borderColor} ${smTextColor} rounded-lg px-4 py-2 w-full sm:w-auto`}
              />
              <input
                type="date"
                defaultValue="2025-06-12"
                className={`border ${borderColor} ${smTextColor} rounded-lg px-4 py-2 w-full sm:w-auto`}
              />
            </div>
          </div>

          <div className={`flex items-center gap-8 border-b ${borderColor} mb-6 flex-wrap`}>
            <button
              onClick={() => setActiveTab("refferal")}
              className={`font-medium relative pb-2 transition-colors ${
                activeTab === "refferal"
                  ? `border-b-2 border-b-amber-500 ${textColor}`
                  : `border-b-2 border-b-transparent ${smTextColor} hover:text-gray-600`
              }`}
            >
              Referrals
            </button>
            <button
              onClick={() => setActiveTab("reward")}
              className={`font-medium relative pb-2 transition-colors ${
                activeTab === "reward"
                  ? `border-b-2 border-b-amber-500 ${textColor}`
                  : `border-b-2 border-b-transparent ${smTextColor} hover:text-gray-600`
              }`}
            >
              Rewards
            </button>
          </div>

          {activeTab === "refferal" && <RefferalTab />}
          {activeTab === "reward" && <RewardTab />}
        </section>

        {/* Activity History Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Activity History</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-wrap">
            <div
              className={`border ${borderColor} rounded-xl overflow-hidden hover:shadow-lg`}
            >
              <img
                src="https://bin.bnbstatic.com/static/images/common/kv-affiliate-pc.png"
                alt="Referral Banner"
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Earn Together: Win Up to 2,000 USDC Each!
                </h3>
                <button className="bg-gradient-to-r from-blue-300 to-purple-300 text-black font-semibold px-4 py-2 mt-2 rounded-lg transition">
                  View
                </button>
              </div>
            </div>

            <div
              className={`border ${borderColor} rounded-xl p-4 flex flex-col items-start justify-baseline hover:shadow-lg`}
            >
              <div className="flex items-center flex-col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10302/10302971.png"
                  alt="Become KOL"
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Become a KOL</h3>
                <p
                  className={`text-sm text-center ${smTextColor} mb-4 text-justify`}
                >
                  Have over 5,000 social media followers? Leverage your
                  community by becoming an Affiliate and earn up to 50%
                  commission on every trade.
                </p>
              </div>
              <button className={`bg-gradient-to-r from-blue-300 to-purple-300 text-black font-semibold px-4 py-2 rounded-lg transition`}>
                Join Now
              </button>
            </div>

            <div
              className={`border ${borderColor} rounded-xl p-4 hover:shadow-xl`}
            >
              <h3 className="text-lg font-semibold mb-4">
                Top 24H Commission Earners
              </h3>
              <ul className="space-y-6 pt-6">
                {topEarners.map((earner, i) => (
                  <li
                    key={i}
                    className={`flex justify-between text-sm ${smTextColor}`}
                  >
                    <span>
                      {i + 1}. ID {earner.id}
                    </span>
                    <span>{earner.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
        <Footer />
    </div>
  );
};

export default Referral;
