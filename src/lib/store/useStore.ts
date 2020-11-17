import { Store } from "./Store";
import { Actions } from "./Actions";
import { Dispatches } from "./Dispatches";
import { useRepository } from "./useRepository";
import { useDispatcher } from "./useDispatcher";

export const useStore = <TState, TActions extends Actions>(
  store: Store<TState, TActions>
): [TState, Dispatches<keyof TActions>, TActions] => {
  const state = useRepository(store.repository);
  const [dispatches, actions] = useDispatcher(store.dispatcher);

  return [state, dispatches, actions];
};
