import { Dispatch } from "./Dispatch";

export type Dispatches<ActionNames extends keyof any> = Readonly<
  Record<ActionNames, Dispatch>
>;
