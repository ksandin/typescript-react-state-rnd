import { CrudAdapter } from "./CrudAdapter";
import { Map } from "immutable";
import { wait } from "./wait";
import { CrudState } from "./CrudState";
import { CrudIdentityFactory } from "./CrudIdentityFactory";

export const createCrudMemoryAdapter = <Id, Model>(
  identityFactory: CrudIdentityFactory<Id, Model>,
  initialEntries: CrudState<Id, Model> = Map(),
  simulatedDelay = 0
): CrudAdapter<Id, Model> => {
  let entries = initialEntries;
  return {
    id: identityFactory.getIdentity,
    create: async (newItem: Model): Promise<Model> => {
      await wait(simulatedDelay);
      const withId = identityFactory.withNewIdentity(newItem);
      entries = entries.set(identityFactory.getIdentity(withId), withId);
      return withId;
    },
    readAll: async () => Array.from(entries.values()),
    update: async (updatedItem: Model): Promise<Model> => {
      await wait(simulatedDelay);
      entries = entries.set(
        identityFactory.getIdentity(updatedItem),
        updatedItem
      );
      return updatedItem;
    },
    delete: async (id) => {
      await wait(simulatedDelay);
      if (!entries.has(id)) {
        throw new Error(`Id not found: ${id}`);
      }
      entries = entries.remove(id);
    },
  };
};
