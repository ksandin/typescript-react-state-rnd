import { List } from "@material-ui/core";
import React from "react";
import { MovieListItemWithTrailerButton } from "./MovieListItemWithTrailerButton";

export const MovieListUpcoming = () => (
  <List>
    <MovieListItemWithTrailerButton releaseDate />
    <MovieListItemWithTrailerButton releaseDate />
    <MovieListItemWithTrailerButton releaseDate />
    <MovieListItemWithTrailerButton releaseDate />
    <MovieListItemWithTrailerButton releaseDate />
  </List>
);
