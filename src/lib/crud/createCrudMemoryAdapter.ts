import { CrudAdapter } from "./CrudAdapter";
import { Map } from "immutable";
import { wait } from "./wait";
import { RepositoryEntries } from "../store/RepositoryEntries";
import { CrudIdentityFactory } from "./CrudIdentityFactory";

export const createCrudMemoryAdapter = <Id, Model>(
  identityFactory: CrudIdentityFactory<Id, Model>,
  initialEntries: RepositoryEntries<Id, Model> = Map(),
  simulatedDelay = 0
): CrudAdapter<Id, Model> => {
  let entries = initialEntries;
  return {
    identityFactory,
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
    delete: async (newItem: Model): Promise<Model> => {
      await wait(simulatedDelay);
      const id = identityFactory.getIdentity(newItem);
      if (!entries.has(id)) {
        throw new Error(`Id not found: ${id}`);
      }
      entries = entries.remove(id);
      return newItem;
    },
  };
};
