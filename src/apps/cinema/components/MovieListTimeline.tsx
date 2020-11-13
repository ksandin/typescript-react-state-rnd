import { Section } from "./Section";
import { List } from "@material-ui/core";
import React from "react";
import { MovieListItemWithShows } from "./MovieListItemWithShows";

export const MovieListTimeline = () => (
  <>
    <Section label="20:15">
      <List>
        <MovieListItemWithShows time={false} expanded fixed />
        <MovieListItemWithShows time={false} expanded fixed />
        <MovieListItemWithShows time={false} expanded fixed />
      </List>
    </Section>
    <Section label="21:15">
      <List>
        <MovieListItemWithShows expanded fixed />
        <MovieListItemWithShows expanded fixed />
        <MovieListItemWithShows expanded fixed />
      </List>
    </Section>
  </>
);
