// components/Balance.js
import React from 'react';

const Balance = ({ ethBalance, usdtBalance, usdcBalance }) => {
  return (
    <div>
      <h2>User Balances</h2>
      <p>ETH Balance: {ethBalance}</p>
      <p>USDT Balance: {usdtBalance}</p>
      <p>USDC Balance: {usdcBalance}</p>
    </div>
  );
};

export default Balance;