import React, { useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ResponsiveDrawer } from "./ResponsiveDrawer";
import { MenuCategory } from "./MenuCategory";
import { MenuHighlight } from "./MenuHighlight";

export type RootProps = {
  theme: Theme;
  menu: MenuCategory[];
};

export const Root: React.FC<RootProps> = ({ theme, menu }) => {
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
