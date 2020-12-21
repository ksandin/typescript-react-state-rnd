import { Model } from "mongoose";
import { UserSession } from "../../shared/types/UserSession";
import { typesafeProjection } from "../../../../lib/mongoose-tsextensions/typesafeProjection";
import { MovieDocument } from "../documents/MovieDocument";
import { CinemaDocument } from "../documents/CinemaDocument";
import { LoungeDocument } from "../documents/LoungeDocument";
import { TicketTypeDocument } from "../documents/TicketTypeDocument";

export const getUserSession = async ({
  MovieModel,
  CinemaModel,
  LoungeModel,
  TicketTypeModel,
}: {
  MovieModel: Model<MovieDocument>;
  CinemaModel: Model<CinemaDocument>;
  LoungeModel: Model<LoungeDocument>;
  TicketTypeModel: Model<TicketTypeDocument>;
}): Promise<UserSession> => {
  const [movieNames, cinemas, lounges, ticketTypes] = await Promise.all([
    MovieModel.find().select(
      typesafeProjection(MovieModel, "name", "movieId") + "- _id"
    ),
    CinemaModel.find(),
    LoungeModel.find(),
    TicketTypeModel.find(),
  ]);
  return {
    movieNames,
    cinemas,
    lounges,
    defaultTicketTypeId: ticketTypes[0]?.ticketTypeId,
    ticketTypes,
  };
};
