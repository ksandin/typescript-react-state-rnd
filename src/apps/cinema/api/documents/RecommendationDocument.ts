import { Document, FilterQuery } from "mongoose";
import { MovieDocument } from "./MovieDocument";

export type RecommendationId = Opaque<string, "RecommendationId">;

export type RecommendationDocument = Document & Recommendation;

export type Recommendation = {
  recommendationId: RecommendationId;
  name: string;
  query: FilterQuery<MovieDocument>;
  isHero?: boolean;
};
