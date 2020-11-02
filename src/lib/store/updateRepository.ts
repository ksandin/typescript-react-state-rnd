import { Repository } from "./Repository";
import { RepositoryEntries } from "./RepositoryEntries";

export const updateRepository = <Id, Model>(
  repository: Repository<Id, Model>,
  newEntries: RepositoryEntries<Id, Model>
) => {
  const prevEntries = repository.entries;
  repository.entries = newEntries;
  repository.events.emit("change", newEntries, prevEntries);
};
