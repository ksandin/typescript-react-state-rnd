import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { Action } from "./Action";
import { updateDispatch } from "./updateDispatch";
import { createDispatchUpdater } from "./createDispatchUpdater";

export const automateDispatch = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>,
  actionName: keyof TActions,
  action: Action
) => async (...args: any[]) => {
  updateDispatch(dispatcher, actionName, createPending);
  try {
    const response = await action(...args);
    updateDispatch(dispatcher, actionName, createResolved);
    return response;
  } catch (e) {
    updateDispatch(dispatcher, actionName, createRejected);
  }
};

const createPending = createDispatchUpdater(1, "pending");
const createResolved = createDispatchUpdater(-1, "resolved");
const createRejected = createDispatchUpdater(-1, "rejected");
