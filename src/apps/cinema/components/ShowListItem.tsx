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

export type ShowListItemProps = { time?: boolean };

export const ShowListItem: React.FC<ShowListItemProps> = ({ time = true }) => (
  <DividedListItem>
    <ListItem alignItems="flex-start">
      {time && (
        <ListItemAvatar>
          <Typography>20:10</Typography>
        </ListItemAvatar>
      )}
      <ListItemText
        primary="Lounge 10"
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              style={{ display: "inline" }}
              color="textPrimary"
            >
              English (Swedish subtitles), VIP!
            </Typography>
          </>
        }
      />
      <ListItemSecondaryAction>
        <Link routeName="booking-ticket-selection">
          <Button variant="outlined" endIcon={<ChevronRight />}>
            Buy tickets
          </Button>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  </DividedListItem>
);
