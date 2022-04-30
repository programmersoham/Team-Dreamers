const hre = require("hardhat");

async function main() {
  // market contract
  const MyNftMarket = await hre.ethers.getContractFactory("MyNftMarket");
  const market = await MyNftMarket.deploy();

  await market.deployed();

  console.log("NftMarketPlace", market.address);
  storeMarketData(market);

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(market.address);

  await myNFT.deployed();

  console.log("MyNFT deployed to:", myNFT.address);
  storeContractData(myNFT);

}

function storeContractData(contract) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/MyNFT-address.json",
    JSON.stringify({ MyNFT: contract.address }, undefined, 2)
  );

  const MyNFTArtifact = artifacts.readArtifactSync("MyNFT");

  fs.writeFileSync(
    contractsDir + "/MyNFT.json",
    JSON.stringify(MyNFTArtifact, null, 2)
  );
}

function storeMarketData(contract) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/MyNFTMarket-address.json",
    JSON.stringify({ MyNFTMarket: contract.address }, undefined, 2)
  );

  const MyNFTArtifact = artifacts.readArtifactSync("MyNftMarket");

  fs.writeFileSync(
    contractsDir + "/MyNFTMarket.json",
    JSON.stringify(MyNFTArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
