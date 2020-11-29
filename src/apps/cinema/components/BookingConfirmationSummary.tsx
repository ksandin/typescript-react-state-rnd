import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Card } from "./Card";
import { commonDateFormat } from "../functions/commonDateFormat";
import { commonRuntimeFormat } from "../functions/commonRuntimeFormat";
import { BookingConfirmationDetails } from "../state/models/BookingConfirmationDetails";
import { PremiereChip } from "./PremiereChip";
import { TicketList } from "./TicketList";
import { TicketCounts } from "../state/models/TicketCounts";

export type BookingConfirmationSummaryProps = BookingConfirmationDetails & {
  tickets: TicketCounts;
};

export const BookingConfirmationSummary = ({
  movieName,
  movieCardUrl,
  movieRuntime,
  moviePremiereDate,
  showDate,
  cinemaName,
  loungeName,
  tickets,
}: BookingConfirmationSummaryProps) => {
  return (
    <>
      <Row>
        <Card backgroundSrc={movieCardUrl} />
        <AlignBottom>
          <PremiereChip date={moviePremiereDate} />
          <Typography variant="h6">{movieName}</Typography>
          <Typography>{commonDateFormat(showDate)}</Typography>
          <Typography>{cinemaName}</Typography>
          <Typography>{loungeName}</Typography>
          <Typography variant="caption">
            {commonRuntimeFormat(movieRuntime)}
          </Typography>
        </AlignBottom>
      </Row>
      <TicketList tickets={tickets} />
    </>
  );
};

const Row = styled.div`
  display: flex;
`;

const AlignBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 16px;
`;
