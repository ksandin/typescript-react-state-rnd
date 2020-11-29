import { Map } from "immutable";
import { ShowId } from "../state/models/Show";
import { TicketTypeId } from "../state/models/TicketType";
import { Booking } from "../state/models/Booking";

export const createBooking = (
  showId: ShowId,
  defaultTicketTypeId?: TicketTypeId
): Booking => ({
  showId,
  tickets: defaultTicketTypeId
    ? Map<TicketTypeId, number>().set(defaultTicketTypeId, 2)
    : Map(),
  seats: [],
});
