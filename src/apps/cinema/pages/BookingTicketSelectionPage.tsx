import React from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { TicketCountControl } from "../components/TicketCountControl";
import { Button, List } from "@material-ui/core";
import { PageActions } from "../components/PageActions";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { totalCounts } from "../functions/totalCounts";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";

const usePageState = () =>
  useCinemaSelector(({ ticketTypes, booking }) => ({
    ticketTypes,
    booking,
  }));

export const BookingTicketSelectionPage = () => {
  const { ticketTypes, booking } = usePageState();
  const [{ setBookingTickets }] = useCinemaDispatcher();

  const { snackbar, validate } = useSnackbarValidator(() => {
    if (totalCounts(booking.tickets) <= 0) {
      return "You must select at least one ticket!";
    }
  });
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
              setBookingTickets(booking.tickets.set(ticketTypeId, count))
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
