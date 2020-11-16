import React, { useState } from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { TicketCountControl } from "../components/TicketCountControl";
import { Button, List } from "@material-ui/core";
import { CenterHorizontally } from "../components/CenterHorizontally";

export const BookingTicketSelectionPage = () => {
  const [regularCount, setRegularCount] = useState(0);
  const [pensionerCount, setPensionerCount] = useState(0);
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
          <Button variant="contained" color="primary">
            Proceed to seat selection
          </Button>
        </Link>
      </CenterHorizontally>
    </Container>
  );
};
