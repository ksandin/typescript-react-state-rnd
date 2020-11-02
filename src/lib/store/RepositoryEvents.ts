import TypedEmitter from "typed-emitter";
import { RepositoryEntries } from "./RepositoryEntries";

export type RepositoryEvents<Id, Model> = TypedEmitter<{
  change: (
    newEntries: RepositoryEntries<Id, Model>,
    oldEntries: RepositoryEntries<Id, Model>
  ) => void;
}>;
