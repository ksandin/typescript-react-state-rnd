import TypedEmitter from "typed-emitter";
import { Map } from "immutable";

export type StoreEvents<Id, Model> = TypedEmitter<{
  change: (entries: Map<Id, Model>) => void;
}>;
