"use client"

import React, { useEffect, useState } from 'react';
import Connect from '@/components/Connect';
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import   SendTransaction  from '../components/SendTransaction';
import { ethers } from "ethers";
import {useWallet} from '../hooks/hooks'
import usdcAbi from '../usdcAbi.json';
import usdtAbi from '../usdtAbi.json';
import Balance from '../components/Balance'


export default function Home() {

  const [adresa, setAdresa] = useState(null);

  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  const usdcContractAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

  useEffect(() => {
    if (!isConnected) {
      console.log("open");
    } else {
      setAdresa(address)
    }
  }, [isConnected, open, address]);
  
  

  console.log(adresa)
  

  
    return (
      <div>
        <Connect/>
        {/* <Balance ethBalance={ethBalance} usdtBalance={usdtBalance} usdcBalance={usdcBalance} /> */}
       {/* <SendTrans sendEth={sendEth} sendUsdt={sendUsdt} sendUsdc={sendUsdc} adresa={adresa} wallet={wallet}/> */}
      <SendTransaction address={address}/>
      </div>
    );
  };