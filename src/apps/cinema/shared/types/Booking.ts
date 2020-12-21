import { TicketCounts } from "./TicketCounts";
import { LoungeSeat } from "./LoungeSeat";
import { ShowId } from "./Show";

export type BookingId = Opaque<string, "BookingId">;

export type Booking = {
  bookingId: BookingId;
  showId: ShowId;
  tickets: TicketCounts;
  seats: LoungeSeat[];
};
