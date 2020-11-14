import React, { useState } from "react";
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
      <TicketsControls value={options} onChange={setOptions} />
      <DisplayComponent />
    </Container>
  );
};
