import { Map } from "immutable";
import { useState } from "react";
import { createStore } from "./createStore";
import { createSyncAdapter } from "./createSyncAdapter";

export const useComponentStore = <Id, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model) => Model,
  initialEntries = Map<Id, Model>()
) => {
  const [store] = useState(() =>
    createStore(createSyncAdapter(getIdentity, withNewIdentity), initialEntries)
  );
  return store;
};
