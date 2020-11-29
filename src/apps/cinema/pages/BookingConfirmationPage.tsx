import React, { ChangeEvent, useState } from "react";
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

const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

export const BookingConfirmationPage = () => {
  const router = useRouter();
  const [bookingError, setBookingError] = useState<string>();
  const [email, setEmail] = useState("test@test.com");
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
  const bookingSession = useCinemaSelector((state) => state.bookingSession);
  const [{ makeBooking }, dispatches] = useCinemaDispatcher();
  const submitBooking = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (validate(e)) {
      const error = await makeBooking();
      if (error) {
        setBookingError(error);
      } else {
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
      <TextField label="E-mail" value={email} onChange={handleEmailChange} />
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
        {bookingError}
      </PageActions>
      {snackbar}
    </Container>
  );
};
