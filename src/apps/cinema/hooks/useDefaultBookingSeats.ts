import { without } from "lodash";
import { useEffect } from "react";
import { BookingSession } from "../state/models/BookingSession";
import { CinemaActions } from "../state/CinemaActions";
import { totalCounts } from "../functions/totalCounts";

export const useDefaultBookingSeats = (
  bookingSession: BookingSession | undefined,
  updateBooking: CinemaActions["updateBooking"]
) => {
  useEffect(() => {
    if (bookingSession?.booking.seats.length === 0) {
      const ticketCount = totalCounts(bookingSession.booking.tickets);
      const { allSeats, reservedSeats } = bookingSession;
      const availableSeats = without(allSeats, ...reservedSeats);
      if (availableSeats.length > 0) {
        updateBooking({
          seats: availableSeats.slice(0, ticketCount),
        });
      }
    }
  }, [bookingSession, updateBooking]);
};
