import { RepositoryEvents } from "./RepositoryEvents";

export type Repository<TState> = {
  state: TState;
  events: RepositoryEvents<TState>;
  update: (newState: TState) => void;
};
