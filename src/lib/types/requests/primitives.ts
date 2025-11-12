import { z } from "zod";

export const AddressSchema = z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid address");
export const Bytes32Schema = z.string().regex(/^0x[a-fA-F0-9]{64}$/, "Invalid bytes32");
export const HexSchema = z.string().regex(/^0x[a-fA-F0-9]*$/, "Invalid hex");

// Số nguyên dương “an toàn” cho id, chainId…
export const IntSchema = z.number().int().nonnegative();

// Wei string (khuyên dùng string rồi transform -> bigint để tránh mất độ chính xác)
export const WeiStringSchema = z.string().regex(/^\d+$/, "Amount must be a decimal string")
  .transform((v) => BigInt(v));

// Basis points (0..10000)
export const BpsSchema = z.number().int().min(0).max(10_000);

// Pagination
export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});
