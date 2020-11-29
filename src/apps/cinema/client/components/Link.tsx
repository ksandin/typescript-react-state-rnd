import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router5";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@material-ui/core";
import { BaseLinkProps } from "react-router5/dist/BaseLink";

export type LinkProps = MuiLinkProps &
  Pick<BaseLinkProps, "routeName" | "routeParams">;

export const Link = styled(MuiLink).attrs({
  color: "inherit",
  // MuiLink component requires a forwardRef, but RouterLink does not accept it, so we omit
  component: React.forwardRef((props: any, ref) => <RouterLink {...props} />),
})<LinkProps>``;
