import { useCallback, useEffect, useRef } from "react";
import { SubscribeState } from "router5";
import { useRouter5Subscription } from "./useRouter5Subscription";
import { useRouter } from "react-router5";

export const useRouter5Reaction = <TSelectedState>(
  select: (state: Partial<SubscribeState>) => TSelectedState,
  react: (state: TSelectedState) => void,
  equalsFn: (a?: TSelectedState, b?: TSelectedState) => boolean = refEq
) => {
  const router = useRouter();
  const selectionRef = useRef<TSelectedState>();

  // Trigger a reaction based on the initial router state
  useEffect(() => {
    selectionRef.current = select({ route: router.getState() });
    react(selectionRef.current);
  }, [router, select, react]);

  // Trigger reactions for router state selection changes
  useRouter5Subscription(
    useCallback(
      (state: Partial<SubscribeState>) => {
        const newSelection = select(state);
        if (!equalsFn(newSelection, selectionRef.current)) {
          selectionRef.current = newSelection;
          react(newSelection);
        }
      },
      [selectionRef, select, react, equalsFn]
    )
  );
};

const refEq = <T>(a: T, b: T) => a === b;
