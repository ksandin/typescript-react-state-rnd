import React, { useState } from "react";
import { Container } from "../components/Container";
import { Center } from "../components/Center";
import { MoviePlayerDialogPlayButton } from "../components/MoviePlayerDialogPlayButton";
import { List, Typography } from "@material-ui/core";
import { HeroBanner } from "../components/HeroBanner";
import styled from "styled-components";
import { MovieDetails } from "../components/MovieDetails";
import { Card } from "../components/Card";
import { CardRow } from "../components/CardRow";
import { ShowListItemsByCinemaName } from "../components/ShowListItemsByCinemaName";
import { TicketsControls, TicketsOptions } from "../components/TicketsControls";
import { MovieCardWithDetails } from "../components/MovieCardWithDetails";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { useRoute } from "react-router5";
import { useCallOnce } from "../hooks/useCallOnce";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { MovieId } from "../state/models/Movie";

export const MoviePage = () => {
  const { route } = useRoute();
  const movie = useCinemaSelector(({ moviePage }) => moviePage);
  const [options, setOptions] = useState(defaultTicketsOptions);
  const [{ loadMoviePageState }, dispatches] = useCinemaDispatcher();

  useCallOnce(loadMoviePageState, route.params.movieId as MovieId);

  if (dispatches.loadMoviePageState.status === "pending") {
    return <span>Loading...</span>;
  }
  if (dispatches.loadMoviePageState.status === "rejected" || !movie) {
    return <span>Movie not found</span>;
  }

  return (
    <>
      <MoviePageHeroBanner src={movie.bannerUrl}>
        <Center>
          <MoviePlayerDialogPlayButton
            dialogProps={{ moviePlayerProps: { url: movie.trailerUrl } }}
          />
        </Center>
        <Container>
          <MovieCardWithDetails
            premiereDate={movie.premiereDate}
            runtime={movie.runtime}
            name={movie.name}
            cardUrl={movie.cardUrl}
            genres={movie.genres}
            ageLimit={movie.ageLimit}
          />
        </Container>
      </MoviePageHeroBanner>
      <Container>
        <Typography paragraph>{movie.description}</Typography>
        <MoviePageDetails />
        <MoviePageCards>
          {movie.snapshotUrls.slice(0, 5).map((imageUrl, index) => (
            <Card key={`card${index}`} backgroundSrc={imageUrl} />
          ))}
        </MoviePageCards>
        <Typography variant="h5" paragraph>
          Tickets
        </Typography>
        <TicketsControls value={options} onChange={setOptions} />
        <List>
          <ShowListItemsByCinemaName />
        </List>
      </Container>
    </>
  );
};

const MoviePageCards = styled(CardRow)`
  margin-bottom: 24px;
`;

const MoviePageDetails = styled(MovieDetails)`
  margin-bottom: 24px;
`;

const MoviePageHeroBanner = styled(HeroBanner)`
  margin-bottom: 32px;
`;

const defaultTicketsOptions: TicketsOptions = {
  display: "movies",
  date: new Date(),
  cinemas: [],
  movies: [],
  subtitles: "All",
  ageLimit: "All",
  language: "All",
  genres: [],
  other: [],
};
