import { CrudIdentityFactory } from "./CrudIdentityFactory";

export type CrudAdapter<Id, Model> = {
  identityFactory: CrudIdentityFactory<Id, Model>;
  create: (item: Model) => Promise<Model>;
  update: (item: Model) => Promise<Model>;
  delete: (item: Model) => Promise<Model>;
};
