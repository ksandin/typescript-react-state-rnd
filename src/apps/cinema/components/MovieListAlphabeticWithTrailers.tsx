import React from "react";
import { List } from "@material-ui/core";
import { MovieListItem } from "./MovieListItem";
import { MoviePlayerDialogPlayButton } from "./MoviePlayerDialogPlayButton";

export const MovieListAlphabeticWithTrailers = () => (
  <List>
    <MovieListItem playButton={false}>
      <MoviePlayerDialogPlayButton />
    </MovieListItem>
  </List>
);
