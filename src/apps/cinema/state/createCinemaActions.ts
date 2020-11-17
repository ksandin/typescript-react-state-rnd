import { Repository } from "../../../lib/store/Repository";
import { CinemaState } from "./CinemaState";

export const createCinemaActions = (repository: Repository<CinemaState>) => ({
  setLocation: async (location: string) =>
    repository.update({ ...repository.state, location }),
});
