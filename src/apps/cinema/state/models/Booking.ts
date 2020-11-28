import { TicketCounts } from "./TicketCounts";
import { LoungeSeat } from "./LoungeSeat";
import { ShowId } from "./Show";

export type Booking = {
  showId: ShowId;
  tickets: TicketCounts;
  seats: LoungeSeat[];
};
