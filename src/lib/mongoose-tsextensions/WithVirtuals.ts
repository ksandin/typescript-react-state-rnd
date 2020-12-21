import { SchemaVirtuals } from "./SchemaVirtuals";

export type WithVirtuals<
  T,
  V extends SchemaVirtuals,
  K extends keyof V = keyof V
> = T &
  // Array virtuals are populated as at least empty arrays
  Pick<V, Extract<K, keyof PickSub<V, any[]>>> &
  // Other virtuals are populated with at least null
  Nullable<Pick<V, Extract<K, keyof OmitSub<V, any[]>>>>;

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
