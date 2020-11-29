import { TicketCounts } from "../models/TicketCounts";

export const totalCounts = (counts: TicketCounts) =>
  Array.from(counts.values()).reduce((a, b) => a + b, 0);
