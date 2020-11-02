import { Dispatch } from "./Dispatch";

export const createDispatch = (): Dispatch => ({
  pending: 0,
  status: "resolved",
});
