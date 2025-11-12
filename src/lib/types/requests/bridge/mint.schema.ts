import { z } from "zod";
import { AddressSchema, Bytes32Schema, IntSchema, WeiStringSchema } from "../primitives";

export const MintRequestSchema = z.object({
  to: AddressSchema,
  amount: WeiStringSchema,           // transform -> bigint
  srcTxHash: Bytes32Schema,
  srcChainId: IntSchema,
  srcNonce: IntSchema,
});

export type MintRequest = z.infer<typeof MintRequestSchema>; // amount: bigint