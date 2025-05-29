import { WagmiConfig, createConfig } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { polygonAmoy } from 'viem/chains'
import { Web3Modal } from '@web3modal/html'
import { EthereumClient } from '@web3modal/ethers'

const chains = [polygonAmoy]
const projectId = 'YOUR_WALLETCONNECT_ID'

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: polygonAmoy,
    transport: http()
  })
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3Modal = new Web3Modal({ projectId, chains })

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}