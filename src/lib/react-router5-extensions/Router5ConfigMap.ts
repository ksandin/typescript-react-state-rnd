import { Router5ConfigNode } from "./Router5ConfigNode";

export type Router5ConfigMap<Node extends Router5ConfigNode> = Map<
  Node["name"],
  Node
>;
