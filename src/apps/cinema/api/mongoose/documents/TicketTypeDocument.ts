import { Document } from "mongoose";
import { TicketType } from "../../../shared/types/TicketType";

export type TicketTypeDocument = TicketType & Document;
