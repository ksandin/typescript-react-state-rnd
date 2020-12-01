import { movies } from "../fixtures/movies";
import { CinemaModels } from "../createModels";

export const saveFixtures = async ({ MovieModel }: CinemaModels) => {
  await MovieModel.insertMany(movies);
};
