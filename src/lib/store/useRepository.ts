import { useEffect, useState } from "react";
import { Repository } from "./Repository";

export const useRepository = <TState>(
  repository: Repository<TState>
): TState => {
  const [state, setState] = useState(repository.state);

  useEffect(() => {
    repository.events.on("change", setState);
    return () => {
      repository.events.off("change", setState);
    };
  }, [repository]);

  return state;
};
