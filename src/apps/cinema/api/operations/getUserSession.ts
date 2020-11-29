import { UserSession } from "../../shared/models/UserSession";
import { movies } from "../fixtures/movies";
import { cinemas } from "../fixtures/cinemas";
import { lounges } from "../fixtures/lounges";
import { TicketTypeId } from "../../shared/models/TicketType";
import { Price } from "../../shared/models/Price";

export const getUserSession = (): UserSession => ({
  movieNames: movies.map(({ name, movieId }) => ({ name, movieId })),
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
