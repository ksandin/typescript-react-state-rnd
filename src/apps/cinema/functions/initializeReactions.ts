import { constants, Router, State } from "router5";
import { debounce } from "@material-ui/core";
import {
  CinemaRouteConfigMap,
  CinemaRouteConfigNode,
} from "../CinemaRouteConfig";
import { CinemaStore } from "../state/CinemaStore";
import { CinemaState } from "../state/CinemaState";

export const initializeReactions = (
  { repository, dispatcher: { actions } }: CinemaStore,
  router: Router,
  configMap: CinemaRouteConfigMap,
  reactions: Array<(state: CinemaState, config?: CinemaRouteConfigNode) => void>
) => {
  const updateReactions = debounce(() => {
    const config = getRouteConfigNode();
    for (const reaction of reactions) {
      reaction(repository.state, config);
    }
  }, 0);

  const getRouteConfigNode = () => {
    const route = router.getState() as State | undefined;
    return route ? configMap.get(route.name) : undefined;
  };

  // Initial actions
  updateReactions();

  // Subscribe to repository and router for reactions
  repository.events.on("change", updateReactions);
  router.addEventListener(constants.TRANSITION_SUCCESS, updateReactions);
  return () => {
    updateReactions.clear();
    repository.events.off("change", updateReactions);
    router.removeEventListener(constants.TRANSITION_SUCCESS, updateReactions);
  };
};
