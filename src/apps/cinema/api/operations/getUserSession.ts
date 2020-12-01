import { Model, Document } from "mongoose";
import { UserSession } from "../../shared/models/UserSession";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";
import { TicketTypeId } from "../../shared/models/TicketType";
import { Price } from "../../shared/models/Price";
import { MovieDocument } from "../documents/MovieDocument";
import { typesafeProjection } from "../../../../lib/mongoose-tsextensions/typesafeProjection";

export const getUserSession = async (
  movies: Model<MovieDocument>
): Promise<UserSession> => ({
  movieNames: await movies
    .find()
    .select(typesafeProjection(movies, "name", "movieId") + " - _id"),
  cinemas: cinemas,
  lounges: lounges,
  defaultTicketTypeId: 1 as TicketTypeId,
  ticketTypes: [
    {
      name: "Regular ticket",
      ticketTypeId: 1 as TicketTypeId,
      price: 120 as Price,
    },
    {
      name: "Pensioner ticket",
      ticketTypeId: 2 as TicketTypeId,
      price: 90 as Price,
    },
  ],
});
