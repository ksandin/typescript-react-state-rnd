import { documentSchemaDefinition } from "../../../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { LoungeDocument } from "../documents/LoungeDocument";
import { NamedSchema } from "../../../../../lib/mongoose-tsextensions/NamedSchema";
import { CinemaSchema } from "./CinemaSchema";

export const LoungeSchema = new NamedSchema(
  "Lounge",
  documentSchemaDefinition<LoungeDocument>({
    loungeId: {
      type: NamedSchema.Types.ObjectId,
      index: true,
      required: true,
      unique: true,
    },
    cinemaId: {
      type: NamedSchema.Types.ObjectId,
      required: true,
      ref: CinemaSchema.name,
    },
    name: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
  })
);
