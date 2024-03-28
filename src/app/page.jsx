"use client"

import React, { useEffect, useState } from 'react';
import Connect from '@/components/Connect';
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import Balanta from '../components/balanta'


export default function Home() {

  const [adresa, setAdresa] = useState(null);

  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

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
         <Balanta address={address}/>
         
      </div>
    );
  };