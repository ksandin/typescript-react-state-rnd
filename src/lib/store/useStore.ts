import { Map } from "immutable";
import { Store } from "./Store";
import { Actions } from "./Actions";
import { ActionStatuses } from "./ActionStatuses";
import { useRepository } from "./useRepository";
import { useDispatcher } from "./useDispatcher";

export const useStore = <Id, Model, TActions extends Actions>(
  store: Store<Id, Model, TActions>
): [Map<Id, Model>, ActionStatuses<keyof TActions>, TActions] => {
  const entries = useRepository(store.repository);
  const [statuses, actions] = useDispatcher(store.dispatcher);

  return [entries, statuses, actions];
};
