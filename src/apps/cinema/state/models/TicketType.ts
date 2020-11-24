import { Price } from "./Price";

export type TicketTypeId = Opaque<number, "TicketTypeId">;

export type TicketType = {
  ticketTypeId: TicketTypeId;
  name: string;
  price: Price;
};
