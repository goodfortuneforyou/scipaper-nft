import { useState } from 'react'
import { useAccount, useSigner } from 'wagmi'
import { getPaperNFTContract } from '../utils/web3'


export default function PaperMintForm() {
  const [doi, setDoi] = useState('')
  const { address } = useAccount()
  const { data: signer } = useSigner()

  const handleMint = async () => {
    const contract = getPaperNFTContract(signer)
    const tx = await contract.mintPaper(address, Date.now(), doi)
    await tx.wait()
    alert('Paper NFT minted!')
  }

  return (
    <div className="space-y-4">
      <input
        value={doi}
        onChange={(e) => setDoi(e.target.value)}
        placeholder="Enter paper DOI"
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={handleMint}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Mint Paper NFT
      </button>
    </div>
  )
}