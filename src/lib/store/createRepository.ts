import EventEmitter from "events";
import { Repository } from "./Repository";
import { updateRepository } from "./updateRepository";

export const createRepository = <TState>(initialState: TState) => {
  const repository: Repository<TState> = {
    state: initialState,
    events: new EventEmitter(),
    update: (updatedState) => updateRepository(repository, updatedState),
  };
  return repository;
};
