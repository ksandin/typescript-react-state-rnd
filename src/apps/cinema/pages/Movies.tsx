import styled from "styled-components";
import React, { useState } from "react";
import { Container } from "../components/Container";
import {
  DisplayOption,
  TicketsControls,
  TicketsOptions,
} from "../components/TicketsControls";
import { MovieListUpcoming } from "../components/MovieListUpcoming";
import { MovieListAlphabeticWithTrailers } from "../components/MovieListAlphabeticWithTrailers";

const displayComponents: Record<DisplayOption, React.ComponentType> = {
  movies: MovieListAlphabeticWithTrailers,
  shows: MovieListUpcoming,
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
