# Dripto Ponks

This is an exciting project. It is a marketplace where users can mint their tokens and also sell it to other users. There are two separate contracts, one for minting and another for the marketplace. The marketplace has functions for creating an NFT and for buying the NFT.
Users set the attributes such as Background color, complexion and hair color.

Link: <https://neon-panda-36c6bc.netlify.app/>

## 1. Tech Stack

This boilerplate uses the following tech stack:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [use-Contractkit](contractkit
) - A frontend library for interacting with the Celo blockchain.
- [Hardhat](https://hardhat.org/) - A tool for writing and deploying smart contracts.
- [Bootstrap](https://getbootstrap.com/) - A CSS framework that provides responsive, mobile-first layouts.

## 2. Quick Start

To get this project up running locally, follow these simple steps:

### 2.1 Clone the repository

```bash
git clone https://github.com/dahnny/dripto-ponks.git
```

### 2.3 Install the dependencies

```bash
npm install
```

### 2.4 Run the dapp

```bash
npm start
```

## 3. Smart-Contract Deployment

You can use your own smart contract that the dapp will interact with by following the steps below:

### 3.1 Add a new smart contract

Update the contracts/MyContract.sol file with your solidity code.

Notice that if you change the contract and file name you will also need to update the deploy script that we will use later.

### 3.2 Compile the smart contract

```bash
npx hardhat compile
```

### 3.3 Run tests on smart contract

```bash
npx hardhat test
```

### 3.4 Update env file

- Create a file in the root directory called ".env"
- Create a key called MNEMONIC and paste in your mnemonic key. e.g

```js
MNEMONIC = "...";
```

In this case, we are using a mnemonic from an account created on Metamask. You can copy it from your Metamask account settings. An account created on the Celo extension wallet will not work.

### 3.5 Deploy the smart contract to the Celo testnet Aljafores

```bash
npx hardhat run --network alfajores scripts/deploy.js
```

This command will update the src/contract files with the deployed smart contract ABI and contract address.
