import { useRoute as useRouter5Route } from "react-router5";
import { useContext } from "react";
import { RouteConfigContext } from "./RouteConfig";

export const useRouteConfig = () => {
  const { route, ...props } = useRouter5Route();
  const configMap = useContext(RouteConfigContext);
  const configNode = configMap.get(route.name);
  return { route, configNode, configMap, ...props };
};
