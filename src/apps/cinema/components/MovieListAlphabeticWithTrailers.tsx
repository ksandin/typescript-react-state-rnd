import React from "react";
import { List } from "@material-ui/core";
import { MovieListItemWithTrailerButton } from "./MovieListItemWithTrailerButton";

export const MovieListAlphabeticWithTrailers = () => (
  <List>
    <MovieListItemWithTrailerButton />
    <MovieListItemWithTrailerButton />
    <MovieListItemWithTrailerButton />
    <MovieListItemWithTrailerButton />
    <MovieListItemWithTrailerButton />
  </List>
);
