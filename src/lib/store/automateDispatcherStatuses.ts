import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { Action } from "./Action";
import { setDispatcherStatus } from "./setDispatcherStatus";

export function automateDispatcherStatuses<TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actions: TActions
): TActions {
  const newActions: Record<keyof any, Action> = {};
  for (const actionName in actions) {
    newActions[actionName] = createActionWithStatusSetter(
      dispatcher,
      actionName,
      actions[actionName]
    );
  }
  return newActions as TActions;
}

const createActionWithStatusSetter = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actionName: keyof TActions,
  oldAction: Action
) => async (...args: any[]) => {
  setDispatcherStatus(dispatcher, actionName, "pending");
  try {
    const response = await oldAction(...args);
    setDispatcherStatus(dispatcher, actionName, "rejected");
    return response;
  } catch (e) {
    setDispatcherStatus(dispatcher, actionName, "rejected");
  }
};
