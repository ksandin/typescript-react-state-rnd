import { Document } from "mongoose";
import { Show } from "../../shared/types/Show";
import { MovieDocument } from "./MovieDocument";

export type ShowDocument = Show & Document;

export type ShowVirtuals = {
  movie: MovieDocument;
};
