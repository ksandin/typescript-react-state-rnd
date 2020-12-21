export type Action<P extends any[] = any[], R = any> = (
  ...args: P
) => Promise<R>;
