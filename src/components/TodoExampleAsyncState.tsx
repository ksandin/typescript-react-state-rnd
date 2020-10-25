import React from "react";
import { Example } from "./Example";
import { Typography } from "@material-ui/core";

export type TodoExampleRemoteStateProps = {};

export const TodoExampleAsyncState: React.FC<TodoExampleRemoteStateProps> = () => (
  <Example label="Todo app with async state">
    <Typography>Not implemented</Typography>
  </Example>
);
