import React, { useState } from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { TicketCountControl } from "../components/TicketCountControl";
import { Button, List } from "@material-ui/core";
import { PageActions } from "../components/PageActions";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";
import { totalCounts } from "../functions/totalCounts";
import { useCinemaSelector } from "../hooks/useCinemaSelector";

export const BookingTicketSelectionPage = () => {
  const ticketTypes = useCinemaSelector(({ ticketTypes }) => ticketTypes);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const { snackbar, validate } = useSnackbarValidator(() => {
    if (totalCounts(counts) <= 0) {
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
            value={counts[ticketTypeId] || 0}
            onChange={(count) =>
              setCounts({ ...counts, [ticketTypeId]: count })
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
