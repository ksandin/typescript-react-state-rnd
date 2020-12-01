import { CinemaState } from "../../shared/types/CinemaState";

export const defaultCinemaState: CinemaState = {
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
};
