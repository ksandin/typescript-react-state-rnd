export type StoreAdapter<Id, Model> = {
  create: (item: Model) => Promise<Model>;
  update: (item: Model) => Promise<Model>;
  delete: (item: Model) => Promise<Model>;
  id: (item: Model) => Id;
};
