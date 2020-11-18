import { MovieRecommendationHero } from "./models/MovieRecommendationHero";
import { MovieRecommendationCategory } from "./models/MovieRecommendationCategory";
import { Movie } from "./models/Movie";
import { MoviesPageMovie } from "./models/MoviesPageMovie";

export type CinemaState = {
  location: string;
  locationOptions: string[];
  homeHeroRecommendation?: MovieRecommendationHero;
  homeRecommendationCategories: MovieRecommendationCategory[];
  moviePage?: Movie;
  moviesPage: MoviesPageMovie[];
};
