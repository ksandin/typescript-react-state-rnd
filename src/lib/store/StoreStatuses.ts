import { StoreOperationStatus } from "./StoreOperationStatus";

export type StoreStatuses = {
  create: StoreOperationStatus;
  update: StoreOperationStatus;
  delete: StoreOperationStatus;
};
