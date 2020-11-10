import React from "react";
import styled from "styled-components";
import { Link } from "./Link";
import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from "@material-ui/core";

export const AppBar = () => (
  <MuiAppBar position="relative">
    <Toolbar>
      <Link color="inherit" routeName="home">
        Home
      </Link>
      <Link color="inherit" routeName="tickets">
        Tickets
      </Link>
      <Link color="inherit" routeName="movies">
        Movies
      </Link>
    </Toolbar>
  </MuiAppBar>
);

const Toolbar = styled(MuiToolbar)`
  & {
    ${Link} + ${Link} {
      margin-left: 20px;
    }
  }
`;