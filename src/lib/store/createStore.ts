import { Map } from "immutable";
import { EventEmitter } from "events";
import { Store } from "./Store";
import { StoreEvents } from "./StoreEvents";

export const createStore = <Id, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model) => Model,
  initialEntries = Map<Id, Model>()
): Store<Id, Model> => {
  const store: Store<Id, Model> = {
    entries: initialEntries,
    events: new EventEmitter() as StoreEvents<Id, Model>,
    statuses: {
      create: "init",
      update: "init",
      delete: "init",
    },
    create: (newItem: Model) => {
      const withId = withNewIdentity(newItem);
      change(store.entries.set(getIdentity(withId), withId));
    },
    update: (updatedItem: Model) =>
      change(store.entries.set(getIdentity(updatedItem), updatedItem)),
    delete: (newItem: Model) =>
      change(store.entries.delete(getIdentity(newItem))),
  };
  function change(newEntries: Map<Id, Model>) {
    store.entries = newEntries;
    store.events.emit("entries", store.entries);
  }
  return store;
};
