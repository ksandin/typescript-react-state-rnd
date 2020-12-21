import { CrudState } from "./CrudState";

export const saveMapToLocalStorage = <Id, Model>(
  key: string,
  map: CrudState<Id, Model>
) => {
  localStorage.setItem(key, JSON.stringify(Array.from(map.entries())));
};
