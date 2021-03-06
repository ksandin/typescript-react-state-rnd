import { Connection } from "mongoose";
import { MovieDocument } from "./documents/MovieDocument";
import { CinemaDocument } from "./documents/CinemaDocument";
import { LoungeDocument } from "./documents/LoungeDocument";
import { MovieSchema } from "./schemas/MovieSchema";
import { LoungeSchema } from "./schemas/LoungeSchema";
import { CinemaSchema } from "./schemas/CinemaSchema";
import { TicketTypeSchema } from "./schemas/TicketTypeSchema";
import { TicketTypeDocument } from "./documents/TicketTypeDocument";
import { RecommendationDocument } from "./documents/RecommendationDocument";
import { RecommendationSchema } from "./schemas/RecommendationSchema";
import { ShowDocument } from "./documents/ShowDocument";
import { ShowSchema } from "./schemas/ShowSchema";
import { BookingDocument } from "./documents/BookingDocument";
import { BookingSchema } from "./schemas/BookingSchema";

export type CinemaModels = ReturnType<typeof createModels>;

export const createModels = (conn: Connection) => ({
  MovieModel: conn.model<MovieDocument>(MovieSchema.name, MovieSchema),
  CinemaModel: conn.model<CinemaDocument>(CinemaSchema.name, CinemaSchema),
  LoungeModel: conn.model<LoungeDocument>(LoungeSchema.name, LoungeSchema),
  TicketTypeModel: conn.model<TicketTypeDocument>(
    TicketTypeSchema.name,
    TicketTypeSchema
  ),
  RecommendationModel: conn.model<RecommendationDocument>(
    RecommendationSchema.name,
    RecommendationSchema
  ),
  ShowModel: conn.model<ShowDocument>(ShowSchema.name, ShowSchema),
  BookingModel: conn.model<BookingDocument>(BookingSchema.name, BookingSchema),
});
