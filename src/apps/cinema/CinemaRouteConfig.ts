import { ComponentType } from "react";
import { useRouter5Config } from "../../lib/react-router5-extensions/useRouter5Config";
import { createRouter5ConfigContext } from "../../lib/react-router5-extensions/createRouter5ConfigContext";
import { Router5ConfigMap } from "../../lib/react-router5-extensions/Router5ConfigMap";
import { Router5ConfigNode } from "../../lib/react-router5-extensions/Router5ConfigNode";
import { useRouter5ConfigReaction } from "../../lib/react-router5-extensions/useRouter5ConfigReaction";
import shallowEqual from "shallowequal";

export interface CinemaRouteConfigNode extends Router5ConfigNode {
  title: string;
  component: ComponentType;
}

export type CinemaRouteConfigMap = Router5ConfigMap<CinemaRouteConfigNode>;

export const CinemaRouteConfigContext = createRouter5ConfigContext<
  CinemaRouteConfigNode
>(new Map());

export const useCinemaRouteConfig = () =>
  useRouter5Config(CinemaRouteConfigContext);

export const useCinemaRouterConfigReaction = <TSelection>(
  select: (config?: CinemaRouteConfigNode) => TSelection,
  react: (selection: TSelection) => void
) =>
  useRouter5ConfigReaction(
    CinemaRouteConfigContext,
    select,
    react,
    shallowEqual
  );
