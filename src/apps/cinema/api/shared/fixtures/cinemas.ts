import { Cinema, CinemaId } from "../../../shared/types/Cinema";
import { MovieLanguage } from "../../../shared/types/MovieLanguage";

const languages = Object.values(MovieLanguage);

export const createCinemas = (newId: () => CinemaId): Cinema[] =>
  languages.map((language) => ({
    name: `${language} Cinema`,
    cinemaId: newId(),
  }));
