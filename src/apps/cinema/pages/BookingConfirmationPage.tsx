import React, { ChangeEvent, useState } from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { Button, TextField, Typography } from "@material-ui/core";
import { PageActions } from "../components/PageActions";
import { BookingConfirmationSummary } from "../components/BookingConfirmationSummary";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";

const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

export const BookingConfirmationPage = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setEmail(e.target.value);
  const { snackbar, validate } = useSnackbarValidator(() => {
    if (!email) {
      return "You have to enter an e-mail address";
    }
    if (!emailRegex.test(email)) {
      return "You have to enter a valid e-mail address";
    }
  });
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" paragraph>
        Booking summary
      </Typography>
      <BookingConfirmationSummary />
      <TextField label="E-mail" value={email} onChange={handleEmailChange} />
      <PageActions>
        <Link routeName="booking-seat-selection">
          <Button variant="outlined">Return to seat selection</Button>
        </Link>
        <Link routeName="booking-success">
          <Button variant="contained" color="primary" onClick={validate}>
            Simulate payment success
          </Button>
        </Link>
        <Link routeName="booking-failure">
          <Button variant="contained" color="secondary" onClick={validate}>
            Simulate payment failure
          </Button>
        </Link>
      </PageActions>
      {snackbar}
    </Container>
  );
};
