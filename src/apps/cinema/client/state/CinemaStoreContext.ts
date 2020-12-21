import { createContext } from "react";
import { createCinemaStore } from "./createCinemaStore";
import { defaultCinemaState } from "./defaultCinemaState";

export const CinemaStoreContext = createContext(
  createCinemaStore(defaultCinemaState)
);
