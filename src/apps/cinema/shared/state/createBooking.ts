import { Map } from "immutable";
import { ShowId } from "../models/Show";
import { TicketTypeId } from "../models/TicketType";
import { Booking } from "../models/Booking";

export const createBooking = (
  showId: ShowId,
  defaultTicketTypeId?: TicketTypeId,
  availableTickets: number = 2
): Booking => ({
  showId,
  tickets: defaultTicketTypeId
    ? Map<TicketTypeId, number>().set(
        defaultTicketTypeId,
        Math.min(2, availableTickets)
      )
    : Map(),
  seats: [],
});
