import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { automateDispatch } from "./automateDispatch";
import { DispatcherAction, DispatcherActions } from "./DispatcherActions";

export const automateDispatches = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actions: TActions
) => {
  const newActions: DispatcherActions<TActions> = {} as any;
  for (const actionName in actions) {
    newActions[actionName] = automateDispatch(
      dispatcher,
      actionName,
      actions[actionName]
    ) as DispatcherAction<TActions[keyof TActions]>;
  }
  return newActions;
};
