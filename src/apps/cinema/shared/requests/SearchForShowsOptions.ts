import { MovieLanguage } from "../types/MovieLanguage";
import { MovieAgeLimit } from "../types/MovieAgeLimit";
import { MovieGenre } from "../types/MovieGenre";
import { CinemaId } from "../types/Cinema";
import { MovieId } from "../types/Movie";

export type ShowDisplayOption = "movies" | "timeline";

export type SearchForShowsOptions = {
  display: ShowDisplayOption;
  date: Date;
  cinemas: CinemaId[];
  movies: MovieId[];
  subtitles: MovieLanguage;
  ageLimit: MovieAgeLimit;
  language: MovieLanguage;
  genres: MovieGenre[];
};
