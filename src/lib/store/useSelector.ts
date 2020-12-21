import { useEffect, useReducer, useRef } from "react";
import { Repository } from "./Repository";

export const useSelector = <TState, TSelectedState>(
  repository: Repository<TState>,
  selector: (state: TState) => TSelectedState,
  equalityFn: (a: TSelectedState, b: TSelectedState) => boolean = isEqualRef
): TSelectedState => {
  const [, forceRender] = useReducer((s) => s + 1, 0);
  const selectedStateRef = useRef<TSelectedState>(selector(repository.state));

  useEffect(() => {
    function refresh() {
      const newSelectedState = selector(repository.state);
      if (!equalityFn(newSelectedState, selectedStateRef.current)) {
        selectedStateRef.current = newSelectedState;
        forceRender();
      }
    }
    repository.events.on("change", refresh);
    return () => {
      repository.events.off("change", refresh);
    };
  }, [repository, selector, equalityFn, selectedStateRef]);

  return selectedStateRef.current;
};

const isEqualRef = (a: any, b: any) => a === b;
