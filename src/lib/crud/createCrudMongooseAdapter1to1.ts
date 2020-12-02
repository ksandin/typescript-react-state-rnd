import { omit } from "lodash";
import {
  CreateQuery,
  Document,
  DocumentDefinition,
  Model,
  UpdateQuery,
} from "mongoose";
import { documentDefinition } from "../mongoose-tsextensions/documentDefinition";
import { createCrudMongooseAdapter } from "./createCrudMongooseAdapter";

/**
 * Creates a mongoose adapter for when the client and server
 * model properties share the same names and types
 */
export const createCrudMongooseAdapter1to1 = <
  TClientModel extends Omit<DocumentDefinition<TDocument>, "_id">,
  TDocument extends Document,
  TClientModelIdProperty extends keyof TClientModel = keyof TClientModel
>(
  mongooseModel: Model<TDocument>,
  clientIdProperty: TClientModelIdProperty
) => {
  return createCrudMongooseAdapter<
    TClientModel[TClientModelIdProperty],
    TClientModel,
    TDocument
  >(
    mongooseModel,
    (instance) => instance[clientIdProperty],
    (instance) => omit(instance, clientIdProperty) as CreateQuery<TDocument>,
    (instance) =>
      (omit(instance, clientIdProperty) as unknown) as UpdateQuery<TDocument>,
    (document) =>
      (({
        ...omit(documentDefinition(document), "_id"),
        [clientIdProperty]: document.id,
      } as unknown) as TClientModel)
  );
};
