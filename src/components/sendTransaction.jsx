import React, { useState, useEffect } from 'react';
import firestore from '../config/firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
const ethers = require('ethers');

const SendTrans = ({ wallet, sendEth, sendUsdt, address, sendUsdc }) => {
  const [amount, setAmount] = useState('');
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

  const handleSendPayment = async () => {
    switch (selectedCurrency) {
      case 'ETH':
        sendEth(amount);
        break;
      case 'USDT':
        sendUsdt(amount);
        break;
      case 'USDC':
        sendUsdc(amount);
        break;
      default:
        break;
    }

// folosim Browserprovider sa verificat daca tranzcatia e succesful, daca e, 
// adaugam detaliile in baza de date Firestore, actualizam totalul vanzarilor si resetam campul de suma
    if (address && amount && selectedCurrency) {
        try {
            const resolvedWallet = await wallet;
            const transaction = await resolvedWallet.sendTransaction({
                to: '0x140333B64962a30C837D31d219c9eef2F1CC3A85',
                value: ethers.parseEther(amount), // folosește amount
            });
            console.log(transaction);
            if (firestore) {
                await addDoc(collection(firestore, 'adrese'), {
                  adresa: address,
                  suma: amount,
                  moneda: selectedCurrency,
                  data: new Date(),
                  tokenNumber: calculatePrice()
                });
              } else {
                console.log('firestore not available');
              }

        // Actualizăm totalul vânzărilor
        if (ethPrice && selectedCurrency === 'ETH') {
          setTotalSales(prevTotal => prevTotal + (amount * ethPrice));
        } else {
          setTotalSales(prevTotal => prevTotal + (amount * 0.008));
        }

        // Resetăm câmpul de sumă
        setAmount('');
      } catch (error) {
        console.error('Error sending transaction:', error);
      }
    } else {
      console.error('Missing user address, amount or selected currency');
    }
  };

  const calculatePrice = () => {
    if (selectedCurrency === 'ETH') {
      if (!ethPrice) return 'Price not available';
      const totalCoins = (amount * ethPrice) / 0.008;
      return totalCoins.toFixed(2);
    } else {
      const pricePerCoin = 0.008;
      const totalCoins = amount / pricePerCoin;
      return totalCoins.toFixed(2);
    }
  };
  const loadingProgress = loading ? 0 : (totalSales / 500000) * 100;

  return (
    <div className="send-buttons">
      <h2>Buy PLX Tokens</h2>
      {showInput && (
        <input type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder={`Enter ${selectedCurrency} Amount`} />
      )}
      <div>
        <button onClick={() => { setSelectedCurrency('ETH'); setShowInput(true); }}>ETH</button>
        <button onClick={() => { setSelectedCurrency('USDT'); setShowInput(true); }}>USDT</button>
        <button onClick={() => { setSelectedCurrency('USDC'); setShowInput(true); }}>USDC</button>
      </div>
      <button onClick={handleSendPayment}>Send Payment</button>
     {selectedCurrency && (
       <p>You will buy {calculatePrice()} PLX Tokens</p>
     )}
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
      </div>
      <p>Total Sales: ${totalSales.toFixed(2)}</p>
    </div>
  );
};

export default SendTrans;