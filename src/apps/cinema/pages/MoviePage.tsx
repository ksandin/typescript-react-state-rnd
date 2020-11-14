import React, { useState } from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { Center } from "../components/Center";
import { MoviePlayerDialogPlayButton } from "../components/MoviePlayerDialogPlayButton";
import { Chip, List, Typography } from "@material-ui/core";
import { HeroBanner } from "../components/HeroBanner";
import styled from "styled-components";
import { MovieDetails } from "../components/MovieDetails";
import { Card } from "../components/Card";
import { CardRow } from "../components/CardRow";
import { ShowListItemsByCinemaName } from "../components/ShowListItemsByCinemaName";
import { TicketsControls, TicketsOptions } from "../components/TicketsControls";

export const MoviePage = () => {
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
  return (
    <>
      <MoviePageHeroBanner src="http://lorempixel.com/920/400/transport/">
        <Center>
          <MoviePlayerDialogPlayButton />
        </Center>
        <Chip label="Premiär 13 november" color="primary" />
        <Typography variant="h4">
          <Link routeName="movie">Operation Nordpolen</Link>
        </Typography>
      </MoviePageHeroBanner>
      <Container>
        <Typography paragraph>
          En populär influencer och hans vänner reser jorden runt och filmar sig
          själva i extrema situationer. I Ryssland blir de inbjudna till ett
          mystiskt escape room av en excentrisk miljonär och ser en given
          videosuccé i sociala medier framför sig. Men inga likes i världen kan
          köpa dem fria från mardrömmen som väntar ...
        </Typography>
        <MoviePageDetails />
        <MoviePageCards>
          <Card backgroundSrc="http://lorempixel.com/180/280/transport/?_=1" />
          <Card backgroundSrc="http://lorempixel.com/180/280/transport/?_=2" />
          <Card backgroundSrc="http://lorempixel.com/180/280/transport/?_=3" />
          <Card backgroundSrc="http://lorempixel.com/180/280/transport/?_=4" />
          <Card backgroundSrc="http://lorempixel.com/180/280/transport/?_=5" />
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
