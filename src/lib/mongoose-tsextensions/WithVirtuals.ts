export type WithVirtuals<T, V, K extends keyof V = keyof V> = T &
  Partial<Pick<V, K>>;
