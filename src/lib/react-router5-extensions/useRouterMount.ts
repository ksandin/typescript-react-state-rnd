import { useEffect } from "react";
import { Router } from "router5";

export const useRouterMount = (router: Router) => {
  useEffect(() => {
    router.start();
    return () => router.stop();
  }, [router]);
};
