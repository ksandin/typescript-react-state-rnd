import { ShowId } from "../../shared/types/Show";
import { ShowDetails } from "../../shared/types/ShowDetails";
import { CinemaModels } from "../createModels";
import { populateVirtuals } from "../../../../lib/mongoose-tsextensions/populateVirtuals";
import { ShowVirtuals } from "../documents/ShowDocument";

export const getShowDetails = async (
  { ShowModel }: CinemaModels,
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
