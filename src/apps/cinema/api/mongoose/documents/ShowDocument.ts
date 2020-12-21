import { Document } from "mongoose";
import { Show } from "../../../shared/types/Show";
import { MovieDocument } from "./MovieDocument";
import { CinemaDocument } from "./CinemaDocument";
import { LoungeDocument } from "./LoungeDocument";

export type ShowDocument = Show & Document;

export type ShowVirtuals = {
  movie: MovieDocument;
  lounge: LoungeDocument;
  cinema: CinemaDocument;
};
