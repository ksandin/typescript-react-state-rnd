import React, { useState } from "react";
import styled from "styled-components";
import { MovieListAlphabetic } from "../components/MovieListAlphabetic";
import { MovieListTimeline } from "../components/MovieListTimeline";
import {
  TicketsDisplayOption,
  TicketsControls,
  TicketsOptions,
} from "../components/TicketsControls";
import { Container } from "../components/Container";
import { Movie } from "../state/models/Movie";
import { movies } from "../fixtures/movies";

const displayComponents: Record<
  TicketsDisplayOption,
  React.ComponentType<{ movies: Movie[] }>
> = {
  movies: MovieListAlphabetic,
  shows: MovieListTimeline,
};

export const TicketsPage = () => {
  const [options, setOptions] = useState<TicketsOptions>({
    display: "movies",
    date: new Date(),
    cinemas: [],
    movies: [],
    subtitles: "All",
    ageLimit: "All",
    language: "All",
    genres: [],
    other: [],
  });
  const DisplayComponent = displayComponents[options.display];
  return (
    <Container>
      <Margin>
        <TicketsControls value={options} onChange={setOptions} />
      </Margin>
      <DisplayComponent movies={movies} />
    </Container>
  );
};

const Margin = styled.div`
  margin-bottom: 16px;
`;
