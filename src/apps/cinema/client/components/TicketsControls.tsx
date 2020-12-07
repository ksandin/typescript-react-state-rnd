import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { AvTimer, List } from "@material-ui/icons";
import {
  ShowDisplayOption,
  SearchForShowsOptions,
} from "../../shared/requests/SearchForShowsOptions";
import { MovieGenre } from "../../shared/types/MovieGenre";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { MovieAgeLimit } from "../../shared/types/MovieAgeLimit";
import { createTemplateComponent } from "../../../../lib/createTemplateComponent";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { ControlRow } from "./ControlRow";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { EnumPicker } from "./EnumPicker";

export const TicketsControls = createTemplateComponent(Controls, (elements) => (
  <>
    <ControlRow columns={4}>
      {elements.date}
      {elements.cinemas}
      {elements.movies}
      {elements.genres}
    </ControlRow>
    <ControlRow>
      {elements.ageLimit}
      {elements.language}
      {elements.subtitles}
    </ControlRow>
    {elements.display}
  </>
));

function Controls({
  value,
  onChange,
}: {
  value: SearchForShowsOptions;
  onChange: (newValue: SearchForShowsOptions) => void;
}) {
  const { movies, cinemas } = useCinemaSelector(({ movieNames, cinemas }) => ({
    movies: movieNames,
    cinemas,
  }));
  const change = <K extends keyof SearchForShowsOptions>(
    propName: K,
    propValue: SearchForShowsOptions[K]
  ) => onChange({ ...value, [propName]: propValue });
  return {
    display: (
      <ToggleButtonGroup<ShowDisplayOption>
        size="small"
        value={value.display}
        options={[
          { value: "movies", children: <List /> },
          { value: "timeline", children: <AvTimer /> },
        ]}
        onChange={(e, newValue) => newValue && change("display", newValue)}
      />
    ),
    date: (
      <DatePicker
        disableToolbar
        variant="inline"
        margin="none"
        label="Date"
        value={value.date}
        onChange={(muiDate) =>
          change("date", muiDate ? muiDate.toDate() : new Date())
        }
      />
    ),
    cinemas: (
      <Autocomplete
        options={cinemas}
        renderInput={(params) => (
          <TextField {...params} label="Cinemas" variant="outlined" />
        )}
        getOptionLabel={(cinema) => cinema.name}
        value={value.cinemas.map(
          (id) => cinemas.find((c) => c.cinemaId === id)!
        )}
        onChange={(e, newValues) =>
          change(
            "cinemas",
            newValues.map((c) => c.cinemaId)
          )
        }
        multiple
      />
    ),
    movies: (
      <Autocomplete
        options={movies}
        renderInput={(params) => (
          <TextField {...params} label="Movies" variant="outlined" />
        )}
        getOptionLabel={(movie) => movie.name}
        value={value.movies.map((id) => movies.find((c) => c.movieId === id)!)}
        onChange={(e, newValues) =>
          change(
            "movies",
            newValues.map((c) => c.movieId)
          )
        }
        multiple
      />
    ),
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
    language: (
      <EnumPicker
        label="Language"
        Enum={MovieLanguage}
        value={value.language}
        onChange={(newValue) => change("language", newValue)}
      />
    ),
    subtitles: (
      <EnumPicker
        label="Subtitles"
        Enum={MovieLanguage}
        value={value.subtitles}
        onChange={(newValue) => change("subtitles", newValue)}
      />
    ),
    ageLimit: (
      <EnumPicker
        label="Age limit"
        Enum={MovieAgeLimit}
        value={value.ageLimit}
        onChange={(newValue) => change("ageLimit", newValue)}
      />
    ),
  };
}
