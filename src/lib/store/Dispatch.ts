import { DispatchStatus } from "./DispatchStatus";

export type Dispatch = Readonly<{
  pending: number;
  status: DispatchStatus;
  error?: string;
}>;
