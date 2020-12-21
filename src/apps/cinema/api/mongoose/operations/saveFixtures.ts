import { movies } from "../fixtures/movies";
import { CinemaModels } from "../createModels";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";
import { ticketTypes } from "../fixtures/ticketTypes";
import { recommendations } from "../fixtures/recommendations";
import { shows } from "../fixtures/shows";

export const saveFixtures = ({
  MovieModel,
  CinemaModel,
  LoungeModel,
  TicketTypeModel,
  RecommendationModel,
  ShowModel,
}: CinemaModels) =>
  Promise.all([
    MovieModel.insertMany(movies),
    CinemaModel.insertMany(cinemas),
    LoungeModel.insertMany(lounges),
    TicketTypeModel.insertMany(ticketTypes),
    RecommendationModel.insertMany(recommendations),
    ShowModel.insertMany(shows),
  ]);
