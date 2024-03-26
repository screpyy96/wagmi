import React, { useState, useEffect } from 'react';
import { useSendTransaction, useAccount, useBalance } from 'wagmi';
import { parseEther, parseUnits } from 'viem';

const SendTransaction = () => {
  const { data: hash, isPending, sendTransaction } = useSendTransaction();
  const { isConnected, address } = useAccount();
  const [selectedCurrency, setSelectedCurrency] = useState('ETH');
  const [value, setValue] = useState('');
  const ethBalance = useBalance({
    address: address,
    chainId: 1, // ID-ul lanțului Ethereum (Mainnet)
    currency: 'ETH',
  });
  const usdtBalance = useBalance({
    address: address,
    chainId: 1, // ID-ul lanțului Ethereum (Mainnet)
    currency: 'USDT',
  });
  const usdcBalance = useBalance({
    address: address,
    chainId: 1, // ID-ul lanțului Ethereum (Mainnet)
    currency: 'USDC',
  });

  const sendTransactionToAddress = async (toAddress, amount, currency) => {
    try {
      // Implementarea pentru trimiterea altor tokenuri decât ETH
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = parseEther(value);
    try {
      switch (selectedCurrency) {
        case 'ETH':
          await sendTransaction({ to: '0x95151cFb8538962C6405586C39596D4C3210c234', value: amount });
          break;
        case 'USDT':
          await sendTransactionToAddress('0x95151cFb8538962C6405586C39596D4C3210c234', amount, 'USDT');
          break;
        case 'USDC':
          await sendTransactionToAddress('0x95151cFb8538962C6405586C39596D4C3210c234', amount, 'USDC');
          break;
        default:
          throw new Error('Invalid currency');
      }
    } catch (error) {
      console.error('Error submitting transaction:', error);
    }
  };
console.log(usdtBalance)
  return (
    <div>
      <div>
        <button onClick={() => setSelectedCurrency('ETH')} disabled={isPending}>ETH</button>
        <button onClick={() => setSelectedCurrency('USDT')} disabled={isPending}>USDT</button>
        <button onClick={() => setSelectedCurrency('USDC')} disabled={isPending}>USDC</button>
      </div>
      <div>
        {/* {selectedCurrency === 'ETH' && <p>ETH Balance: {ethBalance.data}</p>}
        {selectedCurrency === 'USDT' && <p>USDT Balance: {usdtBalance.data}</p>}
        {selectedCurrency === 'USDC' && <p>USDC Balance: {usdcBalance.data}</p>} */}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="value"
          placeholder="0.05"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={isPending} type="submit">{isPending ? 'Confirming...' : 'Send'}</button>
        {hash && <div>Transaction Hash: {hash}</div>}
      </form>
    </div>
  );
};

export default SendTransaction;
