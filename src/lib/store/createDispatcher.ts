import EventEmitter from "events";
import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { automateDispatches } from "./automateDispatches";
import { createDispatches } from "./createDispatches";

export const createDispatcher = <TActions extends Actions>(
  actions: TActions
) => {
  const dispatcher: Dispatcher<TActions> = {
    dispatches: createDispatches<keyof TActions>(
      Object.getOwnPropertyNames(actions)
    ),
    events: new EventEmitter(),
    actions,
  };
  dispatcher.actions = automateDispatches(dispatcher, actions);
  return dispatcher;
};
