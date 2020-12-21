import { LoungeSeat } from "../types/LoungeSeat";

export type GetSeatsForShowResponse = {
  allSeats: LoungeSeat[];
  reservedSeats: LoungeSeat[];
};
