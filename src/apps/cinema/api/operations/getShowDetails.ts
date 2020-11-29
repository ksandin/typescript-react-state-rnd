import { ShowId } from "../../shared/models/Show";
import { ShowDetails } from "../../shared/models/ShowDetails";
import { shows } from "../fixtures/shows";
import { movies } from "../fixtures/movies";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";

export const getShowDetails = (showId: ShowId): ShowDetails | undefined => {
  const show = shows.find((show) => show.showId === showId);
  const movie = movies.find((movie) => movie.movieId === show?.movieId);
  const cinema = cinemas.find((cinema) => cinema.cinemaId === show?.cinemaId);
  const lounge = lounges.find((lounge) => lounge.loungeId === show?.loungeId);
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
