import createRouter5Router from "router5";
import { Router5ConfigMap } from "./Router5ConfigMap";
import { Router5ConfigNode } from "./Router5ConfigNode";

export const createRouterForConfig = <Node extends Router5ConfigNode>(
  routeConfig: Router5ConfigMap<Node>
) => {
  const routes = Array.from(routeConfig.values()).map(({ path, name }) => ({
    path,
    name,
  }));
  return createRouter5Router(routes, {
    defaultRoute: routes[0].name,
  });
};
