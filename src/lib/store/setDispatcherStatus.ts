import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { ActionStatusMeta } from "./ActionStatusMeta";

export function setDispatcherStatus<TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actionName: keyof TActions,
  makeMeta: (current: ActionStatusMeta) => ActionStatusMeta
) {
  const oldStatuses = dispatcher.statuses;
  dispatcher.statuses = {
    ...dispatcher.statuses,
    [actionName]: makeMeta(dispatcher.statuses[actionName]),
  };
  dispatcher.events.emit("change", dispatcher.statuses, oldStatuses);
}
