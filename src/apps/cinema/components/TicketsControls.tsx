import React from "react";
import styled from "styled-components";
import { DatePicker } from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { AvTimer, List } from "@material-ui/icons";

export type DisplayOption = "movies" | "shows";

export type TicketsOptions = {
  display: DisplayOption;
  date: Date;
  cinemas: string[];
  movies: string[];
  subtitles: string;
  ageLimit: string;
  language: string;
  genres: string[];
  other: string[];
};

export type TicketsControlsProps = {
  value: TicketsOptions;
  onChange: (newValue: TicketsOptions) => void;
};

export const TicketsControls: React.FC<TicketsControlsProps> = ({
  value,
  onChange,
}) => {
  const change = <K extends keyof TicketsOptions>(
    propName: K,
    propValue: TicketsOptions[K]
  ) => onChange({ ...value, [propName]: propValue });
  return (
    <>
      <Row>
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
        <Autocomplete
          options={["Filmstaden Heron City", "Filmstaden Kista"]}
          renderInput={(params) => (
            <TextField {...params} label="Cinemas" variant="outlined" />
          )}
          value={value.cinemas}
          onChange={(e, newValues) => change("cinemas", newValues)}
          multiple
        />
        <Autocomplete
          options={["Freaky", "Tenet"]}
          renderInput={(params) => (
            <TextField {...params} label="Movies" variant="outlined" />
          )}
          value={value.movies}
          onChange={(e, newValues) => change("movies", newValues)}
          multiple
        />
      </Row>
      <Row>
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
        <Autocomplete
          options={[
            "Action",
            "Animated",
            "Kids",
            "Biopic",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Comedy",
          ]}
          renderInput={(params) => (
            <TextField {...params} label="Genres" variant="outlined" />
          )}
          value={value.genres}
          onChange={(e, newValues) => change("genres", newValues)}
          multiple
        />
        <Autocomplete
          options={[
            "All",
            "English",
            "Finnish",
            "French",
            "Swedish",
            "Turkish",
          ]}
          renderInput={(params) => (
            <TextField {...params} label="Language" variant="outlined" />
          )}
          value={value.language}
          onChange={(e, newValue) => newValue && change("language", newValue)}
        />
      </Row>
      <Row>
        <Autocomplete
          options={[
            "All",
            "English",
            "Finnish",
            "French",
            "Swedish",
            "Turkish",
            "None",
          ]}
          renderInput={(params) => (
            <TextField {...params} label="Subtitles" variant="outlined" />
          )}
          value={value.subtitles}
          onChange={(e, newValue) => newValue && change("subtitles", newValue)}
        />
        <Autocomplete
          options={["All", "Child allowed", "7 years", "11 years", "Unknown"]}
          renderInput={(params) => (
            <TextField {...params} label="Age limit" variant="outlined" />
          )}
          value={value.ageLimit}
          onChange={(e, newValue) => newValue && change("ageLimit", newValue)}
        />
      </Row>
      <ToggleButtonGroup<DisplayOption>
        size="small"
        value={value.display}
        options={[
          { value: "movies", children: <List /> },
          { value: "shows", children: <AvTimer /> },
        ]}
        onChange={(e, newValue) => newValue && change("display", newValue)}
      />
    </>
  );
};

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  margin: 8px 0;
`;
