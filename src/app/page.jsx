"use client"

import React, { useEffect, useState } from 'react';

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import Balanta from '../components/balanta'
// import logoImage from '../../public/logo.jpg'
import Navbar from "../components/navbar/navbar"
// const logoImage = "https://media.discordapp.net/attachments/908446871037571075/1223616311846764584/Designer.png?ex=661a807e&is=66080b7e&hm=5787b5be1c6a14e6aad6806ef2052c6365fedb873d771214a3b6bff887691726&=&format=webp&quality=lossless&width=1636&height=934"
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
  
  

  

  
    return (
      <div>

  <Navbar address={address}>

</Navbar>
        
          
         <Balanta address={address}/>
         
      </div>
    );
  };