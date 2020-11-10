import { Memory } from "@material-ui/icons";
import { Home } from "../pages/Home";
import { RouteConfigMap } from "../../root/RouteConfig";
import { BookingConfirmation } from "../pages/BookingConfirmation";
import { BookingFailure } from "../pages/BookingFailure";
import { BookingSeatSelection } from "../pages/BookingSeatSelection";
import { BookingSuccess } from "../pages/BookingSuccess";
import { BookingTicketSelection } from "../pages/BookingTicketSelection";
import { Movie } from "../pages/Movie";
import { Movies } from "../pages/Movies";
import { Tickets } from "../pages/Tickets";

const routeList = [
  {
    path: "/",
    name: "home",
    title: "Home",
    app: "",
    component: Home,
    icon: Memory,
  },
  {
    path: "/booking/confirmation",
    name: "booking-confirmation",
    title: "Booking Confirmation",
    app: "",
    component: BookingConfirmation,
    icon: Memory,
  },
  {
    path: "/booking/failure",
    name: "booking-failure",
    title: "Booking Failure",
    app: "",
    component: BookingFailure,
    icon: Memory,
  },
  {
    path: "/booking/seats",
    name: "booking-seat-selection",
    title: "Booking Seat Selection",
    app: "",
    component: BookingSeatSelection,
    icon: Memory,
  },
  {
    path: "/booking/success",
    name: "booking-success",
    title: "Booking Success",
    app: "",
    component: BookingSuccess,
    icon: Memory,
  },
  {
    path: "/booking/tickets",
    name: "booking-ticket-selection",
    title: "Booking Ticket Selection",
    app: "",
    component: BookingTicketSelection,
    icon: Memory,
  },
  {
    path: "/movie",
    name: "movie",
    title: "Movie",
    app: "",
    component: Movie,
    icon: Memory,
  },
  {
    path: "/movies",
    name: "movies",
    title: "Movies",
    app: "",
    component: Movies,
    icon: Memory,
  },
  {
    path: "/tickets",
    name: "tickets",
    title: "Tickets",
    app: "",
    component: Tickets,
    icon: Memory,
  },
];

export const routes: RouteConfigMap = routeList.reduce(
  (map, config) => map.set(config.name, config),
  new Map()
);
