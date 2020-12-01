import { MovieAgeLimit } from "../types/MovieAgeLimit";
import { MovieGenre } from "../types/MovieGenre";

export type MovieDisplayOption = "current" | "upcoming";

export type SearchForMoviesOptions = {
  display: MovieDisplayOption;
  ageLimit: MovieAgeLimit;
  genres: MovieGenre[];
};
