import { FilterQuery } from "mongoose";
import { SearchForShowsOptions } from "../../shared/requests/SearchForShowsOptions";
import { SearchForShowsResponse } from "../../shared/responses/SearchForShowsResponse";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { CinemaModels } from "../createModels";
import { dayQuery } from "../functions/dayQuery";
import { compact } from "../../shared/functions/compact";
import { ShowDocument, ShowVirtuals } from "../documents/ShowDocument";
import { WithVirtuals } from "../../../../lib/mongoose-tsextensions/WithVirtuals";
import { createMovieQuery } from "./searchForMovies";

export const searchForShows = async (
  { ShowModel }: CinemaModels,
  { ageLimit, genres, ...options }: SearchForShowsOptions
): Promise<SearchForShowsResponse> => {
  const showQuery = createShowQuery(options);
  const movieQuery = createMovieQuery({ ageLimit, genres });

  type PopulatedShow = WithVirtuals<ShowDocument, ShowVirtuals, "movie">;
  const shows: PopulatedShow[] = await ShowModel.find(showQuery).populate({
    path: "movie",
    match: movieQuery,
  });

  const showsPopulated = shows.filter(({ movie }) => movie);
  const moviesForShows = showsPopulated.map(({ movie }) => movie!);

  return {
    shows: showsPopulated,
    movies: moviesForShows,
  };
};

const createShowQuery = ({
  date,
  movies,
  cinemas,
  language,
  subtitles,
}: Omit<
  SearchForShowsOptions,
  "ageLimit" | "genres"
>): FilterQuery<ShowDocument> =>
  compact({
    date: dayQuery(date),
    movieId: movies.length ? { $in: movies } : undefined,
    cinemaId: cinemas.length ? { $in: cinemas } : undefined,
    language: language !== MovieLanguage.All ? language : undefined,
    subtitles: subtitles !== MovieLanguage.All ? subtitles : undefined,
  });
