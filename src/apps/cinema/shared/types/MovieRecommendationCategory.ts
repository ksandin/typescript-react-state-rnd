import { MovieRecommendation } from "./MovieRecommendation";

export type MovieRecommendationCategory = {
  name: string;
  recommendations: MovieRecommendation[];
};
