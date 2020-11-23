import { uniq } from "lodash";
import { Repository } from "../../../lib/store/Repository";
import { CinemaState } from "./CinemaState";
import { movies } from "../fixtures/movies";
import { MovieId } from "./models/Movie";
import { MoviesOptions } from "./models/MoviesOptions";
import { TicketsOptions } from "./models/TicketsOptions";
import { shows } from "../fixtures/shows";
import { filterMovies } from "../functions/filterMovies";
import { filterShows } from "../functions/filterShows";

export const createCinemaActions = (repository: Repository<CinemaState>) => ({
  setLocation: async (location: string) =>
    repository.update({ ...repository.state, location }),
  loadHomePageState: async () => {
    repository.update({
      ...repository.state,
      homeHeroRecommendation: movies[5],
      homeRecommendationCategories: [
        {
          name: "Out now",
          recommendations: movies.slice(0, 5),
        },
        {
          name: "Upcoming recommendations",
          recommendations: movies.slice(5, 10),
        },
        {
          name: "For children",
          recommendations: movies.slice(10, 15),
        },
      ],
    });
  },
  loadMoviePageState: async (movieId: MovieId) => {
    repository.update({
      ...repository.state,
      moviePage: movies.find((candidate) => candidate.movieId === movieId),
    });
  },
  loadMoviesPageState: async (options: MoviesOptions) => {
    repository.update({
      ...repository.state,
      moviesPage: filterMovies(movies, options),
    });
  },
  loadTicketsPageState: async (options: TicketsOptions) => {
    const selectedShows = filterShows(shows, movies, options);
    const selectedMovies = uniq(
      selectedShows.map(
        ({ movieId }) => movies.find((movie) => movie.movieId === movieId)!
      )
    );

    repository.update({
      ...repository.state,
      ticketsPage: {
        shows: selectedShows,
        movies: selectedMovies,
      },
    });
  },
});
