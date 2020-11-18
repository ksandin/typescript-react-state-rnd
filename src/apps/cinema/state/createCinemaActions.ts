import { Repository } from "../../../lib/store/Repository";
import { CinemaState } from "./CinemaState";
import { movies } from "../fixtures/movies";
import { Movie, MovieId } from "./models/Movie";
import { MoviesOptions } from "./models/MoviesOptions";

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
  loadMoviesPageState: async ({ display }: MoviesOptions) => {
    repository.update({
      ...repository.state,
      moviesPage: movies.filter(movieFilters[display]),
    });
  },
});

const movieFilters = {
  upcoming: (movies: Movie) => new Date() < movies.premiereDate,
  current: (movies: Movie) => new Date() >= movies.premiereDate,
};
