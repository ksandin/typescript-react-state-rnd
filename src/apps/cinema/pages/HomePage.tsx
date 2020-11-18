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
import { Container } from "../components/Container";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { commonDateFormat } from "../functions/commonDateFormat";
import { CardLabel } from "../components/CardLabel";

const useHomePageState = () =>
  useCinemaSelector(
    ({ homeHeroRecommendation, homeRecommendationCategories }) => ({
      hero: homeHeroRecommendation,
      categories: homeRecommendationCategories,
    })
  );

export const HomePage = () => {
  const { hero, categories } = useHomePageState();
  return (
    <>
      {hero && (
        <HomeHeroBanner src={hero.imageUrl}>
          <Center>
            <MoviePlayerDialogPlayButton />
          </Center>
          {new Date() < hero.premiere && (
            <Chip
              label={`Premiere ${commonDateFormat(hero.premiere)}`}
              color="primary"
            />
          )}
          <Typography variant="h4">
            <Link routeName="movie">{hero.name}</Link>
          </Typography>
        </HomeHeroBanner>
      )}
      <Container>
        {categories.map((category, categoryIndex) => (
          <Section
            key={`category${categoryIndex}`}
            label={category.name}
            header={<Link routeName="movies">View all</Link>}
          >
            <CardRow>
              {category.recommendations.map(
                ({ imageUrl, name }, recommendationIndex) => (
                  <Link
                    key={`category${recommendationIndex}`}
                    routeName="movie"
                  >
                    <Card backgroundSrc={imageUrl}>
                      <CardLabel>{name}</CardLabel>
                    </Card>
                  </Link>
                )
              )}
            </CardRow>
          </Section>
        ))}
      </Container>
    </>
  );
};

const HomeHeroBanner = styled(HeroBanner)`
  margin-bottom: 32px;
`;
