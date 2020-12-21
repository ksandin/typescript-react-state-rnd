import { CreateQuery, Document, Model, UpdateQuery } from "mongoose";
import { CrudAdapter } from "./CrudAdapter";

export const createCrudMongooseAdapter = <
  TClientModelId,
  TClientModel,
  TDocument extends Document
>(
  mongooseModel: Model<TDocument>,
  getClientInstanceId: (instance: TClientModel) => TClientModelId,
  getCreateQuery: (instance: TClientModel) => CreateQuery<TDocument>,
  getUpdateQuery: (instance: TClientModel) => UpdateQuery<TDocument>,
  createClientInstance: (document: TDocument) => TClientModel
): CrudAdapter<TClientModelId, TClientModel> => {
  return {
    id: getClientInstanceId,
    create: async (instance) =>
      createClientInstance(
        await mongooseModel.create(getCreateQuery(instance))
      ),
    readAll: async () => {
      const allDocuments = await mongooseModel.find();
      return allDocuments.map(createClientInstance);
    },
    update: async (instance) => {
      const instanceId = getClientInstanceId(instance);
      const document = await mongooseModel.findByIdAndUpdate(
        instanceId,
        getUpdateQuery(instance),
        { new: true }
      );
      if (!document) {
        throw new Error(`Could not find document by id: ${instanceId}`);
      }
      return createClientInstance(document);
    },
    delete: async (id) => {
      const result = await mongooseModel.findByIdAndDelete(id);
      if (!result) {
        throw new Error(`Could not find document by id: ${id}`);
      }
    },
  };
};
