import React, { useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ResponsiveDrawer } from "./ResponsiveDrawer";
import { MenuCategory } from "../state/MenuCategory";
import { MenuHighlight } from "../state/MenuHighlight";

export type AppProps = {
  theme: Theme;
  menu: MenuCategory[];
};

export const App: React.FC<AppProps> = ({ theme, menu }) => {
  const [route, setRoute] = useState<MenuHighlight>([0, 0]);
  const [categoryIndex, childIndex] = route;
  const Page = menu[categoryIndex].options[childIndex].component;
  return (
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveDrawer
          menu={menu}
          menuHighlight={route}
          onHighlightChange={setRoute}
        >
          <Page />
        </ResponsiveDrawer>
      </SCThemeProvider>
    </MuiThemeProvider>
  );
};
