import { CrudState } from "./CrudState";
import { Map } from "immutable";

export const loadMapFromLocalStorage = <Id, Model>(
  key: string
): CrudState<Id, Model> => {
  const kvPairsString = localStorage.getItem(key);
  if (!kvPairsString) {
    return Map();
  }
  const kvPairs: Array<[Id, Model]> = JSON.parse(kvPairsString);
  return Map(kvPairs);
};
