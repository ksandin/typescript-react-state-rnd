import React from "react";
import {
  ListItem,
  ListItemProps,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { CountControl, CountControlProps } from "./CountControl";

export type TicketCountControlProps<
  D extends React.ElementType = "li",
  P = {}
> = Omit<ListItemProps<D, P>, "onChange"> &
  Pick<CountControlProps, "value" | "onChange"> & {
    type: string;
    price: string;
  };

export const TicketCountControl = <D extends React.ElementType = "li", P = {}>({
  type,
  price,
  value,
  onChange,
  ...props
}: TicketCountControlProps<D, P>) => (
  <ListItem {...props}>
    <ListItemText primary={type} secondary={price} />
    <ListItemSecondaryAction>
      <CountControl value={value} onChange={onChange} />
    </ListItemSecondaryAction>
  </ListItem>
);
