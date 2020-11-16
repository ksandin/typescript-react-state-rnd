import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { CenterHorizontally } from "../components/CenterHorizontally";

export const BookingSeatSelectionPage = () => {
  const [seats, setSeats] = useState<string[]>([]);
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
      <CenterHorizontally>
        <Link routeName="booking-ticket-selection">
          <Button variant="outlined">Return to ticket selection</Button>
        </Link>
        <Link routeName="booking-confirmation">
          <Button variant="contained" color="primary">
            proceed to confirmation
          </Button>
        </Link>
      </CenterHorizontally>
    </Container>
  );
};
