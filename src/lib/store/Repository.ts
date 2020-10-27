import { Map } from "immutable";
import { RepositoryEvents } from "./RepositoryEvents";

export type Repository<Id, Model> = {
  entries: Map<Id, Model>;
  events: RepositoryEvents<Id, Model>;
};
