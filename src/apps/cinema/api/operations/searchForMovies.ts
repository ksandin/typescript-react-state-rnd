import { FilterQuery } from "mongoose";
import { SearchForMoviesOptions } from "../../shared/requests/SearchForMoviesOptions";
import { SearchForMoviesResponse } from "../../shared/responses/SearchForMoviesResponse";
import { MovieDocument } from "../documents/MovieDocument";
import { CinemaModels } from "../createModels";
import { MovieAgeLimit } from "../../shared/types/MovieAgeLimit";
import { compact } from "../../shared/functions/compact";

export const searchForMovies = async (
  { MovieModel }: CinemaModels,
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
    ageLimit: ageLimit !== MovieAgeLimit.All ? ageLimit : undefined,
  });

const displayQueries = {
  current: () => ({ $lt: new Date() }),
  upcoming: () => ({ $gte: new Date() }),
};
