import { ShowId } from "../../shared/models/Show";
import { GetSeatsForShowResponse } from "../../shared/responses/GetSeatsForShowResponse";
import { shows } from "../fixtures/shows";
import { lounges } from "../fixtures/lounges";
import { range } from "../../shared/functions/range";
import { LoungeSeat } from "../../shared/models/LoungeSeat";
import { bookings } from "../fixtures/bookings";

export const getShowSeats = (showId: ShowId): GetSeatsForShowResponse => {
  const show = shows.find((show) => show.showId === showId);
  const lounge = show
    ? lounges.find((lounge) => lounge.loungeId === show.loungeId)
    : undefined;
  const allSeats = lounge ? (range(1, lounge.seats) as LoungeSeat[]) : [];
  const showBookings = bookings.filter((booking) => booking.showId === showId);
  const reservedSeats = showBookings.reduce(
    (seats, booking) => [...seats, ...booking.seats],
    [] as LoungeSeat[]
  );
  return { allSeats, reservedSeats };
};
