import { MovieId } from "../../shared/types/Movie";
import { SearchForMovieResponse } from "../../shared/responses/SearchForMovieResponse";
import { movies } from "../fixtures/movies";

export const searchForMovie = (movieId: MovieId): SearchForMovieResponse =>
  movies.find((candidate) => candidate.movieId === movieId);
