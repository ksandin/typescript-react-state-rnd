import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

export type AppProps = {
  theme: Theme;
};

export const App: React.FC<AppProps> = ({ theme }) => (
  <MuiThemeProvider theme={theme}>
    <SCThemeProvider theme={theme}>
      <CssBaseline />
      Typescript & React state R&D
    </SCThemeProvider>
  </MuiThemeProvider>
);