import { useState, useEffect } from 'react';

export const useWalletBalance = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [balances, setBalances] = useState({
    BTC: "0.00",
    ETH: "0.00",
    USDT: "0.00",
    USDC: "0.00"
  });
  const [isLoading, setIsLoading] = useState(false);

  // Check if wallet is connected on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      setIsConnected(true);
      setWalletAddress(savedAddress);
      fetchBalances(savedAddress);
    }
  }, []);

  // Fetch balances from API (mock for now)
  const fetchBalances = async (address) => {
    setIsLoading(true);
    try {
      // Mock API call - replace with actual API in production
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock balances - replace with actual API response
      setBalances({
        BTC: "0.5421",
        ETH: "4.2145",
        USDT: "5000.25",
        USDC: "2500.75"
      });
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Error fetching balances:", error);
      setIsLoading(false);
      return false;
    }
  };

  // Get exchange rate between two coins (mock)
  const getExchangeRate = (fromCoin, toCoin) => {
    // Mock exchange rates - replace with actual API in production
    const rates = {
      "BTC-ETH": 16.5,
      "BTC-USDT": 66000,
      "BTC-USDC": 66000,
      "ETH-BTC": 0.06,
      "ETH-USDT": 4000,
      "ETH-USDC": 4000,
      "USDT-BTC": 0.000015,
      "USDT-ETH": 0.00025,
      "USDT-USDC": 1,
      "USDC-BTC": 0.000015,
      "USDC-ETH": 0.00025,
      "USDC-USDT": 1
    };
    
    if (fromCoin === toCoin) return 1;
    
    const key = `${fromCoin}-${toCoin}`;
    return rates[key] || 0;
  };

  // Calculate conversion amount
  const calculateConversion = (fromCoin, toCoin, amount) => {
    const rate = getExchangeRate(fromCoin, toCoin);
    return amount * rate;
  };

  // Execute swap (mock implementation)
  const executeSwap = async (fromCoin, toCoin, amount) => {
    try {
      // Mock API call - replace with actual API in production
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const rate = getExchangeRate(fromCoin, toCoin);
      const toAmount = amount * rate;
      
      // Update balances after swap
      setBalances(prev => ({
        ...prev,
        [fromCoin]: (parseFloat(prev[fromCoin]) - amount).toFixed(4),
        [toCoin]: (parseFloat(prev[toCoin]) + toAmount).toFixed(4)
      }));
      
      // Return success response
      return {
        success: true,
        fromCoin,
        toCoin,
        fromAmount: amount,
        toAmount,
        txHash: "0x" + Math.random().toString(16).substring(2, 42)
      };
    } catch (error) {
      console.error("Swap error:", error);
      return {
        success: false,
        error: error.message || "Unknown error"
      };
    }
  };

  return {
    isConnected,
    walletAddress,
    balances,
    isLoading,
    fetchBalances,
    getExchangeRate,
    calculateConversion,
    executeSwap
  };
};
