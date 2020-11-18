import { HomeHeroRecommendation } from "./models/HomeHeroRecommendation";

export type CinemaState = {
  location: string;
  locationOptions: string[];
  homeHeroRecommendation?: HomeHeroRecommendation;
};
