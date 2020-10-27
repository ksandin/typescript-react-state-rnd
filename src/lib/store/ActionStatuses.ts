import { Map } from "immutable";
import { ActionStatus } from "./ActionStatus";

export type ActionStatuses<ActionNames extends keyof any> = Map<
  ActionNames,
  ActionStatus
>;
