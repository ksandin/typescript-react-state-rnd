import { Repository } from "./Repository";
import { Dispatcher } from "./Dispatcher";
import { Actions } from "./Actions";
import { Store } from "./Store";

export const createStore = <Id, Model, TActions extends Actions>(
  repository: Repository<Id, Model>,
  dispatcher: Dispatcher<TActions>
): Store<Id, Model, TActions> => ({ repository, dispatcher });
