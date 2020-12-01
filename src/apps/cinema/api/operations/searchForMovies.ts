import { Movie } from "../../shared/types/Movie";
import { SearchForMoviesOptions } from "../../shared/requests/SearchForMoviesOptions";
import { includesAll } from "../../shared/functions/includesAll";
import { MovieAgeLimit } from "../../shared/types/MovieAgeLimit";
import { movies } from "../fixtures/movies";
import { SearchForMoviesResponse } from "../../shared/responses/SearchForMoviesResponse";

export const searchForMovies = (
  options: SearchForMoviesOptions
): SearchForMoviesResponse => filterMovies(movies, options);

export const filterMovies = (
  movies: Movie[],
  { display, genres, ageLimit }: SearchForMoviesOptions
) =>
  movies.filter(
    (movie) =>
      movieFilters[display](movie) &&
      includesAll(movie.genres, genres) &&
      (ageLimit === MovieAgeLimit.All || ageLimit === movie.ageLimit)
  );

const movieFilters = {
  upcoming: (movies: Movie) => new Date() < movies.premiereDate,
  current: (movies: Movie) => new Date() >= movies.premiereDate,
};
