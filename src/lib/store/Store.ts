import { Map } from "immutable";
import { StoreEvents } from "./StoreEvents";
import { StoreOperation } from "./StoreOperation";

export type Store<Id, Model> = {
  entries: Map<Id, Model>;
  events: StoreEvents<Id, Model>;
  create: StoreOperation<Model>;
  update: StoreOperation<Model>;
  delete: StoreOperation<Model>;
};
