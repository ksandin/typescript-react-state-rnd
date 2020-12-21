import { Model } from "mongoose";
import { ShowId } from "../../../shared/types/Show";
import { ShowDetails } from "../../../shared/types/ShowDetails";
import { populateVirtuals } from "../../../../../lib/mongoose-tsextensions/populateVirtuals";
import { ShowDocument, ShowVirtuals } from "../documents/ShowDocument";

export const getShowDetails = async (
  ShowModel: Model<ShowDocument>,
  showId: ShowId
): Promise<ShowDetails | undefined> => {
  const show = await populateVirtuals<ShowVirtuals>()(
    ShowModel.findOne({ showId }),
    "movie",
    "cinema",
    "lounge"
  );

  if (!show) {
    return;
  }

  const { movie, cinema, lounge } = show;
  if (show && movie && cinema && lounge) {
    return {
      movieName: movie.name,
      movieCardUrl: movie.cardUrl,
      movieRuntime: movie.runtime,
      moviePremiereDate: movie.premiereDate,
      showDate: show.date,
      cinemaName: cinema.name,
      loungeName: lounge.name,
    };
  }
};
