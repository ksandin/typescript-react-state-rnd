import { CinemaState } from "../state/CinemaState";
import { movies } from "./movies";
import { cinemas } from "./cinemas";
import { lounges } from "./lounges";

export const defaultCinemaState: CinemaState = {
  location: "Stockholm",
  locationOptions: ["Stockholm", "Göteborg"],
  homeRecommendationCategories: [],
  moviesPage: [],
  moviePage: {
    shows: [],
  },
  ticketsPage: {
    shows: [],
    movies: [],
  },
  movieNames: movies,
  cinemas: cinemas,
  lounges: lounges,
};
