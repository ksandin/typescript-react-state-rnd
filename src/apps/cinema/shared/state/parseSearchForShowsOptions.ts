import { omit } from "lodash";
import { SearchForShowsOptions } from "../requests/SearchForShowsOptions";

export const parseSearchForShowsOptions = (
  json: any
): SearchForShowsOptions => {
  const props = json as Record<keyof SearchForShowsOptions, any>;
  return {
    ...omit(props, "date"),
    date: new Date(props.date as string),
  };
};
