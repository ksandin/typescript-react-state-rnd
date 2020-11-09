import { RouteConfigMap } from "./RouteConfig";
import { groupBy } from "lodash";

export const createMenu = (map: RouteConfigMap) =>
  groupBy(Array.from(map.values()), (config) => config.app);
