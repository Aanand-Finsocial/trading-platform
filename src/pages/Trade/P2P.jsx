import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import P2PHeader from "../../components/P2P/P2PHeader";
import P2PFilters from "../../components/P2P/P2PFilters";
import P2PListings from "../../components/P2P/P2PListings";
import BeginnersGuide from "../../components/P2P/BeginnersGuide";

const P2P = () => {
  const { theme } = useTheme()
  const [activeMode, setActiveMode] = useState("p2p");
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedCrypto, setSelectedCrypto] = useState("USDT");
  const [selectedPayment, setSelectedPayment] = useState("all");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [sortBy, setSortBy] = useState("price");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [currencySearch, setCurrencySearch] = useState("");
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const [paymentSearch, setPaymentSearch] = useState("");
  const [selectedPayments, setSelectedPayments] = useState(["all"]);
  const [showBeginnersGuide, setShowBeginnersGuide] = useState(false);

  // Cryptocurrency list matching Finsocial
  const cryptoList = [
    "USDT", "HMSTR", "BTC", "USDC", "FDUSD", "BNB", "ETH", "TRX", 
    "SHIB", "XRP", "SOL", "TON", "DOGE", "PEPE", "TRUMP", "1000CHEEMS"
  ];

  // Currency list with flags
  const currencies = [
    { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
    { code: "AED", name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪" },
    { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
    // ...existing currencies...
  ];

  // Sample P2P listings data
  const p2pListings = [
    {
      id: 1,
      advertiser: {
        name: "CryptoPro",
        completionRate: 99.52,
        trades: 5243,
        isVerified: true,
        isPro: true,
      },
      price: 84.56,
      currency: "INR",
      available: "50,000.00",
      minLimit: "500.00",
      maxLimit: "10,000.00",
      paymentMethods: ["PhonePe", "Google Pay", "UPI"],
      timeLimit: 15,
    },
    {
      id: 2,
      advertiser: {
        name: "QuickTrade",
        completionRate: 98.89,
        trades: 3567,
        isVerified: true,
        isPro: false,
      },
      price: 84.58,
      currency: "INR",
      available: "125,000.00",
      minLimit: "1,000.00",
      maxLimit: "50,000.00",
      paymentMethods: ["Paytm", "IMPS", "Bank Transfer"],
      timeLimit: 30,
    },
    {
      id: 3,
      advertiser: {
        name: "FastExchange",
        completionRate: 99.78,
        trades: 8934,
        isVerified: true,
        isPro: true,
      },
      price: 84.60,
      currency: "INR",
      available: "250,000.00",
      minLimit: "2,000.00",
      maxLimit: "100,000.00",
      paymentMethods: ["UPI", "PhonePe", "IMPS", "NEFT"],
      timeLimit: 20,
    },
    {
      id: 4,
      advertiser: {
        name: "CoinMaster",
        completionRate: 97.45,
        trades: 2156,
        isVerified: false,
        isPro: false,
      },
      price: 84.65,
      currency: "INR",
      available: "75,000.00",
      minLimit: "500.00",
      maxLimit: "25,000.00",
      paymentMethods: ["Google Pay", "Paytm"],
      timeLimit: 45,
    },
    {
      id: 5,
      advertiser: {
        name: "BitTrader99",
        completionRate: 99.12,
        trades: 4782,
        isVerified: true,
        isPro: true,
      },
      price: 84.62,
      currency: "INR",
      available: "180,000.00",
      minLimit: "1,500.00",
      maxLimit: "75,000.00",
      paymentMethods: ["UPI", "RTGS", "Bank Transfer"],
      timeLimit: 25,
    },
    {
      id: 6,
      advertiser: {
        name: "CryptoKing",
        completionRate: 96.83,
        trades: 1432,
        isVerified: true,
        isPro: false,
      },
      price: 84.67,
      currency: "INR",
      available: "95,000.00",
      minLimit: "800.00",
      maxLimit: "30,000.00",
      paymentMethods: ["PhonePe", "Amazon Pay", "UPI"],
      timeLimit: 35,
    },
    {
      id: 7,
      advertiser: {
        name: "IndiaCrypto",
        completionRate: 98.94,
        trades: 6234,
        isVerified: true,
        isPro: true,
      },
      price: 84.55,
      currency: "INR",
      available: "300,000.00",
      minLimit: "3,000.00",
      maxLimit: "150,000.00",
      paymentMethods: ["IMPS", "NEFT", "UPI", "Bank Transfer"],
      timeLimit: 15,
    },
    {
      id: 8,
      advertiser: {
        name: "DigitalRupee",
        completionRate: 97.67,
        trades: 2987,
        isVerified: false,
        isPro: false,
      },
      price: 84.70,
      currency: "INR",
      available: "65,000.00",
      minLimit: "600.00",
      maxLimit: "20,000.00",
      paymentMethods: ["Paytm", "Google Pay"],
      timeLimit: 40,
    },
    {
      id: 9,
      advertiser: {
        name: "SwiftCrypto",
        completionRate: 99.25,
        trades: 7845,
        isVerified: true,
        isPro: true,
      },
      price: 84.59,
      currency: "INR",
      available: "220,000.00",
      minLimit: "2,500.00",
      maxLimit: "90,000.00",
      paymentMethods: ["UPI", "PhonePe", "IMPS"],
      timeLimit: 20,
    },
    {
      id: 10,
      advertiser: {
        name: "TrustTrader",
        completionRate: 98.45,
        trades: 3456,
        isVerified: true,
        isPro: false,
      },
      price: 84.63,
      currency: "INR",
      available: "140,000.00",
      minLimit: "1,200.00",
      maxLimit: "60,000.00",
      paymentMethods: ["Bank Transfer", "RTGS", "NEFT"],
      timeLimit: 30,
    },
    {
      id: 11,
      advertiser: {
        name: "CoinExpert",
        completionRate: 99.87,
        trades: 9234,
        isVerified: true,
        isPro: true,
      },
      price: 84.54,
      currency: "INR",
      available: "400,000.00",
      minLimit: "5,000.00",
      maxLimit: "200,000.00",
      paymentMethods: ["UPI", "IMPS", "NEFT", "RTGS", "Bank Transfer"],
      timeLimit: 10,
    },
    {
      id: 12,
      advertiser: {
        name: "NewbieCrypto",
        completionRate: 95.23,
        trades: 567,
        isVerified: false,
        isPro: false,
      },
      price: 84.75,
      currency: "INR",
      available: "25,000.00",
      minLimit: "300.00",
      maxLimit: "8,000.00",
      paymentMethods: ["Google Pay", "PhonePe"],
      timeLimit: 60,
    },
    {
      id: 13,
      advertiser: {
        name: "PremiumExchange",
        completionRate: 99.95,
        trades: 12456,
        isVerified: true,
        isPro: true,
      },
      price: 84.52,
      currency: "INR",
      available: "500,000.00",
      minLimit: "10,000.00",
      maxLimit: "500,000.00",
      paymentMethods: ["Bank Transfer", "RTGS", "SWIFT"],
      timeLimit: 5,
    },
    {
      id: 14,
      advertiser: {
        name: "MobileCrypto",
        completionRate: 98.12,
        trades: 2345,
        isVerified: true,
        isPro: false,
      },
      price: 84.68,
      currency: "INR",
      available: "85,000.00",
      minLimit: "700.00",
      maxLimit: "35,000.00",
      paymentMethods: ["UPI", "PhonePe", "Amazon Pay", "Freecharge"],
      timeLimit: 25,
    },
    {
      id: 15,
      advertiser: {
        name: "SafeTrading",
        completionRate: 99.34,
        trades: 5678,
        isVerified: true,
        isPro: true,
      },
      price: 84.61,
      currency: "INR",
      available: "175,000.00",
      minLimit: "1,800.00",
      maxLimit: "80,000.00",
      paymentMethods: ["IMPS", "UPI", "Bank Transfer"],
      timeLimit: 18,
    },
    {
      id: 16,
      advertiser: {
        name: "InstantCoin",
        completionRate: 97.89,
        trades: 1876,
        isVerified: false,
        isPro: false,
      },
      price: 84.72,
      currency: "INR",
      available: "55,000.00",
      minLimit: "400.00",
      maxLimit: "15,000.00",
      paymentMethods: ["Paytm", "Mobikwik", "Google Pay"],
      timeLimit: 45,
    },
    {
      id: 17,
      advertiser: {
        name: "EliteTrader",
        completionRate: 99.67,
        trades: 8765,
        isVerified: true,
        isPro: true,
      },
      price: 84.57,
      currency: "INR",
      available: "320,000.00",
      minLimit: "4,000.00",
      maxLimit: "120,000.00",
      paymentMethods: ["UPI", "IMPS", "NEFT", "Bank Transfer"],
      timeLimit: 12,
    },
    {
      id: 18,
      advertiser: {
        name: "BankingCrypto",
        completionRate: 98.76,
        trades: 3321,
        isVerified: true,
        isPro: false,
      },
      price: 84.64,
      currency: "INR",
      available: "110,000.00",
      minLimit: "1,000.00",
      maxLimit: "45,000.00",
      paymentMethods: ["Bank Transfer", "NEFT", "RTGS"],
      timeLimit: 35,
    },
    {
      id: 19,
      advertiser: {
        name: "QuickPay",
        completionRate: 96.45,
        trades: 1234,
        isVerified: false,
        isPro: false,
      },
      price: 84.73,
      currency: "INR",
      available: "42,000.00",
      minLimit: "250.00",
      maxLimit: "12,000.00",
      paymentMethods: ["UPI", "PhonePe"],
      timeLimit: 50,
    },
    {
      id: 20,
      advertiser: {
        name: "GlobalCrypto",
        completionRate: 99.88,
        trades: 15678,
        isVerified: true,
        isPro: true,
      },
      price: 84.53,
      currency: "INR",
      available: "750,000.00",
      minLimit: "15,000.00",
      maxLimit: "1,000,000.00",
      paymentMethods: ["Bank Transfer", "SWIFT", "RTGS", "Wire Transfer"],
      timeLimit: 8,
    }
  ];

  const paymentMethods = [
    { value: "all", label: "All payment methods", icon: null },
    { value: "lightning-upi", label: "Lightning UPI", icon: "bolt", recommended: true },
    { value: "upi", label: "UPI", icon: null, popular: true },
    { value: "imps", label: "IMPS", icon: null, popular: true },
    { value: "bank-transfer", label: "Bank Transfer (India)", icon: "lock", popular: true },
    { value: "phonepe", label: "PhonePe", icon: null },
    { value: "googlepay", label: "Google Pay", icon: null },
    { value: "paytm", label: "Paytm", icon: null },
  ];

  const togglePaymentMethod = (value) => {
    if (value === "all") {
      setSelectedPayments(["all"]);
    } else {
      setSelectedPayments(prev => {
        const withoutAll = prev.filter(p => p !== "all");
        if (withoutAll.includes(value)) {
          const newSelection = withoutAll.filter(p => p !== value);
          return newSelection.length === 0 ? ["all"] : newSelection;
        } else {
          return [...withoutAll, value];
        }
      });
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowCurrencyDropdown(false);
        setShowPaymentDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <P2PHeader
          activeMode={activeMode}
          setActiveMode={setActiveMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          showBeginnersGuide={showBeginnersGuide}
          setShowBeginnersGuide={setShowBeginnersGuide}
        />

        <P2PFilters
          selectedCrypto={selectedCrypto}
          setSelectedCrypto={setSelectedCrypto}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          selectedPayments={selectedPayments}
          setSelectedPayments={setSelectedPayments}
          showCurrencyDropdown={showCurrencyDropdown}
          setShowCurrencyDropdown={setShowCurrencyDropdown}
          showPaymentDropdown={showPaymentDropdown}
          setShowPaymentDropdown={setShowPaymentDropdown}
          cryptoList={cryptoList}
          currencies={currencies}
          paymentMethods={paymentMethods}
          togglePaymentMethod={togglePaymentMethod}
          currencySearch={currencySearch}
          setCurrencySearch={setCurrencySearch}
          paymentSearch={paymentSearch}
          setPaymentSearch={setPaymentSearch}
        />

        <P2PListings
          listings={p2pListings}
          activeTab={activeTab}
          selectedCurrency={selectedCurrency}
        />

        <BeginnersGuide
          show={showBeginnersGuide}
          onClose={() => setShowBeginnersGuide(false)}
        />
      </div>
    </div>
  );
};

export default P2P;
