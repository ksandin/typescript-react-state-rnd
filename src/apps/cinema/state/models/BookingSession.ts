import { LoungeSeat } from "./LoungeSeat";
import { Booking } from "./Booking";

export type BookingSession = {
  booking: Booking;
  reservedSeats: LoungeSeat[];
  allSeats: LoungeSeat[];
};
