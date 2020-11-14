import React from "react";
import styled from "styled-components";
import { Chip, Typography } from "@material-ui/core";
import { Link } from "../components/Link";
import { HeroBanner } from "../components/HeroBanner";
import { MoviePlayerDialogPlayButton } from "../components/MoviePlayerDialogPlayButton";
import { Center } from "../components/Center";
import { Section } from "../components/Section";
import { CardRow } from "../components/CardRow";
import { Card } from "../components/Card";
import { movieCategories } from "../fixtures/movieCategories";
import { Container } from "../components/Container";

export const HomePage = () => (
  <>
    <HomeHeroBanner src="http://lorempixel.com/920/400/transport/">
      <Center>
        <MoviePlayerDialogPlayButton />
      </Center>
      <Chip label="Premiär 13 november" color="primary" />
      <Typography variant="h4">
        <Link routeName="movie">Operation Nordpolen</Link>
      </Typography>
    </HomeHeroBanner>
    <Container>
      {movieCategories.map(({ categoryName, movies }, categoryIndex) => (
        <Section
          key={`category${categoryIndex}`}
          label={categoryName}
          header={<Link routeName="movies">View all</Link>}
        >
          <CardRow>
            {movies.map((backgroundUrl, movieIndex) => (
              <Link key={`category${movieIndex}`} routeName="movie">
                <Card backgroundSrc={backgroundUrl} />
              </Link>
            ))}
          </CardRow>
        </Section>
      ))}
    </Container>
  </>
);

const HomeHeroBanner = styled(HeroBanner)`
  margin-bottom: 32px;
`;
