import { MovieId } from "../../shared/types/Movie";
import { SearchForMovieResponse } from "../../shared/responses/SearchForMovieResponse";
import { CinemaModels } from "../createModels";

export const searchForMovie = async (
  { MovieModel }: CinemaModels,
  movieId: MovieId
): Promise<SearchForMovieResponse> => {
  const movie = await MovieModel.findOne({ movieId });
  return movie || undefined;
};
