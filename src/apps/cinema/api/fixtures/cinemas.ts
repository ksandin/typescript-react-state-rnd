import { without } from "lodash";
import { Types } from "mongoose";
import { Cinema, CinemaId } from "../../shared/types/Cinema";
import { MovieLanguage } from "../../shared/types/MovieLanguage";

const languages = without(Object.values(MovieLanguage), MovieLanguage.All);

export const cinemas: Cinema[] = languages.map((language) => ({
  name: `${language} Cinema`,
  cinemaId: Types.ObjectId().toString() as CinemaId,
}));
