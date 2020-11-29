import { MovieAgeLimit } from "../models/MovieAgeLimit";
import { MovieGenre } from "../models/MovieGenre";

export type MovieDisplayOption = "current" | "upcoming";

export type SearchForMoviesOptions = {
  display: MovieDisplayOption;
  ageLimit: MovieAgeLimit;
  genres: MovieGenre[];
};
