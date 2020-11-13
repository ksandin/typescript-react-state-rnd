import React from "react";
import { ShowListItem, ShowListItemProps } from "./ShowListItem";
import {
  MovieListItemExpandable,
  MovieListItemExpandableProps,
} from "./MovieListItemExpandable";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export type MovieListItemWithShowsProps = MovieListItemExpandableProps &
  Pick<ShowListItemProps, "time">;

export const MovieListItemWithShows: React.FC<MovieListItemWithShowsProps> = ({
  time,
  ...props
}) => (
  <MovieListItemExpandable {...props}>
    <ShowCinemaName>Filmstaden Heron City</ShowCinemaName>
    <ShowListItem time={time} />
    <ShowCinemaName>Filmstaden Scandinavia</ShowCinemaName>
    <ShowListItem time={time} />
    <ShowListItem time={time} />
    <ShowCinemaName>Filmstaden Sergel</ShowCinemaName>
    <ShowListItem time={time} />
    <ShowListItem time={time} />
    <ShowListItem time={time} />
  </MovieListItemExpandable>
);

const ShowCinemaName = styled(Typography).attrs({
  variant: "h6",
  paragraph: false,
})`
  position: relative;
  margin-bottom: -8px;
  margin-top: 8px;
`;
