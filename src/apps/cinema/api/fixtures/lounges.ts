import { Lounge, LoungeId } from "../../shared/models/Lounge";
import { range } from "../../shared/functions/range";
import { cinemas } from "./cinemas";

let loungeId = 0 as LoungeId;
export const lounges: Lounge[] = [];
cinemas.forEach(({ cinemaId }, i) =>
  lounges.push(
    ...range(1, i + 2).map((loungeNr) => ({
      cinemaId,
      loungeId: loungeId++ as LoungeId,
      name: `Lounge ${loungeNr}`,
      seats: Math.pow(2, loungeNr),
    }))
  )
);
