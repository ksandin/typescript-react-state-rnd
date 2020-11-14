import styled from "styled-components";
import React, { useState } from "react";
import { Container } from "../components/Container";
import { MovieListUpcoming } from "../components/MovieListUpcoming";
import { MovieListAlphabeticWithTrailers } from "../components/MovieListAlphabeticWithTrailers";
import {
  MoviesControls,
  MoviesDisplayOption,
  MoviesOptions,
} from "../components/MoviesControls";

const displayComponents: Record<MoviesDisplayOption, React.ComponentType> = {
  current: MovieListAlphabeticWithTrailers,
  upcoming: MovieListUpcoming,
};

export const Movies = () => {
  const [options, setOptions] = useState<MoviesOptions>({
    display: "current",
    ageLimit: "All",
    genres: [],
  });
  const DisplayComponent = displayComponents[options.display];
  return (
    <Container>
      <Margin>
        <MoviesControls value={options} onChange={setOptions} />
      </Margin>
      <DisplayComponent />
    </Container>
  );
};

const Margin = styled.div`
  margin-bottom: 16px;
`;
