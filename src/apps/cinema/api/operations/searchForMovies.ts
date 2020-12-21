import { FilterQuery, Model } from "mongoose";
import { SearchForMoviesOptions } from "../../shared/requests/SearchForMoviesOptions";
import { SearchForMoviesResponse } from "../../shared/responses/SearchForMoviesResponse";
import { MovieDocument } from "../documents/MovieDocument";
import { compact } from "../../shared/functions/compact";

export const searchForMovies = async (
  MovieModel: Model<MovieDocument>,
  options: SearchForMoviesOptions
): Promise<SearchForMoviesResponse> =>
  MovieModel.find(createMovieQuery(options));

export const createMovieQuery = ({
  display,
  genres,
  ageLimit,
}: Partial<SearchForMoviesOptions>): FilterQuery<MovieDocument> =>
  compact({
    premiereDate: display ? displayQueries[display]() : undefined,
    genres: genres?.length ? { $all: genres } : undefined,
    ageLimit,
  });

const displayQueries = {
  current: () => ({ $lt: new Date() }),
  upcoming: () => ({ $gte: new Date() }),
};
