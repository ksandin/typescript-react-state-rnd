import { MovieLanguage } from "./MovieLanguage";
import { MovieAgeLimit } from "./MovieAgeLimit";
import { MovieGenre } from "./MovieGenre";

export type TicketsDisplayOption = "movies" | "shows";

export type TicketsOptions = {
  display: TicketsDisplayOption;
  date: Date;
  cinemas: string[];
  movies: string[];
  subtitles: MovieLanguage;
  ageLimit: MovieAgeLimit;
  language: MovieLanguage;
  genres: MovieGenre[];
  other: string[];
};
