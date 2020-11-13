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
