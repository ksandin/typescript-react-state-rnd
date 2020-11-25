import { useContext, Context, useCallback } from "react";
import { Router5ConfigMap } from "./Router5ConfigMap";
import { Router5ConfigNode } from "./Router5ConfigNode";
import { useRouter5Reaction } from "./useRouter5Reaction";
import { SubscribeState } from "router5";

export const useRouter5ConfigReaction = <
  TNode extends Router5ConfigNode,
  TSelection
>(
  configContext: Context<Router5ConfigMap<TNode>>,
  select: (config?: TNode) => TSelection,
  react: (selection: TSelection) => void,
  equalsFn?: (a?: TSelection, b?: TSelection) => boolean
) => {
  const configMap = useContext(configContext);
  const selectConfig = useCallback(
    ({ route }: Partial<SubscribeState>) =>
      select(route ? configMap.get(route.name) : undefined),
    [select, configMap]
  );
  useRouter5Reaction(selectConfig, react, equalsFn);
};
