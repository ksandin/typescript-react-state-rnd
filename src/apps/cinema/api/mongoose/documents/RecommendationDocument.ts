import { Document } from "mongoose";
import { Recommendation } from "../../../shared/types/Recommendation";

export type RecommendationDocument = Document & Recommendation;
