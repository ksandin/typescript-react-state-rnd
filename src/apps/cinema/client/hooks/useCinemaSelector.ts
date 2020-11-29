import { useContext } from "react";
import { useSelector } from "../../../../lib/store/useSelector";
import { CinemaStoreContext } from "../state/CinemaStoreContext";
import { CinemaState } from "../state/CinemaState";
import shallowEquals from "shallowequal";

export const useCinemaSelector = <TSelectedState>(
  selector: (state: CinemaState) => TSelectedState,
  equalityFn: (a: TSelectedState, b: TSelectedState) => boolean = shallowEquals
) => {
  const store = useContext(CinemaStoreContext);
  return useSelector(store.repository, selector, equalityFn);
};
