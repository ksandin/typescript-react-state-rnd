import { CinemaState } from "../state/CinemaState";
import { movies } from "./movies";

export const defaultCinemaState: CinemaState = {
  location: "Stockholm",
  locationOptions: ["Stockholm", "Göteborg"],
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
};
