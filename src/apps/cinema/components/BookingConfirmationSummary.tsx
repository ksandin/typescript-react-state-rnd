import React from "react";
import styled from "styled-components";
import {
  Chip,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Card } from "./Card";

export const BookingConfirmationSummary = () => (
  <>
    <Row>
      <Card backgroundSrc="http://lorempixel.com/180/280/transport/?_=1" />
      <AlignBottom>
        <Chip label="Premiär 13 november" color="primary" />
        <Typography variant="h6">Operation Nordpolen</Typography>
        <Typography>Tomorrow, tuesday 20:15</Typography>
        <Typography>Filmstaden Heron City</Typography>
        <Typography>Lounge 6</Typography>
        <Typography variant="caption">1 hour 28 minutes</Typography>
      </AlignBottom>
    </Row>
    <List>
      <ListItem>
        <ListItemText>2x Regular</ListItemText>
        <ListItemSecondaryAction>
          <Typography>270 kr</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  </>
);

const Row = styled.div`
  display: flex;
`;

const AlignBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 16px;
`;
