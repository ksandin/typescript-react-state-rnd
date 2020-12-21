import { Movie } from "./Movie";
import { Show } from "./Show";
import { Cinema } from "./Cinema";
import { Lounge } from "./Lounge";

export type ShowDetails = {
  movieName: Movie["name"];
  movieCardUrl: Movie["cardUrl"];
  movieRuntime: Movie["runtime"];
  moviePremiereDate: Movie["premiereDate"];
  showDate: Show["date"];
  cinemaName: Cinema["name"];
  loungeName: Lounge["name"];
};
