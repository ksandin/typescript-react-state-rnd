import { Repository } from "./Repository";

export const updateRepository = <TState>(
  repository: Repository<TState>,
  newState: TState
) => {
  const prevState = repository.state;
  repository.state = newState;
  repository.events.emit("change", newState, prevState);
};
