import { Section } from "./Section";
import { List } from "@material-ui/core";
import React from "react";
import { MovieListItemWithShows } from "./MovieListItemWithShows";
import { Movie } from "../state/models/Movie";

export const MovieListAlphabetic = ({ movies }: { movies: Movie[] }) => (
  <>
    <Section label="A">
      <List>
        {movies.map((movie) => (
          <MovieListItemWithShows key={movie.movieId} {...movie} />
        ))}
      </List>
    </Section>
  </>
);
