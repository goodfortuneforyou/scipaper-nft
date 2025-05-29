import { useAccount, useSigner } from 'wagmi'
import { getPaperNFTContract } from '../utils/web3'
import { useState } from 'react'

export default function MintPage() {
  const { address } = useAccount()
  const { data: signer } = useSigner()
  const [doi, setDoi] = useState('')

  const mintPaper = async () => {
    const contract = getPaperNFTContract(signer)
    const tx = await contract.mintPaper(address, Date.now(), doi)
    await tx.wait()
    alert('Paper NFT minted!')
  }

  return (
    <div>
      <input 
        value={doi} 
        onChange={(e) => setDoi(e.target.value)} 
        placeholder="Enter DOI"
      />
      <button onClick={mintPaper}>Mint Paper NFT</button>
    </div>
  )
}