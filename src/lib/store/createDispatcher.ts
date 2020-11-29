import EventEmitter from "events";
import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { automateDispatches } from "./automateDispatches";
import { createDispatches } from "./createDispatches";
import { DispatcherActions } from "./DispatcherActions";

export const createDispatcher = <TActions extends Actions>(
  actions: TActions
) => {
  const dispatcher: Dispatcher<TActions> = {
    dispatches: createDispatches<keyof TActions>(
      Object.getOwnPropertyNames(actions)
    ),
    events: new EventEmitter(),
    actions: (undefined as unknown) as DispatcherActions<TActions>,
  };
  dispatcher.events.setMaxListeners(0);
  dispatcher.actions = automateDispatches(dispatcher, actions);
  return dispatcher;
};
