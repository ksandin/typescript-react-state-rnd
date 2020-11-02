import { ActionStatuses } from "./ActionStatuses";
import { createActionStatusMeta } from "./createActionStatusMeta";

export function createActionStatuses<K extends keyof any>(actionNames: K[]) {
  return actionNames.reduce(
    (record, actionName) => ({
      ...record,
      [actionName]: createActionStatusMeta(),
    }),
    {} as ActionStatuses<K>
  );
}
