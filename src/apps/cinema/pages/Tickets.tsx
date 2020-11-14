import React, { useState } from "react";
import styled from "styled-components";
import { MovieListAlphabetic } from "../components/MovieListAlphabetic";
import { MovieListTimeline } from "../components/MovieListTimeline";
import {
  DisplayOption,
  TicketsControls,
  TicketsOptions,
} from "../components/TicketsControls";
import { Container } from "../components/Container";

const displayComponents: Record<DisplayOption, React.ComponentType> = {
  movies: MovieListAlphabetic,
  shows: MovieListTimeline,
};

export const Tickets = () => {
  const [options, setOptions] = useState<TicketsOptions>({
    display: "movies",
    date: new Date(),
    cinemas: [],
    movies: [],
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
