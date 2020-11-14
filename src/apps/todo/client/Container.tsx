import styled from "styled-components";
import { Container as MuiContainer } from "@material-ui/core";

export const Container = styled(MuiContainer).attrs({ maxWidth: "md" })`
  padding: 32px 0;
`;
