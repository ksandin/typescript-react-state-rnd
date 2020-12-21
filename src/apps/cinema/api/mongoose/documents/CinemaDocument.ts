import { Document } from "mongoose";
import { Cinema } from "../../../shared/types/Cinema";

export type CinemaDocument = Cinema & Document;
