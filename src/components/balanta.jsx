import React from 'react';
import SendPayment from "./SendPayment";
import { useBalance } from 'wagmi';

const Balanta = ({ address }) => {
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

  const formatBalance = (balance, currency) => {
    if (currency === 'ETH') {
      return balance ? parseFloat(balance?.data?.formatted).toFixed(3) : 'Loading...';
    } else {
      return balance ? parseFloat(balance?.data?.formatted).toFixed(2) : 'Loading...';
    }
  };

  return (
    <div>
      <div>
      <SendPayment 
        address={address} 
        ethBalance={ethBalance}
        usdtBalance={usdtBalance}
        usdcBalance={usdcBalance}
        />
        <div style={{borderLeft: "2px solid black"}}> 
                  <p>ETH Balance: {formatBalance(ethBalance, 'ETH')}</p>
         <p>USDT Balance: {formatBalance(usdtBalance, 'USDT')}</p>
         <p>USDC Balance: {formatBalance(usdcBalance, 'USDC')}</p>

         </div>
        
      </div>
    </div>
  );
}

export default Balanta;
