import { useEffect, useState } from "react";
import { Repository } from "./Repository";
import { RepositoryEntries } from "./RepositoryEntries";

export const useRepository = <Id, Model>(
  repository: Repository<Id, Model>
): RepositoryEntries<Id, Model> => {
  const [state, setState] = useState(repository.entries);

  useEffect(() => {
    repository.events.on("change", setState);
    return () => {
      repository.events.off("change", setState);
    };
  }, [repository]);

  return state;
};
