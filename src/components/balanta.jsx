import { useBalance } from 'wagmi';

function Balanta({ address }) {
  // Adresa contractului USDT
  const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  // Adresa contractului USDC
  const usdcContractAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

  // Balanța pentru ETH
  const ethBalance = useBalance({
    address: address,
    chainId: 1, // ID-ul lanțului Ethereum (Mainnet)
    currency: 'ETH',
  });

  // Balanța pentru USDT
  const usdtBalance = useBalance({
    chain: "sepolia",
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
    </div>
  );
}

export default Balanta;
