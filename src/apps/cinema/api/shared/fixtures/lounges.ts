import { Lounge, LoungeId } from "../../../shared/types/Lounge";
import { range } from "../../../shared/functions/range";
import { Cinema } from "../../../shared/types/Cinema";

export const createLounges = (cinemas: Cinema[], newId: () => LoungeId) => {
  const lounges: Lounge[] = [];
  cinemas.forEach(({ cinemaId }, i) =>
    lounges.push(
      ...range(1, i + 2).map((loungeNr) => ({
        cinemaId,
        loungeId: newId(),
        name: `Lounge ${loungeNr}`,
        seats: Math.pow(2, loungeNr),
      }))
    )
  );
  return lounges;
};
