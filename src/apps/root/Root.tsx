import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ResponsiveDrawer } from "./ResponsiveDrawer";
import { Router } from "router5";
import { RouterProvider } from "react-router5";
import { RouteConfigContext, RouteConfigMap } from "./RouteConfig";
import { useRouteConfig } from "./useRouteConfig";

export type RootProps = {
  theme: Theme;
  router: Router;
  routeConfig: RouteConfigMap;
};

export const Root: React.FC<RootProps> = ({ theme, router, routeConfig }) => (
  <RouteConfigContext.Provider value={routeConfig}>
    <RouterProvider router={router}>
      <MuiThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveDrawer>
            <Page />
          </ResponsiveDrawer>
        </SCThemeProvider>
      </MuiThemeProvider>
    </RouterProvider>
  </RouteConfigContext.Provider>
);

const Page = () => {
  const { configNode } = useRouteConfig();
  return configNode ? React.createElement(configNode.component) : null;
};
