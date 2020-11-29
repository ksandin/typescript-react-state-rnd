import { LoungeSeat } from "./LoungeSeat";
import { Booking } from "./Booking";
import { ShowDetails } from "./ShowDetails";

export type BookingSession = {
  booking: Booking;
  reservedSeats: LoungeSeat[];
  availableSeats: LoungeSeat[];
  allSeats: LoungeSeat[];
  details?: ShowDetails;
};
