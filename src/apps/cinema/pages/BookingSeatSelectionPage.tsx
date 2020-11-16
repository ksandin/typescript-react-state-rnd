import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { PageActions } from "../components/PageActions";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";

export const BookingSeatSelectionPage = () => {
  const [seats, setSeats] = useState<string[]>([]);
  const { snackbar, validate } = useSnackbarValidator(() => {
    if (seats.length <= 0) {
      return "You must select at least one seat!";
    }
  });
  return (
    <Container>
      <Autocomplete
        options={[
          "Seat 1",
          "Seat 2 - Extra leg room",
          "Seat 3",
          "Seat 4",
          "Seat 5",
          "Seat 6",
        ]}
        renderInput={(params) => (
          <TextField {...params} label="Seats" variant="outlined" />
        )}
        value={seats}
        onChange={(e, newValues) => setSeats(newValues)}
        multiple
      />
      <br />
      <PageActions>
        <Link routeName="booking-ticket-selection">
          <Button variant="outlined">Return to ticket selection</Button>
        </Link>
        <Link routeName="booking-confirmation">
          <Button variant="contained" color="primary" onClick={validate}>
            Proceed to confirmation
          </Button>
        </Link>
      </PageActions>
      {snackbar}
    </Container>
  );
};
