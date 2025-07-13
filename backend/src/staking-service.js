// stakingService.js
import dotenv from "dotenv";
import { JsonRpcProvider, Wallet, parseEther, ethers } from "ethers";

dotenv.config();

const RPC = process.env.RPC;
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
  }

  /**
   * Stake des CHZ sur le contrat
   * @param {string|number} amountChz - Montant en CHZ à staker
   * @param {string} delegatorAddr - Adresse du délégataire
   */
  async stakeChz(amountChz, delegatorAddr) {
    try {
      const tx = await this.contract.stake(delegatorAddr, {
        value: parseEther(amountChz.toString()),
        gasLimit: 300_000
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
  async unstakeChz(fundAddr, amountChz) {
    try {
      const amountWei = parseEther(amountChz.toString());
      const tx = await this.contract.unstake(fundAddr, amountWei, {
        gasLimit: 200_000
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
  async claimRewards(recipient) {
    try {
      const tx = await this.contract.claim(recipient, {
        gasLimit: 200_000
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

export default StakingService;
