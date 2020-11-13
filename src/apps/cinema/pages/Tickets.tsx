import React, { useState } from "react";
import { AvTimer, List } from "@material-ui/icons";
import { MovieListAlphabetic } from "../components/MovieListAlphabetic";
import { MovieListTimeline } from "../components/MovieListTimeline";
import { ToggleButtonGroup } from "../components/ToggleButtonGroup";
import { Section } from "../components/Section";

const displayComponents: Record<DisplayOption, React.ComponentType> = {
  movies: MovieListAlphabetic,
  shows: MovieListTimeline,
};

export const Tickets = () => {
  const [display, setDisplay] = useState<DisplayOption>("movies");
  const DisplayComponent = displayComponents[display];
  return (
    <>
      <Section
        label="Tickets"
        header={
          <ToggleButtonGroup<DisplayOption>
            size="small"
            value={display}
            options={[
              { value: "movies", children: <List /> },
              { value: "shows", children: <AvTimer /> },
            ]}
            onChange={(e, newValue) => {
              setDisplay(newValue);
            }}
          />
        }
      >
        Lorem ipsum dolor sit amet.
      </Section>
      <DisplayComponent />
    </>
  );
};

export type DisplayOption = "movies" | "shows";
