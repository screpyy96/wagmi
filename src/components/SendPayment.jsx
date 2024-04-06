import React, { useState, useEffect } from 'react';
import { useWriteContract, useSendTransaction } from 'wagmi';
import { parseEther } from "viem";
// import usdtAbi from "../usdtAbi.json";
// import usdcAbi from "../usdcAbi.json";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

import firestore from '../config/firebase'
import ProgressBar from './ProgressBar'
import {Option,BuyButton, GetTokensButton, ButtonContainer, SelectCurrency, StyledText, Container, Modal, Button, InfoContainer, Input,SpanModal,Price } from './Main.styled'
import Connect from './Connect';
import { Logo } from './navbar/Navbar.styled';

const SendPayment = ({ address, isConnected, ethBalance, usdtBalance, usdcBalance }) => {
  // const { writeContract } = useWriteContract();
  const receiverAddress = "0x95151cFb8538962C6405586C39596D4C3210c234";

  const { sendTransaction } = useSendTransaction();
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [ethPrice, setEthPrice] = useState(0);

  const [totalCapitalRaised, setTotalCapitalRaised] = useState(0);
  const [tokensOwned, setTokensOwned] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
        const data = await response.json();
        setEthPrice(data.USD);
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
        let totalCapital = 0;
  
        salesSnapshot.forEach((doc) => {
          const saleData = doc.data();
          let transactionAmount = parseFloat(saleData.suma);
  
          // Convertim sumele în USDT
          if (saleData.moneda === 'ETH') {
            transactionAmount *= ethPrice;
          } else if (saleData.moneda === 'USDC') {
            transactionAmount *= 0.008;
          } else if (saleData.moneda === "USDT") {
            transactionAmount *= 0.008;
          }
  
          totalCapital += transactionAmount;
        });
  
        setTotalCapitalRaised(totalCapital);
      } catch (error) {
        console.error('Error fetching total sales:', error);
      }
    };
  
    if (firestore && ethPrice) {
      fetchTotalSales();
    }
  }, [firestore, ethPrice]);
  
  useEffect(() => {
    const fetchUserSales = async () => {
      try {
        const salesCollection = collection(firestore, 'adrese');
        const q = query(salesCollection, where("adresa", "==", address));
        const salesSnapshot = await getDocs(q);
        let totalTokens = 0;
  
        salesSnapshot.forEach((doc) => {
          const saleData = doc.data();
          totalTokens += parseFloat(saleData.tokenNumber);
        });
  
        setTokensOwned(totalTokens.toLocaleString('en-US', { maximumFractionDigits: 2 }));
      } catch (error) {
        console.error('Error fetching user sales:', error);
      }
    };
  
    if (firestore && address) {
      fetchUserSales();
    }
  }, [firestore, address]);
  

  const handleTransfer = async () => {
    try {
      let currencyAmount = amount;
      if(selectedCurrency === 'ETH') {
        currencyAmount = parseEther(amount);
      } else {
        currencyAmount = amount * 1e6; // Convert to USDT or USDC format
      }
      await sendTransaction({
        to: receiverAddress,
        value: currencyAmount,
      });

      // Salvăm datele în Firebase, inclusiv tokenNumber-ul calculat
      await addDoc(collection(firestore, 'adrese'), {
        adresa: address,
        data: new Date(),
        moneda: selectedCurrency,
        suma: amount,
        tokenNumber: calculatePrice() // Adăugăm tokenNumber-ul calculat aici
      });
    } catch (error) {
      console.error("Error sending transaction:", error);
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

  const targetAmount = 200000; 
  useEffect(() => {
    // Verificăm dacă totalCapitalRaised este disponibil
    if (totalCapitalRaised !== 0) {
      
      // Calculăm procentul de completare
      const percentage = (totalCapitalRaised / targetAmount) * 100;
      setProgressPercentage(percentage);
      console.log(percentage, "procent")
      console.log(totalCapitalRaised, "capital")
    }
  }, [totalCapitalRaised]);
  
  const formatBalance = (balance, currency) => {
    if (currency === 'ETH') {
      return balance ? parseFloat(balance?.data?.formatted).toFixed(3) : 'Loading...';
    } else {
      return balance ? parseFloat(balance?.data?.formatted).toFixed(2) : 'Loading...';
    }
  };

  return (
    <Container>
      <div>
      <StyledText>
      <span className="title">Accelerating Progress with <br/>AI-Powered Knowledge Discovery</span><br/><br/><br/><br/>
      In an increasingly connected world where information flows between us, AI is reshaping the progress and scientific discovery. 
      Harness AI to transform knowledge into innovation. 
      Embark on a voyage with <span className="highlight">Exploras</span>: let your data ignite the spark of revolutionary discoveries.
    </StyledText>
      </div>

      <Modal>
        <SpanModal>
         <p className='title'>
          
          Phase 1 Price!  
          </p> 
        <ButtonContainer>
          <BuyButton>Buy with crypto</BuyButton>
          <GetTokensButton>Get free tokens</GetTokensButton>
        </ButtonContainer>
        </SpanModal>
        <ProgressBar progress={progressPercentage} />
        <Price>
        <p>Total Capital Raised: {totalCapitalRaised.toLocaleString('en-US', { maximumFractionDigits: 2 })} USD</p>
          <p>Target: 200,000 USD</p>
        </Price>
        {/* Meniu dropdown pentru selectarea monedei */}
        <SelectCurrency value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
          <Option value="USDT" className="usdt">USDT</Option>
          <Option value="ETH" className="eth">Ethereum</Option>
          <Option value="USDC" className="usdc">USDC</Option>
          {/* Alte opțiuni pentru alte monede */}
      </SelectCurrency>
 
        <Input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Enter ${selectedCurrency ? selectedCurrency : 'Currency'} amount`}
        />
  
        <Input
        type="text"
        placeholder={`EXP: ${calculatePrice()} `}
        style={{
          backgroundImage: `url(../../../coin.svg)`,
          backgroundSize: '30px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          paddingLeft: '40px'
        }}
      />
        <Button onClick={handleTransfer}>Buy with {selectedCurrency}</Button>

          <p>You will buy {calculatePrice()} tokens</p>
        <InfoContainer>

          <p>Total Tokens Owned: {tokensOwned}</p>
        </InfoContainer>
      </Modal>

      
          <p>{formatBalance(ethBalance, 'ETH')}</p>
          <p>{formatBalance(usdtBalance, 'USDT')}</p>
          <p>{formatBalance(usdcBalance, 'USDC')}</p>

    </Container>
  );

};

export default SendPayment;
