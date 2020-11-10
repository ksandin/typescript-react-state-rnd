import createRouter5Router from "router5";
import { RouteConfigMap } from "./RouteConfig";

export const createRouterForConfig = (routes: RouteConfigMap) => {
  const router5routes = Array.from(routes.values()).map(({ path, name }) => ({
    path,
    name,
  }));
  return createRouter5Router(router5routes, {
    defaultRoute: router5routes[0].name,
  });
};
