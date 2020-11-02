import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { Action } from "./Action";
import { setDispatcherStatus } from "./setDispatcherStatus";

export const automateDispatcherStatus = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actionName: keyof TActions,
  action: Action
) => async (...args: any[]) => {
  setDispatcherStatus(dispatcher, actionName, "pending");
  try {
    const response = await action(...args);
    setDispatcherStatus(dispatcher, actionName, "resolved");
    return response;
  } catch (e) {
    setDispatcherStatus(dispatcher, actionName, "rejected");
  }
};
