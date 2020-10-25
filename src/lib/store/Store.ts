import { Map } from "immutable";
import { StoreEvents } from "./StoreEvents";
import { StoreOperation } from "./StoreOperation";
import { StoreStatuses } from "./StoreStatuses";

export type Store<Id, Model> = {
  entries: Map<Id, Model>;
  statuses: StoreStatuses;
  events: StoreEvents<Id, Model>;
  create: StoreOperation<Model>;
  update: StoreOperation<Model>;
  delete: StoreOperation<Model>;
};
