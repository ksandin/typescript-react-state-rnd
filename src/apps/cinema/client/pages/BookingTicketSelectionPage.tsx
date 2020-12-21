import React, { useEffect } from "react";
import { Button, List } from "@material-ui/core";
import { useRoute } from "react-router5";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { TicketCountControl } from "../components/TicketCountControl";
import { PageActions } from "../components/PageActions";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { totalCounts } from "../../shared/functions/totalCounts";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { ShowId } from "../../shared/types/Show";

const usePageState = () =>
  useCinemaSelector(({ ticketTypes, bookingSession }) => ({
    ticketTypes,
    booking: bookingSession?.booking,
    availableSeats: bookingSession?.availableSeats || [],
  }));

export type RouteParams = {
  showId: ShowId;
  keepBooking?: boolean;
};

export const BookingTicketSelectionPage = () => {
  const { route } = useRoute();
  const { showId, keepBooking } = route.params as RouteParams;
  const { ticketTypes, booking, availableSeats } = usePageState();
  const [actions, dispatches] = useCinemaDispatcher();

  useEffect(() => {
    if (!keepBooking) {
      actions.newBookingSession(showId);
    }
  }, [keepBooking, actions, showId]);

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
              actions.updateBooking({
                tickets: booking.tickets.set(ticketTypeId, count),
              })
            }
            acceptNewValue={(value) => {
              const newTicketCounts = booking.tickets.set(ticketTypeId, value);
              const total = totalCounts(newTicketCounts);
              return value >= 0 && total <= availableSeats.length;
            }}
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
