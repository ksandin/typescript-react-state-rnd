import { Repository } from "./Repository";
import { Dispatcher } from "./Dispatcher";
import { Actions } from "./Actions";

export type Store<Id, Model, TActions extends Actions> = {
  repository: Repository<Id, Model>;
  dispatcher: Dispatcher<TActions>;
};
