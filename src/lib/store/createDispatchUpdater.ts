import { DispatchStatus } from "./DispatchStatus";
import { Dispatch } from "./Dispatch";

export const createDispatchUpdater = (
  offset: number,
  status: DispatchStatus
) => (current: Dispatch): Dispatch => {
  const pending = current.pending + offset;
  return {
    pending,
    status: pending > 0 ? "pending" : status,
  };
};
