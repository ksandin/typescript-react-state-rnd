import { Document } from "mongoose";
import { TicketType } from "../../shared/models/TicketType";

export type TicketTypeDocument = TicketType & Document;
