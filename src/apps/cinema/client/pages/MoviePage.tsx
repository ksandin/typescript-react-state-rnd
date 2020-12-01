import React, { useState } from "react";
import { List, Typography } from "@material-ui/core";
import styled from "styled-components";
import { useRoute } from "react-router5";
import { Container } from "../components/Container";
import { Center } from "../components/Center";
import { MoviePlayerDialogPlayButton } from "../components/MoviePlayerDialogPlayButton";
import { HeroBanner } from "../components/HeroBanner";
import { MovieDetails } from "../components/MovieDetails";
import { Card } from "../components/Card";
import { CardRow } from "../components/CardRow";
import { ShowListItemsByCinemaName } from "../components/ShowListItemsByCinemaName";
import { TicketsControls } from "../components/TicketsControls";
import { MovieCardWithDetails } from "../components/MovieCardWithDetails";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { useCallOnce } from "../hooks/useCallOnce";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { MovieId } from "../../shared/types/Movie";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { MovieAgeLimit } from "../../shared/types/MovieAgeLimit";
import { SearchForShowsOptions } from "../../shared/requests/SearchForShowsOptions";
import { ControlRow } from "../components/ControlRow";

export const MoviePage = () => {
  const { route } = useRoute();
  const { movie, shows } = useCinemaSelector(({ moviePage }) => moviePage);
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
  const [{ loadMoviePageState }, dispatches] = useCinemaDispatcher();

  useCallOnce(loadMoviePageState, route.params.movieId as MovieId, options);

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
        <MoviePageDetails
          premiereDate={movie.premiereDate}
          cast={movie.cast}
          director={movie.director}
          language={movie.language}
        />
        <MoviePageCards>
          {movie.snapshotUrls.slice(0, 5).map((imageUrl, index) => (
            <Card key={`card${index}`} backgroundSrc={imageUrl} />
          ))}
        </MoviePageCards>
        <Typography variant="h5" paragraph>
          Tickets
        </Typography>
        <TicketsControls value={options} onChange={setOptions}>
          {({ date, cinemas }) => (
            <ControlRow>
              {date}
              {cinemas}
            </ControlRow>
          )}
        </TicketsControls>
        <List>
          <ShowListItemsByCinemaName shows={shows} />
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
