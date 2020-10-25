import { useEffect, useState } from "react";
import { Map } from "immutable";
import { Store } from "./Store";
import { StoreOperation } from "./StoreOperation";

export const useStore = <Id, Model>(
  store: Store<Id, Model>
): [
  Map<Id, Model>,
  StoreOperation<Model>,
  StoreOperation<Model>,
  StoreOperation<Model>
] => {
  const [localEntries, setLocalEntries] = useState(Map<Id, Model>());
  useEffect(() => {
    store.events.on("change", setLocalEntries);
    return () => {
      store.events.off("change", setLocalEntries);
    };
  }, [store]);
  return [localEntries, store.create, store.update, store.delete];
};
