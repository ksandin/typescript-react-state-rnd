import { HomePage } from "./pages/HomePage";
import {
  CinemaRouteConfigMap,
  CinemaRouteConfigNode,
} from "./CinemaRouteConfig";
import { BookingConfirmationPage } from "./pages/BookingConfirmationPage";
import { BookingFailurePage } from "./pages/BookingFailurePage";
import { BookingSeatSelectionPage } from "./pages/BookingSeatSelectionPage";
import { BookingSuccessPage } from "./pages/BookingSuccessPage";
import { BookingTicketSelectionPage } from "./pages/BookingTicketSelectionPage";
import { MoviePage } from "./pages/MoviePage";
import { MoviesPage } from "./pages/MoviesPage";
import { TicketsPage } from "./pages/TicketsPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";

const routeList: CinemaRouteConfigNode[] = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: HomePage,
  },
  {
    path: "/booking/confirmation",
    name: "booking-confirmation",
    title: "Booking Confirmation",
    component: BookingConfirmationPage,
  },
  {
    path: "/booking/failure",
    name: "booking-failure",
    title: "Booking Failure",
    component: BookingFailurePage,
  },
  {
    path: "/booking/seats",
    name: "booking-seat-selection",
    title: "Booking Seat Selection",
    component: BookingSeatSelectionPage,
  },
  {
    path: "/booking/success",
    name: "booking-success",
    title: "Booking Success",
    component: BookingSuccessPage,
  },
  {
    path: "/booking/tickets",
    name: "booking-ticket-selection",
    title: "Booking Ticket Selection",
    component: BookingTicketSelectionPage,
  },
  {
    path: "/movie",
    name: "movie",
    title: "Movie",
    component: MoviePage,
  },
  {
    path: "/movies",
    name: "movies",
    title: "Movies",
    component: MoviesPage,
  },
  {
    path: "/tickets",
    name: "tickets",
    title: "Tickets",
    component: TicketsPage,
  },
  {
    path: "/cookie-policy",
    name: "cookie-policy",
    title: "Cookie policy",
    component: CookiePolicyPage,
  },
];

export const cinemaRoutes: CinemaRouteConfigMap = routeList.reduce(
  (map, config) => map.set(config.name, config),
  new Map()
);
