import { Show } from "../models/Show";
import { Movie } from "../models/Movie";

export type SearchForShowsResponse = {
  shows: Show[];
  movies: Movie[];
};
