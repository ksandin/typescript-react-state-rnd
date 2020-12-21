export type CinemaId = Opaque<string, "CinemaId">;

export type Cinema = {
  name: string;
  cinemaId: CinemaId;
};
