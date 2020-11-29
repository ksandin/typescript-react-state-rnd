import { Repository } from "../../../../lib/store/Repository";
import { CinemaState } from "./CinemaState";
import { movies } from "../fixtures/movies";
import { MovieId } from "./models/Movie";
import { MoviesOptions } from "./models/MoviesOptions";
import { TicketsOptions } from "./models/TicketsOptions";
import { filterMovies } from "../functions/filterMovies";
import { searchForShows } from "../functions/searchForShows";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";
import { Price } from "./models/Price";
import { TicketTypeId } from "./models/TicketType";
import { LoungeSeat } from "./models/LoungeSeat";
import { ShowId } from "./models/Show";
import { shows } from "../fixtures/shows";
import { bookings } from "../fixtures/bookings";
import { range } from "../functions/range";
import { Booking } from "./models/Booking";
import { createBooking } from "../functions/createBooking";
import { without } from "lodash";
import { totalCounts } from "../functions/totalCounts";
import { BookingConfirmationDetails } from "./models/BookingConfirmationDetails";

export const createCinemaActions = (repository: Repository<CinemaState>) => ({
  setLocation: async (location: string) =>
    repository.update({ ...repository.state, location }),
  /**
   * Session state is state that only needs to be loaded once per user session
   */
  loadSessionState: async () => {
    repository.update({
      ...repository.state,
      location: "Stockholm",
      locationOptions: ["Stockholm", "Göteborg"],
      movieNames: movies,
      cinemas: cinemas,
      lounges: lounges,
      defaultTicketTypeId: 1 as TicketTypeId,
      ticketTypes: [
        {
          name: "Regular ticket",
          ticketTypeId: 1 as TicketTypeId,
          price: 120 as Price,
        },
        {
          name: "Pensioner ticket",
          ticketTypeId: 2 as TicketTypeId,
          price: 90 as Price,
        },
      ],
    });
  },
  loadHomePageState: async () => {
    repository.update({
      ...repository.state,
      homeHeroRecommendation: movies[5],
      homeRecommendationCategories: [
        {
          name: "Out now",
          recommendations: movies.slice(0, 5),
        },
        {
          name: "Upcoming recommendations",
          recommendations: movies.slice(5, 10),
        },
        {
          name: "For children",
          recommendations: movies.slice(10, 15),
        },
      ],
    });
  },
  loadMoviePageState: async (
    movieId: MovieId,
    options: Omit<TicketsOptions, "movies">
  ) => {
    const { shows } = searchForShows({
      ...options,
      movies: [movieId],
    });
    repository.update({
      ...repository.state,
      moviePage: {
        movie: movies.find((candidate) => candidate.movieId === movieId),
        shows,
      },
    });
  },
  loadMoviesPageState: async (options: MoviesOptions) => {
    repository.update({
      ...repository.state,
      moviesPage: filterMovies(movies, options),
    });
  },
  loadTicketsPageState: async (options: TicketsOptions) => {
    repository.update({
      ...repository.state,
      ticketsPage: searchForShows(options),
    });
  },
  updateBooking: async (props: Partial<Booking>) => {
    if (!repository.state.bookingSession) {
      console.warn("Can't set booked seats without a booking session");
      return;
    }
    repository.update({
      ...repository.state,
      bookingSession: {
        ...repository.state.bookingSession,
        booking: {
          ...repository.state.bookingSession.booking,
          ...props,
        },
      },
    });
  },
  newBookingSession: async (showId: ShowId) => {
    const [{ allSeats, reservedSeats }, details] = await Promise.all([
      await api_getSeatsForShow(showId),
      await api_getBookingConfirmationDetails(showId),
    ]);
    if (!details) {
      console.warn("Could not fetch booking confirmation details");
      return;
    }
    repository.update({
      ...repository.state,
      bookingSession: {
        details,
        booking: createBooking(showId, repository.state.defaultTicketTypeId),
        allSeats,
        reservedSeats,
        availableSeats: without(allSeats, ...reservedSeats),
      },
    });
  },
  makeBooking: async () => {
    if (!repository.state.bookingSession) {
      console.warn("Can't make booking without a booking session");
      return;
    }

    const error = await api_makeBooking(
      repository.state.bookingSession.booking
    );

    if (error) {
      throw new Error(error);
    }

    repository.update({
      ...repository.state,
      bookingSession: undefined,
    });
  },
});

// NOTE api_ is a placeholder to help remember that this is a function that should be implemented completely in the api

const api_getBookingConfirmationDetails = async (
  showId: ShowId
): Promise<BookingConfirmationDetails | undefined> => {
  const show = shows.find((show) => show.showId === showId);
  const movie = movies.find((movie) => movie.movieId === show?.movieId);
  const cinema = cinemas.find((cinema) => cinema.cinemaId === show?.cinemaId);
  const lounge = lounges.find((lounge) => lounge.loungeId === show?.loungeId);
  if (show && movie && cinema && lounge) {
    return {
      movieName: movie.name,
      movieCardUrl: movie.cardUrl,
      movieRuntime: movie.runtime,
      moviePremiereDate: movie.premiereDate,
      showDate: show.date,
      cinemaName: cinema.name,
      loungeName: lounge.name,
    };
  }
};

const api_makeBooking = async (booking: Booking) => {
  const { allSeats, reservedSeats } = await api_getSeatsForShow(booking.showId);
  const remainingSeats = without(allSeats, ...reservedSeats);
  if (totalCounts(booking.tickets) > remainingSeats.length) {
    return "Not enough tickets available";
  }
  const unallowedSeats = without(booking.seats, ...remainingSeats);
  if (unallowedSeats.length > 0) {
    return `Seats not allowed: ${unallowedSeats}`;
  }
  bookings.push(booking);
};

const api_getSeatsForShow = async (showId: ShowId) => {
  const show = shows.find((show) => show.showId === showId);
  const lounge = show
    ? lounges.find((lounge) => lounge.loungeId === show.loungeId)
    : undefined;
  const allSeats = lounge ? (range(1, lounge.seats) as LoungeSeat[]) : [];
  const showBookings = bookings.filter((booking) => booking.showId === showId);
  const reservedSeats = showBookings.reduce(
    (seats, booking) => [...seats, ...booking.seats],
    [] as LoungeSeat[]
  );
  return { allSeats, reservedSeats };
};
