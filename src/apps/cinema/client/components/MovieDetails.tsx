import React from "react";
import { Typography } from "@material-ui/core";
import { Movie } from "../../shared/models/Movie";
import { commonDateFormat } from "../functions/commonDateFormat";

export type MovieDetailsProps = Pick<
  Movie,
  "director" | "cast" | "language" | "premiereDate"
> &
  React.HTMLAttributes<HTMLDivElement>;

export const MovieDetails = ({
  director,
  cast,
  language,
  premiereDate,
  ...props
}: MovieDetailsProps) => (
  <div {...props}>
    <Typography variant="caption">Director:</Typography>
    <Typography>{director}</Typography>
    <Typography variant="caption">Cast:</Typography>
    <Typography>{cast.join(", ")}</Typography>
    <Typography variant="caption">Original Language:</Typography>
    <Typography>{language}</Typography>
    <Typography variant="caption">Premiere:</Typography>
    <Typography>{commonDateFormat(premiereDate, true)}</Typography>
  </div>
);
