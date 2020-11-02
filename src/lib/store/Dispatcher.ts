import { Dispatches } from "./Dispatches";
import { DispatcherEvents } from "./DispatcherEvents";
import { Actions } from "./Actions";

export type Dispatcher<TActions extends Actions> = {
  actions: TActions;
  dispatches: Dispatches<keyof TActions>;
  events: DispatcherEvents<keyof TActions>;
};
