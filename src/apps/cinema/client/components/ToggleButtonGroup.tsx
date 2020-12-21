import React from "react";
import {
  ToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
  ToggleButtonProps,
} from "@material-ui/lab";

export type ToggleButtonGroupProps<T> = Omit<
  MuiToggleButtonGroupProps,
  "value" | "onChange" | "exclusive"
> & {
  value: T;
  options: ToggleButtonGroupOption<T>[];
  onChange: (e: React.MouseEvent<HTMLElement>, newValue: T) => void;
};

export type ToggleButtonGroupOption<T> = Omit<ToggleButtonProps, "value"> & {
  value: T;
};

/**
 * material-ui/ToggleButtonGroup with generic type for button values
 */
export function ToggleButtonGroup<T>({
  options,
  ...props
}: ToggleButtonGroupProps<T>) {
  return (
    <MuiToggleButtonGroup exclusive {...props}>
      {options.map((props, index) => (
        <ToggleButton key={index} {...props} />
      ))}
    </MuiToggleButtonGroup>
  );
}
