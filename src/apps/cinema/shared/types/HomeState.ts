import { MovieRecommendationHero } from "./MovieRecommendationHero";
import { MovieRecommendationCategory } from "./MovieRecommendationCategory";

export type HomeState = {
  homeHeroRecommendation?: MovieRecommendationHero;
  homeRecommendationCategories: MovieRecommendationCategory[];
};
