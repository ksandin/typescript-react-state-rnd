import { MovieAgeLimit } from "./MovieAgeLimit";
import { MovieGenre } from "./MovieGenre";

export type MoviesDisplayOption = "current" | "upcoming";

export type MoviesOptions = {
  display: MoviesDisplayOption;
  ageLimit: MovieAgeLimit;
  genres: MovieGenre[];
};
