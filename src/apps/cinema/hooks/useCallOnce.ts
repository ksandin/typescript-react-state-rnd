import { useEffect } from "react";

/**
 * Calls the specified function once on mount or when its arguments change.
 */
export const useCallOnce = <T extends (...args: P[]) => any, P>(
  fn: T,
  ...args: P[]
) => {
  useEffect(() => {
    fn(...args);
  }, [fn, ...args]); // eslint-disable-line react-hooks/exhaustive-deps
};
