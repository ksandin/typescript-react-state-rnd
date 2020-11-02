import { ActionStatus } from "./ActionStatus";

export type ActionStatusMeta = Readonly<{
  pending: number;
  status: ActionStatus;
}>;
