import { Section } from "./Section";
import { List } from "@material-ui/core";
import React from "react";
import { MovieListItemWithShows } from "./MovieListItemWithShows";
import { Movie } from "../state/models/Movie";
import { Show } from "../state/models/Show";
import { groupBy } from "lodash";
import { commonTimeFormat } from "../functions/commonTimeFormat";

export const MovieListTimeline = ({
  movies,
  shows,
}: {
  movies: Movie[];
  shows: Show[];
}) => {
  const showsPerTime = groupBy(shows, ({ date }) => commonTimeFormat(date));
  const times = Object.keys(showsPerTime).sort();
  return (
    <>
      {times.map((time) => {
        const showsForThisTime = showsPerTime[time];
        const showsPerMovie = groupBy(
          showsForThisTime,
          ({ movieId }) => movieId
        );
        const moviesForThisTime = movies
          .filter(({ movieId }) => showsPerMovie[movieId])
          .sort((a, b) => a.name.localeCompare(b.name));
        return (
          <Section key={time} label={time}>
            <List>
              {moviesForThisTime.map((movie) => (
                <MovieListItemWithShows
                  key={movie.movieId}
                  shows={showsPerMovie[movie.movieId]}
                  itemProps={{ time: false }}
                  {...movie}
                />
              ))}
            </List>
          </Section>
        );
      })}
    </>
  );
};
