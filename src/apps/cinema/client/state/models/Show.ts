import { CinemaId } from "./Cinema";
import { MovieId } from "./Movie";
import { MovieLanguage } from "./MovieLanguage";
import { LoungeId } from "./Lounge";

export type ShowId = Opaque<number, "ShowId">;

export type Show = {
  showId: ShowId;
  loungeId: LoungeId;
  cinemaId: CinemaId;
  movieId: MovieId;
  date: Date;
  language: MovieLanguage;
  subtitles: MovieLanguage;
};
