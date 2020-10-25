export type StoreAdapter<Model> = {
  create: (item: Model) => Promise<Model>;
  update: (item: Model) => Promise<Model>;
  delete: (item: Model) => Promise<Model>;
};
