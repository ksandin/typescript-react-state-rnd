import React from "react";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { commonPriceFormat } from "../functions/commonPriceFormat";
import { Price } from "../../shared/models/Price";
import { TicketCounts } from "../../shared/models/TicketCounts";
import { useCinemaSelector } from "../hooks/useCinemaSelector";

export type TicketListProps = { tickets: TicketCounts };

export const TicketList = ({ tickets }: TicketListProps) => {
  const ticketTypes = useCinemaSelector(({ ticketTypes }) => ticketTypes);
  return (
    <List>
      {tickets.toArray().map(([ticketTypeId, ticketCount]) => {
        const { name, price } = ticketTypes.find(
          (type) => type.ticketTypeId === ticketTypeId
        )!;
        return (
          <ListItem key={ticketTypeId}>
            <ListItemText>
              {ticketCount}x {name}
            </ListItemText>
            <ListItemSecondaryAction>
              <Typography>
                {commonPriceFormat((ticketCount * price) as Price)}
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
