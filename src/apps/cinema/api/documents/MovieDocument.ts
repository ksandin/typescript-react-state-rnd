import { Document } from "mongoose";
import { Movie } from "../../shared/models/Movie";

export type MovieDocument = Movie & Document;
