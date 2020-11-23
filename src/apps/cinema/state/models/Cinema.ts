export type CinemaId = Opaque<number, "CinemaId">;

export type Cinema = {
  name: string;
  cinemaId: CinemaId;
};
