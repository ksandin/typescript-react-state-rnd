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
  Pick<ShowListItemsByCinemaNameProps, "time">;

export const MovieListItemWithShows: React.FC<MovieListItemWithShowsProps> = ({
  time,
  ...props
}) => (
  <MovieListItemExpandable {...props}>
    <ShowListItemsByCinemaName time={time} />
  </MovieListItemExpandable>
);
