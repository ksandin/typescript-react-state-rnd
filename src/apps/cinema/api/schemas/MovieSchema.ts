import { documentSchemaDefinition } from "../../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { MovieAgeLimit } from "../../shared/types/MovieAgeLimit";
import { MovieGenre } from "../../shared/types/MovieGenre";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { MovieDocument } from "../documents/MovieDocument";
import { NamedSchema } from "../../../../lib/mongoose-tsextensions/NamedSchema";

export const MovieSchema = new NamedSchema(
  "Movie",
  documentSchemaDefinition<MovieDocument>({
    movieId: {
      type: NamedSchema.Types.ObjectId,
      index: true,
      required: true,
      unique: true,
    },
    ageLimit: {
      type: String,
      enum: Object.values(MovieAgeLimit),
      required: true,
    },
    genres: {
      type: [String],
      enum: Object.values(MovieGenre),
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    runtime: {
      type: Number,
      required: true,
    },
    premiereDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bannerUrl: {
      type: String,
      required: true,
    },
    cardUrl: {
      type: String,
      required: true,
    },
    trailerUrl: {
      type: String,
      required: true,
    },
    snapshotUrls: {
      type: [String],
      required: true,
    },
    language: {
      type: String,
      enum: Object.values(MovieLanguage),
      required: true,
    },
    cast: {
      type: [String],
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
  })
);
