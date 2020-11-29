import { LoungeSeat } from "../models/LoungeSeat";

export type GetSeatsForShowResponse = {
  allSeats: LoungeSeat[];
  reservedSeats: LoungeSeat[];
};
