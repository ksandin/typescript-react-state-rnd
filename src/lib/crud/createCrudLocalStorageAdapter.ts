import { CrudAdapter } from "./CrudAdapter";
import { CrudState } from "./CrudState";
import { loadMapFromLocalStorage } from "./loadMapFromLocalStorage";
import { saveMapToLocalStorage } from "./saveMapToLocalStorage";
import { CrudIdentityFactory } from "./CrudIdentityFactory";

export const createCrudLocalStorageAdapter = <Id, Model>(
  localStorageKey: string,
  identityFactory: CrudIdentityFactory<Id, Model>
): CrudAdapter<Id, Model> => {
  const getEntries = (): CrudState<Id, Model> =>
    loadMapFromLocalStorage(localStorageKey);
  const setEntries = (entries: CrudState<Id, Model>) =>
    saveMapToLocalStorage(localStorageKey, entries);
  return {
    id: identityFactory.getIdentity,
    create: async (newItem: Model): Promise<Model> => {
      const withId = identityFactory.withNewIdentity(newItem);
      setEntries(getEntries().set(identityFactory.getIdentity(withId), withId));
      return withId;
    },
    readAll: async () => Array.from(getEntries().values()),
    update: async (updatedItem: Model): Promise<Model> => {
      setEntries(
        getEntries().set(identityFactory.getIdentity(updatedItem), updatedItem)
      );
      return updatedItem;
    },
    delete: async (id: Id) => {
      const entries = getEntries();
      if (!entries.has(id)) {
        throw new Error(`Id not found: ${id}`);
      }
      setEntries(entries.remove(id));
    },
  };
};
