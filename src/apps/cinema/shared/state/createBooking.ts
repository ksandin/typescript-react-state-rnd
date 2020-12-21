import { Map } from "immutable";
import { ShowId } from "../types/Show";
import { TicketTypeId } from "../types/TicketType";
import { Booking } from "../types/Booking";

export const createBooking = (
  showId: ShowId,
  defaultTicketTypeId?: TicketTypeId,
  availableTickets: number = 2
): Omit<Booking, "bookingId"> => ({
  showId,
  tickets: defaultTicketTypeId
    ? Map<TicketTypeId, number>().set(
        defaultTicketTypeId,
        Math.min(2, availableTickets)
      )
    : Map(),
  seats: [],
});
