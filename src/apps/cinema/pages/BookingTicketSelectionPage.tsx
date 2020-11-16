import React, { useState } from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { TicketCountControl } from "../components/TicketCountControl";
import { Button, List } from "@material-ui/core";
import { PageActions } from "../components/PageActions";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";

export const BookingTicketSelectionPage = () => {
  const [regularCount, setRegularCount] = useState(0);
  const [pensionerCount, setPensionerCount] = useState(0);
  const totalTicketCount = regularCount + pensionerCount;
  const { snackbar, validate } = useSnackbarValidator(() => {
    if (totalTicketCount <= 0) {
      return "You must select at least one ticket!";
    }
  });

  return (
    <Container>
      <List>
        <TicketCountControl
          type="Regular ticket"
          price="135kr/ea"
          value={regularCount}
          onChange={setRegularCount}
        />
        <TicketCountControl
          type="Pensioner ticket"
          price="108kr/ea"
          value={pensionerCount}
          onChange={setPensionerCount}
        />
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
