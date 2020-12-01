import React, { useState } from "react";
import styled from "styled-components";
import { MovieListAlphabetic } from "../components/MovieListAlphabetic";
import { MovieListTimeline } from "../components/MovieListTimeline";
import { TicketsControls } from "../components/TicketsControls";
import { Container } from "../components/Container";
import { Movie } from "../../shared/types/Movie";
import {
  ShowDisplayOption,
  SearchForShowsOptions,
} from "../../shared/requests/SearchForShowsOptions";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { MovieAgeLimit } from "../../shared/types/MovieAgeLimit";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { useCallOnce } from "../hooks/useCallOnce";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { Show } from "../../shared/types/Show";

const displayComponents: Record<
  ShowDisplayOption,
  React.ComponentType<{ movies: Movie[]; shows: Show[] }>
> = {
  movies: MovieListAlphabetic,
  timeline: MovieListTimeline,
};

export const TicketsPage = () => {
  const [options, setOptions] = useState<SearchForShowsOptions>({
    display: "movies",
    date: new Date(),
    cinemas: [],
    movies: [],
    subtitles: MovieLanguage.All,
    ageLimit: MovieAgeLimit.All,
    language: MovieLanguage.All,
    genres: [],
  });
  const { shows, movies } = useCinemaSelector(({ ticketsPage }) => ticketsPage);
  const [{ loadTicketsPageState }, dispatches] = useCinemaDispatcher();
  useCallOnce(loadTicketsPageState, options);

  if (dispatches.loadTicketsPageState.status === "pending") {
    return <span>Loading...</span>;
  }
  if (dispatches.loadTicketsPageState.status === "rejected") {
    return <span>Oops, something went wrong</span>;
  }

  const DisplayComponent = displayComponents[options.display];
  return (
    <Container>
      <Margin>
        <TicketsControls value={options} onChange={setOptions} />
      </Margin>
      <DisplayComponent movies={movies} shows={shows} />
    </Container>
  );
};

const Margin = styled.div`
  margin-bottom: 16px;
`;
