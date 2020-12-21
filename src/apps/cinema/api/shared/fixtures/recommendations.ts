import { Movie } from "../../../shared/types/Movie";
import { MovieLanguage } from "../../../shared/types/MovieLanguage";
import { MovieGenre } from "../../../shared/types/MovieGenre";
import {
  Recommendation,
  RecommendationId,
} from "../../../shared/types/Recommendation";
import { RecommendationQuery } from "../../../shared/types/RecommendationQuery";

export const createRecommendations = (
  movies: Movie[],
  newId: () => RecommendationId
): Recommendation[] => [
  {
    recommendationId: newId(),
    name: "Hero",
    query: idQuery(movies.slice(0, 1)),
    isHero: true,
  },
  ...[MovieLanguage.English, MovieLanguage.French].map((language) => ({
    recommendationId: newId(),
    name: `${language} movies`,
    query: { language },
  })),
  ...Object.values(MovieGenre)
    .slice(0, 2)
    .map((genre) => ({
      recommendationId: newId(),
      name: genre.toString(),
      query: { genres: genre },
    })),
];

function idQuery(list: Movie[]): RecommendationQuery {
  return {
    movieId: { $in: list.map(({ movieId }) => movieId) },
  };
}
