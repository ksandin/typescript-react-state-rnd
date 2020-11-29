import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Card } from "./Card";
import { commonRuntimeFormat } from "../functions/commonRuntimeFormat";
import { PremiereChip } from "./PremiereChip";
import { Movie } from "../../shared/models/Movie";

export type MovieCardWithDetailsProps = Pick<
  Movie,
  "name" | "cardUrl" | "premiereDate" | "genres" | "runtime" | "ageLimit"
>;

export const MovieCardWithDetails = ({
  name,
  cardUrl,
  premiereDate,
  genres,
  runtime,
  ageLimit,
}: MovieCardWithDetailsProps) => (
  <Row>
    <Card backgroundSrc={cardUrl} />
    <AlignBottom>
      <PremiereChip date={premiereDate} />
      <Typography variant="h4">{name}</Typography>
      <Typography>{genres.join(", ")}</Typography>
      <Typography variant="caption">
        {commonRuntimeFormat(runtime)} | {ageLimit}
      </Typography>
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
