import { useEffect } from "react";

/**
 * Calls the specified function once on mount or when its arguments change.
 */
export const useCallOnce = <T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
) => {
  useEffect(() => {
    fn(...args);
  }, [fn, ...args]); // eslint-disable-line react-hooks/exhaustive-deps
};
