import React from "react";
import {
  MovieListItemExpandable,
  MovieListItemExpandableProps,
} from "./MovieListItemExpandable";
import {
  ShowListItemsByCinemaName,
  ShowListItemsByCinemaNameProps,
} from "./ShowListItemsByCinemaName";

export type MovieListItemWithShowsProps = MovieListItemExpandableProps &
  Pick<ShowListItemsByCinemaNameProps, "shows" | "itemProps">;

export const MovieListItemWithShows: React.FC<MovieListItemWithShowsProps> = ({
  shows,
  itemProps,
  ...props
}) => (
  <MovieListItemExpandable {...props}>
    <ShowListItemsByCinemaName shows={shows} itemProps={itemProps} />
  </MovieListItemExpandable>
);
