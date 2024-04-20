import React, { useState, useEffect } from 'react';
import { useWriteContract, useSendTransaction } from 'wagmi';
import {  parseEther } from "viem";
// import usdtAbi from "../usdtAbi.json";
// import usdcAbi from "../usdcAbi.json";
import styled from 'styled-components';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";


import firestore from '../config/firebase'
import ProgressBar from './ProgressBar'
import {StyledIcon,SocialMedia,WaitlistBtn, PriceText,PriceLine,PriceContainer,Option,BuyButton, GetTokensButton, ButtonContainer, SelectCurrency, StyledText, Container, Modal, Button, InfoContainer, Input,SpanModal,Price } from './Main.styled'

// const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
// const usdcContractAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const receiverAddress = "0x140333B64962a30C837D31d219c9eef2F1CC3A85";
const SendPayment = ({ address, isConnected, ethBalance, usdtBalance, usdcBalance }) => {
  
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");
  const [ethPrice, setEthPrice] = useState(0);
  const [totalCapitalRaised, setTotalCapitalRaised] = useState(0);
  const [tokensOwned, setTokensOwned] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const { sendTransaction } = useSendTransaction();




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
        } else if (saleData.moneda === 'USDC' && saleData.moneda === "USDT") {
          transactionAmount
        }

        totalCapital += transactionAmount;
      });

      setTotalCapitalRaised(totalCapital);
      console.log(totalCapital)
    } catch (error) {
      console.error('Error fetching total sales:', error);
    }
  };
  useEffect(() => {
  
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
        // const ethValue = dollars / ethPriceInDollars;
        let rataSchimb = ethPrice // Trebuie să obții rata de schimb actuală
        currencyAmount = amount / rataSchimb; // Convert to USDT or USDC format
      }
      console.log(currencyAmount, "ceva")
      await sendTransaction({
        to: receiverAddress,
        value: currencyAmount,
      }); 
      
      fetchTotalSales();
      setAmount("")
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
      <span className="title" style={{fontSize: '30px'}}>Exploras Coin & Solutions <br/>
      <span className="highlight">AI-Powered Knowledge Discovery </span></span><br/>
      The trajectory of Exploras Coin is akin to a finely tuned compass, guiding us through the ever-changing currents of the cryptocurrency landscape. 
      <br/>
      Embark on a voyage with <span className="highlight"> Exploras: </span>let your data ignite the spark of revolutionary discoveries.
    </StyledText>
    <WaitlistBtn>
      <Button style={{width: "60%"}}>Join Waitlist</Button>
      <SocialMedia>
            <StyledIcon src="../../../discord.svg" alt="Discord Icon" />
            <StyledIcon src="../../../telegram.svg" alt="Telegram Icon" />
            <StyledIcon src="../../../x.svg" alt="Twitter Icon" />
      </SocialMedia>
    </WaitlistBtn>
      </div>

       <Modal> 
      <SpanModal>
          <p style={{fontSize: '1.5rem'}}>Phase 1 Price</p>
        <PriceContainer>
      <PriceLine />
      <PriceText>$ 0.008</PriceText>
      <PriceLine />
    </PriceContainer>
        <ButtonContainer>
          <BuyButton>Buy with crypto</BuyButton>
          <GetTokensButton>Get free tokens</GetTokensButton>
        </ButtonContainer>
        </SpanModal> 
        <ProgressBar progress={progressPercentage} />
        <Price>
        <p>USD Raised: {totalCapitalRaised.toLocaleString('en-US', { maximumFractionDigits: 2 })}/200.000</p>
          
        </Price>
        {/* Meniu dropdown pentru selectarea monedei */}
        <SelectCurrency value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
  <Option value="ETH" className="eth">ETH {formatBalance(ethBalance, 'ETH')}</Option>
  <Option value="USDT" className="usdt">USDT {formatBalance(usdtBalance, 'USDT')}</Option>
  <Option value="USDC" className="usdc">USDC {formatBalance(usdcBalance, 'USDC')}</Option>
  {/* Alte opțiuni pentru alte monede */}
</SelectCurrency>
 
        <Input
          type="number"
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
          paddingLeft: '40px',
        }}
      />
        <Button onClick={handleTransfer}>[ Minimum buy is $85 USD ]{selectedCurrency}</Button>
        <InfoContainer>

          <p>Total Tokens Owned: {tokensOwned}</p>
        </InfoContainer>
      </Modal>
    </Container>
  );

};

export default SendPayment;
