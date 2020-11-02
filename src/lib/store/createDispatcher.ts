import EventEmitter from "events";
import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { automateDispatcherStatuses } from "./automateDispatcherStatuses";
import { createActionStatuses } from "./createActionStatuses";

export const createDispatcher = <TActions extends Actions>(
  actions: TActions
) => {
  const dispatcher: Dispatcher<TActions> = {
    statuses: createActionStatuses<keyof TActions>(
      Object.getOwnPropertyNames(actions)
    ),
    events: new EventEmitter(),
    actions,
  };
  dispatcher.actions = automateDispatcherStatuses(dispatcher, actions);
  return dispatcher;
};
