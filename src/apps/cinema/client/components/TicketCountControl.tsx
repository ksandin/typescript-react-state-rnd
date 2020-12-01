import React from "react";
import {
  ListItem,
  ListItemProps,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Price } from "../../shared/models/Price";
import { commonPriceFormat } from "../functions/commonPriceFormat";
import { CountControl, CountControlProps } from "./CountControl";

export type TicketCountControlProps<
  D extends React.ElementType = "li",
  P = {}
> = Omit<ListItemProps<D, P>, "onChange"> &
  Pick<CountControlProps, "value" | "onChange" | "acceptNewValue"> & {
    type: string;
    price: Price;
  };

export const TicketCountControl = <D extends React.ElementType = "li", P = {}>({
  type,
  price,
  value,
  onChange,
  acceptNewValue,
  ...props
}: TicketCountControlProps<D, P>) => (
  <ListItem {...props}>
    <ListItemText primary={type} secondary={commonPriceFormat(price)} />
    <ListItemSecondaryAction>
      <CountControl
        value={value}
        onChange={onChange}
        acceptNewValue={acceptNewValue}
      />
    </ListItemSecondaryAction>
  </ListItem>
);
