import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router5";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateMomentUtils from "@date-io/moment";
import { createRouterForConfig } from "../../lib/react-router5-extensions/createRouterForConfig";
import { cinemaRoutes } from "./cinemaRoutes";
import {
  CinemaRouteConfigContext,
  useCinemaRouteConfig,
} from "./CinemaRouteConfig";
import { AppBar } from "./components/AppBar";
import { CookieNotification } from "./components/CookieNotification";

export const CinemaApp = () => {
  const [cinemaRouter] = useState(() => createRouterForConfig(cinemaRoutes));
  useEffect(() => {
    cinemaRouter.start();
    return () => cinemaRouter.stop();
  }, [cinemaRouter]);

  return (
    <RouterProvider router={cinemaRouter}>
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <CinemaRouteConfigContext.Provider value={cinemaRoutes}>
          <AppBar />
          <Page />
          <CookieNotification />
        </CinemaRouteConfigContext.Provider>
      </MuiPickersUtilsProvider>
    </RouterProvider>
  );
};

const Page = () => {
  const { configNode } = useCinemaRouteConfig();
  return configNode ? React.createElement(configNode.component) : <>404</>;
};
