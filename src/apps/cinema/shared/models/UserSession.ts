import { Cinema } from "./Cinema";
import { Lounge } from "./Lounge";
import { Movie } from "./Movie";
import { TicketType, TicketTypeId } from "./TicketType";

export type UserSession = {
  cinemas: Cinema[];
  lounges: Lounge[];
  movieNames: Pick<Movie, "name" | "movieId">[];
  ticketTypes: TicketType[];
  defaultTicketTypeId?: TicketTypeId;
};
