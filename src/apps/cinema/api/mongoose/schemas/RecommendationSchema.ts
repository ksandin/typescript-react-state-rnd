import { documentSchemaDefinition } from "../../../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { NamedSchema } from "../../../../../lib/mongoose-tsextensions/NamedSchema";
import { RecommendationDocument } from "../documents/RecommendationDocument";

export const RecommendationSchema = new NamedSchema(
  "Recommendation",
  documentSchemaDefinition<RecommendationDocument>({
    recommendationId: {
      type: NamedSchema.Types.ObjectId,
      index: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      get: (jsonString: string) => JSON.parse(jsonString),
      set: (queryObject: Object) => JSON.stringify(queryObject),
      required: true,
    },
    isHero: {
      type: Boolean,
    },
  })
);
