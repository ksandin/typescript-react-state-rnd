import { Actions } from "./Actions";
import { Dispatcher } from "./Dispatcher";
import { updateDispatch } from "./updateDispatch";
import { createDispatchUpdater } from "./createDispatchUpdater";
import { ActionImpl, DispatcherAction } from "./DispatcherActions";

export const automateDispatch = <
  TActions extends Actions,
  TActionName extends keyof TActions
>(
  dispatcher: Dispatcher<TActions>,
  actionName: TActionName,
  action: TActions[TActionName]
): DispatcherAction<TActions[TActionName]> => {
  type TAction = TActions[TActionName];

  const impl: ActionImpl<TAction> = async (...args) => {
    updateDispatch(dispatcher, actionName, createPending);
    try {
      const response = await action(...args);
      updateDispatch(dispatcher, actionName, createResolved);
      return response;
    } catch (error) {
      updateDispatch(dispatcher, actionName, (dispatch) => ({
        ...createRejected(dispatch),
        error,
      }));
      throw error;
    }
  };

  const withoutError: DispatcherAction<TAction> = async (...args) => {
    try {
      return await impl(...args);
    } catch (e) {}
  };

  withoutError.withError = async (...args) => {
    try {
      const res = await impl(...args);
      return { type: "success", result: res };
    } catch (error) {
      return { type: "error", error };
    }
  };

  return withoutError;
};

const createPending = createDispatchUpdater(1, "pending");
const createResolved = createDispatchUpdater(-1, "resolved");
const createRejected = createDispatchUpdater(-1, "rejected");
