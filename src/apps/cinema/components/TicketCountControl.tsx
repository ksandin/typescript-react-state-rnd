import React from "react";
import {
  ListItem,
  ListItemProps,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { CountControl, CountControlProps } from "./CountControl";
import { Price } from "../state/models/Price";
import { commonPriceFormat } from "../functions/commonPriceFormat";

export type TicketCountControlProps<
  D extends React.ElementType = "li",
  P = {}
> = Omit<ListItemProps<D, P>, "onChange"> &
  Pick<CountControlProps, "value" | "onChange"> & {
    type: string;
    price: Price;
  };

export const TicketCountControl = <D extends React.ElementType = "li", P = {}>({
  type,
  price,
  value,
  onChange,
  ...props
}: TicketCountControlProps<D, P>) => (
  <ListItem {...props}>
    <ListItemText primary={type} secondary={commonPriceFormat(price)} />
    <ListItemSecondaryAction>
      <CountControl value={value} onChange={onChange} />
    </ListItemSecondaryAction>
  </ListItem>
);
