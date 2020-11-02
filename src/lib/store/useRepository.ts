import { useEffect, useState } from "react";
import { Map } from "immutable";
import { Repository } from "./Repository";

export const useRepository = <Id, Model>(
  repository: Repository<Id, Model>
): Map<Id, Model> => {
  const [localEntries, setLocalEntries] = useState(repository.entries);

  useEffect(() => {
    repository.events.on("change", setLocalEntries);
    return () => {
      repository.events.off("change", setLocalEntries);
    };
  }, [repository]);

  return localEntries;
};
