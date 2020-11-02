import { useEffect, useState } from "react";
import { Actions } from "./Actions";
import { ActionStatuses } from "./ActionStatuses";
import { Dispatcher } from "./Dispatcher";

export const useDispatcher = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>
): [ActionStatuses<keyof TActions>, TActions] => {
  const [localStatuses, setLocalStatuses] = useState(dispatcher.statuses);

  useEffect(() => {
    dispatcher.events.on("change", setLocalStatuses);
    return () => {
      dispatcher.events.off("change", setLocalStatuses);
    };
  }, [dispatcher]);

  return [localStatuses, dispatcher.actions];
};
