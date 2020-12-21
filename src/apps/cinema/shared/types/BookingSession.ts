import { LoungeSeat } from "./LoungeSeat";
import { Booking } from "./Booking";
import { ShowDetails } from "./ShowDetails";

export type BookingSession = {
  booking: Omit<Booking, "bookingId">;
  reservedSeats: LoungeSeat[];
  availableSeats: LoungeSeat[];
  allSeats: LoungeSeat[];
  details?: ShowDetails;
};
