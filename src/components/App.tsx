import React from "react";
import styled, { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Examples } from "./Examples";

export type AppProps = {
  theme: Theme;
};

export const App: React.FC<AppProps> = ({ theme }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Examples />
        </Container>
      </SCThemeProvider>
    </MuiThemeProvider>
  );
};

const Container = styled.div`
  margin: auto;
  width: 600px;
`;
