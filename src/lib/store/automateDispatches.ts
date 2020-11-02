import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { Action } from "./Action";
import { automateDispatch } from "./automateDispatch";

export const automateDispatches = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actions: TActions
): TActions => {
  const newActions: Record<keyof any, Action> = {};
  for (const actionName in actions) {
    newActions[actionName] = automateDispatch(
      dispatcher,
      actionName,
      actions[actionName]
    );
  }
  return newActions as TActions;
};
