import { ActionStatuses } from "./ActionStatuses";
import { DispatcherEvents } from "./DispatcherEvents";
import { Actions } from "./Actions";

export type Dispatcher<TActions extends Actions> = {
  actions: TActions;
  statuses: ActionStatuses<keyof TActions>;
  events: DispatcherEvents<keyof TActions>;
};
