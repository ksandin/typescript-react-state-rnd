import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Link } from "../components/Link";
import { HeroBanner } from "../components/HeroBanner";
import { MoviePlayerDialogPlayButton } from "../components/MoviePlayerDialogPlayButton";
import { Center } from "../components/Center";
import { Section } from "../components/Section";
import { CardRow } from "../components/CardRow";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { CardLabel } from "../components/CardLabel";
import { PremiereChip } from "../components/PremiereChip";

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
        <HomeHeroBanner src={hero.bannerUrl}>
          <Center>
            <MoviePlayerDialogPlayButton />
          </Center>
          <PremiereChip date={hero.premiereDate} />
          <Typography variant="h4">
            <Link routeName="movie" routeParams={{ movieId: hero.movieId }}>
              {hero.name}
            </Link>
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
              {category.recommendations
                .slice(0, 5)
                .map(({ cardUrl, name, movieId }, recommendationIndex) => (
                  <Link
                    key={`category${recommendationIndex}`}
                    routeName="movie"
                    routeParams={{ movieId }}
                  >
                    <Card backgroundSrc={cardUrl}>
                      <CardLabel>{name}</CardLabel>
                    </Card>
                  </Link>
                ))}
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
