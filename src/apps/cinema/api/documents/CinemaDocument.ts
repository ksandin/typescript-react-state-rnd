import { Document } from "mongoose";
import { Cinema } from "../../shared/models/Cinema";

export type CinemaDocument = Cinema & Document;
