import { Movie } from "../../shared/models/Movie";
import { MoviesOptions } from "../../shared/models/MoviesOptions";
import { includesAll } from "../../shared/functions/includesAll";
import { MovieAgeLimit } from "../../shared/models/MovieAgeLimit";
import { movies } from "../fixtures/movies";
import { SearchForMoviesResponse } from "../../shared/responses/SearchForMoviesResponse";

export const searchForMovies = (
  options: MoviesOptions
): SearchForMoviesResponse => filterMovies(movies, options);

export const filterMovies = (
  movies: Movie[],
  { display, genres, ageLimit }: MoviesOptions
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
