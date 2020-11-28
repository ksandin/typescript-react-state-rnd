import { createTryResetBooking } from "./reactions/tryResetBooking";
import { CinemaStore } from "./state/CinemaStore";
import { Router } from "router5";
import { CinemaRouteConfigMap } from "./CinemaRouteConfig";
import { initializeReactions } from "./functions/initializeReactions";
import { reaction } from "../../lib/reaction";

export const cinemaReactions = (
  store: CinemaStore,
  router: Router,
  configMap: CinemaRouteConfigMap
) =>
  initializeReactions(store, router, configMap, [
    createTryResetBooking(store.dispatcher.actions.resetBooking),
    reaction(justOnce, store.dispatcher.actions.loadSessionState),
  ]);

const justOnce = () => undefined;
