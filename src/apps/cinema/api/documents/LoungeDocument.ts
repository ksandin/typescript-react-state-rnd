import { Document } from "mongoose";
import { Lounge } from "../../shared/models/Lounge";

export type LoungeDocument = Lounge & Document;
