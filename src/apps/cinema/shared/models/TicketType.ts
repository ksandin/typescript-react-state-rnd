import { Price } from "./Price";

export type TicketTypeId = Opaque<string, "TicketTypeId">;

export type TicketType = {
  ticketTypeId: TicketTypeId;
  name: string;
  price: Price;
};
