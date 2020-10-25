import { Map } from "immutable";
import { EventEmitter } from "events";
import { Store } from "./Store";
import { StoreEvents } from "./StoreEvents";
import { StoreOperationStatus } from "./StoreOperationStatus";
import { StoreActions } from "./StoreActions";
import { StoreAdapter } from "./StoreAdapter";

export const createStore = <Id, Model>(
  adapter: StoreAdapter<Id, Model>,
  initialEntries = Map<Id, Model>()
): Store<Id, Model> => {
  const store: Store<Id, Model> = {
    entries: initialEntries,
    events: new EventEmitter() as StoreEvents<Id, Model>,
    statuses: Map(),
    create: (item: Model) =>
      doAction("create", item, undefined, (item) =>
        change(store.entries.set(adapter.id(item), item))
      ),
    update: (item: Model) =>
      doAction("update", item, () =>
        change(store.entries.set(adapter.id(item), item))
      ),
    delete: (item: Model) =>
      doAction("delete", item, () =>
        change(store.entries.delete(adapter.id(item)))
      ),
  };
  async function doAction(
    action: StoreActions,
    payload: Model,
    before: () => void = () => {},
    after: (response: Model) => void = () => {}
  ) {
    const rollbackEntries = store.entries;
    before();
    setStatus(action, "pending");
    try {
      after(await adapter[action](payload));
      setStatus(action, "resolved");
    } catch (e) {
      change(rollbackEntries);
      setStatus(action, "rejected");
    }
  }
  function setStatus(action: StoreActions, status: StoreOperationStatus) {
    store.statuses = store.statuses.set(action, status);
    store.events.emit("statuses", store.statuses);
  }
  function change(newEntries: Map<Id, Model>) {
    store.entries = newEntries;
    store.events.emit("entries", store.entries);
  }
  return store;
};
