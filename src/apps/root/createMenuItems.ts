import { groupBy } from "lodash";
import { RootRouteConfigMap } from "./RootRouteConfig";

export const createMenuItems = (map: RootRouteConfigMap) =>
  groupBy(Array.from(map.values()), (config) => config.app);
