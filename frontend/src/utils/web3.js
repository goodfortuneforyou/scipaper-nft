import { ethers } from 'ethers'
import addresses from './addresses'
import PaperNFT from '../contracts/abis/PaperNFT.json'
import ResearchCoinABI from '../artifacts/contracts/ResearchCoin.sol/ResearchCoin.json'

export const getPaperNFTContract = (signer) => {
  return new ethers.Contract(
    addresses.paperNFT,
    PaperNFT.abi,
    signer
  )
}

export const getResearchCoinContract = () => ({
  address: '0x6740e7E8d6F3d1B83e4f7E25749EE2156EF70411',
    abi: ResearchCoinABI.abi
})