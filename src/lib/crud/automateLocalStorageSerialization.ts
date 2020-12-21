import { Repository } from "../store/Repository";
import { updateRepository } from "../store/updateRepository";
import { CrudState } from "./CrudState";
import { loadMapFromLocalStorage } from "./loadMapFromLocalStorage";
import { saveMapToLocalStorage } from "./saveMapToLocalStorage";

export const automateLocalStorageSerialization = <Id, Model>(
  localStorageKey: string,
  repository: Repository<CrudState<Id, Model>>
) => {
  const initialEntries = loadMapFromLocalStorage<Id, Model>(localStorageKey);
  updateRepository(repository, initialEntries);
  const saveEntries = (entries: CrudState<Id, Model>) =>
    saveMapToLocalStorage(localStorageKey, entries);
  repository.events.on("change", saveEntries);
  return () => {
    repository.events.off("change", saveEntries);
  };
};
