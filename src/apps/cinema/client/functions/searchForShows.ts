import { TicketsOptions } from "../../shared/models/TicketsOptions";
import { filterShows } from "./filterShows";
import { shows } from "../../api/fixtures/shows";
import { movies } from "../../api/fixtures/movies";
import { uniq } from "lodash";

export const searchForShows = (options: TicketsOptions) => {
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
