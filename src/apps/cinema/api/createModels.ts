import { Connection } from "mongoose";
import { MovieSchema } from "./schemas/MovieSchema";
import { MovieDocument } from "./documents/MovieDocument";

export type CinemaModels = ReturnType<typeof createModels>;

export const createModels = (conn: Connection) => ({
  MovieModel: conn.model<MovieDocument>("Movie", MovieSchema),
});
