import { parseAbi } from "viem";

export const TRYF_LENSCHAIN_ABI = parseAbi([
  "function mint(address to, uint256 amount) external",
  "function burn(uint256 amount) external",
  "function burnFrom(address account, uint256 amount) external",
  "function pause() external",
  "function unpause() external",

  "function setBlacklist(address account, bool isBlacklisted) external",

  "function grantRole(bytes32 role, address account) external",
  "function revokeRole(bytes32 role, address account) external",
  "function hasRole(bytes32 role, address account) view returns (bool)",

  "function balanceOf(address account) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 value) external returns (bool)",
  "function transfer(address to, uint256 value) external returns (bool)",

  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",

  "event Transfer(address indexed from, address indexed to, uint256 value)",
]);
