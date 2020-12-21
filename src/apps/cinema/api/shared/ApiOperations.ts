import { MovieId } from "../../shared/types/Movie";
import { ShowId } from "../../shared/types/Show";
import { Booking } from "../../shared/types/Booking";
import { SearchForMovieResponse } from "../../shared/responses/SearchForMovieResponse";
import { SearchForMoviesResponse } from "../../shared/responses/SearchForMoviesResponse";
import { SearchForShowsOptions } from "../../shared/requests/SearchForShowsOptions";
import { SearchForShowsResponse } from "../../shared/responses/SearchForShowsResponse";
import { HomeState } from "../../shared/types/HomeState";
import { UserSession } from "../../shared/types/UserSession";
import { GetSeatsForShowResponse } from "../../shared/responses/GetSeatsForShowResponse";
import { ShowDetails } from "../../shared/types/ShowDetails";

export type ApiOperations = {
  getUserSession(): Promise<UserSession>;
  getHomeState(): Promise<HomeState>;
  searchForShows(
    searchForShowsOptions: SearchForShowsOptions
  ): Promise<SearchForShowsResponse>;
  searchForMovie(movieId: MovieId): Promise<SearchForMovieResponse>;
  searchForMovies(body: any): Promise<SearchForMoviesResponse>;
  getShowSeats(showId: ShowId): Promise<GetSeatsForShowResponse>;
  getShowDetails(showId: ShowId): Promise<ShowDetails | undefined>;
  makeBooking(booking: Booking): Promise<string | undefined>;
};
