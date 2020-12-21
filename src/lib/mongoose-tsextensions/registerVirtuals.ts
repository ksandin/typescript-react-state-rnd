import { Document, DocumentDefinition, Schema } from "mongoose";
import { SchemaVirtuals } from "./SchemaVirtuals";

export const registerVirtuals = <
  Local extends Document,
  Virtuals extends SchemaVirtuals
>(
  schema: Schema,
  virtualOptions: VirtualOptionsRecord<Local, Virtuals>
) => {
  for (const key in virtualOptions) {
    schema.virtual(key, virtualOptions[key]);
  }
};

type VirtualOptionsRecord<
  Local extends Document,
  Virtuals extends SchemaVirtuals
> = {
  [P in keyof Virtuals]: Virtuals[P] extends any[]
    ? VirtualOptions<Local, Element<Virtuals[P]>> & { justOne?: false }
    : VirtualOptions<Local, Element<Virtuals[P]>> & { justOne: true };
};

type VirtualOptions<Local extends Document, Foreign extends Document> = {
  ref: string;
  localField: keyof DocumentDefinition<Local>;
  foreignField: keyof DocumentDefinition<Foreign>;
  [key: string]: any;
};

type Element<T> = T extends Array<infer E> ? E : T;
