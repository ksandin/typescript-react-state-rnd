import { RootRouteConfigMap } from "./RootRouteConfig";
import { groupBy } from "lodash";

export const createMenuItems = (map: RootRouteConfigMap) =>
  groupBy(Array.from(map.values()), (config) => config.app);
