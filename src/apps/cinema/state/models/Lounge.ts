import { CinemaId } from "./Cinema";

export type LoungeId = Opaque<number, "LoungeId">;

export type Lounge = {
  cinemaId: CinemaId;
  loungeId: LoungeId;
  name: string;
  seats: number;
};
