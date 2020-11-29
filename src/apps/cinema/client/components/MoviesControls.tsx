import React from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { Typography } from "@material-ui/core";
import { MovieGenre } from "../../shared/models/MovieGenre";
import { MovieAgeLimit } from "../../shared/models/MovieAgeLimit";
import {
  MovieDisplayOption,
  SearchForMoviesOptions,
} from "../../shared/requests/SearchForMoviesOptions";
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
  value: SearchForMoviesOptions;
  onChange: (newValue: SearchForMoviesOptions) => void;
}) {
  const change = <K extends keyof SearchForMoviesOptions>(
    propName: K,
    propValue: SearchForMoviesOptions[K]
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
      <ToggleButtonGroup<MovieDisplayOption>
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
