import createRouter5Router from "router5";
import browserPlugin from "router5-plugin-browser";
import { RouteConfigMap } from "./RouteConfig";

export const createRouter = (routes: RouteConfigMap) => {
  const router5routes = Array.from(routes.values()).map(({ path, name }) => ({
    path,
    name,
  }));
  const router = createRouter5Router(router5routes, {
    defaultRoute: router5routes[0].name,
  });
  router.usePlugin(browserPlugin());
  router.start();
  return router;
};
