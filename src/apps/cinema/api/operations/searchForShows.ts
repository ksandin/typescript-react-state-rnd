import moment from "moment";
import { uniq } from "lodash";
import { SearchForShowsOptions } from "../../shared/requests/SearchForShowsOptions";
import { SearchForShowsResponse } from "../../shared/responses/SearchForShowsResponse";
import { shows } from "../fixtures/shows";
import { movies } from "../fixtures/movies";
import { Show } from "../../shared/models/Show";
import { Movie } from "../../shared/models/Movie";
import { MovieLanguage } from "../../shared/models/MovieLanguage";
import { filterMovies } from "./searchForMovies";

export const searchForShows = (
  options: SearchForShowsOptions
): SearchForShowsResponse => {
  const selectedShows = filterShows(shows, movies, options);
  const selectedMovies = uniq(
    selectedShows.map(
      ({ movieId }) => movies.find((movie) => movie.movieId === movieId)!
    )
  );

  return {
    shows: selectedShows,
    movies: selectedMovies,
  };
};

const filterShows = (
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
  }: SearchForShowsOptions
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
