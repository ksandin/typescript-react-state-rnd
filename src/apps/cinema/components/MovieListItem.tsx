import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { DividedListItem } from "./DividedListItem";

export const MovieListItem: React.FC = ({ children }) => (
  <DividedListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <MovieListItemAvatar alt="Remy Sharp" />
      </ListItemAvatar>
      <ListItemText
        primary="After we collided"
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              style={{ display: "inline" }}
              color="textPrimary"
            >
              Romance, Drama | 1 hour 45 minutes | 11 years
            </Typography>
          </>
        }
      />
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
`;
