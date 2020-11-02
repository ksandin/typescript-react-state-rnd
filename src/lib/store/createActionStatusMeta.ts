import { ActionStatusMeta } from "./ActionStatusMeta";

export function createActionStatusMeta(): ActionStatusMeta {
  return { pending: 0, status: "resolved" };
}
