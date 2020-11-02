import { Store } from "./Store";
import { Actions } from "./Actions";
import { Dispatches } from "./Dispatches";
import { useRepository } from "./useRepository";
import { useDispatcher } from "./useDispatcher";
import { RepositoryEntries } from "./RepositoryEntries";

export const useStore = <Id, Model, TActions extends Actions>(
  store: Store<Id, Model, TActions>
): [RepositoryEntries<Id, Model>, Dispatches<keyof TActions>, TActions] => {
  const entries = useRepository(store.repository);
  const [dispatches, actions] = useDispatcher(store.dispatcher);

  return [entries, dispatches, actions];
};
