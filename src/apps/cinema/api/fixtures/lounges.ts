import { Types } from "mongoose";
import { Lounge, LoungeId } from "../../shared/types/Lounge";
import { range } from "../../shared/functions/range";
import { cinemas } from "./cinemas";

export const lounges: Lounge[] = [];
cinemas.forEach(({ cinemaId }, i) =>
  lounges.push(
    ...range(1, i + 2).map((loungeNr) => ({
      cinemaId,
      loungeId: Types.ObjectId().toString() as LoungeId,
      name: `Lounge ${loungeNr}`,
      seats: Math.pow(2, loungeNr),
    }))
  )
);
