import React from "react";
import {
  Button,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "./Link";
import { ChevronRight } from "@material-ui/icons";
import { DividedListItem } from "./DividedListItem";
import { Show } from "../../shared/models/Show";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { commonTimeFormat } from "../functions/commonTimeFormat";

export type ShowListItemProps = Pick<
  Show,
  "loungeId" | "date" | "language" | "subtitles" | "showId"
> & { time?: boolean };

export const ShowListItem: React.FC<ShowListItemProps> = ({
  loungeId,
  date,
  language,
  subtitles,
  time = true,
  showId,
}) => {
  const lounge = useCinemaSelector(({ lounges }) =>
    lounges.find((lounge) => lounge.loungeId === loungeId)
  );

  return (
    <DividedListItem>
      <ListItem alignItems="flex-start">
        {time && (
          <ListItemAvatar>
            <Typography>{commonTimeFormat(date)}</Typography>
          </ListItemAvatar>
        )}
        <ListItemText
          primary={lounge?.name}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                style={{ display: "inline" }}
                color="textPrimary"
              >
                {language} ({subtitles} subtitles)
              </Typography>
            </>
          }
        />
        <ListItemSecondaryAction>
          <Link routeName="booking-ticket-selection" routeParams={{ showId }}>
            <Button variant="outlined" endIcon={<ChevronRight />}>
              Buy tickets
            </Button>
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
    </DividedListItem>
  );
};
