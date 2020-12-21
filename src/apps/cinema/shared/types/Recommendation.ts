import { RecommendationQuery } from "./RecommendationQuery";

export type RecommendationId = Opaque<string, "RecommendationId">;

export type Recommendation = {
  recommendationId: RecommendationId;
  name: string;
  query: RecommendationQuery;
  isHero?: boolean;
};
