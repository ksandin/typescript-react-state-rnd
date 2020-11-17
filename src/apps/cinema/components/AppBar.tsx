import React from "react";
import styled from "styled-components";
import { Link } from "./Link";
import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from "@material-ui/core";
import { LocationPicker } from "./LocationPicker";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { useCinemaSelector } from "../hooks/useCinemaSelector";

const useAppBarState = () =>
  useCinemaSelector(({ location, locationOptions }) => ({
    location,
    locationOptions,
  }));

export const AppBar = () => {
  const [{ setLocation }] = useCinemaDispatcher();
  const { location, locationOptions } = useAppBarState();
  const handleLocationChange = (e: {}, newValue: string | null) => {
    if (newValue) {
      setLocation(newValue);
    }
  };

  return (
    <Container>
      <Toolbar>
        <Link color="inherit" routeName="home">
          Home
        </Link>
        <Link color="inherit" routeName="tickets">
          Tickets
        </Link>
        <Link color="inherit" routeName="movies">
          Movies
        </Link>
        <AlignedLocationPicker
          size="small"
          value={location}
          options={locationOptions}
          onChange={handleLocationChange}
        />
      </Toolbar>
    </Container>
  );
};

const Container = styled(MuiAppBar).attrs({ position: "relative" })`
  z-index: 0;
`;

const Toolbar = styled(MuiToolbar)`
  & {
    ${Link} + ${Link} {
      margin-left: 20px;
    }
  }
`;

const AlignedLocationPicker = styled(LocationPicker)`
  position: absolute;
  right: 24px;
  width: 200px;
`;
