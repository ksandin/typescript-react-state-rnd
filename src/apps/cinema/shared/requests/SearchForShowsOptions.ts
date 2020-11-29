import { MovieLanguage } from "../models/MovieLanguage";
import { MovieAgeLimit } from "../models/MovieAgeLimit";
import { MovieGenre } from "../models/MovieGenre";
import { CinemaId } from "../models/Cinema";
import { MovieId } from "../models/Movie";

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
