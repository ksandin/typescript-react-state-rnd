import React, { useState } from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { Button, TextField, Typography } from "@material-ui/core";
import { PageActions } from "../components/PageActions";
import { BookingConfirmationSummary } from "../components/BookingConfirmationSummary";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { ProgressButton } from "../components/ProgressButton";
import { useRouter } from "react-router5";
import { useCinemaSelector } from "../hooks/useCinemaSelector";

export const BookingConfirmationPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("your@email.com");
  const { snackbar, validate } = useEmailValidator(email);
  const bookingSession = useCinemaSelector((state) => state.bookingSession);
  const [{ makeBooking }, dispatches] = useCinemaDispatcher();
  const submitBooking = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (validate(e)) {
      const { type } = await makeBooking.withError();
      if (type === "success") {
        router.navigate("booking-success");
      }
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" paragraph>
        Booking summary
      </Typography>
      {bookingSession?.details && (
        <BookingConfirmationSummary
          tickets={bookingSession.booking.tickets}
          {...bookingSession?.details}
        />
      )}
      <TextField
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PageActions>
        <Link routeName="booking-seat-selection">
          <Button variant="outlined">Return to seat selection</Button>
        </Link>
        <ProgressButton
          variant="contained"
          color="primary"
          pending={dispatches.makeBooking.status === "pending"}
          onClick={submitBooking}
        >
          Make booking
        </ProgressButton>
        {dispatches.makeBooking.error}
      </PageActions>
      {snackbar}
    </Container>
  );
};

const useEmailValidator = (email: string) =>
  useSnackbarValidator(() => {
    if (!email) {
      return "You have to enter an e-mail address";
    }
    if (!emailRegex.test(email)) {
      return "You have to enter a valid e-mail address";
    }
  });

const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
