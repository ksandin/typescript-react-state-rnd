import { CinemaId } from "./Cinema";

export type LoungeId = Opaque<string, "LoungeId">;

export type Lounge = {
  cinemaId: CinemaId;
  loungeId: LoungeId;
  name: string;
  seats: number;
};
