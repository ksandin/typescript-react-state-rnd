import { Repository } from "../../../lib/store/Repository";
import { CinemaState } from "./CinemaState";
import { movies } from "../fixtures/movies";
import { MovieId } from "./models/Movie";
import { MoviesOptions } from "./models/MoviesOptions";
import { TicketsOptions } from "./models/TicketsOptions";
import { filterMovies } from "../functions/filterMovies";
import { searchForShows } from "../functions/searchForShows";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";

export const createCinemaActions = (repository: Repository<CinemaState>) => ({
  setLocation: async (location: string) =>
    repository.update({ ...repository.state, location }),
  /**
   * Session state is state that only needs to be loaded once per user session
   */
  loadSessionState: async () => {
    repository.update({
      ...repository.state,
      location: "Stockholm",
      locationOptions: ["Stockholm", "Göteborg"],
      movieNames: movies,
      cinemas: cinemas,
      lounges: lounges,
    });
  },
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
  loadMoviePageState: async (
    movieId: MovieId,
    options: Omit<TicketsOptions, "movies">
  ) => {
    const { shows } = searchForShows({
      ...options,
      movies: [movieId],
    });
    repository.update({
      ...repository.state,
      moviePage: {
        movie: movies.find((candidate) => candidate.movieId === movieId),
        shows,
      },
    });
  },
  loadMoviesPageState: async (options: MoviesOptions) => {
    repository.update({
      ...repository.state,
      moviesPage: filterMovies(movies, options),
    });
  },
  loadTicketsPageState: async (options: TicketsOptions) => {
    repository.update({
      ...repository.state,
      ticketsPage: searchForShows(options),
    });
  },
});
