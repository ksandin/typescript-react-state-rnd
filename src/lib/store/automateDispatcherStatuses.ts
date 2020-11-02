import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { Action } from "./Action";
import { automateDispatcherStatus } from "./automateDispatcherStatus";

export const automateDispatcherStatuses = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actions: TActions
): TActions => {
  const newActions: Record<keyof any, Action> = {};
  for (const actionName in actions) {
    newActions[actionName] = automateDispatcherStatus(
      dispatcher,
      actionName,
      actions[actionName]
    );
  }
  return newActions as TActions;
};
