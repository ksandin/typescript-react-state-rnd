import { Movie } from "./Movie";

export type MovieRecommendation = Pick<Movie, "movieId" | "name" | "cardUrl">;
