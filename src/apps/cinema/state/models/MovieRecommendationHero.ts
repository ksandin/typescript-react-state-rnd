import { Movie } from "./Movie";

export type MovieRecommendationHero = Pick<
  Movie,
  "name" | "premiereDate" | "bannerUrl" | "movieId"
>;
