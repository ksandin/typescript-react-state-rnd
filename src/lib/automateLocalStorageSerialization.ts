import { Repository } from "./store/Repository";
import { updateRepository } from "./store/updateRepository";
import { loadMapFromLocalStorage } from "./loadMapFromLocalStorage";
import { saveMapToLocalStorage } from "./saveMapToLocalStorage";
import { RepositoryEntries } from "./store/RepositoryEntries";

export const automateLocalStorageSerialization = <Id, Model>(
  localStorageKey: string,
  repository: Repository<Id, Model>
) => {
  const initialEntries = loadMapFromLocalStorage<Id, Model>(localStorageKey);
  updateRepository(repository, initialEntries);
  const saveEntries = (entries: RepositoryEntries<Id, Model>) =>
    saveMapToLocalStorage(localStorageKey, entries);
  repository.events.on("change", saveEntries);
  return () => {
    repository.events.off("change", saveEntries);
  };
};
