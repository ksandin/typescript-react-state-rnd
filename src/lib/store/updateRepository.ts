import { Repository } from "./Repository";
import { Map } from "immutable";

export const updateRepository = <Id, Model>(
  repository: Repository<Id, Model>,
  newEntries: Map<Id, Model>
) => {
  const prevEntries = repository.entries;
  repository.entries = newEntries;
  repository.events.emit("change", newEntries, prevEntries);
};
