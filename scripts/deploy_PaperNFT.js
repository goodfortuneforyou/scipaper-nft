const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const PaperNFT = await hre.ethers.getContractFactory("PaperNFT");
  const paperNFT = await PaperNFT.deploy();

  await paperNFT.waitForDeployment();
  console.log("PaperNFT deployed to:", paperNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});