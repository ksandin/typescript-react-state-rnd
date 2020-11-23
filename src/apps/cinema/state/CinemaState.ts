import { MovieRecommendationHero } from "./models/MovieRecommendationHero";
import { MovieRecommendationCategory } from "./models/MovieRecommendationCategory";
import { Movie } from "./models/Movie";
import { MoviesPageMovie } from "./models/MoviesPageMovie";
import { Show } from "./models/Show";
import { Cinema } from "./models/Cinema";
import { Lounge } from "./models/Lounge";

export type CinemaState = {
  location: string;
  locationOptions: string[];

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

  // Expected to be loaded once per user session
  cinemas: Cinema[];
  lounges: Lounge[];
  movieNames: Pick<Movie, "name" | "movieId">[];
};
