import TypedEmitter from "typed-emitter";
import { Map } from "immutable";

export type RepositoryEvents<Id, Model> = TypedEmitter<{
  change: (newEntries: Map<Id, Model>, oldEntries: Map<Id, Model>) => void;
}>;
