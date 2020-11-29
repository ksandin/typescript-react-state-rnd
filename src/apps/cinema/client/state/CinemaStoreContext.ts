import { createContext } from "react";
import { createCinemaStore } from "./createCinemaStore";
import { defaultCinemaState } from "../fixtures/defaultCinemaState";

export const CinemaStoreContext = createContext(
  createCinemaStore(defaultCinemaState)
);
