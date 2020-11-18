import { Repository } from "../../../lib/store/Repository";
import { CinemaState } from "./CinemaState";
import { movies } from "../fixtures/movies";
import { MovieId } from "./models/Movie";

export const createCinemaActions = (repository: Repository<CinemaState>) => ({
  setLocation: async (location: string) =>
    repository.update({ ...repository.state, location }),
  loadMoviePageState: async (movieId: MovieId) => {
    repository.update({
      ...repository.state,
      moviePage: movies.find((candidate) => candidate.movieId === movieId),
    });
  },
});
