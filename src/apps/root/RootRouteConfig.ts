import { ComponentType } from "react";
import { useRouter5Config } from "../../lib/react-router5-extensions/useRouter5Config";
import { createRouter5ConfigContext } from "../../lib/react-router5-extensions/createRouter5ConfigContext";
import { Router5ConfigMap } from "../../lib/react-router5-extensions/Router5ConfigMap";
import { Router5ConfigNode } from "../../lib/react-router5-extensions/Router5ConfigNode";

export interface RootRouteConfigNode extends Router5ConfigNode {
  title: string;
  app: string;
  component: ComponentType;
  icon: ComponentType;
}

export type RootRouteConfigMap = Router5ConfigMap<RootRouteConfigNode>;

export const RootRouteConfigContext = createRouter5ConfigContext<
  RootRouteConfigNode
>(new Map());

export const useRootRouteConfig = () =>
  useRouter5Config(RootRouteConfigContext);
