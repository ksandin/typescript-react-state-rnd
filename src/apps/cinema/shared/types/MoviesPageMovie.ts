import { Movie } from "./Movie";

export type MoviesPageMovie = Pick<
  Movie,
  | "name"
  | "genres"
  | "runtime"
  | "ageLimit"
  | "trailerUrl"
  | "cardUrl"
  | "premiereDate"
  | "movieId"
>;
