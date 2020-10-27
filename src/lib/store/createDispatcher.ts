import EventEmitter from "events";
import { Map } from "immutable";
import { Actions } from "./Actions";
import { ActionStatuses } from "./ActionStatuses";
import { Dispatcher } from "./Dispatcher";
import { automateDispatcherStatuses } from "./automateDispatcherStatuses";

export const createDispatcher = <TActions extends Actions>(
  actions: TActions,
  statuses: ActionStatuses<keyof TActions> = Map()
) => {
  const dispatcher: Dispatcher<TActions> = {
    statuses,
    events: new EventEmitter(),
    actions,
  };
  dispatcher.actions = automateDispatcherStatuses(dispatcher, actions);
  return dispatcher;
};
