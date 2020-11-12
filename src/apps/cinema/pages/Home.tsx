import React from "react";
import { Link } from "../components/Link";
import { HeroBanner } from "../components/HeroBanner";
import { Chip, Typography } from "@material-ui/core";
import { MoviePlayerDialogPlayButton } from "../components/MoviePlayerDialogPlayButton";
import { Center } from "../components/Center";

export const Home = () => {
  return (
    <div>
      <HeroBanner src="http://lorempixel.com/920/400/sports/">
        <Center>
          <MoviePlayerDialogPlayButton />
        </Center>
        <Chip label="Premiär 13 november" color="primary" />
        <Typography variant="h4">
          <Link routeName="movie">Operation Nordpolen</Link>
        </Typography>
      </HeroBanner>
      <Link routeName="movies">Show all movies in a category</Link>
      <br />
      <Link routeName="movie">go to movie page</Link>
    </div>
  );
};
