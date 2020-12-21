import { CinemaState } from "../../shared/types/CinemaState";
import { createRepository } from "../../../../lib/store/createRepository";
import { createStore } from "../../../../lib/store/createStore";
import { createDispatcher } from "../../../../lib/store/createDispatcher";
import { createCinemaActions } from "./createCinemaActions";

export const createCinemaStore = (state: CinemaState) => {
  const repository = createRepository(state);
  return createStore(
    repository,
    createDispatcher(createCinemaActions(repository))
  );
};
