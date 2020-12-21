import { Model } from "mongoose";
import { HomeState } from "../../shared/types/HomeState";
import { MovieDocument } from "../documents/MovieDocument";
import { RecommendationDocument } from "../documents/RecommendationDocument";

export const getHomeState = async ({
  MovieModel,
  RecommendationModel,
}: {
  MovieModel: Model<MovieDocument>;
  RecommendationModel: Model<RecommendationDocument>;
}): Promise<HomeState> => {
  const recommendations = await RecommendationModel.find();
  const hero = recommendations.find(({ isHero }) => isHero);
  const other = recommendations.filter(({ isHero }) => !isHero);
  const heroMovie = hero ? await MovieModel.findOne(hero.query) : undefined;
  const otherMovies = await Promise.all(
    other.map(({ query }) => MovieModel.find(query).limit(5))
  );

  return {
    homeHeroRecommendation: heroMovie || undefined,
    homeRecommendationCategories: other.map(({ name }, index) => ({
      name,
      recommendations: otherMovies[index],
    })),
  };
};
