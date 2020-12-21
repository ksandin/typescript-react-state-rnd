import { Document } from "mongoose";
import { Booking } from "../../../shared/types/Booking";

export type BookingDocument = Booking & Document;
