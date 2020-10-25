import { StoreOperationStatus } from "./StoreOperationStatus";
import { Map } from "immutable";
import { StoreActions } from "./StoreActions";

export type StoreStatuses = Map<StoreActions, StoreOperationStatus>;
