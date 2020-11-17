import { Map } from "immutable";

export type CrudState<Id, Model> = Map<Id, Model>;
