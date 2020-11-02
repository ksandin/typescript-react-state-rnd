import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { Action } from "./Action";
import { setDispatcherStatus } from "./setDispatcherStatus";
import { ActionStatusMeta } from "./ActionStatusMeta";
import { ActionStatus } from "./ActionStatus";

export const automateDispatcherStatus = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actionName: keyof TActions,
  action: Action
) => async (...args: any[]) => {
  setDispatcherStatus(dispatcher, actionName, make(1, "pending"));
  try {
    const response = await action(...args);
    setDispatcherStatus(dispatcher, actionName, make(-1, "resolved"));
    return response;
  } catch (e) {
    setDispatcherStatus(dispatcher, actionName, make(-1, "rejected"));
  }
};

const make = (offset: number, status: ActionStatus) => (
  current: ActionStatusMeta
): ActionStatusMeta => {
  const pending = current.pending + offset;
  return {
    pending,
    status: pending > 0 ? "pending" : status,
  };
};
