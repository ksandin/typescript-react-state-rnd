import TypedEmitter from "typed-emitter";
import { Dispatches } from "./Dispatches";

export type DispatcherEvents<ActionNames extends keyof any> = TypedEmitter<{
  change: (
    newDispatches: Dispatches<ActionNames>,
    oldDispatches: Dispatches<ActionNames>
  ) => void;
}>;
