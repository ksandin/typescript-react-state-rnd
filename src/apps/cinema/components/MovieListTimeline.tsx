import { Section } from "./Section";
import { List } from "@material-ui/core";
import React from "react";
import { MovieListItemWithShows } from "./MovieListItemWithShows";
import { Movie } from "../state/models/Movie";

export const MovieListTimeline = ({ movies }: { movies: Movie[] }) => (
  <>
    <Section label="20:15">
      <List>
        {movies.map((movie) => (
          <MovieListItemWithShows
            key={movie.movieId}
            time={false}
            expanded
            fixed
            {...movie}
          />
        ))}
      </List>
    </Section>
  </>
);
