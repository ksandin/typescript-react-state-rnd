import TypedEmitter from "typed-emitter";
import { Map } from "immutable";
import { StoreStatuses } from "./StoreStatuses";

export type StoreEvents<Id, Model> = TypedEmitter<{
  entries: (entries: Map<Id, Model>) => void;
  statuses: (statuses: StoreStatuses) => void;
}>;
