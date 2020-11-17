import { useContext } from "react";
import { useDispatcher } from "../../../lib/store/useDispatcher";
import { CinemaStoreContext } from "../state/CinemaStoreContext";

export const useCinemaDispatcher = () => {
  const store = useContext(CinemaStoreContext);
  return useDispatcher(store.dispatcher);
};
