import { Section } from "./Section";
import { List } from "@material-ui/core";
import React from "react";
import { MovieListItemWithShows } from "./MovieListItemWithShows";

export const MovieListUpcoming = () => (
  <>
    <Section label="A">
      <List>
        <MovieListItemWithShows />
        <MovieListItemWithShows />
        <MovieListItemWithShows />
      </List>
    </Section>
    <Section label="B">
      <List>
        <MovieListItemWithShows />
        <MovieListItemWithShows />
        <MovieListItemWithShows />
      </List>
    </Section>
  </>
);
