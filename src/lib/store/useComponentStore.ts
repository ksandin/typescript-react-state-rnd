import { Map } from "immutable";
import { useState } from "react";
import { createStore } from "./createStore";
import { createRepository } from "./createRepository";
import { createCrudDispatcher } from "./createCrudDispatcher";
import { createCrudMemoryAdapter } from "./createCrudMemoryAdapter";

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
        createCrudMemoryAdapter(getIdentity, withNewIdentity)
      )
    );
  });
  return store;
};
