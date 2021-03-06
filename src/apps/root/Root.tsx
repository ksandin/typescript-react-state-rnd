import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Router } from "router5";
import { RouterProvider } from "react-router5";
import { ResponsiveDrawer } from "./ResponsiveDrawer";
import {
  RootRouteConfigContext,
  RootRouteConfigMap,
  useRootRouteConfig,
} from "./RootRouteConfig";
import { GlobalStyle } from "./GlobalStyle";

export type RootProps = {
  theme: Theme;
  router: Router;
  routeConfig: RootRouteConfigMap;
};

export const Root: React.FC<RootProps> = ({ theme, router, routeConfig }) => (
  <RootRouteConfigContext.Provider value={routeConfig}>
    <RouterProvider router={router}>
      <MuiThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <ResponsiveDrawer>
            <Page />
          </ResponsiveDrawer>
        </SCThemeProvider>
      </MuiThemeProvider>
    </RouterProvider>
  </RootRouteConfigContext.Provider>
);

const Page = () => {
  const { configNode } = useRootRouteConfig();
  return configNode ? React.createElement(configNode.component) : null;
};
