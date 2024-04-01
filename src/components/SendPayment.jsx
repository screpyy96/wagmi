"use client"

import React, { useState, useEffect } from 'react';
import { useWriteContract, useSendTransaction } from 'wagmi';
import { parseEther } from "viem";
import usdtAbi from "../usdtAbi.json";
import usdcAbi from "../usdcAbi.json";
import { collection, addDoc, getDocs } from "firebase/firestore";
import firestore from '../config/firebase'

const SendPayment = ({address}) => {
    const { writeContract } = useWriteContract();
    const usdtContractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
    const usdcContractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    const receiverAddress = "0x95151cFb8538962C6405586C39596D4C3210c234";
  
    const { sendTransaction } = useSendTransaction();
    const [ethAmount, setEthAmount] = useState('');
    const [usdtAmount, setUsdtAmount] = useState('');
    const [usdcAmount, setUsdcAmount] = useState('');
    const [ethPrice, setEthPrice] = useState(0);
    const [totalTokensSold, setTotalTokensSold] = useState(0);
    const [totalTokensPresale, setTotalTokensPresale] = useState(0);
    const [totalSalesInDollars, setTotalSalesInDollars] = useState(0);
    const [totalCapitalRaised, setTotalCapitalRaised] = useState(0);

  
  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
        const data = await response.json();
        setEthPrice(data.USD);
        console.log(data.USD, "cct")
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
        let totalTokens = 0;
        salesSnapshot.forEach((doc) => {
          const saleData = doc.data();
          totalTokens += parseFloat(saleData.tokenNumber);
        });
        setTotalTokensSold(totalTokens);
  
        // Calculăm suma totală adunată în dolari
        const presalePricePerToken = 0.008; // Pretul unui token în dolari
        const totalCapitalRaised = totalTokens * presalePricePerToken;
        setTotalCapitalRaised(totalCapitalRaised);
      } catch (error) {
        console.error('Error fetching total token sales:', error);
      }
    };
  
    if (firestore) {
      fetchTotalSales();
    }
  }, [firestore]);
  
  const handleETHTransfer = async () => {
    try {
      await sendTransaction({
        to: receiverAddress,
        value: parseEther(ethAmount),
      });

      // Salvăm datele în Firebase
      await addDoc(collection(firestore, 'adrese'), {
        adresa: address,
        data: new Date(),
        moneda: 'ETH',
        suma: ethAmount,
        tokenNumber: calculatePrice(ethAmount, 'ETH')
      });
    } catch (error) {
      console.error("Error sending ETH:", error);
    }
  };

  const handleUSDTTransfer = () => {
    const amountString = (usdtAmount * 1000000).toString();

    writeContract({
      abi: usdtAbi,
      address: receiverAddress,
      functionName: 'transfer',
      args: [
        address,
        amountString,
      ],
    });

    // Salvăm datele în Firebase
    addDoc(collection(firestore, 'adrese'), {
      adresa: address,
      data: new Date(),
      moneda: 'USDT',
      suma: usdtAmount,
      tokenNumber: calculatePrice(usdtAmount, 'USDT')
    });
  };

  const handleUSDCTransfer = () => {
    writeContract({
      abi: usdcAbi,
      address: receiverAddress,
      functionName: 'transfer',
      args: [
        address,
        (parseFloat(usdcAmount) * 1e6).toString(),
      ],
    });

    // Salvăm datele în Firebase
    addDoc(collection(firestore, 'adrese'), {
      adresa: address,
      data: new Date(),
      moneda: 'USDC',
      suma: usdcAmount,
      tokenNumber: calculatePrice(usdcAmount, 'USDC')
    });
  };

  const calculatePrice = (amount, currency) => {
    let totalTokens = 0;
  
    if (currency === 'ETH') {
      if (!ethPrice) return 'Price not available';
      totalTokens = parseFloat(amount) / ethPrice; // Împarte suma investită la prețul per token (ETH)
    } else {
      totalTokens = parseFloat(amount) / 0.008; // Împarte suma investită la prețul per token (USDT, USDC)
    }
  
    return totalTokens.toFixed(2); // Returnează numărul total de tokeni cu două zecimale
  };
  
  // Calculăm progresul în procente
  const progressPercentage = (totalTokensSold / totalTokensPresale) * 100;

  
  console.log(ethPrice)
return (
    <div>
     <input type="text" value={ethAmount} onChange={(e) => setEthAmount(e.target.value)} placeholder="Enter ETH amount" />
      <button onClick={handleETHTransfer}>Transfer ETH</button>
  
      <input type="text" value={usdtAmount} onChange={(e) => setUsdtAmount(e.target.value)} placeholder="Enter USDT amount" />
      <button onClick={handleUSDTTransfer}>Transfer USDT</button>
  
      <input type="text" value={usdcAmount} onChange={(e) => setUsdcAmount(e.target.value)} placeholder="Enter USDC amount" />
      <button onClick={handleUSDCTransfer}>Transfer USDC</button> 
      
      <div>
        <p>Total Tokens Sold: {totalTokensSold }</p>
        <p>Total Sales in Dollars: ${totalSalesInDollars.toFixed(2) * 0.008}</p>
        <p>{progressPercentage}</p>
      </div>
    </div>
  );
  
};

export default SendPayment;
