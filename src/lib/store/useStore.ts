import { useEffect, useState } from "react";
import { Map } from "immutable";
import { Store } from "./Store";
import { StoreOperation } from "./StoreOperation";
import { StoreStatuses } from "./StoreStatuses";

export const useStore = <Id, Model>(
  store: Store<Id, Model>
): [
  Map<Id, Model>,
  StoreOperation<Model>,
  StoreOperation<Model>,
  StoreOperation<Model>,
  StoreStatuses
] => {
  const [localEntries, setLocalEntries] = useState(store.entries);
  const [localStatuses, setLocalStatuses] = useState(store.statuses);

  useEffect(() => {
    store.events.on("entries", setLocalEntries);
    store.events.on("statuses", setLocalStatuses);
    return () => {
      store.events.off("entries", setLocalEntries);
      store.events.off("statuses", setLocalStatuses);
    };
  }, [store]);

  return [
    localEntries,
    store.create,
    store.update,
    store.delete,
    localStatuses,
  ];
};
