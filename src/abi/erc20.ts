import { parseAbi } from "viem";

export const ERC20_ABI = parseAbi([
  "function balanceOf(address account) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 value) external returns (bool)",
  "function transfer(address to, uint256 value) external returns (bool)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function name() view returns (string)",
  
  "event Transfer(address indexed from, address indexed to, uint256 value)",
]);
