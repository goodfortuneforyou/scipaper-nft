import { createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient } from '@web3modal/ethers'
import { polygonAmoy } from 'viem/chains'

const { chains, publicClient } = configureChains(
  [polygonAmoy],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  publicClient
})

export const ethereumClient = new EthereumClient(config, chains)