import { Document } from "mongoose";
import { Movie } from "../../shared/types/Movie";

export type MovieDocument = Movie & Document;
