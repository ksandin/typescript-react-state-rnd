import { Map } from "immutable";
import { useState } from "react";
import { useComponentStore } from "./useComponentStore";

export const useBasicComponentStore = <
  Id extends number,
  Model extends { id: Id }
>(
  initialEntries = Map<Id, Model>()
) => {
  const [idHolder] = useState({ value: 0 });
  return useComponentStore(
    (item) => item.id,
    (todo) => ({ ...todo, id: nextId(idHolder) }),
    initialEntries
  );
};

const nextId = (idHolder: { value: number }) => {
  idHolder.value++;
  return idHolder.value;
};
