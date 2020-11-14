import React from "react";
import styled from "styled-components";
import { Chip, Typography } from "@material-ui/core";
import { Card } from "./Card";
import { Link } from "./Link";

export type MovieCardWithDetailsProps = {};

export const MovieCardWithDetails: React.FC<MovieCardWithDetailsProps> = () => (
  <Row>
    <Card backgroundSrc="http://lorempixel.com/180/280/transport/?_=1" />
    <AlignBottom>
      <Chip label="Premiär 13 november" color="primary" />
      <Typography variant="h4">
        <Link routeName="movie">Operation Nordpolen</Link>
      </Typography>
      <Typography>Horror, Thriller</Typography>
      <Typography variant="caption">1 hour 28 minutes | 15 years</Typography>
    </AlignBottom>
  </Row>
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
