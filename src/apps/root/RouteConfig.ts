import { ComponentType, createContext } from "react";

export type RouteConfigNode = {
  path: string;
  name: string;
  title: string;
  app: string;
  component: ComponentType;
  icon: ComponentType;
};

export type RouteConfigMap = Map<string, RouteConfigNode>;

export const RouteConfigContext = createContext<RouteConfigMap>(new Map());
