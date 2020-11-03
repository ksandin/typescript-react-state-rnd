import { Map } from "immutable";
import { RepositoryEntries } from "../store/RepositoryEntries";
import { createCrudMemoryAdapter } from "./createCrudMemoryAdapter";

export const createNumericCrudMemoryAdapter = <Id extends number, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model, newId: Id) => Model,
  initialEntries: RepositoryEntries<Id, Model> = Map(),
  simulatedDelay = 0
) => {
  const initialIds = Array.from(initialEntries.values()).map(getIdentity);
  let idCounter = initialIds.length ? Math.max(...initialIds) + 1 : 0;
  const nextId = () => idCounter++ as Id;
  return createCrudMemoryAdapter(
    getIdentity,
    (item) => withNewIdentity(item, nextId()),
    initialEntries,
    simulatedDelay
  );
};
