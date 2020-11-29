import React from "react";
import { Button, ButtonProps, CircularProgress } from "@material-ui/core";
import styled from "styled-components";

export type ProgressButtonProps = ButtonProps & {
  pending: boolean;
};

export const ProgressButton = ({ pending, ...props }: ProgressButtonProps) => (
  <Button disabled={pending} endIcon={pending && <Progress />} {...props} />
);

const Progress = styled(CircularProgress).attrs({ size: 24 })`
  margin-left: 12px;
`;
