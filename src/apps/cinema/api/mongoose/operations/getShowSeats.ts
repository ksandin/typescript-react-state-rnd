import { Model } from "mongoose";
import { ShowId } from "../../../shared/types/Show";
import { GetSeatsForShowResponse } from "../../../shared/responses/GetSeatsForShowResponse";
import { range } from "../../../shared/functions/range";
import { LoungeSeat } from "../../../shared/types/LoungeSeat";
import { BookingDocument } from "../documents/BookingDocument";
import { ShowDocument } from "../documents/ShowDocument";
import { LoungeDocument } from "../documents/LoungeDocument";

export const getShowSeats = async (
  {
    BookingModel,
    ShowModel,
    LoungeModel,
  }: {
    BookingModel: Model<BookingDocument>;
    ShowModel: Model<ShowDocument>;
    LoungeModel: Model<LoungeDocument>;
  },
  showId: ShowId
): Promise<GetSeatsForShowResponse> => {
  const show = await ShowModel.findOne({ showId });
  const lounge = show
    ? await LoungeModel.findOne({ loungeId: show.loungeId })
    : undefined;
  const allSeats = lounge ? (range(1, lounge.seats) as LoungeSeat[]) : [];
  const showBookings = await BookingModel.find({ showId });
  const reservedSeats = showBookings.reduce(
    (seats, booking) => [...seats, ...booking.seats],
    [] as LoungeSeat[]
  );
  return { allSeats, reservedSeats };
};
