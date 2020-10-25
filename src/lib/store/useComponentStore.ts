import { Map } from "immutable";
import { useState } from "react";
import { createStore } from "./createStore";

export const useComponentStore = <Id, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model) => Model,
  initialEntries = Map<Id, Model>()
) => {
  const [store] = useState(() =>
    createStore(getIdentity, withNewIdentity, initialEntries)
  );
  return store;
};
