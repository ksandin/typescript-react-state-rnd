import { ActionStatus } from "./ActionStatus";
import { Dispatch } from "./Dispatch";

export const createDispatchUpdater = (offset: number, status: ActionStatus) => (
  current: Dispatch
): Dispatch => {
  const pending = current.pending + offset;
  return {
    pending,
    status: pending > 0 ? "pending" : status,
  };
};
