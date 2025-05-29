"use client"; // Required for hooks

import { WagmiConfig } from 'wagmi'
import { Web3Modal } from '@web3modal/react'
import { config, ethereumClient } from '../utils/web3-config' // Separate config file

export default function Web3Provider({ children }) {
  return (
    <>
      <WagmiConfig config={config}>
        {children}
      </WagmiConfig>
      <Web3Modal 
        projectId={process.env.NEXT_PUBLIC_WALLETCONNECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  )
}