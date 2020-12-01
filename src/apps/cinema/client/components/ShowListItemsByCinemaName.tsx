import React from "react";
import { groupBy } from "lodash";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Show } from "../../shared/models/Show";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { ShowListItem, ShowListItemProps } from "./ShowListItem";

export type ShowListItemsByCinemaNameProps = {
  shows: Show[];
  itemProps?: Partial<ShowListItemProps>;
};

export const ShowListItemsByCinemaName: React.FC<ShowListItemsByCinemaNameProps> = ({
  itemProps,
  shows,
}) => {
  const cinemas = useCinemaSelector(({ cinemas }) => cinemas);
  const showsByCinemaName = groupBy(shows, ({ cinemaId }) => {
    const cinema = cinemas.find((c) => c.cinemaId === cinemaId);
    return cinema?.name;
  });
  const cinemaNames = Object.keys(showsByCinemaName).sort();
  return (
    <>
      {cinemaNames.map((cinemaName) => (
        <React.Fragment key={cinemaName}>
          <ShowCinemaName>{cinemaName}</ShowCinemaName>
          {showsByCinemaName[cinemaName].map((show) => (
            <ShowListItem key={show.showId} {...show} {...itemProps} />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

const ShowCinemaName = styled(Typography).attrs({
  variant: "h6",
  paragraph: false,
})`
  position: relative;
  margin-bottom: -8px;
  margin-top: 8px;
`;
