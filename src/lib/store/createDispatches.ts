import { Dispatches } from "./Dispatches";
import { createDispatch } from "./createDispatch";

export const createDispatches = <K extends keyof any>(actionNames: K[]) =>
  actionNames.reduce(
    (record, actionName) => ({
      ...record,
      [actionName]: createDispatch(),
    }),
    {} as Dispatches<K>
  );
