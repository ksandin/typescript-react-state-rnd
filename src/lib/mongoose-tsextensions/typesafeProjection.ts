import { Document, Model } from "mongoose";

export const typesafeProjection = <T extends Document>(
  model: Model<T>,
  ...fields: Array<keyof T>
) => fields.join(" ");
