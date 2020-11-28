import React, { useEffect } from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { TicketCountControl } from "../components/TicketCountControl";
import { Button, List } from "@material-ui/core";
import { PageActions } from "../components/PageActions";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { totalCounts } from "../functions/totalCounts";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { useRoute } from "react-router5";
import { ShowId } from "../state/models/Show";

const usePageState = () =>
  useCinemaSelector(({ ticketTypes, bookingSession }) => ({
    ticketTypes,
    booking: bookingSession?.booking,
  }));

export type BookingTicketSelectionRouteParams = {
  showId: ShowId;
  keepBooking?: boolean;
};

export const BookingTicketSelectionPage = () => {
  const { route } = useRoute();
  const {
    showId,
    keepBooking,
  } = route.params as BookingTicketSelectionRouteParams;
  const { ticketTypes, booking } = usePageState();
  const [
    { updateBooking, newBookingSession },
    dispatches,
  ] = useCinemaDispatcher();
  useEffect(() => {
    if (!keepBooking) {
      newBookingSession(showId);
    }
  }, [keepBooking, newBookingSession, showId]);

  const { snackbar, validate } = useSnackbarValidator(() => {
    if (!booking || totalCounts(booking.tickets) <= 0) {
      return "You must select at least one ticket!";
    }
  });

  if (dispatches.newBookingSession.status === "pending") {
    return <span>Loading...</span>;
  }
  if (!booking) {
    return <span>Oops, something went wrong</span>;
  }

  return (
    <Container>
      <List>
        {ticketTypes.map(({ name, ticketTypeId, price }) => (
          <TicketCountControl
            key={ticketTypeId}
            type={name}
            price={price}
            value={booking.tickets.get(ticketTypeId) || 0}
            onChange={(count) =>
              updateBooking({
                tickets: booking.tickets.set(ticketTypeId, count),
              })
            }
          />
        ))}
      </List>
      <br />
      <PageActions>
        <Link routeName="booking-seat-selection">
          <Button variant="contained" color="primary" onClick={validate}>
            Proceed to seat selection
          </Button>
        </Link>
      </PageActions>
      {snackbar}
    </Container>
  );
};
