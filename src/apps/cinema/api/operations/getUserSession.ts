import { UserSession } from "../../shared/types/UserSession";
import { CinemaModels } from "../createModels";
import { typesafeProjection } from "../../../../lib/mongoose-tsextensions/typesafeProjection";

export const getUserSession = async ({
  MovieModel,
  CinemaModel,
  LoungeModel,
  TicketTypeModel,
}: CinemaModels): Promise<UserSession> => {
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
