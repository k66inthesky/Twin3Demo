require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    kaia: {
      url: process.env.KAIA_RPC_URL,
      chainId: 1001,              // 替換成 Kaia 真實 chainId
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

