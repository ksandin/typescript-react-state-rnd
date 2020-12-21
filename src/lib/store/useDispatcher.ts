import { useEffect, useState } from "react";
import { Actions } from "./Actions";
import { Dispatches } from "./Dispatches";
import { Dispatcher } from "./Dispatcher";
import { DispatcherActions } from "./DispatcherActions";

export const useDispatcher = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>
): [DispatcherActions<TActions>, Dispatches<keyof TActions>] => {
  const [dispatches, setDispatches] = useState(dispatcher.dispatches);

  useEffect(() => {
    dispatcher.events.on("change", setDispatches);
    return () => {
      dispatcher.events.off("change", setDispatches);
    };
  }, [dispatcher]);

  return [dispatcher.actions, dispatches];
};
