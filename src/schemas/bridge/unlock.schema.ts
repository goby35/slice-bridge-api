import { z } from "zod";
import { AddressSchema, Bytes32Schema, IntSchema, WeiStringSchema } from "../primitives";

export const UnlockRequestSchema = z.object({
  toOnBsc: AddressSchema,
  amount: WeiStringSchema,
  srcTxHash: Bytes32Schema,
  srcChainId: IntSchema,
  srcNonce: IntSchema,
});
export type UnlockRequest = z.infer<typeof UnlockRequestSchema>;
