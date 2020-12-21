import { Types } from "mongoose";
import { CinemaModels } from "../createModels";
import { createMovies } from "../../shared/fixtures/movies";
import { createCinemas } from "../../shared/fixtures/cinemas";
import { createLounges } from "../../shared/fixtures/lounges";
import { createTicketTypes } from "../../shared/fixtures/ticketTypes";
import { createRecommendations } from "../../shared/fixtures/recommendations";
import { createShows } from "../../shared/fixtures/shows";

export const saveFixtures = ({
  MovieModel,
  CinemaModel,
  LoungeModel,
  TicketTypeModel,
  RecommendationModel,
  ShowModel,
}: CinemaModels) => {
  const movies = createMovies(newId);
  const cinemas = createCinemas(newId);
  const lounges = createLounges(cinemas, newId);
  const ticketTypes = createTicketTypes(newId);
  const recommendations = createRecommendations(movies, newId);
  const shows = createShows(movies, lounges, cinemas, newId);
  return Promise.all([
    MovieModel.insertMany(movies),
    CinemaModel.insertMany(cinemas),
    LoungeModel.insertMany(lounges),
    TicketTypeModel.insertMany(ticketTypes),
    RecommendationModel.insertMany(recommendations),
    ShowModel.insertMany(shows),
  ]);
};

const newId = <Id extends string>() => Types.ObjectId().toString() as Id;
