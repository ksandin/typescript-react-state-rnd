import { HomeState } from "../../shared/models/HomeState";
import { movies } from "../fixtures/movies";

export const getHomeState = (): HomeState => ({
  homeHeroRecommendation: movies[5],
  homeRecommendationCategories: [
    {
      name: "Out now",
      recommendations: movies.slice(0, 5),
    },
    {
      name: "Upcoming recommendations",
      recommendations: movies.slice(5, 10),
    },
    {
      name: "For children",
      recommendations: movies.slice(10, 15),
    },
  ],
});
