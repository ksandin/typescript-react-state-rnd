import { Dispatches } from "./Dispatches";
import { DispatcherEvents } from "./DispatcherEvents";
import { Actions } from "./Actions";
import { DispatcherActions } from "./DispatcherActions";

export type Dispatcher<TActions extends Actions> = {
  actions: DispatcherActions<TActions>;
  dispatches: Dispatches<keyof TActions>;
  events: DispatcherEvents<keyof TActions>;
};
