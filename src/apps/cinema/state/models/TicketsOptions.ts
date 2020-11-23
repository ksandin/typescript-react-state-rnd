import { MovieLanguage } from "./MovieLanguage";
import { MovieAgeLimit } from "./MovieAgeLimit";
import { MovieGenre } from "./MovieGenre";
import { CinemaId } from "./Cinema";
import { MovieId } from "./Movie";

export type TicketsDisplayOption = "movies" | "timeline";

export type TicketsOptions = {
  display: TicketsDisplayOption;
  date: Date;
  cinemas: CinemaId[];
  movies: MovieId[];
  subtitles: MovieLanguage;
  ageLimit: MovieAgeLimit;
  language: MovieLanguage;
  genres: MovieGenre[];
};
