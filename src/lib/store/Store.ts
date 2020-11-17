import { Repository } from "./Repository";
import { Dispatcher } from "./Dispatcher";
import { Actions } from "./Actions";

export type Store<TState, TActions extends Actions> = {
  repository: Repository<TState>;
  dispatcher: Dispatcher<TActions>;
};
