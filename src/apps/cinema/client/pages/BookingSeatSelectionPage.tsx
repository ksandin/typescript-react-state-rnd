import React from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { PageActions } from "../components/PageActions";
import { useSnackbarValidator } from "../hooks/useSnackbarValidator";
import { useCinemaSelector } from "../hooks/useCinemaSelector";
import { loungeSeatName } from "../functions/loungeSeatName";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { useDefaultBookingSeats } from "../hooks/useDefaultBookingSeats";

export const BookingSeatSelectionPage = () => {
  const bookingSession = useCinemaSelector((state) => state.bookingSession);
  const [{ updateBooking }] = useCinemaDispatcher();
  useDefaultBookingSeats(bookingSession, updateBooking);
  const { snackbar, validate } = useSnackbarValidator(() => {
    if (selectedSeats.length <= 0) {
      return "You must select at least one seat!";
    }
  });
  if (!bookingSession) {
    return <span>No booking session available</span>;
  }
  const {
    availableSeats,
    booking: { seats: selectedSeats, showId },
  } = bookingSession;
  return (
    <Container>
      <Autocomplete
        options={availableSeats}
        renderInput={(params) => (
          <TextField {...params} label="Seats" variant="outlined" />
        )}
        getOptionLabel={loungeSeatName}
        value={selectedSeats}
        onChange={(e, newValues) => updateBooking({ seats: newValues })}
        multiple
      />
      <br />
      <PageActions>
        <Link
          routeName="booking-ticket-selection"
          routeParams={{ showId, keepBooking: true }}
        >
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
