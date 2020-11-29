import { LoungeSeat } from "./LoungeSeat";
import { Booking } from "./Booking";
import { BookingConfirmationDetails } from "./BookingConfirmationDetails";

export type BookingSession = {
  booking: Booking;
  reservedSeats: LoungeSeat[];
  availableSeats: LoungeSeat[];
  allSeats: LoungeSeat[];
  details?: BookingConfirmationDetails;
};
