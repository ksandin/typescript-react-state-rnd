import { Movie } from "./Movie";
import { MoviesPageMovie } from "./MoviesPageMovie";
import { Show } from "./Show";
import { BookingSession } from "./BookingSession";
import { UserSession } from "./UserSession";
import { HomeState } from "./HomeState";

export type CinemaState = UserSession &
  HomeState & {
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
  };
