import { LoungeSeat } from "./LoungeSeat";
import { Booking } from "./Booking";
import { BookingConfirmationDetails } from "./BookingConfirmationDetails";

export type BookingSession = {
  booking: Booking;
  reservedSeats: LoungeSeat[];
  allSeats: LoungeSeat[];
  details?: BookingConfirmationDetails;
};
