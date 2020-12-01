import { movies } from "../fixtures/movies";
import { CinemaModels } from "../createModels";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";

export const saveFixtures = ({
  MovieModel,
  CinemaModel,
  LoungeModel,
}: CinemaModels) =>
  Promise.all([
    MovieModel.insertMany(movies),
    CinemaModel.insertMany(cinemas),
    LoungeModel.insertMany(lounges),
  ]);
