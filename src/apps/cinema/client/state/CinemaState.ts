import { MovieRecommendationHero } from "../../shared/models/MovieRecommendationHero";
import { MovieRecommendationCategory } from "../../shared/models/MovieRecommendationCategory";
import { Movie } from "../../shared/models/Movie";
import { MoviesPageMovie } from "../../shared/models/MoviesPageMovie";
import { Show } from "../../shared/models/Show";
import { Cinema } from "../../shared/models/Cinema";
import { Lounge } from "../../shared/models/Lounge";
import { TicketType, TicketTypeId } from "../../shared/models/TicketType";
import { BookingSession } from "../../shared/models/BookingSession";

export type CinemaState = {
  // Expected to be loaded per-page
  homeHeroRecommendation?: MovieRecommendationHero;
  homeRecommendationCategories: MovieRecommendationCategory[];
  moviePage: {
    shows: Show[];
    movie?: Movie;
  };
  moviesPage: MoviesPageMovie[];
  ticketsPage: {
    shows: Show[];
    movies: Movie[];
  };
  bookingSession?: BookingSession;

  // Expected to be loaded once per user session
  cinemas: Cinema[];
  lounges: Lounge[];
  movieNames: Pick<Movie, "name" | "movieId">[];
  ticketTypes: TicketType[];
  defaultTicketTypeId?: TicketTypeId;
};
