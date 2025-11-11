import { parseAbi } from "viem";

export const BRIDGE_GATEWAY_BSC_ABI = parseAbi([
  "function unlock(address toOnBsc, uint256 amount, bytes32 srcTxHash, uint256 srcChainId, uint256 srcNonce) external",
  "function processed(uint256, bytes32) view returns (bool)",
  "function pause() external",
  "function unpause() external",
]);
