import { createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public' // Correct import path
import { EthereumClient } from '@web3modal/ethers'
import { polygonAmoy } from 'viem/chains'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonAmoy],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient
})

export const ethereumClient = new EthereumClient(config, chains)