import { without } from "lodash";
import { Booking } from "../../shared/models/Booking";
import { totalCounts } from "../../shared/functions/totalCounts";
import { bookings } from "../fixtures/bookings";
import { getShowSeats } from "./getShowSeats";

export const makeBooking = async (booking: Booking) => {
  const { allSeats, reservedSeats } = await getShowSeats(booking.showId);
  const remainingSeats = without(allSeats, ...reservedSeats);
  if (totalCounts(booking.tickets) > remainingSeats.length) {
    return "Not enough tickets available";
  }
  const unallowedSeats = without(booking.seats, ...remainingSeats);
  if (unallowedSeats.length > 0) {
    return `Seats not allowed: ${unallowedSeats}`;
  }
  bookings.push(booking);
};
