import { Map } from "immutable";
import { useState } from "react";
import { createStore } from "./createStore";
import { createSyncAdapter } from "./createSyncAdapter";
import { createRepository } from "./createRepository";
import { createCrudDispatcher } from "./createCrudDispatcher";

export const useComponentStore = <Id, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model) => Model,
  initialEntries = Map<Id, Model>()
) => {
  const [store] = useState(() => {
    const repository = createRepository(initialEntries);
    return createStore(
      repository,
      createCrudDispatcher(
        repository,
        createSyncAdapter(getIdentity, withNewIdentity)
      )
    );
  });
  return store;
};
