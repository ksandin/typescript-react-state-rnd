import { useRoute as useRouter5Route } from "react-router5";
import { useContext, Context } from "react";
import { State } from "router5";
import { Router5ConfigMap } from "./Router5ConfigMap";
import { Router5ConfigNode } from "./Router5ConfigNode";

export const useRouter5Config = <Node extends Router5ConfigNode>(
  configContext: Context<Router5ConfigMap<Node>>
) => {
  const { route: badlyTypedRoute, ...props } = useRouter5Route();
  const route = badlyTypedRoute as State | undefined;
  const configMap = useContext(configContext);
  const configNode = route ? configMap.get(route.name) : undefined;
  return { route, configNode, configMap, ...props };
};
