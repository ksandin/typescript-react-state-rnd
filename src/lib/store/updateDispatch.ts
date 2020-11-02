import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { Dispatch } from "./Dispatch";

export function updateDispatch<TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actionName: keyof TActions,
  createUpdate: (current: Dispatch) => Dispatch
) {
  const oldStatuses = dispatcher.dispatches;
  dispatcher.dispatches = {
    ...dispatcher.dispatches,
    [actionName]: createUpdate(dispatcher.dispatches[actionName]),
  };
  dispatcher.events.emit("change", dispatcher.dispatches, oldStatuses);
}
