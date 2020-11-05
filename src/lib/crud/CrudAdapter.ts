export type CrudAdapter<Id, Model> = {
  id: (item: Model) => Id;
  create: (item: Model) => Promise<Model>;
  readAll: () => Promise<Model[]>;
  update: (item: Model) => Promise<Model>;
  delete: (id: Id) => Promise<void>;
};
