"use client"

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import Balanta from '../components/balanta'
import Navbar from "../components/navbar/navbar"
import Cards from '../components/Cards/Cards';
import ShowText from "../components/ShowText/ShowText"

export default function Home() {
  const [adresa, setAdresa] = useState(null);
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

//    const Spacer = styled.div`
//   height: 150px; /* Ajustați înălțimea pentru a se potrivi cu înălțimea meniului */
// `;
const Content = styled.div`
  height: 2000px; /* Doar pentru a crea spațiu pentru a face scrolling */
`;

  useEffect(() => {
    if (!isConnected) {
      console.log("open");
    } else {
      setAdresa(address)
    }
  }, [isConnected, open, address]);
  
    return (
      <div>
        <Navbar address={address}/>
        {/* <Spacer/> */}
        <Balanta address={address}/>
        <Cards />
        <ShowText />
        <Content/>
      </div>
    );
  };