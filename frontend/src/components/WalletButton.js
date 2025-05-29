import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect } from 'wagmi'

export default function WalletButton() {
  const { open } = useWeb3Modal()
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <button
      onClick={() => address ? disconnect() : open()}
      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
    >
      {address ? `Disconnect ${address.slice(0, 6)}...` : 'Connect Wallet'}
    </button>
  )
}