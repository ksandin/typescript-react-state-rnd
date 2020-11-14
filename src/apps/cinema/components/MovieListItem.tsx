import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Event } from "@material-ui/icons";
import styled from "styled-components";
import { DividedListItem } from "./DividedListItem";
import { Link } from "./Link";
import { MoviePlayerDialogPlayButton } from "./MoviePlayerDialogPlayButton";
import { Center } from "./Center";

export type MovieListItemProps = {
  playButton?: boolean;
  releaseDate?: boolean;
};

export const MovieListItem: React.FC<MovieListItemProps> = ({
  children,
  playButton = true,
  releaseDate = false,
}) => (
  <DividedListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <MovieListItemAvatar alt="Remy Sharp">
          {playButton && (
            <Center>
              <MoviePlayerDialogPlayButton />
            </Center>
          )}
        </MovieListItemAvatar>
      </ListItemAvatar>

      <ListItemText>
        {releaseDate && (
          <Typography variant="caption">
            <SmallEventIcon /> 16 november
          </Typography>
        )}
        <Typography variant="body1">
          <Link routeName="movie">After we collided</Link>
        </Typography>
        <Typography
          variant="body2"
          style={{ display: "inline" }}
          color="textPrimary"
        >
          Romance, Drama | 1 hour 45 minutes | 11 years
        </Typography>
      </ListItemText>
      {children && (
        <ListItemSecondaryAction>{children}</ListItemSecondaryAction>
      )}
    </ListItem>
  </DividedListItem>
);

const MovieListItemAvatar = styled(Avatar).attrs({ variant: "square" })`
  width: 70px;
  height: 100px;
  margin-right: 16px;
  position: relative;
`;

const SmallEventIcon = styled(Event)`
  width: 14px;
  height: 14px;
  position: relative;
  bottom: -2px;
`;
