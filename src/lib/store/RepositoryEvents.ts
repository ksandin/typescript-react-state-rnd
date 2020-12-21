import TypedEmitter from "typed-emitter";

export type RepositoryEvents<TState> = TypedEmitter<{
  change: (newState: TState, oldState: TState) => void;
}>;
