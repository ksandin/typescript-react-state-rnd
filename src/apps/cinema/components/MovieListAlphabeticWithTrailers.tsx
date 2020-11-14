import React from "react";
import styled from "styled-components";
import { Button, List } from "@material-ui/core";
import { MovieListItem } from "./MovieListItem";
import { MoviePlayerDialogPlayButton } from "./MoviePlayerDialogPlayButton";

export const MovieListAlphabeticWithTrailers = () => (
  <List>
    <MovieListItem playButton={false}>
      <SmallPlayButton
        renderButton={(playButton, open) => (
          <Button variant="outlined" onClick={open} startIcon={playButton}>
            Play trailer
          </Button>
        )}
      />
    </MovieListItem>
  </List>
);

const SmallPlayButton = styled(MoviePlayerDialogPlayButton)`
  width: 16px;
  height: 16px;
`;
