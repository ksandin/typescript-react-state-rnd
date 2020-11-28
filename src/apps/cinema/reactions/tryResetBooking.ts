import { reaction } from "../../../lib/reaction";
import { CinemaState } from "../state/CinemaState";
import { CinemaRouteConfigNode } from "../CinemaRouteConfig";

export const createTryResetBooking = (resetBooking: () => void) =>
  reaction(
    shouldResetBooking,
    (shouldReset: boolean) => shouldReset && resetBooking()
  );

const shouldResetBooking = (
  { defaultTicketTypeId, ticketTypes }: CinemaState,
  config?: CinemaRouteConfigNode
): boolean =>
  defaultTicketTypeId !== undefined &&
  ticketTypes.length > 0 &&
  config !== undefined &&
  !config.isBookingSessionPage;
