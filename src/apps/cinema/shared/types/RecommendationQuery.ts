import { FilterQuery } from "mongoose";
import { Movie } from "./Movie";

// TODO replace with db agnostic data structure
export type RecommendationQuery = FilterQuery<Movie>;
