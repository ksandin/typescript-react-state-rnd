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
  acceptNewValue?: (value: number) => boolean;
};

export const CountControl = ({
  value,
  onChange,
  acceptNewValue = atLeast0,
  ...props
}: CountControlProps) => {
  const tryChange = (newValue: number) => {
    if (acceptNewValue(newValue)) {
      onChange(newValue);
    }
  };
  const increase = () => tryChange(value + 1);
  const decrease = () => tryChange(value - 1);
  const canDecrease = acceptNewValue(value - 1);
  const canIncrease = acceptNewValue(value + 1);
  return (
    <Row {...props}>
      <Fab
        color="primary"
        disabled={!canDecrease}
        size="small"
        onClick={decrease}
      >
        <Remove />
      </Fab>
      <Count>{value}</Count>
      <Fab
        color="primary"
        disabled={!canIncrease}
        size="small"
        onClick={increase}
      >
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

const atLeast0 = (value: number) => value >= 0;
