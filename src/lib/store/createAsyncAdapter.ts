import { StoreAdapter } from "./StoreAdapter";
import { Map } from "immutable";
import { wait } from "./wait";

export const createAsyncAdapter = <Id, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model) => Model,
  simulatedDelay = 0
): StoreAdapter<Model> => {
  let entries = Map<Id, Model>();
  return {
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
