import moment from "moment";
import { filterMovies } from "./filterMovies";
import { Show } from "../state/models/Show";
import { TicketsOptions } from "../state/models/TicketsOptions";
import { MovieLanguage } from "../state/models/MovieLanguage";
import { Movie } from "../state/models/Movie";

export const filterShows = (
  shows: Show[],
  moviesForShows: Movie[],
  {
    date,
    cinemas,
    ageLimit,
    genres,
    movies: movieFilters,
    language,
    subtitles,
  }: TicketsOptions
) =>
  shows.filter((show) => {
    const movie = moviesForShows.find(
      ({ movieId }) => show.movieId === movieId
    );
    return (
      movie &&
      moment(show.date).isSame(date, "day") &&
      (movieFilters.length === 0 || movieFilters.includes(show.movieId)) &&
      (cinemas.length === 0 || cinemas.includes(show.cinemaId)) &&
      (language === MovieLanguage.All || language === show.language) &&
      (subtitles === MovieLanguage.All || subtitles === show.subtitles) &&
      [
        ...filterMovies([movie], { display: "current", ageLimit, genres }),
        ...filterMovies([movie], { display: "upcoming", ageLimit, genres }),
      ].length > 0
    );
  });
