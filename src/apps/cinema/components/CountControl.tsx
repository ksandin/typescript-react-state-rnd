import React from "react";
import styled from "styled-components";
import { Fab, Typography } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

export type CountControlProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  value: number;
  onChange: (newValue: number) => void;
};

export const CountControl = ({
  value,
  onChange,
  ...props
}: CountControlProps) => {
  const increase = () => onChange(value + 1);
  const decrease = () => onChange(value - 1);
  return (
    <Row {...props}>
      <Fab color="primary" size="small" onClick={decrease}>
        <Remove />
      </Fab>
      <Count>{value}</Count>
      <Fab color="primary" size="small" onClick={increase}>
        <Add />
      </Fab>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled(Typography)`
  margin: 0 16px;
`;
