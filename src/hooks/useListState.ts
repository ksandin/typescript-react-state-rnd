import { useState } from "react";

export const useListState = <T, Id>(
  getIdentity: (item: T) => Id,
  initialValues: T[] | (() => T[]) = [],
  emit: (list: T[]) => void = () => {}
): [T[], Op<T>, Op<T>, Op<T>] => {
  const [list, setList] = useState<T[]>(initialValues);
  const setListAndEmit = (newList: T[]) => {
    setList(newList);
    emit(newList);
  };
  const add = (item: T) => {
    setListAndEmit(list.concat(item));
  };
  const splice = (item: T, ...insert: T[]) => {
    const index = list.indexOf(item);
    if (index !== -1) {
      const newList = list.slice();
      newList.splice(index, 1, ...insert);
      setListAndEmit(newList);
      return true;
    }
    return false;
  };
  const update = (newItem: T) => {
    const newItemId = getIdentity(newItem);
    const currentItem = list.find((item) => getIdentity(item) === newItemId);
    return currentItem ? splice(currentItem, newItem) : false;
  };
  return [list, add, splice, update];
};

/**
 * Any type of operation working with a list item,
 * ie. adding one item, removing one item, updating one item.
 */
type Op<T> = (item: T) => void;
