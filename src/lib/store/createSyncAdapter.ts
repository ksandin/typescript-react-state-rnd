import { CrudAdapter } from "./CrudAdapter";
import { Map } from "immutable";

export const createSyncAdapter = <Id, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model) => Model
): CrudAdapter<Id, Model> => {
  let entries = Map<Id, Model>();
  return {
    id: getIdentity,
    create: async (newItem: Model): Promise<Model> => {
      const withId = withNewIdentity(newItem);
      entries = entries.set(getIdentity(withId), withId);
      return withId;
    },
    update: async (updatedItem: Model): Promise<Model> => {
      entries = entries.set(getIdentity(updatedItem), updatedItem);
      return updatedItem;
    },
    delete: async (newItem: Model): Promise<Model> => {
      const id = getIdentity(newItem);
      if (!entries.has(id)) {
        throw new Error(`Id not found: ${id}`);
      }
      entries = entries.remove(id);
      return newItem;
    },
  };
};
