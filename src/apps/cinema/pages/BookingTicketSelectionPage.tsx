import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { TicketCountControl } from "../components/TicketCountControl";
import { Button, List, Snackbar } from "@material-ui/core";
import { CenterHorizontally } from "../components/CenterHorizontally";

export const BookingTicketSelectionPage = () => {
  const [regularCount, setRegularCount] = useState(0);
  const [pensionerCount, setPensionerCount] = useState(0);
  const totalTicketCount = regularCount + pensionerCount;
  const { snackbar, validate } = useTicketCountValidation(totalTicketCount);

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
      <CenterHorizontally>
        <Link routeName="booking-seat-selection">
          <Button variant="contained" color="primary" onClick={validate}>
            Proceed to seat selection
          </Button>
        </Link>
      </CenterHorizontally>
      {snackbar}
    </Container>
  );
};

const useTicketCountValidation = (count: number) => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const isValid = () => count > 0;
  const validate = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isValid()) {
      setOpen(true);
      // Stops links and parent elements that might have click event handlers
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const snackbar = (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        You must select at least one ticket!
      </Alert>
    </Snackbar>
  );
  return { snackbar, validate };
};
