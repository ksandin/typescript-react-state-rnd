import { Map } from "immutable";
import { Repository } from "./Repository";
import EventEmitter from "events";
import { RepositoryEntries } from "./RepositoryEntries";

export const createRepository = <Id, Model>(
  initialEntries: RepositoryEntries<Id, Model> = Map()
): Repository<Id, Model> => ({
  entries: initialEntries,
  events: new EventEmitter(),
});
