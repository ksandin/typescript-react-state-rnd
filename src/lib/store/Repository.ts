import { RepositoryEvents } from "./RepositoryEvents";
import { RepositoryEntries } from "./RepositoryEntries";

export type Repository<Id, Model> = {
  entries: RepositoryEntries<Id, Model>;
  events: RepositoryEvents<Id, Model>;
};
