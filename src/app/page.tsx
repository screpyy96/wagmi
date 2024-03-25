"use client"

import React, { useEffect, useState } from 'react';
import Connect from '@/components/Connect';
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import SendTrans from '../components/SendTransaction';
import { ethers } from "ethers";
import {useWallet} from '../hooks/hooks'
import usdcAbi from '../usdcAbi.json';
import usdtAbi from '../usdtAbi.json';
import Balance from '../components/Balance'


export default function Home() {
  const { wallet} = useWallet();
  const [ethBalance, setEthBalance] = useState(null);
  const [usdtBalance, setUsdtBalance] = useState(null);
  const [usdcBalance, setUsdcBalance] = useState(null); // Setăm valoarea inițială la '0'
  const [userAddress, setUserAddress] = useState(null);

  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  const usdcContractAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

  useEffect(() => {
    if (!isConnected) {
      console.log("open");
    } else {
      console.log(address, "oare");
    }
  }, [isConnected, open, address]);
  
  
  
  
    useEffect(() => {
      const fetchBalances = async () => {
        if (!wallet) return;
  
        try {
          const resolvedWallet = await wallet;
          const address = await resolvedWallet.getAddress();
          setUserAddress(address);
  
          const provider = new ethers.BrowserProvider(window.ethereum);
          const ethBalance = await provider.getBalance(address);
          const formattedEthBalance = ethers.formatEther(ethBalance);
          setEthBalance(formattedEthBalance);
  
          await fetchTokenBalance(provider, address, usdtContractAddress, setUsdtBalance);
          await fetchTokenBalance(provider, address, usdcContractAddress, setUsdcBalance);
        } catch (error) {
          console.error('Error fetching balances:', error);
          // Handle errors, maybe notify the user
        }
      };
  
      fetchBalances();
    }, [wallet]);
  
    const fetchTokenBalance = async (provider, address, tokenAddress, setBalance) => {
      let tokenContract;
      if (tokenAddress === usdtContractAddress) {
        tokenContract = new ethers.Contract(tokenAddress, usdtAbi, provider);
      } else if (tokenAddress === usdcContractAddress) {
        tokenContract = new ethers.Contract(tokenAddress, usdcAbi, provider);
      }
  
      if (tokenContract && tokenContract.balanceOf) { // Verificăm dacă funcția balanceOf este definită în contract
        const tokenBalance = await tokenContract.balanceOf(address);
        const formattedTokenBalance = ethers.formatUnits(tokenBalance, 6);
        setBalance(formattedTokenBalance);
      } else {
        // Dacă funcția balanceOf nu este definită, setăm balanța la 0
        console.log(setBalance)
      }
    };
  

  
    const sendEth = async (amount) => {
      if (wallet) {
        const resolvedWallet = await wallet;
        const transaction = await resolvedWallet.sendTransaction({
          to: '0xA78C610219062236B087b3626D1F13A2f2C91aE7',
          value: ethers.parseEther(amount),
        });
        console.log(transaction);
      }
    };
  
    const sendUsdt = async (amount) => {
      if (wallet) {
        const resolvedWallet = await wallet;
        const usdtContract = new ethers.Contract(usdtContractAddress, ['function transfer(address, uint)'], resolvedWallet);
        const transaction = await usdtContract.transfer('0xA78C610219062236B087b3626D1F13A2f2C91aE7', ethers.parseUnits(amount, 6));
        console.log(transaction);
      }
    };
  
    const sendUsdc = async (amount) => {
      if (wallet) {
        const resolvedWallet = await wallet;
        const usdcContract = new ethers.Contract(usdcContractAddress, ['function transfer(address, uint)'], resolvedWallet);
        const transaction = await usdcContract.transfer('0xA78C610219062236B087b3626D1F13A2f2C91aE7', ethers.parseUnits(amount, 6));
        console.log(transaction);
      }
    };
  
    return (
      <div>
        <Connect/>
        <Balance ethBalance={ethBalance} usdtBalance={usdtBalance} usdcBalance={usdcBalance} />
       <SendTrans sendEth={sendEth} sendUsdt={sendUsdt} sendUsdc={sendUsdc} address={address} wallet={wallet}/>
      </div>
    );
  };