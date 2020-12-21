import { Map } from "immutable";
import { CrudState } from "./CrudState";

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
