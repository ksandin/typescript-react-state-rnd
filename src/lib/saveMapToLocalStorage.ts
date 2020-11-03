import { RepositoryEntries } from "./store/RepositoryEntries";

export const saveMapToLocalStorage = <Id, Model>(
  key: string,
  map: RepositoryEntries<Id, Model>
) => {
  localStorage.setItem(key, JSON.stringify(Array.from(map.entries())));
};
