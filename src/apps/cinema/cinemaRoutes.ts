import { Home } from "./pages/Home";
import {
  CinemaRouteConfigMap,
  CinemaRouteConfigNode,
} from "./CinemaRouteConfig";
import { BookingConfirmation } from "./pages/BookingConfirmation";
import { BookingFailure } from "./pages/BookingFailure";
import { BookingSeatSelection } from "./pages/BookingSeatSelection";
import { BookingSuccess } from "./pages/BookingSuccess";
import { BookingTicketSelection } from "./pages/BookingTicketSelection";
import { Movie } from "./pages/Movie";
import { Movies } from "./pages/Movies";
import { Tickets } from "./pages/Tickets";
import { CookiePolicy } from "./pages/CookiePolicy";

const routeList: CinemaRouteConfigNode[] = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: Home,
  },
  {
    path: "/booking/confirmation",
    name: "booking-confirmation",
    title: "Booking Confirmation",
    component: BookingConfirmation,
  },
  {
    path: "/booking/failure",
    name: "booking-failure",
    title: "Booking Failure",
    component: BookingFailure,
  },
  {
    path: "/booking/seats",
    name: "booking-seat-selection",
    title: "Booking Seat Selection",
    component: BookingSeatSelection,
  },
  {
    path: "/booking/success",
    name: "booking-success",
    title: "Booking Success",
    component: BookingSuccess,
  },
  {
    path: "/booking/tickets",
    name: "booking-ticket-selection",
    title: "Booking Ticket Selection",
    component: BookingTicketSelection,
  },
  {
    path: "/movie",
    name: "movie",
    title: "Movie",
    component: Movie,
  },
  {
    path: "/movies",
    name: "movies",
    title: "Movies",
    component: Movies,
  },
  {
    path: "/tickets",
    name: "tickets",
    title: "Tickets",
    component: Tickets,
  },
  {
    path: "/cookie-policy",
    name: "cookie-policy",
    title: "Cookie policy",
    component: CookiePolicy,
  },
];

export const cinemaRoutes: CinemaRouteConfigMap = routeList.reduce(
  (map, config) => map.set(config.name, config),
  new Map()
);
