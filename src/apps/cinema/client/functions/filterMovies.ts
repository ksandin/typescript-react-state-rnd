import { Movie } from "../../shared/models/Movie";
import { MoviesOptions } from "../../shared/models/MoviesOptions";
import { includesAll } from "./includesAll";
import { MovieAgeLimit } from "../../shared/models/MovieAgeLimit";

export const filterMovies = (
  movies: Movie[],
  { display, genres, ageLimit }: MoviesOptions
): Movie[] =>
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
