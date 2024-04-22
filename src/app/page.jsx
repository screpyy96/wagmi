"use client"
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useBalance } from 'wagmi';
import SendPayment from '../components/SendPayment';
import Navbar from "../components/navbar/navbar"
import Cards from '../components/Cards/Cards';
import ShowText from "../components/ShowText/ShowText"
import Exploras from "../components/Exploras/Exploras"
import Timeline from "../components/roadmap/roadmap";

export default function Home() {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  // Adresa contractului USDC
  const usdcContractAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
  // Balanța pentru ETH
  const ethBalance = useBalance({
    address: address,
    currency: 'ETH',
  });
  // Balanța pentru USDT
  const usdtBalance = useBalance({
    address,
    token: usdtContractAddress, 
  });

  // Balanța pentru USDC
  const usdcBalance = useBalance({
    address,
    token: usdcContractAddress, 
  });

  return (
    <>
      <Navbar/>
      <SendPayment 
        address={address} 
        ethBalance={ethBalance}
        usdtBalance={usdtBalance}
        usdcBalance={usdcBalance}
        />

      <Cards />
      <ShowText />
      <Exploras/>

    </>
  );
}
