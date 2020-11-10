import React from "react";
import { RouterProvider } from "react-router5";
import { createRouterForConfig } from "../root/createRouterForConfig";
import { routes } from "./fixtures/routes";
import { useRouteConfig } from "../root/useRouteConfig";
import { RouteConfigContext } from "../root/RouteConfig";
import { AppBar } from "./AppBar";

const router = createRouterForConfig(routes);
router.start();

export const CinemaApp = () => (
  <RouterProvider router={router}>
    <RouteConfigContext.Provider value={routes}>
      <AppBar />
      <Page />
    </RouteConfigContext.Provider>
  </RouterProvider>
);

const Page = () => {
  const { configNode } = useRouteConfig();
  return configNode ? React.createElement(configNode.component) : <>404</>;
};
