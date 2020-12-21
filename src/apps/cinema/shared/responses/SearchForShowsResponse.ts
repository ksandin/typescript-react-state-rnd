import { Show } from "../types/Show";
import { Movie } from "../types/Movie";

export type SearchForShowsResponse = {
  shows: Show[];
  movies: Movie[];
};
