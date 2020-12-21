import { Document } from "mongoose";

export type SchemaVirtuals = Record<string, Document | Document[]>;
