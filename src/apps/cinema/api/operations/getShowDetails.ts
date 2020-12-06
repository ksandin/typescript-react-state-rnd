import { ShowId } from "../../shared/types/Show";
import { ShowDetails } from "../../shared/types/ShowDetails";
import { CinemaModels } from "../createModels";
import { WithVirtuals } from "../../../../lib/mongoose-tsextensions/WithVirtuals";
import { ShowDocument, ShowVirtuals } from "../documents/ShowDocument";

export const getShowDetails = async (
  { ShowModel }: CinemaModels,
  showId: ShowId
): Promise<ShowDetails | undefined> => {
  type PopulatedShow = WithVirtuals<ShowDocument, ShowVirtuals> | null;
  const show: PopulatedShow = await ShowModel.findOne({ showId })
    .populate("movie")
    .populate("cinema")
    .populate("lounge");

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
