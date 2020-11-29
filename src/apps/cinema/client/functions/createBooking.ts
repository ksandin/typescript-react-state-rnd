import { Map } from "immutable";
import { ShowId } from "../../shared/models/Show";
import { TicketTypeId } from "../../shared/models/TicketType";
import { Booking } from "../../shared/models/Booking";

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
