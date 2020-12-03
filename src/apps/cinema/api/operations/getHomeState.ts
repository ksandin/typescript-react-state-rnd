import { HomeState } from "../../shared/types/HomeState";
import { CinemaModels } from "../createModels";

export const getHomeState = async ({
  MovieModel,
  RecommendationModel,
}: CinemaModels): Promise<HomeState> => {
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
