import React from "react";
import { Button } from "@material-ui/core";
import { MovieListItem, MovieListItemProps } from "./MovieListItem";
import styled from "styled-components";
import { MoviePlayerDialogPlayButton } from "./MoviePlayerDialogPlayButton";

export type MovieListItemWithTrailerButtonProps = MovieListItemProps;

export const MovieListItemWithTrailerButton: React.FC<MovieListItemWithTrailerButtonProps> = (
  props
) => (
  <MovieListItem playButton={false} {...props}>
    <SmallPlayButton
      renderButton={(playButton, open) => (
        <Button variant="outlined" onClick={open} startIcon={playButton}>
          Play trailer
        </Button>
      )}
    />
  </MovieListItem>
);

const SmallPlayButton = styled(MoviePlayerDialogPlayButton)`
  width: 16px;
  height: 16px;
`;
