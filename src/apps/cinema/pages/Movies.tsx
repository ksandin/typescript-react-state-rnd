import styled from "styled-components";
import React, { useState } from "react";
import { Container } from "../components/Container";
import {
  DisplayOption,
  TicketsControls,
  TicketsOptions,
} from "../components/TicketsControls";
import { MovieListAlphabetic } from "../components/MovieListAlphabetic";
import { MovieListTimeline } from "../components/MovieListTimeline";

const displayComponents: Record<DisplayOption, React.ComponentType> = {
  movies: MovieListAlphabetic,
  shows: MovieListTimeline,
};

export const Movies = () => {
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
      <DisplayComponent />
    </Container>
  );
};

const Margin = styled.div`
  margin-bottom: 16px;
`;
