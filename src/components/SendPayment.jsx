"use client"
import React, { useState, useEffect } from 'react';
import { useWriteContract, useSendTransaction } from 'wagmi';
import { parseEther } from "viem";
import usdtAbi from "../usdtAbi.json";
import usdcAbi from "../usdcAbi.json";
import { collection, addDoc, getDocs } from "firebase/firestore";
import firestore from '../config/firebase'

const SendPayment = ({ ethBalance, usdtBalance, usdcBalance }) => {
  const { writeContract } = useWriteContract();
  const usdtContractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
  const usdcContractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
  const receiverAddress = "0x140333B64962a30C837D31d219c9eef2F1CC3A85";

  // State-uri pentru a stoca sumele introduse de utilizator pentru fiecare monedă
  const [ethAmount, setEthAmount] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const [usdcAmount, setUsdcAmount] = useState('');

  const { sendTransaction } = useSendTransaction();
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [ethPrice, setEthPrice] = useState(null);
  const [totalSales, setTotalSales] = useState(0);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        setEthPrice(data.ethereum.usd);
      } catch (error) {
        console.error('Error fetching ETH price:', error);
      }
    };

    fetchEthPrice();
  }, []);


  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const salesCollection = collection(firestore, 'adrese');
        const salesSnapshot = await getDocs(salesCollection);
        let total = 0;
        salesSnapshot.forEach((doc) => {
          const saleData = doc.data();
          if (saleData.moneda === 'ETH') {
            total += parseFloat(saleData.suma) * parseFloat(ethPrice);
          } else {
            total += parseFloat(saleData.suma) * 0.008;
          }
        });
        setTotalSales(total);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching total sales:', error);
      }
    };

    if (firestore && ethPrice) {
      fetchTotalSales();
    }
  }, [firestore, ethPrice]);
  // Funcție pentru trimiterea de ETH către adresa specificată
  const handleETHTransfer = async () => {
    if (ethAmount > ethBalance.data.value) {
      alert("Insufficient ETH balance.");
      return;
    }

    try {
      await sendTransaction({
        to: receiverAddress,
        value: parseEther(ethAmount),
      });
    } catch (error) {
      console.error("Error sending ETH:", error);
    }
  };

  const calculatePrice = () => {
    if (selectedCurrency === 'ETH') {
      if (!ethPrice) return 'Price not available';
      const totalCoins = (ethAmount * ethPrice) / 0.008;
      return totalCoins.toFixed(2);
    } else {
      const pricePerCoin = 0.008;
      const totalCoins = ethAmount / pricePerCoin;
      return totalCoins.toFixed(2);
    }
  };

  // Funcție pentru trimiterea de USDT către adresa specificată
  const handleUSDTTransfer = () => {
    const amountString = (usdtAmount * 1000000).toString();

    if (parseFloat(usdtAmount) > usdtBalance.data.value) {
      alert("Insufficient USDT balance.");
      return;
    }

    writeContract({
      abi: usdtAbi,
      address: usdtContractAddress,
      functionName: 'transfer',
      args: [
        receiverAddress,
        amountString,
      ],
    });
  };

  // Funcție pentru trimiterea de USDC către adresa specificată
  const handleUSDCTransfer = () => {
    if (!usdcAmount || isNaN(parseFloat(usdcAmount))) {
      alert("Please enter a valid amount for USDC.");
      return;
    }

    if (parseFloat(usdcAmount) > usdcBalance.data.value) {
      alert("Insufficient USDC balance.");
      return;
    }

    writeContract({
      abi: usdcAbi,
      address: usdcContractAddress,
      functionName: 'transfer',
      args: [
        receiverAddress,
        (parseFloat(usdcAmount) * 1e6).toString(),
      ],
    });
  };

  return (
    <div>
      <input type="text" value={ethAmount} onChange={(e) => setEthAmount(e.target.value)} placeholder="Enter ETH amount" />
      <button onClick={handleETHTransfer}>Transfer ETH</button>

      <input type="text" value={usdtAmount} onChange={(e) => setUsdtAmount(e.target.value)} placeholder="Enter USDT amount" />
      <button onClick={handleUSDTTransfer}>Transfer USDT</button>

      <input type="text" value={usdcAmount} onChange={(e) => setUsdcAmount(e.target.value)} placeholder="Enter USDC amount" />
      <button onClick={handleUSDCTransfer}>Transfer USDC</button>

      <p>You will buy {calculatePrice()} PLX Tokens</p>
    </div>
  );
};

export default SendPayment;
