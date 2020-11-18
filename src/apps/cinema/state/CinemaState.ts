import { HomeHeroRecommendation } from "./models/HomeHeroRecommendation";
import { HomeRecommendationCategory } from "./models/HomeRecommendationCategory";

export type CinemaState = {
  location: string;
  locationOptions: string[];
  homeHeroRecommendation?: HomeHeroRecommendation;
  homeRecommendationCategories: HomeRecommendationCategory[];
};
