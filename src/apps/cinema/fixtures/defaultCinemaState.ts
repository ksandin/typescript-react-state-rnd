import { Map } from "immutable";
import { CinemaState } from "../state/CinemaState";

export const defaultCinemaState: CinemaState = {
  locationOptions: [],
  homeRecommendationCategories: [],
  moviesPage: [],
  moviePage: {
    shows: [],
  },
  ticketsPage: {
    shows: [],
    movies: [],
  },
  movieNames: [],
  cinemas: [],
  lounges: [],
  ticketTypes: [],
  booking: {
    tickets: Map(),
  },
};
