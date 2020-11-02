import { useEffect, useState } from "react";
import { Repository } from "./Repository";
import { RepositoryEntries } from "./RepositoryEntries";

export const useRepository = <Id, Model>(
  repository: Repository<Id, Model>
): RepositoryEntries<Id, Model> => {
  const [localEntries, setLocalEntries] = useState(repository.entries);

  useEffect(() => {
    repository.events.on("change", setLocalEntries);
    return () => {
      repository.events.off("change", setLocalEntries);
    };
  }, [repository]);

  return localEntries;
};
