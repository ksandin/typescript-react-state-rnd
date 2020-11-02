import { ActionStatus } from "./ActionStatus";

export type Dispatch = Readonly<{
  pending: number;
  status: ActionStatus;
}>;
