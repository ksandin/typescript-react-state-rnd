import styled from "styled-components";
import React, { useState } from "react";
import { List } from "@material-ui/core";
import { Container } from "../components/Container";
import { MoviesControls } from "../components/MoviesControls";
import { MovieListItemWithTrailerButton } from "../components/MovieListItemWithTrailerButton";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { useCallOnce } from "../hooks/useCallOnce";
import { SearchForMoviesOptions } from "../../shared/requests/SearchForMoviesOptions";

export const MoviesPage = () => {
  const movies = useCinemaSelector(({ moviesPage }) => moviesPage);
  const [{ loadMoviesPageState }, dispatches] = useCinemaDispatcher();
  const [options, setOptions] = useState<SearchForMoviesOptions>(
    defaultMoviesOptions
  );
  useCallOnce(loadMoviesPageState, options);

  if (dispatches.loadMoviesPageState.status === "pending") {
    return <span>Loading...</span>;
  }
  if (dispatches.loadMoviesPageState.status === "rejected") {
    return <span>Oops, something went wrong</span>;
  }

  return (
    <Container>
      <Margin>
        <MoviesControls value={options} onChange={setOptions} />
      </Margin>
      <List>
        {movies.map((movie) => (
          <MovieListItemWithTrailerButton
            key={movie.movieId}
            showReleaseDate={options.display === "upcoming"}
            {...movie}
          />
        ))}
      </List>
    </Container>
  );
};

const Margin = styled.div`
  margin-bottom: 16px;
`;

const defaultMoviesOptions: SearchForMoviesOptions = {
  display: "current",
  genres: [],
};
