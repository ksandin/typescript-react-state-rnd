import { without } from "lodash";
import { Repository } from "../../../../lib/store/Repository";
import { CinemaState } from "../../shared/models/CinemaState";
import { MovieId } from "../../shared/models/Movie";
import { SearchForMoviesOptions } from "../../shared/requests/SearchForMoviesOptions";
import { SearchForShowsOptions } from "../../shared/requests/SearchForShowsOptions";
import { ShowId } from "../../shared/models/Show";
import { Booking } from "../../shared/models/Booking";
import { createBooking } from "../../shared/state/createBooking";
import { ShowDetails } from "../../shared/models/ShowDetails";
import { UserSession } from "../../shared/models/UserSession";
import { SearchForShowsResponse } from "../../shared/responses/SearchForShowsResponse";
import { SearchForMovieResponse } from "../../shared/responses/SearchForMovieResponse";
import { SearchForMoviesResponse } from "../../shared/responses/SearchForMoviesResponse";
import { GetSeatsForShowResponse } from "../../shared/responses/GetSeatsForShowResponse";
import { HomeState } from "../../shared/models/HomeState";
import { fetchJson } from "../functions/fetchJson";
import { postJson } from "../functions/postJson";

const apiUrl = (path: string) => `http://localhost:3003/${path}`;

export const createCinemaActions = (repository: Repository<CinemaState>) => ({
  /**
   * Session state is state that only needs to be loaded once per user session
   */
  loadSessionState: async () => {
    const session = await fetchJson<UserSession>(apiUrl("session"));
    repository.update({
      ...repository.state,
      ...session,
    });
  },
  loadHomePageState: async () => {
    const home = await fetchJson<HomeState>(apiUrl("home"));
    repository.update({
      ...repository.state,
      ...home,
    });
  },
  loadMoviePageState: async (
    movieId: MovieId,
    extraOptions: Omit<SearchForShowsOptions, "movies">
  ) => {
    const options: SearchForShowsOptions = {
      ...extraOptions,
      movies: [movieId],
    };
    const [{ shows }, movie] = await Promise.all([
      postJson<SearchForShowsResponse>(apiUrl("shows"), options),
      fetchJson<SearchForMovieResponse>(apiUrl(`movie/${movieId}`)),
    ]);
    repository.update({
      ...repository.state,
      moviePage: {
        movie,
        shows,
      },
    });
  },
  loadMoviesPageState: async (options: SearchForMoviesOptions) => {
    const movies = await postJson<SearchForMoviesResponse>(
      apiUrl("movies"),
      options
    );
    repository.update({
      ...repository.state,
      moviesPage: movies,
    });
  },
  loadTicketsPageState: async (options: SearchForShowsOptions) => {
    const showsAndMovies = await postJson<SearchForShowsResponse>(
      apiUrl("shows"),
      options
    );
    repository.update({
      ...repository.state,
      ticketsPage: showsAndMovies,
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
      fetchJson<GetSeatsForShowResponse>(apiUrl(`show/${showId}/seats`)),
      fetchJson<ShowDetails>(apiUrl(`show/${showId}/details`)),
    ]);
    if (!details) {
      console.warn("Could not fetch booking confirmation details");
      return;
    }
    const availableSeats = without(allSeats, ...reservedSeats);
    repository.update({
      ...repository.state,
      bookingSession: {
        details,
        booking: createBooking(
          showId,
          repository.state.defaultTicketTypeId,
          availableSeats.length
        ),
        allSeats,
        reservedSeats,
        availableSeats,
      },
    });
  },
  makeBooking: async () => {
    const { bookingSession } = repository.state;
    if (!bookingSession) {
      console.warn("Can't make booking without a booking session");
      return;
    }

    const { error } = await postJson<{ error?: string }>(
      apiUrl("booking"),
      bookingSession.booking
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
