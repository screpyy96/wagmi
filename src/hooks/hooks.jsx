import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const loadConnectedWallet = async () => {
      try {
        const connectedAddress = localStorage.getItem('connectedAddress');
        if (connectedAddress) {
          await connectToMetaMask();
        }
      } catch (error) {
        console.error('Error loading connected wallet:', error);
      }
    };

    loadConnectedWallet();

    // Cleanup
    return () => {
      // Cleanup code here
    };
  }, []); // Efectul rulează doar o dată, la montarea componentei

  const connectToMetaMask = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.error('No ethereum wallet found');
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      if (accounts.length > 0) {
        const signer = provider.getSigner();
        setWallet(signer);
        const newAddress = await signer.then(res => res.address).then(adr =>adr)
        localStorage.setItem('connectedAddress', newAddress);
      }

      ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length > 0) {
          const signer = provider.getSigner();
          setWallet(signer);
          const newAddress = await signer.then(res => res.address).then(adr =>adr)
          localStorage.setItem('connectedAddress', newAddress);
        } else {
          setWallet(null);
          localStorage.removeItem('connectedAddress');
          console.log('Wallet disconnected');
        }
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const connectWallet = async () => {
    await connectToMetaMask();
  };

  const disconnectWallet = () => {
    setWallet(null);
    localStorage.removeItem('connectedAddress');
  };

  return { wallet, connectWallet, disconnectWallet };
};