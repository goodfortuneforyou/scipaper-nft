const hre = require("hardhat");

async function main() {
  // Deploy PaperNFT
  const PaperNFT = await hre.ethers.getContractFactory("PaperNFT");
  const paperNFT = await PaperNFT.deploy();
  await paperNFT.waitForDeployment();
  console.log("PaperNFT deployed to:", paperNFT.target);

  // Deploy ResearchCoin with Chainlink
  const ResearchCoin = await hre.ethers.getContractFactory("ResearchCoin");
  const researchCoin = await ResearchCoin.deploy();
  await researchCoin.waitForDeployment();
  console.log("ResearchCoin deployed to:", researchCoin.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});