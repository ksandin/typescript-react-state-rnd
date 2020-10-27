import { useEffect, useState } from "react";
import { Map } from "immutable";
import { Store } from "./Store";
import { Actions } from "./Actions";
import { ActionStatuses } from "./ActionStatuses";

export const useStore = <Id, Model, TActions extends Actions>(
  store: Store<Id, Model, TActions>
): [Map<Id, Model>, ActionStatuses<keyof TActions>, TActions] => {
  const [localEntries, setLocalEntries] = useState(store.repository.entries);
  const [localStatuses, setLocalStatuses] = useState(store.dispatcher.statuses);

  useEffect(() => {
    store.repository.events.on("change", setLocalEntries);
    store.dispatcher.events.on("change", setLocalStatuses);
    return () => {
      store.repository.events.off("change", setLocalEntries);
      store.dispatcher.events.off("change", setLocalStatuses);
    };
  }, [store]);

  return [localEntries, localStatuses, store.dispatcher.actions];
};
