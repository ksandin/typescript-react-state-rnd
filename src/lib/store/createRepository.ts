import { Map } from "immutable";
import { Repository } from "./Repository";
import EventEmitter from "events";

export const createRepository = <Id, Model>(
  initialEntries = Map<Id, Model>()
): Repository<Id, Model> => ({
  entries: initialEntries,
  events: new EventEmitter(),
});
