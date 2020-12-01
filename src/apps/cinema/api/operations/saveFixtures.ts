import { movies } from "../fixtures/movies";
import { CinemaModels } from "../createModels";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";
import { ticketTypes } from "../fixtures/ticketTypes";

export const saveFixtures = ({
  MovieModel,
  CinemaModel,
  LoungeModel,
  TicketTypeModel,
}: CinemaModels) =>
  Promise.all([
    MovieModel.insertMany(movies),
    CinemaModel.insertMany(cinemas),
    LoungeModel.insertMany(lounges),
    TicketTypeModel.insertMany(ticketTypes),
  ]);
