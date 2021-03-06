import { MovieGenre } from "./MovieGenre";
import { MovieAgeLimit } from "./MovieAgeLimit";
import { MovieLanguage } from "./MovieLanguage";

export type MovieId = Opaque<string, "MovieId">;

export type Movie = {
  movieId: MovieId;
  ageLimit: MovieAgeLimit;
  genres: MovieGenre[];
  name: string;
  runtime: number;
  premiereDate: Date;
  description: string;
  bannerUrl: string;
  cardUrl: string;
  trailerUrl: string;
  snapshotUrls: string[];
  language: MovieLanguage;
  cast: string[];
  director: string;
};
