import { FilterQuery, Types } from "mongoose";
import { Movie } from "../../../shared/types/Movie";
import { MovieDocument } from "../documents/MovieDocument";
import {
  Recommendation,
  RecommendationId,
} from "../documents/RecommendationDocument";
import { MovieLanguage } from "../../../shared/types/MovieLanguage";
import { MovieGenre } from "../../../shared/types/MovieGenre";
import { movies } from "./movies";

export const recommendations: Recommendation[] = [
  {
    recommendationId: Types.ObjectId().toString() as RecommendationId,
    name: "Hero",
    query: idQuery(movies.slice(0, 1)),
    isHero: true,
  },
  ...[MovieLanguage.English, MovieLanguage.French].map((language) => ({
    recommendationId: Types.ObjectId().toString() as RecommendationId,
    name: `${language} movies`,
    query: { language },
  })),
  ...Object.values(MovieGenre)
    .slice(0, 2)
    .map((genre) => ({
      recommendationId: Types.ObjectId().toString() as RecommendationId,
      name: genre.toString(),
      query: { genres: genre },
    })),
];

function idQuery(list: Movie[]): FilterQuery<MovieDocument> {
  return {
    movieId: { $in: list.map(({ movieId }) => movieId) },
  };
}
