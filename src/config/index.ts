import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const projectId = "c8babc3c416d687bd5c8276710b55e45"

if (!projectId) throw new Error('Project ID is not defined')

export const config = defaultWagmiConfig({
  projectId,
  chains: [mainnet, sepolia],
  metadata: {
    name: 'Exploras ',
    description: 'Seamless bookings - Rewarding experiences | The future of travel',
    url: 'https://myapp.com',
    icons: ['https://myapp.com/favicon.ico']
  },
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true
})
