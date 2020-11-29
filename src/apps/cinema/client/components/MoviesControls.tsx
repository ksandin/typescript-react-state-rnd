import React from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { Typography } from "@material-ui/core";
import { MovieGenre } from "../state/models/MovieGenre";
import { MovieAgeLimit } from "../state/models/MovieAgeLimit";
import {
  MoviesDisplayOption,
  MoviesOptions,
} from "../state/models/MoviesOptions";
import { ControlRow } from "./ControlRow";
import { createTemplateComponent } from "../../../../lib/createTemplateComponent";

export const MoviesControls = createTemplateComponent(
  renderControls,
  ({ display, genres, ageLimit }) => (
    <>
      <ControlRow>
        {genres}
        {ageLimit}
      </ControlRow>
      {display}
    </>
  )
);

function renderControls({
  value,
  onChange,
}: {
  value: MoviesOptions;
  onChange: (newValue: MoviesOptions) => void;
}) {
  const change = <K extends keyof MoviesOptions>(
    propName: K,
    propValue: MoviesOptions[K]
  ) => onChange({ ...value, [propName]: propValue });
  return {
    genres: (
      <Autocomplete
        options={Object.values(MovieGenre)}
        renderInput={(params) => (
          <TextField {...params} label="Genres" variant="outlined" />
        )}
        value={value.genres}
        onChange={(e, newValues) => change("genres", newValues)}
        multiple
      />
    ),
    ageLimit: (
      <Autocomplete
        options={Object.values(MovieAgeLimit)}
        renderInput={(params) => (
          <TextField {...params} label="Age limit" variant="outlined" />
        )}
        value={value.ageLimit}
        onChange={(e, newValue) => newValue && change("ageLimit", newValue)}
      />
    ),
    display: (
      <ToggleButtonGroup<MoviesDisplayOption>
        size="small"
        value={value.display}
        options={[
          {
            value: "current",
            children: <Typography variant="caption">Current</Typography>,
          },
          {
            value: "upcoming",
            children: <Typography variant="caption">Upcoming</Typography>,
          },
        ]}
        onChange={(e, newValue) => newValue && change("display", newValue)}
      />
    ),
  };
}
