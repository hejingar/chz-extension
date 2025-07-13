// stakingService.js
const dotenv = require("dotenv");
const { JsonRpcProvider, Wallet, parseEther, ethers } = require("ethers");

dotenv.config();

const RPC = process.env.CHILIZ_RPC_URL || "https://spicy-rpc.chiliz.com";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const STAKING_CONTRACT = process.env.STAKING_CONTRACT;

if (!RPC || !PRIVATE_KEY || !STAKING_CONTRACT) {
  throw new Error("❌ Veuillez définir RPC, PRIVATE_KEY et STAKING_CONTRACT dans le fichier .env");
}

const STAKING_ABI = [
  "function stake(address delegator) payable returns (uint256)",
  "function unstake(address fund, uint256 amount) returns (uint256)",
  "function claim(address _recipient) returns (uint256)"
];

class StakingService {
  constructor() {
    this.provider = new JsonRpcProvider(RPC);
    this.wallet = new Wallet(PRIVATE_KEY, this.provider);
    this.contract = new ethers.Contract(STAKING_CONTRACT, STAKING_ABI, this.wallet);
	this.delegatorAddress = this.wallet.address; // Adresse du délégataire
}

  /**
   * Stake des CHZ sur le contrat
   * @param {string|number} amountChz - Montant en CHZ à staker
   * @param {string} delegatorAddr - Adresse du délégataire
   */
  async stakeChz(amountChz) {
    try {
      const tx = await this.contract.stake(this.delegatorAddress, {
        value: parseEther(amountChz.toString()),
        gasLimit: 300000
      });
      console.log("Stake TX sent:", tx.hash);
      const receipt = await tx.wait();
      console.log("✅ Staked in block:", receipt.blockNumber);
      return receipt;
    } catch (error) {
      console.error("❌ Erreur lors du staking:", error);
      throw error;
    }
  }

  /**
   * Unstake des CHZ du contrat
   * @param {string} fundAddr - Adresse du fond
   * @param {string|number} amountChz - Montant en CHZ à unstaker
   */
  async unstakeChz(amountChz) {
    try {
      const amountWei = parseEther(amountChz.toString());
      const tx = await this.contract.unstake(this.delegatorAddress, amountWei, {
        gasLimit: 200000
      });
      console.log("Unstake TX sent:", tx.hash);
      const receipt = await tx.wait();
      console.log("✅ Unstaked in block:", receipt.blockNumber);
      return receipt;
    } catch (error) {
      console.error("❌ Erreur lors de l'unstake:", error);
      throw error;
    }
  }

  /**
   * Récupère les récompenses
   * @param {string} recipient - Adresse du destinataire
   */
  async claimRewards() {
    try {
      const tx = await this.contract.claim(this.delegatorAddress, {
        gasLimit: 200000
      });
      console.log("Claim TX sent:", tx.hash);
      const receipt = await tx.wait();
      console.log("✅ Rewards claimed in block:", receipt.blockNumber);
      return receipt;
    } catch (error) {
      console.error("❌ Erreur lors du claim:", error);
      throw error;
    }
  }
}

module.exports = StakingService;
