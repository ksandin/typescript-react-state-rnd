import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { ActionStatus } from "./ActionStatus";

export function setDispatcherStatus<TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  action: keyof TActions,
  status: ActionStatus
) {
  const oldStatuses = dispatcher.statuses;
  dispatcher.statuses = dispatcher.statuses.set(action, status);
  dispatcher.events.emit("change", dispatcher.statuses, oldStatuses);
}
