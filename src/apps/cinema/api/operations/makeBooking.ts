import { without } from "lodash";
import { Types } from "mongoose";
import { Booking, BookingId } from "../../shared/types/Booking";
import { totalCounts } from "../../shared/functions/totalCounts";
import { CinemaModels } from "../createModels";
import { getShowSeats } from "./getShowSeats";

export const makeBooking = async (models: CinemaModels, booking: Booking) => {
  const { allSeats, reservedSeats } = await getShowSeats(
    models,
    booking.showId
  );
  const remainingSeats = without(allSeats, ...reservedSeats);
  if (totalCounts(booking.tickets) > remainingSeats.length) {
    return "Not enough tickets available";
  }
  const unallowedSeats = without(booking.seats, ...remainingSeats);
  if (unallowedSeats.length > 0) {
    return `Seats not allowed: ${unallowedSeats}`;
  }
  await models.BookingModel.create({
    ...booking,
    bookingId: Types.ObjectId().toString() as BookingId,
  });
};
