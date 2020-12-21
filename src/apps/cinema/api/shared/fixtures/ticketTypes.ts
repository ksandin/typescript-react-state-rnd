import { TicketType, TicketTypeId } from "../../../shared/types/TicketType";
import { Price } from "../../../shared/types/Price";

export const createTicketTypes = (newId: () => TicketTypeId): TicketType[] => [
  {
    name: "Regular ticket",
    ticketTypeId: newId(),
    price: 120 as Price,
  },
  {
    name: "Pensioner ticket",
    ticketTypeId: newId(),
    price: 90 as Price,
  },
];
