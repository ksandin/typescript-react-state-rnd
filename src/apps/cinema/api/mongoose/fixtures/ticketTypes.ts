import { Types } from "mongoose";
import { TicketType, TicketTypeId } from "../../../shared/types/TicketType";
import { Price } from "../../../shared/types/Price";

export const ticketTypes: TicketType[] = [
  {
    name: "Regular ticket",
    ticketTypeId: Types.ObjectId().toString() as TicketTypeId,
    price: 120 as Price,
  },
  {
    name: "Pensioner ticket",
    ticketTypeId: Types.ObjectId().toString() as TicketTypeId,
    price: 90 as Price,
  },
];
