import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete, AutocompleteProps } from "@material-ui/lab";

export type LocationPickerProps = Omit<
  AutocompleteProps<string, false, false, false>,
  "renderInput"
>;

export const LocationPicker: React.FC<LocationPickerProps> = (props) => (
  <Autocomplete
    renderInput={(params) => (
      <TextField {...params} label="City" variant="outlined" />
    )}
    {...props}
  />
);
