// scripts/deploy_PaperNFT.js
const hre = require("hardhat");

async function main() {
  // Deploy the contract
  const PaperNFT = await hre.ethers.getContractFactory("PaperNFT");
  const paperNFT = await PaperNFT.deploy();

  await paperNFT.deployed();

  console.log("PaperNFT deployed to:", paperNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });