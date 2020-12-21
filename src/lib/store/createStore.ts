import { Repository } from "./Repository";
import { Dispatcher } from "./Dispatcher";
import { Actions } from "./Actions";
import { Store } from "./Store";

export const createStore = <TState, TActions extends Actions>(
  repository: Repository<TState>,
  dispatcher: Dispatcher<TActions>
): Store<TState, TActions> => ({ repository, dispatcher });
