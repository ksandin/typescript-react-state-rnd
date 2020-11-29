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
import { Movie } from "../state/models/Movie";
import { commonDateFormat } from "../functions/commonDateFormat";
import { commonRuntimeFormat } from "../functions/commonRuntimeFormat";

export type MovieListItemProps = Pick<
  Movie,
  | "name"
  | "premiereDate"
  | "cardUrl"
  | "runtime"
  | "ageLimit"
  | "genres"
  | "movieId"
  | "trailerUrl"
> & {
  avatarTrailerButton?: boolean;
  showReleaseDate?: boolean;
};

export const MovieListItem: React.FC<MovieListItemProps> = ({
  children,
  name,
  cardUrl,
  premiereDate,
  runtime,
  ageLimit,
  genres,
  movieId,
  trailerUrl,
  avatarTrailerButton = true,
  showReleaseDate = false,
}) => (
  <DividedListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <AvatarImage src={cardUrl} alt="Remy Sharp" />
      </ListItemAvatar>
      {avatarTrailerButton && (
        <AvatarTrailerButton
          dialogProps={{ moviePlayerProps: { url: trailerUrl } }}
        />
      )}
      <ListItemText>
        {showReleaseDate && (
          <Typography variant="caption">
            <SmallEventIcon /> {commonDateFormat(premiereDate)}
          </Typography>
        )}
        <Typography variant="body1">
          <Link routeName="movie" routeParams={{ movieId }}>
            {name}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          style={{ display: "inline" }}
          color="textPrimary"
        >
          {genres.join(", ")} | {commonRuntimeFormat(runtime)} | {ageLimit}
        </Typography>
      </ListItemText>
      {children && (
        <ListItemSecondaryAction>{children}</ListItemSecondaryAction>
      )}
    </ListItem>
  </DividedListItem>
);

const AvatarTrailerButton = styled(MoviePlayerDialogPlayButton)`
  position: absolute;
  left: 26px;
  top: 45px;
`;

const AvatarImage = styled(Avatar).attrs({ variant: "square" })`
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
