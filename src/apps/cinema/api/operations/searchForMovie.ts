import { Model } from "mongoose";
import { MovieId } from "../../shared/types/Movie";
import { SearchForMovieResponse } from "../../shared/responses/SearchForMovieResponse";
import { MovieDocument } from "../documents/MovieDocument";

export const searchForMovie = async (
  MovieModel: Model<MovieDocument>,
  movieId: MovieId
): Promise<SearchForMovieResponse> => {
  const movie = await MovieModel.findOne({ movieId });
  return movie || undefined;
};
