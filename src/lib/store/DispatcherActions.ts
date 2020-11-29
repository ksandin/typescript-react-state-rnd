import { PromiseValue } from "./PromiseValue";
import { Action } from "./Action";
import { Actions } from "./Actions";

type ReconstructPromise<T extends Promise<any>> = Promise<PromiseValue<T>>;

export type ActionImpl<TAction extends Action> = (
  ...args: Parameters<TAction>
) => ReconstructPromise<ReturnType<TAction>>;

export type ActionWithoutError<TAction extends Action> = (
  ...args: Parameters<TAction>
) => Promise<PromiseValue<ReturnType<TAction>> | undefined>;

export type ActionWithError<TAction extends Action> = (
  ...args: Parameters<TAction>
) => Promise<SuccessOrError<PromiseValue<ReturnType<TAction>>>>;

export type DispatcherAction<TAction extends Action> = ActionWithoutError<
  TAction
> & {
  withError: ActionWithError<TAction>;
};

export type DispatcherActions<TActions extends Actions> = {
  [ActionName in keyof TActions]: DispatcherAction<TActions[ActionName]>;
};

export type SuccessOrError<T> =
  | { type: "error"; error: any }
  | { type: "success"; result: T };
