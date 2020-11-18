import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { AvTimer, List } from "@material-ui/icons";
import {
  TicketsDisplayOption,
  TicketsOptions,
} from "../state/models/TicketsOptions";
import { MovieGenre } from "../state/models/MovieGenre";
import { MovieLanguage } from "../state/models/MovieLanguage";
import { MovieAgeLimit } from "../state/models/MovieAgeLimit";
import { createTemplateComponent } from "../../../lib/createTemplateComponent";
import { ControlRow } from "./ControlRow";

export const TicketsControls = createTemplateComponent(
  renderControls,
  (elements) => (
    <>
      <ControlRow>
        {elements.date}
        {elements.cinemas}
        {elements.movies}
      </ControlRow>
      <ControlRow>
        {elements.other}
        {elements.genres}
        {elements.language}
      </ControlRow>
      <ControlRow>
        {elements.subtitles}
        {elements.ageLimit}
      </ControlRow>
      {elements.display}
    </>
  )
);

function renderControls({
  value,
  onChange,
}: {
  value: TicketsOptions;
  onChange: (newValue: TicketsOptions) => void;
}) {
  const change = <K extends keyof TicketsOptions>(
    propName: K,
    propValue: TicketsOptions[K]
  ) => onChange({ ...value, [propName]: propValue });
  return {
    display: (
      <ToggleButtonGroup<TicketsDisplayOption>
        size="small"
        value={value.display}
        options={[
          { value: "movies", children: <List /> },
          { value: "shows", children: <AvTimer /> },
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
        options={["Filmstaden Heron City", "Filmstaden Kista"]}
        renderInput={(params) => (
          <TextField {...params} label="Cinemas" variant="outlined" />
        )}
        value={value.cinemas}
        onChange={(e, newValues) => change("cinemas", newValues)}
        multiple
      />
    ),
    movies: (
      <Autocomplete
        options={["Freaky", "Tenet"]}
        renderInput={(params) => (
          <TextField {...params} label="Movies" variant="outlined" />
        )}
        value={value.movies}
        onChange={(e, newValues) => change("movies", newValues)}
        multiple
      />
    ),
    other: (
      <Autocomplete
        options={[
          "100kr",
          "Pram cinema",
          "Family",
          "IMAX",
          "Classics",
          "Kids cinema",
          "Visual interpretation",
        ]}
        renderInput={(params) => (
          <TextField {...params} label="Other" variant="outlined" />
        )}
        value={value.other}
        onChange={(e, newValues) => change("other", newValues)}
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
      <Autocomplete
        options={Object.values(MovieLanguage)}
        renderInput={(params) => (
          <TextField {...params} label="Language" variant="outlined" />
        )}
        value={value.language}
        onChange={(e, newValue) => newValue && change("language", newValue)}
      />
    ),
    subtitles: (
      <Autocomplete
        options={Object.values(MovieLanguage)}
        renderInput={(params) => (
          <TextField {...params} label="Subtitles" variant="outlined" />
        )}
        value={value.subtitles}
        onChange={(e, newValue) => newValue && change("subtitles", newValue)}
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
  };
}
