import { createContext } from "react";
import { Router5ConfigNode } from "./Router5ConfigNode";
import { Router5ConfigMap } from "./Router5ConfigMap";

export const createRouter5ConfigContext = <Node extends Router5ConfigNode>(
  config: Router5ConfigMap<Node> = new Map()
) => createContext(config);
