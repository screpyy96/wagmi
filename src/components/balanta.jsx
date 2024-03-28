import React from 'react';
import SendPayment from "./SendPayment";
import { useBalance } from 'wagmi';

function Balanta({ address }) {
  // Adresa contractului USDT
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
    <div>
      <p>ETH Balance: {ethBalance.data ? ethBalance.data.formatted : 'Loading...'}</p>
      <p>USDT Balance: {usdtBalance.data ? usdtBalance.data.formatted : 'Loading...'}</p>
      <p>USDC Balance: {usdcBalance.data ? usdcBalance.data.formatted : 'Loading...'}</p>
      <SendPayment 
        address={address} 
        ethBalance={ethBalance}
        usdtBalance={usdtBalance}
        usdcBalance={usdcBalance}
      />
    </div>
  );
}

export default Balanta;
