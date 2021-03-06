import { List } from "@material-ui/core";
import React from "react";
import { groupBy } from "lodash";
import { Movie } from "../../shared/types/Movie";
import { Show } from "../../shared/types/Show";
import { MovieListItemWithShows } from "./MovieListItemWithShows";
import { Section } from "./Section";

export const MovieListAlphabetic = ({
  movies,
  shows,
}: {
  movies: Movie[];
  shows: Show[];
}) => {
  const moviesPerLetter = groupBy(movies, ({ name }) => name[0]);
  const showsPerMovie = groupBy(shows, ({ movieId }) => movieId);
  const letters = Object.keys(moviesPerLetter).sort();
  return (
    <>
      {letters.map((letter) => {
        const orderedMovies = orderByName(moviesPerLetter[letter]);
        return (
          <Section key={letter} label={letter.toUpperCase()}>
            <List>
              {orderedMovies.map((movie) => (
                <MovieListItemWithShows
                  key={movie.movieId}
                  shows={showsPerMovie[movie.movieId]}
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

const orderByName = (movies: Movie[]) =>
  movies.slice().sort((a, b) => a.name.localeCompare(b.name));
