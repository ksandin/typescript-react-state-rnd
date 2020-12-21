import { Map } from "immutable";
import { TicketTypeId } from "./TicketType";

export type TicketCounts = Map<TicketTypeId, number>;
