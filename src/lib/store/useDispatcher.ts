import { useEffect, useState } from "react";
import { Actions } from "./Actions";
import { Dispatches } from "./Dispatches";
import { Dispatcher } from "./Dispatcher";

export const useDispatcher = <TActions extends Actions>(
  dispatcher: Dispatcher<TActions>
): [Dispatches<keyof TActions>, TActions] => {
  const [state, setState] = useState(dispatcher.dispatches);

  useEffect(() => {
    dispatcher.events.on("change", setState);
    return () => {
      dispatcher.events.off("change", setState);
    };
  }, [dispatcher]);

  return [state, dispatcher.actions];
};
