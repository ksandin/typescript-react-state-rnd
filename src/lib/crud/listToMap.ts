import { Map } from "immutable";

export const listToMap = <K, T>(list: T[], key: (item: T) => K) =>
  list.reduce((map, item) => map.set(key(item), item), Map<K, T>());
