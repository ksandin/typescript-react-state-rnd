import { ActionStatusMeta } from "./ActionStatusMeta";

export type ActionStatuses<ActionNames extends keyof any> = Readonly<
  Record<ActionNames, ActionStatusMeta>
>;
