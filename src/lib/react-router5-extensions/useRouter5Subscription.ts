import { useEffect } from "react";
import { useRouter } from "react-router5";
import { SubscribeState } from "router5";

export const useRouter5Subscription = (
  newStateHandler: (state: Partial<SubscribeState>) => void
) => {
  const router = useRouter();
  useEffect(() => {
    const value = router.subscribe(newStateHandler);
    return () => {
      if (typeof value === "function") {
        value();
      } else {
        value.unsubscribe();
      }
    };
  }, [router, newStateHandler]);
};
