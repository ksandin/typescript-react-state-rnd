import React, { useState } from "react";
import { RouterProvider } from "react-router5";
import { createRouterForConfig } from "../../lib/react-router5-extensions/createRouterForConfig";
import { useRouterMount } from "../../lib/react-router5-extensions/useRouterMount";
import { cinemaRoutes } from "./cinemaRoutes";
import {
  CinemaRouteConfigContext,
  useCinemaRouteConfig,
} from "./CinemaRouteConfig";
import { AppBar } from "./AppBar";

export const CinemaApp = () => {
  const [cinemaRouter] = useState(() => createRouterForConfig(cinemaRoutes));
  useRouterMount(cinemaRouter);
  return (
    <RouterProvider router={cinemaRouter}>
      <CinemaRouteConfigContext.Provider value={cinemaRoutes}>
        <AppBar />
        <Page />
      </CinemaRouteConfigContext.Provider>
    </RouterProvider>
  );
};

const Page = () => {
  const { configNode } = useCinemaRouteConfig();
  return configNode ? React.createElement(configNode.component) : <>404</>;
};
