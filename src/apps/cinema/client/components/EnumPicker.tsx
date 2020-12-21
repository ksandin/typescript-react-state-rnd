import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";

export type EnumControlProps<T> = {
  Enum: { [s: string]: T };
  label: string;
  onChange: (newValue: T | undefined) => void;
  value: T | undefined;
};

const empty = "";
export function EnumPicker<T>({
  Enum,
  label,
  onChange = noop,
  value,
}: EnumControlProps<T>) {
  return (
    <Autocomplete<T | string, false, false, true>
      options={Object.values(Enum)}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      value={value || empty}
      onChange={(e, newValue) =>
        onChange(newValue === empty ? undefined : (newValue as T))
      }
      freeSolo
    />
  );
}

const noop = () => {};
