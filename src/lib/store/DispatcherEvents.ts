import TypedEmitter from "typed-emitter";
import { ActionStatuses } from "./ActionStatuses";

export type DispatcherEvents<ActionNames extends keyof any> = TypedEmitter<{
  change: (
    newStatuses: ActionStatuses<ActionNames>,
    oldStatuses: ActionStatuses<ActionNames>
  ) => void;
}>;
