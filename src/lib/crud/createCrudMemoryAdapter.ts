import { CrudAdapter } from "./CrudAdapter";
import { Map } from "immutable";
import { wait } from "./wait";
import { RepositoryEntries } from "../store/RepositoryEntries";

export const createCrudMemoryAdapter = <Id, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model) => Model,
  initialEntries: RepositoryEntries<Id, Model> = Map(),
  simulatedDelay = 0
): CrudAdapter<Id, Model> => {
  let entries = initialEntries;
  return {
    id: getIdentity,
    create: async (newItem: Model): Promise<Model> => {
      await wait(simulatedDelay);
      const withId = withNewIdentity(newItem);
      entries = entries.set(getIdentity(withId), withId);
      return withId;
    },
    update: async (updatedItem: Model): Promise<Model> => {
      await wait(simulatedDelay);
      entries = entries.set(getIdentity(updatedItem), updatedItem);
      return updatedItem;
    },
    delete: async (newItem: Model): Promise<Model> => {
      await wait(simulatedDelay);
      const id = getIdentity(newItem);
      if (!entries.has(id)) {
        throw new Error(`Id not found: ${id}`);
      }
      entries = entries.remove(id);
      return newItem;
    },
  };
};
