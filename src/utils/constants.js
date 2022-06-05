import { ethers } from "ethers";
import contractAbi from "./contractABI.json";
export const contract_address = "0x679234F72868FeBE3eE2031C1755A575cBbefE2c";
export const contractABI = contractAbi;

export const getContract = async () => {
  const { ethereum } = window;
  if (ethereum) {
    window.web3 = new ethers.providers.Web3Provider(ethereum);
    return await new ethers.Contract(
      contract_address,
      contractABI,
      window.web3
    );
  }
};
