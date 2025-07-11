require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
	solidity: "0.8.28",
	networks: {
		spicy: {
			url: process.env.RPC_URL,
			accounts: [process.env.PRIVATE_KEY],
			chainId: 111 // Replace with Chiliz Spicy chain ID if different
		}
	}
};
