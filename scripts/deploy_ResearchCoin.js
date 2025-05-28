const hre = require("hardhat");

async function main() {
  const PAPER_NFT_ADDRESS = "0xFE44171146bE8BeDd4bD7Cf79E8cddA3f0817909"; // Paste your existing address
  
  const ResearchCoin = await hre.ethers.getContractFactory("ResearchCoin");
  const researchCoin = await ResearchCoin.deploy(PAPER_NFT_ADDRESS);
  
  console.log("ResearchCoin deployed to:", researchCoin.target);
}

main().catch(console.error);