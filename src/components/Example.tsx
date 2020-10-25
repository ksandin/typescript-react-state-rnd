import React from "react";
import { Typography } from "@material-ui/core";

export type ExampleProps = {
  label: string;
};

export const Example: React.FC<ExampleProps> = ({ label, children }) => (
  <>
    <Typography variant="h5">{label}</Typography>
    {children}
  </>
);
