import React from "react";
import { ShowListItem, ShowListItemProps } from "./ShowListItem";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export type ShowListItemsByCinemaNameProps = ShowListItemProps;

export const ShowListItemsByCinemaName: React.FC<ShowListItemsByCinemaNameProps> = (
  props
) => (
  <>
    <ShowCinemaName>Filmstaden Heron City</ShowCinemaName>
    <ShowListItem {...props} />
    <ShowCinemaName>Filmstaden Scandinavia</ShowCinemaName>
    <ShowListItem {...props} />
    <ShowListItem {...props} />
    <ShowCinemaName>Filmstaden Sergel</ShowCinemaName>
    <ShowListItem {...props} />
    <ShowListItem {...props} />
    <ShowListItem {...props} />
  </>
);

const ShowCinemaName = styled(Typography).attrs({
  variant: "h6",
  paragraph: false,
})`
  position: relative;
  margin-bottom: -8px;
  margin-top: 8px;
`;
