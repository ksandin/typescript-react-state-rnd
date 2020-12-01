import { UserSession } from "../../shared/models/UserSession";
import { TicketTypeId } from "../../shared/models/TicketType";
import { Price } from "../../shared/models/Price";
import { CinemaModels } from "../createModels";
import { typesafeProjection } from "../../../../lib/mongoose-tsextensions/typesafeProjection";

export const getUserSession = async ({
  MovieModel,
  CinemaModel,
  LoungeModel,
}: CinemaModels): Promise<UserSession> => {
  const [movieNames, cinemas, lounges] = await Promise.all([
    MovieModel.find().select(
      typesafeProjection(MovieModel, "name", "movieId") + "- _id"
    ),
    CinemaModel.find(),
    LoungeModel.find(),
  ]);
  return {
    movieNames,
    cinemas,
    lounges,
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
  };
};
