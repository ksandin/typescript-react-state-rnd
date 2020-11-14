import React from "react";
import { Typography } from "@material-ui/core";

export type MovieDetailsProps = React.HTMLAttributes<HTMLDivElement>;

export const MovieDetails: React.FC<MovieDetailsProps> = (props) => (
  <div {...props}>
    <Typography variant="caption">Regi:</Typography>
    <Typography>Will Wernick</Typography>
    <Typography variant="caption">Skådespelare:</Typography>
    <Typography>
      Holland Roden,Ronen Rubinstein,Keegan Allen,Pasha D. Lychnikoff
    </Typography>
    <Typography variant="caption">Originaltitel:</Typography>
    <Typography>Follow Me</Typography>
    <Typography variant="caption">Originalspråk:</Typography>
    <Typography>Engelska</Typography>
    <Typography variant="caption">Premiär:</Typography>
    <Typography>6 nov 2020</Typography>
  </div>
);
